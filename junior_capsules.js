// Life Skills & Character · 4.º a 7.º grado (Juniors). Cápsulas cortas, cristianas y gamificadas:
// cada una trae una misión, una pregunta de repaso y un entregable A ELECCIÓN; al completarla suma Chanak Coins
// (quedan pendientes hasta que la familia las apruebe). Los versículos se citan por referencia, con la idea en palabras propias.

import { JUNIOR_CAPSULES_EN } from './junior_capsules_en.js';

export const JUNIOR_TRAMOS = [
  { id: '4-5', label: '4.º y 5.º', min: 4, max: 5 },
  { id: '6-7', label: '6.º y 7.º', min: 6, max: 7 },
];
export const JUNIOR_MIN_GRADE = 4;
export const JUNIOR_MAX_GRADE = 7;
export const WEEKLY_TRAIT_COINS = 100; // tabla oficial: "Mostrar el rasgo del carácter de la semana"

export const tramoForGrade = (n) => (n >= 4 && n <= 5 ? '4-5' : n >= 6 && n <= 7 ? '6-7' : null);
export const isJuniorGrade = (n) => Number.isInteger(n) && n >= JUNIOR_MIN_GRADE && n <= JUNIOR_MAX_GRADE;

export const JUNIOR_THEMES = [
  { id: 'super', icon: '🛒', es: 'Mayordomía en el supermercado', en: 'Stewardship at the supermarket' },
  { id: 'comida', icon: '🥦', es: 'Comida saludable y grupos alimenticios', en: 'Healthy food and food groups' },
  { id: 'internet', icon: '🌐', es: 'Internet responsable', en: 'Responsible internet use' },
  { id: 'empatia', icon: '💛', es: 'Empatía', en: 'Empathy' },
  { id: 'bullying', icon: '🛡️', es: 'Alto al bullying', en: 'Stop bullying' },
  { id: 'dinero', icon: '🪙', es: 'El valor del dinero y por qué ahorrar', en: 'The value of money and why we save' },
  { id: 'proyectos', icon: '🧩', es: 'Mis proyectos', en: 'My projects' },
  { id: 'habitos', icon: '🌅', es: 'Hábitos saludables', en: 'Healthy habits' },
  { id: 'artes', icon: '🎨', es: 'Artes manuales y su importancia', en: 'Handcrafts and why they matter' },
  { id: 'mundo', icon: '🌍', es: 'Curiosidades del mundo: comidas típicas y continentes', en: 'World curiosities: traditional foods and continents' },
  { id: 'emociones', icon: '🧠', es: 'Manejo de las emociones', en: 'Managing emotions' },
];

const c = (theme, tramo, title, verse, idea, hook, steps, check, deliverables, coins) => ({
  id: `${theme}-${tramo}`, theme, tramo, title, verse, idea, hook, steps, check, deliverables, coins,
});
const q = (question, options, answer, why) => ({ question, options, answer, why });

