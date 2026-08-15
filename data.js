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
    audience: T('Recomendado para niñas de 10 a 13 años', 'Recommended for girls ages 10 to 13'),
    key: T('Identifica mentiras sobre Dios, la amistad, la belleza y las emociones, sustituyéndolas por la verdad liberadora de la Palabra.', 'Identifies lies about God, friendship, beauty, and emotions, replacing them with the liberating truth of God\'s Word.'),
    quote: T('La verdad de Dios es el único escudo frente a las presiones que el mundo intenta sembrar en tu corazón.', 'God\'s truth is the only shield against the pressures the world tries to sow in your heart.')
  },
  salvajeCorazon: {
    title: T('Salvaje de Corazón (Edición Jóvenes)', 'Wild at Heart (Young Men Edition)'),
    author: 'John Eldredge',
    audience: T('Recomendado para niños/chicos de 10 a 13 años', 'Recommended for boys ages 10 to 13'),
    key: T('Aventura, valentía y el diseño heroico que Dios puso en el corazón del varón para proteger, servir a su familia y liderar con rectitud.', 'Adventure, courage, and the heroic design God placed in a young man\'s heart to protect, serve, and lead with righteousness.'),
    quote: T('Dios diseñó tu corazón para una gran aventura de fe, una causa noble y la valentía de defender la verdad.', 'God designed your heart for a great adventure of faith, a noble cause, and the courage to stand for truth.')
  },

  // Para 14 años (Seedling) - Misionero inspirador
  contrabandistaDios: {
    title: T('El Contrabandista de Dios', 'God\'s Smuggler'),
    author: 'Hermano Andrés (Brother Andrew) & John Sherrill',
    audience: T('Lectura inspiradora de fe y valentía para 14 años', 'Inspiring missionary story of faith and courage for age 14'),
    key: T('Biografía misionera real de un joven común que arriesgó su vida llevando Biblias a lugares de persecución, experimentando milagros y providencia divina.', 'Real-life missionary biography of a young man who risked his life smuggling Bibles into closed nations, witnessing divine miracles.'),
    quote: T('Cuando la causa es el Reino de Dios, el coraje vence al miedo y las puertas cerradas se abren con la oración.', 'When the cause is God\'s Kingdom, courage overcomes fear and closed doors open through prayer.')
  },
  habitos: {
    title: T('Hábitos Atómicos', 'Atomic Habits'),
    author: 'James Clear',
    audience: T('Formación de autodisciplina y sistemas diarios', 'Self-discipline and daily systems'),
    key: T('El poder del 1%: Las pequeñas decisiones repetidas a diario multiplican tus resultados. Diseña tu entorno para que el buen hábito sea inevitable.', 'The power of 1%: Small decisions repeated daily compound results. Design your environment so good habits become inevitable.'),
    quote: T('No te elevas al nivel de tus metas, caes al nivel de tus sistemas.', 'You do not rise to the level of your goals, you fall to the level of your systems.')
  },
  temperamento: {
    title: T('El Temperamento Controlado por el Espíritu', 'The Spirit-Controlled Temperament'),
    author: 'Tim LaHaye',
    audience: T('Autoconocimiento y madurez del carácter', 'Self-awareness and character maturity'),
    key: T('Autoconocimiento y Fruto del Espíritu: Descubre las fortalezas y debilidades de los temperamentos (Sanguíneo, Colérico, Melancólico, Flemático) y cómo el Espíritu Santo transforma el carácter.', 'Self-awareness & the Fruit of the Spirit: Discover the strengths and weaknesses of temperaments and how the Holy Spirit transforms character.'),
    quote: T('El carácter en Cristo supera las inclinaciones naturales de la personalidad.', 'Character in Christ overcomes natural personality inclinations.')
  },

  // Para 15–17 años
  lenguajes: {
    title: T('Los 5 Lenguajes del Amor', 'The 5 Love Languages'),
    author: 'Gary Chapman',
    audience: T('Relaciones familiares y empatía', 'Family relationships and empathy'),
    key: T('Palabras de afirmación, tiempo de calidad, regalos, actos de servicio y contacto físico. Aprende a expresar amor de forma que la otra persona realmente lo reciba.', 'Words of affirmation, quality time, receiving gifts, acts of service, physical touch. Learn to communicate love effectively.'),
    quote: T('El amor sincero elige hablar el dialecto emocional de la otra persona.', 'Sincere love chooses to speak the emotional dialect of the other person.')
  },
  padreRico: {
    title: T('Padre Rico, Padre Pobre', 'Rich Dad Poor Dad'),
    author: 'Robert Kiyosaki',
    audience: T('Inteligencia financiera y mayordomía', 'Financial literacy and stewardship'),
    key: T('Activos vs. Pasivos, educación financiera, mayordomía y generación de valor sostenible para servir a otros con sabiduría.', 'Assets vs. Liabilities, financial literacy, stewardship, and creating sustainable value.'),
    quote: T('Los ricos adquieren activos; los pobres y la clase media adquieren pasivos pensando que son activos.', 'The rich acquire assets; the poor and middle class acquire liabilities they think are assets.')
  },
  ganarAmigos: {
    title: T('Cómo Ganar Amigos e Influir sobre las Personas', 'How to Win Friends and Influence People'),
    author: 'Dale Carnegie',
    audience: T('Liderazgo interpersonal y servicio', 'Interpersonal leadership and service'),
    key: T('Interés genuino por los demás, escucha activa, respeto y liderazgo empático basado en el servicio.', 'Genuine interest in others, active listening, respect, and empathetic service-based leadership.'),
    quote: T('Puedes hacer más amigos en dos meses interesándote en los demás que en dos años tratando de que se interesen en ti.', 'You can make more friends in two months by becoming interested in other people than in two years trying to get them interested in you.')
  },
  sieteEsferas: {
    title: T('Las 7 Esferas de Influencia Cultural', 'The 7 Mountains of Influence'),
    author: 'Lance Wallnau / Loren Cunningham',
    audience: T('Vocación e impacto en la sociedad', 'Calling and cultural impact'),
    key: T('Llevar el testimonio de Cristo a: Artes/Entretenimiento, Negocios, Educación, Familia, Gobierno, Medios y Religión.', 'Bringing the testimony of Christ into Arts, Business, Education, Family, Government, Media, and Religion.'),
    quote: T('Tu vocación es tu plataforma ministerial en el mundo real.', 'Your vocation is your ministry platform in the real world.')
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
    coins: 30,
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
    coins: 30,
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
    coins: 35,
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
    coins: 30,
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
    coins: 40,
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
    coins: 30,
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
    coins: 30,
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
    coins: 30,
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
    coins: 35,
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
    coins: 30,
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
    coins: 30,
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
    coins: 30,
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
    coins: 30,
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
    coins: 35,
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
    age: '14 años',
    icon: '🌱',
    title: T('Seedling · Fundamento, Identidad & Hábitos', 'Seedling · Foundation, Identity & Habits'),
    subtitle: T('Identidad en Cristo, Hábitos Atómicos & Primer Servicio', 'Identity in Christ, Atomic Habits & First Service'),
    verseKey: 'seedling',
    books: ['contrabandistaDios', 'habitos', 'temperamento'],
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
    books: ['ganarAmigos', 'lenguajes'],
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
    books: ['sieteEsferas', 'padreRico'],
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
  identidad: {
    id: 'identidad',
    tag: 'core',
    level: 'seedling',
    verseKey: 'identidad',
    title: T('¿Quién soy? Identidad y Raíces', 'Who am I? Identity and Roots'),
    bookKey: 'temperamento',
    project: T('Tu <b>Escudo de Armas Personal</b> terminado (4 cuadrantes: Fe · Raíces · Talento · Sueño) con tu lema de vida.', 'Your finished <b>Personal Coat of Arms</b> with 4 quarters and personal motto.'),
    steps: [
      {
        type: 'hook',
        kicker: T('Paso 1 · Apertura', 'Step 1 · Hook'),
        h: T('Un escudo dice más que un nombre', 'A shield says more than a name'),
        scenario: T('Los caballeros y líderes históricos portaban un escudo que contaba su historia: de dónde venían, qué defendían y qué soñaban. Si diseñaras el tuyo hoy…', 'Knights and historic leaders carried shields telling their story: roots, values, and dreams. If you designed yours today…'),
        body: T('Crearás tu <b>Escudo de Armas Personal</b> con cuatro cuadrantes: Fe · Raíces · Talento · Sueño.', 'You will create your <b>Personal Coat of Arms</b> with four quadrants: Faith · Roots · Talent · Dream.')
      },
      {
        type: 'theory',
        kicker: T('Paso 2 · Fundamento', 'Step 2 · Theory'),
        h: T('Identidad antes que estrategia', 'Identity before strategy'),
        body: T('No puedes liderar hacia dónde vas si no sabes quién eres. La identidad es la unión de tus raíces familiares, tus dones espirituales y tu propósito en Cristo.', 'You cannot lead where you are going if you do not know who you are. Identity is the union of roots, gifts, and purpose in Christ.'),
        diagram: T('<b>Fórmula del Escudo</b><br>Fe + Raíces + Talento + Sueño = Identidad con dirección.', '<b>Shield Formula</b><br>Faith + Roots + Talent + Dream = Directed Identity.')
      },
      {
        type: 'quiz',
        kicker: T('Paso 3 · Comprobación', 'Step 3 · Quiz'),
        h: T('¿Qué NO define tu identidad?', 'What does NOT define your identity?'),
        q: T('¿Cuál de estos elementos NO es una base sólida y eterna de tu identidad?', 'Which of these is NOT a solid eternal foundation for your identity?'),
        opts: [
          { t: T('Mis raíces familiares y principios aprendidos', 'My family roots and learned principles'), ok: false },
          { t: T('El número de seguidores o "likes" en redes sociales', 'Number of followers or likes on social media'), ok: true },
          { t: T('Los dones y talentos que Dios me otorgó', 'Gifts and talents God gave me'), ok: false },
          { t: T('La fe y las convicciones en mi corazón', 'Faith and convictions in my heart'), ok: false }
        ],
        okMsg: T('¡Exacto! La aprobación externa cambia constantemente; tu identidad en Cristo es inamovible.', 'Exactly! External approval changes constantly; your identity in Christ is unshakeable.'),
        noMsg: T('Piénsalo otra vez: eso es interno y estable.', 'Think again: that is internal and stable.')
      },
      {
        type: 'reflect',
        kicker: T('Paso 4 · Aplicación', 'Step 4 · Reflection'),
        h: T('Los 4 Cuadrantes de tu Escudo', 'The 4 Quadrants of your Shield'),
        body: T('Escribe una frase clave para cada uno de los 4 cuadrantes. Será la base de tu entregable de Q1.', 'Write a key sentence for each quadrant to build your Q1 deliverable.'),
        prompt: T('1. Fe: ___\n2. Raíces: ___\n3. Talento: ___\n4. Sueño: ___', '1. Faith: ___\n2. Roots: ___\n3. Talent: ___\n4. Dream: ___')
      }
    ]
  },

  habitos: {
    id: 'habitos',
    tag: 'core',
    level: 'seedling',
    verseKey: 'habitos',
    title: T('Hábitos que te Construyen (Hábitos Atómicos)', 'Habits that Build You (Atomic Habits)'),
    bookKey: 'habitos',
    project: T('Tu <b>Tracker de 21 Días</b> completo con el hábito de 2 minutos que elegiste, marcado día a día.', 'Your completed <b>21-Day Tracker</b> for the 2-minute habit marked day by day.'),
    steps: [
      {
        type: 'hook',
        kicker: T('Paso 1 · Apertura', 'Step 1 · Hook'),
        h: T('1% mejor cada día', '1% better every day'),
        scenario: T('Si mejoras solo 1% cada día durante un año, terminas casi 38 veces mejor. Los pequeños hábitos se multiplican exponencialmente.', 'If you improve just 1% each day for a year, you end up nearly 38 times better.'),
        body: T('Conectamos la idea central de <b>Hábitos Atómicos</b> con tu Tracker de 21 días.', 'We connect the core idea of <b>Atomic Habits</b> with your 21-day tracker.')
      },
      {
        type: 'theory',
        kicker: T('Paso 2 · Principio', 'Step 2 · Principle'),
        h: T('Sistemas, no metas', 'Systems, not goals'),
        body: T('No subes al nivel de tus metas; caes al nivel de tus sistemas. El sistema es lo que repites a diario.', 'You do not rise to the level of your goals; you fall to the level of your systems.'),
        diagram: T('<b>Las 4 Leyes del Hábito</b><br>1. Hazlo obvio · 2. Hazlo atractivo · 3. Hazlo fácil (regla de 2 min) · 4. Hazlo satisfactorio.', '<b>The 4 Laws of Habit</b><br>1. Make it obvious · 2. Make it attractive · 3. Make it easy (2-min rule) · 4. Make it satisfying.')
      },
      {
        type: 'quiz',
        kicker: T('Paso 3 · Comprobación', 'Step 3 · Quiz'),
        h: T('Meta vs. Sistema', 'Goal vs. System'),
        q: T('¿Cuál de las siguientes opciones describe un SISTEMA y no una simple meta?', 'Which of the following describes a SYSTEM and not just a goal?'),
        opts: [
          { t: T('Quiero ser una persona sabia y leída este año', 'I want to be a well-read person this year'), ok: false },
          { t: T('Leo 10 páginas de mi libro de formación cada día después de cenar', 'I read 10 pages of my book daily right after dinner'), ok: true },
          { t: T('Voy a sacar un promedio perfecto en el curso', 'I will get a perfect GPA in the course'), ok: false },
          { t: T('Deseo tener un cuerpo atlético', 'I wish to have an athletic body'), ok: false }
        ],
        okMsg: T('¡Correcto! Una acción concreta, contextualizada y repetible en el tiempo.', 'Correct! A concrete, contextualized, repeatable action.'),
        noMsg: T('Eso es un deseo o meta general. Un sistema define la acción exacta y el momento.', 'That is a wish/goal. A system defines exact action and trigger.')
      },
      {
        type: 'reflect',
        kicker: T('Paso 4 · Aplicación', 'Step 4 · Reflection'),
        h: T('Diseña tu Hábito de 2 Minutos', 'Design your 2-Minute Habit'),
        body: T('Aplica la ley "hazlo fácil": define un micro-hábito que tome menos de 2 minutos para arrancar tu tracker.', 'Apply "make it easy": define a micro-habit taking under 2 minutes.'),
        prompt: T('• Hábito deseado: ___\n• Versión de 2 minutos para empezar: ___\n• Señal o disparador (¿cuándo lo harás?): ___', '• Target habit: ___\n• 2-minute startup version: ___\n• Trigger cue: ___')
      }
    ]
  },

  lenguajes: {
    id: 'lenguajes',
    tag: 'core',
    level: 'seedling',
    verseKey: 'lenguajes',
    title: T('Los 5 Lenguajes del Amor y Relaciones', 'The 5 Love Languages & Relationships'),
    bookKey: 'lenguajes',
    project: T('Una <b>carta a tus padres o mentor</b> escrita en su lenguaje principal de amor, con reflexión.', 'A <b>letter to parents or mentor</b> written in their primary love language.'),
    steps: [
      {
        type: 'hook',
        kicker: T('Paso 1 · Apertura', 'Step 1 · Hook'),
        h: T('No todos nos sentimos amados igual', 'Not everyone feels loved the same way'),
        scenario: T('Puedes comprarle un regalo costoso a un amigo y que no se emocione… pero cuando le dedicas una tarde para conversar sin mirar el móvil, sus ojos brillan.', 'You can buy someone an expensive gift and they feel neutral, but spend an hour listening without your phone and their eyes light up.'),
        body: T('Los 5 lenguajes explican cómo cada persona percibe y recibe el aprecio genuino.', 'The 5 love languages explain how individuals perceive authentic care.')
      },
      {
        type: 'theory',
        kicker: T('Paso 2 · Los 5 Canales', 'Step 2 · 5 Channels'),
        h: T('Cinco formas de expresar amor', 'Five ways to express love'),
        body: T('Cada persona tiene uno o dos lenguajes predominantes. Madurar en liderazgo implica aprender a hablar el lenguaje del prójimo.', 'Each person has primary languages. Maturing in leadership means speaking the other person’s language.'),
        diagram: T('<b>Los 5 Lenguajes</b><br>1. Palabras de afirmación · 2. Tiempo de calidad · 3. Regalos con significado · 4. Actos de servicio · 5. Contacto físico respetuoso.', '<b>The 5 Languages</b><br>1. Words of affirmation · 2. Quality time · 3. Meaningful gifts · 4. Acts of service · 5. Respectful touch.')
      },
      {
        type: 'quiz',
        kicker: T('Paso 3 · Práctica', 'Step 3 · Practice'),
        h: T('Identificando Lenguajes', 'Identifying Languages'),
        q: T('Si tu hermano menor se siente feliz cuando le ayudas a ordenar sus legos sin criticarle, su lenguaje es:', 'If your younger sibling is happiest when you help organize their toys without complaint, their language is:'),
        opts: [
          { t: T('Regalos', 'Gifts'), ok: false },
          { t: T('Actos de servicio', 'Acts of service'), ok: true },
          { t: T('Palabras de afirmación', 'Words of affirmation'), ok: false },
          { t: T('Contacto físico', 'Physical touch'), ok: false }
        ],
        okMsg: T('¡Exacto! La acción práctica y dedicada de ayuda comunica amor directo.', 'Exact! Practical dedicated help directly communicates love.'),
        noMsg: T('Observa la naturaleza de la acción: es una ayuda práctica.', 'Notice the nature of the action: practical help.')
      },
      {
        type: 'reflect',
        kicker: T('Paso 4 · Compromiso', 'Step 4 · Action'),
        h: T('Tu Gesto de Amor Esta Semana', 'Your Love Action This Week'),
        body: T('Identifica el lenguaje principal de papá o mamá y planifica un gesto concreto.', 'Identify your parent\'s primary language and plan a specific action.'),
        prompt: T('• Persona: ___\n• Su lenguaje estimado: ___\n• Acción concreta que realizaré esta semana: ___', '• Person: ___\n• Estimated language: ___\n• Concrete action this week: ___')
      }
    ]
  },

  saludEmocional: {
    id: 'saludEmocional',
    tag: 'care',
    level: 'seedling',
    verseKey: 'saludEmocional',
    title: T('Salud Emocional, Estrés y Paz en Cristo', 'Emotional Health, Stress & Peace in Christ'),
    bookKey: 'mentirasChicas',
    project: T('Tu <b>Semáforo Emocional</b> y diario de autorregulación con versículos de paz.', 'Your <b>Emotional Traffic Light</b> and self-regulation journal with peace verses.'),
    steps: [
      {
        type: 'hook',
        kicker: T('Paso 1 · Apertura', 'Step 1 · Hook'),
        h: T('Las emociones son mensajeros, no capitanes', 'Emotions are messengers, not captains'),
        scenario: T('Sentir frustración o ansiedad ante una entrega difícil es natural. Lo determinante es qué haces con esa emoción: ¿la dejas tomar el control o la llevas a Dios?', 'Feeling stressed before a deadline is normal. What matters is what you do with it: let it control you or take it to God?'),
        body: T('Aprende a gestionar el semáforo emocional: Verde (calma), Amarillo (alerta), Rojo (pausa necesaria).', 'Learn to handle the emotional traffic light: Green, Yellow, Red.')
      },
      {
        type: 'theory',
        kicker: T('Paso 2 · Autorregulación', 'Step 2 · Theory'),
        h: T('El Filtro Bíblico de los Pensamientos', 'The Biblical Filter for Thoughts'),
        body: T('Filipenses 4:8 nos enseña a llenar la mente con lo verdadero, lo honesto, lo justo, lo puro y lo amable. Reconocer pensamientos distorsionados es clave.', 'Philippians 4:8 teaches us to fill our minds with truth, honor, justice, and purity.'),
        diagram: T('<b>El Proceso de Calma</b><br>1. Detente y respira · 2. Nombra la emoción · 3. Lleva la carga en oración · 4. Elige una acción sabia.', '<b>Calm Process</b><br>1. Stop & breathe · 2. Name emotion · 3. Pray · 4. Choose wise action.')
      },
      {
        type: 'quiz',
        kicker: T('Paso 3 · Quiz', 'Step 3 · Quiz'),
        h: T('Respuesta ante la Presión', 'Response to Pressure'),
        q: T('Cuando sientes que el tiempo no te alcanza y comienzas a entrar en pánico, ¿cuál es el primer paso sabio?', 'When you feel overwhelmed by lack of time and panic starts, what is the first wise step?'),
        opts: [
          { t: T('Quejarte en redes sociales y posponer todo', 'Complain online and procrastinate'), ok: false },
          { t: T('Hacer una pausa de 2 minutos, respirar, orar y priorizar 1 sola tarea inmediata', 'Pause 2 min, breathe, pray, and prioritize 1 single immediate task'), ok: true },
          { t: T('Renunciar a la materia', 'Give up on the subject'), ok: false },
          { t: T('Enojarte con quienes te rodean', 'Get angry with those around you'), ok: false }
        ],
        okMsg: T('¡Excelente! Pausa, reordenamiento mental y enfoque en una sola cosa a la vez.', 'Excellent! Pause, mental reset, and focus on one thing at a time.'),
        noMsg: T('Esa reacción aumenta el estrés en lugar de resolverlo.', 'That reaction increases stress rather than resolving it.')
      },
      {
        type: 'reflect',
        kicker: T('Paso 4 · Tu Diario', 'Step 4 · Journal'),
        h: T('Tu Ancla de Paz', 'Your Peace Anchor'),
        body: T('Escribe tu versículo ancla para momentos de sobrecarga.', 'Write your anchor verse for moments of overload.'),
        prompt: T('• Mi versículo de paz favorito: ___\n• Una situación donde lo recordaré: ___', '• My favorite peace verse: ___\n• A situation where I will remember it: ___')
      }
    ]
  },

  padreRico: {
    id: 'padreRico',
    tag: 'money',
    level: 'builder',
    verseKey: 'padreRico',
    title: T('Inteligencia Financiera: Activos vs. Pasivos', 'Financial Literacy: Assets vs. Liabilities'),
    bookKey: 'padreRico',
    project: T('Tu <b>Portfolio Virtual de $10.000</b> en Google Finance con reporte mensual de tesis de inversión.', 'Your <b>$10k Virtual Portfolio</b> on Google Finance with thesis report.'),
    steps: [
      {
        type: 'hook',
        kicker: T('Paso 1 · Apertura', 'Step 1 · Hook'),
        h: T('El dinero como herramienta de servicio', 'Money as a tool of service'),
        scenario: T('Dos personas ganan $2.000 al mes: la primera gasta $2.100 en cosas que pierden valor; la segunda ahorra e invierte $400 en activos productivos y mayordomía.', 'Two people earn $2,000/mo: one spends $2,100 on depreciating items; the other invests $400 into productive assets and giving.'),
        body: T('La diferencia entre libertad financiera y esclavitud de deudas es la distinción entre activos y pasivos.', 'The difference between financial peace and debt bondage is understanding assets vs liabilities.')
      },
      {
        type: 'theory',
        kicker: T('Paso 2 · Concepto Clave', 'Step 2 · Core Concept'),
        h: T('¿Qué es un Activo real?', 'What is a real Asset?'),
        body: T('Un activo pone dinero en tu bolsillo (o genera valor real a largo plazo). Un pasivo extrae dinero de tu bolsillo.', 'An asset puts value/money into your pocket over time. A liability takes money out.'),
        diagram: T('<b>Ecuación de Mayordomía</b><br>Ingresos → [Diezmo 10% + Ahorro/Inversión 30%] → Gastos Sabios 60% → Paz Financiera.', '<b>Stewardship Equation</b><br>Income → [Tithe 10% + Investment 30%] → Wise Expenses 60% → Peace.')
      },
      {
        type: 'quiz',
        kicker: T('Paso 3 · Quiz', 'Step 3 · Quiz'),
        h: T('Activo o Pasivo', 'Asset or Liability'),
        q: T('Comprar el último smartphone a plazos con intereses mensuales que no puedes pagar de contado es:', 'Buying the latest smartphone with monthly high-interest debt you cannot pay in cash is:'),
        opts: [
          { t: T('Una inversión de capital', 'A capital investment'), ok: false },
          { t: T('Un pasivo que reduce tu flujo de caja', 'A liability that shrinks your cash flow'), ok: true },
          { t: T('Un activo libre de riesgo', 'A risk-free asset'), ok: false },
          { t: T('Una donación benéfica', 'A charitable donation'), ok: false }
        ],
        okMsg: T('¡Exactamente! Se devalúa con el tiempo y te genera una obligación financiera.', 'Exactly! It depreciates and generates debt obligation.'),
        noMsg: T('Analiza si genera ingresos o si te genera gastos mensuales.', 'Analyze whether it generates income or drains monthly expenses.')
      },
      {
        type: 'reflect',
        kicker: T('Paso 4 · Portfolio', 'Step 4 · Portfolio'),
        h: T('Definición de 3 Empresas para tu Portfolio', 'Define 3 Companies for Portfolio'),
        body: T('Selecciona 3 empresas éticas para tu simulación en Google Finance y fundamenta por qué las elegiste.', 'Select 3 ethical companies for Google Finance simulation and justify them.'),
        prompt: T('• Empresa 1 (Tecnología/Salud/Energía): ___ | Motivo: ___\n• Empresa 2: ___ | Motivo: ___\n• Empresa 3: ___ | Motivo: ___', '• Company 1: ___ | Reason: ___\n• Company 2: ___ | Reason: ___\n• Company 3: ___ | Reason: ___')
      }
    ]
  },

  sieteEsferas: {
    id: 'sieteEsferas',
    tag: 'leadership',
    level: 'builder',
    verseKey: 'sieteEsferas',
    title: T('Las 7 Esferas de Influencia en la Sociedad', 'The 7 Spheres of Cultural Influence'),
    bookKey: 'sieteEsferas',
    project: T('Tu <b>Mapeo de Esfera Vocacional</b> con plan de impacto cristiano para tu comunidad.', 'Your <b>Vocational Sphere Map</b> with Christian impact plan.'),
    steps: [
      {
        type: 'hook',
        kicker: T('Paso 1 · Apertura', 'Step 1 · Hook'),
        h: T('La fe fuera de las cuatro paredes', 'Faith outside church walls'),
        scenario: T('Muchos creen que servir a Dios es solo ser pastor o misionero tradicional. Pero Dios necesita médicos, ingenieros, artistas, educadores y empresarios íntegros.', 'Many think serving God is only being a pastor. God needs honest doctors, engineers, artists, educators, and entrepreneurs.'),
        body: T('Las 7 Esferas representan las áreas que moldean la cultura de una nación.', 'The 7 Spheres represent key areas that shape cultural values.')
      },
      {
        type: 'theory',
        kicker: T('Paso 2 · Las 7 Montañas', 'Step 2 · The 7 Mountains'),
        h: T('Los 7 Pilares Culturales', 'The 7 Cultural Pillars'),
        body: T('1. Artes y Entretenimiento · 2. Negocios y Economía · 3. Educación · 4. Familia · 5. Gobierno y Leyes · 6. Medios de Comunicación · 7. Iglesia y Fe.', '1. Arts/Media · 2. Business · 3. Education · 4. Family · 5. Government · 6. Media · 7. Church.'),
        diagram: T('<b>Sal y Luz</b><br>Tu profesión es tu púlpito; tu excelencia técnica es tu testimonio.', '<b>Salt & Light</b><br>Your profession is your platform; your excellence is your testimony.')
      },
      {
        type: 'quiz',
        kicker: T('Paso 3 · Quiz', 'Step 3 · Quiz'),
        h: T('Tu Llamado', 'Your Calling'),
        q: T('Si tu talento es la programación y el diseño web, ¿en qué esfera principal puedes impactar con valores bíblicos?', 'If your talent is coding and web design, in which primary sphere can you impact with values?'),
        opts: [
          { t: T('Negocios, Tecnología y Medios', 'Business, Technology & Media'), ok: true },
          { t: T('Únicamente en el coro de la iglesia', 'Only in the church choir'), ok: false },
          { t: T('En ninguna, la tecnología no se relaciona con la fe', 'None, technology does not relate to faith'), ok: false },
          { t: T('Solo si estudio teología', 'Only if I study theology'), ok: false }
        ],
        okMsg: T('¡Totalmente! La tecnología y los negocios transforman vidas cuando se construyen sobre la verdad.', 'Totally! Tech and business transform lives when anchored in truth.'),
        noMsg: T('La tecnología y los medios son herramientas de enorme alcance e impacto cultural.', 'Tech and media are powerful tools for cultural impact.')
      },
      {
        type: 'reflect',
        kicker: T('Paso 4 · Mapeo', 'Step 4 · Mapping'),
        h: T('Identifica tu Esfera de Interés', 'Identify your Sphere'),
        body: T('Escribe en cuál de las 7 esferas sientes mayor inclinación y qué problema te gustaría resolver.', 'Which of the 7 spheres attracts you most and what problem would you like to solve?'),
        prompt: T('• Mi esfera elegida: ___\n• Necesidad o injusticia que veo en esa área: ___\n• Cómo puedo aportar una solución con excelencia: ___', '• My chosen sphere: ___\n• Need or injustice observed: ___\n• How I can bring a solution with excellence: ___')
      }
    ]
  }
};
