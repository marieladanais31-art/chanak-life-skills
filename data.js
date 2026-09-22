/* =====================================================================
   Chanak Life Skills & Leadership — UNIFIED DATA (ES / EN)
   Fuentes oficiales: Guías PDF Chanak (Junior 1-3, Seedling 14, Explorer 15,
   Builder 16, Launch 17) + Repositorio Interactivo de Cápsulas.
   ===================================================================== */

const T = (es, en) => ({ es, en });

/* ---------------- Citas y Textos Bíblicos Oficiales ---------------- */
export const BIBLE_VERSES = {
  seedling: {
    ref: '1 Timoteo 4:12',
    text: T(
      'Ninguno tenga en poco tu juventud, sino sé ejemplo de los creyentes en palabra, conducta, amor, espíritu, fe y pureza.',
      'Let no one despise you for your youth, but set the believers an example in speech, in conduct, in love, in faith, in purity.'
    ),
    context: T(
      'Tu edad no es una limitación para liderar con integridad. Cada hábito diario que construyes en silencio forja el testimonio público que bendecirá a tu generación.',
      'Your age is not a limitation to lead with integrity. Every daily habit you build in silence shapes the public testimony that will bless your generation.'
    )
  },
  explorer: {
    ref: 'Efesios 2:10',
    text: T(
      'Porque somos hechura suya, creados en Cristo Jesús para buenas obras, las cuales Dios preparó de antemano para que anduviésemos en ellas.',
      'For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them.'
    ),
    context: T(
      'Tu vocación no es un accidente. Fuiste diseñado con dones y talentos únicos para responder a necesidades reales en tu comunidad.',
      'Your calling is not an accident. You were designed with unique gifts and talents to meet real needs in your community.'
    )
  },
  builder: {
    ref: '2 Timoteo 1:7',
    text: T(
      'Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio.',
      'For God gave us a spirit not of fear but of power and love and self-control.'
    ),
    context: T(
      'El liderazgo real requiere autodisciplina y valentía. Administrar recursos, tiempo y proyectos es un acto de mayordomía fiel delante de Dios.',
      'Real leadership requires self-discipline and courage. Managing resources, time, and projects is an act of faithful stewardship before God.'
    )
  },
  launch: {
    ref: 'Lucas 16:10',
    text: T(
      'El que es fiel en lo muy poco, también en lo más grande es fiel; y el que en lo muy poco es injusto, también en lo más grande es injusto.',
      'One who is faithful in a very little is also faithful in much, and one who is dishonest in a very little is also dishonest in much.'
    ),
    context: T(
      'La excelencia universitaria y profesional se fundamenta en la fidelidad en los detalles diarios. Tu Capstone y tu expediente reflejan tu legado.',
      'Academic and professional excellence is founded on faithfulness in daily details. Your Capstone and dossier reflect your legacy.'
    )
  },
  identidad: {
    ref: 'Salmo 139:14',
    text: T(
      'Te alabaré; porque formidables, maravillosas son tus obras; estoy maravillado, y mi alma lo sabe muy bien.',
      'I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well.'
    )
  },
  habitos: {
    ref: '1 Corintios 9:24-27',
    text: T(
      '¿No sabéis que los que corren en el estadio, todos a la verdad corren, pero uno solo se lleva el premio? Corred de tal manera que lo obtengáis. Todo aquel que lucha, de todo se abstiene... golpeo mi cuerpo, y lo pongo en servidumbre.',
      'Do you not know that in a race all the runners run, but only one receives the prize? So run that you may obtain it. Every athlete exercises self-control in all things.'
    )
  },
  lenguajes: {
    ref: '1 Juan 4:7, 19',
    text: T(
      'Amados, amémonos unos a otros; porque el amor es de Dios. Todo aquel que ama, es nacido de Dios, y conoce a Dios... Nosotros le amamos a él, porque él nos amó primero.',
      'Beloved, let us love one another, for love is from God, and whoever loves has been born of God and knows God... We love because he first loved us.'
    )
  },
  comunicacion: {
    ref: 'Efesios 4:29',
    text: T(
      'Ninguna palabra corrompida salga de vuestra boca, sino la que sea buena para la necesaria edificación, a fin de dar gracia a los oyentes.',
      'Let no corrupting talk come out of your mouths, but only such as is good for building up, as fits the occasion, that it may give grace to those who hear.'
    )
  },
  saludEmocional: {
    ref: 'Filipenses 4:6-7',
    text: T(
      'Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias. Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús.',
      'Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.'
    )
  },
  padreRico: {
    ref: 'Proverbios 21:20',
    text: T(
      'Tesoro precioso y aceite hay en la casa del sabio; pero el hombre insensato todo lo disipa.',
      'Precious treasure and oil are in a wise man\'s dwelling, but a foolish man devours it.'
    )
  },
  contabilidad: {
    ref: 'Lucas 14:28',
    text: T(
      'Porque ¿quién de vosotros, queriendo edificar una torre, no se sienta primero y calcula los gastos, a ver si tiene lo que necesita para acabarla?',
      'For which of you, desiring to build a tower, does not first sit down and count the cost, whether he has enough to complete it?'
    )
  },
  trabajoEquipo: {
    ref: 'Eclesiastés 4:9-10',
    text: T(
      'Mejores son dos que uno; porque tienen mejor paga de su trabajo. Porque si cayeren, el uno levantará a su compañero; pero ¡ay del solo! que cuando cayere, no habrá segundo que lo levante.',
      'Two are better than one, because they have a good reward for their toil. For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has not another to lift him up!'
    )
  },
  sieteEsferas: {
    ref: 'Mateo 5:13-16',
    text: T(
      'Vosotros sois la sal de la tierra... Vosotros sois la luz del mundo; una ciudad asentada sobre un monte no se puede esconder... Así alumbre vuestra luz delante de los hombres, para que vean vuestras buenas obras, y glorifiquen a vuestro Padre que está en los cielos.',
      'You are the salt of the earth... You are the light of the world. A city set on a hill cannot be hidden... In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.'
    )
  },
  carreras: {
    ref: 'Proverbios 3:5-6',
    text: T(
      'Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas.',
      'Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.'
    )
  },
  ganarAmigos: {
    ref: 'Filipenses 2:3-4',
    text: T(
      'Nada hagáis por contienda o por vanagloria; antes bien con humildad, estimando cada uno a los demás como superiores a él mismo; no mirando cada uno por lo suyo propio, sino cada cual también por lo de los otros.',
      'Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves. Let each of you look not only to his own interests, but also to the interests of others.'
    )
  },
  encuestas: {
    ref: 'Proverbios 18:15',
    text: T(
      'El corazón del entendido adquiere sabiduría; y el oído de los sabios busca la ciencia.',
      'An intelligent heart acquires knowledge, and the ear of the wise seeks knowledge.'
    )
  },
  ideaNegocio: {
    ref: 'Proverbios 24:3-4',
    text: T(
      'Con sabiduría se edificará la casa, y con prudencia se afirmará; y con ciencia se llenarán las cámaras de todo bien preciado y deseable.',
      'By wisdom a house is built, and by understanding it is established; by knowledge the rooms are filled with all precious and pleasant riches.'
    )
  },
  planNegocio: {
    ref: 'Proverbios 16:3',
    text: T(
      'Encomienda a Jehová tus obras, y tus pensamientos serán afirmados.',
      'Commit your work to the Lord, and your plans will be established.'
    )
  },
  presentaciones: {
    ref: '1 Pedro 3:15',
    text: T(
      'Sino santificad a Dios el Señor en vuestros corazones, y estad siempre preparados para presentar defensa con mansedumbre y reverencia ante todo el que os demande razón de la esperanza que hay en vosotros.',
      'Always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect.'
    )
  },
  expediente: {
    ref: 'Daniel 1:17, 20',
    text: T(
      'A estos cuatro muchachos Dios les dio conocimiento e inteligencia en todas las letras y ciencias... En todo asunto de sabiduría e inteligencia que el rey les consultó, los halló diez veces mejores que todos.',
      'As for these four youths, God gave them learning and skill in all literature and wisdom... And in every matter of wisdom and understanding about which the king inquired of them, he found them ten times better.'
    )
  },
  curriculum: {
    ref: 'Proverbios 22:29',
    text: T(
      '¿Has visto hombre solícito en su trabajo? Delante de los reyes estará; no estará delante de los de baja condición.',
      'Do you see a man skillful in his work? He will stand before kings; he will not stand before obscure men.'
    )
  },
  entrevista: {
    ref: 'Colosenses 4:6',
    text: T(
      'Sea vuestra palabra siempre con gracia, sazonada con sal, para que sepáis cómo debéis responder a cada uno.',
      'Let your speech always be gracious, seasoned with salt, so that you may know how you ought to answer each person.'
    )
  },
  construirWeb: {
    ref: 'Colosenses 3:23-24',
    text: T(
      'Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.',
      'Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward. You are serving the Lord Christ.'
    )
  },
  bold: {
    ref: 'Josué 1:9',
    text: T(
      'Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.',
      'Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go.'
    )
  }
};

/* ---------------- Libros Oficiales del Currículum ---------------- */
export const BOOKS = {
  // Para Juniors (10–13 años)
  mentirasNinas: {
    title: T('Mentiras que las Niñas Creen', 'Lies Girls Believe'),
    author: 'Nancy DeMoss Wolgemuth & Dannah Gresh',
    audience: T('Lectura Altamente Recomendada (Opcional) · Juniors', 'Highly Recommended (Optional) · Juniors'),
    key: T('Identifica mentiras sobre Dios, la amistad, la belleza y las emociones, sustituyéndolas por la verdad liberadora de la Palabra.', 'Identifies lies about God, friendship, beauty, and emotions, replacing them with the liberating truth of God\'s Word.'),
    quote: T('La verdad de Dios es el único escudo frente a las presiones que el mundo intenta sembrar en tu corazón.', 'God\'s truth is the only shield against the pressures the world tries to sow in your heart.'),
    summary_es: 'Guía práctica para preadolescentes que aborda las mentiras comunes sobre la autoestima, las relaciones de amistad y el valor personal, ofreciendo la cosmovisión bíblica como fundamento seguro de identidad y gozo.'
  },
  salvajeCorazon: {
    title: T('Salvaje de Corazón (Edición Jóvenes)', 'Wild at Heart (Young Men Edition)'),
    author: 'John Eldredge',
    audience: T('Lectura Altamente Recomendada (Opcional) · Juniors', 'Highly Recommended (Optional) · Juniors'),
    key: T('Aventura, valentía y el diseño heroico que Dios puso en el corazón del varón para proteger, servir a su familia y liderar con rectitud.', 'Adventure, courage, and the heroic design God placed in a young man\'s heart to protect, serve, and lead with righteousness.'),
    quote: T('Dios diseñó tu corazón para una gran aventura de fe, una causa noble y la valentía de defender la verdad.', 'God designed your heart for a great adventure of faith, a noble cause, and the courage to stand for truth.'),
    summary_es: 'Desafía a los jóvenes a descubrir el propósito noble que Dios sembró en ellos: liderar con coraje, proteger a los vulnerables y vivir la fe como una aventura de servicio y lealtad.'
  },

  // Para 14 años (Seedling) - Misionero inspirador
  contrabandistaDios: {
    title: T('El Contrabandista de Dios', 'God\'s Smuggler'),
    author: 'Hermano Andrés & John Sherrill',
    audience: T('Lectura Altamente Recomendada (Opcional) · Fe y Valentía', 'Highly Recommended (Optional) · Faith & Courage'),
    key: T('Dios no busca personas extraordinarias con talentos inalcanzables, sino jóvenes comunes dispuestos a obedecer con valentía y poner su vida al servicio de una causa eterna.', 'God does not seek extraordinary people, but ordinary youth willing to obey courageously for an eternal cause.'),
    quote: T('«Cuando la causa es el Reino de Dios, el coraje vence al miedo y las puertas cerradas se abren con la oración.»', '“When the cause is the Kingdom of God, courage overcomes fear and closed doors open through prayer.”'),
    summary_es: 'Relata la historia real de Andrew van der Bijl, un joven holandés común que descubrió el llamado de Dios a cruzar la Cortina de Hierro durante la Guerra Fría para llevar Biblias y esperanza a cristianos perseguidos. Equipado con un viejo Volkswagen, oración constante y audacia («Señor, en tu Palabra dices que cegaste los ojos de los hombres; por favor, ciega ahora los ojos de estos guardias»), vio cómo fronteras cerradas se abrían de forma milagrosa. Enseña que la fe no es pasiva, sino una aventura de obediencia donde Dios utiliza a jóvenes dispuestos.'
  },
  habitos: {
    title: T('Hábitos Atómicos', 'Atomic Habits'),
    author: 'James Clear',
    audience: T('Lectura Altamente Recomendada (Opcional) · Autodisciplina y Sistemas', 'Highly Recommended (Optional) · Self-Discipline & Systems'),
    key: T('Las 4 Leyes del Cambio de Conducta: Hazlo Obvio, Atractivo, Fácil y Satisfactorio. Tu entorno y tus micro-rutinas diarias determinan tu futuro mucho más que la simple motivación.', 'The 4 Laws of Behavior Change: Make it Obvious, Attractive, Easy, and Satisfying. Systems beat willpower.'),
    quote: T('«No te elevas al nivel de tus metas, caes al nivel de tus sistemas.»', '“You do not rise to the level of your goals, you fall to the level of your systems.”'),
    summary_es: 'Establece que las grandes transformaciones son el resultado del interés compuesto de pequeñas mejoras del 1% diario. Clear demuestra que no nos elevamos al nivel de nuestras metas, sino que caemos al nivel de nuestros sistemas. Presenta las 4 Leyes del Cambio de Conducta: 1) Hazlo obvio (diseña tu entorno); 2) Hazlo atractivo (asocia hábitos placenteros); 3) Hazlo fácil (reduce fricción y aplica la regla de los 2 minutos); y 4) Hazlo satisfactorio (recompensa inmediata y registro visible de hábitos).'
  },
  temperamento: {
    title: T('El Temperamento Controlado por el Espíritu', 'The Spirit-Controlled Temperament'),
    author: 'Tim LaHaye',
    audience: T('Lectura Altamente Recomendada (Opcional) · Carácter y Temperamento', 'Highly Recommended (Optional) · Character & Temperament'),
    key: T('Tu temperamento natural explica tus inclinaciones iniciales, pero tu carácter maduro es moldeado por el Espíritu Santo para superar cualquier limitación biológica o emocional.', 'Your natural temperament explains your initial reactions, but character is transformed by the Holy Spirit.'),
    quote: T('«El carácter en Cristo supera las inclinaciones naturales de la personalidad.»', '“Character in Christ overcomes natural personality inclinations.”'),
    summary_es: 'Examina a fondo los 4 temperamentos clásicos (Sanguíneo: entusiasta pero disperso; Colérico: líder audaz pero impaciente; Melancólico: analítico y creativo pero propenso al desánimo; Flemático: pacífico y constante pero reacio al cambio). LaHaye expone cómo el Espíritu Santo no destruye tu personalidad, sino que madura tus debilidades a través del Fruto del Espíritu (paciencia, templanza, dominio propio).'
  },

  // Para 15–17 años
  lenguajes: {
    title: T('Los 5 Lenguajes del Amor', 'The 5 Love Languages'),
    author: 'Gary Chapman',
    audience: T('Lectura Altamente Recomendada (Opcional) · Relaciones y Empatía', 'Highly Recommended (Optional) · Relationships & Empathy'),
    key: T('Amar con madurez significa aprender a expresar afecto y servicio en el canal que la otra persona necesita, no solo en el que nos resulta más cómodo a nosotros.', 'Mature love communicates value in the other person\'s language, not merely our own preference.'),
    quote: T('«El amor sincero elige hablar el dialecto emocional de la otra persona.»', '“Sincere love chooses to speak the emotional dialect of the other person.”'),
    summary_es: 'Identifica los 5 canales a través de los cuales las personas comunican y reciben aprecio y afecto: 1) Palabras de afirmación; 2) Tiempo de calidad; 3) Recepción de regalos con significado; 4) Actos de servicio práctico; y 5) Contacto físico. Chapman muestra cómo la mayoría de tensiones en el hogar y entre amigos ocurren no por falta de amor, sino por comunicarlo en un dialecto que la otra persona no entiende.'
  },
  padreRico: {
    title: T('Padre Rico, Padre Pobre', 'Rich Dad Poor Dad'),
    author: 'Robert Kiyosaki',
    audience: T('Lectura Altamente Recomendada (Opcional) · Educación Financiera', 'Highly Recommended (Optional) · Financial Literacy'),
    key: T('Los activos ponen dinero en tu bolsillo; los pasivos sacan dinero. La verdadera mayordomía financiera requiere entender balances y flujo de caja.', 'Assets put money in your pocket; liabilities take money out. Wise stewardship requires financial literacy.'),
    quote: T('«Los ricos adquieren activos; los pobres y la clase media adquieren pasivos pensando que son activos.»', '“The rich acquire assets; the poor and middle class acquire liabilities thinking they are assets.”'),
    summary_es: 'Distingue de forma radical la educación financiera tradicional de la verdadera mayordomía de recursos. Enseña la diferencia entre un activo (lo que genera ingresos y flujo de caja positivo) y un pasivo (lo que consume dinero bajo apariencia de riqueza). Explica por qué trabajar solo por un salario genera dependencia («carrera de la rata») y cómo adquirir activos y comprender balances financieros permite servir y generar impacto real con sabiduría.'
  },
  ganarAmigos: {
    title: T('Cómo Ganar Amigos e Influir sobre las Personas', 'How to Win Friends and Influence People'),
    author: 'Dale Carnegie',
    audience: T('Lectura Altamente Recomendada (Opcional) · Comunicación y Liderazgo', 'Highly Recommended (Optional) · Communication & Leadership'),
    key: T('El respeto sincero y el interés genuino por las personas abren más puertas y resuelven más conflictos que cualquier demostración de autoridad o discusión acalorada.', 'Sincere respect and genuine interest in others build trust and open doors far better than arguments.'),
    quote: T('«Puedes hacer más amigos en dos meses interesándote en los demás que en dos años tratando de que se interesen en ti.»', '“You can make more friends in two months by becoming interested in other people than in two years trying to get them interested in you.”'),
    summary_es: 'El tratado fundamental de relaciones interpersonales enseña que el liderazgo y la influencia duradera se basan en el interés genuino por los demás, jamás en la manipulación. Carnegie detalla principios esenciales: nunca criticar ni condenar destructivamente, recordar y honrar el nombre de las personas, escuchar con atención sincera, hablar desde los intereses de la otra persona y reconocer los aciertos ajenos con generosidad.'
  },
  sieteEsferas: {
    title: T('Las 7 Esferas de Influencia Cultural', 'The 7 Mountains of Influence'),
    author: 'Lance Wallnau & Loren Cunningham',
    audience: T('Lectura Altamente Recomendada (Opcional) · Cosmovisión y Vocación', 'Highly Recommended (Optional) · Worldview & Calling'),
    key: T('Tu carrera profesional y tu talento no son fines egoístas para ganar estatus; son tu plataforma de servicio y mayordomía cultural para bendecir a la sociedad.', 'Your career is your ministry platform in the real world to bring ethical excellence and service to society.'),
    quote: T('«Tu vocación es tu plataforma ministerial en el mundo real.»', '“Your vocation is your ministry platform in the real world.”'),
    summary_es: 'Plantea que los creyentes están llamados a ser agentes de transformación en las 7 áreas clave que definen la cultura de una nación: 1) Artes y Medios, 2) Negocios y Economía, 3) Educación, 4) Familia, 5) Gobierno y Leyes, 6) Medios de Comunicación, y 7) Iglesia y Fe. Enseña que tu futura profesión universitaria es tu plataforma misionera en el mundo real para modelar excelencia, ética y justicia.'
  },
  liderazgoProposito: {
    title: T('Liderazgo con Propósito', 'Leadership with Purpose'),
    author: 'Rick Warren',
    audience: T('Lectura Altamente Recomendada (Opcional) · Liderazgo y Legado', 'Highly Recommended (Optional) · Leadership & Legacy'),
    key: T('Lecciones de liderazgo de Nehemías: visión clara, edificación del equipo, superación del desánimo e integridad bajo presión.', 'Nehemiah leadership lessons: clear vision, team building, overcoming discouragement, and integrity under pressure.'),
    quote: T('El liderazgo que trasciende no busca posición ni aplauso, sino servir a una causa santa con humildad y perseverancia.', 'Transcendent leadership seeks not position or applause, but to serve a holy cause with humility and perseverance.'),
    summary_es: 'A través de la historia de Nehemías reconstruyendo los muros de Jerusalén, Warren extrae lecciones de liderazgo: 1) Todo proyecto significativo nace en la oración y la visión clara; 2) El líder no hace todo solo, sabe delegar y organizar personas por áreas de afinidad; 3) La oposición y el desánimo no son señales de fracaso, sino pruebas de determinación; y 4) La integridad moral del líder es lo que sostiene la autoridad cuando llegan las crisis.'
  },
  deconstruyendoMente: {
    title: T('Deconstruyendo la Mente Financiera', 'Deconstructing the Financial Mind'),
    author: 'Mauricio Bock',
    audience: T('Lectura Altamente Recomendada (Opcional) · Neurofinanzas y Hábitos', 'Highly Recommended (Optional) · Neurofinance & Habits'),
    key: T('Neurofinanzas y psicología del dinero: identificar sesgos cognitivos, sanar patrones de gasto emocional y alinear recursos con un propósito trascendente.', 'Neurofinance and money psychology: identifying cognitive biases, healing emotional spending, and aligning resources with purpose.'),
    quote: T('Tu relación con el dinero no depende de cuánto ganas, sino de las creencias y emociones que gobiernan cada decisión.', 'Your relationship with money depends not on what you earn, but on the beliefs and emotions behind every choice.'),
    summary_es: 'Explora cómo el cerebro toma decisiones económicas. Bock desmitifica la idea de que la economía es puramente lógica y demuestra que la gran mayoría de decisiones financieras se toman desde emociones, heridas o presiones sociales. Ofrece herramientas de reprogramación mental para sustituir la gratificación inmediata por la visión a largo plazo, erradicar el miedo a la escasez y convertir los recursos financieros en herramientas de libertad y mayordomía con propósito.'
  }
};

