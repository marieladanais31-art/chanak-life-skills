/* =====================================================================
   Chanak Life Skills & Leadership — DATA
   Contenido bilingüe (ES/EN), niveles, cápsulas, libros y escalado por edad
   ===================================================================== */

const T = (es, en) => ({ es, en });

/* ---------------- Interface strings (i18n) ---------------- */
const UI = {
  subtitle:T('Life Skills & Leadership','Life Skills & Leadership'),
  coins:T('ChanakCoins','ChanakCoins'),
  'hero-eyebrow':T('Carácter · Propósito · Servicio · Liderazgo · Fe · College Prep','Character · Purpose · Service · Leadership · Faith · College Prep'),
  'hero-title':T('¿Quién eres hoy?','Who are you today?'),
  'hero-lead':T('La ruta acompaña el desarrollo de hábitos, fe, vocación y liderazgo para la vida adulta. Elige tu punto de partida — puedes explorar cualquier nivel.','The journey supports the growth of habits, faith, calling and leadership for adult life. Choose your starting point — you can explore any level.'),
  'sec-main':T('Programa Principal','Main Program'),
  'sec-modules':T('Módulos transversales y Juniors','Cross-modules and Juniors'),
  'sec-adult':T('Adultos','Adults'),
  'back-home':T('← Volver al inicio','← Back to home'),
  'back-level':T('← Volver al nivel','← Back to level'),
  'sec-capsules':T('Cápsulas interactivas','Interactive capsules'),
  'sec-tracks':T('Tracks vocacionales','Vocational tracks'),
  'tracks-note':T('Rutas opcionales que orientan el tipo de proyecto. No son excluyentes.','Optional routes that guide the type of project. They are not mutually exclusive.'),
  'rubric-title':T('Sistema de evaluación Chanak','Chanak evaluation system'),
  'rubric-1':T('Evidencia visual / del proyecto','Visual / project evidence'),
  'rubric-2':T('Referencia externa','External reference'),
  'rubric-3':T('Reflexión / ensayo / Personal Statement','Reflection / essay / Personal Statement'),
  'footer-1':T('Ruta Life Skills','Life Skills journey'),
  'footer-2':T('El portal orienta · el SIS registra la información oficial','The portal guides · the SIS records official information'),
  coming:T('Próximamente','Coming soon'),
  open:T('Abrir →','Open →'),
  done:T('Completada','Completed'),
  'from-curr':T('Del currículum','From curriculum'),
  new:T('Nueva','New'),
  faith:T('Fe','Faith'),
  care:T('Cuidado','Wellbeing'),
  study:T('Estudio','Study'),
  team:T('Equipo','Team'),
  cap4step:T('Cápsula interactiva.','Interactive capsule.'),
  step:T('paso','step'), of:T('de','of'),
  back:T('← Atrás','← Back'), continue:T('Continuar →','Continue →'),
  complete:T('Completar cápsula','Complete capsule'),
  'done-title':T('¡Cápsula completada!','Capsule complete!'),
  'done-body':T('Cada cápsula suma coins hacia tus niveles de confianza: Sembrador → Mayordomo → Embajador.','Each capsule adds coins toward your trust levels: Sower → Steward → Ambassador.'),
  deliverable:T('Recuerda tu entregable','Remember your deliverable'),
  'del-1':T('Sube tu evidencia visual','Upload your visual evidence'),
  'del-2':T('Referencia externa (mentor/adulto)','External reference (mentor/adult)'),
  'del-3':T('Reflexión escrita','Written reflection'),
  'back-to-level':T('Volver al nivel','Back to level'),
  'to-home':T('Ir al inicio','Go to home'),
  'built-with':T('Se evaluará con la rúbrica Chanak','Will be assessed with the Chanak rubric'),
  'scaffold-note':T('Esta cápsula ya está mapeada dentro de la ruta y seguirá el mismo formato interactivo que las cápsulas activas. Es de las siguientes en desarrollarse.','This capsule is already mapped within the journey and will follow the same interactive format as the active capsules. It is next in line to be built.'),
  'read-more':T('Para leer y profundizar','To read and go deeper'),
  'deepen':T('Reto de profundización','Deepening challenge'),
  'level-label':T('Nivel según tu edad','Level for your age'),
  // auth
  'auth-title':T('Bienvenido a Life Skills','Welcome to Life Skills'),
  'auth-sub':T('Date de alta para guardar tu progreso y tus ChanakCoins.','Register to save your progress and your ChanakCoins.'),
  'auth-name':T('Nombre y apellido','Full name'),
  'auth-type':T('¿Cómo participas?','How do you participate?'),
  'type-chanak':T('Estudiante Chanak','Chanak Student'),
  'type-educafe':T('Socio EducaFe','EducaFe Member'),
  'type-guest':T('Invitado / Explorar','Guest / Explore'),
  'auth-age':T('Tu edad','Your age'),
  'auth-code':T('Código de acceso','Access code'),
  'auth-code-help':T('Si eres estudiante Chanak o socio EducaFe, usa el código que te dio tu mentor. Los invitados pueden dejarlo vacío.','If you are a Chanak student or EducaFe member, use the code your mentor gave you. Guests may leave it empty.'),
  'auth-enter':T('Entrar','Enter'),
  'auth-sis':T('¿Notas, PEI o boletines? Ir al SIS oficial','Grades, IEP or report cards? Go to the official SIS'),
  'auth-official':T('El SIS Chanak es el canal oficial. Esta app es de apoyo y práctica.','The Chanak SIS is the official channel. This app is for support and practice.'),
  'auth-welcome':T('Hola','Hi'),
  'logout':T('Salir','Log out'),
  'auth-err-name':T('Escribe tu nombre para continuar.','Enter your name to continue.'),
  'auth-err-age':T('Indica tu edad.','Enter your age.'),
  'auth-err-code':T('Los estudiantes Chanak y socios EducaFe necesitan un código de acceso válido.','Chanak students and EducaFe members need a valid access code.'),
  'your-level':T('Tu nivel','Your level'),
  'mentor-guides':T('Este tema se profundiza con tu mentor.','This topic goes deeper with your mentor.'),
  'safe-title':T('Nunca estás solo','You are never alone'),
  'safe-space':T('Espacio seguro','Safe space'),
  // wallet / billetera
  'wallet-open':T('Ver billetera','View wallet'),
  'wallet-title':T('Tu billetera ChanakCoins','Your ChanakCoins wallet'),
  'wallet-sub':T('Tu billete virtual crece con cada cápsula que completas. Los ChanakCoins no son dinero real: representan tu crecimiento y confianza.','Your virtual bill grows with each capsule you complete. ChanakCoins aren\'t real money: they represent your growth and trust.'),
  'wallet-close':T('Cerrar','Close'),
  'wallet-note':T('El billete Chanak — moneda de crecimiento','The Chanak bill — currency of growth'),
  'trust-label':T('Nivel de confianza','Trust level'),
  'trust-next':T('Para el siguiente nivel','To the next level'),
  'trust-max':T('¡Nivel máximo alcanzado! Sigue sembrando.','Top level reached! Keep sowing.'),
  'coins-word':T('ChanakCoins','ChanakCoins'),
  // kahoot
  'kahoot-cta':T('⚡ Desafío relámpago','⚡ Lightning challenge'),
  'kahoot-sub':T('Responde las preguntas del nivel contrarreloj: cuanto más rápido aciertes, más ChanakCoins ganas.','Answer the level\'s questions against the clock: the faster you\'re right, the more ChanakCoins you earn.'),
  'kahoot-start':T('Empezar','Start'),
  'kahoot-next':T('Siguiente','Next'),
  'kahoot-time':T('¡Tiempo!','Time!'),
  'kahoot-correct':T('¡Correcto!','Correct!'),
  'kahoot-wrong':T('Casi…','Almost…'),
  'kahoot-result':T('Desafío completado','Challenge complete'),
  'kahoot-score':T('Aciertos','Correct'),
  'kahoot-earned':T('ChanakCoins ganados','ChanakCoins earned'),
  'kahoot-again':T('Repetir','Play again'),
  'kahoot-back':T('Volver al nivel','Back to level'),
  'kahoot-none':T('Este nivel aún no tiene preguntas para el desafío. Completa alguna cápsula primero.','This level has no challenge questions yet. Complete a capsule first.'),
  'kahoot-questions':T('preguntas','questions'),
  // teamwork
  'team-sec':T('Trabajo en equipo','Teamwork'),
  'team-note':T('El liderazgo se demuestra con otros. Estas cápsulas se hacen mejor acompañado: haz amigos, escucha, influye con integridad y sirve.','Leadership is shown with others. These capsules are best done together: make friends, listen, influence with integrity, and serve.'),
  'team-cta':T('Explorar trabajo en equipo','Explore teamwork'),
  'team-title':T('Hazlo con otros','Do it with others'),
  // tracks
  'tracks-intro':T('Dios nos hizo diferentes y con llamados distintos (Romanos 12:4-6). La habilidad que desarrollas — liderar, crear, servir, comunicar — es la misma; lo que cambia es el <b>track</b> donde la aplicas. Elige el que más te apasione: no te encierra, te enfoca.','God made us different, with different callings (Romans 12:4-6). The skill you develop — to lead, create, serve, communicate — is the same; what changes is the <b>track</b> where you apply it. Pick the one you\'re most passionate about: it doesn\'t box you in, it focuses you.'),
  // deliverables
  'project-title':T('Tu proyecto a entregar','Your project to deliver'),
  'project-note':T('Sube tu evidencia al SIS. Se evalúa con la rúbrica Chanak 40/30/30.','Upload your evidence to the SIS. Assessed with the Chanak 40/30/30 rubric.'),
  'no-deliver-title':T('Esta cápsula no tiene entregable','This capsule has no deliverable'),
  'no-deliver-body':T('Los módulos transversales (Fe, Conociéndome y Estudio) son para tu vida, no para calificar. Guárdalo en tu corazón y aplícalo — ese es el verdadero fruto.','Cross-cutting modules (Faith, Knowing Myself and Study) are for your life, not for grading. Keep it in your heart and apply it — that is the real fruit.'),
  'total-coins':T('Llevas','You have'),
};

