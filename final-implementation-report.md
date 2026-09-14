# Chanak Life Skills — Reporte Final de Implementación

Fecha: 2026-09-14 · Proyecto Supabase del SIS: `gepsbesbhsxfyxymemim`

---

## 0. El hallazgo que cambió el encargo

La especificación asumía un pipeline Portal ↔ SIS que había que *endurecer*. La
verificación demostró que **la mitad servidor de ese pipeline nunca se desplegó**:

```sql
SELECT count(*) FROM pg_proc WHERE proname='award_life_skills_coins';  -- 0
```

Funciones Edge realmente desplegadas antes de esta pasada:

```
admin-users        ACTIVE  v1
admin-create-user  ACTIVE  v2
```

`sign-life-skills-token` existía en el repo `chanak-sis` pero **no estaba desplegada**.
Consecuencia real: `app.js` llamaba a una RPC inexistente, el `catch` se tragaba el
error con un `console.warn`, y el alumno veía el toast "+10 ChanakCoins" mientras
**no se registraba absolutamente nada**. Ningún ChanakCoin de Life Skills llegó jamás
al SIS ni al panel de los padres.

No era seguridad débil. Era ausencia de servidor.

---

## 1. Seguridad

### 1.1 No hay sistema de build — el código fuente ES el bundle

```
$ ls
app.js  data.js  index.css  index.html  chanak-seal.png  logo-chanak.png
```

Sin `package.json` ni `dist/`. El grep exigido sobre `dist/` no aplica: todo lo que
está en `app.js`/`data.js` se descarga literalmente al navegador del estudiante.

### 1.2 Grep de secretos sobre los archivos servidos — salida cruda

```
$ grep -rn -E "SECRET|secret_key|secretKey|CHANAK2026|service_role" \
    app.js data.js index.html index.css
(sin resultados)
```

Antes de esta pasada devolvía `app.js:266: if (pinVal === 'CHANAK2026') {`.

**Nota deliberada:** la `SUPABASE_ANON_KEY` sigue en el cliente y **no se reporta como
fuga**. Es una clave publicable, diseñada para vivir en el navegador. La autoridad real
está en el servidor.

### 1.3 Firma de token: un solo mecanismo, en servidor

`sign-life-skills-token` desplegada (`ACTIVE v3`, `verify_jwt: true`). Deriva
`student_id` y `level` de la **sesión autenticada real**, nunca de un parámetro del
cliente. Firma HMAC-SHA256.

Se eliminó el secreto de respaldo escrito en el repositorio:

```diff
- const secretKey = Deno.env.get('LIFE_SKILLS_SECRET') || 'chanak_life_skills_secret_salt_2026_secure';
+ const { data: secretKey, error: secretError } = await admin.rpc('get_life_skills_signing_secret');
+ if (secretError || !secretKey) return ... 500 'Signing key unavailable';
```

El secreto vive **solo en Supabase Vault**, rotado a un valor nuevo de 48 bytes. Se
rotó sin romper nada porque no existía ni un token en circulación firmado con el valor
viejo. La función falla cerrada si Vault no responde.

El accesor está restringido:

```
anon_puede | auth_puede | service_puede
false      | false      | true
```

Prueba de rechazo sin sesión:

```
$ curl -X POST .../sign-life-skills-token -d '{}'                → HTTP 401
$ curl -X POST .../sign-life-skills-token -H "Authorization: Bearer <anon>" → HTTP 401
```

La anon key por sí sola no obtiene token. Solo una sesión de estudiante autenticada.

### 1.4 Idempotencia física

```sql
ALTER TABLE public.chanak_coins ADD COLUMN IF NOT EXISTS idempotency_key text;
CREATE UNIQUE INDEX IF NOT EXISTS chanak_coins_idempotency_key_uniq
  ON public.chanak_coins (idempotency_key) WHERE idempotency_key IS NOT NULL;
```

Índice único **parcial** a propósito: las filas históricas y las que insertan los
triggers `auto_award_coins_*` tienen `idempotency_key` NULL y no se ven afectadas.
Migración puramente aditiva.

La RPC inserta con `ON CONFLICT (idempotency_key) ... DO NOTHING`.

### 1.5 Toggle Estudiante / Mentor — protegido

| Caso | Comportamiento | Verificado |
|---|---|---|
| Token del SIS (siempre estudiante) | Toggle a Mentor no activa; mensaje *"Vista pedagógica restringida a tutores y coordinadores"* | sí |
| Sin token (demo) | Pide PIN, validado en **servidor** | sí |
| Sesión con rol tutor/mentor/coordinator/admin | Acceso sin PIN vía el mismo endpoint | implementado |

Se eliminó el bypass por URL. `?role=admin` ya no concede nada:

```
$ grep -n "params.get('role')" app.js
(sin resultados)
```

