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
 * EXTENSION_CAPSULES_DATA — Chanak Life Skills (chanak-life-skills / data.js)
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
        "commonError": "El profesor responde la pregunta esencial — sosténgala abierta.",
        "homework": "Traer una fotografía familiar."
      },
      {
        "number": 2,
        "title": "Lo que recibiste y lo que construyes",
        "objective": "Distinguir identidad recibida de construida.",
        "keyActivity": "Clasificación de 12 elementos propios en dos columnas.",
        "commonError": "Clasificar todo como \"construido\".",
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
        "keyActivity": "Autoevaluación con evidencia conductual real.",
        "commonError": "Usar el temperamento como excusa de conducta."
      },
      {
        "number": 5,
        "title": "Taller: diseño del Escudo",
        "objective": "Producir boceto de 4 cuadrantes + lema.",
        "keyActivity": "Producción individual guiada.",
        "checkpoint": "Checkpoint 1 — en rumbo/necesita ajuste, sin nota."
      },
      {
        "number": 6,
        "title": "Carta al yo futuro",
        "objective": "Argumentar con evidencia 3 influencias.",
        "keyActivity": "Escritura de 4 partes con regla de evidencia obligatoria.",
        "checkpoint": "Checkpoint 2 — hechos vs. adjetivos."
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
        "keyActivity": "Observación de 3 necesidades reales de su entorno.",
        "commonError": "Propuestas abstractas sin concreción real."
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
        "keyActivity": "Revisión individual de 5 min por estudiante.",
        "checkpoint": "Checkpoint 1 — plan corregido y viable."
      },
      {
        "number": 5,
        "title": "Ejecución — semana 1",
        "objective": "Ejecutar y documentar mientras ocurre.",
        "keyActivity": "Puesta en común por grupos pequeños.",
        "commonError": "Dejar la documentación para el final."
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
        "keyActivity": "Puesta en común de obstáculos reales.",
        "checkpoint": "Checkpoint 2 — ajuste de rumbo."
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
        "keyActivity": "Análisis de una meta abandonada.",
        "commonError": "Confundir sistema con más disciplina."
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
        "keyActivity": "Diseño de 3-4 bloques con día y hora exactos.",
        "checkpoint": "Checkpoint 1 — validado contra los datos de S2-S3."
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
        "keyActivity": "Reflexión guiada de rediseño.",
        "commonError": "Tratar el fallo como fracaso en vez de material de diseño."
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
        "keyActivity": "Contraste de dos versiones del mismo hecho.",
        "commonError": "Elegir el episodio más espectacular en vez del más verdadero."
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
        "keyActivity": "Presentación y feedback estructurado.",
        "checkpoint": "Checkpoint — guion ajustado."
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
        "keyActivity": "Presentación de 2 min «My Story in 2 Minutes».",
        "commonError": "Calificar la producción audiovisual por encima de la estructura."
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
        "keyActivity": "Registro diario de dos semanas.",
        "commonError": "Clasificar todo como \"necesidad\"."
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
        "keyActivity": "Checkpoint de ajuste.",
        "checkpoint": "Checkpoint — presupuesto corregido."
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
        "keyActivity": "Análisis de una decisión propia reciente.",
        "commonError": "Confundir \"buen carácter\" con temperamento agradable."
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
        "keyActivity": "Plan con indicador de medición.",
        "checkpoint": "Checkpoint 1."
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
        "keyActivity": "Ejemplo de la naranja + análisis de conflicto propio.",
        "commonError": "Solo analizar el propio interés, no el ajeno."
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
        "keyActivity": "Validación del profesor.",
        "checkpoint": "Checkpoint — conflicto validado."
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
        "keyActivity": "Clasificación de 5 frases en grupo.",
        "commonError": "Etiquetar como \"manipulación\" solo lo que no se comparte."
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
        "keyActivity": "Validación del profesor.",
        "checkpoint": "Checkpoint — contenido validado."
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
        "keyActivity": "Selección justificada.",
        "commonError": "Elegir un recurso sin margen real de decisión propia."
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
        "keyActivity": "Plan con indicador numérico.",
        "checkpoint": "Checkpoint — plan validado."
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
        "keyActivity": "Checkpoint temprano.",
        "checkpoint": "Checkpoint — ajuste temprano."
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
        "keyActivity": "Reflexión + validación de un adulto.",
        "commonError": "Dar cifras de peso o comparaciones entre estudiantes — nunca."
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
        "keyActivity": "Análisis de un episodio de liderazgo (propio o ajeno).",
        "commonError": "Diseñar el taller como exposición propia sin participación activa."
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
        "keyActivity": "Simulación de 10-15 min.",
        "checkpoint": "Checkpoint — plan ajustado."
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
        "keyActivity": "Observación de 3 necesidades.",
        "commonError": "Proponer ideas ya hechas por otros sin observación propia."
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
        "keyActivity": "Validación por el profesor.",
        "checkpoint": "Checkpoint — idea confirmada."
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
        "keyActivity": "Clasificación de 4 casos.",
        "commonError": "Buscar la respuesta correcta del profesor en vez de razonar."
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
        "keyActivity": "Validación del profesor.",
        "checkpoint": "Checkpoint — dilema validado."
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
        "keyActivity": "Diagnóstico comparativo.",
        "commonError": "Dar la respuesta en vez de la pregunta que ayuda a encontrarla."
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
        "keyActivity": "Registro del primer encuentro.",
        "checkpoint": "Checkpoint — ¿escuchó más de lo que habló?"
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
        "keyActivity": "Ensayo con un compañero.",
        "checkpoint": "Checkpoint — guion ajustado."
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
        "keyActivity": "Reflexión final honesta.",
        "commonError": "Forzar una conclusión positiva cuando la investigación reveló lo contrario."
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
        "keyActivity": "Redacción del primer borrador.",
        "checkpoint": "Checkpoint — hechos concretos, no generalidades."
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
        "keyActivity": "2-3 problemas candidatos.",
        "commonError": "Elegir un problema demasiado amplio para un trimestre."
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
        "keyActivity": "Revisión con mentor/coordinador.",
        "checkpoint": "Checkpoint 1."
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
        "keyActivity": "Sesión de ajuste normalizado.",
        "checkpoint": "Checkpoint 2."
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
        "keyActivity": "Investigación de universidad, FP y entrada laboral.",
        "commonError": "Investigar solo la opción de prestigio."
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
        "keyActivity": "Plan para cerrar huecos.",
        "checkpoint": "Checkpoint."
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
        "keyActivity": "Ensayo completo con feedback.",
        "checkpoint": "Checkpoint — guion ajustado."
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

module.exports = { EXTENSION_CAPSULES_DATA };


if (typeof window !== 'undefined') {
  window.CHANAK_DATA = {
    BIBLE_VERSES,
    BOOKS,
    JUNIORS_RETOS,
    HIGH_SCHOOL_LEVELS,
    CAPSULES_DATA,
    EXPEDIENTE_CATEGORIES,
    EXTENSION_CAPSULES_DATA
  };
}