/* ---------------- Catálogo Completo de Retos Juniors (8–13 Años) ---------------- */
export const JUNIORS_RETOS = [
  // Naturaleza & Paciencia
  {
    id: 'nat-1',
    track: 'nat',
    trackLabel: T('Naturaleza & Paciencia', 'Nature & Patience'),
    retoNum: 1,
    icon: '🌱',
    title: T('El Huerto de la Paciencia (Germinación)', 'The Patience Garden (Germination)'),
    desc: T('Siembra legumbres en un frasco transparente con algodón húmedo. Registra su crecimiento diario durante 7 días y reflexiona en Gálatas 6:9.', 'Plant legumes in a transparent jar with moist cotton. Record daily growth for 7 days and reflect on Galatians 6:9.'),
    materials: T('Frasco de vidrio, algodón/tierra, semillas de frijol/lenteja, regla, libreta.', 'Glass jar, cotton/soil, bean/lentil seeds, ruler, notebook.'),
    coins: 25,
    verse: 'Gálatas 6:9',
    verseText: T('No nos cansemos, pues, de hacer bien; porque a su tiempo segaremos, si no desmayamos.', 'And let us not grow weary of doing good, for in due season we will reap, if we do not give up.')
  },
  {
    id: 'nat-2',
    track: 'nat',
    trackLabel: T('Naturaleza & Paciencia', 'Nature & Patience'),
    retoNum: 2,
    icon: '🔭',
    title: T('Diario de Campo: Observación de la Creación', 'Field Journal: Creation Observation'),
    desc: T('Elige un árbol, tipo de ave o fase lunar de tu localidad y dibuja/describe su comportamiento durante 5 días seguidos.', 'Pick a tree, bird species, or moon phase in your area and sketch/describe its behavior for 5 consecutive days.'),
    materials: T('Cuaderno de notas, lápices de colores, lupa o binoculares.', 'Notebook, colored pencils, magnifying glass or binoculars.'),
    coins: 25,
    verse: 'Salmo 19:1',
    verseText: T('Los cielos cuentan la gloria de Dios, y el firmamento anuncia la obra de sus manos.', 'The heavens declare the glory of God, and the sky above proclaims his handiwork.')
  },
  {
    id: 'nat-3',
    track: 'nat',
    trackLabel: T('Naturaleza & Paciencia', 'Nature & Patience'),
    retoNum: 3,
    icon: '🪴',
    title: T('Adopción de una Planta o Rincón Verde', 'Adopting a Plant or Green Corner'),
    desc: T('Asume la responsabilidad total del riego, luz solar y limpieza de una planta durante 3 semanas consecutivas con ficha de seguimiento.', 'Take full responsibility for watering, sunlight, and caring for a plant for 3 consecutive weeks with a log sheet.'),
    materials: T('Maceta, regadera pequeña, ficha de seguimiento semanal.', 'Pot, small watering can, weekly tracking sheet.'),
    coins: 25,
    verse: 'Génesis 2:15',
    verseText: T('Tomó, pues, Jehová Dios al hombre, y lo puso en el huerto de Edén, para que lo labrara y lo guardase.', 'The Lord God took the man and put him in the garden of Eden to work it and keep it.')
  },

  // Servicio & Gratitud
  {
    id: 'serv-1',
    track: 'serv',
    trackLabel: T('Servicio & Gratitud', 'Service & Gratitude'),
    retoNum: 1,
    icon: '💌',
    title: T('Tarjeta de Gratitud y Bendición', 'Gratitude & Blessing Card'),
    desc: T('Escribe y decora una carta de aprecio sincero para tus padres, abuelos o un pastor/mentor reconociendo su labor y dedicación.', 'Write and decorate a heartfelt appreciation letter for parents, grandparents, or a pastor/mentor honoring their dedication.'),
    materials: T('Cartulina, colores, sobre, versículo de bendición.', 'Cardstock, colors, envelope, blessing Bible verse.'),
    coins: 25,
    verse: '1 Tesalonicenses 5:18',
    verseText: T('Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.', 'Give thanks in all circumstances; for this is the will of God in Christ Jesus for you.')
  },
  {
    id: 'serv-2',
    track: 'serv',
    trackLabel: T('Servicio & Gratitud', 'Service & Gratitude'),
    retoNum: 2,
    icon: '📦',
    title: T('El Frasco de Bendiciones Familiares', 'Family Blessing Jar'),
    desc: T('Construye un frasco decorado donde cada miembro de la familia deposita un agradecimiento al final de cada día durante 2 semanas.', 'Craft a decorated jar where family members deposit one thankful note every evening for 2 weeks.'),
    materials: T('Frasco de vidrio, tiras de papel, rotuladores, lazo.', 'Glass jar, paper strips, markers, ribbon.'),
    coins: 25,
    verse: 'Salmo 103:2',
    verseText: T('Bendice, alma mía, a Jehová, y no olvides ninguno de sus beneficios.', 'Bless the Lord, O my soul, and forget not all his benefits.')
  },
  {
    id: 'serv-3',
    track: 'serv',
    trackLabel: T('Servicio & Gratitud', 'Service & Gratitude'),
    retoNum: 3,
    icon: '🤝',
    title: T('Operación Siervo Silencioso', 'Operation Silent Servant'),
    desc: T('Realiza 3 actos de ayuda desinteresada en tu hogar o vecindario sin que nadie te lo pida y sin buscar reconocimiento público.', 'Carry out 3 selfless acts of service at home or in your neighborhood without being asked or seeking recognition.'),
    materials: T('Disposición de servicio, reporte reflexivo final.', 'Heart to serve, final reflection report.'),
    coins: 25,
    verse: 'Mateo 6:3-4',
    verseText: T('Mas cuando tú des limosna, no sepa tu izquierda lo que hace tu derecha, para que sea tu limosna en secreto; y tu Padre que ve en lo secreto te recompensará en público.', 'But when you give to the needy, do not let your left hand know what your right hand is doing, so that your giving may be in secret.')
  },

  // Cocina & Costos / Economía Doméstica
  {
    id: 'cook-1',
    track: 'cook',
    trackLabel: T('Cocina & Costos', 'Cooking & Costs'),
    retoNum: 1,
    icon: '🍞',
    title: T('Mayordomía en la Cocina: Pan o Galletas', 'Kitchen Stewardship: Bread or Cookies'),
    desc: T('Elabora una receta casera calculando el costo unitario de los ingredientes y comparte el resultado con tu familia.', 'Bake a homemade recipe calculating the unit cost of each ingredient and share the batch with your family.'),
    materials: T('Harina, levadura/azúcar, receta familiar, libreta de costos.', 'Flour, yeast/sugar, family recipe, cost notepad.'),
    coins: 25,
    verse: 'Juan 6:35',
    verseText: T('Jesús les dijo: Yo soy el pan de vida; el que a mí viene, nunca tendrá hambre.', 'Jesus said to them, "I am the bread of life; whoever comes to me shall not hunger."')
  },
  {
    id: 'cook-2',
    track: 'cook',
    trackLabel: T('Cocina & Costos', 'Cooking & Costs'),
    retoNum: 2,
    icon: '🥗',
    title: T('El Menú del Templo del Espíritu', 'The Temple of the Spirit Menu'),
    desc: T('Diseña y prepara un almuerzo o merienda saludable balanceando proteínas, vegetales y frutas frescas con supervisión adulta.', 'Design and prepare a healthy meal balancing proteins, fresh vegetables, and fruits under adult supervision.'),
    materials: T('Ingredientes frescos, tabla de cortar, supervisión de mamá/papá.', 'Fresh ingredients, cutting board, parent supervision.'),
    coins: 25,
    verse: '1 Corintios 6:19-20',
    verseText: T('¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo... Glorificad, pues, a Dios en vuestro cuerpo.', 'Or do you not know that your body is a temple of the Holy Spirit... So glorify God in your body.')
  },
  {
    id: 'cook-3',
    track: 'cook',
    trackLabel: T('Cocina & Costos', 'Cooking & Costs'),
    retoNum: 3,
    icon: '🧼',
    title: T('Misión Seguridad & Pulcritud en la Cocina', 'Mission Kitchen Safety & Cleanliness'),
    desc: T('Aprende y ejecuta el protocolo completo de desinfección, lavado de platos sin desperdiciar agua y reciclaje ordenado tras una comida familiar.', 'Execute the complete protocol for sanitizing, dishwashing without wasting water, and recycling after a family meal.'),
    materials: T('Esponja, jabón lavavajillas, paño seco, lista de verificación.', 'Sponge, dish soap, drying cloth, checklist.'),
    coins: 25,
    verse: '1 Corintios 14:40',
    verseText: T('Pero hágase todo decentemente y con orden.', 'But all things should be done decently and in order.')
  },

  // Autonomía & Orden
  {
    id: 'auto-1',
    track: 'auto',
    trackLabel: T('Autonomía & Orden', 'Autonomy & Order'),
    retoNum: 1,
    icon: '🧹',
    title: T('Misión Espacio de Excelencia', 'Mission Room of Excellence'),
    desc: T('Transforma tu área de estudio y habitación aplicando el principio de orden y diligencia. Toma foto de "Antes" y "Después".', 'Transform your study area and bedroom applying diligence and order. Take "Before" and "After" photos.'),
    materials: T('Cajas organizadoras, etiquetas, paño de limpieza, cámara/móvil.', 'Storage boxes, labels, cleaning cloth, camera/phone.'),
    coins: 25,
    verse: 'Proverbios 10:4',
    verseText: T('La mano negligente empobrece; mas la mano de los diligentes enriquece.', 'A slack hand causes poverty, but the hand of the diligent makes rich.')
  },
  {
    id: 'auto-2',
    track: 'auto',
    trackLabel: T('Autonomía & Orden', 'Autonomy & Order'),
    retoNum: 2,
    icon: '⏰',
    title: T('La Rutina Nocturna de 5 Minutos (7 Días)', '5-Minute Nightly Routine (7 Days)'),
    desc: T('Prepara tu ropa, mochila y plan de PACEs antes de acostarte durante 7 días seguidos sin recordatorios de tus padres.', 'Prepare your outfit, backpack, and PACE plan before bed for 7 consecutive days without reminders.'),
    materials: T('Checklist de 7 días, reloj o alarma.', '7-day checklist, alarm clock.'),
    coins: 25,
    verse: 'Proverbios 6:6-8',
    verseText: T('Ve a la hormiga, oh perezoso, mira sus caminos, y sé sabio; la cual no teniendo capitán... prepara en el verano su comida.', 'Go to the ant, O sluggard; consider her ways, and be wise. Without having any chief... she prepares her bread in summer.')
  },
  {
    id: 'auto-3',
    track: 'auto',
    trackLabel: T('Autonomía & Orden', 'Autonomy & Order'),
    retoNum: 3,
    icon: '🪡',
    title: T('Cuidado y Mantenimiento de Pertenencias', 'Care & Maintenance of Belongings'),
    desc: T('Aprende a coser un botón suelto, forrar un libro escolar con plástico protector o limpiar tus zapatos con esmero.', 'Learn to sew a loose button, cover a textbook with protective plastic, or polish your shoes with care.'),
    materials: T('Aguja/hilo o plástico de forro o cepillo de calzado.', 'Needle/thread or book film or shoe brush.'),
    coins: 25,
    verse: 'Proverbios 27:23',
    verseText: T('Sé diligente en conocer el estado de tus ovejas, y mira con cuidado por tus rebaños.', 'Know well the condition of your flocks, and give attention to your herds.')
  },

  // Ahorro & Metas (3 Frascos)
  {
    id: 'save-1',
    track: 'save',
    trackLabel: T('Ahorro & Metas', 'Savings & Goals'),
    retoNum: 1,
    icon: '🪙',
    title: T('Mi Alcancía de 3 Frascos', 'My 3-Jar Piggy Bank'),
    desc: T('Organiza tus monedas en 3 categorías: Diezmo/Ofrenda (10%), Ahorro de metas (40%) y Gastos sabios (50%).', 'Organize your allowance into 3 jars: Tithe/Giving (10%), Goal Savings (40%), and Wise Spending (50%).'),
    materials: T('3 frascos o sobres decorados con etiquetas claras.', '3 jars or envelopes decorated with clear labels.'),
    coins: 25,
    verse: 'Malaquías 3:10',
    verseText: T('Traed todos los diezmos al alfolí y haya alimento en mi casa; y probadme ahora en esto...', 'Bring the full tithe into the storehouse, that there may be food in my house. And thereby put me to the test...')
  },
  {
    id: 'save-2',
    track: 'save',
    trackLabel: T('Ahorro & Metas', 'Savings & Goals'),
    retoNum: 2,
    icon: '🎯',
    title: T('Mi Primera Meta de Ahorro y Presupuesto', 'My First Savings Goal & Budget'),
    desc: T('Define un libro o proyecto que deseas adquirir. Calcula cuántas semanas te llevará ahorrar y lleva el registro gráfico.', 'Pick a book or educational tool you wish to acquire. Calculate weeks needed to save and track your progress visually.'),
    materials: T('Termómetro de ahorro dibujado en papel, alcancía.', 'Savings thermometer drawn on paper, coin bank.'),
    coins: 25,
    verse: 'Proverbios 13:11',
    verseText: T('Las riquezas de vanidad disminuirán; pero el que recoge con mano laboriosa las aumentará.', 'Wealth gained hastily will dwindle, but whoever gathers little by little will increase it.')
  },
  {
    id: 'save-3',
    track: 'save',
    trackLabel: T('Ahorro & Metas', 'Savings & Goals'),
    retoNum: 3,
    icon: '🛒',
    title: T('Auditoría de Compras: Necesidad vs. Deseo', 'Shopping Audit: Need vs. Want'),
    desc: T('Acompaña a tus padres a las compras y clasifica 10 productos entre "Necesidad básica" y "Deseo opcional".', 'Accompany your parents to grocery shopping and classify 10 items into "Essential Need" vs "Optional Want".'),
    materials: T('Libreta de notas, bolígrafo, ticket de compra.', 'Notepad, pen, store receipt.'),
    coins: 25,
    verse: '1 Timoteo 6:6-7',
    verseText: T('Pero gran ganancia es la piedad acompañada de contentamiento; porque nada hemos traído a este mundo...', 'Now there is great gain in godliness with contentment, for we brought nothing into the world...')
  },

  // Ciencia & Fe
  {
    id: 'sci-1',
    track: 'sci',
    trackLabel: T('Ciencia & Fe', 'Science & Faith'),
    retoNum: 1,
    icon: '💧',
    title: T('La Tensión Superficial y el Orden Natural', 'Surface Tension & Natural Order'),
    desc: T('Realiza el experimento de la gota de agua sobre monedas y observa cómo las leyes físicas revelan un Creador de orden.', 'Conduct the water drop experiment on coins and observe how physical laws reveal an orderly Creator.'),
    materials: T('Monedas, gotero, agua, detergente, libreta de registro.', 'Coins, dropper, water, dish soap, lab notes.'),
    coins: 25,
    verse: 'Hebreos 11:3',
    verseText: T('Por la fe entendemos haber sido constituido el universo por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía.', 'By faith we understand that the universe was created by the word of God, so that what is seen was not made out of things that are visible.')
  },
  {
    id: 'sci-2',
    track: 'sci',
    trackLabel: T('Ciencia & Fe', 'Science & Faith'),
    retoNum: 2,
    icon: '🌈',
    title: T('La Luz Blanca y el Prisma', 'White Light & The Prism'),
    desc: T('Descompón la luz solar en los 7 colores del arcoíris usando un vaso con agua o un CD y reflexiona en el pacto de Dios.', 'Break white sunlight into the 7 rainbow colors using a glass of water or CD and reflect on God’s covenant.'),
    materials: T('Vaso de agua, linterna o sol directo, espejo plano, hoja blanca.', 'Glass of water, sunlight/torch, small flat mirror, white paper.'),
    coins: 25,
    verse: 'Génesis 9:13',
    verseText: T('Mi arco he puesto en las nubes, el cual será por señal del pacto entre mí y la tierra.', 'I have set my bow in the cloud, and it shall be a sign of the covenant between me and the earth.')
  },
  {
    id: 'sci-3',
    track: 'sci',
    trackLabel: T('Ciencia & Fe', 'Science & Faith'),
    retoNum: 3,
    icon: '🌋',
    title: T('Reacciones Químicas en la Cocina (Bicarbonato y Vinagre)', 'Kitchen Chemistry (Baking Soda & Vinegar)'),
    desc: T('Aplica el método científico formulando una hipótesis antes de mezclar reactivos caseros, midiendo volumen y temperatura.', 'Apply the scientific method by stating a hypothesis before mixing kitchen reagents, observing volume and temperature.'),
    materials: T('Bicarbonato, vinagre, botella plástica, globo, regla.', 'Baking soda, vinegar, plastic bottle, balloon, ruler.'),
    coins: 25,
    verse: 'Salmo 111:2',
    verseText: T('Grandes son las obras de Jehová, buscadas de todos los que las quieren.', 'Great are the works of the Lord, studied by all who delight in them.')
  }
];

/* ---------------- Niveles de Secundaria (High School) ---------------- */
export const HIGH_SCHOOL_LEVELS = {
  seedling: {
    id: 'seedling',
    num: 1,
    gradeUS: '8th / 9th Grade',
    gradeES: '2º / 3º ESO',
    age: '13–14 años (Grado 8 / 9)',
    icon: '🌱',
    title: T('Seedling · Fundamento, Identidad & Hábitos', 'Seedling · Foundation, Identity & Habits'),
    subtitle: T('Identidad en Cristo, Hábitos Atómicos & Primer Servicio (Grado 8/9)', 'Identity in Christ, Atomic Habits & First Service (Grade 8/9)'),
    verseKey: 'seedling',
    books: ['contrabandistaDios', 'habitos', 'ganarAmigos'],
    pdfName: 'life-skills-seedling-14.pdf',
    driveFolder: '03_LIFE_SKILLS (Q1, Q2, Q3)',
    quarters: [
      {
        id: 'Q1',
        title: T('¿Quién soy? Identidad, Raíces y Talentos', 'Who am I? Identity, Roots and Talents'),
        project: T('Escudo de Armas Personal — 4 cuadrantes: Fe · Raíces · Talento · Sueño', 'Personal Coat of Arms — 4 quarters: Faith · Roots · Talent · Dream'),
        deliverable: T('Foto del escudo + carta reflexiva al yo futuro', 'Photo of the shield + reflective letter to future self'),
        files: ['Escudo_de_Armas.jpg (o .pdf)', 'Carta_yo_futuro.pdf'],
        folder: '03_LIFE_SKILLS/Q1',
        capsules: ['identidad', 'lenguajes']
      },
      {
        id: 'Q2',
        title: T('¿Cómo funciono? Hábitos, Emociones y Relaciones', 'How do I work? Habits, Emotions and Relationships'),
        project: T('Tracker de 21 Días de Hábitos + Acto de Servicio documentado', '21-Day Habit Tracker + documented Act of Service'),
        deliverable: T('Tracker de hábitos + 3 fotos del servicio + reflexión escrita', 'Habit tracker + 3 service photos + written reflection'),
        files: ['Tracker_21_Dias.jpg', 'Fotos_Servicio.jpg', 'Reflexion_Q2.pdf'],
        folder: '03_LIFE_SKILLS/Q2',
        capsules: ['habitos', 'comunicacion', 'saludEmocional']
      },
      {
        id: 'Q3',
        title: T('¿Para qué estoy aquí? Propósito y Proyecto BOLD', 'Why am I here? Purpose and BOLD Project'),
        project: T('Proyecto BOLD ejecutado en 7 días + Presentación "My Story in 2 Minutes"', 'BOLD Project executed in 7 days + "My Story in 2 Minutes" presentation'),
        deliverable: T('Video de 2 min + fotos del BOLD + reflexión + referencia de adulto', '2-min video + BOLD photos + reflection + adult reference'),
        files: ['Video_My_Story_2min.mp4', 'Fotos_BOLD_Project.jpg', 'Reflexion_Q3.pdf', 'Referencia_Externa.pdf'],
        folder: '03_LIFE_SKILLS/Q3',
        capsules: ['bold', 'presentaciones']
      }
    ]
  },

  explorer: {
    id: 'explorer',
    num: 2,
    gradeUS: '10th Grade',
    gradeES: '4º ESO',
    age: '15 años',
    icon: '🧭',
    title: T('Explorer · Vocación, Investigación & Propósito', 'Explorer · Calling, Research & Purpose'),
    subtitle: T('Test de Dones, Investigación Comunitaria & Shark Tank Jr.', 'Gifts Test, Community Research & Shark Tank Jr.'),
    verseKey: 'explorer',
    books: ['temperamento', 'lenguajes'],
    pdfName: 'life-skills-explorer-15.pdf',
    driveFolder: '03_LIFE_SKILLS (Q1, Q2, Q3)',
    quarters: [
      {
        id: 'Q1',
        title: T('Vocación y Dones: Test de Talentos y Ensayo', 'Calling and Gifts: Talent Test & Essay'),
        project: T('Test de Dones espirituales/vocacionales completado + ensayo reflexivo (300–500 palabras)', 'Completed Spiritual/Vocational Gifts Test + reflective essay (300–500 words)'),
        deliverable: T('Resultados del test + ensayo vocacional en inglés o español', 'Test results + vocational essay in English or Spanish'),
        files: ['Test_Dones_Resultados.pdf', 'Ensayo_Vocacional.pdf'],
        folder: '03_LIFE_SKILLS/Q1',
        capsules: ['carreras', 'ganarAmigos']
      },
      {
        id: 'Q2',
        title: T('Investigación y Propósito: Fórmula Talento + Necesidad', 'Research and Purpose: Talent + Need Formula'),
        project: T('Proyecto Científico I / Investigación comunitaria sobre un problema local con póster o infografía', 'Science Project I / Community research on local issue with poster or infographic'),
        deliverable: T('Póster o infografía + datos recolectados + conclusiones', 'Poster/infographic + collected data + conclusions'),
        files: ['Proyecto_Cientifico_Poster.pdf', 'Datos_Recolectados.pdf', 'Conclusion.pdf'],
        folder: '03_LIFE_SKILLS/Q2',
        capsules: ['encuestas', 'ideaNegocio']
      },
      {
        id: 'Q3',
        title: T('Emprendimiento Junior: Reto Shark Tank Junior', 'Junior Entrepreneurship: Shark Tank Junior Challenge'),
        project: T('Shark Tank Junior: idear un producto o servicio de impacto y presentarlo con slides y pitch en video', 'Shark Tank Junior: devise an impact product/service and pitch it with slides & video'),
        deliverable: T('Presentación en diapositivas + video pitch de 2 min + reflexión', 'Slide presentation + 2-min pitch video + reflection'),
        files: ['Slides_SharkTank.pdf', 'Video_Presentacion_2min.mp4', 'Reflexion_Q3.pdf'],
        folder: '03_LIFE_SKILLS/Q3',
        capsules: ['presentaciones', 'trabajoEquipo']
      }
    ]
  },

  builder: {
    id: 'builder',
    num: 3,
    gradeUS: '11th Grade',
    gradeES: '1º Bachillerato',
    age: '16 años',
    icon: '🔨',
    title: T('Builder · Liderazgo Real, Finanzas & SAT Prep', 'Builder · Real Leadership, Finance & SAT Prep'),
    subtitle: T('Horas de Servicio Acreditadas, Google Finance & Plan Capstone', 'Accredited Service Hours, Google Finance & Capstone Plan'),
    verseKey: 'builder',
    books: ['padreRico', 'sieteEsferas'],
    pdfName: 'life-skills-builder-16.pdf',
    driveFolder: '03_LIFE_SKILLS (Q1, Q2, Q3)',
    quarters: [
      {
        id: 'Q1',
        title: T('Liderazgo y Servicio BOLD: 20 Horas Documentadas', 'BOLD Leadership & Service: 20 Documented Hours'),
        project: T('Proyecto BOLD de Liderazgo Social: organizar y liderar una iniciativa comunitaria con registro de horas', 'BOLD Social Leadership Project: organize and lead a community initiative with hours log'),
        deliverable: T('Service Log Q1 (20h) + fotos/video de liderazgo + carta de referencia firmada por supervisor', 'Service Log Q1 (20h) + leadership photos/video + supervisor reference letter'),
        files: ['Service_Log_Q1.pdf', 'Fotos_BOLD_Liderazgo.jpg', 'Carta_Referencia_Supervisor.pdf'],
        folder: '03_LIFE_SKILLS/Q1',
        capsules: ['sieteEsferas', 'trabajoEquipo']
      },
      {
        id: 'Q2',
        title: T('Finanzas Reales: Portfolio Virtual en Google Finance', 'Real Finance: Virtual Portfolio in Google Finance'),
        project: T('Gestión de portfolio virtual de $10.000 USD durante 3 meses con informe de mayordomía financiera', 'Management of a virtual $10,000 USD portfolio for 3 months with stewardship report'),
        deliverable: T('Capturas de evolución del portfolio (semanas 1, 6, 12) + informe analítico escrito', 'Portfolio screenshots (weeks 1, 6, 12) + written analytical report'),
        files: ['Finance_Portfolio_Inicio.jpg', 'Finance_6sem.jpg', 'Reporte_Finance_Q2.pdf'],
        folder: '03_LIFE_SKILLS/Q2',
        capsules: ['padreRico', 'contabilidad']
      },
      {
        id: 'Q3',
        title: T('SAT Prep Oficial & Propuesta Inicial de Capstone', 'Official SAT Prep & Initial Capstone Proposal'),
        project: T('Simulacros oficiales en Khan Academy + redacción del plan maestro del Capstone Project (Nivel 4)', 'Official Khan Academy practice tests + drafting Capstone master plan (Level 4)'),
        deliverable: T('Captura de horas en Khan Academy + informe de simulacro + propuesta inicial del Capstone', 'Khan Academy hours screenshot + test report + Capstone proposal'),
        files: ['Khan_Academy_Progreso.jpg', 'Resultado_Simulacro_SAT.pdf', 'Plan_Capstone.pdf'],
        folder: '03_LIFE_SKILLS/Q3',
        capsules: ['planNegocio', 'construirWeb']
      }
    ]
  },

  launch: {
    id: 'launch',
    num: 4,
    gradeUS: '12th Grade',
    gradeES: '2º Bachillerato',
    age: '17 años',
    icon: '🚀',
    title: T('Launch · Capstone, Expediente USA & Legado', 'Launch · Capstone, US Dossier & Legacy'),
    subtitle: T('Obra Maestra, Personal Statement, Resume & Aplicación Universitaria', 'Masterpiece, Personal Statement, Resume & College Application'),
    verseKey: 'launch',
    books: ['liderazgoProposito', 'deconstruyendoMente'],
    pdfName: 'life-skills-launch-17.pdf',
    driveFolder: '03_LIFE_SKILLS + EXPEDIENTE/',
    quarters: [
      {
        id: 'Q1',
        title: T('Capstone Project: Diseño y Fase 1 de Ejecución', 'Capstone Project: Design and Phase 1 Execution'),
        project: T('Obra maestra: solución real a un problema real con metodología formal y cronograma de hitos', 'Masterpiece: real solution to a real problem with formal methodology and milestone timeline'),
        deliverable: T('Documento de propuesta formal + cronograma validado + evidencias de fase 1', 'Formal proposal document + validated timeline + Phase 1 evidence'),
        files: ['Propuesta_Capstone.pdf', 'Cronograma.pdf', 'Evidencias_Fase1.zip'],
        folder: '03_LIFE_SKILLS/Q1',
        capsules: ['expediente', 'carreras']
      },
      {
        id: 'Q2',
        title: T('Ejecución del Capstone (80%) + Resume USA + Personal Statement', 'Capstone Execution (80%) + US Resume + Personal Statement'),
        project: T('Culminación técnica del Capstone + redacción del Resume Académico USA y Personal Statement V1', 'Technical completion of Capstone + drafting US Academic Resume & Personal Statement V1'),
        deliverable: T('Evidencias de campo del Capstone + Resume_USA.pdf + Personal_Statement_V1.pdf', 'Capstone field evidence + Resume_USA.pdf + Personal_Statement_V1.pdf'),
        files: ['Capstone_Evidencias_Q2.pdf', 'Resume_USA.pdf', 'Personal_Statement_V1.pdf'],
        folder: '03_LIFE_SKILLS/Q2',
        capsules: ['curriculum', 'entrevista']
      },
      {
        id: 'Q3',
        title: T('Legado: Presentación Pública, Presupuesto Universitario & SAT', 'Legacy: Public Defense, College Budget & Official SAT'),
        project: T('Defensa pública del Capstone + presupuesto universitario proyectado a 4 años + cierre de expediente', 'Public defense of Capstone + 4-year projected college budget + dossier completion'),
        deliverable: T('Video de la defensa (3–5 min) + Presupuesto_Universitario.pdf + SAT_Official_Score.pdf', 'Defense video (3–5 min) + Presupuesto_Universitario.pdf + SAT_Official_Score.pdf'),
        files: ['Video_Capstone_Presentacion.mp4', 'Presupuesto_Universitario.pdf', 'SAT_Official_Score.pdf'],
        folder: '03_LIFE_SKILLS/Q3',
        capsules: ['presentaciones', 'expediente']
      }
    ]
  }
};