Prueba en navegador con `?token=...launch...&role=admin`:

```json
{"vistaMentorActiva":"none",
 "toast":"🔒 Vista pedagógica restringida a tutores y coordinadores",
 "guiaDocenteEnDOM":false}
```

**Prueba desde la consola del navegador** (lo que la especificación exige demostrar):

```json
{"stateEnWindow":"undefined",
 "switchExpuesto":"function",
 "bannerTrasForzar":"none",
 "contenidoMentorEnPagina":false,
 "fuenteDescargada":false}
```

`state` es de ámbito de módulo: no es alcanzable desde `window`. Invocar
`switchRoleView('mentor')` a mano **no** activa la Vista Mentor. Y aunque se forzara,
`state.mentorContent` está vacío: el contenido no está descargado.

El PIN se valida contra el servidor:

```
$ curl -X POST .../life-skills-mentor-content -d '{}'                    → {"error":"Se requiere sesion docente o PIN"}
$ curl -X POST .../life-skills-mentor-content -d '{"pin":"0000"}'        → {"error":"PIN incorrecto"}
$ curl -X POST .../life-skills-mentor-content -d '{"pin":"CHANAK2026"}'  → success: True | via: pin | modulos: 19
```

### 1.6 El contenido de mentor no se descarga al navegador del estudiante

44 campos (`commonError` ×22, `checkpoint` ×22) se extrajeron de `data.js` a la tabla
`life_skills_mentor_content`, con **RLS activada y sin ninguna política**:

```
$ grep -c -E "commonError|checkpoint" data.js index.html
data.js:0
index.html:0
```

Lectura directa de la tabla con la anon key:

```json
{"code":"42501","message":"permission denied for table life_skills_mentor_content"}
```

Y descargando el archivo fuente directamente desde el navegador:
`fetch('/data.js')` → `/commonError|checkpoint/` → **false**.

**Bug encontrado y corregido durante la verificación.** Tras desbloquear Mentor y
volver a Vista Estudiante, el recuadro pedagógico **seguía en el DOM**: el modal de
módulo se dibuja en su propio contenedor y `renderCurrentView()` no lo alcanzaba.
Importa en un equipo compartido de aula. Se añadió `refreshOpenModuleModal()`
([app.js:233](app.js:233)). Verificación tras el arreglo:

```json
{"comoMentor":true,
 "trasVolverAEstudiante":{"cajaGuia":false,"errorComun":false,"textoMentor":false}}
```

---

## 2. ChanakCoins

### 2.1 El servidor decide el monto (R5)

El cliente ya **no** propone la cifra. Payload capturado interceptando `fetch`:

```json
{"llamadaHecha":true,
 "campos":["p_token","p_event","p_ref"],
 "incluyeMonto":false,
 "evento":"session_complete",
 "ref":"done:ls1-1:s1"}
```

`p_amount` desapareció. La RPC mapea evento → monto canónico: 10 (reflexión de
sesión, cuaderno, cápsula), 25 (módulo temático, reto), 50 (proyecto trimestral,
Test RIASEC). Un evento inventado se rechaza.

### 2.2 Pruebas de la RPC (ejecutadas en `BEGIN ... ROLLBACK`, sin escribir nada)

| Caso | Resultado |
|---|---|
| 1. firma forjada (además escalando a `launch`) | `{"error":"invalid_signature","success":false}` |
| 2. token expirado, firma correcta | `{"error":"token_expired","success":false}` |
| 3. evento inventado `give_me_9999_coins` | `{"error":"unknown_event","success":false}` |
| 4. RIASEC en nivel correcto | `{"amount":50,"awarded":true,"duplicate":false}` |
| 5. RIASEC repetido | `{"amount":0,"awarded":false,"duplicate":true}` |
| 6. módulo completo | `{"amount":25,"awarded":true}` |

Confirmación de que el ROLLBACK no dejó rastro:

```sql
SELECT count(*) FROM chanak_coins
WHERE created_by_role='life_skills_portal' OR idempotency_key IS NOT NULL;  -- 0
```

### 2.3 Fallo honesto en vez de monedas fantasma

Con token inválido el alumno ahora ve *"⚠️ No se pudo registrar tus ChanakCoins.
Habla con tu mentora."* en lugar de un "+10" que no existía. El fallo silencioso
del `console.warn` está eliminado.

### 2.4 Test RIASEC anclado a Explorer

Doble barrera. En **servidor**, la RPC rechaza `riasec_test` si el nivel del token no
es explorer (`riasec_requires_explorer`). En **cliente**, `isRiasecAvailable()`
([app.js:410](app.js:410)) oculta la pestaña y muestra un aviso explicativo:

```json
// token builder
{"builder_tabOculta":true,
 "builder_mensajeBloqueo":"🔒 Test \"Quién Soy\" · Explorer Q1 Este test forma parte del primer trimestre de Explorer..."}
// token explorer
{"explorer_tabVisible":true,"explorer_testRenderiza":true}
```

Clave de idempotencia compuesta **en servidor** a partir del `student_id` y el curso
firmados dentro del token — el cliente no puede colisionar ni sobrescribir la de otro.

### 2.5 El panel de los padres sigue sumando

Las filas se insertan con `status = 'approved'` y `created_by_role = 'life_skills_portal'`,
el mismo criterio ya establecido. No requiere aprobación manual. La migración es
aditiva, así que ninguna consulta existente del panel cambió.

### 2.6 Montos no canónicos eliminados

```
antes:  4× coins:25   10× coins:30   3× coins:35   1× coins:40   + awardCoins(30, ...)
ahora:  18× coins:25
$ grep -nE "awardCoins\([0-9]" app.js   → (sin resultados)
```

**Decisión que conviene revisar:** los 14 retos Juniors que valían 30/35/40 se
normalizaron a 25 (el valor canónico inmediatamente inferior, para no inflar la
economía). Es una decisión pedagógica que tomé para cumplir R5 al pie de la letra
("ningún otro monto, en ningún archivo"). Si dirección académica quiere graduarlos,
la vía correcta es repartirlos entre 25 y 50, no reintroducir valores intermedios.

---

## 3. Integridad curricular (R2) y borrador (R4) — ya se cumplían

Verificación programática de los 19 módulos contra la tabla de referencia:

```
ID     | lvl-ok | qtr(actual/ref) | sess(a/r) | status | authoring | EQ?
ls1-1  | ok     | Q1/Q1           | 8/8       | draft  | ai_assisted | yes
...
ls4-4  | ok     | Q3/Q3           | 8/8       | draft  | ai_assisted | yes
```

**Los 19 coinciden exactamente** en id, nivel, trimestre ancla y número de sesiones.
Todos en `status: 'draft'` / `authoring: 'ai_assisted'`. **No se reescribió ni una
palabra del contenido curricular.** Los tres módulos de extensión (`ls1-5`, `ls2-4`,
`ls3-5`) no llevan campo `quarter`, lo cual es correcto: son extensiones, no están
anclados a un trimestre.

---

## 4. Contenido adicional

- **Lecturas por nivel:** `BOOKS` ([data.js:198](data.js:198)) ya existía y ya estaba
  conectado ([app.js:625](app.js:625)). Renderiza datos reales — verificado en Builder:
  *Padre Rico Padre Pobre*, *Las 7 Esferas de Influencia Cultural*. Nada inventado.
- **Juniors:** `JUNIORS_RETOS` ([data.js:270](data.js:270)) ya existía y **ya es
  alcanzable** desde la navegación (`setViewMode('juniors')` en `index.html`). No hacía
  falta desarrollar tracks nuevos.
- **Khan Academy SAT:** se añadió un enlace de recurso simple, como pedía la
  especificación. Aparece solo en las tarjetas de trimestre que mencionan SAT/Khan.
  URL verificada con `curl` (HTTP 200) antes de escribirla, no adivinada:
  `https://www.khanacademy.org/digital-sat`, con `target="_blank"` y
  `rel="noopener noreferrer"`.

---

## 5. Interfaz

La estructura de navegación y la paleta ya existían. El problema real no era el
esqueleto: era que **el alumno no podía saber dónde estaba**, y que dos de las siete
vistas estaban rotas.

### 5.1 Dos vistas principales estaban caídas (bugs preexistentes)

Verificado que **no** los introduje yo: reproducidos con `git stash` sobre el código
original.

| Vista | Fallo | Causa |
|---|---|---|
| **Expediente & Rúbrica** | `TypeError: Cannot read properties of undefined (reading 'es')` | El render leía `catData.desc` e `item[lang]`. `EXPEDIENTE_CATEGORIES` es un **array** y sus entradas no tienen `desc`; los entregables viven en `items[]` con otra forma. |
| **Catálogo Juniors** | `TypeError: ... (reading 'toUpperCase')` | El render leía `r.stage` y `r.category`, que **no existen**. Los campos reales son `track` / `trackLabel`. |

Además, los seis botones de filtro de Juniors estaban escritos a mano con claves
(`caracter`, `habitos`, `creatividad`, `servicio`, `finanzas`) que **no coinciden con
ninguna del catálogo** (`nat`, `serv`, `cook`, `auto`, `save`, `sci`): cada filtro
devolvía cero resultados. Ahora los filtros **se derivan de los propios datos**, así
que no pueden volver a desincronizarse. Verificado: filtro "Cocina & Costos" → 3 retos.