/* ---------------- Book references (bilingual) ---------------- */
const BOOKS = {
  habitos:T('📖 Basado en <i>Hábitos Atómicos</i> de James Clear. Te animamos a leerlo completo: cada capítulo profundiza en cómo los pequeños cambios producen grandes resultados.','📖 Based on <i>Atomic Habits</i> by James Clear. We encourage you to read the whole book: each chapter goes deeper into how small changes produce remarkable results.'),
  padreRico:T('📖 Basado en <i>Padre Rico, Padre Pobre</i> de Robert Kiyosaki. Lee el libro para entender a fondo la diferencia entre activos y pasivos.','📖 Based on <i>Rich Dad, Poor Dad</i> by Robert Kiyosaki. Read the book to fully grasp the difference between assets and liabilities.'),
  lenguajes:T('📖 Basado en <i>Los 5 lenguajes del amor de los adolescentes</i> de Gary Chapman. Recomendamos leerlo con tu familia.','📖 Based on <i>The 5 Love Languages of Teenagers</i> by Gary Chapman. We recommend reading it with your family.'),
  amigos:T('📖 Basado en <i>Cómo ganar amigos e influir sobre las personas</i> de Dale Carnegie. Un clásico que vale la pena leer entero.','📖 Based on <i>How to Win Friends and Influence People</i> by Dale Carnegie. A classic well worth reading in full.'),
  temperamentos:T('📖 Inspirado en los estudios clásicos sobre los cuatro temperamentos (p. ej. <i>Enriquezca su personalidad</i> de Tim LaHaye). Consúltalo con tu mentor.','📖 Inspired by classic studies on the four temperaments (e.g. <i>Spirit-Controlled Temperament</i> by Tim LaHaye). Discuss it with your mentor.'),
  biblia:T('📖 Estudia estos pasajes en tu Biblia y consúltalos con tu mentor, familia e iglesia.','📖 Study these passages in your Bible and discuss them with your mentor, family and church.'),
  study7:T('📖 Ideas afines en <i>Los 7 hábitos de los adolescentes altamente efectivos</i> de Sean Covey.','📖 Related ideas in <i>The 7 Habits of Highly Effective Teens</i> by Sean Covey.'),
};