/* ---------------- Cápsulas Interactivas Enriquecidas con Biblia ---------------- */
export const CAPSULES_DATA = {
  "identidad": {
    "id": "identidad",
    "tag": "core",
    "level": "seedling",
    "verseKey": "identidad",
    "title": {
      "es": "¿Quién soy? Identidad y Raíces",
      "en": "Who am I? Identity and Roots"
    },
    "bookKey": "temperamento",
    "project": {
      "es": "Tu <b>Escudo de Armas Personal</b> terminado (4 cuadrantes: Fe · Raíces · Talento · Sueño) con tu lema de vida.",
      "en": "Your finished <b>Personal Coat of Arms</b> with 4 quarters and personal motto."
    },
    "steps": [
      {
        "type": "hook",
        "kicker": {
          "es": "Paso 1 · Apertura",
          "en": "Step 1 · Hook"
        },
        "h": {
          "es": "Un escudo dice más que un nombre",
          "en": "A shield says more than a name"
        },
        "scenario": {
          "es": "Los caballeros y líderes históricos portaban un escudo que contaba su historia: de dónde venían, qué defendían y qué soñaban. Si diseñaras el tuyo hoy…",
          "en": "Knights and historic leaders carried shields telling their story: roots, values, and dreams. If you designed yours today…"
        },
        "body": {
          "es": "Crearás tu <b>Escudo de Armas Personal</b> con cuatro cuadrantes: Fe · Raíces · Talento · Sueño.",
          "en": "You will create your <b>Personal Coat of Arms</b> with four quadrants: Faith · Roots · Talent · Dream."
        }
      },
      {
        "type": "theory",
        "kicker": {
          "es": "Paso 2 · Fundamento",
          "en": "Step 2 · Theory"
        },
        "h": {
          "es": "Identidad antes que estrategia",
          "en": "Identity before strategy"
        },
        "body": {
          "es": "No puedes liderar hacia dónde vas si no sabes quién eres. La identidad es la unión de tus raíces familiares, tus dones espirituales y tu propósito en Cristo.",
          "en": "You cannot lead where you are going if you do not know who you are. Identity is the union of roots, gifts, and purpose in Christ."
        },
        "diagram": {
          "es": "<b>Fórmula del Escudo</b><br>Fe + Raíces + Talento + Sueño = Identidad con dirección.",
          "en": "<b>Shield Formula</b><br>Faith + Roots + Talent + Dream = Directed Identity."
        }
      },
      {
        "type": "quiz",
        "kicker": {
          "es": "Paso 3 · Comprobación",
          "en": "Step 3 · Quiz"
        },
        "h": {
          "es": "¿Qué NO define tu identidad?",
          "en": "What does NOT define your identity?"
        },
        "q": {
          "es": "¿Cuál de estos elementos NO es una base sólida y eterna de tu identidad?",
          "en": "Which of these is NOT a solid eternal foundation for your identity?"
        },
        "opts": [
          {
            "t": {
              "es": "Mis raíces familiares y principios aprendidos",
              "en": "My family roots and learned principles"
            },
            "ok": false
          },
          {
            "t": {
              "es": "El número de seguidores o \"likes\" en redes sociales",
              "en": "Number of followers or likes on social media"
            },
            "ok": true
          },
          {
            "t": {
              "es": "Los dones y talentos que Dios me otorgó",
              "en": "Gifts and talents God gave me"
            },
            "ok": false
          },
          {
            "t": {
              "es": "La fe y las convicciones en mi corazón",
              "en": "Faith and convictions in my heart"
            },
            "ok": false
          }
        ],
        "okMsg": {
          "es": "¡Exacto! La aprobación externa cambia constantemente; tu identidad en Cristo es inamovible.",
          "en": "Exactly! External approval changes constantly; your identity in Christ is unshakeable."
        },
        "noMsg": {
          "es": "Piénsalo otra vez: eso es interno y estable.",
          "en": "Think again: that is internal and stable."
        }
      },
      {
        "type": "reflect",
        "kicker": {
          "es": "Paso 4 · Aplicación",
          "en": "Step 4 · Reflection"
        },
        "h": {
          "es": "Los 4 Cuadrantes de tu Escudo",
          "en": "The 4 Quadrants of your Shield"
        },
        "body": {
          "es": "Escribe una frase clave para cada uno de los 4 cuadrantes. Será la base de tu entregable de Q1.",
          "en": "Write a key sentence for each quadrant to build your Q1 deliverable."
        },
        "prompt": {
          "es": "1. Fe: ___\n2. Raíces: ___\n3. Talento: ___\n4. Sueño: ___",
          "en": "1. Faith: ___\n2. Roots: ___\n3. Talent: ___\n4. Dream: ___"
        }
      }
    ]
  },
  "habitos": {
    "id": "habitos",
    "tag": "core",
    "level": "seedling",
    "verseKey": "habitos",
    "title": {
      "es": "Hábitos que te Construyen (Hábitos Atómicos)",
      "en": "Habits that Build You (Atomic Habits)"
    },
    "bookKey": "habitos",
    "project": {
      "es": "Tu <b>Tracker de 21 Días</b> completo con el hábito de 2 minutos que elegiste, marcado día a día.",
      "en": "Your completed <b>21-Day Tracker</b> for the 2-minute habit marked day by day."
    },
    "steps": [
      {
        "type": "hook",
        "kicker": {
          "es": "Paso 1 · Apertura",
          "en": "Step 1 · Hook"
        },
        "h": {
          "es": "1% mejor cada día",
          "en": "1% better every day"
        },
        "scenario": {
          "es": "Si mejoras solo 1% cada día durante un año, terminas casi 38 veces mejor. Los pequeños hábitos se multiplican exponencialmente.",
          "en": "If you improve just 1% each day for a year, you end up nearly 38 times better."
        },
        "body": {
          "es": "Conectamos la idea central de <b>Hábitos Atómicos</b> con tu Tracker de 21 días.",
          "en": "We connect the core idea of <b>Atomic Habits</b> with your 21-day tracker."
        }
      },
      {
        "type": "theory",
        "kicker": {
          "es": "Paso 2 · Principio",
          "en": "Step 2 · Principle"
        },
        "h": {
          "es": "Sistemas, no metas",
          "en": "Systems, not goals"
        },
        "body": {
          "es": "No subes al nivel de tus metas; caes al nivel de tus sistemas. El sistema es lo que repites a diario.",
          "en": "You do not rise to the level of your goals; you fall to the level of your systems."
        },
        "diagram": {
          "es": "<b>Las 4 Leyes del Hábito</b><br>1. Hazlo obvio · 2. Hazlo atractivo · 3. Hazlo fácil (regla de 2 min) · 4. Hazlo satisfactorio.",
          "en": "<b>The 4 Laws of Habit</b><br>1. Make it obvious · 2. Make it attractive · 3. Make it easy (2-min rule) · 4. Make it satisfying."
        }
      },
      {
        "type": "quiz",
        "kicker": {
          "es": "Paso 3 · Comprobación",
          "en": "Step 3 · Quiz"
        },
        "h": {
          "es": "Meta vs. Sistema",
          "en": "Goal vs. System"
        },
        "q": {
          "es": "¿Cuál de las siguientes opciones describe un SISTEMA y no una simple meta?",
          "en": "Which of the following describes a SYSTEM and not just a goal?"
        },
        "opts": [
          {
            "t": {
              "es": "Quiero ser una persona sabia y leída este año",
              "en": "I want to be a well-read person this year"
            },
            "ok": false
          },
          {
            "t": {
              "es": "Leo 10 páginas de mi libro de formación cada día después de cenar",
              "en": "I read 10 pages of my book daily right after dinner"
            },
            "ok": true
          },
          {
            "t": {
              "es": "Voy a sacar un promedio perfecto en el curso",
              "en": "I will get a perfect GPA in the course"
            },
            "ok": false
          },
          {
            "t": {
              "es": "Deseo tener un cuerpo atlético",
              "en": "I wish to have an athletic body"
            },
            "ok": false
          }
        ],
        "okMsg": {
          "es": "¡Correcto! Una acción concreta, contextualizada y repetible en el tiempo.",
          "en": "Correct! A concrete, contextualized, repeatable action."
        },
        "noMsg": {
          "es": "Eso es un deseo o meta general. Un sistema define la acción exacta y el momento.",
          "en": "That is a wish/goal. A system defines exact action and trigger."
        }
      },
      {
        "type": "reflect",
        "kicker": {
          "es": "Paso 4 · Aplicación",
          "en": "Step 4 · Reflection"
        },
        "h": {
          "es": "Diseña tu Hábito de 2 Minutos",
          "en": "Design your 2-Minute Habit"
        },
        "body": {
          "es": "Aplica la ley \"hazlo fácil\": define un micro-hábito que tome menos de 2 minutos para arrancar tu tracker.",
          "en": "Apply \"make it easy\": define a micro-habit taking under 2 minutes."
        },
        "prompt": {
          "es": "• Hábito deseado: ___\n• Versión de 2 minutos para empezar: ___\n• Señal o disparador (¿cuándo lo harás?): ___",
          "en": "• Target habit: ___\n• 2-minute startup version: ___\n• Trigger cue: ___"
        }
      }
    ]
  },
  "lenguajes": {
    "id": "lenguajes",
    "tag": "core",
    "level": "seedling",
    "verseKey": "lenguajes",
    "title": {
      "es": "Los 5 Lenguajes del Amor y Relaciones",
      "en": "The 5 Love Languages & Relationships"
    },
    "bookKey": "lenguajes",
    "project": {
      "es": "Una <b>carta a tus padres o mentor</b> escrita en su lenguaje principal de amor, con reflexión.",
      "en": "A <b>letter to parents or mentor</b> written in their primary love language."
    },
    "steps": [
      {
        "type": "hook",
        "kicker": {
          "es": "Paso 1 · Apertura",
          "en": "Step 1 · Hook"
        },
        "h": {
          "es": "No todos nos sentimos amados igual",
          "en": "Not everyone feels loved the same way"
        },
        "scenario": {
          "es": "Puedes comprarle un regalo costoso a un amigo y que no se emocione… pero cuando le dedicas una tarde para conversar sin mirar el móvil, sus ojos brillan.",
          "en": "You can buy someone an expensive gift and they feel neutral, but spend an hour listening without your phone and their eyes light up."
        },
        "body": {
          "es": "Los 5 lenguajes explican cómo cada persona percibe y recibe el aprecio genuino.",
          "en": "The 5 love languages explain how individuals perceive authentic care."
        }
      },
      {
        "type": "theory",
        "kicker": {
          "es": "Paso 2 · Los 5 Canales",
          "en": "Step 2 · 5 Channels"
        },
        "h": {
          "es": "Cinco formas de expresar amor",
          "en": "Five ways to express love"
        },
        "body": {
          "es": "Cada persona tiene uno o dos lenguajes predominantes. Madurar en liderazgo implica aprender a hablar el lenguaje del prójimo.",
          "en": "Each person has primary languages. Maturing in leadership means speaking the other person’s language."
        },
        "diagram": {
          "es": "<b>Los 5 Lenguajes</b><br>1. Palabras de afirmación · 2. Tiempo de calidad · 3. Regalos con significado · 4. Actos de servicio · 5. Contacto físico respetuoso.",
          "en": "<b>The 5 Languages</b><br>1. Words of affirmation · 2. Quality time · 3. Meaningful gifts · 4. Acts of service · 5. Respectful touch."
        }
      },
      {
        "type": "quiz",
        "kicker": {
          "es": "Paso 3 · Práctica",
          "en": "Step 3 · Practice"
        },
        "h": {
          "es": "Identificando Lenguajes",
          "en": "Identifying Languages"
        },
        "q": {
          "es": "Si tu hermano menor se siente feliz cuando le ayudas a ordenar sus legos sin criticarle, su lenguaje es:",
          "en": "If your younger sibling is happiest when you help organize their toys without complaint, their language is:"
        },
        "opts": [
          {
            "t": {
              "es": "Regalos",
              "en": "Gifts"
            },
            "ok": false
          },
          {
            "t": {
              "es": "Actos de servicio",
              "en": "Acts of service"
            },
            "ok": true
          },
          {
            "t": {
              "es": "Palabras de afirmación",
              "en": "Words of affirmation"
            },
            "ok": false
          },
          {
            "t": {
              "es": "Contacto físico",
              "en": "Physical touch"
            },
            "ok": false
          }
        ],
        "okMsg": {
          "es": "¡Exacto! La acción práctica y dedicada de ayuda comunica amor directo.",
          "en": "Exact! Practical dedicated help directly communicates love."
        },
        "noMsg": {
          "es": "Observa la naturaleza de la acción: es una ayuda práctica.",
          "en": "Notice the nature of the action: practical help."
        }
      },
      {
        "type": "reflect",
        "kicker": {
          "es": "Paso 4 · Compromiso",
          "en": "Step 4 · Action"
        },
        "h": {
          "es": "Tu Gesto de Amor Esta Semana",
          "en": "Your Love Action This Week"
        },
        "body": {
          "es": "Identifica el lenguaje principal de papá o mamá y planifica un gesto concreto.",
          "en": "Identify your parent's primary language and plan a specific action."
        },
        "prompt": {
          "es": "• Persona: ___\n• Su lenguaje estimado: ___\n• Acción concreta que realizaré esta semana: ___",
          "en": "• Person: ___\n• Estimated language: ___\n• Concrete action this week: ___"
        }
      }
    ]
  },
  "saludEmocional": {
    "id": "saludEmocional",
    "tag": "care",
    "level": "seedling",
    "verseKey": "saludEmocional",
    "title": {
      "es": "Salud Emocional, Estrés y Paz en Cristo",
      "en": "Emotional Health, Stress & Peace in Christ"
    },
    "bookKey": "mentirasChicas",
    "project": {
      "es": "Tu <b>Semáforo Emocional</b> y diario de autorregulación con versículos de paz.",
      "en": "Your <b>Emotional Traffic Light</b> and self-regulation journal with peace verses."
    },
    "steps": [
      {
        "type": "hook",
        "kicker": {
          "es": "Paso 1 · Apertura",
          "en": "Step 1 · Hook"
        },
        "h": {
          "es": "Las emociones son mensajeros, no capitanes",
          "en": "Emotions are messengers, not captains"
        },
        "scenario": {
          "es": "Sentir frustración o ansiedad ante una entrega difícil es natural. Lo determinante es qué haces con esa emoción: ¿la dejas tomar el control o la llevas a Dios?",
          "en": "Feeling stressed before a deadline is normal. What matters is what you do with it: let it control you or take it to God?"
        },
        "body": {
          "es": "Aprende a gestionar el semáforo emocional: Verde (calma), Amarillo (alerta), Rojo (pausa necesaria).",
          "en": "Learn to handle the emotional traffic light: Green, Yellow, Red."
        }
      },
      {
        "type": "theory",
        "kicker": {
          "es": "Paso 2 · Autorregulación",
          "en": "Step 2 · Theory"
        },
        "h": {
          "es": "El Filtro Bíblico de los Pensamientos",
          "en": "The Biblical Filter for Thoughts"
        },
        "body": {
          "es": "Filipenses 4:8 nos enseña a llenar la mente con lo verdadero, lo honesto, lo justo, lo puro y lo amable. Reconocer pensamientos distorsionados es clave.",
          "en": "Philippians 4:8 teaches us to fill our minds with truth, honor, justice, and purity."
        },
        "diagram": {
          "es": "<b>El Proceso de Calma</b><br>1. Detente y respira · 2. Nombra la emoción · 3. Lleva la carga en oración · 4. Elige una acción sabia.",
          "en": "<b>Calm Process</b><br>1. Stop & breathe · 2. Name emotion · 3. Pray · 4. Choose wise action."
        }
      },
      {
        "type": "quiz",
        "kicker": {
          "es": "Paso 3 · Quiz",
          "en": "Step 3 · Quiz"
        },
        "h": {
          "es": "Respuesta ante la Presión",
          "en": "Response to Pressure"
        },
        "q": {
          "es": "Cuando sientes que el tiempo no te alcanza y comienzas a entrar en pánico, ¿cuál es el primer paso sabio?",
          "en": "When you feel overwhelmed by lack of time and panic starts, what is the first wise step?"
        },
        "opts": [
          {
            "t": {
              "es": "Quejarte en redes sociales y posponer todo",
              "en": "Complain online and procrastinate"
            },
            "ok": false
          },
          {
            "t": {
              "es": "Hacer una pausa de 2 minutos, respirar, orar y priorizar 1 sola tarea inmediata",
              "en": "Pause 2 min, breathe, pray, and prioritize 1 single immediate task"
            },
            "ok": true
          },
          {
            "t": {
              "es": "Renunciar a la materia",
              "en": "Give up on the subject"
            },
            "ok": false
          },
          {
            "t": {
              "es": "Enojarte con quienes te rodean",
              "en": "Get angry with those around you"
            },
            "ok": false
          }
        ],
        "okMsg": {
          "es": "¡Excelente! Pausa, reordenamiento mental y enfoque en una sola cosa a la vez.",
          "en": "Excellent! Pause, mental reset, and focus on one thing at a time."
        },
        "noMsg": {
          "es": "Esa reacción aumenta el estrés en lugar de resolverlo.",
          "en": "That reaction increases stress rather than resolving it."
        }
      },
      {
        "type": "reflect",
        "kicker": {
          "es": "Paso 4 · Tu Diario",
          "en": "Step 4 · Journal"
        },
        "h": {
          "es": "Tu Ancla de Paz",
          "en": "Your Peace Anchor"
        },
        "body": {
          "es": "Escribe tu versículo ancla para momentos de sobrecarga.",
          "en": "Write your anchor verse for moments of overload."
        },
        "prompt": {
          "es": "• Mi versículo de paz favorito: ___\n• Una situación donde lo recordaré: ___",
          "en": "• My favorite peace verse: ___\n• A situation where I will remember it: ___"
        }
      }
    ]
  },
  "padreRico": {
    "id": "padreRico",
    "tag": "money",
    "level": "builder",
    "verseKey": "padreRico",
    "title": {
      "es": "Inteligencia Financiera: Activos vs. Pasivos",
      "en": "Financial Literacy: Assets vs. Liabilities"
    },
    "bookKey": "padreRico",
    "project": {
      "es": "Tu <b>Portfolio Virtual de $10.000</b> en Google Finance con reporte mensual de tesis de inversión.",
      "en": "Your <b>$10k Virtual Portfolio</b> on Google Finance with thesis report."
    },
    "steps": [
      {
        "type": "hook",
        "kicker": {
          "es": "Paso 1 · Apertura",
          "en": "Step 1 · Hook"
        },
        "h": {
          "es": "El dinero como herramienta de servicio",
          "en": "Money as a tool of service"
        },
        "scenario": {
          "es": "Dos personas ganan $2.000 al mes: la primera gasta $2.100 en cosas que pierden valor; la segunda ahorra e invierte $400 en activos productivos y mayordomía.",
          "en": "Two people earn $2,000/mo: one spends $2,100 on depreciating items; the other invests $400 into productive assets and giving."
        },
        "body": {
          "es": "La diferencia entre libertad financiera y esclavitud de deudas es la distinción entre activos y pasivos.",
          "en": "The difference between financial peace and debt bondage is understanding assets vs liabilities."
        }
      },
      {
        "type": "theory",
        "kicker": {
          "es": "Paso 2 · Concepto Clave",
          "en": "Step 2 · Core Concept"
        },
        "h": {
          "es": "¿Qué es un Activo real?",
          "en": "What is a real Asset?"
        },
        "body": {
          "es": "Un activo pone dinero en tu bolsillo (o genera valor real a largo plazo). Un pasivo extrae dinero de tu bolsillo.",
          "en": "An asset puts value/money into your pocket over time. A liability takes money out."
        },
        "diagram": {
          "es": "<b>Ecuación de Mayordomía</b><br>Ingresos → [Diezmo 10% + Ahorro/Inversión 30%] → Gastos Sabios 60% → Paz Financiera.",
          "en": "<b>Stewardship Equation</b><br>Income → [Tithe 10% + Investment 30%] → Wise Expenses 60% → Peace."
        }
      },
      {
        "type": "quiz",
        "kicker": {
          "es": "Paso 3 · Quiz",
          "en": "Step 3 · Quiz"
        },
        "h": {
          "es": "Activo o Pasivo",
          "en": "Asset or Liability"
        },
        "q": {
          "es": "Comprar el último smartphone a plazos con intereses mensuales que no puedes pagar de contado es:",
          "en": "Buying the latest smartphone with monthly high-interest debt you cannot pay in cash is:"
        },
        "opts": [
          {
            "t": {
              "es": "Una inversión de capital",
              "en": "A capital investment"
            },
            "ok": false
          },
          {
            "t": {
              "es": "Un pasivo que reduce tu flujo de caja",
              "en": "A liability that shrinks your cash flow"
            },
            "ok": true
          },
          {
            "t": {
              "es": "Un activo libre de riesgo",
              "en": "A risk-free asset"
            },
            "ok": false
          },
          {
            "t": {
              "es": "Una donación benéfica",
              "en": "A charitable donation"
            },
            "ok": false
          }
        ],
        "okMsg": {
          "es": "¡Exactamente! Se devalúa con el tiempo y te genera una obligación financiera.",
          "en": "Exactly! It depreciates and generates debt obligation."
        },
        "noMsg": {
          "es": "Analiza si genera ingresos o si te genera gastos mensuales.",
          "en": "Analyze whether it generates income or drains monthly expenses."
        }
      },
      {
        "type": "reflect",
        "kicker": {
          "es": "Paso 4 · Portfolio",
          "en": "Step 4 · Portfolio"
        },
        "h": {
          "es": "Definición de 3 Empresas para tu Portfolio",
          "en": "Define 3 Companies for Portfolio"
        },
        "body": {
          "es": "Selecciona 3 empresas éticas para tu simulación en Google Finance y fundamenta por qué las elegiste.",
          "en": "Select 3 ethical companies for Google Finance simulation and justify them."
        },
        "prompt": {
          "es": "• Empresa 1 (Tecnología/Salud/Energía): ___ | Motivo: ___\n• Empresa 2: ___ | Motivo: ___\n• Empresa 3: ___ | Motivo: ___",
          "en": "• Company 1: ___ | Reason: ___\n• Company 2: ___ | Reason: ___\n• Company 3: ___ | Reason: ___"
        }
      }
    ]
  },
  "sieteEsferas": {
    "id": "sieteEsferas",
    "tag": "leadership",
    "level": "builder",
    "verseKey": "sieteEsferas",
    "title": {
      "es": "Las 7 Esferas de Influencia en la Sociedad",
      "en": "The 7 Spheres of Cultural Influence"
    },
    "bookKey": "sieteEsferas",
    "project": {
      "es": "Tu <b>Mapeo de Esfera Vocacional</b> con plan de impacto cristiano para tu comunidad.",
      "en": "Your <b>Vocational Sphere Map</b> with Christian impact plan."
    },
    "steps": [
      {
        "type": "hook",
        "kicker": {
          "es": "Paso 1 · Apertura",
          "en": "Step 1 · Hook"
        },
        "h": {
          "es": "La fe fuera de las cuatro paredes",
          "en": "Faith outside church walls"
        },
        "scenario": {
          "es": "Muchos creen que servir a Dios es solo ser pastor o misionero tradicional. Pero Dios necesita médicos, ingenieros, artistas, educadores y empresarios íntegros.",
          "en": "Many think serving God is only being a pastor. God needs honest doctors, engineers, artists, educators, and entrepreneurs."
        },
        "body": {
          "es": "Las 7 Esferas representan las áreas que moldean la cultura de una nación.",
          "en": "The 7 Spheres represent key areas that shape cultural values."
        }
      },
      {
        "type": "theory",
        "kicker": {
          "es": "Paso 2 · Las 7 Montañas",
          "en": "Step 2 · The 7 Mountains"
        },
        "h": {
          "es": "Los 7 Pilares Culturales",
          "en": "The 7 Cultural Pillars"
        },
        "body": {
          "es": "1. Artes y Entretenimiento · 2. Negocios y Economía · 3. Educación · 4. Familia · 5. Gobierno y Leyes · 6. Medios de Comunicación · 7. Iglesia y Fe.",
          "en": "1. Arts/Media · 2. Business · 3. Education · 4. Family · 5. Government · 6. Media · 7. Church."
        },
        "diagram": {
          "es": "<b>Sal y Luz</b><br>Tu profesión es tu púlpito; tu excelencia técnica es tu testimonio.",
          "en": "<b>Salt & Light</b><br>Your profession is your platform; your excellence is your testimony."
        }
      },
      {
        "type": "quiz",
        "kicker": {
          "es": "Paso 3 · Quiz",
          "en": "Step 3 · Quiz"
        },
        "h": {
          "es": "Tu Llamado",
          "en": "Your Calling"
        },
        "q": {
          "es": "Si tu talento es la programación y el diseño web, ¿en qué esfera principal puedes impactar con valores bíblicos?",
          "en": "If your talent is coding and web design, in which primary sphere can you impact with values?"
        },
        "opts": [
          {
            "t": {
              "es": "Negocios, Tecnología y Medios",
              "en": "Business, Technology & Media"
            },
            "ok": true
          },
          {
            "t": {
              "es": "Únicamente en el coro de la iglesia",
              "en": "Only in the church choir"
            },
            "ok": false
          },
          {
            "t": {
              "es": "En ninguna, la tecnología no se relaciona con la fe",
              "en": "None, technology does not relate to faith"
            },
            "ok": false
          },
          {
            "t": {
              "es": "Solo si estudio teología",
              "en": "Only if I study theology"
            },
            "ok": false
          }
        ],
        "okMsg": {
          "es": "¡Totalmente! La tecnología y los negocios transforman vidas cuando se construyen sobre la verdad.",
          "en": "Totally! Tech and business transform lives when anchored in truth."
        },
        "noMsg": {
          "es": "La tecnología y los medios son herramientas de enorme alcance e impacto cultural.",
          "en": "Tech and media are powerful tools for cultural impact."
        }
      },
      {
        "type": "reflect",
        "kicker": {
          "es": "Paso 4 · Mapeo",
          "en": "Step 4 · Mapping"
        },
        "h": {
          "es": "Identifica tu Esfera de Interés",
          "en": "Identify your Sphere"
        },
        "body": {
          "es": "Escribe en cuál de las 7 esferas sientes mayor inclinación y qué problema te gustaría resolver.",
          "en": "Which of the 7 spheres attracts you most and what problem would you like to solve?"
        },
        "prompt": {
          "es": "• Mi esfera elegida: ___\n• Necesidad o injusticia que veo en esa área: ___\n• Cómo puedo aportar una solución con excelencia: ___",
          "en": "• My chosen sphere: ___\n• Need or injustice observed: ___\n• How I can bring a solution with excellence: ___"
        }
      }
    ]
  },
  "comunicacion": {
    "id": "comunicacion",
    "tag": "core",
    "level": "seedling",
    "verseKey": "comunicacion",
    "status": "draft",
    "authoring": "ai_assisted",
    "title": {
      "es": "Palabras que Construyen",
      "en": "Words That Build"
    },
    "project": {
      "es": "Tu <b>Registro de Palabras</b> de una semana: 5 momentos en que tus palabras construyeron y 2 en que derribaron, con lo que dirías hoy.",
      "en": "Your one-week <b>Word Log</b>: 5 moments your words built up and 2 where they tore down, with what you would say today."
    },
    "steps": [
      {
        "type": "hook",
        "kicker": {
          "es": "Paso 1 · Apertura",
          "en": "Step 1 · Hook"
        },
        "h": {
          "es": "Lo dicho no se recoge",
          "en": "What is said cannot be unsaid"
        },
        "scenario": {
          "es": "Un amigo comparte algo que le costó contar. Tú respondes con una broma rápida delante de otros. Todos ríen. Él también ríe… y no vuelve a contarte nada.",
          "en": "A friend shares something hard to say. You crack a quick joke in front of others. Everyone laughs. He laughs too… and never confides in you again."
        },
        "body": {
          "es": "Nadie mintió y nadie insultó. Aun así algo se rompió. Esta cápsula trata de la diferencia entre <b>tener razón</b> y <b>edificar</b>.",
          "en": "Nobody lied and nobody insulted. Still, something broke. This capsule is about the difference between <b>being right</b> and <b>building up</b>."
        }
      },
      {
        "type": "theory",
        "kicker": {
          "es": "Paso 2 · Fundamento",
          "en": "Step 2 · Theory"
        },
        "h": {
          "es": "El filtro de las tres puertas",
          "en": "The three-gate filter"
        },
        "body": {
          "es": "Efesios 4:29 no prohíbe hablar: pide que lo que salga sirva para <b>edificación</b>. La pregunta no es \"¿es verdad?\" sino \"¿es verdad, es necesario y es el momento?\".",
          "en": "Ephesians 4:29 does not forbid speaking: it asks that what comes out serves to <b>build up</b>. The question is not \"is it true?\" but \"is it true, is it necessary, and is it the moment?\"."
        },
        "diagram": {
          "es": "<b>Antes de hablar, tres puertas</b><br>1. ¿Es cierto? · 2. ¿Es necesario decirlo? · 3. ¿Es este el momento y el lugar?<br>Si falla una, espera.",
          "en": "<b>Three gates before speaking</b><br>1. Is it true? · 2. Is it necessary? · 3. Is this the time and place?<br>If one fails, wait."
        }
      },
      {
        "type": "quiz",
        "kicker": {
          "es": "Paso 3 · Comprobación",
          "en": "Step 3 · Quiz"
        },
        "h": {
          "es": "¿Cuál pasa las tres puertas?",
          "en": "Which one passes all three gates?"
        },
        "q": {
          "es": "Tu hermana ha dibujado algo que no le ha salido bien y te lo enseña. ¿Qué respuesta edifica sin mentir?",
          "en": "Your sister shows you a drawing that did not turn out well. Which answer builds up without lying?"
        },
        "opts": [
          {
            "t": {
              "es": "\"Está feo, te ha quedado mal.\"",
              "en": "\"It is ugly, you did it badly.\""
            },
            "ok": false
          },
          {
            "t": {
              "es": "\"¡Es perfecto, eres una artista!\"",
              "en": "\"It is perfect, you are an artist!\""
            },
            "ok": false
          },
          {
            "t": {
              "es": "\"Las manos aún no te salen, pero mira cómo has mejorado la cara. ¿Sigues?\"",
              "en": "\"Hands are not there yet, but look how the face improved. Keep going?\""
            },
            "ok": true
          },
          {
            "t": {
              "es": "No decir nada y cambiar de tema.",
              "en": "Say nothing and change the subject."
            },
            "ok": false
          }
        ],
        "okMsg": {
          "es": "Exacto. Es verdad (no niegas el fallo), es necesario (te lo pidió) y edifica (señala el avance y la invita a seguir).",
          "en": "Exactly. It is true, it is necessary, and it builds up by naming progress and inviting her to continue."
        },
        "noMsg": {
          "es": "Revisa las tres puertas: mentir no edifica, y callar tampoco cuando te han pedido tu opinión.",
          "en": "Check the three gates: lying does not build up, and staying silent does not either when asked."
        }
      },
      {
        "type": "reflect",
        "kicker": {
          "es": "Paso 4 · Aplicación",
          "en": "Step 4 · Reflection"
        },
        "h": {
          "es": "Tu Registro de Palabras",
          "en": "Your Word Log"
        },
        "body": {
          "es": "Durante una semana anota momentos reales. No busques ser el bueno de la historia: busca los datos.",
          "en": "For one week write down real moments. Do not try to be the hero: look for the data."
        },
        "prompt": {
          "es": "1. Palabras que construyeron (5 momentos): ___\n2. Palabras que derribaron (2 momentos): ___\n3. Qué diría hoy en su lugar: ___\n4. ¿A quién debo una conversación?: ___",
          "en": "1. Words that built up (5): ___\n2. Words that tore down (2): ___\n3. What I would say today: ___\n4. Who do I owe a conversation?: ___"
        }
      }
    ]
  },
  "bold": {
    "id": "bold",
    "tag": "core",
    "level": "seedling",
    "verseKey": "bold",
    "bookKey": "contrabandistaDios",
    "status": "draft",
    "authoring": "ai_assisted",
    "title": {
      "es": "Valentía que no es Ruido",
      "en": "Courage That Is Not Noise"
    },
    "project": {
      "es": "Tu <b>Acta de Valentía</b>: una acción correcta y difícil que hiciste esta semana, con lo que temías y lo que pasó de verdad.",
      "en": "Your <b>Courage Record</b>: one right and difficult action taken this week, what you feared, and what actually happened."
    },
    "steps": [
      {
        "type": "hook",
        "kicker": {
          "es": "Paso 1 · Apertura",
          "en": "Step 1 · Hook"
        },
        "h": {
          "es": "El valiente también tiembla",
          "en": "The brave one shakes too"
        },
        "scenario": {
          "es": "En el grupo se están riendo de alguien que no está. Tú no te ríes, pero tampoco dices nada. Al salir sientes un peso raro. No hiciste nada malo… y aun así.",
          "en": "The group is laughing at someone who is not there. You do not laugh, but you say nothing. Leaving, you feel a strange weight. You did nothing wrong… and still."
        },
        "body": {
          "es": "Josué 1:9 no dice \"no sientas miedo\". Dice \"esfuérzate y sé valiente <b>porque</b> yo estoy contigo\". La valentía no es ausencia de miedo: es moverse con él.",
          "en": "Joshua 1:9 does not say \"feel no fear\". It says be strong and courageous <b>because</b> I am with you. Courage is not the absence of fear: it is moving with it."
        }
      },
      {
        "type": "theory",
        "kicker": {
          "es": "Paso 2 · Fundamento",
          "en": "Step 2 · Theory"
        },
        "h": {
          "es": "Valentía no es temeridad",
          "en": "Courage is not recklessness"
        },
        "body": {
          "es": "Gritar más fuerte no es ser valiente. La temeridad busca público; la valentía busca lo correcto, muchas veces sin que nadie lo vea. La cobardía se disfraza de \"no era asunto mío\".",
          "en": "Shouting louder is not courage. Recklessness seeks an audience; courage seeks what is right, often unseen. Cowardice disguises itself as \"it was not my business\"."
        },
        "diagram": {
          "es": "<b>Tres posiciones</b><br>Cobardía: veo y callo · Temeridad: actúo para que me vean · Valentía: actúo porque es correcto, con o sin público.",
          "en": "<b>Three positions</b><br>Cowardice: I see and stay silent · Recklessness: I act to be seen · Courage: I act because it is right."
        }
      },
      {
        "type": "quiz",
        "kicker": {
          "es": "Paso 3 · Comprobación",
          "en": "Step 3 · Quiz"
        },
        "h": {
          "es": "¿Dónde está la valentía?",
          "en": "Where is the courage?"
        },
        "q": {
          "es": "Se están burlando de un compañero en el grupo de clase. ¿Cuál de estas es valentía y no temeridad?",
          "en": "Classmates are mocking someone in the class chat. Which is courage and not recklessness?"
        },
        "opts": [
          {
            "t": {
              "es": "Escribir en el grupo un insulto más fuerte al que se burla.",
              "en": "Post an even harsher insult at the mocker."
            },
            "ok": false
          },
          {
            "t": {
              "es": "Escribir \"cortad ya\" y luego hablar a solas con el compañero del que se burlan.",
              "en": "Write \"stop it\" and then speak privately with the person mocked."
            },
            "ok": true
          },
          {
            "t": {
              "es": "Salir del grupo sin decir nada.",
              "en": "Leave the chat without saying anything."
            },
            "ok": false
          },
          {
            "t": {
              "es": "Guardar capturas para enseñárselas a todos después.",
              "en": "Save screenshots to show everyone later."
            },
            "ok": false
          }
        ],
        "okMsg": {
          "es": "Eso es. Actúas donde ocurrió el daño y además cuidas a la persona en privado, sin montar un espectáculo.",
          "en": "That is it. You act where the harm happened and care for the person privately, without making a show."
        },
        "noMsg": {
          "es": "Pregúntate: ¿esa acción protege a alguien, o solo te coloca a ti en buen lugar?",
          "en": "Ask yourself: does that action protect someone, or does it just make you look good?"
        }
      },
      {
        "type": "reflect",
        "kicker": {
          "es": "Paso 4 · Aplicación",
          "en": "Step 4 · Reflection"
        },
        "h": {
          "es": "Tu Acta de Valentía",
          "en": "Your Courage Record"
        },
        "body": {
          "es": "Una sola acción concreta, esta semana. Pequeña y real vale más que grande e imaginaria.",
          "en": "One concrete action this week. Small and real beats big and imaginary."
        },
        "prompt": {
          "es": "1. Lo que sabía que debía hacer: ___\n2. Lo que temía que pasara: ___\n3. Lo que hice: ___\n4. Lo que pasó de verdad: ___",
          "en": "1. What I knew I should do: ___\n2. What I feared: ___\n3. What I did: ___\n4. What actually happened: ___"
        }
      }
    ]
  },
  "presentaciones": {
    "id": "presentaciones",
    "tag": "core",
    "level": "seedling",
    "verseKey": "presentaciones",
    "status": "draft",
    "authoring": "ai_assisted",
    "title": {
      "es": "Hablar en Público sin Morir",
      "en": "Public Speaking Without Dying"
    },
    "project": {
      "es": "Tu <b>Charla de 3 Minutos</b> grabada: una idea, tres apoyos y un cierre que pide algo concreto.",
      "en": "Your recorded <b>3-Minute Talk</b>: one idea, three supports, and a closing that asks for something concrete."
    },
    "steps": [
      {
        "type": "hook",
        "kicker": {
          "es": "Paso 1 · Apertura",
          "en": "Step 1 · Hook"
        },
        "h": {
          "es": "Nadie recuerda tus nervios",
          "en": "Nobody remembers your nerves"
        },
        "scenario": {
          "es": "Te tiembla la voz, se te olvida una parte y piensas que ha sido un desastre. Al terminar, tres personas te dicen que les hizo pensar. Ninguna menciona el temblor.",
          "en": "Your voice shakes, you forget a part, you think it was a disaster. Afterwards three people say it made them think. None mention the shaking."
        },
        "body": {
          "es": "El público no ve tu interior: ve si entendió algo. Preparar una charla es ordenar una idea, no memorizar un texto.",
          "en": "The audience does not see your insides: it sees whether it understood something. Preparing a talk is ordering an idea, not memorizing a text."
        }
      },
      {
        "type": "theory",
        "kicker": {
          "es": "Paso 2 · Fundamento",
          "en": "Step 2 · Theory"
        },
        "h": {
          "es": "Una idea, tres apoyos, una petición",
          "en": "One idea, three supports, one ask"
        },
        "body": {
          "es": "1 Pedro 3:15 pide estar <b>preparados</b> para responder, con mansedumbre. Preparación no es improvisar con seguridad: es saber qué quieres que se lleve el que escucha.",
          "en": "1 Peter 3:15 asks us to be <b>prepared</b> to answer, with gentleness. Preparation is not confident improvising: it is knowing what you want the listener to take away."
        },
        "diagram": {
          "es": "<b>Estructura 1-3-1</b><br>1 idea en una frase · 3 apoyos (dato, historia, ejemplo) · 1 petición concreta al final.<br>Si no cabe en una frase, todavía no la tienes.",
          "en": "<b>1-3-1 structure</b><br>1 idea in one sentence · 3 supports (data, story, example) · 1 concrete ask.<br>If it does not fit in one sentence, you do not have it yet."
        }
      },
      {
        "type": "quiz",
        "kicker": {
          "es": "Paso 3 · Comprobación",
          "en": "Step 3 · Quiz"
        },
        "h": {
          "es": "¿Cuál es una idea, no un tema?",
          "en": "Which is an idea, not a topic?"
        },
        "q": {
          "es": "Vas a hablar tres minutos. ¿Cuál de estas frases es una idea que se puede defender?",
          "en": "You will speak for three minutes. Which of these is a defensible idea?"
        },
        "opts": [
          {
            "t": {
              "es": "\"El reciclaje.\"",
              "en": "\"Recycling.\""
            },
            "ok": false
          },
          {
            "t": {
              "es": "\"Voy a hablar sobre el medio ambiente.\"",
              "en": "\"I will talk about the environment.\""
            },
            "ok": false
          },
          {
            "t": {
              "es": "\"Separar la basura en casa cambia más que firmar peticiones online.\"",
              "en": "\"Sorting trash at home changes more than signing online petitions.\""
            },
            "ok": true
          },
          {
            "t": {
              "es": "\"El medio ambiente es muy importante para todos.\"",
              "en": "\"The environment is very important for everyone.\""
            },
            "ok": false
          }
        ],
        "okMsg": {
          "es": "Correcto. Se puede estar en desacuerdo con ella, y por eso merece tres minutos. Un tema no se defiende; una idea sí.",
          "en": "Correct. One can disagree with it, which is why it deserves three minutes. A topic cannot be defended; an idea can."
        },
        "noMsg": {
          "es": "Eso es un tema o una obviedad. Pregúntate: ¿alguien podría discutirme esto? Si no, no es una idea.",
          "en": "That is a topic or a truism. Ask: could anyone argue with this? If not, it is not an idea."
        }
      },
      {
        "type": "reflect",
        "kicker": {
          "es": "Paso 4 · Aplicación",
          "en": "Step 4 · Reflection"
        },
        "h": {
          "es": "Tu Charla de 3 Minutos",
          "en": "Your 3-Minute Talk"
        },
        "body": {
          "es": "Escribe la estructura, grábate con el móvil y vuelve a verte una vez. Solo una.",
          "en": "Write the structure, record on your phone, and watch yourself once. Only once."
        },
        "prompt": {
          "es": "1. Mi idea en UNA frase: ___\n2. Apoyo 1 (un dato): ___\n3. Apoyo 2 (una historia): ___\n4. Apoyo 3 (un ejemplo): ___\n5. Lo que pido al final: ___",
          "en": "1. My idea in ONE sentence: ___\n2. Support 1 (data): ___\n3. Support 2 (story): ___\n4. Support 3 (example): ___\n5. My closing ask: ___"
        }
      }
    ]
  },
  "carreras": {
    "id": "carreras",
    "tag": "core",
    "level": "explorer",
    "verseKey": "carreras",
    "status": "draft",
    "authoring": "ai_assisted",
    "title": {
      "es": "Explorar Carreras sin Humo",
      "en": "Exploring Careers Without the Hype"
    },
    "project": {
      "es": "Tu <b>Ficha de Tres Rutas</b>: tres profesiones reales con un día típico, lo que se estudia, lo que se cobra y qué parte no te gustaría.",
      "en": "Your <b>Three Routes Sheet</b>: three real professions with a typical day, required study, pay, and the part you would not enjoy."
    },
    "steps": [
      {
        "type": "hook",
        "kicker": {
          "es": "Paso 1 · Apertura",
          "en": "Step 1 · Hook"
        },
        "h": {
          "es": "El título no es el trabajo",
          "en": "The title is not the job"
        },
        "scenario": {
          "es": "\"Quiero ser diseñador.\" ¿Cuántas horas al día dibujarías? ¿Cuántas estarías corrigiendo lo mismo por tercera vez porque al cliente no le convence? La mayoría solo imagina la primera parte.",
          "en": "\"I want to be a designer.\" How many hours a day would you draw? How many revising the same thing a third time because the client is unconvinced? Most people picture only the first part."
        },
        "body": {
          "es": "Elegir carrera por el título es como elegir comida por la foto. Vas a investigar el <b>día real</b>, no la portada.",
          "en": "Choosing a career by its title is like choosing food by the photo. You will research the <b>real day</b>, not the cover."
        }
      },
      {
        "type": "theory",
        "kicker": {
          "es": "Paso 2 · Fundamento",
          "en": "Step 2 · Theory"
        },
        "h": {
          "es": "Fíate, pero investiga",
          "en": "Trust, and investigate"
        },
        "body": {
          "es": "Proverbios 3:5-6 pide no apoyarse en la propia prudencia — y reconocerle a Él en <b>todos</b> tus caminos, lo que incluye informarte bien. Confiar no es no mirar: es mirar sin miedo.",
          "en": "Proverbs 3:5-6 asks us not to lean on our own understanding — and to acknowledge Him in <b>all</b> our ways, which includes getting informed. Trusting is not refusing to look: it is looking without fear."
        },
        "diagram": {
          "es": "<b>Cuatro preguntas por ruta</b><br>1. ¿Cómo es un martes cualquiera? · 2. ¿Qué se estudia y cuánto dura? · 3. ¿De qué se vive? · 4. ¿Qué parte NO me gustaría?<br>La cuarta es la que más informa.",
          "en": "<b>Four questions per route</b><br>1. What is an ordinary Tuesday like? · 2. What study and how long? · 3. What is the income? · 4. What part would I dislike?<br>The fourth teaches the most."
        }
      },
      {
        "type": "quiz",
        "kicker": {
          "es": "Paso 3 · Comprobación",
          "en": "Step 3 · Quiz"
        },
        "h": {
          "es": "¿Qué fuente informa mejor?",
          "en": "Which source informs best?"
        },
        "q": {
          "es": "Quieres saber cómo es de verdad ser enfermero. ¿Qué fuente te da la información más fiable?",
          "en": "You want to know what being a nurse is really like. Which source is most reliable?"
        },
        "opts": [
          {
            "t": {
              "es": "Una serie de televisión ambientada en un hospital.",
              "en": "A TV series set in a hospital."
            },
            "ok": false
          },
          {
            "t": {
              "es": "Media hora de preguntas a un enfermero con 5 años de ejercicio.",
              "en": "Half an hour of questions with a nurse of 5 years."
            },
            "ok": true
          },
          {
            "t": {
              "es": "La página de marketing de una universidad privada.",
              "en": "A private university marketing page."
            },
            "ok": false
          },
          {
            "t": {
              "es": "Un vídeo de \"un día en mi vida\" con 2 millones de visitas.",
              "en": "A \"day in my life\" video with 2 million views."
            },
            "ok": false
          }
        ],
        "okMsg": {
          "es": "Sí. Quien lo vive a diario te contará los turnos, el papeleo y lo que nadie graba. Las otras fuentes venden algo.",
          "en": "Yes. Someone living it daily will tell you about shifts, paperwork, and what nobody films. The others are selling something."
        },
        "noMsg": {
          "es": "Fíjate en quién gana algo si tú eliges esa carrera. Esa fuente no es neutral.",
          "en": "Notice who gains if you choose that career. That source is not neutral."
        }
      },
      {
        "type": "reflect",
        "kicker": {
          "es": "Paso 4 · Aplicación",
          "en": "Step 4 · Reflection"
        },
        "h": {
          "es": "Tu Ficha de Tres Rutas",
          "en": "Your Three Routes Sheet"
        },
        "body": {
          "es": "Tres profesiones distintas entre sí. Al menos una debe ser alguna en la que no habías pensado.",
          "en": "Three professions different from each other. At least one you had not considered."
        },
        "prompt": {
          "es": "Ruta 1: ___\n  Martes normal: ___\n  Se estudia: ___\n  Se vive de: ___\n  Lo que NO me gustaría: ___\n\n(Repite para Ruta 2 y Ruta 3)\n\nCon quién hablé y qué me sorprendió: ___",
          "en": "Route 1: ___\n  Ordinary Tuesday: ___\n  Study: ___\n  Income: ___\n  What I would dislike: ___\n\n(Repeat for Routes 2 and 3)\n\nWho I spoke with and what surprised me: ___"
        }
      }
    ]
  },
  "ganarAmigos": {
    "id": "ganarAmigos",
    "tag": "core",
    "level": "explorer",
    "verseKey": "ganarAmigos",
    "bookKey": "ganarAmigos",
    "status": "draft",
    "authoring": "ai_assisted",
    "title": {
      "es": "Interés Real por el Otro",
      "en": "Real Interest in Others"
    },
    "project": {
      "es": "Tu <b>Experimento de Escucha</b>: tres conversaciones en las que solo preguntas, con lo que aprendiste de cada persona.",
      "en": "Your <b>Listening Experiment</b>: three conversations where you only ask questions, plus what you learned about each person."
    },
    "steps": [
      {
        "type": "hook",
        "kicker": {
          "es": "Paso 1 · Apertura",
          "en": "Step 1 · Hook"
        },
        "h": {
          "es": "Caer bien no es una técnica",
          "en": "Being liked is not a technique"
        },
        "scenario": {
          "es": "Sales de una conversación pensando \"qué majo es\". Repasa: ¿cuánto habló él de sí mismo? Probablemente poco. Te preguntó a ti.",
          "en": "You leave a conversation thinking \"what a great guy\". Look back: how much did he talk about himself? Probably little. He asked about you."
        },
        "body": {
          "es": "Dale Carnegie lo resumió así: se hacen más amigos en dos meses interesándose por otros que en dos años intentando que se interesen por ti.",
          "en": "Dale Carnegie put it this way: you make more friends in two months by becoming interested in others than in two years trying to get them interested in you."
        }
      },
      {
        "type": "theory",
        "kicker": {
          "es": "Paso 2 · Fundamento",
          "en": "Step 2 · Theory"
        },
        "h": {
          "es": "Estimar al otro como superior",
          "en": "Esteeming others as better"
        },
        "body": {
          "es": "Filipenses 2:3-4 no pide fingir humildad: pide <b>mirar</b> lo del otro de verdad. La diferencia entre manipular y amar es qué buscas al final: que te compren algo, o que la persona esté mejor.",
          "en": "Philippians 2:3-4 does not ask for fake humility: it asks us to genuinely <b>look</b> at others. The difference between manipulating and loving is the end goal: selling something, or leaving the person better."
        },
        "diagram": {
          "es": "<b>Técnica vs. carácter</b><br>Técnica: recuerdo tu nombre para venderte algo.<br>Carácter: recuerdo tu nombre porque me importas.<br>Se hace lo mismo. No es lo mismo.",
          "en": "<b>Technique vs. character</b><br>Technique: I remember your name to sell you something.<br>Character: I remember your name because you matter.<br>Same action. Not the same thing."
        }
      },
      {
        "type": "quiz",
        "kicker": {
          "es": "Paso 3 · Comprobación",
          "en": "Step 3 · Quiz"
        },
        "h": {
          "es": "¿Qué pregunta abre de verdad?",
          "en": "Which question really opens up?"
        },
        "q": {
          "es": "Quieres conocer mejor a alguien nuevo en clase. ¿Qué pregunta abre más conversación?",
          "en": "You want to get to know someone new in class. Which question opens the most?"
        },
        "opts": [
          {
            "t": {
              "es": "\"¿Te gusta el instituto?\"",
              "en": "\"Do you like school?\""
            },
            "ok": false
          },
          {
            "t": {
              "es": "\"¿De dónde eres?\"",
              "en": "\"Where are you from?\""
            },
            "ok": false
          },
          {
            "t": {
              "es": "\"¿Qué es lo que más echas de menos de donde vivías antes?\"",
              "en": "\"What do you miss most about where you lived before?\""
            },
            "ok": true
          },
          {
            "t": {
              "es": "\"¿Has visto la serie que ve todo el mundo?\"",
              "en": "\"Have you seen the show everyone watches?\""
            },
            "ok": false
          }
        ],
        "okMsg": {
          "es": "Exacto. Es abierta, es personal y demuestra que ya escuchaste algo antes de preguntar. Las de sí/no cierran.",
          "en": "Exactly. It is open, personal, and shows you already listened before asking. Yes/no questions close."
        },
        "noMsg": {
          "es": "Esa se responde en una palabra. Busca preguntas que no se puedan contestar con sí o no.",
          "en": "That one is answered in a word. Look for questions that cannot be answered yes or no."
        }
      },
      {
        "type": "reflect",
        "kicker": {
          "es": "Paso 4 · Aplicación",
          "en": "Step 4 · Reflection"
        },
        "h": {
          "es": "Tu Experimento de Escucha",
          "en": "Your Listening Experiment"
        },
        "body": {
          "es": "Tres conversaciones. Regla única: no hablas de ti salvo que te pregunten. Cuesta más de lo que parece.",
          "en": "Three conversations. One rule: do not talk about yourself unless asked. Harder than it sounds."
        },
        "prompt": {
          "es": "Persona 1 (sin nombres, usa iniciales): ___\n  Lo que aprendí de ella: ___\n  Cuántas veces desvié la conversación hacia mí: ___\n\n(Repite para 2 y 3)\n\nQué me costó más: ___",
          "en": "Person 1 (initials only): ___\n  What I learned: ___\n  Times I steered it back to me: ___\n\n(Repeat for 2 and 3)\n\nHardest part: ___"
        }
      }
    ]
  },
  "encuestas": {
    "id": "encuestas",
    "tag": "core",
    "level": "explorer",
    "verseKey": "encuestas",
    "status": "draft",
    "authoring": "ai_assisted",
    "title": {
      "es": "Preguntar para Saber, no para Confirmar",
      "en": "Asking to Learn, Not to Confirm"
    },
    "project": {
      "es": "Tu <b>Miniencuesta</b> de 5 preguntas a 10 personas, con los resultados y una conclusión que te sorprendió.",
      "en": "Your 5-question <b>Mini-Survey</b> of 10 people, with results and one conclusion that surprised you."
    },
    "steps": [
      {
        "type": "hook",
        "kicker": {
          "es": "Paso 1 · Apertura",
          "en": "Step 1 · Hook"
        },
        "h": {
          "es": "La pregunta ya trae la respuesta",
          "en": "The question already carries the answer"
        },
        "scenario": {
          "es": "\"¿No te parece injusto que nos manden tantos deberes?\" Casi todos dirán que sí. Ahora prueba: \"¿Cuánto tiempo dedicaste ayer a deberes?\" Las respuestas cambian del todo.",
          "en": "\"Don't you think all this homework is unfair?\" Almost everyone says yes. Now try: \"How long did you spend on homework yesterday?\" The answers change completely."
        },
        "body": {
          "es": "Una encuesta mal hecha no mide la realidad: mide lo que tú ya creías. Vas a aprender a preguntar sin empujar.",
          "en": "A badly built survey does not measure reality: it measures what you already believed. You will learn to ask without pushing."
        }
      },
      {
        "type": "theory",
        "kicker": {
          "es": "Paso 2 · Fundamento",
          "en": "Step 2 · Theory"
        },
        "h": {
          "es": "El oído del sabio busca ciencia",
          "en": "The ear of the wise seeks knowledge"
        },
        "body": {
          "es": "Proverbios 18:15 habla de <b>buscar</b>, no de confirmar. Una pregunta honesta es aquella cuya respuesta podría hacerte cambiar de opinión. Si ninguna respuesta te haría cambiar, no estás preguntando.",
          "en": "Proverbs 18:15 speaks of <b>seeking</b>, not confirming. An honest question is one whose answer could change your mind. If no answer would change it, you are not really asking."
        },
        "diagram": {
          "es": "<b>Tres trampas</b><br>Sesgada: \"¿No crees que…?\" · Doble: dos preguntas en una · Vaga: \"¿usas mucho el móvil?\" (¿cuánto es mucho?)<br>Arreglo: pide hechos, no opiniones sobre hechos.",
          "en": "<b>Three traps</b><br>Leading: \"Don't you think…?\" · Double-barrelled: two questions in one · Vague: \"do you use your phone a lot?\"<br>Fix: ask for facts, not opinions about facts."
        }
      },
      {
        "type": "quiz",
        "kicker": {
          "es": "Paso 3 · Comprobación",
          "en": "Step 3 · Quiz"
        },
        "h": {
          "es": "¿Cuál es una pregunta limpia?",
          "en": "Which is a clean question?"
        },
        "q": {
          "es": "Quieres saber si tus compañeros duermen poco. ¿Qué pregunta te da el dato más fiable?",
          "en": "You want to know if classmates sleep too little. Which question gives the most reliable data?"
        },
        "opts": [
          {
            "t": {
              "es": "\"¿Verdad que todos dormimos poquísimo?\"",
              "en": "\"We all sleep way too little, right?\""
            },
            "ok": false
          },
          {
            "t": {
              "es": "\"¿Duermes mal y estás cansado en clase?\"",
              "en": "\"Do you sleep badly and feel tired in class?\""
            },
            "ok": false
          },
          {
            "t": {
              "es": "\"¿A qué hora te dormiste anoche y a qué hora te levantaste?\"",
              "en": "\"What time did you fall asleep last night and what time did you wake up?\""
            },
            "ok": true
          },
          {
            "t": {
              "es": "\"¿Crees que los jóvenes de hoy duermen poco?\"",
              "en": "\"Do you think young people today sleep too little?\""
            },
            "ok": false
          }
        ],
        "okMsg": {
          "es": "Correcto. Pide un hecho concreto y comprobable, sin insinuar qué respuesta esperas. De ahí sale un número real.",
          "en": "Correct. It asks for a concrete, checkable fact without hinting at the expected answer. That yields a real number."
        },
        "noMsg": {
          "es": "Esa pregunta ya sugiere la respuesta, mezcla dos cosas, o pide una opinión general en vez de un dato propio.",
          "en": "That question suggests the answer, mixes two things, or asks for a general opinion instead of personal data."
        }
      },
      {
        "type": "reflect",
        "kicker": {
          "es": "Paso 4 · Aplicación",
          "en": "Step 4 · Reflection"
        },
        "h": {
          "es": "Tu Miniencuesta",
          "en": "Your Mini-Survey"
        },
        "body": {
          "es": "Cinco preguntas, diez personas. Sin nombres: los datos se guardan en agregado.",
          "en": "Five questions, ten people. No names: data is kept in aggregate."
        },
        "prompt": {
          "es": "1. Lo que quiero averiguar: ___\n2. Mis 5 preguntas: ___\n3. Lo que yo creía antes de empezar: ___\n4. Lo que dijeron los datos: ___\n5. En qué me equivocaba: ___",
          "en": "1. What I want to find out: ___\n2. My 5 questions: ___\n3. What I believed beforehand: ___\n4. What the data said: ___\n5. Where I was wrong: ___"
        }
      }
    ]
  },
  "ideaNegocio": {
    "id": "ideaNegocio",
    "tag": "money",
    "level": "explorer",
    "verseKey": "ideaNegocio",
    "status": "draft",
    "authoring": "ai_assisted",
    "title": {
      "es": "De Queja a Idea de Negocio",
      "en": "From Complaint to Business Idea"
    },
    "project": {
      "es": "Tu <b>Ficha de Idea</b>: un problema real que sufre gente concreta, tu solución y por qué pagarían por ella.",
      "en": "Your <b>Idea Sheet</b>: a real problem suffered by concrete people, your solution, and why they would pay for it."
    },
    "steps": [
      {
        "type": "hook",
        "kicker": {
          "es": "Paso 1 · Apertura",
          "en": "Step 1 · Hook"
        },
        "h": {
          "es": "Las buenas ideas empiezan como quejas",
          "en": "Good ideas start as complaints"
        },
        "scenario": {
          "es": "\"Qué rabia que la fuente del patio esté siempre rota.\" Eso es una queja. Ahora: ¿cuánta gente la sufre cada día? ¿Qué hacen mientras tanto? ¿Cuánto les cuesta? Ahí empieza una idea.",
          "en": "\"So annoying that the courtyard fountain is always broken.\" That is a complaint. Now: how many suffer it daily? What do they do meanwhile? What does it cost them? There an idea begins."
        },
        "body": {
          "es": "No vas a \"buscar una idea genial\". Vas a buscar un <b>problema que ya existe</b> y a quién le duele.",
          "en": "You are not going to \"find a brilliant idea\". You are going to find a <b>problem that already exists</b> and who it hurts."
        }
      },
      {
        "type": "theory",
        "kicker": {
          "es": "Paso 2 · Fundamento",
          "en": "Step 2 · Theory"
        },
        "h": {
          "es": "Con sabiduría se edifica la casa",
          "en": "By wisdom a house is built"
        },
        "body": {
          "es": "Proverbios 24:3-4 pone el orden: sabiduría, prudencia, ciencia. Primero entender, después construir. Al revés se llama \"tener una idea buenísima\" y suele acabar en nada.",
          "en": "Proverbs 24:3-4 sets the order: wisdom, understanding, knowledge. First understand, then build. The reverse is called \"having a brilliant idea\" and usually ends in nothing."
        },
        "diagram": {
          "es": "<b>Prueba de las tres preguntas</b><br>1. ¿Quién exactamente lo sufre? (si es \"todo el mundo\", no lo sabes)<br>2. ¿Qué hace hoy sin ti?<br>3. ¿Pagaría, o solo diría que le parece útil?",
          "en": "<b>Three-question test</b><br>1. Who exactly suffers it? (if \"everyone\", you do not know)<br>2. What do they do today without you?<br>3. Would they pay, or just say it sounds useful?"
        }
      },
      {
        "type": "quiz",
        "kicker": {
          "es": "Paso 3 · Comprobación",
          "en": "Step 3 · Quiz"
        },
        "h": {
          "es": "¿Cuál es una idea con base?",
          "en": "Which idea has a foundation?"
        },
        "q": {
          "es": "¿Cuál de estas ideas está mejor fundamentada?",
          "en": "Which of these ideas is best grounded?"
        },
        "opts": [
          {
            "t": {
              "es": "\"Una app para todo el mundo que haga la vida más fácil.\"",
              "en": "\"An app for everyone that makes life easier.\""
            },
            "ok": false
          },
          {
            "t": {
              "es": "\"Los 40 alumnos que vienen en bus llegan sin desayunar; vender bocadillos preparados a las 7:50.\"",
              "en": "\"The 40 students arriving by bus have not had breakfast; sell prepared sandwiches at 7:50.\""
            },
            "ok": true
          },
          {
            "t": {
              "es": "\"Una red social mejor que las que ya existen.\"",
              "en": "\"A social network better than existing ones.\""
            },
            "ok": false
          },
          {
            "t": {
              "es": "\"Algo con inteligencia artificial, que ahora se lleva mucho.\"",
              "en": "\"Something with AI, since it is trending.\""
            },
            "ok": false
          }
        ],
        "okMsg": {
          "es": "Exacto. Sabes cuántos son, dónde están, cuándo les pasa y qué hacen ahora. Eso se puede probar la semana que viene.",
          "en": "Exactly. You know how many, where, when it happens, and what they do now. That can be tested next week."
        },
        "noMsg": {
          "es": "Demasiado ancha. Si no puedes nombrar a diez personas concretas que lo sufran, todavía no tienes una idea.",
          "en": "Too broad. If you cannot name ten concrete people who suffer it, you do not have an idea yet."
        }
      },
      {
        "type": "reflect",
        "kicker": {
          "es": "Paso 4 · Aplicación",
          "en": "Step 4 · Reflection"
        },
        "h": {
          "es": "Tu Ficha de Idea",
          "en": "Your Idea Sheet"
        },
        "body": {
          "es": "Parte de una queja que hayas oído esta semana. Real, no inventada.",
          "en": "Start from a complaint you actually heard this week. Real, not invented."
        },
        "prompt": {
          "es": "1. La queja que oí: ___\n2. Quién exactamente la sufre (número aproximado): ___\n3. Qué hacen hoy para apañarse: ___\n4. Mi solución: ___\n5. Por qué pagarían: ___\n6. Cómo lo probaría con 5 € y una semana: ___",
          "en": "1. The complaint I heard: ___\n2. Who exactly suffers it (rough number): ___\n3. What they do today: ___\n4. My solution: ___\n5. Why they would pay: ___\n6. How I would test it with 5 € and one week: ___"
        }
      }
    ]
  },
  "trabajoEquipo": {
    "id": "trabajoEquipo",
    "tag": "leadership",
    "level": "explorer",
    "verseKey": "trabajoEquipo",
    "status": "draft",
    "authoring": "ai_assisted",
    "title": {
      "es": "Equipo no es Repartirse el Trabajo",
      "en": "A Team Is Not Just Splitting Work"
    },
    "project": {
      "es": "Tu <b>Acta de Equipo</b>: roles, acuerdos y qué pasa si alguien falla, firmada por todos antes de empezar.",
      "en": "Your <b>Team Charter</b>: roles, agreements, and what happens if someone fails, signed by all before starting."
    },
    "steps": [
      {
        "type": "hook",
        "kicker": {
          "es": "Paso 1 · Apertura",
          "en": "Step 1 · Hook"
        },
        "h": {
          "es": "El trabajo en grupo que acabas haciendo tú",
          "en": "The group project you end up doing alone"
        },
        "scenario": {
          "es": "Cinco personas, un trabajo. Dos hacen todo, uno aparece el último día y dos no contestan. Todos sacan la misma nota. Ya lo has vivido.",
          "en": "Five people, one project. Two do everything, one shows up on the last day, two never reply. All get the same grade. You have lived this."
        },
        "body": {
          "es": "El problema casi nunca es la gente: es que nadie acordó nada al principio. Vas a aprender a abrir un equipo, no a sobrevivirlo.",
          "en": "The problem is rarely the people: nobody agreed anything at the start. You will learn to open a team, not survive one."
        }
      },
      {
        "type": "theory",
        "kicker": {
          "es": "Paso 2 · Fundamento",
          "en": "Step 2 · Theory"
        },
        "h": {
          "es": "Mejores son dos que uno",
          "en": "Two are better than one"
        },
        "body": {
          "es": "Eclesiastés 4:9-10 da la razón concreta: <b>si uno cae, el otro lo levanta</b>. Un equipo real no es dividir tareas: es cubrirse. Y eso solo funciona si se pactó antes de que alguien caiga.",
          "en": "Ecclesiastes 4:9-10 gives the concrete reason: <b>if one falls, the other lifts him</b>. A real team is not dividing tasks: it is covering each other. That only works if agreed before anyone falls."
        },
        "diagram": {
          "es": "<b>Acta de equipo, 4 puntos</b><br>1. Quién hace qué (con nombre)<br>2. Para cuándo<br>3. Dónde se avisa si algo se tuerce<br>4. Qué hacemos si alguien no entrega<br>Se firma ANTES.",
          "en": "<b>Team charter, 4 points</b><br>1. Who does what (by name)<br>2. By when<br>3. Where to flag trouble<br>4. What we do if someone misses<br>Signed BEFORE."
        }
      },
      {
        "type": "quiz",
        "kicker": {
          "es": "Paso 3 · Comprobación",
          "en": "Step 3 · Quiz"
        },
        "h": {
          "es": "Alguien no ha entregado",
          "en": "Someone has not delivered"
        },
        "q": {
          "es": "Faltan dos días y un miembro no ha hecho su parte ni contesta. ¿Cuál es la mejor primera acción?",
          "en": "Two days left and a member has not done their part nor replied. What is the best first action?"
        },
        "opts": [
          {
            "t": {
              "es": "Hacer tú su parte y decírselo al profesor al final.",
              "en": "Do their part yourself and tell the teacher at the end."
            },
            "ok": false
          },
          {
            "t": {
              "es": "Escribirle a solas recordando el acuerdo y preguntando qué le pasa y qué puede entregar hoy.",
              "en": "Message them privately recalling the agreement, asking what is wrong and what they can deliver today."
            },
            "ok": true
          },
          {
            "t": {
              "es": "Escribir en el grupo que no ha hecho nada para que todos lo vean.",
              "en": "Post in the group chat that they have done nothing, so everyone sees."
            },
            "ok": false
          },
          {
            "t": {
              "es": "Quitarle su parte y repartirla sin avisarle.",
              "en": "Remove their part and redistribute without telling them."
            },
            "ok": false
          }
        ],
        "okMsg": {
          "es": "Eso es. Recuerdas lo pactado, dejas la puerta abierta y pides algo concreto y posible hoy. Si tras eso no responde, ya hay base para escalar.",
          "en": "That is it. You recall the agreement, leave the door open, and ask for something concrete and doable today. If they still do not respond, there is now a basis to escalate."
        },
        "noMsg": {
          "es": "Eso protege la nota pero rompe el equipo. Primero se habla a solas; señalar en público o tapar el problema no arregla ninguno de los dos.",
          "en": "That protects the grade but breaks the team. Speak privately first; public shaming or silently covering fixes neither."
        }
      },
      {
        "type": "reflect",
        "kicker": {
          "es": "Paso 4 · Aplicación",
          "en": "Step 4 · Reflection"
        },
        "h": {
          "es": "Tu Acta de Equipo",
          "en": "Your Team Charter"
        },
        "body": {
          "es": "Úsala en tu próximo trabajo en grupo, de verdad. Cinco minutos al principio ahorran la semana entera.",
          "en": "Use it on your next group project, for real. Five minutes at the start saves the whole week."
        },
        "prompt": {
          "es": "1. Quién hace qué: ___\n2. Fechas de cada parte: ___\n3. Dónde avisamos si algo se tuerce: ___\n4. Qué hacemos si alguien no entrega: ___\n5. Cómo fue de verdad: ___",
          "en": "1. Who does what: ___\n2. Dates per part: ___\n3. Where we flag trouble: ___\n4. What if someone misses: ___\n5. How it actually went: ___"
        }
      }
    ]
  },
  "contabilidad": {
    "id": "contabilidad",
    "tag": "money",
    "level": "builder",
    "verseKey": "contabilidad",
    "bookKey": "padreRico",
    "status": "draft",
    "authoring": "ai_assisted",
    "title": {
      "es": "Calcular Antes de Construir",
      "en": "Counting the Cost Before Building"
    },
    "project": {
      "es": "Tu <b>Cuenta de Resultados</b> de un proyecto real: ingresos, costes fijos, costes variables y a partir de cuántas unidades ganas dinero.",
      "en": "Your project <b>Income Statement</b>: revenue, fixed costs, variable costs, and the break-even point."
    },
    "steps": [
      {
        "type": "hook",
        "kicker": {
          "es": "Paso 1 · Apertura",
          "en": "Step 1 · Hook"
        },
        "h": {
          "es": "Vendiste 100 y perdiste dinero",
          "en": "You sold 100 and lost money"
        },
        "scenario": {
          "es": "Vendes pulseras a 3 €. Te costaron 1,20 € cada una. \"Gano 1,80\". Pero el hilo lo compraste en packs, pagaste 15 € de envío y la mesa del mercadillo costó 20 €. ¿Sigues ganando?",
          "en": "You sell bracelets at 3 €. Each cost 1.20 €. \"I make 1.80\". But thread came in packs, shipping was 15 €, and the market stall cost 20 €. Still profitable?"
        },
        "body": {
          "es": "La diferencia entre precio y coste no es beneficio. Vas a aprender a ver el dinero completo, no solo el que pasa por tus manos.",
          "en": "The gap between price and cost is not profit. You will learn to see the whole money picture, not just what passes through your hands."
        }
      },
      {
        "type": "theory",
        "kicker": {
          "es": "Paso 2 · Fundamento",
          "en": "Step 2 · Theory"
        },
        "h": {
          "es": "Sentarse primero y calcular",
          "en": "Sit down first and count"
        },
        "body": {
          "es": "Lucas 14:28 es literalmente contabilidad: antes de edificar, <b>calcula si tienes con qué acabar</b>. Fijo es lo que pagas aunque no vendas nada. Variable es lo que solo pagas si vendes.",
          "en": "Luke 14:28 is literally accounting: before building, <b>count whether you can finish</b>. Fixed is what you pay even selling nothing. Variable is what you pay only when you sell."
        },
        "diagram": {
          "es": "<b>Punto de equilibrio</b><br>Unidades = Costes fijos ÷ (Precio − Coste variable)<br>Ejemplo: 35 € fijos ÷ (3 € − 1,20 €) = 20 pulseras.<br>Hasta la 20 no ganas nada: las recuperas.",
          "en": "<b>Break-even</b><br>Units = Fixed costs ÷ (Price − Variable cost)<br>Example: 35 € ÷ (3 € − 1.20 €) = 20 bracelets.<br>Until unit 20 you earn nothing: you recover."
        }
      },
      {
        "type": "quiz",
        "kicker": {
          "es": "Paso 3 · Comprobación",
          "en": "Step 3 · Quiz"
        },
        "h": {
          "es": "Calcula el equilibrio",
          "en": "Compute break-even"
        },
        "q": {
          "es": "Vendes limonada a 2 € el vaso. Los ingredientes cuestan 0,50 € por vaso. Alquilar el puesto cuesta 30 € el día. ¿Cuántos vasos necesitas para empezar a ganar?",
          "en": "You sell lemonade at 2 € a cup. Ingredients cost 0.50 € per cup. The stand costs 30 € for the day. How many cups to start profiting?"
        },
        "opts": [
          {
            "t": {
              "es": "15 vasos",
              "en": "15 cups"
            },
            "ok": false
          },
          {
            "t": {
              "es": "20 vasos",
              "en": "20 cups"
            },
            "ok": true
          },
          {
            "t": {
              "es": "30 vasos",
              "en": "30 cups"
            },
            "ok": false
          },
          {
            "t": {
              "es": "60 vasos",
              "en": "60 cups"
            },
            "ok": false
          }
        ],
        "okMsg": {
          "es": "Correcto: 30 ÷ (2 − 0,50) = 30 ÷ 1,50 = 20 vasos. Del 21 en adelante ganas 1,50 € por vaso.",
          "en": "Correct: 30 ÷ (2 − 0.50) = 20 cups. From cup 21 you earn 1.50 € each."
        },
        "noMsg": {
          "es": "Recuerda: primero el margen por unidad (precio − coste variable), y luego divide los costes fijos entre ese margen.",
          "en": "Remember: first the margin per unit (price − variable cost), then divide fixed costs by that margin."
        }
      },
      {
        "type": "reflect",
        "kicker": {
          "es": "Paso 4 · Aplicación",
          "en": "Step 4 · Reflection"
        },
        "h": {
          "es": "Tu Cuenta de Resultados",
          "en": "Your Income Statement"
        },
        "body": {
          "es": "Sobre un proyecto real tuyo, o el de tu trimestre. Con números que puedas defender.",
          "en": "On a real project of yours, or your quarterly one. With numbers you can defend."
        },
        "prompt": {
          "es": "1. Qué vendo y a qué precio: ___\n2. Coste variable por unidad: ___\n3. Costes fijos totales: ___\n4. Punto de equilibrio (unidades): ___\n5. ¿Es alcanzable de verdad? ¿Por qué?: ___",
          "en": "1. What I sell and at what price: ___\n2. Variable cost per unit: ___\n3. Total fixed costs: ___\n4. Break-even (units): ___\n5. Is it realistically reachable? Why?: ___"
        }
      }
    ]
  },
  "planNegocio": {
    "id": "planNegocio",
    "tag": "money",
    "level": "builder",
    "verseKey": "planNegocio",
    "status": "draft",
    "authoring": "ai_assisted",
    "title": {
      "es": "Plan de Negocio en Una Página",
      "en": "One-Page Business Plan"
    },
    "project": {
      "es": "Tu <b>Plan de Una Página</b>: problema, cliente, solución, precio, costes, primer paso y cómo sabrás si va bien.",
      "en": "Your <b>One-Page Plan</b>: problem, customer, solution, price, costs, first step, and how you will know it works."
    },
    "steps": [
      {
        "type": "hook",
        "kicker": {
          "es": "Paso 1 · Apertura",
          "en": "Step 1 · Hook"
        },
        "h": {
          "es": "Un plan de 40 páginas que nadie lee",
          "en": "A 40-page plan nobody reads"
        },
        "scenario": {
          "es": "Hay quien pasa tres meses escribiendo un plan precioso y cero días hablando con un cliente. El plan queda impecable. El negocio no existe.",
          "en": "Some spend three months writing a beautiful plan and zero days talking to a customer. The plan is immaculate. The business does not exist."
        },
        "body": {
          "es": "Un plan sirve para <b>pensar y decidir</b>, no para impresionar. Si no cabe en una página, aún no está claro.",
          "en": "A plan exists to <b>think and decide</b>, not to impress. If it does not fit on one page, it is not clear yet."
        }
      },
      {
        "type": "theory",
        "kicker": {
          "es": "Paso 2 · Fundamento",
          "en": "Step 2 · Theory"
        },
        "h": {
          "es": "Encomienda tus obras y serán afirmados tus pensamientos",
          "en": "Commit your works and your plans will be established"
        },
        "body": {
          "es": "Proverbios 16:3 pone el orden al revés de lo que esperamos: primero encomiendas la <b>obra</b>, después se afirman los pensamientos. Se piensa mejor haciendo que planificando en abstracto.",
          "en": "Proverbs 16:3 reverses the expected order: first commit the <b>work</b>, then thoughts are established. You think better by doing than by planning in the abstract."
        },
        "diagram": {
          "es": "<b>Las 7 casillas</b><br>Problema · Cliente concreto · Solución · Precio · Costes · Primer paso esta semana · Señal de que funciona.<br>Una frase por casilla. Ni una más.",
          "en": "<b>The 7 boxes</b><br>Problem · Concrete customer · Solution · Price · Costs · First step this week · Signal it works.<br>One sentence each. No more."
        }
      },
      {
        "type": "quiz",
        "kicker": {
          "es": "Paso 3 · Comprobación",
          "en": "Step 3 · Quiz"
        },
        "h": {
          "es": "¿Qué señal sirve?",
          "en": "Which signal counts?"
        },
        "q": {
          "es": "Tu plan necesita una \"señal de que funciona\" para las dos primeras semanas. ¿Cuál es una señal útil?",
          "en": "Your plan needs a \"signal it works\" for the first two weeks. Which is useful?"
        },
        "opts": [
          {
            "t": {
              "es": "Que a mi familia le parezca buena idea.",
              "en": "My family thinks it is a good idea."
            },
            "ok": false
          },
          {
            "t": {
              "es": "Tener 200 seguidores en la cuenta nueva.",
              "en": "200 followers on the new account."
            },
            "ok": false
          },
          {
            "t": {
              "es": "Que 5 personas que no conozco paguen antes de que exista el producto final.",
              "en": "5 strangers pay before the final product exists."
            },
            "ok": true
          },
          {
            "t": {
              "es": "Terminar el logotipo y las tarjetas.",
              "en": "Finish the logo and business cards."
            },
            "ok": false
          }
        ],
        "okMsg": {
          "es": "Exacto. Pagar es la única señal que no miente. Los elogios, los seguidores y el logo no son demanda.",
          "en": "Exactly. Paying is the only signal that does not lie. Praise, followers, and logos are not demand."
        },
        "noMsg": {
          "es": "Eso mide ánimo o actividad tuya, no demanda real. Pregúntate qué señal implicaría que alguien renuncia a algo por ti.",
          "en": "That measures encouragement or your own activity, not real demand. Ask what signal means someone gives something up for you."
        }
      },
      {
        "type": "reflect",
        "kicker": {
          "es": "Paso 4 · Aplicación",
          "en": "Step 4 · Reflection"
        },
        "h": {
          "es": "Tu Plan de Una Página",
          "en": "Your One-Page Plan"
        },
        "body": {
          "es": "Una frase por casilla. Si necesitas dos, es que aún no lo tienes claro.",
          "en": "One sentence per box. If you need two, it is not clear yet."
        },
        "prompt": {
          "es": "1. Problema: ___\n2. Cliente concreto: ___\n3. Solución: ___\n4. Precio: ___\n5. Costes: ___\n6. Primer paso esta semana: ___\n7. Señal de que funciona: ___",
          "en": "1. Problem: ___\n2. Concrete customer: ___\n3. Solution: ___\n4. Price: ___\n5. Costs: ___\n6. First step this week: ___\n7. Signal it works: ___"
        }
      }
    ]
  },
  "construirWeb": {
    "id": "construirWeb",
    "tag": "core",
    "level": "builder",
    "verseKey": "construirWeb",
    "status": "draft",
    "authoring": "ai_assisted",
    "title": {
      "es": "Tu Presencia Digital con Criterio",
      "en": "Your Digital Presence, Done Right"
    },
    "project": {
      "es": "Tu <b>Página Personal</b> publicada: quién eres, qué sabes hacer, tres pruebas y cómo contactarte.",
      "en": "Your published <b>Personal Page</b>: who you are, what you can do, three proofs, and how to reach you."
    },
    "steps": [
      {
        "type": "hook",
        "kicker": {
          "es": "Paso 1 · Apertura",
          "en": "Step 1 · Hook"
        },
        "h": {
          "es": "Ya tienes presencia digital",
          "en": "You already have a digital presence"
        },
        "scenario": {
          "es": "Alguien escribe tu nombre en un buscador antes de una entrevista o una beca. Algo va a salir. La pregunta no es si tienes presencia digital: es si la elegiste tú.",
          "en": "Someone types your name before an interview or scholarship. Something will appear. The question is not whether you have a digital presence: it is whether you chose it."
        },
        "body": {
          "es": "Vas a construir un sitio propio, sencillo y honesto, que muestre lo que sabes hacer con pruebas.",
          "en": "You will build your own simple, honest site showing what you can do, with proof."
        }
      },
      {
        "type": "theory",
        "kicker": {
          "es": "Paso 2 · Fundamento",
          "en": "Step 2 · Theory"
        },
        "h": {
          "es": "Como para el Señor, no para los hombres",
          "en": "As for the Lord, not for men"
        },
        "body": {
          "es": "Colosenses 3:23-24 cambia el criterio: no publicas para impresionar, publicas porque el trabajo bien hecho se muestra bien hecho. Eso descarta inflar y descarta esconderse.",
          "en": "Colossians 3:23-24 changes the criterion: you do not publish to impress, you publish because good work deserves to be shown well. That rules out inflating and rules out hiding."
        },
        "diagram": {
          "es": "<b>Cuatro bloques, nada más</b><br>1. Quién eres (2 líneas)<br>2. Qué sabes hacer (lista corta)<br>3. Tres pruebas (proyecto, foto, enlace)<br>4. Cómo contactarte<br>Sin datos privados: ni dirección, ni teléfono, ni centro exacto.",
          "en": "<b>Four blocks, nothing more</b><br>1. Who you are (2 lines)<br>2. What you can do<br>3. Three proofs<br>4. How to reach you<br>No private data: no address, phone, or exact school."
        }
      },
      {
        "type": "quiz",
        "kicker": {
          "es": "Paso 3 · Comprobación",
          "en": "Step 3 · Quiz"
        },
        "h": {
          "es": "¿Qué NO va en tu página?",
          "en": "What does NOT belong on your page?"
        },
        "q": {
          "es": "Estás montando tu página personal. ¿Qué elemento deberías dejar fuera?",
          "en": "You are building your personal page. Which element should be left out?"
        },
        "opts": [
          {
            "t": {
              "es": "Tres proyectos tuyos con una foto de cada uno.",
              "en": "Three of your projects with a photo each."
            },
            "ok": false
          },
          {
            "t": {
              "es": "Tu dirección, tu teléfono y el horario de tu instituto.",
              "en": "Your address, phone, and school timetable."
            },
            "ok": true
          },
          {
            "t": {
              "es": "Un correo de contacto creado para esto.",
              "en": "A contact email created for this."
            },
            "ok": false
          },
          {
            "t": {
              "es": "Dos líneas sobre qué te interesa y por qué.",
              "en": "Two lines on what interests you and why."
            },
            "ok": false
          }
        ],
        "okMsg": {
          "es": "Correcto. Una página pública es pública para todos. Contacto sí; localización y rutina diaria, nunca.",
          "en": "Correct. A public page is public to everyone. Contact yes; location and daily routine, never."
        },
        "noMsg": {
          "es": "Eso sí debe estar. Lo que nunca se publica es lo que permite localizarte físicamente.",
          "en": "That does belong. What must never be published is anything that lets someone locate you physically."
        }
      },
      {
        "type": "reflect",
        "kicker": {
          "es": "Paso 4 · Aplicación",
          "en": "Step 4 · Reflection"
        },
        "h": {
          "es": "Tu Página Personal",
          "en": "Your Personal Page"
        },
        "body": {
          "es": "Publícala de verdad, aunque sea sencilla. Una página real y modesta vale más que un diseño imaginario.",
          "en": "Actually publish it, even if simple. A real modest page beats an imaginary design."
        },
        "prompt": {
          "es": "1. Quién soy (2 líneas): ___\n2. Qué sé hacer: ___\n3. Prueba 1 / 2 / 3: ___\n4. Correo de contacto: ___\n5. Qué he dejado fuera a propósito: ___",
          "en": "1. Who I am (2 lines): ___\n2. What I can do: ___\n3. Proof 1 / 2 / 3: ___\n4. Contact email: ___\n5. What I deliberately left out: ___"
        }
      }
    ]
  },
  "expediente": {
    "id": "expediente",
    "tag": "core",
    "level": "launch",
    "verseKey": "expediente",
    "status": "draft",
    "authoring": "ai_assisted",
    "title": {
      "es": "Tu Expediente Cuenta una Historia",
      "en": "Your Record Tells a Story"
    },
    "project": {
      "es": "Tu <b>Índice de Expediente</b>: los 8 entregables que mejor cuentan quién eres, ordenados y con una línea explicando qué prueba cada uno.",
      "en": "Your <b>Portfolio Index</b>: the 8 artifacts that best tell who you are, ordered, each with one line on what it proves."
    },
    "steps": [
      {
        "type": "hook",
        "kicker": {
          "es": "Paso 1 · Apertura",
          "en": "Step 1 · Hook"
        },
        "h": {
          "es": "Una carpeta no es un expediente",
          "en": "A folder is not a portfolio"
        },
        "scenario": {
          "es": "Dos alumnos entregan lo mismo. Uno adjunta 30 archivos con nombres como \"documento_final_2.pdf\". El otro entrega 8, ordenados, cada uno con una línea diciendo qué demuestra. Adivina a cuál leen entero.",
          "en": "Two students submit the same work. One attaches 30 files named \"final_doc_2.pdf\". The other submits 8, ordered, each with a line on what it proves. Guess which gets read fully."
        },
        "body": {
          "es": "Tu expediente no es un almacén: es un <b>argumento</b>. Vas a elegir qué prueba qué.",
          "en": "Your portfolio is not storage: it is an <b>argument</b>. You will choose what proves what."
        }
      },
      {
        "type": "theory",
        "kicker": {
          "es": "Paso 2 · Fundamento",
          "en": "Step 2 · Theory"
        },
        "h": {
          "es": "Conocimiento e inteligencia probados",
          "en": "Knowledge and understanding, tested"
        },
        "body": {
          "es": "En Daniel 1, los cuatro jóvenes no se presentan hablando de sí mismos: <b>los examinan</b> y su trabajo responde. Un buen expediente hace lo mismo: no dice \"soy responsable\", enseña dónde se ve.",
          "en": "In Daniel 1, the four young men do not present themselves with words: <b>they are examined</b> and their work answers. A good portfolio does the same: it does not say \"I am responsible\", it shows where that is visible."
        },
        "diagram": {
          "es": "<b>Regla de la línea</b><br>Cada pieza lleva una línea: \"Esto demuestra que…\".<br>Si no sabes terminar la frase, esa pieza sobra.",
          "en": "<b>The one-line rule</b><br>Each piece carries one line: \"This demonstrates that…\".<br>If you cannot finish the sentence, that piece does not belong."
        }
      },
      {
        "type": "quiz",
        "kicker": {
          "es": "Paso 3 · Comprobación",
          "en": "Step 3 · Quiz"
        },
        "h": {
          "es": "¿Qué pieza es más fuerte?",
          "en": "Which piece is strongest?"
        },
        "q": {
          "es": "Quieres demostrar constancia. ¿Qué evidencia lo prueba mejor?",
          "en": "You want to demonstrate perseverance. Which evidence proves it best?"
        },
        "opts": [
          {
            "t": {
              "es": "Un párrafo explicando que eres muy constante.",
              "en": "A paragraph explaining that you are very persevering."
            },
            "ok": false
          },
          {
            "t": {
              "es": "Un diploma de asistencia a una charla de motivación.",
              "en": "An attendance certificate from a motivational talk."
            },
            "ok": false
          },
          {
            "t": {
              "es": "El registro de 21 días seguidos de tu hábito, con los dos días que fallaste y cómo volviste.",
              "en": "Your 21-day habit log, including the two days you failed and how you resumed."
            },
            "ok": true
          },
          {
            "t": {
              "es": "Una carta de un familiar diciendo que eres muy trabajador.",
              "en": "A letter from a relative saying you are hardworking."
            },
            "ok": false
          }
        ],
        "okMsg": {
          "es": "Eso es. Muestra el proceso completo, incluidos los fallos. Nada convence más que una evidencia que no se esconde.",
          "en": "That is it. It shows the full process, failures included. Nothing convinces more than evidence that does not hide."
        },
        "noMsg": {
          "es": "Eso son afirmaciones sobre ti, no pruebas. Busca lo que un tercero pueda verificar sin creerte a ti.",
          "en": "Those are claims about you, not proof. Look for what a third party can verify without taking your word."
        }
      },
      {
        "type": "reflect",
        "kicker": {
          "es": "Paso 4 · Aplicación",
          "en": "Step 4 · Reflection"
        },
        "h": {
          "es": "Tu Índice de Expediente",
          "en": "Your Portfolio Index"
        },
        "body": {
          "es": "Ocho piezas, ni una más. Elegir qué dejas fuera es la mitad del trabajo.",
          "en": "Eight pieces, no more. Choosing what to leave out is half the work."
        },
        "prompt": {
          "es": "Pieza 1: ___ → Esto demuestra que: ___\nPieza 2: ___ → Esto demuestra que: ___\n(hasta 8)\n\nQué dejé fuera y por qué: ___\nQué me falta y cómo lo consigo este trimestre: ___",
          "en": "Piece 1: ___ → This demonstrates that: ___\nPiece 2: ___ → This demonstrates that: ___\n(up to 8)\n\nWhat I left out and why: ___\nWhat is missing and how I get it this quarter: ___"
        }
      }
    ]
  },
  "curriculum": {
    "id": "curriculum",
    "tag": "core",
    "level": "launch",
    "verseKey": "curriculum",
    "status": "draft",
    "authoring": "ai_assisted",
    "title": {
      "es": "Un CV que Alguien Quiera Leer",
      "en": "A CV Someone Wants to Read"
    },
    "project": {
      "es": "Tu <b>CV de Una Página</b> con cada logro escrito como acción, contexto y resultado medible.",
      "en": "Your one-page <b>CV</b> with each achievement written as action, context, and measurable result."
    },
    "steps": [
      {
        "type": "hook",
        "kicker": {
          "es": "Paso 1 · Apertura",
          "en": "Step 1 · Hook"
        },
        "h": {
          "es": "Seis segundos",
          "en": "Six seconds"
        },
        "scenario": {
          "es": "Quien revisa currículos dedica unos segundos a la primera criba. En ese tiempo no lee: <b>escanea</b>. Si tu mejor logro está en la línea 14, no existe.",
          "en": "Whoever screens CVs spends seconds on the first pass. In that time they do not read: they <b>scan</b>. If your best achievement sits on line 14, it does not exist."
        },
        "body": {
          "es": "No se trata de exagerar. Se trata de poner delante lo que ya hiciste y de decirlo en el formato que se entiende rápido.",
          "en": "This is not about exaggerating. It is about putting what you already did up front, in a format understood fast."
        }
      },
      {
        "type": "theory",
        "kicker": {
          "es": "Paso 2 · Fundamento",
          "en": "Step 2 · Theory"
        },
        "h": {
          "es": "El solícito en su trabajo",
          "en": "Diligent in your work"
        },
        "body": {
          "es": "Proverbios 22:29 no habla de quien mejor se vende, sino de quien es <b>solícito</b> — diligente y constante. Tu CV documenta eso. Si no hay obra detrás, ningún formato lo salva.",
          "en": "Proverbs 22:29 speaks not of the best self-promoter but of the <b>diligent</b> one. Your CV documents that. With no work behind it, no format saves you."
        },
        "diagram": {
          "es": "<b>Fórmula ACR</b><br><b>A</b>cción (verbo) + <b>C</b>ontexto + <b>R</b>esultado medible.<br>Flojo: \"Ayudé en el grupo de jóvenes\".<br>Fuerte: \"Coordiné a 8 voluntarios en 12 sesiones semanales; la asistencia pasó de 15 a 34.\"",
          "en": "<b>ACR formula</b><br><b>A</b>ction + <b>C</b>ontext + measurable <b>R</b>esult.<br>Weak: \"Helped with youth group\".<br>Strong: \"Coordinated 8 volunteers across 12 weekly sessions; attendance grew 15 → 34.\""
        }
      },
      {
        "type": "quiz",
        "kicker": {
          "es": "Paso 3 · Comprobación",
          "en": "Step 3 · Quiz"
        },
        "h": {
          "es": "¿Cuál está bien escrito?",
          "en": "Which is well written?"
        },
        "q": {
          "es": "¿Cuál de estas líneas sigue la fórmula acción + contexto + resultado?",
          "en": "Which line follows action + context + measurable result?"
        },
        "opts": [
          {
            "t": {
              "es": "\"Persona responsable y con muchas ganas de aprender.\"",
              "en": "\"Responsible person, eager to learn.\""
            },
            "ok": false
          },
          {
            "t": {
              "es": "\"Participé en un proyecto de reciclaje en el instituto.\"",
              "en": "\"Participated in a recycling project at school.\""
            },
            "ok": false
          },
          {
            "t": {
              "es": "\"Organicé la recogida de papel de 6 aulas durante 3 meses; se reciclaron 240 kg.\"",
              "en": "\"Organized paper collection across 6 classrooms for 3 months; 240 kg recycled.\""
            },
            "ok": true
          },
          {
            "t": {
              "es": "\"Tengo experiencia en trabajo en equipo y liderazgo.\"",
              "en": "\"I have experience in teamwork and leadership.\""
            },
            "ok": false
          }
        ],
        "okMsg": {
          "es": "Exacto. Verbo concreto, alcance medible y resultado verificable. Eso se lee en dos segundos y se recuerda.",
          "en": "Exactly. Concrete verb, measurable scope, verifiable result. Read in two seconds and remembered."
        },
        "noMsg": {
          "es": "Eso es un adjetivo sobre ti o una participación sin resultado. Pregúntate: ¿cuántos? ¿cuánto tiempo? ¿qué cambió?",
          "en": "That is an adjective about you or participation without result. Ask: how many? how long? what changed?"
        }
      },
      {
        "type": "reflect",
        "kicker": {
          "es": "Paso 4 · Aplicación",
          "en": "Step 4 · Reflection"
        },
        "h": {
          "es": "Tu CV de Una Página",
          "en": "Your One-Page CV"
        },
        "body": {
          "es": "Reescribe tus cinco mejores líneas con la fórmula ACR. Una página, sin foto, sin datos privados de más.",
          "en": "Rewrite your five best lines with the ACR formula. One page, no photo, no unnecessary private data."
        },
        "prompt": {
          "es": "Logro 1 → Acción: ___ Contexto: ___ Resultado: ___\nLogro 2 → ___\nLogro 3 → ___\nLogro 4 → ___\nLogro 5 → ___\n\nCuál pongo primero y por qué: ___",
          "en": "Achievement 1 → Action: ___ Context: ___ Result: ___\nAchievement 2 → ___\n(up to 5)\n\nWhich goes first and why: ___"
        }
      }
    ]
  },
  "entrevista": {
    "id": "entrevista",
    "tag": "core",
    "level": "launch",
    "verseKey": "entrevista",
    "status": "draft",
    "authoring": "ai_assisted",
    "title": {
      "es": "Entrevistas sin Fingir",
      "en": "Interviews Without Faking"
    },
    "project": {
      "es": "Tu <b>Simulacro de Entrevista</b> grabado: cinco preguntas reales respondidas con ejemplos concretos, y tu autoevaluación.",
      "en": "Your recorded <b>Mock Interview</b>: five real questions answered with concrete examples, plus your self-assessment."
    },
    "steps": [
      {
        "type": "hook",
        "kicker": {
          "es": "Paso 1 · Apertura",
          "en": "Step 1 · Hook"
        },
        "h": {
          "es": "\"Háblame de una debilidad\"",
          "en": "\"Tell me about a weakness\""
        },
        "scenario": {
          "es": "\"Mi debilidad es que soy demasiado perfeccionista.\" Quien entrevista ha oído esa frase cientos de veces. No suena a humildad: suena a que no quieres responder.",
          "en": "\"My weakness is that I am too much of a perfectionist.\" The interviewer has heard it hundreds of times. It does not sound humble: it sounds evasive."
        },
        "body": {
          "es": "Una entrevista no es un examen de respuestas correctas. Es comprobar si eres quien dices y si se puede trabajar contigo.",
          "en": "An interview is not a test of correct answers. It checks whether you are who you say and whether you are workable with."
        }
      },
      {
        "type": "theory",
        "kicker": {
          "es": "Paso 2 · Fundamento",
          "en": "Step 2 · Theory"
        },
        "h": {
          "es": "Palabra con gracia, sazonada con sal",
          "en": "Speech with grace, seasoned with salt"
        },
        "body": {
          "es": "Colosenses 4:6 pide las dos cosas a la vez: <b>gracia</b> (amable) y <b>sal</b> (con sustancia, que sepa a algo). Una respuesta amable y vacía falla igual que una brusca.",
          "en": "Colossians 4:6 asks for both: <b>grace</b> (kind) and <b>salt</b> (substance). A kind but empty answer fails as much as a blunt one."
        },
        "diagram": {
          "es": "<b>Método SAR</b><br><b>S</b>ituación (breve) → <b>A</b>cción (lo que hiciste tú) → <b>R</b>esultado (qué pasó y qué aprendiste).<br>30 a 60 segundos. Ni monosílabo ni discurso.",
          "en": "<b>SAR method</b><br><b>S</b>ituation → <b>A</b>ction (what you did) → <b>R</b>esult (what happened, what you learned).<br>30 to 60 seconds. Neither monosyllable nor speech."
        }
      },
      {
        "type": "quiz",
        "kicker": {
          "es": "Paso 3 · Comprobación",
          "en": "Step 3 · Quiz"
        },
        "h": {
          "es": "Una debilidad, bien respondida",
          "en": "A weakness, answered well"
        },
        "q": {
          "es": "Te preguntan por una debilidad real. ¿Cuál es la mejor respuesta?",
          "en": "You are asked about a real weakness. Which is the best answer?"
        },
        "opts": [
          {
            "t": {
              "es": "\"Soy demasiado perfeccionista y trabajo demasiado.\"",
              "en": "\"I am too perfectionist and work too hard.\""
            },
            "ok": false
          },
          {
            "t": {
              "es": "\"La verdad es que no se me ocurre ninguna.\"",
              "en": "\"Honestly, I cannot think of any.\""
            },
            "ok": false
          },
          {
            "t": {
              "es": "\"Me cuesta pedir ayuda pronto. En el proyecto de Q2 perdí una semana atascado; ahora me pongo un límite de dos días y pregunto.\"",
              "en": "\"I struggle to ask for help early. In the Q2 project I lost a week stuck; now I set a two-day limit and ask.\""
            },
            "ok": true
          },
          {
            "t": {
              "es": "\"Soy muy desorganizado, pero bueno, todos lo somos.\"",
              "en": "\"I am very disorganized, but everyone is.\""
            },
            "ok": false
          }
        ],
        "okMsg": {
          "es": "Exacto. Debilidad real, ejemplo concreto y qué has cambiado. Demuestra autoconocimiento sin hundirte.",
          "en": "Exactly. Real weakness, concrete example, and what you changed. It shows self-awareness without sinking yourself."
        },
        "noMsg": {
          "es": "Eso es un cliché, una evasiva o una debilidad sin arreglo. La estructura es: real + ejemplo + qué haces ahora.",
          "en": "That is a cliché, an evasion, or a weakness with no fix. The structure is: real + example + what you do now."
        }
      },
      {
        "type": "reflect",
        "kicker": {
          "es": "Paso 4 · Aplicación",
          "en": "Step 4 · Reflection"
        },
        "h": {
          "es": "Tu Simulacro de Entrevista",
          "en": "Your Mock Interview"
        },
        "body": {
          "es": "Pide a tu mentor o a un adulto que te entreviste. Grábalo y revísalo una vez con la estructura SAR en la mano.",
          "en": "Ask your mentor or an adult to interview you. Record it and review once with the SAR structure in hand."
        },
        "prompt": {
          "es": "1. Háblame de ti → S/A/R: ___\n2. Una dificultad que superaste → S/A/R: ___\n3. Una debilidad real → S/A/R: ___\n4. Por qué tú → S/A/R: ___\n5. Tu pregunta para ellos: ___\n\nQué vi al revisar la grabación: ___",
          "en": "1. Tell me about yourself → S/A/R: ___\n2. A difficulty you overcame → S/A/R: ___\n3. A real weakness → S/A/R: ___\n4. Why you → S/A/R: ___\n5. Your question for them: ___\n\nWhat I saw on review: ___"
        }
      }
    ]
  }
};