La cabecera prometía "80 mini-proyectos" cuando el catálogo tiene 18. Ahora muestra el
número real.

Estado final de las siete vistas:

```json
{"capsulas":"ok","cuaderno":"ok","test-dones":"ok","habitos":"ok",
 "expediente":"ok","juniors":"ok","transversales":"ok"}
```

### 5.2 Progreso y estado visibles — lo que pedía la especificación

Antes, las tarjetas de módulo solo decían "8 Sesiones". No había forma de saber por
dónde ibas. Ahora cada tarjeta comunica sin leer:

- **Barra de progreso** + **puntos de sesión 1→8**, calculados del progreso real
  (`moduleProgress()`, [app.js:732](app.js:732)).
- **Tres estados con color propio**: pendiente (dorado), en curso (verde),
  completado (azul institucional).
- **La siguiente sesión late en dorado** — señala dónde retomar sin pensar.
- **CTA que cambia**: "Empezar módulo" / "Continuar · Sesión 4" / "Repasar módulo".

El mismo lenguaje visual se aplicó a Cápsulas y a Juniors, así que toda la app se lee
como un solo sistema en lugar de tres pantallas distintas.

**Detalle corregido de honestidad:** una cápsula completada ofrecía "✓ Repasar Cápsula
(+10 🪙)", prometiendo monedas que el servidor ya no paga por duplicado. Ahora dice
simplemente "Repasar cápsula".

### 5.3 Verificado en navegador real

- Las 7 vistas renderizan; sin errores de consola.
- **Responsive a 375px:** `scrollWidth 375 === clientWidth 375` — sin scroll horizontal.
  Las tarjetas apilan y los puntos de sesión fluyen a varias líneas.
- **Niveles bloqueados (R3):** candado 🔒, opacidad reducida y mensaje explicativo.
  Nunca un enlace muerto ni un error:
  *"🔒 Nivel LAUNCH bloqueado. Tu nivel activo asignado en el SIS es EXPLORER..."*
- **Expediente** destaca en dorado los entregables del nivel del alumno ("Tu nivel"),
  y deja el resto como contexto.
- Se respeta `prefers-reduced-motion`.
- Sin fallbacks silenciosos: ninguna cápsula no publicada muestra contenido de otro nivel.

---

## 6. Incidente durante la ejecución

Al desplegar `sign-life-skills-token` se reportó que el perfil de administración
mostraba el nombre de una alumna. Detuve todo y verifiqué:

```
profiles modificados ultimas 6h    : 0
profiles creados ultimas 6h        : 0
user_roles creados ultimas 6h      : 0
mi perfil                          : super_admin
students que coinciden con mi uid  : 0
```

Ningún dato de la cuenta fue alterado, y la función no podía devolver ese nombre
(cero coincidencias). Reverté el despliegue igualmente mientras se aclaraba. Resultó
ser la vista previa de estudiante, una función legítima del SIS. La función se
restauró a `ACTIVE v3`.

**Riesgo real detectado de paso:** de 15 alumnos, **13 tienen `user_id` NULL** y 2
tienen `profile_id` NULL. La búsqueda de la Edge Function usa
`.or(user_id.eq.X, profile_id.eq.X)`. Conviene sanear esos vínculos: si alguna vez
llega un id indefinido, esa consulta se vuelve impredecible.

---

## 7. Fuera de alcance — no se tocó

- `chanak-extension-local` y `chanak-lms-portal`.
- La base de datos de `chanak-dual-diploma-lms`: sin dependencia en tiempo de
  ejecución en ninguna dirección.
- Cualquier tabla o política RLS del SIS no mencionada arriba. En particular
  `profiles`, `user_roles` y `auth` quedaron intactas.
- R6 cumplido: ningún dato personal de alumnos en código, commits ni nombres de
  archivo. Se retiró `studentId` del `postMessage` que lo emitía al iframe padre.

---

## 8. Pendientes que requieren decisión humana

1. **Publicación académica.** Los 19 módulos siguen en `draft`. Nada se publica hasta
   que dirección académica lo apruebe (R4).
2. **Normalización de retos Juniors** a 25 — ver §2.6.
3. **Vínculos `user_id` NULL** en `students` — ver §6.
4. **Fuerza bruta del PIN.** `CHANAK2026` es alfanumérico de 10 caracteres y se valida
   en servidor, pero el endpoint no tiene límite de intentos. Si el PIN se difunde,
   conviene rotarlo (ya es un cambio de una línea en Vault, sin tocar código) y
   considerar un límite de tasa.
5. **RPC fallback muerta.** `lifeSkillsToken.js:25` llama a
   `get_life_skills_session_token`, que no existe. Es inocua (solo se ejecuta si la
   Edge Function falla), pero conviene borrar esa rama para no dejar un camino de
   autenticación fantasma.