export const JUNIOR_CAPSULES = [
  // ── 🛒 Mayordomía en el supermercado ──
  c('super', '4-5', 'Detectives de etiquetas', 'Proverbios 21:5', 'Planear con cuidado trae provecho; la prisa trae pérdida.',
    'Dios nos confía lo que tenemos para que lo cuidemos bien. Comprar es una forma de ser buenos mayordomos.',
    ['Pide a un adulto que te lleve a comprar (o mira la despensa de casa) y elige 3 productos con etiqueta.',
     'Busca en cada etiqueta la lista de ingredientes: el primero es el que más lleva. Anota los 3 primeros de cada producto.',
     'Marca con una estrella el producto que lleva más azúcar o sal entre los primeros ingredientes.'],
    q('En la lista de ingredientes, ¿cuál es el que el producto lleva en MAYOR cantidad?', ['El último', 'El primero', 'El del medio'], 1, 'Los ingredientes se escriben de mayor a menor cantidad.'),
    ['Tabla de 3 productos con sus ingredientes principales', 'Un dibujo del carrito “mayordomo” con lo mejor que elegirías y por qué', 'Un mini-video o audio contando lo que descubriste'], 20),
  c('super', '6-7', 'Presupuesto de compras', 'Lucas 14:28', 'Antes de construir, se calcula cuánto cuesta.',
    'Un buen mayordomo no gasta por impulso: calcula, compara y decide.',
    ['Con tu familia elige una lista de 8 productos básicos de casa y anota su precio en dos tiendas o folletos.',
     'Compara el precio por unidad (por kilo o por litro), no solo el del paquete. Calcula cuál conviene más.',
     'Suma el total, réstalo del presupuesto que te den y decide qué dejarías fuera si te pasas.'],
    q('Un paquete grande cuesta 6 € por 2 kg y uno pequeño 2,5 € por 1 kg. ¿Cuál sale más barato por kilo?', ['El grande (3 €/kg)', 'El pequeño (2,5 €/kg)', 'Cuestan lo mismo'], 1, 'El grande cuesta 3 € por kilo y el pequeño 2,5 €.'),
    ['Hoja de comparación de precios por unidad', 'Un presupuesto de compra semanal con ahorro propuesto', 'Una presentación corta a la familia sobre cómo comprar mejor'], 30),

  // ── 🥦 Comida saludable y grupos alimenticios ──
  c('comida', '4-5', 'Mi plato de colores', 'Daniel 1:12-15', 'Daniel y sus amigos probaron comer sano y se vieron fuertes.',
    'Nuestro cuerpo es un regalo de Dios. Comer variado es cuidarlo con gratitud.',
    ['Aprende los 5 grupos: frutas, verduras, granos/cereales, proteínas y lácteos.',
     'Con tu familia, observa tu desayuno, almuerzo y cena de un día: ¿a qué grupo pertenece cada alimento?',
     'Arma tu “plato de colores” ideal: la mitad con frutas y verduras.'],
    q('¿A qué grupo pertenece el arroz?', ['Verduras', 'Granos/cereales', 'Lácteos'], 1, 'El arroz es un cereal, un grano.'),
    ['Dibujo o collage de mi plato de colores', 'Foto de un plato saludable que ayudé a preparar', 'Cartel de los 5 grupos para pegar en la cocina'], 20),
  c('comida', '6-7', 'Lo que dice mi comida', '1 Corintios 6:19-20', 'Nuestro cuerpo es templo; lo cuidamos para honrar a Dios.',
    'La comida nos da energía para estudiar, servir y jugar. Entender qué contiene nos ayuda a elegir bien.',
    ['Elige 3 alimentos que comes seguido y anota sus calorías y nutrientes principales (etiqueta o tabla nutricional).',
     'Clasifícalos: ¿dan energía, ayudan a crecer o protegen al cuerpo?',
     'Propón un cambio pequeño en tu semana (por ejemplo, fruta en vez de dulce) y pruébalo 5 días.'],
    q('¿Qué grupo ayuda sobre todo a construir y reparar músculos?', ['Proteínas', 'Grasas y dulces', 'Agua'], 0, 'Las proteínas ayudan a construir y reparar tejidos.'),
    ['Tabla de mis 3 alimentos y lo que aportan', 'Registro de 5 días de mi cambio saludable', 'Receta saludable explicada paso a paso'], 30),

  // ── 🌐 Internet responsable ──
  c('internet', '4-5', 'Navego con sabiduría', 'Proverbios 4:23', 'Cuida tu corazón por encima de todo.',
    'Internet es como una ciudad enorme: hay cosas buenas y lugares donde no debemos entrar. Un adulto nos acompaña.',
    ['Con un adulto, escribe 3 reglas de tu familia para usar internet (cuándo, dónde y con quién).',
     'Aprende qué datos NO se comparten: nombre completo, dirección, escuela, contraseñas y fotos privadas.',
     'Practica qué decir si algo te asusta o te incomoda: “aviso a un adulto de confianza ahora”.'],
    q('Alguien que no conoces te pide tu dirección en un juego en línea. ¿Qué haces?', ['Se la doy si es amable', 'No respondo y aviso a un adulto', 'Le doy solo la calle'], 1, 'Nunca se comparten datos personales con desconocidos y se avisa a un adulto.'),
    ['Cartel con las 3 reglas de internet de mi familia', 'Historieta de 4 cuadros: qué hago si algo me incomoda', 'Contrato de uso responsable firmado con mis padres'], 20),
  c('internet', '6-7', 'Huella digital y verdad', 'Efesios 4:25', 'Dejen la mentira y hablen verdad.',
    'Lo que publicamos deja una huella que dura años. Y no todo lo que circula es verdad.',
    ['Piensa en algo que podría publicarse sobre ti: ¿lo diría Jesús? ¿lo leería con orgullo tu abuela?',
     'Elige una noticia o mensaje que hayas visto y comprueba: ¿quién lo dijo? ¿hay otra fuente? ¿es reciente?',
     'Escribe 3 reglas para tu comportamiento en chats y redes (respeto, no reenviar bulos, pedir permiso para fotos).'],
    q('Recibes un mensaje alarmante que dice “reenvía a 10 personas”. ¿Qué es lo más sabio?', ['Reenviarlo por si acaso', 'Comprobar la fuente antes de compartir', 'Responder con enojo'], 1, 'Antes de compartir se verifica la fuente.'),
    ['Lista de 3 pasos para comprobar si algo es verdad', 'Mi código personal de conducta en línea', 'Charla de 2 minutos para mis hermanos o amigos'], 30),

  // ── 💛 Empatía ──
  c('empatia', '4-5', 'En los zapatos del otro', 'Romanos 12:15', 'Alégrense con los que se alegran; lloren con los que lloran.',
    'Empatía es sentir con el otro. Jesús siempre miraba a la persona, no solo lo que hacía.',
    ['Piensa en alguien que estuvo triste o solo esta semana. ¿Cómo crees que se sentía?',
     'Escribe una frase: “Si yo fuera… sentiría… y me ayudaría que…”.',
     'Haz algo pequeño por esa persona: un saludo, una nota, ayuda o compañía.'],
    q('Un compañero se cayó y llora. ¿Cuál es la respuesta empática?', ['Reírme con los demás', 'Preguntarle cómo está y ayudarlo', 'Mirar a otro lado'], 1, 'La empatía se muestra con atención y ayuda.'),
    ['Nota o tarjeta de ánimo para alguien', 'Dibujo de la escena “en los zapatos del otro”', 'Un acto de servicio con foto o relato breve'], 20),
  c('empatia', '6-7', 'Escuchar para entender', 'Santiago 1:19', 'Sé pronto para oír y tardo para hablar.',
    'A veces ayudamos más escuchando que dando consejos. Escuchar es amar con los oídos.',
    ['Pide a un familiar o amigo que te cuente algo importante para él o ella, sin interrumpir 3 minutos.',
     'Repite con tus palabras lo que entendiste: “Entonces te sientes… porque…”.',
     'Pregunta cómo puedes ayudar y anota lo que respondió.'],
    q('¿Qué hace una buena escucha?', ['Interrumpir con mi historia', 'Mirar, no interrumpir y repetir lo entendido', 'Dar siempre un consejo rápido'], 1, 'Escuchar es atender y comprobar que entendimos.'),
    ['Resumen escrito de lo que aprendí al escuchar', 'Entrevista corta grabada (con permiso)', 'Plan de 3 cosas que haré para ser mejor oyente'], 30),

  // ── 🛡️ Alto al bullying ──
  c('bullying', '4-5', 'Valientes que cuidan', 'Efesios 4:32', 'Sean amables y compasivos unos con otros.',
    'El bullying es hacer daño a otro una y otra vez, con palabras, golpes o dejándolo fuera. Todos podemos ayudar a pararlo.',
    ['Aprende las 3 formas: con palabras, con el cuerpo y dejando solo a alguien. Dibuja un ejemplo de cada una sin nombres reales.',
     'Escribe qué puedes hacer si lo ves: no reírte, acompañar a quien lo sufre y avisar a un adulto.',
     'Escribe una frase amable que podrías decir a alguien que está solo.'],
    q('Ves que molestan a un compañero. ¿Qué es lo correcto?', ['Reírme para no ser el siguiente', 'Acompañarlo y avisar a un adulto', 'Grabarlo en un video'], 1, 'Acompañar y avisar a un adulto ayuda a detener el bullying.'),
    ['Cartel “En mi clase/casa se respeta”', 'Cuento corto con un final donde alguien se atreve a ayudar', 'Tarjeta de ánimo para alguien que se sintió excluido'], 20),
  c('bullying', '6-7', 'Cuando alguien necesita defensor', 'Proverbios 31:8', 'Abre tu boca por los que no pueden defenderse.',
    'Defender a otros requiere valentía y sabiduría: sin violencia, sin humillar al que molesta y buscando ayuda.',
    ['Distingue una broma de un maltrato: ¿se ríen todos o solo uno sufre? ¿pasa una y otra vez?',
     'Elige 3 frases para actuar sin pelear (“eso no está bien”, “vente con nosotros”, “se lo voy a contar a un adulto”).',
     'Anota a qué adultos de confianza puedes acudir y cómo pedirías ayuda.'],
    q('¿Qué diferencia al bullying de una discusión normal?', ['Es repetido y hay desigualdad de poder', 'Es solo una vez', 'No hay palabras'], 0, 'En el bullying hay repetición y desequilibrio de poder.'),
    ['Guion de una escena para actuar (role-play) con mi familia', 'Mi “plan de valiente”: 3 frases y 3 adultos de confianza', 'Cartel digital sobre el respeto en internet y en la vida real'], 30),

  // ── 🪙 El valor del dinero y por qué ahorrar ──
  c('dinero', '4-5', 'Mi alcancía con propósito', 'Proverbios 13:11', 'El que recoge poco a poco, aumenta.',
    'El dinero es una herramienta que Dios nos confía. Separamos para ahorrar, para dar y para gastar con cuidado.',
    ['Define una meta que quieras comprar o regalar y cuánto cuesta.',
     'Divide tu “mesada” (real o imaginaria) en 3: ahorro, ofrenda/regalo y gasto.',
     'Anota durante 4 semanas cuánto separas y cuánto te falta para la meta.'],
    q('Si ahorras 2 € por semana, ¿cuánto tendrás en 5 semanas?', ['8 €', '10 €', '12 €'], 1, '2 × 5 = 10 €.'),
    ['Alcancía o frasco decorado con mi meta', 'Tabla de ahorro de 4 semanas', 'Dibujo de lo que haré con lo ahorrado y a quién bendeciré'], 20),
  c('dinero', '6-7', '¿Por qué ahorrar?', 'Proverbios 21:20', 'En casa del sabio hay tesoro precioso.',
    'Ahorrar nos prepara para imprevistos, metas y para ayudar a otros. El gasto impulsivo nos deja con las manos vacías.',
    ['Escribe 3 gastos de tu familia: fijos (siempre iguales) y variables (cambian).',
     'Imagina un imprevisto (se rompe algo) y calcula cuántas semanas de ahorro necesitarías para cubrirlo.',
     'Haz tu plan: cuánto ahorras, cuánto ofrendas y cuánto gastas al mes.'],
    q('Un fondo para imprevistos sirve para…', ['Comprar caprichos', 'Cubrir gastos inesperados sin endeudarnos', 'Regalarlo siempre'], 1, 'El fondo de imprevistos evita endeudarse ante emergencias.'),
    ['Plan mensual de ahorro, ofrenda y gasto', 'Cartel “mi fondo para imprevistos”', 'Mini-proyecto para ganar un dinero honesto (con permiso de mis padres)'], 30),

  // ── 🧩 Mis proyectos ──
  c('proyectos', '4-5', 'Planeo, hago y celebro', 'Colosenses 3:23', 'Todo lo que hagan, háganlo de corazón, como para el Señor.',
    'Un proyecto es una idea con pasos. Terminar lo que empezamos nos hace constantes.',
    ['Elige un proyecto pequeño que puedas terminar en 1 semana (maqueta, huerto, libro, invento, obra de teatro).',
     'Escribe 3 pasos y qué materiales necesitas.',
     'Hazlo, toma una foto de tu avance y celebra al final dando gracias.'],
    q('¿Qué ayuda más a terminar un proyecto?', ['Esperar a tener ganas', 'Dividirlo en pasos pequeños', 'Hacerlo todo el último día'], 1, 'Dividirlo en pasos pequeños lo hace alcanzable.'),
    ['El proyecto terminado (foto o video)', 'Mi plan de 3 pasos con lo que aprendí', 'Exposición corta a la familia'], 20),
  c('proyectos', '6-7', 'Proyecto con meta y evaluación', 'Proverbios 16:3', 'Encomienda al Señor tus obras y tus pensamientos serán afirmados.',
    'Los proyectos grandes necesitan meta, calendario, recursos y revisar cómo salió.',
    ['Define una meta clara (qué, para quién y para cuándo) y un calendario de 3 semanas.',
     'Anota recursos y posibles problemas con una solución para cada uno.',
     'Al terminar, evalúa: ¿qué salió bien? ¿qué cambiarías? ¿en qué te ayudó Dios?'],
    q('¿Para qué sirve evaluar un proyecto al terminar?', ['Para aprender y mejorar la próxima vez', 'Para criticar a otros', 'No sirve'], 0, 'Evaluar nos ayuda a aprender y mejorar.'),
    ['Proyecto terminado con su bitácora', 'Informe de evaluación de una página', 'Presentación con fotos del proceso'], 30),

  // ── 🌅 Hábitos saludables ──
  c('habitos', '4-5', 'Mi rutina de campeón', 'Salmo 127:2', 'Dios da el sueño a sus amados.',
    'Dormir, comer bien, asearnos, movernos y ordenar nos cuida el cuerpo y la mente.',
    ['Anota a qué hora te acuestas y te levantas. Los niños de tu edad necesitan unas 9 a 11 horas de sueño.',
     'Elige 3 hábitos: lavarte los dientes, mover el cuerpo 30 minutos y ordenar tu cuarto.',
     'Haz un registro de 7 días con una estrella por cada hábito logrado.'],
    q('¿Cuántas horas de sueño necesita aproximadamente un niño de 9 a 12 años?', ['5 a 6', '9 a 11', '14 a 15'], 1, 'Entre 9 y 11 horas es lo recomendado a esa edad.'),
    ['Tabla de hábitos de 7 días con estrellas', 'Cartel de mi rutina diaria', 'Video o foto haciendo mi ejercicio favorito'], 20),
  c('habitos', '6-7', 'Constancia: 21 días', 'Gálatas 6:9', 'No nos cansemos de hacer el bien; a su tiempo cosecharemos.',
    'Los hábitos se forman con repetición. Un cambio pequeño y constante vale más que uno grande que dura un día.',
    ['Elige UN hábito que quieras construir (leer 15 minutos, estirar, orar, ordenar la mochila).',
     'Decide cuándo y dónde lo harás, y qué te va a recordar (alarma, nota, otra rutina).',
     'Regístralo durante 14 días como mínimo; si fallas un día, vuelve al siguiente sin rendirte.'],
    q('Si un día se te olvida tu hábito, lo mejor es…', ['Abandonar todo', 'Retomarlo al día siguiente', 'Culpar a otros'], 1, 'La constancia incluye volver a empezar.'),
    ['Registro de mi hábito de 14 días', 'Reflexión: lo que aprendí de mí', 'Cartel motivador para mi cuarto'], 30),

  // ── 🎨 Artes manuales y su importancia ──
  c('artes', '4-5', 'Manos creadoras', 'Éxodo 35:30-35', 'Dios llenó a Bezaleel de habilidad para trabajar en toda obra de arte.',
    'Dios es creador y nos hizo creativos. Trabajar con las manos desarrolla paciencia, coordinación y alegría.',
    ['Elige una artesanía sencilla: origami, collage, plastilina, tejido, pintura, jabón o marcapáginas.',
     'Reúne materiales reciclados o baratos y planea tu diseño.',
     'Hazlo con calma y regálalo o úsalo para bendecir a alguien.'],
    q('¿Qué desarrolla el trabajo manual?', ['Paciencia y coordinación', 'Solo cansancio', 'Nada especial'], 0, 'El trabajo manual entrena la paciencia, la coordinación y la creatividad.'),
    ['La obra terminada (foto)', 'Pasos ilustrados de cómo se hace', 'Una muestra para regalar con una nota de gratitud'], 20),
  c('artes', '6-7', 'Del taller al servicio', 'Proverbios 22:29', '¿Has visto un hombre diligente en su trabajo? Delante de los reyes estará.',
    'Los oficios y las artes han sostenido familias y pueblos. Aprender uno es un tesoro para toda la vida.',
    ['Investiga un oficio artesanal (cerámica, carpintería, costura, joyería, tejido) y a una persona que lo practique.',
     'Aprende o practica una técnica básica de ese oficio durante 3 sesiones.',
     'Piensa cómo podrías usar esa habilidad para servir a otros (regalos, ayuda en la iglesia, un pequeño negocio).'],
    q('Aprender un oficio con las manos sirve para…', ['Servir y también ganar sustento honesto', 'Nada, solo se estudia en libros', 'Solo para adultos'], 0, 'Los oficios sirven a otros y pueden sostener una vida.'),
    ['Pieza hecha con la técnica aprendida', 'Entrevista corta a un artesano', 'Plan de un mini-proyecto solidario con mis manos'], 30),

  // ── 🌍 Curiosidades del mundo ──
  c('mundo', '4-5', 'Viaje por el mundo en un plato', 'Salmo 24:1', 'De Jehová es la tierra y su plenitud, el mundo y los que en él habitan.',
    'Dios ama a todos los pueblos. Descubrir cómo comen y viven otras familias nos enseña respeto y gratitud.',
    ['Ubica en un mapa los continentes: África, América, Antártida, Asia, Europa y Oceanía (algunos mapas separan América en Norte y Sur).',
     'Elige un país y su comida típica (por ejemplo: Italia – pasta, Japón – sushi, México – tacos, Etiopía – injera, Perú – ceviche, Marruecos – cuscús).',
     'Anota 3 curiosidades de ese país: idioma, bandera y algo que lo hace único.'],
    q('¿Cuál de estos es un continente?', ['Asia', 'Brasil', 'Mediterráneo'], 0, 'Asia es un continente; Brasil es un país y el Mediterráneo es un mar.'),
    ['Ficha del país con dibujo de su plato típico', 'Preparar (con un adulto) un plato o postre de ese país y fotografiarlo', 'Mapa con los continentes y una comida por cada uno'], 20),
  c('mundo', '6-7', 'Culturas y misioneros', 'Mateo 28:19', 'Vayan y hagan discípulos en todas las naciones.',
    'Las naciones tienen historia, idioma y costumbres. Entenderlas nos prepara para amar y servir a gente de todo el mundo.',
    ['Elige un continente y 3 países. Para cada uno anota capital, idioma principal y una comida típica.',
     'Investiga una costumbre o fiesta tradicional y por qué es importante para ese pueblo.',
     'Busca cómo se dice “Dios te bendiga” o “gracias” en el idioma de uno de esos países.'],
    q('¿Por qué conviene conocer otras culturas?', ['Para respetar y poder servir mejor a las personas', 'Para burlarnos de sus costumbres', 'No es útil'], 0, 'Conocer otras culturas nos ayuda a respetar y servir mejor.'),
    ['Pasaporte ilustrado de 3 países', 'Exposición de una fiesta tradicional con fotos', 'Cena temática en familia con comida de un país y cartel explicativo'], 30),

  // ── 🧠 Manejo de las emociones ──
  c('emociones', '4-5', 'Le pongo nombre a lo que siento', 'Salmo 56:3', 'En el día que temo, yo en ti confío.',
    'Todas las emociones son normales: alegría, tristeza, enojo, miedo. Lo importante es qué hacemos con ellas y que se las presentemos a Dios.',
    ['Mira la rueda de emociones (alegría, tristeza, enojo, miedo, sorpresa) y piensa cuándo sentiste cada una esta semana.',
     'Practica la “respiración de la flor”: huele la flor (inhala 4 segundos), apaga la vela (exhala 6 segundos), 5 veces.',
     'Escribe una oración corta contando a Dios lo que sientes.'],
    q('Cuando sientes mucho enojo, ¿qué ayuda primero?', ['Gritar o golpear', 'Respirar profundo y hablar con calma', 'Guardarlo para siempre'], 1, 'Respirar y hablar con calma ayuda a manejar el enojo.'),
    ['Rueda de emociones dibujada por mí', 'Mi “caja de calma” con 3 cosas que me ayudan', 'Oración o carta a Dios sobre lo que siento'], 20),
  c('emociones', '6-7', 'Pausa, piensa, responde', 'Proverbios 15:1', 'La blanda respuesta quita la ira.',
    'A tu edad las emociones se sienten más fuerte. Aprender a pausar antes de reaccionar es una señal de madurez y dominio propio.',
    ['Recuerda una situación reciente en que reaccionaste fuerte. ¿Qué sentías? ¿Qué pensabas? ¿Qué hiciste?',
     'Reescríbela con 3 pasos: PAUSA (respiro), PIENSA (qué necesito y qué puede pasar), RESPONDE (con respeto).',
     'Elige un adulto de confianza y una estrategia que usarás cuando sientas mucha tensión (caminar, orar, escribir, hablar).'],
    q('¿Qué significa tener dominio propio?', ['No sentir emociones nunca', 'Elegir cómo responder aunque sienta emoción fuerte', 'Esconder siempre lo que siento'], 1, 'Dominio propio es decidir cómo responder aun sintiendo algo fuerte.'),
    ['Historieta “antes y después” con los 3 pasos', 'Mi plan de calma personal', 'Diario emocional de 5 días con una oración cada día'], 30),
];