/* ---------------- Expediente Universitario · 6 Categorías de Artefactos ---------------- */
export const EXPEDIENTE_CATEGORIES = [
  {
    id: 'identidad',
    icon: '🗂️',
    title: T('Identidad y propósito', 'Identity and Purpose'),
    artifactsCount: 5,
    items: [
      {
        level: 'seedling',
        levelLabel: 'Seedling',
        quarter: 'Q1',
        title: T('Escudo de Armas Personal', 'Personal Coat of Arms'),
        file: 'Escudo_de_Armas.[jpg|pdf]',
        desc: T('Pieza visual de identidad. Se referencia en el Personal Statement de Launch.', 'Visual identity piece. Referenced in Launch Personal Statement.')
      },
      {
        level: 'seedling',
        levelLabel: 'Seedling',
        quarter: 'Q1',
        title: T('Carta al yo futuro', 'Letter to Future Self'),
        file: 'Carta_yo_futuro.pdf',
        desc: T('Se relee en Launch para medir el recorrido de cuatro años.', 'Re-read in Launch to measure the four-year growth journey.')
      },
      {
        level: 'seedling',
        levelLabel: 'Seedling',
        quarter: 'Q3',
        title: T('Vídeo «My Story in 2 Minutes»', 'Video "My Story in 2 Minutes"'),
        file: 'Video_My_Story_2min.mp4',
        desc: T('Primera versión hablada de la narrativa personal. Base del vídeo de presentación universitario.', 'First spoken version of personal narrative. Foundation for college intro video.')
      },
      {
        level: 'explorer',
        levelLabel: 'Explorer',
        quarter: 'Q1',
        title: T('Resultados del Test de Dones', 'Gifts Test Results'),
        file: 'Test_Dones_Resultados.pdf',
        desc: T('Documenta el criterio con que el estudiante eligió su ruta vocacional.', 'Documents the criteria with which the student chose their vocational track.')
      },
      {
        level: 'explorer',
        levelLabel: 'Explorer',
        quarter: 'Q1',
        title: T('Ensayo vocacional (300–500 palabras)', 'Vocational Essay (300–500 words)'),
        file: 'Ensayo_Vocacional.pdf',
        desc: T('Puede redactarse en inglés o español. Si es en inglés, sirve como muestra de escritura académica.', 'Written in English or Spanish. If English, serves as academic writing sample.')
      }
    ]
  },
  {
    id: 'servicio',
    icon: '🤝',
    title: T('Servicio documentado', 'Documented Service'),
    artifactsCount: 6,
    items: [
      {
        level: 'seedling',
        levelLabel: 'Seedling',
        quarter: 'Q2',
        title: T('Fotos del acto de servicio', 'Service Act Photos'),
        file: 'Fotos_Servicio_1..3.jpg',
        desc: T('Primer registro de servicio del expediente.', 'First service record in the student dossier.')
      },
      {
        level: 'seedling',
        levelLabel: 'Seedling',
        quarter: 'Q3',
        title: T('Carta de referencia externa', 'External Reference Letter'),
        file: 'Referencia_Externa.pdf',
        tag: 'Opcional',
        desc: T('Opcional a esta edad, pero obligatoria desde Builder. Conviene empezar a pedirlas.', 'Optional at this age, mandatory from Builder. Good to start requesting early.')
      },
      {
        level: 'explorer',
        levelLabel: 'Explorer',
        quarter: 'Q3',
        title: T('Referencia de quien evaluó el pitch', 'Pitch Evaluator Reference'),
        file: 'Referencia_Externa.pdf',
        tag: 'Opcional',
        desc: T('Validación de la presentación Shark Tank Junior.', 'Validation of the Shark Tank Junior presentation.')
      },
      {
        level: 'builder',
        levelLabel: 'Builder',
        quarter: 'Q1',
        title: T('Service Log (20 h documentadas)', 'Service Log (20 documented hours)'),
        file: 'Service_Log_Q1.pdf',
        desc: T('Las horas verificadas son moneda de cambio real en la admisión universitaria estadounidense.', 'Verified hours are real currency in US university admissions.')
      },
      {
        level: 'builder',
        levelLabel: 'Builder',
        quarter: 'Q1',
        title: T('Carta de referencia del supervisor', 'Supervisor Reference Letter'),
        file: 'Carta_Referencia_Supervisor.pdf',
        desc: T('OBLIGATORIA desde este nivel. Sin ella las horas no se acreditan.', 'MANDATORY from this level. Without it, service hours cannot be accredited.')
      },
      {
        level: 'launch',
        levelLabel: 'Launch',
        quarter: 'EXPEDIENTE',
        title: T('Cartas de referencia acumuladas', 'Cumulative Reference Letters'),
        file: 'Cartas_Referencia/',
        desc: T('Se acumulan desde Seedling. Builder aporta la primera obligatoria.', 'Accumulated from Seedling onwards. Builder provides the first mandatory letter.')
      }
    ]
  },
  {
    id: 'academico',
    icon: '📚',
    title: T('Logro académico', 'Academic Achievement'),
    artifactsCount: 6,
    items: [
      {
        level: 'explorer',
        levelLabel: 'Explorer',
        quarter: 'Q2',
        title: T('Póster o infografía científica', 'Scientific Poster / Infographic'),
        file: 'Proyecto_Cientifico_Poster.[jpg|pdf]',
        desc: T('Primera pieza de investigación formal del expediente.', 'First piece of formal research in the academic dossier.')
      },
      {
        level: 'builder',
        levelLabel: 'Builder',
        quarter: 'Q2',
        title: T('Informe financiero trimestral', 'Quarterly Financial Report'),
        file: 'Reporte_Finance_Q2.pdf',
        desc: T('Muestra de análisis cuantitativo y criterio propio en Google Finance.', 'Demonstration of quantitative analysis and financial stewardship.')
      },
      {
        level: 'builder',
        levelLabel: 'Builder',
        quarter: 'Q3',
        title: T('Progreso en Khan Academy (20 h)', 'Khan Academy Progress (20 hrs)'),
        file: 'Khan_Academy_Progreso_Captura.jpg',
        desc: T('Registro oficial de horas en Grammar, Pre-Algebra o SAT Prep.', 'Official record of prep hours in Khan Academy.')
      },
      {
        level: 'builder',
        levelLabel: 'Builder',
        quarter: 'Q3',
        title: T('Resultado del simulacro SAT', 'SAT Practice Test Result'),
        file: 'Resultado_Simulacro_SAT.pdf',
        desc: T('Línea base para medir la mejora hasta el SAT oficial de Launch.', 'Baseline to measure score improvement through official Launch SAT.')
      },
      {
        level: 'launch',
        levelLabel: 'Launch',
        quarter: 'Q3',
        title: T('Evidencia de SAT / College Prep', 'SAT / College Prep Evidence'),
        file: 'SAT_CollegePrep_Evidencia.pdf',
        desc: T('Reporte de simulacros avanzados o registro de examen oficial.', 'Advanced test report or official exam registration.')
      },
      {
        level: 'launch',
        levelLabel: 'Launch',
        quarter: 'EXPEDIENTE',
        title: T('Evidencia de SAT Oficial', 'Official SAT Score Evidence'),
        file: 'SAT_Official_Score.pdf',
        desc: T('Puntuación oficial del College Board incorporada al transcript.', 'Official College Board score attached to transcript.')
      }
    ]
  },
  {
    id: 'liderazgo',
    icon: '📣',
    title: T('Liderazgo demostrado', 'Demonstrated Leadership'),
    artifactsCount: 6,
    items: [
      {
        level: 'seedling',
        levelLabel: 'Seedling',
        quarter: 'Q3',
        title: T('Evidencia del Proyecto BOLD', 'BOLD Project Evidence'),
        file: 'Fotos_BOLD_Project.jpg',
        desc: T('Primera iniciativa propia documentada en 7 días.', 'First student-led initiative documented in 7 days.')
      },
      {
        level: 'explorer',
        levelLabel: 'Explorer',
        quarter: 'Q3',
        title: T('Vídeo del pitch (2 min)', 'Pitch Video (2 min)'),
        file: 'Video_Presentacion_2min.mp4',
        desc: T('Defensa audiovisual de Shark Tank Junior.', 'Audiovisual defense for Shark Tank Junior.')
      },
      {
        level: 'builder',
        levelLabel: 'Builder',
        quarter: 'Q1',
        title: T('Evidencia del liderazgo', 'Leadership Evidence'),
        file: 'Fotos_BOLD_Liderazgo.jpg',
        desc: T('Debe verse al estudiante liderando personas, no solo participando.', 'Must clearly show student leading peers/community, not just participating.')
      },
      {
        level: 'builder',
        levelLabel: 'Builder',
        quarter: 'Q3',
        title: T('Propuesta inicial del Capstone', 'Initial Capstone Proposal'),
        file: 'Plan_Capstone.pdf',
        desc: T('Puente directo con el nivel 4 y diseño metodológico.', 'Direct bridge to level 4 and methodological design.')
      },
      {
        level: 'launch',
        levelLabel: 'Launch',
        quarter: 'Q1',
        title: T('Propuesta del Capstone', 'Capstone Formal Proposal'),
        file: 'Propuesta_Capstone.pdf',
        desc: T('Proyecto de grado definitivo de impacto comunitario o empresarial.', 'Final graduation project with community or business impact.')
      },
      {
        level: 'launch',
        levelLabel: 'Launch',
        quarter: 'Q3',
        title: T('Vídeo de la presentación del Capstone', 'Capstone Presentation Video'),
        file: 'Video_Capstone_Presentacion.mp4',
        desc: T('Defensa pública final grabada en video ante mentores.', 'Final public defense recorded before mentors.')
      }
    ]
  },
  {
    id: 'portafolio',
    icon: '🎨',
    title: T('Portafolio vocacional', 'Vocational Portfolio'),
    artifactsCount: 1,
    items: [
      {
        level: 'explorer',
        levelLabel: 'Explorer',
        quarter: 'Q3',
        title: T('Presentación del pitch', 'Pitch Slide Deck'),
        file: 'Slides_SharkTank.pdf',
        desc: T('Muestra de comunicación persuasiva y diseño visual.', 'Sample of persuasive communication and visual design.')
      }
    ]
  },
  {
    id: 'solicitud',
    icon: '🎓',
    title: T('Documentos de solicitud', 'Application Documents'),
    artifactsCount: 5,
    items: [
      {
        level: 'launch',
        levelLabel: 'Launch',
        quarter: 'Q2',
        title: T('Resume académico USA', 'US Academic Resume'),
        file: 'Resume_USA.pdf',
        desc: T('Formato estadounidense. Recoge los logros de los cuatro años.', 'US standard format compiling achievements from all 4 high school years.')
      },
      {
        level: 'launch',
        levelLabel: 'Launch',
        quarter: 'Q2',
        title: T('Personal Statement · versión 1', 'Personal Statement · Version 1'),
        file: 'Personal_Statement_V1.pdf',
        desc: T('Primer borrador. Se versiona a propósito: el ensayo definitivo se escribe en Q3 tras recibir feedback de la mentora.', 'First draft. Versioned intentionally: final essay written in Q3 after feedback.')
      },
      {
        level: 'launch',
        levelLabel: 'Launch',
        quarter: 'Q3',
        title: T('Presupuesto universitario', 'College Budget'),
        file: 'Presupuesto_Universitario.pdf',
        desc: T('Plan financiero realista de la ruta universitaria elegida.', 'Realistic financial plan for chosen college pathway.')
      },
      {
        level: 'launch',
        levelLabel: 'Launch',
        quarter: 'EXPEDIENTE',
        title: T('Resume final', 'Final Resume'),
        file: 'Resume_Final.pdf',
        desc: T('Currículum pulido listo para adjuntar en Common App o admisiones.', 'Polished resume ready for Common App or university admissions.')
      },
      {
        level: 'launch',
        levelLabel: 'Launch',
        quarter: 'EXPEDIENTE',
        title: T('Personal Statement definitivo', 'Final Personal Statement'),
        file: 'Personal_Statement_Final.pdf',
        desc: T('Ensayo de admisión final revisado y aprobado por mentora.', 'Final admissions essay reviewed and approved by mentor.')
      }
    ]
  }
];

