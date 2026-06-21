window.LA_VARIANTE_DEFAULT_DATA = {
  band: {
    name: "La Variante",
    tagline: "Una banda en movimiento: canciones con filo, corazón y una identidad imposible de dejar quieta.",
    shortPitch: "La Variante mezcla energía en vivo, canciones con narrativa propia y una puesta en escena cercana, potente y adaptable a teatros, festivales, bares, eventos culturales y formatos privados.",
    city: "Bogotá, Colombia",
    founded: "2026",
    genre: "Rock alternativo · Pop rock · Fusión latina",
    mood: "Intenso, bailable, sensible y cinematográfico",
    contactEmail: "booking@lavariante.com",
    contactPhone: "+57 300 000 0000",
    instagram: "@lavariante",
    youtube: "La Variante Oficial",
    spotify: "La Variante",
    website: "lavariante.com",
    logoText: "LV"
  },
  colors: {
    accent: "#b7ff3c",
    secondary: "#7a5cff",
    hot: "#ff3d8b"
  },
  heroStats: [
    { label: "Formato", value: "Full band / acústico" },
    { label: "Show", value: "45–90 min" },
    { label: "Base", value: "Bogotá" },
    { label: "Disponible", value: "Festivales · eventos · bares" }
  ],
  members: [
    { name: "Voz principal", role: "Front / narrativa", bio: "Conduce la energía del show y conecta las canciones con el público.", icon: "🎙️" },
    { name: "Guitarra", role: "Texturas / riffs", bio: "Construye el color eléctrico de la banda: riffs, atmósferas y solos.", icon: "🎸" },
    { name: "Bajo", role: "Groove", bio: "Sostiene el pulso y le da cuerpo a cada canción.", icon: "🎛️" },
    { name: "Batería", role: "Motor en vivo", bio: "Marca la intensidad del show y empuja cada momento hacia arriba.", icon: "🥁" }
  ],
  identity: [
    {
      title: "Canción como historia",
      text: "Cada tema funciona como una escena: hay tensión, imagen, movimiento y un punto emocional claro. Nada de cantar por cantar, ese deporte extremo de la humanidad aburrida."
    },
    {
      title: "Show adaptable",
      text: "La banda puede presentarse en formato completo, acústico o showcase corto para convocatorias, bares, eventos corporativos y circuitos culturales."
    },
    {
      title: "Estética nocturna",
      text: "Una identidad visual con contraste, neón, sombras y movimiento. Moderna sin parecer plantilla reciclada de 2014, pequeño milagro digital."
    }
  ],
  songs: [
    {
      title: "Ciudad Inclinada",
      status: "Single principal",
      duration: "3:42",
      energy: "Alta",
      theme: "Ciudad / vértigo / cambio",
      mood: "Explosiva",
      tags: ["rock", "festival", "coro fuerte"],
      description: "Una canción de apertura con pulso urbano, guitarras brillantes y un coro pensado para que el público entre rápido en el universo de la banda.",
      links: { spotify: "", youtube: "" }
    },
    {
      title: "Otra Forma de Caer",
      status: "En vivo",
      duration: "4:18",
      energy: "Media alta",
      theme: "Relaciones / memoria / renacer",
      mood: "Emocional",
      tags: ["balada rock", "teatro", "clímax"],
      description: "Tema de desarrollo emocional, ideal para mitad del show o escenarios donde la banda quiera mostrar profundidad y sensibilidad.",
      links: { spotify: "", youtube: "" }
    },
    {
      title: "Ruido Blanco",
      status: "Demo",
      duration: "3:25",
      energy: "Alta",
      theme: "Ansiedad / tecnología / ruido mental",
      mood: "Tensa",
      tags: ["alternativo", "oscuro", "visual"],
      description: "Canción con carácter más oscuro y moderno, perfecta para una puesta visual con luces, cortes y dinámica escénica fuerte.",
      links: { spotify: "", youtube: "" }
    },
    {
      title: "La Variante",
      status: "Himno de banda",
      duration: "4:00",
      energy: "Muy alta",
      theme: "Identidad / decisión / ruptura",
      mood: "Catártica",
      tags: ["cierre", "fan favorite", "coreable"],
      description: "Cierre natural del show. Resume el concepto de la banda y deja una sensación de identidad clara para el público y programadores.",
      links: { spotify: "", youtube: "" }
    }
  ],
  showFormats: [
    {
      name: "Show completo",
      duration: "75–90 min",
      idealFor: "Festivales, bares, teatros, eventos culturales",
      includes: "Repertorio amplio, interacción con público, bloque energético y cierre fuerte."
    },
    {
      name: "Show estándar",
      duration: "45–60 min",
      idealFor: "Convocatorias, showcases, programación cultural",
      includes: "Set compacto con las canciones más representativas y transiciones ágiles."
    },
    {
      name: "Formato acústico",
      duration: "30–45 min",
      idealFor: "Eventos privados, entrevistas, sesiones íntimas, lanzamientos",
      includes: "Versiones reducidas con énfasis en letras, cercanía y conversación."
    }
  ],
  technicalRider: {
    summary: "Rider base para formato full band. Ajustable según venue y formato. El objetivo: sonar bien sin convertir el montaje en una novela rusa con cables.",
    stageSize: "Mínimo recomendado: 5 m de frente x 4 m de fondo",
    power: "Mínimo 2 puntos eléctricos independientes y regulados. Ideal: circuito separado para backline y audio.",
    arrival: "Prueba de sonido ideal: 60–90 min antes de apertura de puertas.",
    inputList: [
      { ch: 1, source: "Kick", mic: "Beta 52 / D112 / similar", stand: "Corto", notes: "Gate/comp según sala" },
      { ch: 2, source: "Snare", mic: "SM57 / similar", stand: "Corto", notes: "" },
      { ch: 3, source: "Hi-hat", mic: "Condensador", stand: "Boom", notes: "Opcional en salas pequeñas" },
      { ch: 4, source: "Tom 1", mic: "Clip / dinámico", stand: "Clip", notes: "" },
      { ch: 5, source: "Floor tom", mic: "Clip / dinámico", stand: "Clip", notes: "" },
      { ch: 6, source: "OH L", mic: "Condensador", stand: "Boom", notes: "" },
      { ch: 7, source: "OH R", mic: "Condensador", stand: "Boom", notes: "" },
      { ch: 8, source: "Bajo DI", mic: "DI activa", stand: "", notes: "Salida balanceada" },
      { ch: 9, source: "Guitarra L", mic: "SM57 / DI modelador", stand: "Boom", notes: "Según backline" },
      { ch: 10, source: "Guitarra R / Teclas", mic: "DI / SM57", stand: "Boom", notes: "Opcional según formato" },
      { ch: 11, source: "Voz lead", mic: "SM58 / inalámbrico", stand: "Recto", notes: "Reverb plate corta" },
      { ch: 12, source: "Coro 1", mic: "SM58", stand: "Recto", notes: "" },
      { ch: 13, source: "Coro 2", mic: "SM58", stand: "Recto", notes: "Opcional" },
      { ch: 14, source: "Playback / secuencias L", mic: "DI", stand: "", notes: "Opcional" },
      { ch: 15, source: "Playback / secuencias R", mic: "DI", stand: "", notes: "Opcional" }
    ],
    monitors: [
      "Mix 1: Voz lead",
      "Mix 2: Batería",
      "Mix 3: Guitarra / bajo",
      "Mix 4: Side o banda general"
    ],
    backline: [
      "Batería completa con hardware, silla y tapete",
      "Amplificador de bajo o DI profesional",
      "Amplificador de guitarra o línea para modelador",
      "4 atriles o soportes según formato",
      "Regletas y extensiones certificadas"
    ],
    hospitality: [
      "Agua para integrantes y equipo técnico",
      "Espacio seguro para guardar instrumentos",
      "Parqueadero o zona de descargue si aplica",
      "Camerino o zona de espera"
    ]
  },
  booking: {
    headline: "Contrata a La Variante",
    text: "Disponible para conciertos, festivales, bares, eventos culturales, lanzamientos, sesiones acústicas y formatos especiales.",
    requirements: "Para cotizar, indicar fecha, ciudad, tipo de evento, duración esperada, horario, condiciones de sonido/backline y presupuesto estimado.",
    emailTemplate: "Hola, somos La Variante. Nos interesa participar en su evento. Compartimos nuestro EPK web con bio, canciones, formatos de show y rider técnico. Quedamos atentos para enviar cotización y disponibilidad según fecha, ciudad y requerimientos técnicos."
  },
  faqs: [
    { q: "¿La banda puede tocar covers?", a: "Sí, según el evento. El show principal prioriza repertorio propio, pero puede incluir versiones seleccionadas si el contexto lo pide." },
    { q: "¿Se puede presentar en formato reducido?", a: "Sí. Hay formato acústico y showcase para espacios pequeños, entrevistas o eventos privados." },
    { q: "¿Llevan sonido propio?", a: "Depende del evento. La web permite compartir el rider base para que el venue confirme qué aporta y qué debe llevar la banda." },
    { q: "¿Tienen material para prensa?", a: "Sí. La sección EPK resume bio, fotos, links, canciones, redes y contacto para medios o programación." }
  ]
};
