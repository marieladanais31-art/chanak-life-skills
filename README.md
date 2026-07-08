# Chanak Life Skills & Leadership

Aplicación web interactiva y bilingüe (ES/EN) para el módulo **Life Skills & Leadership** de Chanak International Academy (FLDOE #134620 · MSA Candidacy), integrable en el portal de apoyo y coherente con el modelo 60/20/20.

## Qué incluye

- **Alta de usuario** compatible con el patrón del portal Chanak (código de acceso + tipo de usuario: Estudiante Chanak / Socio EducaFe / Invitado), con enlace al SIS oficial (`sis.chanakacademy.org`).
- **Bilingüe ES/EN** — interfaz y contenido completo se traducen al instante.
- **Programa Principal**: Seedling (14) · Explorer (15) · Builder (16) · Launch (17).
- **Módulos transversales**: Vida Cristiana, Conociéndome, Técnicas de Estudio.
- **Escalado por edad** en los temas comunes: cada cápsula ajusta profundidad y reto según el nivel del estudiante.
- **Referencias bibliográficas** en cada cápsula (Hábitos Atómicos, Padre Rico Padre Pobre, Los 5 lenguajes del amor, Cómo ganar amigos e influir, Los temperamentos, etc.) con invitación a leer y ampliar.
- **Retos de profundización**: mapas mentales, dibujos, y fuentes para investigar más.
- **Gamificación ChanakCoins**: niveles Sembrador → Mayordomo → Embajador.
- **Rúbrica oficial Chanak** 40/30/30 en cada entregable.
- Progreso guardado por usuario en el navegador (localStorage), listo para migrar a backend/SIS.

## Estructura

```
chanak-life-skills/
├── public/
│   ├── index.html      # marcado + estilos
│   ├── data.js         # todo el contenido (niveles, cápsulas, i18n, libros)
│   └── app.js          # lógica de la aplicación
├── vercel.json         # config de despliegue estático
├── .gitignore
└── README.md
```

## Poner en vivo (Claude Code en tu terminal)

```bash
# 1. Inicializar git
cd chanak-life-skills
git init
git add .
git commit -m "feat: Chanak Life Skills & Leadership v1"

# 2. Crear repo en GitHub y subir (requiere gh CLI autenticado)
gh repo create chanak-life-skills --public --source=. --remote=origin --push
#   — o manualmente —
# git remote add origin https://github.com/TU_USUARIO/chanak-life-skills.git
# git branch -M main
# git push -u origin main

# 3. Desplegar en Vercel (requiere vercel CLI autenticado)
vercel --prod
#   Vercel detecta el proyecto estático automáticamente (carpeta public/).
```

Tras el deploy, Vercel te dará una URL tipo `https://chanak-life-skills.vercel.app`.
Puedes enlazarla desde el portal en la sección **Life Skills → Catálogo**.

## Notas de integración

- El **alta** hoy usa el mismo modelo de código de acceso que el portal. Para producción, conectar `validateUser()` en `app.js` al endpoint real del SIS (`sis.chanakacademy.org`) sustituyendo la validación local.
- El módulo **Conociéndome** (pubertad, salud emocional, prevención de bullying/abusos y sustancias) debe ser revisado por un profesional/orientador antes de publicarse, dada la sensibilidad para menores.

---
© Chanak International Academy · Uso interno de la red EducaFe–Chanak.