/* ---------------- Age-scaling helper ----------------
   Each common capsule can define a `byAge` object with a deepening
   challenge per band. Bands: kids (8-11), tween (12-13), teen (14-15),
   senior (16-17), adult (18+).                                        */
const AGE_BANDS = ['kids','tween','teen','senior','adult'];
function ageBand(age){
  age = Number(age)||14;
  if(age<=11) return 'kids';
  if(age<=13) return 'tween';
  if(age<=15) return 'teen';
  if(age<=17) return 'senior';
  return 'adult';
}
const BAND_LABEL = {
  kids:T('Nivel 1 · Explorador (8–11)','Level 1 · Explorer (8–11)'),
  tween:T('Nivel 2 · Descubridor (12–13)','Level 2 · Discoverer (12–13)'),
  teen:T('Nivel 3 · Constructor (14–15)','Level 3 · Builder (14–15)'),
  senior:T('Nivel 4 · Líder (16–17)','Level 4 · Leader (16–17)'),
  adult:T('Nivel 5 · Mentor (18+)','Level 5 · Mentor (18+)'),
};

/* Generic deepening challenges reused when a capsule has no custom set */
const DEEPEN_DEFAULT = {
  kids:T('Haz un <b>dibujo</b> que represente lo que aprendiste y explícalo a tu familia.','Make a <b>drawing</b> that represents what you learned and explain it to your family.'),
  tween:T('Crea un <b>mapa mental</b> con la idea central y 4 ramas. Compártelo con tu mentor.','Create a <b>mind map</b> with the central idea and 4 branches. Share it with your mentor.'),
  teen:T('Escribe un <b>resumen de media página</b> y busca <b>una fuente adicional</b> (libro, artículo o video) que amplíe el tema.','Write a <b>half-page summary</b> and find <b>one extra source</b> (book, article or video) that expands the topic.'),
  senior:T('Investiga <b>dos fuentes</b> distintas, compáralas y escribe un <b>párrafo de opinión propia</b> fundamentada.','Research <b>two different sources</b>, compare them and write a <b>paragraph of your own reasoned opinion</b>.'),
  adult:T('Prepara una <b>mini-enseñanza de 5 minutos</b> sobre el tema para transmitírselo a alguien más.','Prepare a <b>5-minute mini-teaching</b> on the topic to pass it on to someone else.'),
};

