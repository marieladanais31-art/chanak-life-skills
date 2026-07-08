/* =====================================================================
   Chanak Life Skills & Leadership — CAPSULES
   Each capsule: {tag, eyebrow, title, book?, steps[], byAge?}
   byAge: {kids,tween,teen,senior,adult} deepening challenges + sources
   ===================================================================== */

const CAPSULES = {

/* ============ SEEDLING ============ */
identidad:{tag:'core',eyebrow:T('Seedling · Q1','Seedling · Q1'),title:T('¿Quién soy? Identidad y raíces','Who am I? Identity and roots'),book:BOOKS.biblia,
  steps:[
    {type:'hook',kicker:T('Para empezar','To begin'),h:T('Un escudo dice más que un nombre','A shield says more than a name'),
     scenario:T('Los caballeros llevaban un escudo que contaba su historia: de dónde venían, qué defendían, qué soñaban. Si diseñaras el tuyo hoy…','Knights carried a shield that told their story: where they came from, what they defended, what they dreamed. If you designed yours today…'),
     body:T('Crearás tu <b>Escudo de Armas Personal</b> con cuatro cuadrantes: Fe · Raíces · Talento · Sueño.','You\'ll create your <b>Personal Coat of Arms</b> with four quarters: Faith · Roots · Talent · Dream.')},
    {type:'theory',kicker:T('La idea','The idea'),h:T('Identidad antes que estrategia','Identity before strategy'),
     body:T('No puedes liderar hacia dónde vas si no sabes quién eres. La identidad es la unión de tus raíces, tus dones y tu propósito en Cristo.','You cannot lead toward where you\'re going if you don\'t know who you are. Identity is the union of your roots, your gifts and your purpose in Christ.'),
     diagram:T('<b>Fórmula del Escudo</b><br>Fe + Raíces + Talento + Sueño = Identidad con dirección.','<b>Shield formula</b><br>Faith + Roots + Talent + Dream = Identity with direction.')},
    {type:'quiz',kicker:T('Comprueba','Check'),h:T('¿Qué NO define tu identidad?','What does NOT define your identity?'),
     q:T('¿Cuál de estos NO es una base sólida de identidad?','Which of these is NOT a solid foundation of identity?'),
     opts:[{t:T('Mis raíces y mi familia','My roots and family'),ok:false},{t:T('El número de seguidores que tengo','How many followers I have'),ok:true},{t:T('Los dones que Dios me dio','The gifts God gave me'),ok:false},{t:T('Aquello en lo que creo','What I believe in'),ok:false}],
     okMsg:T('Exacto. La aprobación externa cambia y no sostiene quién eres.','Exactly. External approval changes and cannot hold who you are.'),
     noMsg:T('Piénsalo otra vez: eso es algo interno y estable.','Think again: that is something internal and stable.')},
    {type:'reflect',kicker:T('Tu turno','Your turn'),h:T('Primer cuadrante de tu escudo','First quarter of your shield'),
     body:T('Escribe una frase para cada cuadrante. Será la base de tu entregable Q1.','Write one sentence for each quarter. This will be the base of your Q1 deliverable.'),
     prompt:T('Fe: ___\nRaíces: ___\nTalento: ___\nSueño: ___','Faith: ___\nRoots: ___\nTalent: ___\nDream: ___')}
  ]},

habitos:{tag:'new',eyebrow:T('Seedling · Q2 · Hábitos Atómicos','Seedling · Q2 · Atomic Habits'),title:T('Hábitos que te construyen','Habits that build you'),book:BOOKS.habitos,
  steps:[
    {type:'hook',kicker:T('Para empezar','To begin'),h:T('1% mejor cada día','1% better every day'),
     scenario:T('Si mejoras solo 1% cada día durante un año, terminas casi 38 veces mejor. Los pequeños hábitos se multiplican.','If you improve just 1% each day for a year, you end up nearly 38 times better. Small habits compound.'),
     body:T('Conectamos la idea central de <b>Hábitos Atómicos</b> con tu Tracker de 21 días.','We connect the core idea of <b>Atomic Habits</b> with your 21-day Tracker.')},
    {type:'theory',kicker:T('La idea','The idea'),h:T('Sistemas, no metas','Systems, not goals'),
     body:T('No subes al nivel de tus metas; bajas al nivel de tus sistemas. El sistema es lo que repites.','You don\'t rise to your goals; you fall to your systems. The system is what you repeat.'),
     diagram:T('<b>Las 4 leyes del hábito</b><br>1. Hazlo obvio · 2. Hazlo atractivo · 3. Hazlo fácil (2 min) · 4. Hazlo satisfactorio.','<b>The 4 laws of habit</b><br>1. Make it obvious · 2. Make it attractive · 3. Make it easy (2 min) · 4. Make it satisfying.')},
    {type:'quiz',kicker:T('Comprueba','Check'),h:T('Meta vs. sistema','Goal vs. system'),
     q:T('¿Cuál describe un SISTEMA?','Which describes a SYSTEM?'),
     opts:[{t:T('Quiero leer más este año','I want to read more'),ok:false},{t:T('Leo 10 páginas después de cenar, cada día','I read 10 pages after dinner, every day'),ok:true},{t:T('Voy a ser culto','I\'ll become well-read'),ok:false},{t:T('Terminaré 20 libros','I\'ll finish 20 books'),ok:false}],
     okMsg:T('¡Sí! Acción concreta, pequeña y repetible.','Yes! Concrete, small, repeatable action.'),
     noMsg:T('Eso es una meta. Un sistema es la acción diaria.','That\'s a goal. A system is the daily action.')},
    {type:'reflect',kicker:T('Tu turno','Your turn'),h:T('Diseña tu hábito de 21 días','Design your 21-day habit'),
     body:T('Aplica "hazlo fácil": tu hábito debe poder hacerse en 2 minutos.','Apply "make it easy": your habit should be doable in 2 minutes.'),
     prompt:T('Hábito: ___\nVersión de 2 minutos: ___\nSeñal que lo dispara: ___','Habit: ___\n2-minute version: ___\nTrigger: ___')}
  ],
  byAge:{
    kids:T('Dibuja una <b>escalera de 7 escalones</b>; en cada uno pega una estrella cuando cumplas tu hábito de 2 minutos durante la semana.','Draw a <b>7-step ladder</b>; add a star on each step when you complete your 2-minute habit during the week.'),
    tween:T('Haz un <b>mapa mental</b> de las 4 leyes del hábito con un ejemplo tuyo en cada una.','Make a <b>mind map</b> of the 4 laws of habit with your own example for each.'),
    teen:T('Lleva tu <b>tracker de 21 días</b> y escribe media página sobre qué ley te costó más y por qué.','Keep your <b>21-day tracker</b> and write half a page on which law was hardest and why.'),
    senior:T('Diseña <b>3 hábitos encadenados</b> (habit stacking) y sustenta con un capítulo del libro o un artículo sobre formación de hábitos.','Design <b>3 stacked habits</b> and back it up with a chapter of the book or an article on habit formation.'),
    adult:T('Aplica el sistema a una <b>meta real de tu emprendimiento</b> y prepara una mini-charla para enseñárselo a tu equipo.','Apply the system to a <b>real goal in your business</b> and prepare a mini-talk to teach it to your team.')
  }},

lenguajes:{tag:'new',eyebrow:T('Seedling · Q2 · Relaciones','Seedling · Q2 · Relationships'),title:T('Los 5 lenguajes del amor','The 5 love languages'),book:BOOKS.lenguajes,
  steps:[
    {type:'hook',kicker:T('Para empezar','To begin'),h:T('No todos reciben el amor igual','Not everyone receives love the same way'),
     scenario:T('Le regalas algo caro a un amigo y no se emociona… pero cuando le dedicas una tarde, se le ilumina la cara.','You give a friend something expensive and they\'re not moved… but when you give them an afternoon, their face lights up.'),
     body:T('Los 5 lenguajes explican cómo cada persona <b>siente</b> que la quieren.','The 5 languages explain how each person <b>feels</b> loved.')},
    {type:'theory',kicker:T('La idea','The idea'),h:T('Cinco formas de decir "te quiero"','Five ways to say "I love you"'),
     body:T('Cada persona tiene uno o dos lenguajes principales. Hay que aprender el del otro.','Each person has one or two main languages. You must learn the other\'s.'),
     diagram:T('<b>Los 5 lenguajes</b><br>1. Palabras de afirmación · 2. Tiempo de calidad · 3. Regalos · 4. Actos de servicio · 5. Contacto físico.','<b>The 5 languages</b><br>1. Words of affirmation · 2. Quality time · 3. Gifts · 4. Acts of service · 5. Physical touch.')},
    {type:'match',kicker:T('Comprueba','Check'),h:T('Empareja el gesto con su lenguaje','Match the gesture to its language'),
     pool:[{id:'a',t:T('"Estoy orgulloso de ti"','"I\'m proud of you"')},{id:'b',t:T('Lavar los platos por tu hermano','Doing your brother\'s dishes')},{id:'c',t:T('Ver una peli juntos sin móvil','A movie together, no phone')}],
     targets:[{label:T('Palabras de afirmación','Words of affirmation'),ans:'a'},{label:T('Actos de servicio','Acts of service'),ans:'b'},{label:T('Tiempo de calidad','Quality time'),ans:'c'}],
     okMsg:T('¡Perfecto! Reconoces los tres lenguajes.','Perfect! You recognize all three.')},
    {type:'reflect',kicker:T('Tu turno','Your turn'),h:T('¿Cuál es el lenguaje de tus padres?','What is your parents\' language?'),
     body:T('Piensa en qué les emociona de verdad.','Think about what truly moves them.'),
     prompt:T('Lenguaje de mi padre/madre: ___\nUn gesto esta semana: ___','My parent\'s language: ___\nOne gesture this week: ___')}
  ],
  byAge:{
    kids:T('Dibuja los <b>5 lenguajes</b> con un símbolo para cada uno y rodea el tuyo.','Draw the <b>5 languages</b> with a symbol for each and circle yours.'),
    tween:T('Haz un <b>mapa mental</b> y adivina el lenguaje de 3 familiares.','Make a <b>mind map</b> and guess the language of 3 family members.'),
    teen:T('Escribe la <b>carta a tus padres</b> en su idioma de amor (entregable HELPING).','Write the <b>letter to your parents</b> in their love language (HELPING deliverable).'),
    senior:T('Investiga cómo aplican los lenguajes en la <b>amistad y el liderazgo</b>, con una fuente extra.','Research how the languages apply to <b>friendship and leadership</b>, with an extra source.'),
    adult:T('Aplícalo a tu <b>relación de pareja o equipo</b> y comparte una reflexión con tu mentor.','Apply it to your <b>relationship or team</b> and share a reflection with your mentor.')
  }},

comunicacion:{tag:'new',eyebrow:T('Seedling · transversal','Seedling · cross-topic'),title:T('Comunicación y manejo de conflictos','Communication and conflict management'),
  steps:[
    {type:'hook',kicker:T('Para empezar','To begin'),h:T('"Siempre haces lo mismo"','"You always do the same"'),
     scenario:T('"Siempre me dejas de lado" vs. "Cuando quedasteis sin avisarme, me sentí fuera". La segunda abre conversación.','"You always leave me out" vs. "When you made plans without telling me, I felt left out." The second opens a conversation.'),
     body:T('Comunicar bien no es ganar: es que el otro entienda y la relación siga en pie.','Communicating well isn\'t winning: it\'s the other understanding and the relationship staying intact.')},
    {type:'theory',kicker:T('La idea','The idea'),h:T('Escuchar y hablar en primera persona','Listen and speak in first person'),
     body:T('Dos herramientas: la <b>escucha activa</b> y el <b>mensaje-yo</b>.','Two tools: <b>active listening</b> and the <b>I-message</b>.'),
     diagram:T('<b>Mensaje-yo</b><br>"Cuando ___, me sentí ___, porque ___. Me ayudaría que ___."','<b>I-message</b><br>"When ___, I felt ___, because ___. It would help if ___."')},
    {type:'quiz',kicker:T('Comprueba','Check'),h:T('Elige el mensaje-yo','Choose the I-message'),
     q:T('¿Cuál es un mensaje-yo bien construido?','Which is a well-built I-message?'),
     opts:[{t:T('Eres un desordenado','You\'re so messy'),ok:false},{t:T('Cuando dejas los platos, me siento agobiada porque me toca todo','When you leave the dishes, I feel overwhelmed because it all falls on me'),ok:true},{t:T('Nunca ayudas','You never help'),ok:false},{t:T('Todos dicen que eres desconsiderado','Everyone says you\'re inconsiderate'),ok:false}],
     okMsg:T('¡Eso es! Hecho + emoción + necesidad, sin atacar.','That\'s it! Fact + emotion + need, without attacking.'),
     noMsg:T('Esa frase ataca o generaliza.','That attacks or generalizes.')},
    {type:'reflect',kicker:T('Tu turno','Your turn'),h:T('Reescribe un conflicto','Rewrite a conflict'),
     body:T('Transforma un roce reciente en mensaje-yo.','Turn a recent friction into an I-message.'),
     prompt:T('Situación: ___\nMi mensaje-yo: "Cuando ___, me sentí ___, porque ___."','Situation: ___\nMy I-message: "When ___, I felt ___, because ___."')}
  ],
  byAge:{
    kids:T('Dibuja dos caras: una que <b>ataca</b> y otra que usa el <b>mensaje-yo</b>.','Draw two faces: one that <b>attacks</b> and one that uses the <b>I-message</b>.'),
    tween:T('Haz un <b>cómic de 3 viñetas</b> resolviendo un conflicto con un mensaje-yo.','Make a <b>3-panel comic</b> solving a conflict with an I-message.'),
    teen:T('Graba o escribe un <b>diálogo</b> aplicando escucha activa y busca una fuente sobre comunicación asertiva.','Record or write a <b>dialogue</b> using active listening and find a source on assertive communication.'),
    senior:T('Analiza un <b>conflicto real de la actualidad</b> y propón cómo se resolvería con estas herramientas.','Analyze a <b>real current conflict</b> and propose how these tools would resolve it.'),
    adult:T('Diseña un <b>protocolo de resolución de conflictos</b> para tu equipo o familia.','Design a <b>conflict-resolution protocol</b> for your team or family.')
  }},

bold:{tag:'core',eyebrow:T('Seedling · Q3','Seedling · Q3'),title:T('Proyecto BOLD y propósito','BOLD Project and purpose'),book:BOOKS.biblia,
  steps:[
    {type:'hook',kicker:T('Para empezar','To begin'),h:T('7 días para dejar una huella','7 days to leave a mark'),
     scenario:T('¿Y si en una semana organizas algo pequeño que mejore la vida de alguien cerca de ti?','What if in one week you organize something small that improves someone\'s life near you?'),
     body:T('El Proyecto BOLD se ejecuta en 7 días y cierra con tu "My Story in 2 Minutes".','The BOLD Project runs in 7 days and ends with your "My Story in 2 Minutes".')},
    {type:'theory',kicker:T('La idea','The idea'),h:T('Propósito = talento al servicio de una necesidad','Purpose = talent serving a need'),
     body:T('El propósito aparece donde tu talento se cruza con una necesidad real, para la gloria de Dios.','Purpose appears where your talent meets a real need, for God\'s glory.'),
     diagram:T('<b>Fórmula de propósito</b><br>Tu talento + una necesidad que ves = tu proyecto BOLD.','<b>Purpose formula</b><br>Your talent + a need you see = your BOLD project.')},
    {type:'quiz',kicker:T('Comprueba','Check'),h:T('¿Qué hace fuerte a un BOLD?','What makes a BOLD strong?'),
     q:T('¿Cuál BOLD está mejor enfocado?','Which BOLD is best focused?'),
     opts:[{t:T('"Voy a ser mejor persona"','"I\'ll be a better person"'),ok:false},{t:T('"Enseñaré a leer la hora a mi hermano en 7 días con una ficha que yo diseñe"','"I\'ll teach my brother to tell time in 7 days with a card I design"'),ok:true},{t:T('"Quiero ayudar a la gente"','"I want to help people"'),ok:false},{t:T('"Algún día montaré una ONG"','"Someday I\'ll start an NGO"'),ok:false}],
     okMsg:T('¡Sí! Concreto, medible y con entregable claro.','Yes! Concrete, measurable, clear deliverable.'),
     noMsg:T('Demasiado vago. BOLD necesita algo concreto en 7 días.','Too vague. BOLD needs something concrete in 7 days.')},
    {type:'reflect',kicker:T('Tu turno','Your turn'),h:T('Diseña tu BOLD','Design your BOLD'),
     body:T('Cruza un talento tuyo con una necesidad cercana.','Cross a talent with a nearby need.'),
     prompt:T('Mi talento: ___\nNecesidad que veo: ___\nMi proyecto de 7 días: ___','My talent: ___\nNeed I see: ___\nMy 7-day project: ___')}
  ]},

'ia-responsable':{tag:'new',eyebrow:T('Transversal · Ciudadanía digital','Cross-topic · Digital citizenship'),title:T('Manejo responsable de la IA','Responsible use of AI'),
  steps:[
    {type:'hook',kicker:T('Para empezar','To begin'),h:T('La IA es una herramienta, no un atajo','AI is a tool, not a shortcut'),
     scenario:T('Le pides a una IA que escriba tu ensayo. Sale bien… pero no aprendiste nada, y algunos datos eran falsos.','You ask an AI to write your essay. It reads well… but you learned nothing, and some facts were false.'),
     body:T('Usar IA con responsabilidad multiplica tu trabajo; usarla mal lo arruina.','Using AI responsibly multiplies your work; using it wrong ruins it.')},
    {type:'theory',kicker:T('La idea','The idea'),h:T('Asistente sí, sustituto no','Assistant yes, substitute no'),
     body:T('La IA predice lo probable, no lo verdadero: puede "alucinar" datos. Úsala para generar ideas o revisar, nunca para entregar lo que no entiendes.','AI predicts what\'s likely, not what\'s true: it can "hallucinate". Use it to brainstorm or review, never to submit what you don\'t understand.'),
     diagram:T('<b>Regla Chanak de IA</b><br>1. Verifica todo dato · 2. Declara cuándo la usaste · 3. No suplantes tu voz · 4. Nunca metas datos personales.','<b>Chanak AI rule</b><br>1. Verify every fact · 2. Disclose use · 3. Don\'t replace your voice · 4. Never enter personal data.')},
    {type:'quiz',kicker:T('Comprueba','Check'),h:T('¿Uso responsable o no?','Responsible use or not?'),
     q:T('¿Cuál es un uso RESPONSABLE de la IA?','Which is a RESPONSIBLE use of AI?'),
     opts:[{t:T('Copiar y pegar su respuesta como mía','Copy-paste as mine'),ok:false},{t:T('Pedirle que explique, verificarlo y escribirlo con mis palabras','Ask it to explain, verify, and write in my words'),ok:true},{t:T('Subir el examen de un compañero','Upload a classmate\'s exam'),ok:false},{t:T('Creerme todo sin comprobar','Believe all without checking'),ok:false}],
     okMsg:T('¡Exacto! Aprender + verificar + tu propia voz.','Exactly! Learn + verify + your own voice.'),
     noMsg:T('Eso rompe la regla Chanak.','That breaks the Chanak rule.')},
    {type:'reflect',kicker:T('Tu turno','Your turn'),h:T('Tu compromiso con la IA','Your commitment to AI'),
     body:T('Define cómo la vas a usar.','Define how you\'ll use it.'),
     prompt:T('Para qué SÍ: ___\nPara qué NO: ___\nCómo verificaré: ___','What FOR: ___\nWhat NOT: ___\nHow I\'ll verify: ___')}
  ],
  byAge:{
    kids:T('Dibuja un <b>robot ayudante</b> y una lista de "sí" y "no" al usarlo.','Draw a <b>helper robot</b> and a list of "do" and "don\'t" when using it.'),
    tween:T('Mapa mental: <b>usos buenos vs. usos malos</b> de la IA en la escuela.','Mind map: <b>good vs. bad uses</b> of AI at school.'),
    teen:T('Usa una IA para un tema, <b>verifica 3 datos</b> en fuentes reales y anota cuáles falló.','Use an AI on a topic, <b>verify 3 facts</b> in real sources, and note which it got wrong.'),
    senior:T('Escribe un <b>código de ética de IA</b> de una página para estudiantes, citando una fuente.','Write a one-page <b>AI ethics code</b> for students, citing a source.'),
    adult:T('Diseña cómo usar IA en tu <b>marketing/productividad</b> sin perder autenticidad ni privacidad.','Design how to use AI in your <b>marketing/productivity</b> without losing authenticity or privacy.')
  }},

/* ============ VIDA CRISTIANA ============ */
evangelismo:{tag:'faith',eyebrow:T('Vida Cristiana · Testimonio','Christian Life · Testimony'),title:T('Evangelismo: compartir tu fe','Evangelism: sharing your faith'),book:BOOKS.biblia,
  steps:[
    {type:'hook',kicker:T('Para empezar','To begin'),h:T('Tu historia es tu mejor mensaje','Your story is your best message'),
     scenario:T('No necesitas ser teólogo. La pregunta más poderosa es: "¿por qué crees lo que crees?" — y solo tú puedes responderla.','You don\'t need to be a theologian. The most powerful question is: "why do you believe what you believe?" — and only you can answer it.'),
     body:T('Evangelizar es compartir con respeto y amor lo que Dios ha hecho en tu vida.','To evangelize is to share with respect and love what God has done in your life.')},
    {type:'theory',kicker:T('La idea','The idea'),h:T('Tu testimonio en 3 partes','Your testimony in 3 parts'),
     body:T('Un testimonio claro no es un sermón: es tu historia contada con sencillez.','A clear testimony isn\'t a sermon: it\'s your story told simply.'),
     diagram:T('<b>Estructura del testimonio</b><br>1. Antes · 2. El encuentro con Cristo · 3. Después. Honesto, breve y concreto.','<b>Testimony structure</b><br>1. Before · 2. The encounter with Christ · 3. After. Honest, brief, concrete.')},
    {type:'quiz',kicker:T('Comprueba','Check'),h:T('¿Qué hace bueno a un testimonio?','What makes a testimony good?'),
     q:T('¿La mejor actitud al compartir tu fe?','The best attitude when sharing your faith?'),
     opts:[{t:T('Ganar la discusión a toda costa','Win the argument at all costs'),ok:false},{t:T('Escuchar con respeto y compartir mi historia','Listen with respect and share my story'),ok:true},{t:T('Hacer sentir mal al que no cree','Make the non-believer feel bad'),ok:false},{t:T('Usar palabras muy complicadas','Use complicated words'),ok:false}],
     okMsg:T('Así es. El respeto y la autenticidad abren corazones.','Right. Respect and authenticity open hearts.'),
     noMsg:T('El evangelismo sano nace del amor, no de la presión.','Healthy evangelism comes from love, not pressure.')},
    {type:'reflect',kicker:T('Tu turno','Your turn'),h:T('Escribe tu testimonio','Write your testimony'),
     body:T('Redacta las 3 partes en pocas frases.','Write the 3 parts in a few sentences.'),
     prompt:T('Antes: ___\nEl encuentro: ___\nDespués: ___','Before: ___\nThe encounter: ___\nAfter: ___')}
  ],
  byAge:{
    kids:T('Dibuja tu historia en <b>3 viñetas</b>: antes, el encuentro y después.','Draw your story in <b>3 panels</b>: before, the encounter, after.'),
    tween:T('Practica contar tu testimonio a un familiar en <b>1 minuto</b>.','Practice telling your testimony to a relative in <b>1 minute</b>.'),
    teen:T('Escribe tu testimonio completo y estudia <b>1 Pedro 3:15</b>; anota qué significa "con mansedumbre y respeto".','Write your full testimony and study <b>1 Peter 3:15</b>; note what "with gentleness and respect" means.'),
    senior:T('Investiga <b>dos métodos de evangelismo</b> distintos y evalúa cuál se ajusta a tu contexto, con fuentes.','Research <b>two evangelism methods</b> and evaluate which fits your context, with sources.'),
    adult:T('Diseña un <b>plan de alcance</b> para tu comunidad o iglesia y compártelo con tu mentor.','Design an <b>outreach plan</b> for your community or church and share it with your mentor.')
  }},

misiones:{tag:'faith',eyebrow:T('Vida Cristiana · Servicio','Christian Life · Service'),title:T('Misiones: fe que se mueve','Missions: faith that moves'),book:BOOKS.biblia,
  steps:[
    {type:'hook',kicker:T('Para empezar','To begin'),h:T('Misión empieza donde estás','Mission starts where you are'),
     scenario:T('Muchos creen que "misiones" es viajar lejos. Pero tu escuela, barrio y casa son campos de misión igual de reales.','Many think "missions" means traveling far. But your school, neighborhood and home are just as real a mission field.'),
     body:T('La misión es un estilo de vida de servicio, cerca y lejos.','Mission is a lifestyle of service, near and far.')},
    {type:'theory',kicker:T('La idea','The idea'),h:T('Los círculos de la misión','The circles of mission'),
     body:T('La misión se expande en círculos, como en Hechos 1:8.','Mission expands in circles, as in Acts 1:8.'),
     diagram:T('<b>Hechos 1:8</b><br>Jerusalén (casa/iglesia) → Judea (ciudad) → Samaria (los diferentes) → lo último de la tierra.','<b>Acts 1:8</b><br>Jerusalem (home/church) → Judea (city) → Samaria (the different) → ends of the earth.')},
    {type:'quiz',kicker:T('Comprueba','Check'),h:T('¿Dónde empieza la misión?','Where does mission begin?'),
     q:T('¿Por dónde debería empezar tu misión?','Where should your mission begin?'),
     opts:[{t:T('Solo en países lejanos','Only far-away countries'),ok:false},{t:T('Donde estoy: mi casa, escuela y barrio','Where I am: home, school, neighborhood'),ok:true},{t:T('Solo cuando sea adulto','Only as an adult'),ok:false},{t:T('Solo si soy pastor','Only if I\'m a pastor'),ok:false}],
     okMsg:T('Correcto. Empieza en tu "Jerusalén".','Correct. It starts in your "Jerusalem".'),
     noMsg:T('Recuerda los círculos: empieza donde estás.','Remember the circles: it starts where you are.')},
    {type:'reflect',kicker:T('Tu turno','Your turn'),h:T('Tu mapa de misión','Your mission map'),
     body:T('Una acción concreta para cada círculo.','One concrete action per circle.'),
     prompt:T('En mi casa: ___\nEn mi escuela/barrio: ___\nUn lugar lejano por el que oraré: ___','At home: ___\nAt school/neighborhood: ___\nA distant place I\'ll pray for: ___')}
  ],
  byAge:{
    kids:T('Dibuja un <b>mapa con círculos</b> y pon un corazón donde puedes ayudar.','Draw a <b>map with circles</b> and put a heart where you can help.'),
    tween:T('Mapa mental de <b>Hechos 1:8</b> con una acción por círculo.','Mind map of <b>Acts 1:8</b> with one action per circle.'),
    teen:T('Investiga <b>un misionero</b> de la historia y escribe media página sobre su legado.','Research <b>one missionary</b> in history and write half a page on their legacy.'),
    senior:T('Estudia una <b>cultura o país no alcanzado</b> y prepara una ficha de oración documentada.','Study an <b>unreached culture or country</b> and prepare a documented prayer sheet.'),
    adult:T('Diseña un <b>proyecto misional</b> viable (local o global) con recursos y tiempos.','Design a viable <b>mission project</b> (local or global) with resources and timeline.')
  }},

predicacion:{tag:'faith',eyebrow:T('Vida Cristiana · Comunicación','Christian Life · Communication'),title:T('Cómo preparar una predicación','How to prepare a sermon'),book:BOOKS.biblia,
  steps:[
    {type:'hook',kicker:T('Para empezar','To begin'),h:T('Un mensaje, una idea','One message, one idea'),
     scenario:T('¿Oíste una charla que saltaba de tema y saliste sin recordar nada? La claridad viene de una sola idea central.','Heard a talk that jumped around and you left remembering nothing? Clarity comes from one central idea.'),
     body:T('Aquí aprendes una estructura sencilla y fiel para tu primer mensaje.','Here you learn a simple, faithful structure for your first message.')},
    {type:'theory',kicker:T('La idea','The idea'),h:T('Del texto a la vida','From the text to life'),
     body:T('Una buena predicación parte del texto (qué dice), lo explica en contexto (qué significó) y lo aplica hoy (qué hago). Nunca al revés.','A good sermon starts from the text (what it says), explains its context (what it meant) and applies it today (what I do). Never backwards.'),
     diagram:T('<b>Los 4 pasos</b><br>1. Texto · 2. Contexto · 3. Idea central (1 frase) · 4. Aplicación (2–3 pasos).','<b>The 4 steps</b><br>1. Text · 2. Context · 3. Big idea (1 sentence) · 4. Application (2–3 steps).')},
    {type:'quiz',kicker:T('Comprueba','Check'),h:T('¿Por dónde se empieza?','Where do you start?'),
     q:T('¿El orden correcto para un mensaje fiel?','The right order for a faithful message?'),
     opts:[{t:T('Empezar por mi opinión y buscar un versículo','Start with my opinion, find a verse'),ok:false},{t:T('Partir del texto, entender el contexto y luego aplicar','Start from text, understand context, then apply'),ok:true},{t:T('Contar solo anécdotas','Tell only anecdotes'),ok:false},{t:T('Copiar el sermón de otro','Copy another\'s sermon'),ok:false}],
     okMsg:T('Exacto. El texto manda; nosotros lo servimos.','Exactly. The text leads; we serve it.'),
     noMsg:T('El orden fiel es texto → contexto → idea → aplicación.','The faithful order is text → context → idea → application.')},
    {type:'reflect',kicker:T('Tu turno','Your turn'),h:T('Tu primer bosquejo','Your first outline'),
     body:T('Elige un versículo corto y completa los 4 pasos.','Choose a short verse and complete the 4 steps.'),
     prompt:T('Texto: ___\nContexto: ___\nIdea central: ___\nAplicación (2 pasos): ___','Text: ___\nContext: ___\nBig idea: ___\nApplication (2 steps): ___')}
  ],
  byAge:{
    kids:T('Elige un versículo y haz un <b>dibujo</b> que enseñe su idea a otros niños.','Pick a verse and make a <b>drawing</b> that teaches its idea to other kids.'),
    tween:T('Prepara un <b>devocional de 3 minutos</b> con los 4 pasos y compártelo en familia.','Prepare a <b>3-minute devotional</b> with the 4 steps and share it at home.'),
    teen:T('Prepara y <b>predica un mensaje de 5 minutos</b>; graba o pide referencia de un adulto.','Prepare and <b>preach a 5-minute message</b>; record it or get an adult\'s reference.'),
    senior:T('Estudia un pasaje con <b>2 comentarios bíblicos</b> distintos y arma un bosquejo de 15 minutos.','Study a passage with <b>2 different Bible commentaries</b> and build a 15-minute outline.'),
    adult:T('Prepara una <b>serie de 3 mensajes</b> conectados y un plan de discipulado que la acompañe.','Prepare a <b>3-message series</b> and a discipleship plan to go with it.')
  }},

cosmovisiones:{tag:'faith',eyebrow:T('Vida Cristiana · Estudio','Christian Life · Study'),title:T('Cosmovisiones: creación y fin de los tiempos','Worldviews: creation and the end times'),book:BOOKS.biblia,mentor:true,
  steps:[
    {type:'hook',kicker:T('Para empezar','To begin'),h:T('Cristianos fieles, distintas lecturas','Faithful Christians, different readings'),
     scenario:T('Dos creyentes que aman la Biblia pueden entender los "días" de la creación o Apocalipsis de formas distintas. Entender por qué te ayuda a dialogar con humildad.','Two believers who love the Bible can understand the "days" of creation or Revelation differently. Understanding why helps you dialogue humbly.'),
     body:T('Esta cápsula presenta las principales posturas con respeto. No busca imponerte una: tu mentor te acompañará según la postura de tu familia e iglesia.','This capsule presents the main views respectfully. It does not impose one: your mentor will guide you per your family\'s and church\'s position.')},
    {type:'theory',kicker:T('La idea','The idea'),h:T('Un panorama, no un veredicto','A panorama, not a verdict'),
     body:T('En creación existen lecturas de Tierra joven, Tierra antigua y día-era; todas afirman a Dios como Creador. En escatología hay lecturas premilenial, amilenial y posmilenial. Todas comparten la esperanza en el regreso de Jesús.','In creation there are young-earth, old-earth and day-age readings; all affirm God as Creator. In eschatology there are premillennial, amillennial and postmillennial readings. All share the hope of Jesus\' return.'),
     diagram:T('<b>Lo esencial que une</b><br>Dios creó con propósito · el ser humano es a su imagen · Cristo volverá · habrá restauración final. El "cómo" y el "cuándo" es donde hay diversidad.','<b>The essentials that unite</b><br>God created with purpose · humans bear his image · Christ will return · final restoration. The "how" and "when" is where diversity lies.')},
    {type:'quiz',kicker:T('Comprueba','Check'),h:T('¿Cómo dialogar?','How to dialogue?'),
     q:T('Ante un cristiano que interpreta la creación distinto, lo mejor es:','Toward a Christian who interprets creation differently, the best is:'),
     opts:[{t:T('Decirle que no es verdadero cristiano','Tell them they\'re not a real Christian'),ok:false},{t:T('Escuchar, buscar lo esencial que compartimos y dialogar con humildad','Listen, seek shared essentials, dialogue humbly'),ok:true},{t:T('Evitar el tema para siempre','Avoid it forever'),ok:false},{t:T('Cambiar de postura para caer bien','Change views to be liked'),ok:false}],
     okMsg:T('En lo esencial, unidad; en lo secundario, libertad; en todo, amor.','In essentials unity; in non-essentials liberty; in all things love.'),
     noMsg:T('El objetivo es dialogar con humildad sobre lo que nos une.','The goal is humble dialogue about what unites us.')},
    {type:'reflect',kicker:T('Tu turno','Your turn'),h:T('Prepara tus preguntas para el mentor','Prepare your questions for the mentor'),
     body:T('Este tema se profundiza con tu mentor. Anota lo que investigarás y consultarás con tu familia e iglesia.','This topic goes deeper with your mentor. Note what you\'ll research and discuss with your family and church.'),
     prompt:T('Lo esencial que entiendo: ___\nUna duda para mi mentor: ___\nQué consultaré con mi familia/iglesia: ___','What I understand: ___\nA question for my mentor: ___\nWhat I\'ll discuss with family/church: ___')}
  ],
  byAge:{
    kids:T('Dibuja la <b>creación</b> y escribe: "Dios hizo todo con un propósito".','Draw <b>creation</b> and write: "God made everything with a purpose".'),
    tween:T('Mapa mental de <b>lo que une</b> a los cristianos sobre creación y el regreso de Jesús.','Mind map of <b>what unites</b> Christians on creation and Jesus\' return.'),
    teen:T('Haz un <b>cuadro comparativo</b> de 2 posturas (sobre creación o escatología) y coméntalo con tu mentor.','Make a <b>comparison chart</b> of 2 views (creation or eschatology) and discuss it with your mentor.'),
    senior:T('Investiga <b>3 posturas</b> con una fuente cristiana seria por cada una y escribe tu postura provisional, fundamentada y humilde.','Research <b>3 views</b> with a serious Christian source each, and write your provisional, reasoned, humble position.'),
    adult:T('Prepara una <b>enseñanza equilibrada</b> que presente las posturas con caridad, para un grupo de estudio.','Prepare a <b>balanced teaching</b> presenting the views with charity, for a study group.')
  }},

temperamentos:{tag:'faith',eyebrow:T('Vida Cristiana · Carácter','Christian Life · Character'),title:T('Los temperamentos','The temperaments'),book:BOOKS.temperamentos,
  steps:[
    {type:'hook',kicker:T('Para empezar','To begin'),h:T('Dios no te hizo en serie','God didn\'t mass-produce you'),
     scenario:T('¿Por qué hay quien organiza todo, quien anima a todos, quien evita el conflicto y quien decide rápido? Son temperamentos distintos, y Dios usa a todos.','Why is there someone who organizes, someone who cheers, someone who avoids conflict, someone who decides fast? Different temperaments, and God uses them all.'),
     body:T('Conocer tu forma de ser te ayuda a ponerla al servicio de Dios y de otros.','Knowing your way of being helps you serve God and others with it.')},
    {type:'theory',kicker:T('La idea','The idea'),h:T('Cuatro estilos, un solo Señor','Four styles, one Lord'),
     body:T('Los cuatro temperamentos describen tendencias, no jaulas. Cada uno tiene fortalezas y debilidades que el carácter cristiano puede pulir.','The four temperaments describe tendencies, not cages. Each has strengths and weaknesses Christian character can refine.'),
     diagram:T('<b>Los 4 temperamentos</b><br>Sanguíneo (relacional) · Colérico (líder) · Melancólico (profundo) · Flemático (pacificador).','<b>The 4 temperaments</b><br>Sanguine (relational) · Choleric (leader) · Melancholic (deep) · Phlegmatic (peacemaker).')},
    {type:'match',kicker:T('Comprueba','Check'),h:T('Empareja la fortaleza','Match the strength'),
     pool:[{id:'a',t:T('Anima y conecta con la gente','Cheers and connects')},{id:'b',t:T('Decide y lidera con rapidez','Decides and leads quickly')},{id:'c',t:T('Analiza y organiza en profundidad','Analyzes and organizes deeply')}],
     targets:[{label:T('Sanguíneo','Sanguine'),ans:'a'},{label:T('Colérico','Choleric'),ans:'b'},{label:T('Melancólico','Melancholic'),ans:'c'}],
     okMsg:T('¡Bien! Reconoces las fortalezas.','Good! You recognize the strengths.')},
    {type:'reflect',kicker:T('Tu turno','Your turn'),h:T('Tu temperamento al servicio','Your temperament in service'),
     body:T('Identifica tu tendencia y qué debilidad quieres pulir.','Identify your tendency and which weakness to refine.'),
     prompt:T('Mi temperamento: ___\nUna fortaleza para servir: ___\nUna debilidad a pulir con Dios: ___','My temperament: ___\nA strength to serve: ___\nA weakness to refine with God: ___')}
  ],
  byAge:{
    kids:T('Dibuja <b>4 personajes</b>, uno por temperamento, y rodea el que más se te parece.','Draw <b>4 characters</b>, one per temperament, and circle the one most like you.'),
    tween:T('Mapa mental de tu temperamento: <b>fortalezas y debilidades</b>.','Mind map of your temperament: <b>strengths and weaknesses</b>.'),
    teen:T('Haz el test con tu familia y escribe cómo tu temperamento puede <b>servir en tu iglesia</b>.','Take the test with your family and write how your temperament can <b>serve in your church</b>.'),
    senior:T('Investiga cómo <b>personajes bíblicos</b> reflejan distintos temperamentos, con fuentes.','Research how <b>Bible characters</b> reflect different temperaments, with sources.'),
    adult:T('Analiza tu <b>equipo/familia</b> por temperamentos y diseña cómo asignar roles complementarios.','Analyze your <b>team/family</b> by temperament and design complementary roles.')
  }},

/* ============ CONOCIÉNDOME ============ */
pubertad:{tag:'care',eyebrow:T('Conociéndome · Cuerpo','Knowing Myself · Body'),title:T('La pubertad: tu cuerpo cambia','Puberty: your body changes'),
  steps:[
    {type:'hook',kicker:T('Para empezar','To begin'),h:T('Todo esto es normal','All of this is normal'),
     scenario:T('Creces, tu voz cambia, aparecen granos, sientes cosas nuevas. Puede dar vergüenza — pero es exactamente lo que se supone que pase, y le pasa a todos.','You grow, your voice changes, spots appear, you feel new things. It can be embarrassing — but it\'s exactly what\'s supposed to happen, and it happens to everyone.'),
     body:T('Espacio seguro para entender los cambios con respeto y verdad. Si algo te preocupa, habla con un adulto de confianza.','A safe space to understand the changes with respect and truth. If something worries you, talk to a trusted adult.')},
    {type:'theory',kicker:T('La idea','The idea'),h:T('Un cuerpo que se prepara para ser adulto','A body preparing for adulthood'),
     body:T('La pubertad es el proceso por el que tu cuerpo madura. Las hormonas provocan cambios físicos y emocionales. Cada persona lleva su propio ritmo: no hay uno "correcto".','Puberty is how your body matures. Hormones cause physical and emotional changes. Everyone has their own pace: there is no "right" one.'),
     diagram:T('<b>Claves</b><br>Higiene y descanso · alimentación equilibrada · preguntar sin miedo a un adulto de confianza · tu valor no depende de tu apariencia.','<b>Keys</b><br>Hygiene and rest · balanced eating · asking a trusted adult without fear · your worth doesn\'t depend on appearance.')},
    {type:'quiz',kicker:T('Comprueba','Check'),h:T('¿Verdadero o mito?','True or myth?'),
     q:T('"Todos deben desarrollarse al mismo tiempo." Esto es:','"Everyone must develop at the same time." This is:'),
     opts:[{t:T('Verdadero','True'),ok:false},{t:T('Un mito: cada persona tiene su ritmo','A myth: each has their pace'),ok:true},{t:T('Solo verdadero para algunos','Only true for some'),ok:false}],
     okMsg:T('Correcto. Compararte solo genera ansiedad innecesaria.','Correct. Comparing only creates needless anxiety.'),
     noMsg:T('Es un mito. Los ritmos varían y todos son normales.','It\'s a myth. Paces vary and all are normal.')},
    {type:'reflect',kicker:T('Tu turno','Your turn'),h:T('Una pregunta que tengas','A question you have'),
     body:T('Anota algo que quieras entender mejor para hablarlo con un adulto de confianza.','Note something to understand better to discuss with a trusted adult.'),
     prompt:T('Algo que quiero entender: ___\nCon quién de confianza lo hablaré: ___','Something I want to understand: ___\nWhich trusted person I\'ll talk to: ___')},
    {type:'safe'}
  ],
  byAge:{
    kids:T('Haz un <b>dibujo del cuerpo sano</b> con hábitos de higiene y descanso.','Draw a <b>healthy body</b> with hygiene and rest habits.'),
    tween:T('Prepara <b>3 preguntas</b> respetuosas para hacerle a un adulto de confianza.','Prepare <b>3 respectful questions</b> to ask a trusted adult.'),
    teen:T('Investiga en una <b>fuente médica fiable</b> (con guía de un adulto) un cambio que te genere dudas.','Research a change in a <b>reliable medical source</b> (with adult guidance).'),
    senior:T('Escribe una <b>guía breve</b> para un hermano menor sobre vivir bien la pubertad.','Write a <b>short guide</b> for a younger sibling on living puberty well.'),
    adult:T('Reflexiona sobre cómo <b>acompañar a un adolescente</b> en esta etapa con respeto y verdad.','Reflect on how to <b>support a teenager</b> in this stage with respect and truth.')
  }},

'salud-emocional':{tag:'care',eyebrow:T('Conociéndome · Mente','Knowing Myself · Mind'),title:T('Salud emocional','Emotional health'),
  steps:[
    {type:'hook',kicker:T('Para empezar','To begin'),h:T('Las emociones no son enemigas','Emotions are not enemies'),
     scenario:T('Sentir tristeza, miedo o enojo no está mal: son señales, como las luces del tablero de un coche.','Feeling sadness, fear or anger isn\'t wrong: they\'re signals, like a car\'s dashboard lights.'),
     body:T('Cuidar tu salud emocional es una habilidad que se aprende.','Caring for your emotional health is a learnable skill.')},
    {type:'theory',kicker:T('La idea','The idea'),h:T('Nombrar para dominar','Name it to tame it'),
     body:T('Poner nombre a lo que sientes reduce su intensidad. Pedir ayuda es de valientes, no de débiles.','Naming what you feel reduces its intensity. Asking for help is brave, not weak.'),
     diagram:T('<b>Kit de salud emocional</b><br>1. Nombra la emoción · 2. Respira y espera · 3. Muévete o escribe · 4. Habla con alguien de confianza · 5. Pide ayuda si el malestar dura o crece.','<b>Emotional health kit</b><br>1. Name it · 2. Breathe and pause · 3. Move or write · 4. Talk to someone you trust · 5. Ask for help if distress lasts or grows.')},
    {type:'quiz',kicker:T('Comprueba','Check'),h:T('¿Qué hacer con una emoción fuerte?','What to do with a strong emotion?'),
     q:T('Un buen primer paso ante una emoción intensa:','A good first step with an intense emotion:'),
     opts:[{t:T('Ignorarla y aguantar','Ignore and bottle up'),ok:false},{t:T('Nombrarla, respirar y esperar antes de reaccionar','Name it, breathe, pause'),ok:true},{t:T('Reaccionar de inmediato','React immediately'),ok:false},{t:T('Fingir que no pasa nada','Pretend nothing\'s wrong'),ok:false}],
     okMsg:T('Exacto. Nombrar y pausar te devuelve el control.','Exactly. Naming and pausing gives back control.'),
     noMsg:T('Aguantar o estallar no ayuda. Nombrar y pausar sí.','Bottling or exploding doesn\'t help. Naming and pausing does.')},
    {type:'reflect',kicker:T('Tu turno','Your turn'),h:T('Tu kit personal','Your personal kit'),
     body:T('Elige lo que a ti te funciona y a quién acudir.','Choose what works for you and who to turn to.'),
     prompt:T('Cuando me siento mal, algo que me ayuda: ___\nUna persona de confianza: ___','When I feel bad, something that helps: ___\nA trusted person: ___')},
    {type:'safe'}
  ],
  byAge:{
    kids:T('Haz un <b>"termómetro de emociones"</b> dibujado para señalar cómo te sientes cada día.','Make a drawn <b>"emotion thermometer"</b> to point to how you feel each day.'),
    tween:T('Mapa mental del <b>kit de 5 pasos</b> con un ejemplo tuyo.','Mind map of the <b>5-step kit</b> with your own example.'),
    teen:T('Lleva un <b>diario emocional</b> una semana y busca una fuente fiable sobre manejo del estrés.','Keep an <b>emotion journal</b> for a week and find a reliable source on stress management.'),
    senior:T('Investiga la diferencia entre <b>estrés normal y señales de alerta</b>, y cuándo buscar ayuda profesional.','Research the difference between <b>normal stress and warning signs</b>, and when to seek professional help.'),
    adult:T('Diseña <b>hábitos de bienestar</b> sostenibles para tu vida y tu familia.','Design sustainable <b>wellbeing habits</b> for your life and family.')
  }},

'prevencion-bullying':{tag:'care',eyebrow:T('Conociéndome · Escudo','Knowing Myself · Shield'),title:T('Prevención de bullying y abusos','Bullying and abuse prevention'),
  steps:[
    {type:'hook',kicker:T('Para empezar','To begin'),h:T('Nadie tiene derecho a hacerte daño','No one has the right to harm you'),
     scenario:T('Ni las burlas repetidas, ni la exclusión, ni que alguien mayor te toque o te pida secretos que te incomodan: nada de eso es tu culpa, y nada de eso está bien.','Not repeated mocking, not exclusion, not an older person touching you or asking for secrets that make you uncomfortable: none of that is your fault, and none of it is okay.'),
     body:T('Esta cápsula te ayuda a reconocer estas situaciones y saber qué hacer.','This capsule helps you recognize these situations and know what to do.')},
    {type:'theory',kicker:T('La idea','The idea'),h:T('Reconocer, decir no, contar','Recognize, say no, tell'),
     body:T('El bullying es maltrato repetido con intención de dañar. El abuso es cuando alguien cruza tus límites, especialmente los de tu cuerpo. Buscar ayuda no es "chivarse", es protegerte.','Bullying is repeated mistreatment meant to harm. Abuse is when someone crosses your limits, especially your body\'s. Getting help isn\'t "tattling," it\'s protecting yourself.'),
     diagram:T('<b>Tu plan de 3 pasos</b><br>1. Reconoce (no está bien, no es mi culpa) · 2. Di NO y aléjate · 3. Cuéntaselo a un adulto de confianza — si el primero no ayuda, cuéntaselo a otro hasta que alguien actúe.','<b>Your 3-step plan</b><br>1. Recognize (not okay, not my fault) · 2. Say NO and move away · 3. Tell a trusted adult — if the first doesn\'t help, tell another until someone acts.')},
    {type:'quiz',kicker:T('Comprueba','Check'),h:T('Un secreto que incomoda','A secret that feels wrong'),
     q:T('Si alguien mayor te pide guardar un secreto que te hace sentir mal, debes:','If an older person asks you to keep a secret that makes you feel bad, you should:'),
     opts:[{t:T('Guardarlo porque lo prometiste','Keep it because you promised'),ok:false},{t:T('Contárselo a un adulto de confianza','Tell a trusted adult'),ok:true},{t:T('No decírselo a nadie nunca','Never tell anyone'),ok:false},{t:T('Resolverlo tú solo','Solve it alone'),ok:false}],
     okMsg:T('Correcto. Un secreto que te hace daño SÍ se cuenta. Siempre.','Correct. A secret that hurts you SHOULD be told. Always.'),
     noMsg:T('Muy importante: un secreto que te incomoda siempre se cuenta.','Very important: a secret that makes you uncomfortable is always told.')},
    {type:'reflect',kicker:T('Tu turno','Your turn'),h:T('Tu red de confianza','Your trust network'),
     body:T('Escribe los nombres de adultos con quienes SIEMPRE puedes hablar.','Write names of adults you can ALWAYS talk to.'),
     prompt:T('Tres adultos de confianza: ___\nUno al que acudiría primero: ___','Three trusted adults: ___\nOne I\'d go to first: ___')},
    {type:'safe'}
  ],
  byAge:{
    kids:T('Dibuja tu <b>"escudo de protección"</b> con los nombres de 3 adultos de confianza.','Draw your <b>"protection shield"</b> with the names of 3 trusted adults.'),
    tween:T('Haz un <b>cartel</b> con el plan de 3 pasos para tu cuarto o clase.','Make a <b>poster</b> with the 3-step plan for your room or class.'),
    teen:T('Investiga qué es el <b>ciberbullying</b> y escribe 3 formas concretas de responder a él.','Research <b>cyberbullying</b> and write 3 concrete ways to respond to it.'),
    senior:T('Diseña una <b>campaña breve</b> de prevención para estudiantes más jóvenes, con fuentes.','Design a short <b>prevention campaign</b> for younger students, with sources.'),
    adult:T('Estudia las <b>señales de alerta</b> en menores y cómo actuar como adulto responsable y protector.','Study <b>warning signs</b> in minors and how to act as a responsible, protective adult.')
  }},

'prevencion-sustancias':{tag:'care',eyebrow:T('Conociéndome · Escudo','Knowing Myself · Shield'),title:T('Prevención de sustancias tóxicas','Substance-abuse prevention'),
  steps:[
    {type:'hook',kicker:T('Para empezar','To begin'),h:T('"Solo una vez" es el primer paso','"Just once" is the first step'),
     scenario:T('Casi nadie planea tener un problema con el alcohol, el tabaco, el vapeo o las drogas. Empieza con un "para probar", con la presión del grupo. Conocerlo de antemano es tu mejor defensa.','Almost no one plans a problem with alcohol, tobacco, vaping or drugs. It starts with "just to try," with group pressure. Knowing it in advance is your best defense.'),
     body:T('Información honesta y herramientas para decidir con libertad.','Honest information and tools to decide freely.')},
    {type:'theory',kicker:T('La idea','The idea'),h:T('Tu cuerpo es templo, tu "no" es fuerza','Your body is a temple, your "no" is strength'),
     body:T('Las sustancias afectan el cerebro adolescente, que aún se forma, con más fuerza que en un adulto. Un "no" claro y ensayado antes es mucho más fácil en el momento.','Substances affect the still-forming adolescent brain more strongly than an adult\'s. A clear "no" rehearsed beforehand is far easier in the moment.'),
     diagram:T('<b>Frases para salir del paso</b><br>"No, gracias, no es lo mío." · "Mejor no." · "Paso, tengo entreno mañana." Tener una frase lista quita casi toda la presión.','<b>Exit phrases</b><br>"No thanks, not my thing." · "Better not." · "I\'ll pass, I train tomorrow." A ready phrase removes almost all the pressure.')},
    {type:'quiz',kicker:T('Comprueba','Check'),h:T('Presión de grupo','Peer pressure'),
     q:T('¿La mejor estrategia ante la presión para probar una sustancia?','Best strategy against pressure to try a substance?'),
     opts:[{t:T('Aceptar para no quedar mal','Accept so I don\'t look bad'),ok:false},{t:T('Tener una respuesta clara preparada de antemano','Have a clear answer prepared in advance'),ok:true},{t:T('Probar solo un poco','Just try a little'),ok:false},{t:T('Quedarme callado','Stay silent'),ok:false}],
     okMsg:T('Exacto. Un "no" ensayado antes es fácil en el momento.','Exactly. A "no" rehearsed beforehand is easy in the moment.'),
     noMsg:T('Lo que mejor protege es tener tu respuesta lista.','What protects best is having your answer ready.')},
    {type:'reflect',kicker:T('Tu turno','Your turn'),h:T('Tu frase y tu porqué','Your phrase and your why'),
     body:T('Prepara tu respuesta y tu motivo más fuerte para cuidarte.','Prepare your answer and your strongest reason to take care of yourself.'),
     prompt:T('Mi frase para decir no: ___\nMi razón más fuerte: ___','My phrase to say no: ___\nMy strongest reason: ___')},
    {type:'safe'}
  ],
  byAge:{
    kids:T('Dibuja cosas que <b>cuidan tu cuerpo</b> (agua, deporte, sueño) vs. cosas que lo dañan.','Draw things that <b>care for your body</b> (water, sport, sleep) vs. things that harm it.'),
    tween:T('Practica tu <b>"no" ensayado</b> con un familiar en 3 situaciones distintas.','Practice your <b>rehearsed "no"</b> with a relative in 3 different situations.'),
    teen:T('Investiga en una <b>fuente fiable</b> los efectos reales de una sustancia en el cerebro adolescente.','Research in a <b>reliable source</b> the real effects of a substance on the adolescent brain.'),
    senior:T('Analiza cómo la <b>publicidad y las redes</b> normalizan sustancias, y escribe una respuesta crítica.','Analyze how <b>ads and social media</b> normalize substances, and write a critical response.'),
    adult:T('Diseña una <b>conversación preventiva</b> honesta para tener con un adolescente a tu cargo.','Design an honest <b>preventive conversation</b> to have with a teen in your care.')
  }},

adolescencia:{tag:'care',eyebrow:T('Conociéndome · Mente','Knowing Myself · Mind'),title:T('¿Qué es la adolescencia?','What is adolescence?'),
  steps:[
    {type:'hook',kicker:T('Para empezar','To begin'),h:T('Tu cerebro está en obras','Your brain is under construction'),
     scenario:T('A veces sientes todo con enorme intensidad, o te enfadas sin saber por qué. No estás roto: tu cerebro se está reconstruyendo.','Sometimes you feel everything intensely, or get angry without knowing why. You\'re not broken: your brain is rebuilding.'),
     body:T('Entender qué pasa te da poder para gestionarlo.','Understanding what happens gives you power to manage it.')},
    {type:'theory',kicker:T('La idea','The idea'),h:T('Emoción y control a distinta velocidad','Emotion and control at different speeds'),
     body:T('La parte emocional del cerebro madura antes que la del control. Por eso las emociones se sienten fuertes: es normal y temporal.','The emotional brain matures before the control part. That\'s why emotions feel strong: normal and temporary.'),
     diagram:T('<b>Herramientas</b><br>Nombrar la emoción · esperar antes de reaccionar · movimiento físico · hablar con un adulto de confianza.','<b>Tools</b><br>Name the emotion · pause before reacting · physical movement · talk to a trusted adult.')},
    {type:'quiz',kicker:T('Comprueba','Check'),h:T('¿Por qué cuesta el autocontrol?','Why is self-control hard?'),
     q:T('¿La razón principal de emociones tan intensas?','Main reason for such intense emotions?'),
     opts:[{t:T('Somos peores a esa edad','We\'re worse at that age'),ok:false},{t:T('La parte emocional madura antes que la del control','Emotional part matures before control part'),ok:true},{t:T('Solo dormimos poco','We just sleep little'),ok:false}],
     okMsg:T('Correcto. Es biología del desarrollo, no un defecto.','Correct. Developmental biology, not a flaw.'),
     noMsg:T('Tiene que ver con el orden en que madura el cerebro.','It\'s about the order the brain matures.')},
    {type:'reflect',kicker:T('Tu turno','Your turn'),h:T('Tu semáforo emocional','Your emotional traffic light'),
     body:T('Identifica tu patrón para anticiparte.','Identify your pattern to anticipate it.'),
     prompt:T('Emoción que me cuesta: ___\nQué la dispara: ___\nMi pausa antes de reaccionar: ___','Emotion I struggle with: ___\nWhat triggers it: ___\nMy pause: ___')}
  ]},

/* ============ TÉCNICAS DE ESTUDIO ============ */
'estilos-aprendizaje':{tag:'study',eyebrow:T('Estudio · Yo','Study · Me'),title:T('Descubre tu estilo de aprendizaje','Discover your learning style'),
  steps:[
    {type:'hook',kicker:T('Para empezar','To begin'),h:T('No todos aprendemos igual','We don\'t all learn the same'),
     scenario:T('A un compañero le basta oír algo una vez; tú necesitas verlo dibujado; otro tiene que hacerlo con las manos. Ninguno es más listo: aprenden distinto.','A classmate hears it once; you need it drawn; another must do it with their hands. None is smarter: they learn differently.'),
     body:T('Conocer tu estilo te ayuda a estudiar menos horas y aprender más.','Knowing your style helps you study fewer hours and learn more.')},
    {type:'theory',kicker:T('La idea','The idea'),h:T('Cuatro estilos VARK','Four VARK styles'),
     body:T('El modelo VARK describe cuatro preferencias. La mayoría combinamos varias, pero solemos tener una favorita.','The VARK model describes four preferences. Most of us mix several, but usually have a favorite.'),
     diagram:T('<b>VARK</b><br>Visual (dibujos, mapas) · Auditivo (escuchar, explicar en voz alta) · Lectura/escritura (leer y resumir) · Kinestésico (hacer, practicar, moverse).','<b>VARK</b><br>Visual (drawings, maps) · Auditory (listen, explain aloud) · Read/write (read and summarize) · Kinesthetic (do, practice, move).')},
    {type:'match',kicker:T('Comprueba','Check'),h:T('Empareja la técnica con el estilo','Match the technique to the style'),
     pool:[{id:'a',t:T('Hacer un mapa mental de colores','Make a colorful mind map')},{id:'b',t:T('Grabarte y escuchar el tema','Record and listen to the topic')},{id:'c',t:T('Construir una maqueta o experimento','Build a model or experiment')}],
     targets:[{label:T('Visual','Visual'),ans:'a'},{label:T('Auditivo','Auditory'),ans:'b'},{label:T('Kinestésico','Kinesthetic'),ans:'c'}],
     okMsg:T('¡Muy bien! Cada estilo tiene sus técnicas.','Great! Each style has its techniques.')},
    {type:'reflect',kicker:T('Tu turno','Your turn'),h:T('¿Cuál es tu estilo?','What\'s your style?'),
     body:T('Piensa en cómo recuerdas mejor las cosas.','Think about how you remember things best.'),
     prompt:T('Mi estilo principal: ___\nUna técnica que voy a probar: ___','My main style: ___\nA technique I\'ll try: ___')}
  ],
  byAge:{
    kids:T('Dibuja los <b>4 estilos</b> con un símbolo y marca el tuyo.','Draw the <b>4 styles</b> with a symbol and mark yours.'),
    tween:T('Prueba <b>una técnica de cada estilo</b> esta semana y anota cuál te funcionó mejor.','Try <b>one technique from each style</b> this week and note which worked best.'),
    teen:T('Haz un <b>test VARK</b> online (con guía de un adulto) y diseña tu método de estudio ideal.','Take a <b>VARK test</b> online (with adult guidance) and design your ideal study method.'),
    senior:T('Investiga la crítica científica a los "estilos de aprendizaje" y escribe tu <b>opinión fundamentada</b>.','Research the scientific critique of "learning styles" and write your <b>reasoned opinion</b>.'),
    adult:T('Adapta tu forma de <b>enseñar o capacitar</b> a distintos estilos en tu equipo.','Adapt how you <b>teach or train</b> to different styles in your team.')
  }},

'tecnicas-estudio':{tag:'study',eyebrow:T('Estudio · Técnicas','Study · Techniques'),title:T('Técnicas de estudio por nivel','Study techniques by level'),book:BOOKS.study7,
  steps:[
    {type:'hook',kicker:T('Para empezar','To begin'),h:T('Estudiar más no es estudiar mejor','Studying more isn\'t studying better'),
     scenario:T('Puedes releer un tema 10 veces y olvidarlo, o repasarlo 3 veces bien espaciadas y recordarlo por meses. La diferencia es la técnica.','You can reread a topic 10 times and forget it, or review it 3 well-spaced times and remember it for months. The difference is technique.'),
     body:T('Verás técnicas probadas; tu reto de profundización se ajusta a tu edad.','You\'ll see proven techniques; your deepening challenge scales to your age.')},
    {type:'theory',kicker:T('La idea','The idea'),h:T('Recuerda, espacia, conecta','Recall, space, connect'),
     body:T('Las tres técnicas con más evidencia: la <b>evocación</b> (cerrar el libro y recordar), la <b>repetición espaciada</b> (repasar en días distintos) y <b>conectar</b> ideas nuevas con lo que ya sabes.','The three most evidence-backed techniques: <b>active recall</b> (close the book and remember), <b>spaced repetition</b> (review on different days), and <b>connecting</b> new ideas to what you know.'),
     diagram:T('<b>Método Cornell (tomar apuntes)</b><br>Divide la hoja: notas a la derecha · palabras clave a la izquierda · resumen abajo. Repasa tapando las notas y recordando desde las palabras clave.','<b>Cornell method (note-taking)</b><br>Split the page: notes on the right · keywords on the left · summary at the bottom. Review by covering the notes and recalling from the keywords.')},
    {type:'quiz',kicker:T('Comprueba','Check'),h:T('¿Qué técnica funciona mejor?','Which technique works best?'),
     q:T('Para recordar a largo plazo, ¿qué es más eficaz?','For long-term memory, what\'s most effective?'),
     opts:[{t:T('Releer muchas veces el mismo día','Reread many times the same day'),ok:false},{t:T('Cerrar el libro y recordar, repasando en días distintos','Close the book and recall, reviewing on different days'),ok:true},{t:T('Subrayar todo con colores','Highlight everything'),ok:false},{t:T('Estudiar toda la noche antes','Cram all night before'),ok:false}],
     okMsg:T('¡Exacto! Evocación + repetición espaciada: la combinación ganadora.','Exactly! Active recall + spaced repetition: the winning combo.'),
     noMsg:T('Releer y subrayar sienta bien pero se olvida rápido. Evoca y espacia.','Rereading and highlighting feel good but fade fast. Recall and space it.')},
    {type:'reflect',kicker:T('Tu turno','Your turn'),h:T('Tu plan de repaso','Your review plan'),
     body:T('Elige un tema y planea 3 repasos espaciados.','Pick a topic and plan 3 spaced reviews.'),
     prompt:T('Tema: ___\nRepaso 1 (hoy): ___\nRepaso 2 (en 2 días): ___\nRepaso 3 (en 1 semana): ___','Topic: ___\nReview 1 (today): ___\nReview 2 (in 2 days): ___\nReview 3 (in 1 week): ___')}
  ],
  byAge:{
    kids:T('Haz <b>tarjetas de preguntas y respuestas</b> (flashcards) dibujadas para un tema.','Make drawn <b>question-and-answer cards</b> (flashcards) for a topic.'),
    tween:T('Toma apuntes con el <b>método Cornell</b> en una clase y repásalos tapando las notas.','Take notes with the <b>Cornell method</b> in a class and review by covering the notes.'),
    teen:T('Arma un <b>calendario de repaso espaciado</b> para un examen real y evalúa el resultado.','Build a <b>spaced-review calendar</b> for a real exam and evaluate the result.'),
    senior:T('Investiga <b>2 técnicas</b> (p. ej. Feynman y Pomodoro), pruébalas y compáralas por escrito.','Research <b>2 techniques</b> (e.g. Feynman and Pomodoro), test them and compare in writing.'),
    adult:T('Diseña un <b>sistema de aprendizaje continuo</b> para tu desarrollo profesional.','Design a <b>continuous-learning system</b> for your professional development.')
  }},

concentracion:{tag:'study',eyebrow:T('Estudio · Hábito','Study · Habit'),title:T('Concentración y rutina de estudio','Focus and study routine'),book:BOOKS.habitos,
  steps:[
    {type:'hook',kicker:T('Para empezar','To begin'),h:T('El enemigo se llama distracción','The enemy is called distraction'),
     scenario:T('Cada vez que miras el móvil, tu cerebro tarda varios minutos en volver a concentrarse. Tres miradas por hora y ya perdiste media hora real de enfoque.','Every time you check your phone, your brain takes minutes to refocus. Three checks an hour and you\'ve lost half an hour of real focus.'),
     body:T('La concentración no es fuerza de voluntad: es diseñar tu entorno.','Focus isn\'t willpower: it\'s designing your environment.')},
    {type:'theory',kicker:T('La idea','The idea'),h:T('Diseña el entorno, no dependas de la fuerza','Design the environment, don\'t rely on willpower'),
     body:T('Quita las distracciones antes de empezar y trabaja en bloques con descansos. La técnica Pomodoro (25 min de foco + 5 de descanso) ayuda a muchos.','Remove distractions before you start and work in blocks with breaks. The Pomodoro technique (25 min focus + 5 rest) helps many.'),
     diagram:T('<b>Tu espacio de foco</b><br>Móvil fuera de la vista · una sola tarea a la vez · agua y luz · bloque de 25 min · descanso corto · repite.','<b>Your focus space</b><br>Phone out of sight · one task at a time · water and light · 25-min block · short break · repeat.')},
    {type:'quiz',kicker:T('Comprueba','Check'),h:T('¿Qué mejora el foco?','What improves focus?'),
     q:T('Para concentrarte mejor, lo más eficaz es:','To focus better, the most effective is:'),
     opts:[{t:T('Estudiar con el móvil al lado por si acaso','Study with the phone nearby just in case'),ok:false},{t:T('Quitar las distracciones antes de empezar y trabajar en bloques','Remove distractions first and work in blocks'),ok:true},{t:T('Hacer 5 tareas a la vez','Do 5 tasks at once'),ok:false},{t:T('Estudiar frente a la tele','Study in front of the TV'),ok:false}],
     okMsg:T('¡Exacto! El entorno hace casi todo el trabajo.','Exactly! The environment does most of the work.'),
     noMsg:T('La multitarea y las distracciones cercanas destruyen el foco.','Multitasking and nearby distractions destroy focus.')},
    {type:'reflect',kicker:T('Tu turno','Your turn'),h:T('Diseña tu bloque de estudio','Design your study block'),
     body:T('Define tu entorno de foco ideal.','Define your ideal focus environment.'),
     prompt:T('Dónde estudiaré sin distracciones: ___\nQué quitaré antes de empezar: ___\nMi bloque (minutos): ___','Where I\'ll study distraction-free: ___\nWhat I\'ll remove first: ___\nMy block (minutes): ___')}
  ],
  byAge:{
    kids:T('Dibuja tu <b>rincón de estudio ideal</b> y qué cosas NO deben estar ahí.','Draw your <b>ideal study corner</b> and what should NOT be there.'),
    tween:T('Prueba <b>un bloque Pomodoro</b> (25/5) y anota cómo te fue.','Try <b>one Pomodoro block</b> (25/5) and note how it went.'),
    teen:T('Lleva un <b>registro de una semana</b> de tus bloques de foco y tus distracciones.','Keep a <b>one-week log</b> of your focus blocks and distractions.'),
    senior:T('Investiga el <b>costo del multitasking</b> con una fuente y rediseña tu rutina de estudio.','Research the <b>cost of multitasking</b> with a source and redesign your study routine.'),
    adult:T('Diseña un <b>sistema de trabajo profundo</b> para tus proyectos más importantes.','Design a <b>deep-work system</b> for your most important projects.')
  }},

/* ============ SCAFFOLDS ============ */
'idea-negocio':{tag:'new',scaffold:true,eyebrow:T('Explorer · BRIEFCASE','Explorer · BRIEFCASE'),title:T('De la idea al proyecto','From idea to project'),meta:T('Brainstorming, problema/solución y validación de tu primera idea.','Brainstorming, problem/solution and validating your first idea.')},
encuestas:{tag:'new',scaffold:true,eyebrow:T('Explorer · BRIEFCASE','Explorer · BRIEFCASE'),title:T('Encuestas y validación de mercado','Surveys and market validation'),meta:T('Cómo diseñar preguntas útiles y leer lo que la gente responde.','How to design useful questions and read what people answer.')},
'ganar-amigos':{tag:'new',scaffold:true,eyebrow:T('Explorer · transversal','Explorer · cross-topic'),title:T('Cómo ganar amigos e influir','How to win friends and influence'),meta:T('Principios para conectar con personas e influir con honestidad.','Principles to connect with people and influence honestly.'),book:BOOKS.amigos},
presentaciones:{tag:'new',scaffold:true,eyebrow:T('Transversal','Cross-topic'),title:T('Presentaciones de impacto','High-impact presentations'),meta:T('Storytelling y diseño de slides que se recuerdan.','Storytelling and slide design that stick.')},
'padre-rico':{tag:'new',scaffold:true,eyebrow:T('Builder · finanzas','Builder · finance'),title:T('Mentalidad financiera: activos vs. pasivos','Financial mindset: assets vs. liabilities'),meta:T('La diferencia entre lo que te da dinero y lo que te lo quita.','The difference between what makes and takes money.'),book:BOOKS.padreRico},
contabilidad:{tag:'new',scaffold:true,eyebrow:T('BRIEFCASE · finanzas','BRIEFCASE · finance'),title:T('Principios de contabilidad','Accounting principles'),meta:T('Ingresos, gastos, balance simple y punto de equilibrio.','Income, expenses, simple balance and break-even.')},
'plan-negocio':{tag:'new',scaffold:true,eyebrow:T('BRIEFCASE','BRIEFCASE'),title:T('Plan de negocio (modelo Canvas)','Business plan (Canvas model)'),meta:T('Nueve bloques para diseñar un negocio en una página.','Nine blocks to design a business on one page.')},
'construir-web':{tag:'new',scaffold:true,eyebrow:T('BRIEFCASE · digital','BRIEFCASE · digital'),title:T('Construye tu página web','Build your website'),meta:T('Una landing page guiada para tu proyecto o negocio.','A guided landing page for your project or business.')},
'7-esferas':{tag:'new',scaffold:true,eyebrow:T('BULLHORN · liderazgo','BULLHORN · leadership'),title:T('Las 7 esferas de influencia','The 7 spheres of influence'),meta:T('Familia, fe, educación, gobierno, negocios, medios y arte.','Family, faith, education, government, business, media and arts.')},
curriculum:{tag:'new',scaffold:true,eyebrow:T('Launch · College Prep','Launch · College Prep'),title:T('Tu currículum desde cero','Your resume from scratch'),meta:T('Estructura, errores comunes y tu primera versión sin experiencia.','Structure, common mistakes and your first version.')},
expediente:{tag:'new',scaffold:true,eyebrow:T('Launch · College Prep','Launch · College Prep'),title:T('Expediente universitario','College application dossier'),meta:T('Ensayo personal, cartas de recomendación y portafolio.','Personal essay, recommendation letters and portfolio.')},
carreras:{tag:'new',scaffold:true,eyebrow:T('Launch · College Prep','Launch · College Prep'),title:T('Carreras con más salida','Careers with best prospects'),meta:T('Datos de empleabilidad por sector en España y Latinoamérica.','Employability data by sector in Spain and Latin America.')},
'tipos-empresa':{tag:'new',scaffold:true,eyebrow:T('Adulto','Adult'),title:T('Tipos de empresa e impuestos','Company types and taxes'),meta:T('Autónomo, S.L., cooperativa: qué eres y qué te toca pagar.','Sole trader, LLC, cooperative: what you are and pay.')},
'cuenta-propia':{tag:'new',scaffold:true,eyebrow:T('Adulto','Adult'),title:T('Cuenta propia vs. ajena y subsidio de desempleo','Self-employed vs. employed and unemployment benefits'),meta:T('Qué te cobran y qué te cubre en cada modalidad.','What you\'re charged and covered in each mode.')},
'mujer-emprendedora':{tag:'new',scaffold:true,eyebrow:T('Adulto','Adult'),title:T('El papel de la mujer emprendedora','The role of the woman entrepreneur'),meta:T('Liderazgo femenino, referentes y equidad.','Female leadership, role models and equity.')},

};