/**
 * EXTENSION_CAPSULES_DATA,
    RIASEC_TEST_DATA — Chanak Life Skills (chanak-life-skills / data.js)
 * ----------------------------------------------------------------------
 * Transcripción de los 19 módulos temáticos ya desarrollados (guías
 * docentes completas) al formato de datos que usa la app.
 *
 * IMPORTANTE PARA QUIEN INTEGRE ESTO (Elías / Antigravity):
 * - Los nombres de campo (teacherGuide, sessions, studentNotebook,
 *   floridaStandards, etc.) son una PROPUESTA. Cotejar contra las
 *   claves reales de CAPSULES_DATA en el repo antes de fusionar.
 * - Este objeto EXTIENDE cada cápsula existente — no crea una
 *   estructura paralela. hook/theory/quiz/reflect ya validados en
 *   producción se mantienen intactos.
 * - level: 'seedling'|'explorer'|'builder'|'launch'
 * - quarter: trimestre ancla del Portal (null = módulo transversal
 *   o de extensión sin trimestre fijo — ver Plan de Año)
 * - Módulos marcados con menos de 8 sesiones (ls1-5, ls2-4, ls3-5)
 *   son las versiones de EXTENSIÓN (6 sesiones) — ver criterio de
 *   selección en el Plan de Año entregado.
 * - Todo el contenido: status 'draft', authoring 'ai_assisted'.
 *   Requiere aprobación de dirección académica antes de publicar.
 *
 * Estándares de referencia citados en floridaStandards:
 * Profile of a Florida Graduate (Durable Skills) y Florida
 * Employability Skills (FLDOE Career Readiness Skill Guide) —
 * colegio registrado en Florida (FLDOE #134620).
 */