export const capsulesForGrade = (n) => { const t = tramoForGrade(n); return t ? JUNIOR_CAPSULES.filter((x) => x.tramo === t) : []; };
export const capsuleById = (id) => JUNIOR_CAPSULES.find((x) => x.id === id) || null;

// "Grade 4", "4.º Primaria", "4to" → 4 (solo 4.º a 7.º devuelven un número de Juniors; el resto, null)
export function juniorGradeOf(student) {
  for (const raw of [student?.us_grade_level, student?.grade_level, student?.grade]) {
    const t = String(raw ?? '').toLowerCase();
    if (!t || /kinder/.test(t)) continue;
    const m = t.match(/(\d{1,2})/);
    const n = m ? Number(m[1]) : NaN;
    if (Number.isInteger(n)) return isJuniorGrade(n) ? n : null;
  }
  return null;
}
export const traitItemId = (week) => `W${String(week).padStart(2, '0')}`;

// Cápsula en el idioma pedido (la respuesta correcta y las coins salen siempre de la versión base).
export function localizeCapsule(capsule, isEn) {
  const en = isEn ? JUNIOR_CAPSULES_EN[capsule.id] : null;
  if (!en) return capsule;
  return { ...capsule, ...en, check: { ...capsule.check, ...en.check, answer: capsule.check.answer } };
}
