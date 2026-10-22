// Mapeo ADITIVO de cápsulas y retos a los 4 Clústeres de Carácter (Agenda 2026-2027). No modifica data.js:
// 1 Mayordomía y Disciplina Personal · 2 Rigor Intelectual y Verdad · 3 Relaciones y Servicio Comunitario · 4 Liderazgo y Propósito
// Regla: inteligencia emocional/resiliencia/autogobierno → 1 · finanzas/presupuesto/ahorro → 1 y 4 · empatía/relaciones/comunicación → 3 · dones/vocación/decisiones → 4.
export const CAPSULE_CLUSTERS = {
  // Cápsulas de fundamento y secundaria (CAPSULES_DATA)
  identidad: [4], habitos: [1], lenguajes: [3], saludEmocional: [1], padreRico: [1, 4], sieteEsferas: [4], comunicacion: [3], bold: [4],
  presentaciones: [3], carreras: [4], ganarAmigos: [3], encuestas: [2], ideaNegocio: [1, 4], trabajoEquipo: [3], contabilidad: [1],
  planNegocio: [1, 4], construirWeb: [2], expediente: [2], curriculum: [4], entrevista: [4],
};
// Cápsulas por tema de 4.º a 7.º (junior_capsules.js)
export const JUNIOR_THEME_CLUSTERS = {
  super: [1], comida: [1], internet: [1, 2], empatia: [3], bullying: [3], dinero: [1, 4], proyectos: [4], habitos: [1], artes: [2], mundo: [2], emociones: [1],
};
// Retos y 80 mini proyectos por track
export const TRACK_CLUSTERS = {
  nat: [1], serv: [3], cook: [1], auto: [1], save: [1, 4], sci: [2], retos: [3],
  arts: [2], canva: [2], nature: [1], writing: [2], robotics: [2], cooking: [1], sport: [1], crafts: [2], photo: [2], shopping: [1, 4],
};