/* ============================================================
   TEST VOCACIONAL RIASEC & PERFIL DE DONES (EXPLORER Q1)
   Marco pedagógico: Holland Codes + Servicio Cristiano Chanak
   Status: draft · Authoring: ai_assisted · FLDOE #134620
   ============================================================ */

export const RIASEC_TEST_DATA = {
  dimensions: {
    R: { name: 'Realista', icon: '🔧', color: '#0284C7', desc: 'Práctico, técnico, orientado a herramientas, naturaleza y acción tangible.' },
    I: { name: 'Investigador', icon: '🔬', color: '#7C3AED', desc: 'Analítico, curioso, orientado a la ciencia, resolución de problemas y lógica.' },
    A: { name: 'Artístico', icon: '🎨', color: '#DB2777', desc: 'Creativo, intuitivo, expresivo, orientado al diseño, comunicación y arte.' },
    S: { name: 'Social', icon: '🤝', color: '#16A34A', desc: 'Empático, servicial, orientador, enfocado en ayudar, enseñar y colaborar.' },
    E: { name: 'Emprendedor', icon: '📣', color: '#D97706', desc: 'Líder, persuasivo, orientado a iniciativas, proyectos y toma de decisiones.' },
    C: { name: 'Convencional', icon: '📋', color: '#475569', desc: 'Organizado, metódico, orientado a datos, sistemas, orden y mayordomía.' }
  },
  questions: [
    { id: 'q1', dim: 'R', text: 'Me gusta construir, armar o reparar cosas prácticas con mis manos.' },
    { id: 'q2', dim: 'I', text: 'Disfruto investigar por qué suceden las cosas y analizar problemas complejos.' },
    { id: 'q3', dim: 'A', text: 'Me apasiona crear cosas originales (diseño, música, escritura o contenido visual).' },
    { id: 'q4', dim: 'S', text: 'Me motiva escuchar a otros, enseñarles y ayudarles cuando tienen una necesidad.' },
    { id: 'q5', dim: 'E', text: 'Tomo la iniciativa para organizar proyectos, liderar grupos o proponer ideas de negocio.' },
    { id: 'q6', dim: 'C', text: 'Me siento cómodo manteniendo el orden, organizando horarios y siguiendo procesos claros.' },
    { id: 'q7', dim: 'R', text: 'Prefiero actividades al aire libre, con tecnología aplicada o trabajo tangible.' },
    { id: 'q8', dim: 'I', text: 'Me entusiasma aprender temas científicos, matemáticos o tecnológicos en profundidad.' },
    { id: 'q9', dim: 'A', text: 'Valoro la originalidad y expresar ideas mediante relatos, arte o comunicación creativa.' },
    { id: 'q10', dim: 'S', text: 'Me resulta natural generar confianza en las personas y trabajar en equipo hacia un bien común.' },
    { id: 'q11', dim: 'E', text: 'Me gusta convencer a otros sobre una buena causa y asumir retos de responsabilidad.' },
    { id: 'q12', dim: 'C', text: 'Soy minucioso revisando detalles, números, listas o presupuestos.' },
    { id: 'q13', dim: 'R', text: 'Aprendo mejor experimentando físicamente que solo escuchando teoría.' },
    { id: 'q14', dim: 'I', text: 'Disfruto resolver acertijos o descubrir patrones lógicos que otros no ven.' },
    { id: 'q15', dim: 'A', text: 'Me gusta darle un toque estético o visual atractivo a mis trabajos y proyectos.' },
    { id: 'q16', dim: 'S', text: 'Me preocupa el bienestar de mi comunidad y busco formas concretas de servir.' },
    { id: 'q17', dim: 'E', text: 'No me asusta hablar en público ni defender una propuesta importante.' },
    { id: 'q18', dim: 'C', text: 'Prefiero tener un plan estructurado antes de empezar cualquier tarea.' },
    { id: 'q19', dim: 'I', text: 'Me gusta comprobar la veracidad de los datos antes de aceptar una afirmación.' },
    { id: 'q20', dim: 'S', text: 'Siento que mi propósito personal se cumple cuando ayudo a que otros crezcan.' }
  ],
  profiles: {
    'RI': { title: 'Técnico Científico', service: 'Apoyo logístico y desarrollo de infraestructura tecnológica para misiones y ONG.', careers: ['Ingeniería', 'Biotecnología', 'Ciencia de Datos', 'Agronomía Sostenible'] },
    'RA': { title: 'Diseñador Técnico', service: 'Diseño de espacios y recursos visuales para proyectos comunitarios.', careers: ['Arquitectura', 'Diseño Industrial', 'Animación Digital', 'Multimedia'] },
    'RS': { title: 'Instructor Práctico', service: 'Capacitación en oficios y rescate comunitario.', careers: ['Fisioterapia', 'Kinesiología', 'Educación Técnica', 'Gestión de Emergencias'] },
    'RE': { title: 'Emprendedor Operativo', service: 'Liderazgo de proyectos comunitarios y logística de ayuda humanitaria.', careers: ['Ingeniería Industrial', 'Gestión de Operaciones', 'Construcción', 'Agronegocios'] },
    'RC': { title: 'Especialista en Sistemas', service: 'Administración de redes y mayordomía de recursos tecnológicos de iglesias.', careers: ['Ciberseguridad', 'Redes', 'Logística', 'Control de Calidad'] },
    'IA': { title: 'Investigador Creativo', service: 'Divulgación de la verdad y defensa de la fe (apologética y medios).', careers: ['Filosofía y Letras', 'Bioética', 'Periodismo de Investigación', 'Diseño UX'] },
    'IS': { title: 'Mentor y Asesor', service: 'Consejería estudiantil, apoyo pedagógico y ministerios de salud.', careers: ['Psicología', 'Medicina', 'Pedagogía', 'Neurociencia'] },
    'IE': { title: 'Estratega de Innovación', service: 'Diseño de soluciones sustentables para problemas sociales locales.', careers: ['Economía', 'Consultoría Estratégica', 'Gestión Tecnológica', 'Derecho'] },
    'IC': { title: 'Analista de Datos', service: 'Auditoría, transparencia e investigación de impacto de proyectos solidarios.', careers: ['Estadística', 'Investigación Clínica', 'Finanzas Cuantitativas', 'Auditoría'] },
    'AS': { title: 'Comunicador Social', service: 'Liderazgo de alabanza, creación de contenido con valores y arte en la iglesia.', careers: ['Comunicaciones', 'Producción Audiovisual', 'Educación Artística', 'Ministerio Creativo'] },
    'AE': { title: 'Emprendedor Creativo', service: 'Dirección de campañas de concientización y eventos de impacto social.', careers: ['Marketing con Propósito', 'Publicidad Ética', 'Gestión Cultural', 'Dirección de Medios'] },
    'AC': { title: 'Diseñador Editorial', service: 'Elaboración de materiales educativos y publicaciones de fe y cultura.', careers: ['Diseño Gráfico Editorial', 'Edición de Libros', 'Gestión de Contenidos', 'Archivística'] },
    'SE': { title: 'Líder Servidor', service: 'Plantación de iglesias, liderazgo pastoral y dirección de organizaciones benéficas.', careers: ['Liderazgo Organizacional', 'Trabajo Social', 'Relaciones Públicas', 'Ministerio Pastoral'] },
    'SC': { title: 'Administrador de Ayuda', service: 'Coordinación de voluntariados y gestión eficiente de recursos comunitarios.', careers: ['Administración de Salud', 'Gestión de ONGs', 'Recursos Humanos', 'Docencia'] },
    'EC': { title: 'Gestor Ejecutivo', service: 'Mayordomía financiera, administración fiduciaria y gobernanza ética.', careers: ['Administración de Empresas', 'Finanzas', 'Comercio Internacional', 'Derecho Corporativo'] }
  }
};