/* ---------------- Tracks ---------------- */
const TRACKS = [
  {ic:'🌳',name:'TREE',sub:T('Naturaleza e Ingeniería','Nature & Engineering')},
  {ic:'🎨',name:'PALETTE',sub:T('Artes y Creatividad','Arts & Creativity')},
  {ic:'❤️',name:'HEARTBEAT',sub:T('Salud y Deporte','Health & Sport')},
  {ic:'🤝',name:'HELPING',sub:T('Servicio y Fe','Service & Faith')},
  {ic:'💼',name:'BRIEFCASE',sub:T('Negocios y Finanzas','Business & Finance')},
  {ic:'📣',name:'BULLHORN',sub:T('Política y Liderazgo','Politics & Leadership')},
];

/* ---------------- Levels ---------------- */
const LEVELS = {
  seedling:{eyebrow:T('Programa Principal · Nivel 1','Main Program · Level 1'),age:T('14 años','age 14'),title:T('Seedling','Seedling'),em:'🌱',rec:true,
    desc:T('El fundamento. Identidad, hábitos, propósito y servicio en torno a tres preguntas: ¿Quién soy? ¿Cómo funciono? ¿Para qué estoy aquí?','The foundation. Identity, habits, purpose and service around three questions: Who am I? How do I work? Why am I here?'),
    quarters:[[T('Q1','Q1'),T('¿Quién soy? — Escudo de Armas','Who am I? — Coat of Arms')],[T('Q2','Q2'),T('¿Cómo funciono? — Hábitos + servicio','How do I work? — Habits + service')],[T('Q3','Q3'),T('¿Para qué estoy aquí? — Proyecto BOLD','Why am I here? — BOLD Project')]],
    capsules:['identidad','habitos','lenguajes','comunicacion','bold','ia-responsable']},
  explorer:{eyebrow:T('Programa Principal · Nivel 2','Main Program · Level 2'),age:T('15 años','age 15'),title:T('Explorer','Explorer'),em:'🧭',
    desc:T('Vocación, propósito, investigación y primeras habilidades académicas. Test de Dones y reto Shark Tank Junior.','Calling, purpose, research and first academic skills. Gifts Test and Shark Tank Junior challenge.'),
    quarters:[[T('Q1','Q1'),T('Vocación y Dones','Calling & Gifts')],[T('Q2','Q2'),T('Investigación + Proyecto Científico','Research + Science Project')],[T('Q3','Q3'),T('Emprendimiento — Shark Tank','Entrepreneurship — Shark Tank')]],
    capsules:['idea-negocio','encuestas','ganar-amigos','presentaciones','trabajo-equipo']},
  builder:{eyebrow:T('Programa Principal · Nivel 3','Main Program · Level 3'),age:T('16 años','age 16'),title:T('Builder','Builder'),em:'🔨',
    desc:T('Liderazgo real, portfolio financiero virtual y SAT. Cada entregable construye el expediente de Launch.','Real leadership, virtual financial portfolio and SAT. Each deliverable builds the Launch dossier.'),
    quarters:[[T('Q1','Q1'),T('Liderazgo BOLD expandido','Expanded BOLD leadership')],[T('Q2','Q2'),T('Finanzas reales — Portfolio $10,000','Real finance — $10,000 Portfolio')],[T('Q3','Q3'),T('SAT Prep + inicio Capstone','SAT Prep + Capstone start')]],
    capsules:['padre-rico','contabilidad','plan-negocio','construir-web','7-esferas']},
  launch:{eyebrow:T('Programa Principal · Nivel 4','Main Program · Level 4'),age:T('17 años','age 17'),title:T('Launch','Launch'),em:'🚀',
    desc:T('El nivel de legado. Produce el Capstone y construye el expediente universitario que demuestra quién eres.','The legacy level. Produces the Capstone and builds the college dossier that shows who you are.'),
    quarters:[[T('Q1','Q1'),T('Capstone Project','Capstone Project')],[T('Q2','Q2'),T('Resume USA + Personal Statement','US Resume + Personal Statement')],[T('Q3','Q3'),T('Legado + aplicación universitaria','Legacy + college application')]],
    capsules:['curriculum','expediente','carreras','presentaciones','entrevista']},
  vida:{eyebrow:T('Módulo transversal · Fe','Cross-module · Faith'),age:T('Todas las edades','All ages'),title:T('Vida Cristiana','Christian Life'),em:'✝️',
    desc:T('El corazón de la ruta. Evangelismo, misiones, cómo preparar una predicación, cosmovisiones sobre la creación y el fin de los tiempos, y tu temperamento al servicio de Dios. El contenido sube de nivel según tu edad.','The heart of the journey. Evangelism, missions, how to prepare a sermon, worldviews on creation and the end times, and your temperament in service to God. Content scales up with your age.'),
    quarters:[[T('Base','Base'),T('Fe y testimonio','Faith & testimony')],[T('Servicio','Service'),T('Evangelismo y misiones','Evangelism & missions')],[T('Estudio','Study'),T('Cosmovisiones y carácter','Worldviews & character')]],
    capsules:['evangelismo','misiones','predicacion','cosmovisiones','temperamentos']},
  conociendome:{eyebrow:T('Módulo transversal · Cuidado','Cross-module · Wellbeing'),age:T('Todas las edades','All ages'),title:T('Conociéndome','Knowing Myself'),em:'🧠',
    desc:T('Un espacio seguro para entender tu cuerpo y tus emociones, y aprender a protegerte: pubertad, salud emocional, prevención de bullying y abusos, y prevención de sustancias. El contenido sube de nivel según tu edad.','A safe space to understand your body and emotions, and to protect yourself: puberty, emotional health, bullying and abuse prevention, and substance prevention. Content scales up with your age.'),
    quarters:[[T('Cuerpo','Body'),T('Pubertad y cambios','Puberty & changes')],[T('Mente','Mind'),T('Salud emocional','Emotional health')],[T('Escudo','Shield'),T('Protección y prevención','Protection & prevention')]],
    capsules:['pubertad','salud-emocional','prevencion-bullying','prevencion-sustancias','adolescencia']},
  estudio:{eyebrow:T('Módulo transversal · Aprender','Cross-module · Learning'),age:T('Todas las edades','All ages'),title:T('Técnicas de Estudio','Study Skills'),em:'📚',
    desc:T('Aprende a aprender. Descubre tu estilo de aprendizaje y domina técnicas que se ajustan a tu edad: desde organizar tu espacio hasta la repetición espaciada y el método Cornell.','Learn how to learn. Discover your learning style and master techniques scaled to your age: from organizing your space to spaced repetition and the Cornell method.'),
    quarters:[[T('Yo','Me'),T('Mi estilo de aprendizaje','My learning style')],[T('Técnicas','Techniques'),T('Métodos por edad','Methods by age')],[T('Hábito','Habit'),T('Rutina de estudio','Study routine')]],
    capsules:['estilos-aprendizaje','tecnicas-estudio','concentracion','memoria','gestion-tiempo']},
  adulto:{eyebrow:T('Adultos','Adults'),age:T('25+ años','age 25+'),title:T('Adulto Emprendedor','Adult Entrepreneur'),em:'💼',
    desc:T('Ruta independiente para emprendedores. Del plan de negocio financiable a los impuestos, el financiamiento y la contabilidad diaria.','Independent route for entrepreneurs. From a fundable business plan to taxes, financing and day-to-day accounting.'),
    quarters:[[T('Fase 1','Phase 1'),T('Idea y plan','Idea & plan')],[T('Fase 2','Phase 2'),T('Constitución y finanzas','Setup & finance')],[T('Fase 3','Phase 3'),T('Crecimiento y liderazgo','Growth & leadership')]],
    capsules:['plan-negocio','tipos-empresa','cuenta-propia','contabilidad','construir-web','ia-responsable','presentaciones','mujer-emprendedora']},
  junior:{eyebrow:T('Programa Juniors','Juniors Program'),age:T('8–13 años','ages 8–13'),title:T('Juniors','Juniors'),em:'🧒',
    desc:T('Programa complementario: 80 mini-proyectos prácticos, cada uno con un entregable claro, en 10 tracks temáticos.','Complementary program: 80 hands-on mini-projects, each with a clear deliverable, across 10 themed tracks.'),
    quarters:[[T('1–2 sem','1–2 wks'),T('Cada mini-proyecto','Each mini-project')],[T('10 tracks','10 tracks'),T('Artes a Economía del hogar','Arts to Home economics')],[T('Entregable','Deliverable'),T('Siempre concreto','Always concrete')]],
    capsules:['estilos-aprendizaje','ia-responsable','ganar-amigos','trabajo-equipo']}
};