export const EXTENSION_CAPSULES_DATA = {
  "ls1-1": {
    "id": "ls1-1",
    "level": "seedling",
    "quarter": "Q1",
    "status": "draft",
    "authoring": "ai_assisted",
    "teacherGuide": {
      "essentialQuestion": "¿Quién decide quién eres tú?",
      "floridaStandards": [
        "Self-Direction",
        "Communication",
        "Collaboration",
        "Executive Function",
        "Professionalism"
      ],
      "verse": {
        "ref": "Salmo 139:14",
        "text": "Te alabaré; porque formidables, maravillosas son tus obras."
      },
      "closingVerse": {
        "ref": "1 Timoteo 4:12",
        "text": "Ninguno tenga en poco tu juventud, sino sé ejemplo de los creyentes."
      },
      "sessionCount": 8,
      "sessionLengthMin": 60
    },
    "sessions": [
      {
        "number": 1,
        "title": "¿Quién decide quién eres?",
        "objective": "Formular una primera respuesta y conocer la rúbrica.",
        "keyActivity": "Gancho con escudo heráldico + discusión + diagnóstico escrito.",
        "homework": "Traer una fotografía familiar."
      },
      {
        "number": 2,
        "title": "Lo que recibiste y lo que construyes",
        "objective": "Distinguir identidad recibida de construida.",
        "keyActivity": "Clasificación de 12 elementos propios en dos columnas.",
        "homework": "3 preguntas para un familiar."
      },
      {
        "number": 3,
        "title": "Raíces: investigación familiar",
        "objective": "Construir y ejecutar una entrevista estructurada.",
        "keyActivity": "Guion de 8 preguntas en 3 bloques + ensayo por parejas.",
        "homework": "Ejecutar la entrevista."
      },
      {
        "number": 4,
        "title": "Cómo estoy hecho",
        "objective": "Identificar 3 rasgos con fortaleza y riesgo.",
        "keyActivity": "Autoevaluación con evidencia conductual real."
      },
      {
        "number": 5,
        "title": "Taller: diseño del Escudo",
        "objective": "Producir boceto de 4 cuadrantes + lema.",
        "keyActivity": "Producción individual guiada."
      },
      {
        "number": 6,
        "title": "Carta al yo futuro",
        "objective": "Argumentar con evidencia 3 influencias.",
        "keyActivity": "Escritura de 4 partes con regla de evidencia obligatoria."
      },
      {
        "number": 7,
        "title": "Producción final y validación externa",
        "objective": "Terminar el Escudo y gestionar referencia.",
        "keyActivity": "Memoria justificativa + solicitud propia de referencia."
      },
      {
        "number": 8,
        "title": "Defensa, coevaluación y cierre",
        "objective": "Defender oralmente el Escudo.",
        "keyActivity": "Presentaciones 2-3 min + devolución del diagnóstico de S1."
      }
    ],
    "studentNotebook": [
      {
        "session": 1,
        "page": 1,
        "prompt": "¿Quién decide quién eres tú? (5-8 líneas)",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 2,
        "page": 2,
        "prompt": "Clasifica 12 elementos: recibido / construido.",
        "type": "table",
        "graded": false
      },
      {
        "session": 3,
        "page": 3,
        "prompt": "Guion de entrevista: 8 preguntas en 3 bloques.",
        "type": "structured_form",
        "graded": false
      },
      {
        "session": 4,
        "page": 4,
        "prompt": "3 rasgos: fortaleza, riesgo, ejemplo real.",
        "type": "table",
        "graded": false
      },
      {
        "session": 5,
        "page": 5,
        "prompt": "Mi Escudo: 4 cuadrantes + memoria + lema.",
        "type": "escudo_builder",
        "graded": true,
        "rubricWeight": 40
      },
      {
        "session": 6,
        "page": 6,
        "prompt": "Carta al yo futuro.",
        "type": "free_text",
        "graded": true,
        "rubricWeight": 30
      },
      {
        "session": 7,
        "page": 7,
        "prompt": "Gestión de mi referencia externa.",
        "type": "structured_form",
        "graded": true,
        "rubricWeight": 30
      },
      {
        "session": 8,
        "page": 8,
        "prompt": "Reflexión final.",
        "type": "free_text",
        "graded": false
      }
    ]
  },
  "ls1-2": {
    "id": "ls1-2",
    "level": "seedling",
    "quarter": "Q2",
    "status": "draft",
    "authoring": "ai_assisted",
    "teacherGuide": {
      "essentialQuestion": "¿Se lidera dando órdenes, o sirviendo primero?",
      "floridaStandards": [
        "Leadership",
        "Collaboration",
        "Self-Direction",
        "Communication"
      ],
      "verse": {
        "ref": "Mateo 20:26",
        "text": "El que quiera ser grande entre vosotros será vuestro servidor."
      },
      "closingVerse": null,
      "sessionCount": 8,
      "sessionLengthMin": 60
    },
    "sessions": [
      {
        "number": 1,
        "title": "Servir no es lo mismo que ayudar",
        "objective": "Distinguir ayudar de liderar el servicio.",
        "keyActivity": "Observación de 3 necesidades reales de su entorno."
      },
      {
        "number": 2,
        "title": "Elegir la necesidad correcta",
        "objective": "Diagnosticar una necesidad viable.",
        "keyActivity": "Selección con criterio de viabilidad en 4-6 semanas."
      },
      {
        "number": 3,
        "title": "El plan antes que la acción",
        "objective": "Planificar objetivo, pasos, recursos, fecha.",
        "keyActivity": "Redacción guiada del plan completo."
      },
      {
        "number": 4,
        "title": "Revisión del plan",
        "objective": "Validar viabilidad del plan.",
        "keyActivity": "Revisión individual de 5 min por estudiante."
      },
      {
        "number": 5,
        "title": "Ejecución — semana 1",
        "objective": "Ejecutar y documentar mientras ocurre.",
        "keyActivity": "Puesta en común por grupos pequeños."
      },
      {
        "number": 6,
        "title": "Ejecución — semana 2",
        "objective": "Sostener el servicio en el tiempo.",
        "keyActivity": "Seguimiento breve."
      },
      {
        "number": 7,
        "title": "Ajuste a mitad de ejecución",
        "objective": "Corregir el rumbo sin penalización.",
        "keyActivity": "Puesta en común de obstáculos reales."
      },
      {
        "number": 8,
        "title": "Cierre",
        "objective": "Reflexionar sobre el liderazgo servicial.",
        "keyActivity": "Entrega de evidencia + gestión de referencia + reflexión."
      }
    ],
    "studentNotebook": [
      {
        "session": 1,
        "page": 1,
        "prompt": "3 necesidades que observé esta semana.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 2,
        "page": 2,
        "prompt": "La necesidad que elijo y por qué.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 3,
        "page": 3,
        "prompt": "Mi plan de servicio completo.",
        "type": "structured_form",
        "graded": false
      },
      {
        "session": 5,
        "page": 4,
        "prompt": "Registro semanal — qué hice, qué funcionó.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 8,
        "page": 5,
        "prompt": "Reflexión final + gestión de mi referencia externa.",
        "type": "free_text",
        "graded": true,
        "rubricWeight": 30
      }
    ]
  },
  "ls1-3": {
    "id": "ls1-3",
    "level": "seedling",
    "quarter": "Q2",
    "status": "draft",
    "authoring": "ai_assisted",
    "teacherGuide": {
      "essentialQuestion": "¿Por qué las metas fallan y los sistemas funcionan?",
      "floridaStandards": [
        "Executive Function",
        "Self-Direction",
        "Time Management"
      ],
      "verse": {
        "ref": "Efesios 5:15-16",
        "text": "Mirad, pues, con diligencia cómo andéis... aprovechando bien el tiempo."
      },
      "closingVerse": null,
      "sessionCount": 8,
      "sessionLengthMin": 60
    },
    "sessions": [
      {
        "number": 1,
        "title": "Meta vs. sistema",
        "objective": "Diferenciar meta de sistema.",
        "keyActivity": "Análisis de una meta abandonada."
      },
      {
        "number": 2,
        "title": "Auditoría de mi semana real",
        "objective": "Registrar el uso real del tiempo.",
        "keyActivity": "Registro en bloques de 30 min durante 2 días."
      },
      {
        "number": 3,
        "title": "Dónde se va el tiempo",
        "objective": "Analizar categorías de uso del tiempo.",
        "keyActivity": "Cálculo de porcentajes por categoría."
      },
      {
        "number": 4,
        "title": "Diseño del sistema semanal",
        "objective": "Diseñar bloques fijos realistas.",
        "keyActivity": "Diseño de 3-4 bloques con día y hora exactos."
      },
      {
        "number": 5,
        "title": "El hábito de 2 minutos",
        "objective": "Reducir el hábito a versión mínima.",
        "keyActivity": "Rediseño del hábito objetivo del Tracker."
      },
      {
        "number": 6,
        "title": "Ejecución — semana 1 del Tracker",
        "objective": "Sostener el sistema.",
        "keyActivity": "Puesta en común de 10 min."
      },
      {
        "number": 7,
        "title": "Ejecución — semana 2 del Tracker",
        "objective": "Sostener el sistema.",
        "keyActivity": "Puesta en común de 10 min."
      },
      {
        "number": 8,
        "title": "Ajuste tras el primer fallo",
        "objective": "Rediseñar el sistema con evidencia del fallo.",
        "keyActivity": "Reflexión guiada de rediseño."
      }
    ],
    "studentNotebook": [
      {
        "session": 1,
        "page": 1,
        "prompt": "Una meta que he abandonado antes.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 2,
        "page": 2,
        "prompt": "Mi registro de horas real.",
        "type": "table",
        "graded": false
      },
      {
        "session": 3,
        "page": 3,
        "prompt": "Mis categorías de uso del tiempo.",
        "type": "table",
        "graded": false
      },
      {
        "session": 4,
        "page": 4,
        "prompt": "Mi sistema semanal — bloques, día, hora.",
        "type": "structured_form",
        "graded": true,
        "rubricWeight": 40
      },
      {
        "session": 6,
        "page": 5,
        "prompt": "Registro diario del Tracker (21 casillas).",
        "type": "table",
        "graded": false
      },
      {
        "session": 8,
        "page": 6,
        "prompt": "El día que fallé y cómo rediseño mi sistema.",
        "type": "free_text",
        "graded": true,
        "rubricWeight": 30
      }
    ]
  },
  "ls1-4": {
    "id": "ls1-4",
    "level": "seedling",
    "quarter": "Q3",
    "status": "draft",
    "authoring": "ai_assisted",
    "teacherGuide": {
      "essentialQuestion": "¿Qué hace que una historia se recuerde y otra se olvide en el mismo minuto?",
      "floridaStandards": [
        "Communication",
        "Self-Direction",
        "Creativity"
      ],
      "verse": {
        "ref": "Efesios 4:29",
        "text": "Ninguna palabra corrompida salga de vuestra boca, sino la que sea buena para la necesaria edificación."
      },
      "closingVerse": null,
      "sessionCount": 8,
      "sessionLengthMin": 60
    },
    "sessions": [
      {
        "number": 1,
        "title": "Por qué unas historias se recuerdan",
        "objective": "Identificar la estructura de una historia memorable.",
        "keyActivity": "Contraste de dos versiones del mismo hecho."
      },
      {
        "number": 2,
        "title": "Elegir el episodio correcto",
        "objective": "Seleccionar el episodio al servicio de una idea.",
        "keyActivity": "Selección con criterio de idea central."
      },
      {
        "number": 3,
        "title": "La estructura de 2 minutos",
        "objective": "Aprender situación-tensión-decisión-cambio.",
        "keyActivity": "Identificación de las 4 partes en el ejemplo."
      },
      {
        "number": 4,
        "title": "Primer borrador completo",
        "objective": "Redactar el guion completo.",
        "keyActivity": "Escritura guiada de 4 párrafos."
      },
      {
        "number": 5,
        "title": "Ensayo por parejas",
        "objective": "Recibir feedback específico.",
        "keyActivity": "Presentación y feedback estructurado."
      },
      {
        "number": 6,
        "title": "Voz, ritmo y cuerpo",
        "objective": "Ensayar con atención a la entrega oral.",
        "keyActivity": "Ensayo grabado para autoescucha."
      },
      {
        "number": 7,
        "title": "Conexión con el Proyecto BOLD",
        "objective": "Enlazar la historia con el BOLD Project.",
        "keyActivity": "Reflexión sobre el enlace narrativo."
      },
      {
        "number": 8,
        "title": "Presentación final",
        "objective": "Defender la historia ante el grupo.",
        "keyActivity": "Presentación de 2 min «My Story in 2 Minutes»."
      }
    ],
    "studentNotebook": [
      {
        "session": 1,
        "page": 1,
        "prompt": "Mis 3 episodios candidatos.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 2,
        "page": 2,
        "prompt": "El que elijo y la idea central.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 3,
        "page": 4,
        "prompt": "Mi guion — 4 partes.",
        "type": "structured_form",
        "graded": true,
        "rubricWeight": 40
      },
      {
        "session": 5,
        "page": 5,
        "prompt": "Feedback de mi compañero.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 8,
        "page": 6,
        "prompt": "Reflexión final.",
        "type": "free_text",
        "graded": true,
        "rubricWeight": 30
      }
    ]
  },
  "ls1-5": {
    "id": "ls1-5",
    "level": "seedling",
    "quarter": null,
    "status": "draft",
    "authoring": "ai_assisted",
    "teacherGuide": {
      "essentialQuestion": "¿A dónde se va mi dinero si no le digo a dónde ir?",
      "floridaStandards": [
        "Personal Financial Literacy",
        "Self-Direction"
      ],
      "verse": {
        "ref": "Proverbios 21:20",
        "text": "Tesoro precioso y aceite hay en la casa del sabio; pero el hombre insensato todo lo disipa."
      },
      "closingVerse": null,
      "sessionCount": 6,
      "sessionLengthMin": 60
    },
    "sessions": [
      {
        "number": 1,
        "title": "¿A dónde se va mi dinero? (semana 1)",
        "objective": "Registrar ingresos y gastos reales.",
        "keyActivity": "Registro diario de dos semanas."
      },
      {
        "number": 2,
        "title": "¿A dónde se va mi dinero? (semana 2)",
        "objective": "Continuar el registro real.",
        "keyActivity": "Registro diario."
      },
      {
        "number": 3,
        "title": "Diseño de mi presupuesto",
        "objective": "Diseñar presupuesto de 3 categorías sobre datos reales.",
        "keyActivity": "Presupuesto necesidad/deseo/ahorro."
      },
      {
        "number": 4,
        "title": "Segunda quincena de registro",
        "objective": "Comparar presupuesto con realidad.",
        "keyActivity": "Registro comparado."
      },
      {
        "number": 5,
        "title": "Ajuste del presupuesto",
        "objective": "Corregir el presupuesto con evidencia real.",
        "keyActivity": "Checkpoint de ajuste."
      },
      {
        "number": 6,
        "title": "Cierre y reflexión",
        "objective": "Argumentar una decisión de gasto/ahorro.",
        "keyActivity": "Reflexión + validación de un adulto."
      }
    ],
    "studentNotebook": [
      {
        "session": 1,
        "page": 1,
        "prompt": "Registro semana 1.",
        "type": "table",
        "graded": false
      },
      {
        "session": 3,
        "page": 2,
        "prompt": "Mi presupuesto de 3 categorías.",
        "type": "structured_form",
        "graded": true,
        "rubricWeight": 40
      },
      {
        "session": 6,
        "page": 3,
        "prompt": "Reflexión final + validación.",
        "type": "free_text",
        "graded": true,
        "rubricWeight": 30
      }
    ]
  },
  "ls2-1": {
    "id": "ls2-1",
    "level": "explorer",
    "quarter": "Q1",
    "status": "draft",
    "authoring": "ai_assisted",
    "teacherGuide": {
      "essentialQuestion": "¿El carácter se tiene, o se construye?",
      "floridaStandards": [
        "Self-Direction",
        "Resilience",
        "Communication"
      ],
      "verse": {
        "ref": "Gálatas 5:22-23",
        "text": "El fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza."
      },
      "closingVerse": null,
      "sessionCount": 8,
      "sessionLengthMin": 60
    },
    "sessions": [
      {
        "number": 1,
        "title": "Personalidad vs. carácter",
        "objective": "Diferenciar tendencia de decisión sostenida.",
        "keyActivity": "Análisis de una decisión propia reciente."
      },
      {
        "number": 2,
        "title": "Un caso de carácter puesto a prueba",
        "objective": "Analizar un caso ajeno bajo presión.",
        "keyActivity": "Discusión guiada de un caso real."
      },
      {
        "number": 3,
        "title": "Mi fortaleza y mi área de crecimiento",
        "objective": "Autoevaluar con evidencia concreta.",
        "keyActivity": "Ficha de autoevaluación."
      },
      {
        "number": 4,
        "title": "Contraste con la mirada de otros",
        "objective": "Contrastar autopercepción con percepción ajena.",
        "keyActivity": "Feedback de 2 personas cercanas."
      },
      {
        "number": 5,
        "title": "Diseño del plan",
        "objective": "Diseñar práctica de 6 semanas medible.",
        "keyActivity": "Plan con indicador de medición."
      },
      {
        "number": 6,
        "title": "Ejecución — semana 1-2",
        "objective": "Sostener la práctica.",
        "keyActivity": "Puesta en común quincenal."
      },
      {
        "number": 7,
        "title": "Ejecución — semana 3-4",
        "objective": "Sostener la práctica.",
        "keyActivity": "Puesta en común quincenal."
      },
      {
        "number": 8,
        "title": "Evaluación con evidencia",
        "objective": "Evaluar el avance con datos, no impresión.",
        "keyActivity": "Presentación de evidencia incluidos los fallos."
      }
    ],
    "studentNotebook": [
      {
        "session": 1,
        "page": 1,
        "prompt": "Mi decisión reciente que revela carácter.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 3,
        "page": 2,
        "prompt": "Mi fortaleza y área de crecimiento, con evidencia.",
        "type": "table",
        "graded": false
      },
      {
        "session": 4,
        "page": 3,
        "prompt": "Lo que dos personas ven en mí.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 5,
        "page": 4,
        "prompt": "Mi plan de 6 semanas.",
        "type": "structured_form",
        "graded": true,
        "rubricWeight": 40
      },
      {
        "session": 8,
        "page": 5,
        "prompt": "Evaluación final con evidencia.",
        "type": "free_text",
        "graded": true,
        "rubricWeight": 30
      }
    ]
  },
  "ls2-2": {
    "id": "ls2-2",
    "level": "explorer",
    "quarter": "Q3",
    "status": "draft",
    "authoring": "ai_assisted",
    "teacherGuide": {
      "essentialQuestion": "¿El conflicto es el problema, o es cómo se maneja?",
      "floridaStandards": [
        "Collaboration",
        "Problem Solving",
        "Communication"
      ],
      "verse": {
        "ref": "Mateo 18:15",
        "text": "Si tu hermano pecare contra ti, ve y repréndele estando tú y él solos."
      },
      "closingVerse": null,
      "sessionCount": 8,
      "sessionLengthMin": 60
    },
    "sessions": [
      {
        "number": 1,
        "title": "Posición vs. interés",
        "objective": "Diferenciar posición de interés.",
        "keyActivity": "Ejemplo de la naranja + análisis de conflicto propio."
      },
      {
        "number": 2,
        "title": "Los estilos ante el conflicto",
        "objective": "Identificar el propio estilo habitual.",
        "keyActivity": "Autodiagnóstico de estilo."
      },
      {
        "number": 3,
        "title": "El guion de la conversación difícil",
        "objective": "Aprender el guion de 4 pasos.",
        "keyActivity": "Redacción del guion para un caso real."
      },
      {
        "number": 4,
        "title": "Juego de roles",
        "objective": "Practicar el guion en simulación.",
        "keyActivity": "Práctica cruzada con feedback."
      },
      {
        "number": 5,
        "title": "Elección del conflicto real",
        "objective": "Elegir un conflicto real y manejable.",
        "keyActivity": "Validación del profesor."
      },
      {
        "number": 6,
        "title": "Intento de resolución — parte 1",
        "objective": "Ejecutar el guion en la vida real.",
        "keyActivity": "Registro del proceso."
      },
      {
        "number": 7,
        "title": "Intento de resolución — parte 2",
        "objective": "Continuar el proceso real.",
        "keyActivity": "Registro del proceso."
      },
      {
        "number": 8,
        "title": "Evaluación y cierre",
        "objective": "Evaluar qué funcionó del guion.",
        "keyActivity": "Documento final + reflexión honesta."
      }
    ],
    "studentNotebook": [
      {
        "session": 1,
        "page": 1,
        "prompt": "Mi conflicto — posición e interés de cada parte.",
        "type": "table",
        "graded": false
      },
      {
        "session": 2,
        "page": 2,
        "prompt": "Mi estilo habitual.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 3,
        "page": 3,
        "prompt": "Mi guion de conversación.",
        "type": "structured_form",
        "graded": false
      },
      {
        "session": 5,
        "page": 4,
        "prompt": "El conflicto real que elijo resolver.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 8,
        "page": 5,
        "prompt": "Registro del proceso + evaluación final.",
        "type": "free_text",
        "graded": true,
        "rubricWeight": 30
      }
    ]
  },
  "ls2-3": {
    "id": "ls2-3",
    "level": "explorer",
    "quarter": "Q2",
    "status": "draft",
    "authoring": "ai_assisted",
    "teacherGuide": {
      "essentialQuestion": "¿Cómo sé si lo que estoy viendo es verdad, opinión o manipulación?",
      "floridaStandards": [
        "Critical Thinking",
        "Digital Literacy",
        "Communication"
      ],
      "verse": {
        "ref": "Proverbios 18:17",
        "text": "El primero que aboga por su causa parece justo; pero viene su adversario y le descubre."
      },
      "closingVerse": null,
      "sessionCount": 8,
      "sessionLengthMin": 60
    },
    "sessions": [
      {
        "number": 1,
        "title": "Hecho, opinión, manipulación",
        "objective": "Clasificar tipos de afirmación.",
        "keyActivity": "Clasificación de 5 frases en grupo."
      },
      {
        "number": 2,
        "title": "Rastrear el origen",
        "objective": "Investigar quién está detrás de una fuente.",
        "keyActivity": "Ficha de origen de una fuente propia."
      },
      {
        "number": 3,
        "title": "Las técnicas de manipulación",
        "objective": "Identificar 3 técnicas comunes.",
        "keyActivity": "Catálogo con ejemplo propio de cada una."
      },
      {
        "number": 4,
        "title": "Las tres preguntas de verificación",
        "objective": "Aplicar el criterio de verificación.",
        "keyActivity": "Práctica guiada con un caso."
      },
      {
        "number": 5,
        "title": "Elección del contenido",
        "objective": "Elegir una pieza real para analizar.",
        "keyActivity": "Validación del profesor."
      },
      {
        "number": 6,
        "title": "Análisis en profundidad",
        "objective": "Aplicar las 3 preguntas por escrito.",
        "keyActivity": "Redacción del análisis."
      },
      {
        "number": 7,
        "title": "Aplicación al Proyecto Científico I",
        "objective": "Verificar las fuentes de su propia investigación.",
        "keyActivity": "Aplicación directa al proyecto ancla de Q2."
      },
      {
        "number": 8,
        "title": "Presentación y cierre",
        "objective": "Defender el análisis.",
        "keyActivity": "Defensa de 3-4 min."
      }
    ],
    "studentNotebook": [
      {
        "session": 1,
        "page": 1,
        "prompt": "Clasificación de las 5 frases.",
        "type": "table",
        "graded": false
      },
      {
        "session": 2,
        "page": 2,
        "prompt": "Origen de una fuente que consumo.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 4,
        "page": 3,
        "prompt": "Práctica de las 3 preguntas.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 6,
        "page": 4,
        "prompt": "Mi análisis completo.",
        "type": "structured_form",
        "graded": true,
        "rubricWeight": 40
      },
      {
        "session": 7,
        "page": 5,
        "prompt": "Verificación de las fuentes de mi Proyecto Científico I.",
        "type": "free_text",
        "graded": true,
        "rubricWeight": 30
      }
    ]
  },
  "ls2-5": {
    "id": "ls2-5",
    "level": "explorer",
    "quarter": "Q1-Q2",
    "status": "draft",
    "authoring": "ai_assisted",
    "teacherGuide": {
      "essentialQuestion": "Si todo lo que tengo me fue confiado, ¿lo estoy administrando o solo consumiendo?",
      "floridaStandards": [
        "Personal Financial Literacy",
        "Self-Direction",
        "Professionalism"
      ],
      "verse": {
        "ref": "1 Corintios 4:2",
        "text": "Ahora bien, se requiere de los administradores, que cada uno sea hallado fiel."
      },
      "closingVerse": null,
      "sessionCount": 8,
      "sessionLengthMin": 60
    },
    "sessions": [
      {
        "number": 1,
        "title": "Poseer vs. administrar",
        "objective": "Diferenciar posesión de administración.",
        "keyActivity": "Identificación de algo tratado como propiedad absoluta."
      },
      {
        "number": 2,
        "title": "Auditoría de mis 4 recursos",
        "objective": "Auditar tiempo, dinero, talento, posesiones.",
        "keyActivity": "Ficha de estado actual de cada recurso."
      },
      {
        "number": 3,
        "title": "El mejor y el peor administrado",
        "objective": "Seleccionar con evidencia.",
        "keyActivity": "Selección justificada."
      },
      {
        "number": 4,
        "title": "Principios de mayordomía fiel",
        "objective": "Aplicar el concepto de fidelidad al caso propio.",
        "keyActivity": "Discusión + aplicación escrita."
      },
      {
        "number": 5,
        "title": "Diseño del plan",
        "objective": "Diseñar plan de 6 semanas medible.",
        "keyActivity": "Plan con indicador numérico."
      },
      {
        "number": 6,
        "title": "Ejecución — semana 1-2",
        "objective": "Sostener el plan.",
        "keyActivity": "Seguimiento quincenal."
      },
      {
        "number": 7,
        "title": "Ejecución — semana 3-4",
        "objective": "Sostener el plan.",
        "keyActivity": "Seguimiento quincenal."
      },
      {
        "number": 8,
        "title": "Evaluación con datos",
        "objective": "Evaluar el cambio con datos reales.",
        "keyActivity": "Presentación de evidencia cuantificable."
      }
    ],
    "studentNotebook": [
      {
        "session": 1,
        "page": 1,
        "prompt": "Algo que trato como mío absoluto.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 2,
        "page": 2,
        "prompt": "Auditoría de mis 4 recursos.",
        "type": "table",
        "graded": false
      },
      {
        "session": 3,
        "page": 3,
        "prompt": "El mejor y el peor administrado, con evidencia.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 5,
        "page": 4,
        "prompt": "Mi plan de 6 semanas.",
        "type": "structured_form",
        "graded": true,
        "rubricWeight": 40
      },
      {
        "session": 8,
        "page": 5,
        "prompt": "Evaluación final con datos.",
        "type": "free_text",
        "graded": true,
        "rubricWeight": 30
      }
    ]
  },
  "ls2-4": {
    "id": "ls2-4",
    "level": "explorer",
    "quarter": null,
    "status": "draft",
    "authoring": "ai_assisted",
    "teacherGuide": {
      "essentialQuestion": "¿Estoy cuidando mi cuerpo como un templo, o como una máquina que exijo sin mantenimiento?",
      "floridaStandards": [
        "Self-Direction",
        "Resilience"
      ],
      "verse": {
        "ref": "1 Corintios 6:19-20",
        "text": "¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo...?"
      },
      "closingVerse": null,
      "sessionCount": 6,
      "sessionLengthMin": 60
    },
    "sessions": [
      {
        "number": 1,
        "title": "Auditoría de la semana",
        "objective": "Registrar sueño, comida, movimiento, pantallas.",
        "keyActivity": "Registro de 7 días."
      },
      {
        "number": 2,
        "title": "El eje que más me afecta",
        "objective": "Seleccionar un eje con evidencia.",
        "keyActivity": "Selección justificada del registro."
      },
      {
        "number": 3,
        "title": "Diseño del plan de 4 semanas",
        "objective": "Diseñar plan centrado en un solo eje.",
        "keyActivity": "Plan con acción concreta."
      },
      {
        "number": 4,
        "title": "Primera semana de ejecución",
        "objective": "Ajustar tempranamente si es inviable.",
        "keyActivity": "Checkpoint temprano."
      },
      {
        "number": 5,
        "title": "Ejecución con seguimiento",
        "objective": "Sostener el plan.",
        "keyActivity": "Registro semanal."
      },
      {
        "number": 6,
        "title": "Evaluación y cierre",
        "objective": "Evaluar con datos concretos.",
        "keyActivity": "Reflexión + validación de un adulto."
      }
    ],
    "studentNotebook": [
      {
        "session": 1,
        "page": 1,
        "prompt": "Mi registro de 7 días.",
        "type": "table",
        "graded": false
      },
      {
        "session": 2,
        "page": 2,
        "prompt": "El eje que elijo y por qué.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 3,
        "page": 3,
        "prompt": "Mi plan de 4 semanas.",
        "type": "structured_form",
        "graded": true,
        "rubricWeight": 40
      },
      {
        "session": 6,
        "page": 4,
        "prompt": "Evaluación final.",
        "type": "free_text",
        "graded": true,
        "rubricWeight": 30
      }
    ]
  },
  "ls3-1": {
    "id": "ls3-1",
    "level": "builder",
    "quarter": "Q3",
    "status": "draft",
    "authoring": "ai_assisted",
    "teacherGuide": {
      "essentialQuestion": "¿Un buen líder hace el trabajo mejor que nadie, o hace que el equipo lo haga bien sin él?",
      "floridaStandards": [
        "Leadership",
        "Communication",
        "Collaboration"
      ],
      "verse": {
        "ref": "1 Pedro 5:2-3",
        "text": "Apacentad la grey de Dios... siendo ejemplos."
      },
      "closingVerse": null,
      "sessionCount": 8,
      "sessionLengthMin": 60
    },
    "sessions": [
      {
        "number": 1,
        "title": "Dirigir no es hacer todo uno mismo",
        "objective": "Diferenciar dirigir de ejecutar solo.",
        "keyActivity": "Análisis de un episodio de liderazgo (propio o ajeno)."
      },
      {
        "number": 2,
        "title": "A quién voy a dirigir",
        "objective": "Perfilar al grupo destinatario.",
        "keyActivity": "Ficha de perfil del grupo."
      },
      {
        "number": 3,
        "title": "Diseño del plan de sesión",
        "objective": "Diseñar objetivo, apertura, cuerpo, cierre.",
        "keyActivity": "Guion de sesión."
      },
      {
        "number": 4,
        "title": "Qué puede salir mal",
        "objective": "Anticipar escenarios de fallo.",
        "keyActivity": "Plan B para 2 escenarios."
      },
      {
        "number": 5,
        "title": "Ensayo del plan",
        "objective": "Simular ante compañeros difíciles.",
        "keyActivity": "Simulación de 10-15 min."
      },
      {
        "number": 6,
        "title": "Dirección real — sesión 1",
        "objective": "Ejecutar el taller/mentoría real.",
        "keyActivity": "Ejecución + registro."
      },
      {
        "number": 7,
        "title": "Dirección real — sesión 2",
        "objective": "Continuar la ejecución real.",
        "keyActivity": "Ejecución + registro."
      },
      {
        "number": 8,
        "title": "Feedback de los participantes",
        "objective": "Analizar el propio liderazgo con evidencia.",
        "keyActivity": "Análisis del feedback recibido."
      }
    ],
    "studentNotebook": [
      {
        "session": 1,
        "page": 1,
        "prompt": "Mi episodio de liderazgo (o falta de él).",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 2,
        "page": 2,
        "prompt": "Perfil de mi grupo.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 3,
        "page": 3,
        "prompt": "Mi guion de sesión.",
        "type": "structured_form",
        "graded": true,
        "rubricWeight": 40
      },
      {
        "session": 4,
        "page": 4,
        "prompt": "Mis planes B.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 8,
        "page": 5,
        "prompt": "Análisis del feedback y reflexión final.",
        "type": "free_text",
        "graded": true,
        "rubricWeight": 30
      }
    ]
  },
  "ls3-2": {
    "id": "ls3-2",
    "level": "builder",
    "quarter": "Q1",
    "status": "draft",
    "authoring": "ai_assisted",
    "teacherGuide": {
      "essentialQuestion": "¿Qué necesidad real puedo resolver, y quién pagaría (o agradecería) que la resolviera?",
      "floridaStandards": [
        "Critical Thinking",
        "Creativity",
        "Communication"
      ],
      "verse": {
        "ref": "Proverbios 24:3-4",
        "text": "Con sabiduría se edificará la casa, y con prudencia se afirmará."
      },
      "closingVerse": null,
      "sessionCount": 8,
      "sessionLengthMin": 60
    },
    "sessions": [
      {
        "number": 1,
        "title": "Necesidad real, no idea abstracta",
        "objective": "Observar necesidades reales del entorno.",
        "keyActivity": "Observación de 3 necesidades."
      },
      {
        "number": 2,
        "title": "De la necesidad a la idea",
        "objective": "Generar 3 ideas de solución.",
        "keyActivity": "Generación de ideas antes de aferrarse a la primera."
      },
      {
        "number": 3,
        "title": "Validar antes de construir",
        "objective": "Diseñar guion de entrevista.",
        "keyActivity": "Guion de 3 preguntas abiertas."
      },
      {
        "number": 4,
        "title": "Resultados de la validación",
        "objective": "Sintetizar lo que dijeron 3 personas.",
        "keyActivity": "Puesta en común."
      },
      {
        "number": 5,
        "title": "Decisión final",
        "objective": "Confirmar o ajustar la idea con evidencia.",
        "keyActivity": "Validación por el profesor."
      },
      {
        "number": 6,
        "title": "El plan de 1-2 páginas",
        "objective": "Redactar el plan completo.",
        "keyActivity": "Estructura problema-solución-sostenibilidad-pasos."
      },
      {
        "number": 7,
        "title": "Primeros pasos",
        "objective": "Ejecutar al menos una acción real.",
        "keyActivity": "Documentación en tiempo real."
      },
      {
        "number": 8,
        "title": "Presentación y cierre",
        "objective": "Defender el plan y la evidencia.",
        "keyActivity": "Defensa breve."
      }
    ],
    "studentNotebook": [
      {
        "session": 1,
        "page": 1,
        "prompt": "Mis 3 necesidades observadas.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 3,
        "page": 2,
        "prompt": "Mi guion de entrevista.",
        "type": "structured_form",
        "graded": false
      },
      {
        "session": 4,
        "page": 3,
        "prompt": "Lo que dijeron las 3 personas.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 6,
        "page": 4,
        "prompt": "Mi plan de 1-2 páginas.",
        "type": "structured_form",
        "graded": true,
        "rubricWeight": 40
      },
      {
        "session": 8,
        "page": 5,
        "prompt": "Reflexión final.",
        "type": "free_text",
        "graded": true,
        "rubricWeight": 30
      }
    ]
  },
  "ls3-3": {
    "id": "ls3-3",
    "level": "builder",
    "quarter": "Q2",
    "status": "draft",
    "authoring": "ai_assisted",
    "teacherGuide": {
      "essentialQuestion": "Cuando dos cosas buenas entran en conflicto, ¿cómo decido?",
      "floridaStandards": [
        "Critical Thinking",
        "Problem Solving",
        "Communication"
      ],
      "verse": {
        "ref": "Santiago 1:5",
        "text": "Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios."
      },
      "closingVerse": null,
      "sessionCount": 8,
      "sessionLengthMin": 60
    },
    "sessions": [
      {
        "number": 1,
        "title": "Dilema real vs. decisión obvia",
        "objective": "Distinguir dilemas genuinos.",
        "keyActivity": "Clasificación de 4 casos."
      },
      {
        "number": 2,
        "title": "El marco de tres pasos",
        "objective": "Aprender hechos-principios-consecuencias.",
        "keyActivity": "Aplicación guiada a un caso modelo."
      },
      {
        "number": 3,
        "title": "Práctica con un segundo caso",
        "objective": "Aplicar el marco de forma autónoma.",
        "keyActivity": "Análisis por parejas."
      },
      {
        "number": 4,
        "title": "El coste de la opción no elegida",
        "objective": "Reconocer el coste de decidir.",
        "keyActivity": "Argumentación escrita."
      },
      {
        "number": 5,
        "title": "Elección del dilema propio",
        "objective": "Elegir un dilema real y actual.",
        "keyActivity": "Validación del profesor."
      },
      {
        "number": 6,
        "title": "Análisis en profundidad",
        "objective": "Aplicar el marco completo.",
        "keyActivity": "Redacción del análisis."
      },
      {
        "number": 7,
        "title": "Aplicación al Proyecto Científico II",
        "objective": "Identificar una decisión ética real de su investigación.",
        "keyActivity": "Aplicación directa al proyecto ancla de Q2."
      },
      {
        "number": 8,
        "title": "Presentación y cierre",
        "objective": "Defender el análisis.",
        "keyActivity": "Defensa breve."
      }
    ],
    "studentNotebook": [
      {
        "session": 1,
        "page": 1,
        "prompt": "Clasificación de los 4 casos.",
        "type": "table",
        "graded": false
      },
      {
        "session": 4,
        "page": 3,
        "prompt": "Argumentación con el coste reconocido.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 6,
        "page": 4,
        "prompt": "Mi análisis completo.",
        "type": "structured_form",
        "graded": true,
        "rubricWeight": 40
      },
      {
        "session": 7,
        "page": 5,
        "prompt": "La decisión ética de mi Proyecto Científico II.",
        "type": "free_text",
        "graded": true,
        "rubricWeight": 30
      }
    ]
  },
  "ls3-4": {
    "id": "ls3-4",
    "level": "builder",
    "quarter": "Q3",
    "status": "draft",
    "authoring": "ai_assisted",
    "teacherGuide": {
      "essentialQuestion": "¿Acompañar a alguien es resolverle el problema, o ayudarle a resolverlo él mismo?",
      "floridaStandards": [
        "Leadership",
        "Collaboration",
        "Communication",
        "Self-Direction"
      ],
      "verse": {
        "ref": "2 Timoteo 2:2",
        "text": "Esto encarga a hombres fieles que sean idóneos para enseñar también a otros."
      },
      "closingVerse": null,
      "sessionCount": 8,
      "sessionLengthMin": 60
    },
    "sessions": [
      {
        "number": 1,
        "title": "Mentoría vs. resolver el problema",
        "objective": "Diferenciar acompañar de resolver.",
        "keyActivity": "Diagnóstico comparativo."
      },
      {
        "number": 2,
        "title": "A quién voy a acompañar",
        "objective": "Seleccionar mentorizado y área.",
        "keyActivity": "Selección con consentimiento adulto si aplica."
      },
      {
        "number": 3,
        "title": "Escucha antes de aconsejar",
        "objective": "Practicar escucha activa.",
        "keyActivity": "Práctica por parejas sin aconsejar."
      },
      {
        "number": 4,
        "title": "Diseño del plan de encuentros",
        "objective": "Diseñar 4-6 encuentros con objetivo.",
        "keyActivity": "Estructura de encuentros."
      },
      {
        "number": 5,
        "title": "Primer encuentro real",
        "objective": "Ejecutar y ajustar.",
        "keyActivity": "Registro del primer encuentro."
      },
      {
        "number": 6,
        "title": "Encuentro 2",
        "objective": "Continuar el acompañamiento.",
        "keyActivity": "Registro de avance."
      },
      {
        "number": 7,
        "title": "Encuentro 3",
        "objective": "Continuar el acompañamiento.",
        "keyActivity": "Registro de avance."
      },
      {
        "number": 8,
        "title": "Evaluación y cierre",
        "objective": "Evaluar el avance del mentorizado.",
        "keyActivity": "Evidencia + reflexión sobre el propio rol."
      }
    ],
    "studentNotebook": [
      {
        "session": 1,
        "page": 1,
        "prompt": "Mi episodio de \"me resolvieron\" vs. \"me acompañaron\".",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 2,
        "page": 2,
        "prompt": "A quién voy a acompañar y en qué.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 4,
        "page": 4,
        "prompt": "Mi plan de encuentros.",
        "type": "structured_form",
        "graded": true,
        "rubricWeight": 40
      },
      {
        "session": 8,
        "page": 8,
        "prompt": "Evaluación final.",
        "type": "free_text",
        "graded": true,
        "rubricWeight": 30
      }
    ]
  },
  "ls3-5": {
    "id": "ls3-5",
    "level": "builder",
    "quarter": null,
    "status": "draft",
    "authoring": "ai_assisted",
    "teacherGuide": {
      "essentialQuestion": "¿Cómo se ve un día real trabajando en lo que creo que quiero hacer?",
      "floridaStandards": [
        "Career Exploration and Planning"
      ],
      "verse": {
        "ref": "Proverbios 3:5-6",
        "text": "Fíate de Jehová de todo tu corazón... y él enderezará tus veredas."
      },
      "closingVerse": null,
      "sessionCount": 6,
      "sessionLengthMin": 60
    },
    "sessions": [
      {
        "number": 1,
        "title": "Mi vocación de interés",
        "objective": "Diagnosticar lo que cree saber, sin investigar aún.",
        "keyActivity": "Diagnóstico inicial."
      },
      {
        "number": 2,
        "title": "Investigación con fuentes reales",
        "objective": "Investigar formación, tareas y retos reales.",
        "keyActivity": "Ficha de investigación."
      },
      {
        "number": 3,
        "title": "Preparar la entrevista",
        "objective": "Diseñar guion de entrevista a un profesional.",
        "keyActivity": "Guion de entrevista."
      },
      {
        "number": 4,
        "title": "Ensayo de la entrevista",
        "objective": "Ensayar antes de la entrevista real.",
        "keyActivity": "Ensayo con un compañero."
      },
      {
        "number": 5,
        "title": "Ejecución de la entrevista real",
        "objective": "Realizar la entrevista.",
        "keyActivity": "Entrevista registrada."
      },
      {
        "number": 6,
        "title": "Contraste y conclusión",
        "objective": "Contrastar imagen previa con lo descubierto.",
        "keyActivity": "Reflexión final honesta."
      }
    ],
    "studentNotebook": [
      {
        "session": 1,
        "page": 1,
        "prompt": "Lo que creo saber.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 2,
        "page": 2,
        "prompt": "Mi investigación.",
        "type": "structured_form",
        "graded": false
      },
      {
        "session": 3,
        "page": 3,
        "prompt": "Mi guion de entrevista.",
        "type": "structured_form",
        "graded": true,
        "rubricWeight": 40
      },
      {
        "session": 6,
        "page": 6,
        "prompt": "Mi conclusión honesta.",
        "type": "free_text",
        "graded": true,
        "rubricWeight": 30
      }
    ]
  },
  "ls4-1": {
    "id": "ls4-1",
    "level": "launch",
    "quarter": "Q1",
    "status": "draft",
    "authoring": "ai_assisted",
    "teacherGuide": {
      "essentialQuestion": "Si pudieras leer hoy lo que se dirá de ti dentro de 20 años, ¿qué querrías que dijera?",
      "floridaStandards": [
        "Self-Direction",
        "Communication",
        "Critical Thinking"
      ],
      "verse": {
        "ref": "Filipenses 1:6",
        "text": "El que comenzó en vosotros la buena obra, la perfeccionará."
      },
      "closingVerse": null,
      "sessionCount": 8,
      "sessionLengthMin": 60
    },
    "sessions": [
      {
        "number": 1,
        "title": "Repaso de cuatro años",
        "objective": "Construir línea de tiempo con hitos reales.",
        "keyActivity": "Revisión de la carpeta LIFE SKILLS de 3 años previos."
      },
      {
        "number": 2,
        "title": "Legado vs. lista de metas",
        "objective": "Articular visión de legado a 20 años.",
        "keyActivity": "Contraste meta/legado con ejemplos."
      },
      {
        "number": 3,
        "title": "Los hitos que sostienen mi visión",
        "objective": "Seleccionar 3-4 hitos reveladores.",
        "keyActivity": "Selección justificada de la línea de tiempo."
      },
      {
        "number": 4,
        "title": "De la síntesis al Personal Statement",
        "objective": "Estructurar el ensayo.",
        "keyActivity": "Estructura de apertura-desarrollo-cierre."
      },
      {
        "number": 5,
        "title": "Borrador completo",
        "objective": "Redactar 500-650 palabras.",
        "keyActivity": "Redacción del primer borrador."
      },
      {
        "number": 6,
        "title": "Feedback estructurado",
        "objective": "Recibir feedback de un adulto.",
        "keyActivity": "Sesión de feedback con plantilla."
      },
      {
        "number": 7,
        "title": "Revisión",
        "objective": "Incorporar el feedback.",
        "keyActivity": "Segundo borrador."
      },
      {
        "number": 8,
        "title": "Cierre y resumen curricular",
        "objective": "Entregar Personal Statement + resumen.",
        "keyActivity": "Entrega final formato Common App."
      }
    ],
    "studentNotebook": [
      {
        "session": 1,
        "page": 1,
        "prompt": "Mi línea de tiempo de 4 años.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 2,
        "page": 2,
        "prompt": "Mi visión de legado a 20 años.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 3,
        "page": 3,
        "prompt": "Los 3-4 hitos que la sostienen.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 5,
        "page": 5,
        "prompt": "Mi primer borrador.",
        "type": "free_text",
        "graded": true,
        "rubricWeight": 40
      },
      {
        "session": 8,
        "page": 8,
        "prompt": "Mi resumen curricular de actividades.",
        "type": "free_text",
        "graded": true,
        "rubricWeight": 30
      }
    ]
  },
  "ls4-2": {
    "id": "ls4-2",
    "level": "launch",
    "quarter": "Q2",
    "status": "draft",
    "authoring": "ai_assisted",
    "teacherGuide": {
      "essentialQuestion": "¿Qué problema real puedo dejar mejor de lo que lo encontré, con lo que ya sé hacer?",
      "floridaStandards": [
        "Leadership",
        "Executive Function",
        "Collaboration",
        "Communication"
      ],
      "verse": {
        "ref": "Josué 1:9",
        "text": "Esfuérzate y sé valiente... porque Jehová tu Dios estará contigo."
      },
      "closingVerse": null,
      "sessionCount": 8,
      "sessionLengthMin": 60
    },
    "sessions": [
      {
        "number": 1,
        "title": "De proyectos pequeños a impacto institucional",
        "objective": "Reconocer el límite de escala previo.",
        "keyActivity": "Repaso del mayor proyecto hasta ahora."
      },
      {
        "number": 2,
        "title": "Selección del problema",
        "objective": "Elegir un problema real con evidencia.",
        "keyActivity": "2-3 problemas candidatos."
      },
      {
        "number": 3,
        "title": "Metodología y alcance",
        "objective": "Definir qué sí y qué no se logrará.",
        "keyActivity": "Definición explícita de alcance."
      },
      {
        "number": 4,
        "title": "Cronograma de hitos",
        "objective": "Planificar fechas y entregas parciales.",
        "keyActivity": "Cronograma con hitos."
      },
      {
        "number": 5,
        "title": "Validación del diseño",
        "objective": "Validar el plan antes de ejecutar.",
        "keyActivity": "Revisión con mentor/coordinador."
      },
      {
        "number": 6,
        "title": "Ejecución — primera mitad",
        "objective": "Avanzar el proyecto real.",
        "keyActivity": "Registro de avance y obstáculos."
      },
      {
        "number": 7,
        "title": "Ajuste a mitad de proyecto",
        "objective": "Replanificar formalmente si hace falta.",
        "keyActivity": "Sesión de ajuste normalizado."
      },
      {
        "number": 8,
        "title": "Cierre de ejecución",
        "objective": "Gestionar la carta de impacto.",
        "keyActivity": "Evidencias completas + gestión activa de la carta."
      }
    ],
    "studentNotebook": [
      {
        "session": 1,
        "page": 1,
        "prompt": "Mi mayor proyecto hasta ahora y su límite.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 2,
        "page": 2,
        "prompt": "Mis 2-3 problemas candidatos.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 4,
        "page": 4,
        "prompt": "Mi cronograma de hitos.",
        "type": "structured_form",
        "graded": false
      },
      {
        "session": 6,
        "page": 6,
        "prompt": "Registro de la primera mitad.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 8,
        "page": 8,
        "prompt": "Cierre y gestión de la carta de impacto.",
        "type": "free_text",
        "graded": true,
        "rubricWeight": 40
      }
    ]
  },
  "ls4-3": {
    "id": "ls4-3",
    "level": "launch",
    "quarter": "Q3",
    "status": "draft",
    "authoring": "ai_assisted",
    "teacherGuide": {
      "essentialQuestion": "¿Qué ruta después de Chanak es realista para mí, no solo la que suena mejor?",
      "floridaStandards": [
        "Personal Financial Literacy",
        "Digital Literacy",
        "Critical Thinking"
      ],
      "verse": {
        "ref": "Lucas 14:28",
        "text": "¿Quién de vosotros, queriendo edificar una torre, no se sienta primero y calcula los gastos?"
      },
      "closingVerse": null,
      "sessionCount": 8,
      "sessionLengthMin": 60
    },
    "sessions": [
      {
        "number": 1,
        "title": "Tres rutas reales",
        "objective": "Investigar 3 rutas con datos verificables.",
        "keyActivity": "Investigación de universidad, FP y entrada laboral."
      },
      {
        "number": 2,
        "title": "El coste real de cada ruta",
        "objective": "Recoger cifras reales de coste.",
        "keyActivity": "Investigación de cifras oficiales."
      },
      {
        "number": 3,
        "title": "Presupuesto a 4 años",
        "objective": "Construir presupuesto realista.",
        "keyActivity": "Presupuesto_Universitario.pdf."
      },
      {
        "number": 4,
        "title": "Compilando el portafolio",
        "objective": "Inventariar documentos de 4 años.",
        "keyActivity": "Inventario del expediente."
      },
      {
        "number": 5,
        "title": "Huecos del portafolio",
        "objective": "Identificar qué falta.",
        "keyActivity": "Plan para cerrar huecos."
      },
      {
        "number": 6,
        "title": "Plazos y pasos administrativos",
        "objective": "Planificar fechas límite reales.",
        "keyActivity": "Calendario con responsables."
      },
      {
        "number": 7,
        "title": "Cierre del portafolio",
        "objective": "Completar toda la documentación.",
        "keyActivity": "Portafolio cerrado."
      },
      {
        "number": 8,
        "title": "Defensa de la decisión",
        "objective": "Argumentar la ruta elegida con evidencia propia.",
        "keyActivity": "Argumentación escrita final."
      }
    ],
    "studentNotebook": [
      {
        "session": 1,
        "page": 1,
        "prompt": "Mis 3 rutas investigadas.",
        "type": "table",
        "graded": false
      },
      {
        "session": 3,
        "page": 3,
        "prompt": "Mi presupuesto a 4 años.",
        "type": "structured_form",
        "graded": true,
        "rubricWeight": 40
      },
      {
        "session": 5,
        "page": 5,
        "prompt": "Huecos y plan para cerrarlos.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 8,
        "page": 8,
        "prompt": "Mi argumentación final.",
        "type": "free_text",
        "graded": true,
        "rubricWeight": 30
      }
    ]
  },
  "ls4-4": {
    "id": "ls4-4",
    "level": "launch",
    "quarter": "Q3",
    "status": "draft",
    "authoring": "ai_assisted",
    "teacherGuide": {
      "essentialQuestion": "Si tuvieras diez minutos delante de las personas que más han influido en tu formación, ¿qué les mostrarías de quién te has convertido?",
      "floridaStandards": [
        "Communication",
        "Self-Direction",
        "Critical Thinking"
      ],
      "verse": {
        "ref": "Lucas 16:10",
        "text": "El que es fiel en lo muy poco, también en lo más grande es fiel."
      },
      "closingVerse": null,
      "sessionCount": 8,
      "sessionLengthMin": 60
    },
    "sessions": [
      {
        "number": 1,
        "title": "El hilo conductor de 4 años",
        "objective": "Seleccionar un hilo narrativo único.",
        "keyActivity": "Repaso apoyado en el trabajo de ls4-1."
      },
      {
        "number": 2,
        "title": "Evidencia representativa",
        "objective": "Seleccionar 1-2 piezas por nivel.",
        "keyActivity": "Selección de evidencia, no exhaustiva."
      },
      {
        "number": 3,
        "title": "Estructura de la defensa",
        "objective": "Redactar guion de 8-10 minutos.",
        "keyActivity": "Guion con apertura-desarrollo-cierre."
      },
      {
        "number": 4,
        "title": "Gestión de cartas de recomendación",
        "objective": "Solicitar 2 cartas por iniciativa propia.",
        "keyActivity": "Redacción y envío de solicitudes."
      },
      {
        "number": 5,
        "title": "Ensayo ante un compañero",
        "objective": "Recibir feedback sobre el hilo narrativo.",
        "keyActivity": "Ensayo completo con feedback."
      },
      {
        "number": 6,
        "title": "Preguntas del panel",
        "objective": "Anticipar preguntas difíciles.",
        "keyActivity": "Preparación de 5 respuestas."
      },
      {
        "number": 7,
        "title": "Ensayo general",
        "objective": "Ensayar con apoyo visual si aplica.",
        "keyActivity": "Ensayo cronometrado completo."
      },
      {
        "number": 8,
        "title": "Defensa final ante el panel",
        "objective": "Defender el proyecto ante el panel institucional.",
        "keyActivity": "Presentación real + entrega del dossier consolidado."
      }
    ],
    "studentNotebook": [
      {
        "session": 1,
        "page": 1,
        "prompt": "Mi hilo conductor de 4 años.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 2,
        "page": 2,
        "prompt": "Mi evidencia seleccionada por nivel.",
        "type": "free_text",
        "graded": false
      },
      {
        "session": 3,
        "page": 3,
        "prompt": "Mi guion de 8-10 minutos.",
        "type": "structured_form",
        "graded": true,
        "rubricWeight": 40
      },
      {
        "session": 4,
        "page": 4,
        "prompt": "Mis solicitudes de cartas de recomendación.",
        "type": "free_text",
        "graded": true,
        "rubricWeight": 30
      },
      {
        "session": 8,
        "page": 8,
        "prompt": "Reflexión tras la defensa real.",
        "type": "free_text",
        "graded": false
      }
    ]
  }
};