/* ---------------- Gamification economy ---------------- */
const COINS_PER_CAPSULE = 20;
const KAHOOT_BASE = 4;   // coins per correct answer
const KAHOOT_SPEED = 6;  // extra coins for a fast correct answer

/* Trust levels (ChanakCoins thresholds) */
const TRUST = [
  {key:'sembrador', em:'🌱', min:0,   name:T('Sembrador','Sower')},
  {key:'mayordomo', em:'🛡️', min:80,  name:T('Mayordomo','Steward')},
  {key:'embajador', em:'👑', min:200, name:T('Embajador','Ambassador')},
];
function trustFor(coins){
  let t = TRUST[0];
  for(const lv of TRUST){ if(coins >= lv.min) t = lv; }
  return t;
}
function trustNext(coins){
  for(const lv of TRUST){ if(coins < lv.min) return lv; }
  return null;
}

/* Capsules whose tag makes them cross-cutting (no graded deliverable) */
const NO_DELIVERABLE_TAGS = ['faith','care','study'];

/* SAFE box for wellbeing capsules */
const SAFE_BOX = T(
  '<b>Recuerda:</b> esto es un espacio de aprendizaje, no un sustituto de la ayuda de un adulto. Si estás pasando por algo difícil, habla con tus padres, tu mentor o un adulto de confianza. Nunca estás solo.',
  '<b>Remember:</b> this is a learning space, not a substitute for help from an adult. If you\'re going through something hard, talk to your parents, your mentor or a trusted adult. You are never alone.'
);

/* Capsules are defined in data-capsules.js (loaded after this file) */