/* ---------------- 6 Tracks Vocacionales Oficiales Chanak ---------------- */
export const VOCATIONAL_TRACKS = {
  tree: {
    id: 'tree',
    name: T('TREE · Naturaleza e Ingeniería', 'TREE · Nature & Engineering'),
    icon: '🌳',
    tag: T('Ingeniería, Tecnología, Ciencias Naturales y STEM', 'Engineering, Technology, Natural Sciences & STEM'),
    levels: {
      seedling: [
        T('Q1: Experimento casero documentado con el Método Científico y aplicación práctica.', 'Q1: Documented home experiment using Scientific Method with practical application.'),
        T('Q2: Mapa de recursos naturales y problemáticas ecológicas en tu entorno local.', 'Q2: Map of natural resources and environmental issues in your local community.'),
        T('Q3: Proyecto BOLD: Campaña de limpieza o preservación de área natural con registro y fotos.', 'Q3: BOLD Project: Natural area clean-up or preservation campaign with log and photos.')
      ],
      explorer: [
        T('Q1: Investigación local: calidad del agua, biodiversidad o reciclaje con entrevistas reales.', 'Q1: Local research: water quality, biodiversity or recycling with real interviews.'),
        T('Q2: Póster científico con hipótesis, datos recolectados y conclusiones técnicas.', 'Q2: Scientific poster with hypothesis, collected data and technical conclusions.'),
        T('Q3: Shark Tank Junior: Prototipo o servicio de tecnología/reciclaje/energía presentado en video.', 'Q3: Shark Tank Junior: Tech/recycling/energy prototype or service pitched on video.')
      ],
      builder: [
        T('Q1: Proyecto BOLD de Liderazgo Social en ciencia o ingeniería (mín. 10 participantes y log de horas).', 'Q1: BOLD Social Leadership project in science/engineering (min. 10 participants and hours log).'),
        T('Q2: Finanzas: Portafolio virtual en Google Finance con empresas de energía renovable/tecnología y análisis mensual.', 'Q2: Finance: Google Finance virtual portfolio with renewable energy/tech companies and monthly analysis.'),
        T('Q3: Inicio de Capstone: Propuesta formal de solución a una problemática técnica/ambiental con metodología y datos.', 'Q3: Capstone launch: Formal proposed solution to a technical/environmental issue with methodology and data.')
      ],
      launch: [
        T('Q1: Capstone STEM: Investigación científica o prototipo de ingeniería con metodología formal y datos reales.', 'Q1: STEM Capstone: Scientific research or engineering prototype with formal methodology and real data.'),
        T('Q2: Resume USA: Enfoque en ciencias, tecnología, proyectos STEM, SAT 1260+ y logros de investigación.', 'Q2: Resume USA: Focus on science, tech, STEM projects, SAT score 1260+ and research milestones.'),
        T('Q3: Personal Statement: Ensayo universitario conectando cómo la ciencia, la fe y la vocación forman tu llamado.', 'Q3: Personal Statement: College essay connecting how science, faith and calling shape your mission.')
      ]
    }
  },
  palette: {
    id: 'palette',
    name: T('PALETTE · Artes y Creatividad', 'PALETTE · Arts & Creativity'),
    icon: '🎨',
    tag: T('Diseño, Artes Visuales, Música, Narrativa y Multimedia', 'Design, Visual Arts, Music, Storytelling & Multimedia'),
    levels: {
      seedling: [
        T('Q1: Árbol genealógico ilustrado con narrativa y legado familiar.', 'Q1: Illustrated family tree with storytelling and family legacy.'),
        T('Q2: Escudo de Armas Personal en técnica mixta (arte, fotos y valores).', 'Q2: Personal Coat of Arms in mixed media (art, photos and values).'),
        T('Q3: Proyecto BOLD: Mural o pieza creativa para tu grupo o comunidad.', 'Q3: BOLD Project: Mural or creative piece for your group or community.')
      ],
      explorer: [
        T('Q1: Test de Dones + Ensayo: ¿Cómo usar el talento creativo para servir a otros?', 'Q1: Spiritual Gifts + Essay: How to use creative talent to serve others?'),
        T('Q2: Proyecto de arte comunitario: ilustración de libro, diseño de logo para ONG o campaña.', 'Q2: Community art project: book illustration, NGO logo design or campaign.'),
        T('Q3: Shark Tank Junior: Emprendimiento creativo (diseño, animación o producción audiovisual).', 'Q3: Shark Tank Junior: Creative venture (design, animation or audiovisual production).')
      ],
      builder: [
        T('Q1: Proyecto BOLD: Exposición comunitaria o festival creativo con público real y registro.', 'Q1: BOLD Project: Community exhibition or creative showcase with real audience and photos.'),
        T('Q2: Finanzas: Portafolio virtual con empresas de medios, diseño y entretenimiento + análisis.', 'Q2: Finance: Virtual portfolio with media, design and entertainment companies + analysis.'),
        T('Q3: Inicio de Capstone: Propuesta de proyecto artístico o multimedia de largo alcance.', 'Q3: Capstone launch: Long-term artistic or multimedia project proposal.')
      ],
      launch: [
        T('Q1: Capstone Artístico: Obra maestra creativa con impacto documentado en la comunidad.', 'Q1: Artistic Capstone: Creative masterpiece with documented community impact.'),
        T('Q2: Resume USA: Portfolio artístico adjunto, exposiciones y proyectos multimedia documentados.', 'Q2: Resume USA: Attached artistic portfolio, exhibitions and documented media projects.'),
        T('Q3: Personal Statement: Cómo el arte, la belleza y la fe se fusionan en tu vocación.', 'Q3: Personal Statement: How art, beauty and faith merge in your personal calling.')
      ]
    }
  },
  heartbeat: {
    id: 'heartbeat',
    name: T('HEARTBEAT · Salud y Deporte', 'HEARTBEAT · Health & Sports'),
    icon: '💓',
    tag: T('Bienestar Físico, Nutrición, Medicina, Deportes y Salud Mental', 'Physical Wellness, Nutrition, Medicine, Sports & Mental Health'),
    levels: {
      seedling: [
        T('Q1: Plan de acondicionamiento físico de 4 semanas con registro de hábitos diarios.', 'Q1: 4-week physical conditioning plan with daily habit tracking.'),
        T('Q2: Guía de nutrición saludable y mayordomía del cuerpo como templo del Espíritu Santo.', 'Q2: Healthy nutrition guide and stewardship of the body as a temple of the Holy Spirit.'),
        T('Q3: Proyecto BOLD: Organización de una jornada deportiva o de actividad física familiar.', 'Q3: BOLD Project: Organizing a family or community sports and active day.')
      ],
      explorer: [
        T('Q1: Test de Dones + Ensayo: Mi vocación hacia el cuidado de la salud y el servicio físico.', 'Q1: Gifts Test + Essay: My calling toward healthcare and physical service.'),
        T('Q2: Proyecto de bienestar integral: Registro de sueño, alimentación y actividad durante 4 semanas.', 'Q2: Comprehensive wellness project: Sleep, nutrition and activity tracking for 4 weeks.'),
        T('Q3: Shark Tank Junior: App, servicio o taller de nutrición/deporte para jóvenes.', 'Q3: Shark Tank Junior: App, service or workshop on youth nutrition/athletics.')
      ],
      builder: [
        T('Q1: Proyecto BOLD: Liderar un club, taller o entrenamiento deportivo para menores con horas documentadas.', 'Q1: BOLD Project: Leading a youth sports clinic, workshop or club with documented hours.'),
        T('Q2: Finanzas: Portafolio virtual con empresas de salud, biomedicina y farmacéutica + análisis ético.', 'Q2: Finance: Virtual portfolio with healthcare and biotech companies + ethical analysis.'),
        T('Q3: Inicio de Capstone: Programa estructurado de bienestar para un grupo con métricas de impacto.', 'Q3: Capstone launch: Structured wellness program for a target group with impact metrics.')
      ],
      launch: [
        T('Q1: Capstone de Salud/Deporte: Intervención de bienestar implementada con resultados medibles.', 'Q1: Health/Sports Capstone: Implemented wellness intervention with measurable outcomes.'),
        T('Q2: Resume USA: Logros deportivos, liderazgo físico, voluntariado en salud y primeros auxilios.', 'Q2: Resume USA: Athletic achievements, physical leadership, healthcare volunteering and first aid.'),
        T('Q3: Personal Statement: Cómo la disciplina física y el cuidado de la vida reflejan honrar a Dios.', 'Q3: Personal Statement: How physical discipline and caring for life reflect honoring God.')
      ]
    }
  },
  helping: {
    id: 'helping',
    name: T('HELPING · Servicio y Fe', 'HELPING · Service & Faith'),
    icon: '🤝',
    tag: T('Impacto Social, Voluntariado, Capellanía, Misiones y Comunidades', 'Social Impact, Volunteering, Chaplaincy, Missions & Communities'),
    levels: {
      seedling: [
        T('Q1: Entrevista a 3 personas en tu comunidad sobre necesidades sociales y espirituales.', 'Q1: Interviewing 3 community members regarding social and spiritual needs.'),
        T('Q2: Plan de servicio estructurado: Objetivo SMART, acciones concretas y evaluación.', 'Q2: Structured service plan: SMART goal, concrete actions and assessment.'),
        T('Q3: Proyecto BOLD: Mínimo 15 horas de servicio voluntario con registro fotográfico y carta.', 'Q3: BOLD Project: Min. 15 hours of volunteer service with photo log and endorsement.')
      ],
      explorer: [
        T('Q1: Diagnóstico social de una necesidad local y propuesta de acompañamiento solidario.', 'Q1: Social assessment of a local need and community outreach plan.'),
        T('Q2: Campaña solidaria o taller de apoyo escolar/familiar con recogida de métricas.', 'Q2: Community drive or tutoring workshop with collected metrics.'),
        T('Q3: Shark Tank Junior: Creación de una iniciativa o micro-ONG social autosostenible.', 'Q3: Shark Tank Junior: Creating a sustainable community initiative or micro-NGO.')
      ],
      builder: [
        T('Q1: Proyecto BOLD: Liderar una iniciativa de voluntariado de 30–50 horas con supervisor.', 'Q1: BOLD Project: Leading a 30–50 hour volunteer initiative with external supervisor.'),
        T('Q2: Finanzas: Portafolio virtual con empresas de impacto social / ESG y análisis ético.', 'Q2: Finance: Virtual portfolio with social impact/ESG companies and ethical review.'),
        T('Q3: Inicio de Capstone: Plan formal de intervención social o ministerio comunitario local.', 'Q3: Capstone launch: Formal plan for social intervention or local community ministry.')
      ],
      launch: [
        T('Q1: Capstone Social: Proyecto de servicio de 100+ horas con carta institucional de impacto.', 'Q1: Social Capstone: 100+ hour service project with institutional letter of impact.'),
        T('Q2: Resume USA: Historial completo de servicio comunitario, cartas de referencia y liderazgo.', 'Q2: Resume USA: Full community service history, recommendation letters and leadership.'),
        T('Q3: Personal Statement: La vocación de servicio cristiano como motor de vida y profesión.', 'Q3: Personal Statement: Christian servant leadership as the lifelong engine of career.')
      ]
    }
  },
  briefcase: {
    id: 'briefcase',
    name: T('BRIEFCASE · Negocios y Finanzas', 'BRIEFCASE · Business & Finance'),
    icon: '💼',
    tag: T('Emprendimiento, Economía, Mayordomía, Gestión y Estrategia', 'Entrepreneurship, Economics, Stewardship, Management & Strategy'),
    levels: {
      seedling: [
        T('Q1: Mi Primer Presupuesto Personal: Registro de ingresos, gastos y ahorro durante 30 días.', 'Q1: My First Personal Budget: Income, expenses and savings tracker for 30 days.'),
        T('Q2: Principios bíblicos de mayordomía financiera y generosidad responsable.', 'Q2: Biblical principles of financial stewardship and cheerful giving.'),
        T('Q3: Proyecto BOLD: Mini-emprendimiento casero con cálculo de costo, venta y utilidad.', 'Q3: BOLD Project: Home mini-venture calculating costs, sales and net profit.')
      ],
      explorer: [
        T('Q1: Test de Dones + Ensayo: La vocación en los negocios como plataforma de bendición.', 'Q1: Gifts Test + Essay: Business vocation as a platform for blessing others.'),
        T('Q2: Investigación de mercado local: Identificar problema real, solución y competencia.', 'Q2: Local market research: Identifying real problems, solutions and competition.'),
        T('Q3: Shark Tank Junior: Pitch de negocio con modelo Canvas y prototipo funcional.', 'Q3: Shark Tank Junior: Business pitch using Business Model Canvas and working demo.')
      ],
      builder: [
        T('Q1: Proyecto BOLD: Lanzar un producto o servicio real que genere valor tangible.', 'Q1: BOLD Project: Launching a real product or service generating tangible community value.'),
        T('Q2: Finanzas Reales: Portafolio virtual de $10,000 USD en Google Finance con análisis financiero mensual.', 'Q2: Real Finance: $10,000 USD virtual portfolio on Google Finance with monthly analysis.'),
        T('Q3: Inicio de Capstone: Plan de negocio completo con proyección a 1 año y primeras validaciones.', 'Q3: Capstone launch: Full business plan with 1-year projections and customer validation.')
      ],
      launch: [
        T('Q1: Capstone Empresarial: Emprendimiento o modelo económico en marcha con métricas verificables.', 'Q1: Business Capstone: Live enterprise or economic model with verifiable metrics.'),
        T('Q2: Resume USA: Logros emprendedores, métricas de ventas, SAT score y portfolio financiero.', 'Q2: Resume USA: Entrepreneurial milestones, sales metrics, SAT score and finance portfolio.'),
        T('Q3: Personal Statement: Cómo tu mentalidad de mayordomía financiera transforma realidades.', 'Q3: Personal Statement: How faithful financial stewardship transforms communities.')
      ]
    }
  },
  bullhorn: {
    id: 'bullhorn',
    name: T('BULLHORN · Política y Liderazgo', 'BULLHORN · Politics & Leadership'),
    icon: '📢',
    tag: T('Liderazgo Cívico, Debate, Oratoria, Derecho y Políticas Públicas', 'Civic Leadership, Debate, Public Speaking, Law & Public Policy'),
    levels: {
      seedling: [
        T('Q1: Análisis de un problema social de tu ciudad: Causas, afectados y posibles soluciones.', 'Q1: Analysis of a local social issue: Causes, stakeholders and potential solutions.'),
        T('Q2: Redacción de una propuesta constructiva dirigida a una autoridad o junta escolar.', 'Q2: Writing a constructive proposal addressed to a civic authority or school board.'),
        T('Q3: Proyecto BOLD: Discurso o presentación formal de 3 minutos sobre un valor cívico.', 'Q3: BOLD Project: 3-minute formal persuasive speech on a civic value.')
      ],
      explorer: [
        T('Q1: Ensayo analítico: Justicia, gobierno bíblico y responsabilidad del ciudadano cristiano.', 'Q1: Analytical essay: Justice, biblical governance and Christian citizenship duties.'),
        T('Q2: Propuesta formal con datos estadísticos sobre un reto comunitario.', 'Q2: Data-backed formal proposal addressing a community civic challenge.'),
        T('Q3: Shark Tank Junior: Campaña de concienciación pública con plan de comunicación digital.', 'Q3: Shark Tank Junior: Public awareness campaign with digital communication plan.')
      ],
      builder: [
        T('Q1: Proyecto BOLD: Organizar un debate, mesa redonda o foro cívico con moderación y acta.', 'Q1: BOLD Project: Organizing a structured debate, round table or forum with minutes.'),
        T('Q2: Finanzas: Portafolio virtual con análisis de regulación estatal y políticas de mercado.', 'Q2: Finance: Virtual portfolio analyzing state regulations and market dynamics.'),
        T('Q3: Inicio de Capstone: Propuesta formal de política pública o reforma comunitaria con evidencias.', 'Q3: Capstone launch: Formal public policy or civic reform proposal with field evidence.')
      ],
      launch: [
        T('Q1: Capstone Cívico: Campaña o propuesta institucional presentada ante autoridades reales.', 'Q1: Civic Capstone: Institutional initiative or proposal presented to real authorities.'),
        T('Q2: Resume USA: Experiencia en debate, oratoria, liderazgo cívico y publicaciones estudiantiles.', 'Q2: Resume USA: Debate experience, public speaking, civic leadership and publications.'),
        T('Q3: Personal Statement: La búsqueda de la verdad, la ética y el servicio en la esfera pública.', 'Q3: Personal Statement: The pursuit of truth, ethics and leadership in public service.')
      ]
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EXTENSION_CAPSULES_DATA, VOCATIONAL_TRACKS };
}

if (typeof window !== 'undefined') {
  window.CHANAK_DATA = {
    BIBLE_VERSES,
    BOOKS,
    JUNIORS_RETOS,
    HIGH_SCHOOL_LEVELS,
    CAPSULES_DATA,
    EXPEDIENTE_CATEGORIES,
    EXTENSION_CAPSULES_DATA,
    VOCATIONAL_TRACKS
  };
}
