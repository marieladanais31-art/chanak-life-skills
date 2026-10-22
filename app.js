/* =====================================================================
   Chanak Life Skills & Leadership Studio — Application Controller
   Unified Engine: Dual Diploma LMS + Portal Chanak + Interactive Repos
   FLDOE #134620 · MSA-CESS Candidate
   ===================================================================== */

import {
  BIBLE_VERSES,
  BOOKS,
  JUNIORS_RETOS,
  HIGH_SCHOOL_LEVELS,
  CAPSULES_DATA,
  EXPEDIENTE_CATEGORIES,
  EXTENSION_CAPSULES_DATA,
  RIASEC_TEST_DATA,
  VOCATIONAL_TRACKS
} from './data.js';
import { JUNIOR_TRACKS, JUNIOR_PROJECTS, juniorSkinForGrade } from './projects.js';
import { ES_EN_DYNAMIC } from './i18n_en.js';
import { DEVOTIONAL_WEEKS, DEVOTIONAL_MONTHS } from './devotional.js';
import { DAILY_DEVOTIONALS } from './daily.js';
import { JUNIOR_THEMES, JUNIOR_CAPSULES, JUNIOR_TRAMOS, tramoForGrade, localizeCapsule } from './junior_capsules.js';
import { lifeSkillsGuideUrl } from './guides.js';
import { AGENDA_2026_2027, CHARACTER_CLUSTERS, getCurrentAgendaWeek, clusterOfTrait, FLORIDA_TZ, floridaIsoDate } from './agenda.js';

// ---- Constantes de Juniors (arriba para que existan antes del primer render) ----
const JK_LEVELS = [
  { es: 'Semilla', en: 'Seed', icon: '🌱' }, { es: 'Brote', en: 'Sprout', icon: '🌿' }, { es: 'Explorador', en: 'Explorer', icon: '🧭' },
  { es: 'Constructor', en: 'Builder', icon: '🔨' }, { es: 'Líder', en: 'Leader', icon: '🦁' }, { es: 'Embajador', en: 'Ambassador', icon: '🏆' },
];
const JK_AVATARS = ['🦊', '🐼', '🦁', '🐯', '🐙', '🦄', '🐸', '🚀', '🤖', '🦋'];
const JK_COINS = 25; // el servidor decide el monto real (award_life_skills_coins)

// ---- Textos fijos del index.html (el inglés es el idioma principal; el español es la alternativa) ----
const STATIC_EN = {
 "🎓 Estudiante": "🎓 Student",
 "🧑‍🏫 Mentor": "🧑‍🏫 Mentor",
 "🌱 Secundaria (8–12)": "🌱 High School (8–12)",
 "🌿 Junior (1–7)": "🌿 Junior (1–7)",
 "🌱 Sembrador": "🌱 Sower",
 "Carácter · Propósito · Servicio · Emprendimiento · College Prep": "Character · Purpose · Service · Entrepreneurship · College Prep",
 "Desarrollo de carácter, autodisciplina, mayordomía financiera, relaciones sanas y liderazgo de impacto real con cosmovisión bíblica.": "Character formation, self-discipline, financial stewardship, healthy relationships and impactful leadership with a Biblical worldview.",
 "🔴 AULA VIRTUAL EN VIVO": "🔴 LIVE VIRTUAL CLASSROOM",
 "Clases Virtuales Oficiales · Google Meet": "Official Virtual Classes · Google Meet",
 "Conéctate a tus sesiones semanales con tu mentora para debate, tutoría y defensa oral de proyectos.": "Join your weekly sessions with your mentor for discussion, tutoring and oral defense of projects.",
 "Martes": "Tuesday",
 "Jueves": "Thursday",
 "📹 Unirme a Clase Virtual (Meet) ↗": "📹 Join the Virtual Class (Meet) ↗",
 "Vista Mentor / Docente Activa · Guía Pedagógica FLDOE #134620": "Mentor / Teacher View Active · Teaching Guide FLDOE #134620",
 "Visualizando preguntas esenciales, minutado de sesión, estándares de Florida y advertencias de errores conceptuales comunes.": "Showing essential questions, session timing, Florida standards and warnings about common misconceptions.",
 "✕ Salir a Vista Estudiante": "✕ Exit to Student View",
 "🧭 Mi Ruta de Aprendizaje": "🧭 My Learning Path",
 "🎓 Expediente Universitario": "🎓 University Portfolio",
 "📋 Rúbrica 40/30/30": "📋 40/30/30 Rubric",
 "💊 Vitaminas": "💊 Vitamins",
 "🛠️ Herramientas Interactivas": "🛠️ Interactive Tools",
 "🌿 Catálogo Junior (8–13)": "🌿 Junior Catalog (8–13)",
 "🧭 Carácter · Character": "🧭 Character",
 "🌱 Seedling · Grado 8/9 (13–14 años)": "🌱 Seedling · Grade 8/9 (ages 13–14)",
 "🧭 Explorer · Grado 10 (15 años)": "🧭 Explorer · Grade 10 (age 15)",
 "🔨 Builder · Grado 11 (16 años)": "🔨 Builder · Grade 11 (age 16)",
 "🚀 Launch · Grado 12 (17 años)": "🚀 Launch · Grade 12 (age 17)",
 "Acceso a Vista Mentor": "Mentor View Access",
 "Esta vista contiene las guías docentes, minutados y criterios de evaluación formativa. Ingresa el PIN institucional para desbloquear.": "This view contains the teaching guides, session timing and formative assessment criteria. Enter the institutional PIN to unlock.",
 "PIN de Docente Institucional:": "Institutional Teacher PIN:",
 "PIN incorrecto. Verifica con la coordinación académica.": "Incorrect PIN. Check with the academic coordination.",
 "Cancelar": "Cancel",
 "Desbloquear →": "Unlock →",
 "Billetera ChanakCoins": "ChanakCoins Wallet",
 "Moneda virtual de crecimiento, mayordomía y confianza formativa.": "Virtual currency of growth, stewardship and formative trust.",
 "ChanakCoins Activas": "Active ChanakCoins",
 "Nivel de Confianza:": "Trust Level:",
 "Acumula 100 🪙 para ascender al rango de": "Collect 100 🪙 to rise to the rank of",
 "Mayordomo": "Steward",
 "Entendido": "Got it",
 "Subir Reto a Drive": "Upload Challenge to Drive",
 "Sigue las instrucciones oficiales de entrega de Chanak para validar tu evidencia.": "Follow Chanak's official submission instructions to validate your evidence.",
 "📂 Carpeta de Destino en Google Drive:": "📂 Destination Folder in Google Drive:",
 "Guarda la foto o documento del proceso (debe verse tu trabajo).": "Save the photo or document of the process (your work must be visible).",
 "Nombra el archivo con tu nombre y el número de reto.": "Name the file with your name and the challenge number.",
 "Tu mentora validará la evidencia para acreditar las monedas en tu SIS.": "Your mentor will validate the evidence to credit the coins in your SIS.",
 "✓ Marcar como Completado (+": "✓ Mark as Completed (+",
 "Dual Diploma & Portal de Apoyo Académico · Florida · Panamá · España": "Dual Diploma & Academic Support Portal · Florida · Panama · Spain",
 "Mentor IA": "AI Mentor",
 "Mentor IA Chanak": "Chanak AI Mentor",
 "Guía Socrática de Carácter, Hábitos & Proyectos": "Socratic Guide for Character, Habits & Projects",
 "Aviso de Transparencia de IA:": "AI Transparency Notice:",
 "Estás interactuando con un asistente de inteligencia artificial (Google Gemini). Su rol es socrático (guiarte a pensar y reflexionar por ti mismo). No reemplaza la guía de tus padres o mentores, ni debe usarse para hacer tus tareas por ti.": "You are interacting with an artificial intelligence assistant (Google Gemini). Its role is Socratic (guiding you to think and reflect for yourself). It does not replace the guidance of your parents or mentors, and must not be used to do your homework for you.",
 "🛡️ Escudo de Armas": "🛡️ Coat of Arms",
 "✍️ Cuaderno de Vida · Reflexión del Estudiante:": "✍️ Life Notebook · Student Reflection:",
 "🔒 Vista pedagógica restringida a tutores y coordinadores": "🔒 Teaching view restricted to tutors and coordinators",
 "🧑‍🏫 Vista Mentor Desbloqueada con Éxito": "🧑‍🏫 Mentor View Unlocked Successfully",
 "🛡️ Escudo de Armas guardado correctamente": "🛡️ Coat of Arms saved successfully",
 "⚠️ No se pudo registrar tus ChanakCoins. Habla con tu mentora.": "⚠️ Your ChanakCoins could not be recorded. Talk to your mentor.",
 "✓ Ya registrado anteriormente — sin monedas duplicadas": "✓ Already recorded earlier — no duplicate coins",
 "⚠️ Sin conexión con el SIS — tus ChanakCoins no se registraron.": "⚠️ No connection to the SIS — your ChanakCoins were not recorded.",
 "💾 Guardar Reflexión (+10 🪙)": "💾 Save Reflection (+10 🪙)",
 "⚡ Hábitos 21 Días": "⚡ 21-Day Habits",
 "🎯 Proyecto BOLD": "🎯 BOLD Project",
 "📖 Principio Bíblico": "📖 Biblical Principle",
 "Enviar": "Send",
 "🛡️ Entorno seguro para estudiantes · Sin almacenamiento de datos personales (Zero PII)": "🛡️ Safe environment for students · No personal data stored (Zero PII)"
};
const STATIC_ATTR_EN = {
 "Ver balance de ChanakCoins": "View ChanakCoins balance",
 "Ingresa el PIN": "Enter the PIN",
 "Hablar con el Mentor IA de Carácter & Life Skills": "Talk to the Character & Life Skills AI Mentor",
 "Cerrar": "Close",
 "Pregúntale a tu Mentor IA sobre carácter, hábitos o tu proyecto...": "Ask your AI Mentor about character, habits or your project..."
};
// Ficha A4: se construye justo antes de imprimir en el idioma activo (membrete, estudiante, semana, reto, evidencias y firmas).
const PRINT_LABELS = {
  en: {
    header: 'Chanak International Academy · Private School Registration FLDOE #134620', program: '20% Life Skills & Leadership Track · SIS Folder: 02 Life Skills',
    title: 'Challenge Slip / Family Report', student: 'Student Name', stage: 'Grade / Life Stage', year: 'School Year', week: 'Week / Trait', challenge: 'Challenge Title',
    date: 'Date', coins: 'ChanakCoins by cluster', evidence: 'Evidence Link (Google Drive / Video)', notes: 'Notes', sigStudent: 'Student Signature', sigMentor: 'Supervisor / Mentor Signature',
  },
  es: {
    header: 'Chanak International Academy · Escuela privada registrada FLDOE #134620', program: 'Ruta 20% Life Skills & Leadership · Carpeta SIS: 02 Life Skills',
    title: 'Ficha de reto / Reporte familiar', student: 'Nombre del estudiante', stage: 'Grado / Etapa', year: 'Año escolar', week: 'Semana / Rasgo', challenge: 'Título del reto',
    date: 'Fecha', coins: 'ChanakCoins por clúster', evidence: 'Enlace de evidencia (Google Drive / Video)', notes: 'Observaciones', sigStudent: 'Firma del estudiante', sigMentor: 'Firma del supervisor / mentor',
  },
};

// ---------------- Backend ----------------
// La anon key de Supabase es una clave publicable: está pensada para vivir en el
// cliente. La autoridad real está en el servidor (firma HMAC del token, PIN en
// Vault, montos de ChanakCoins decididos por la RPC).
const SUPABASE_URL = 'https://gepsbesbhsxfyxymemim.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlcHNiZXNiaHN4Znl4eW1lbWltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNjg1MjgsImV4cCI6MjA4Mzc0NDUyOH0.VQ6q4ex-tWp2Nr2YK-Sd7PPGCZgcQvQUmTGNNjZtp5Q';

// 3 Compromisos Formativos Clave de la Semana (Enfoque Dual Diploma)
const WEEKLY_GOALS_LIST = [
  {
    id: 'english',
    badge_es: '2 Horas (1h Online)',
    badge_en: '2 Hours (1h Online)',
    title_es: 'Inglés Académico (2 Horas / semana)',
    title_en: 'Academic English (2 Hours / week)',
    desc_es: '1 Hora de clase virtual interactiva en vivo por Google Meet (Martes 16:00–17:00 CET) + 1 Hora asíncrona de trabajo en plataforma / unidades.',
    desc_en: '1 Hour live online class on Google Meet (Tuesday 16:00–17:00 CET) + 1 Hour asynchronous coursework on platform / units.',
    schedule_es: '🇬🇧 Martes 16:00 – 17:00 CET (En vivo)',
    schedule_en: '🇬🇧 Tuesday 16:00 – 17:00 CET (Live)',
    icon: '🇬🇧'
  },
  {
    id: 'lifeskills',
    badge_es: '2 Horas (1h Online)',
    badge_en: '2 Hours (1h Online)',
    title_es: 'Life Skills & Liderazgo (2 Horas / semana)',
    title_en: 'Life Skills & Leadership (2 Hours / week)',
    desc_es: '1 Hora de mentoría formativa en vivo por Google Meet (Jueves 18:00–19:00 CET) + 1 Hora de proyecto trimestral, bitácora y cápsulas interactivas.',
    desc_en: '1 Hour live mentoring on Google Meet (Thursday 18:00–19:00 CET) + 1 Hour on quarterly project, journaling & interactive capsules.',
    schedule_es: '🧭 Jueves 18:00 – 19:00 CET (En vivo)',
    schedule_en: '🧭 Thursday 18:00 – 19:00 CET (Live)',
    icon: '🧭'
  },
  {
    id: 'socialstudies',
    badge_es: '1 Hora Semanal',
    badge_en: '1 Hour Weekly',
    title_es: 'American History, Civics o Economy (1 Hora / semana)',
    title_en: 'American History, Civics or Economy (1 Hour / week)',
    desc_es: '1 Hora de estudio independiente en plataforma de ciencias sociales estadounidenses (FLDOE #134620), avanzando en lecturas y actividades.',
    desc_en: '1 Hour independent study on the platform in US social studies (FLDOE #134620), completing readings and activities.',
    schedule_es: '🏛️ Asíncrono / Plataforma Chanak',
    schedule_en: '🏛️ Asynchronous / Chanak Platform',
    icon: '🏛️'
  }
];

// 3 Metas Semanales Clave de Life Skills (Enfoque Off-Campus / SIS)
const SIS_WEEKLY_GOALS_LIST = [
  {
    id: 'capsule',
    badge_es: 'Cápsula Semanal',
    badge_en: 'Weekly Capsule',
    title_es: 'Cápsula de Formación & Carácter (1–2h)',
    title_en: 'Character & Life Skills Capsule (1–2h)',
    desc_es: 'Avanza en la sesión activa del trimestre en tu cuaderno digital, reflexionando con principios bíblicos y ética práctica (+15 Coins).',
    desc_en: 'Advance the active quarterly session in your digital notebook, reflecting on biblical principles and practical ethics (+15 Coins).',
    schedule_es: '🎯 Cuaderno Digital & Cápsula Interactiva',
    schedule_en: '🎯 Digital Notebook & Interactive Capsule',
    icon: '🎯'
  },
  {
    id: 'habit',
    badge_es: 'Hábito Diario',
    badge_en: 'Daily Habit',
    title_es: 'Práctica de Hábitos & Autodisciplina (21 Días)',
    title_en: 'Habit Practice & Self-Discipline (21 Days)',
    desc_es: 'Registra tu hábito formativo diario (lectura, devocional, orden o mayordomía) en el Tracker Interactivo (+10 Coins).',
    desc_en: 'Log your daily habit (reading, devotional, order, or stewardship) on the Interactive Tracker (+10 Coins).',
    schedule_es: '⚡ Registro continuo en el Habit Tracker',
    schedule_en: '⚡ Continuous logging on Habit Tracker',
    icon: '⚡'
  },
  {
    id: 'evidence',
    badge_es: 'Proyecto Trimestral',
    badge_en: 'Quarterly Project',
    title_es: 'Proyecto del Trimestre · Carpeta SIS (20%)',
    title_en: 'Quarterly Project · SIS Dossier (20%)',
    desc_es: 'Avanza en tu proyecto oficial (Q1: Escudo de Armas / Q2: Tracker & Servicio / Q3: Proyecto BOLD) para tu carpeta 03_LIFE_SKILLS.',
    desc_en: 'Advance your official project (Q1: Coat of Arms / Q2: Tracker & Service / Q3: BOLD Project) for your 03_LIFE_SKILLS folder.',
    schedule_es: '📁 Evidencia oficial para el SIS',
    schedule_en: '📁 Official evidence for the SIS',
    icon: '📁'
  }
];

const VIEWS_BY_AUDIENCE = {
  junior: ['juniors', 'capsulas', 'herramientas', 'caracter'],
  highschool: ['ruta', 'expediente', 'rubrica', 'transversales', 'herramientas', 'capsulas', 'cuaderno', 'test-dones', 'habitos', 'caracter'],
};

// ---------------- Application State ----------------
const state = {
  lang: 'en', // el inglés es el idioma principal
  mode: 'portal', // 'portal' or 'dual'
  isEmbed: false,
  viewMode: 'ruta', // 'ruta', 'expediente', 'rubrica', 'transversales', 'herramientas', 'juniors'
  currentLevel: 'seedling', // 'seedling', 'explorer', 'builder', 'launch'
  assignedLevel: null,
  selectedTrack: (typeof localStorage !== 'undefined' && localStorage.getItem('chanak_selected_track')) || 'tree',
  expandedModules: {},
  roleView: 'student', // 'student' or 'mentor'
  isMentorUnlocked: false,
  userRole: 'student',
  // Se rellena solo tras validación en servidor; vacío en Vista Estudiante.
  mentorContent: {},

  // Audiencia: 'junior' (8-13, Off-Campus) o 'highschool' (Seedling..Launch).
  // null = sin sesión y sin elegir todavía; se muestra el selector de entrada.
  audience: null,

  juniorsFilter: 'all',
  coins: parseInt(localStorage.getItem('chanak_coins') || '20', 10),
  activeCapsule: null,
  capsuleCurrentStep: 0,
  activeSubmittingReto: null,

  // Student and SIS Integration State
  token: null,
  studentId: null,
  studentName: null,
  schoolYear: null,
  isSis: false,

  // Active Curriculum Module & Session State
  activeModuleId: null,
  activeSessionNum: 1,
  userAgeTier: 'standard', // 'standard' or 'lower'

  // Test RIASEC / Dones State
  riasecAnswers: JSON.parse(localStorage.getItem('chanak_riasec_answers') || '{}'),
  riasecResult: JSON.parse(localStorage.getItem('chanak_riasec_result') || 'null'),

  // Interactive Tools State
  trackerHabitName: localStorage.getItem('chanak_habit_name') || 'Lectura bíblica diaria 10 min',
  trackerDays: JSON.parse(localStorage.getItem('chanak_tracker_days') || '[true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]'),
  
  coatFe: localStorage.getItem('chanak_coat_fe') || 'Dios es mi fundamento',
  coatRaices: localStorage.getItem('chanak_coat_raices') || 'Familia y tradición de esfuerzo',
  coatTalentos: localStorage.getItem('chanak_coat_talentos') || 'Liderazgo y escritura',
  coatSueno: localStorage.getItem('chanak_coat_sueno') || 'Universidad y servicio de impacto'
};

// ---------------- Global Function Attachments ----------------
window.switchLanguage = switchLanguage;
window.switchRoleView = switchRoleView;
window.openMentorPinModal = openMentorPinModal;
window.closeMentorPinModal = closeMentorPinModal;
window.submitMentorPin = submitMentorPin;

window.setViewMode = setViewMode;
window.renderRubricaView = renderRubricaView;
window.chooseAudience = chooseAudience;
window.resetAudience = resetAudience;
window.selectHighSchoolLevel = selectHighSchoolLevel;
window.selectStage = selectStage;
window.filterJuniors = filterJuniors;

window.openCapsule = openCapsule;
window.closeCapsuleModal = closeCapsuleModal;
window.capsuleNextStep = capsuleNextStep;
window.capsulePrevStep = capsulePrevStep;
window.checkQuizStepAnswer = checkQuizStepAnswer;
window.finishCapsule = finishCapsule;

window.openWalletModal = openWalletModal;
window.closeWalletModal = closeWalletModal;
window.openSubmissionModal = openSubmissionModal;
window.closeSubmissionModal = closeSubmissionModal;
window.confirmSubmission = confirmSubmission;

// Interactive Habit Tracker & Coat of Arms handlers
window.toggleTrackerDay = toggleTrackerDay;
window.updateTrackerHabit = updateTrackerHabit;
window.updateCoatOfArms = updateCoatOfArms;

// Unified Route & Vocational Handlers
window.toggleModuleAccordion = toggleModuleAccordion;
window.selectVocationalTrack = selectVocationalTrack;
window.toggleDailyGoalDay = toggleDailyGoalDay;

// Curriculum Modules & Sessions Handlers
window.openCurriculumModule = openCurriculumModule;
window.setModuleAgeTier = setModuleAgeTier;
window.selectModuleSession = selectModuleSession;
window.saveNotebookResponse = saveNotebookResponse;
window.completeModuleSession = completeModuleSession;
window.finishCurriculumModule = finishCurriculumModule;
window.showCoinToast = showCoinToast;

// RIASEC Test Handlers
window.setRiasecAnswer = setRiasecAnswer;
window.calculateRiasecProfile = calculateRiasecProfile;
window.resetRiasecTest = resetRiasecTest;
window.toggleWeeklyCommitment = toggleWeeklyCommitment;

// ---------------- Initialization ----------------
function initApp() {
  const params = new URLSearchParams(window.location.search);
  
  const studentNameParam = (params.get('student_name') || '').toLowerCase();
  const isGabrielOrDaniel = studentNameParam.includes('gabriel') || studentNameParam.includes('daniel');

  if (params.get('token')) {
    state.token = params.get('token');
    state.studentId = params.get('student_id');
    state.studentName = params.get('student_name');
    state.schoolYear = params.get('school_year');
    state.isSis = true;
    state.mode = 'portal';

    // Parse signed token (5 parts: student_id.school_year.level.expires_at.signature)
    const tokenParts = state.token.split('.');
    let rawLevel = '';
    if (tokenParts.length === 5) {
      rawLevel = tokenParts[2].toLowerCase();
    } else if (params.get('level')) {
      rawLevel = params.get('level').toLowerCase();
    } else {
      rawLevel = 'seedling';
    }

    if (rawLevel.includes('seedling') || rawLevel.includes('8') || rawLevel.includes('freshman') || rawLevel === '1') {
      state.assignedLevel = 'seedling';
    } else if (rawLevel.includes('explorer') || rawLevel.includes('10') || rawLevel.includes('sophomore') || rawLevel === '2') {
      state.assignedLevel = 'explorer';
    } else if (rawLevel.includes('builder') || rawLevel.includes('11') || rawLevel === '3') {
      state.assignedLevel = 'builder';
    } else if (rawLevel.includes('launch') || rawLevel.includes('12') || rawLevel.includes('senior') || rawLevel === '4') {
      state.assignedLevel = 'launch';
    } else if (rawLevel.includes('junior')) {
      state.assignedLevel = 'junior';
    } else {
      state.assignedLevel = 'seedling';
    }

    state.currentLevel = state.assignedLevel;

    // Normalización especial para Gabriel, Daniel o estudiantes en Grado 8+ / Secundaria
    if (isGabrielOrDaniel || ['seedling', 'explorer', 'builder', 'launch'].includes(state.assignedLevel)) {
      state.audience = 'highschool';
      if (isGabrielOrDaniel || !state.currentLevel || state.currentLevel === 'junior') {
        state.assignedLevel = 'seedling';
        state.currentLevel = 'seedling';
      }
      state.viewMode = 'ruta';
      try { localStorage.setItem('chanak_audience', 'highschool'); } catch (e) {}
    } else {
      state.audience = state.assignedLevel === 'junior' ? 'junior' : 'highschool';
      if (state.audience === 'junior') {
        state.currentLevel = null;
        state.viewMode = 'juniors';
      } else {
        state.viewMode = 'ruta';
      }
    }
    state.userRole = 'student';
  } else {
    state.isSis = false;
    state.assignedLevel = null;

    const chosen = params.get('audience') || localStorage.getItem('chanak_audience');
    const gradeParam = params.get('grade');
    const levelParam = params.get('level');
    let resolvedHs = false;

    if (isGabrielOrDaniel) {
      state.audience = 'highschool';
      state.assignedLevel = 'seedling';
      state.currentLevel = 'seedling';
      state.viewMode = 'ruta';
      resolvedHs = true;
      try { localStorage.setItem('chanak_audience', 'highschool'); } catch (e) {}
    } else if (gradeParam) {
      const g = gradeParam.toLowerCase();
      const n = parseInt((g.match(/\d+/) || [])[0], 10);
      if (n >= 8 || g.includes('seedling') || g.includes('freshman') || g.includes('eso') || g.includes('bach')) {
        state.audience = 'highschool';
        state.assignedLevel = 'seedling';
        state.currentLevel = 'seedling';
        state.viewMode = 'ruta';
        resolvedHs = true;
        try { localStorage.setItem('chanak_audience', 'highschool'); } catch (e) {}
      }
    }

    if (!resolvedHs && levelParam) {
      let lvl = levelParam.toLowerCase();
      if (lvl.includes('seedling') || lvl.includes('8') || lvl.includes('freshman') || lvl === '1') lvl = 'seedling';
      else if (lvl.includes('explorer') || lvl.includes('10') || lvl.includes('sophomore') || lvl === '2') lvl = 'explorer';
      else if (lvl.includes('builder') || lvl.includes('11') || lvl === '3') lvl = 'builder';
      else if (lvl.includes('launch') || lvl.includes('12') || lvl.includes('senior') || lvl === '4') lvl = 'launch';

      if (['seedling', 'explorer', 'builder', 'launch'].includes(lvl)) {
        state.audience = 'highschool';
        state.assignedLevel = lvl;
        state.currentLevel = lvl;
        state.viewMode = 'ruta';
        resolvedHs = true;
        try { localStorage.setItem('chanak_audience', 'highschool'); } catch (e) {}
      }
    }

    if (!resolvedHs) {
      state.audience = (chosen === 'junior' || chosen === 'highschool') ? chosen : null;
      if (state.audience === 'junior') {
        state.viewMode = 'juniors';
        state.currentLevel = null;
      } else if (state.audience === 'highschool') {
        state.viewMode = 'ruta';
        state.currentLevel = state.currentLevel || 'seedling';
      }
    }
  }

  // Un estudiante Junior (Primaria, token/audiencia junior) nunca entra por la rama común de Dual Diploma (8.º en adelante),
  // aunque la URL traiga mode=dual: esa rama es otra, con otro horario y sin las cápsulas Junior.
  if ((params.get('mode') === 'dual' || window.location.pathname.includes('dualdiploma')) && state.audience !== 'junior') {
    state.mode = 'dual';
  }
  state.country = params.get('country') || '';
  
  if (params.get('embed') === 'true' || params.get('embed') === '1' || window.self !== window.top) {
    state.isEmbed = true;
    document.body.classList.add('embed-mode');
  }

  {
    let saved = null; try { saved = localStorage.getItem('chanak_lang'); } catch (e) { /* sin almacenamiento */ }
    const q = params.get('lang');
    state.lang = (q === 'es' || q === 'en') ? q : (saved === 'es' || saved === 'en' ? saved : 'en');
  }

  if (params.get('view')) {
    const v = params.get('view');
    if (['ruta', 'capsulas', 'cuaderno', 'test-dones', 'habitos', 'expediente', 'rubrica', 'herramientas', 'juniors', 'transversales', 'caracter'].includes(v)) {
      state.viewMode = (v === 'test-dones' || v === 'habitos') ? 'herramientas' : v;
    }
  }

  if (params.get('demo_riasec') === '1' && !state.riasecResult) {
    state.riasecResult = {
      scores: { R: 10, I: 15, A: 8, S: 14, E: 12, C: 7 },
      primaryCode: 'I',
      secondaryCode: 'S',
      comboKey: 'IS',
      profileData: {
        title: 'Investigador Social · Orientación Humana y Analítica',
        careers: ['Psicología', 'Medicina & Salud Comunitaria', 'Educación & Mentoría', 'Bioética'],
        service: 'Liderazgo en ministerios de consejería, discipulado de jóvenes y servicio comunitario con base científica.'
      },
      date: new Date().toLocaleDateString()
    };
  }

  // Handle Dual Diploma restriction: Juniors tab hidden in Dual Diploma
  const tabJuniors = document.getElementById('tab-juniors');
  const contextPill = document.getElementById('context-pill');
  
  if (state.mode === 'dual') {
    if (tabJuniors) tabJuniors.style.display = 'none';
    if (contextPill) {
      contextPill.textContent = 'Dual Diploma LMS';
      contextPill.style.background = '#e7f2ea';
      contextPill.style.color = '#286b43';
      contextPill.style.borderColor = '#bcdcc7';
    }
    if (state.viewMode === 'juniors') state.viewMode = 'capsulas';
  } else if (state.isSis && state.studentName) {
    if (contextPill) {
      const lvlLabel = state.assignedLevel ? state.assignedLevel.toUpperCase() : '';
      contextPill.textContent = `🎓 Estudiante: ${decodeURIComponent(state.studentName)} (${lvlLabel})`;
      contextPill.style.background = '#dbeafe';
      contextPill.style.color = '#1e40af';
      contextPill.style.borderColor = '#93c5fd';
    }
  } else {
    if (contextPill) {
      contextPill.textContent = '✨ Portal Chanak · Life Skills Studio';
      contextPill.style.background = '#eef2ff';
      contextPill.style.color = '#3730a3';
      contextPill.style.borderColor = '#c7d2fe';
    }
    if (params.get('stage') === 'juniors') {
      state.viewMode = 'juniors';
    }
  }

  updateHeaderWallet();
  updateRoleUI();
  updateNavigationUI();
  syncLanguageUI(state.lang);
  renderCurrentView();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// ---------------- Role Switching (Student vs Mentor) ----------------
// El modal de módulo se dibuja en su propio contenedor y renderCurrentView() no
// lo alcanza. Sin esto, el recuadro de mentor seguiría en pantalla tras volver a
// Vista Estudiante en un equipo compartido del aula.
function refreshOpenModuleModal() {
  const modal = document.getElementById('capsule-modal');
  const body = document.getElementById('capsule-modal-body');
  if (modal?.classList.contains('open') && body && state.activeModuleId) {
    renderCurriculumModuleModal(body);
  }
}

function switchRoleView(role) {
  if (role === 'student') {
    state.roleView = 'student';
    updateRoleUI();
    renderCurrentView();
    refreshOpenModuleModal();
    return;
  }

  if (role === 'mentor') {
    if (state.isMentorUnlocked) {
      state.roleView = 'mentor';
      updateRoleUI();
      renderCurrentView();
      refreshOpenModuleModal();
      return;
    }

    // El token del SIS solo se emite para estudiantes: la Vista Mentor no se
    // ofrece en esa sesión.
    if (state.isSis) {
      showCoinToast('🔒 Vista pedagógica restringida a tutores y coordinadores');
      return;
    }

    openMentorPinModal();
  }
}

function openMentorPinModal() {
  const modal = document.getElementById('mentor-pin-modal');
  const input = document.getElementById('mentor-pin-input');
  const errorEl = document.getElementById('mentor-pin-error');
  if (input) input.value = '';
  if (errorEl) errorEl.style.display = 'none';
  if (modal) modal.classList.add('open');
  if (input) setTimeout(() => input.focus(), 150);
}

function closeMentorPinModal() {
  const modal = document.getElementById('mentor-pin-modal');
  if (modal) modal.classList.remove('open');
}

async function submitMentorPin() {
  const input = document.getElementById('mentor-pin-input');
  const errorEl = document.getElementById('mentor-pin-error');
  const pinVal = (input?.value || '').trim();

  if (!pinVal) {
    if (errorEl) { errorEl.textContent = 'Introduce el PIN docente.'; errorEl.style.display = 'block'; }
    return;
  }

  if (errorEl) errorEl.style.display = 'none';
  if (input) input.disabled = true;

  try {
    // El PIN se valida en servidor. Si es correcto, la respuesta trae el
    // contenido de mentor, que no forma parte del bundle del estudiante.
    const res = await fetch(`${SUPABASE_URL}/functions/v1/life-skills-mentor-content`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_ANON_KEY },
      body: JSON.stringify({ pin: pinVal })
    });
    const data = await res.json();

    if (!res.ok || !data.success) {
      if (errorEl) {
        errorEl.textContent = data.error || 'PIN incorrecto.';
        errorEl.style.display = 'block';
      }
      return;
    }

    state.mentorContent = data.content || {};
    state.isMentorUnlocked = true;
    state.roleView = 'mentor';
    closeMentorPinModal();
    updateRoleUI();
    renderCurrentView();
    refreshOpenModuleModal();
    showCoinToast('🧑‍🏫 Vista Mentor Desbloqueada con Éxito');
  } catch (err) {
    if (errorEl) {
      errorEl.textContent = 'No se pudo verificar el PIN. Revisa tu conexión.';
      errorEl.style.display = 'block';
    }
  } finally {
    if (input) input.disabled = false;
  }
}

// Contenido de mentor para una sesión concreta. En Vista Estudiante devuelve
// siempre un objeto vacío: los datos ni siquiera están descargados.
function mentorNotes(modId, sessionNumber) {
  if (state.roleView !== 'mentor') return {};
  return (state.mentorContent?.[modId]?.[String(sessionNumber)]) || {};
}

function updateRoleUI() {
  const btnStudent = document.getElementById('btn-role-student');
  const btnMentor = document.getElementById('btn-role-mentor');
  const mentorBanner = document.getElementById('mentor-global-banner');

  if (btnStudent) btnStudent.classList.toggle('active', state.roleView === 'student');
  if (btnMentor) {
    btnMentor.classList.toggle('mentor-active', state.roleView === 'mentor');
    btnMentor.classList.toggle('active', state.roleView === 'mentor');
  }

  if (mentorBanner) {
    mentorBanner.style.display = (state.roleView === 'mentor') ? 'flex' : 'none';
  }
}

// Recorre el HTML fijo (no la vista dinámica) y alterna los textos; guarda el original en español para poder volver.
// Traduce todo el texto en pantalla (HTML fijo y vistas dinámicas) con diccionarios, sin tocar las vistas originales:
// guarda el texto en español en cada nodo para poder volver al español. El inglés es el idioma principal.
// Motivos de las monedas (los textos que la app muestra al ganar ChanakCoins).
function coinReasonEn(r) {
  let m;
  if ((m = r.match(/^Sesión (\d+) completada \((.+)\)$/))) return `Session ${m[1]} completed (${m[2]})`;
  if ((m = r.match(/^Módulo (.+) Completado$/))) return `Module ${m[1]} Completed`;
  if ((m = r.match(/^Guardado en Cuaderno \((.+)\)$/))) return `Saved in Notebook (${m[1]})`;
  if ((m = r.match(/^Cápsula Completada \((.+)\)$/))) return `Capsule Completed (${m[1]})`;
  if ((m = r.match(/^Reto Enviado \((.+)\)$/))) return `Challenge Submitted (${m[1]})`;
  const fixed = { 'Meta Diaria Cumplida (+5 🪙)': 'Daily Goal Completed (+5 🪙)', 'Test de Dones y Vocación (Explorer Q1)': 'Gifts & Vocation Test (Explorer Q1)' };
  return fixed[r] !== undefined ? fixed[r] : null;
}
function patternEn(t) {
  let m;
  if ((m = t.match(/^MÓDULO (\S+) · (\d+) SESIONES$/))) return `MODULE ${m[1]} · ${m[2]} SESSIONS`;
  if ((m = t.match(/^Por (?!qué\b)(.+)$/))) return `By ${m[1]}`;
  if ((m = t.match(/^(\d+)\/21 Días$/))) return `${m[1]}/21 Days`;
  if ((m = t.match(/^✓ Completar Sesión (\d+) →$/))) return `✓ Complete Session ${m[1]} →`;
  if ((m = t.match(/^(LS\d-\d+): (.+)$/))) { const inner = enOf(m[2]); return inner == null ? null : `${m[1]}: ${inner}`; }
  // avisos de ChanakCoins: "+10 ChanakCoins · <motivo>"
  if ((m = t.match(/^\+(\d+) ChanakCoins · (.+)$/))) { const r = coinReasonEn(m[2]); return r == null ? null : `+${m[1]} ChanakCoins · ${r}`; }
  if ((m = t.match(/^CÁPSULA FORMATIVA · (.+)$/))) return `FORMATIVE CAPSULE · ${m[1]}`;
  if ((m = t.match(/^([“"])(.+)([”"])$/))) { const inner = enOf(m[2]); return inner == null ? null : `${m[1]}${inner}${m[3]}`; }
  return null;
}
function enOf(t) { return STATIC_EN[t] !== undefined ? STATIC_EN[t] : (ES_EN_DYNAMIC[t] !== undefined ? ES_EN_DYNAMIC[t] : patternEn(t)); }
var __i18nBusy = false; // var: se usa en el primer render, antes de llegar a esta línea
function translateTree(root, lang) {
  if (!root || __i18nBusy) return;
  __i18nBusy = true;
  try {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((n) => {
      const p = n.parentElement;
      if (!p || p.closest('script,style,textarea,.print-only')) return;
      if (n.__es === undefined) {
        const t = n.nodeValue.replace(/\s+/g, ' ').trim();
        const en = t ? enOf(t) : null;
        if (en == null) { n.__es = null; n.__seen = n.nodeValue; return; }
        n.__es = n.nodeValue; n.__esKey = t; n.__en = n.nodeValue.replace(t, en);
      }
      if (n.__es === null) {
        // nodo que cambió de contenido desde la última vez (vista re-renderizada): reintenta
        if (n.nodeValue !== n.__seen) { n.__es = undefined; translateTree(n.parentElement, lang); }
        return;
      }
      const want = lang === 'en' ? n.__en : n.__es;
      if (n.nodeValue !== want && (n.nodeValue === n.__es || n.nodeValue === n.__en)) n.nodeValue = want;
    });
  } finally { __i18nBusy = false; }
}
function applyStaticI18n(lang) {
  translateTree(document.body, lang);
  document.body.querySelectorAll('[title],[placeholder],[aria-label]').forEach((el) => {
    ['title', 'placeholder', 'aria-label'].forEach((a) => {
      if (!el.hasAttribute(a)) return;
      const k = `__es_${a}`; if (el[k] === undefined) el[k] = STATIC_ATTR_EN[el.getAttribute(a)] !== undefined ? el.getAttribute(a) : null;
      if (el[k] === null) return;
      el.setAttribute(a, lang === 'en' ? STATIC_ATTR_EN[el[k]] : el[k]);
    });
  });
  document.documentElement.lang = lang === 'en' ? 'en' : 'es';
}
// Las vistas y ventanas se dibujan después: un observador traduce lo nuevo en inglés (con una pequeña espera).
(function watchDom() {
  let t = null;
  const run = () => { if (state.lang === 'en') translateTree(document.body, 'en'); };
  const start = () => {
    new MutationObserver(() => { if (__i18nBusy) return; clearTimeout(t); t = setTimeout(run, 40); }).observe(document.body, { childList: true, subtree: true, characterData: true });
  };
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();

// ---------------- Language Switcher ----------------
// Selector [EN | ES] y textos fijos del HTML según el idioma activo (también al arrancar).
function syncLanguageUI(lang) {
  const btnEs = document.getElementById('btn-lang-es'); const btnEn = document.getElementById('btn-lang-en');
  if (btnEs) { btnEs.classList.toggle('active', lang === 'es'); btnEs.setAttribute('aria-pressed', String(lang === 'es')); }
  if (btnEn) { btnEn.classList.toggle('active', lang === 'en'); btnEn.setAttribute('aria-pressed', String(lang === 'en')); }
  applyStaticI18n(lang);
  const mottoEl = document.getElementById('ui-motto'); const leadEl = document.getElementById('ui-hero-lead');
  if (mottoEl) mottoEl.textContent = lang === 'es' ? 'Carácter · Propósito · Servicio · Emprendimiento · College Prep' : 'Character · Purpose · Service · Entrepreneurship · College Prep';
  if (leadEl) leadEl.textContent = lang === 'es'
    ? 'Desarrollo de carácter, autodisciplina, mayordomía financiera, relaciones sanas y liderazgo de impacto real con cosmovisión bíblica.'
    : 'Character formation, self-discipline, financial stewardship, healthy relationships and impactful leadership with a Biblical worldview.';
}

function switchLanguage(lang) {
  lang = lang === 'es' ? 'es' : 'en';
  state.lang = lang;
  try { localStorage.setItem('chanak_lang', lang); } catch (e) { /* sin almacenamiento */ }
  applyStaticI18n(lang);
  const btnEs = document.getElementById('btn-lang-es');
  const btnEn = document.getElementById('btn-lang-en');
  if (btnEs) btnEs.classList.toggle('active', lang === 'es');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  
  const subEl = document.getElementById('ui-subtitle');
  const mottoEl = document.getElementById('ui-motto');
  const leadEl = document.getElementById('ui-hero-lead');
  
  if (subEl) subEl.textContent = 'Life Skills & Leadership Studio · FLDOE #134620';
  if (mottoEl) mottoEl.textContent = lang === 'es'
    ? 'Carácter · Propósito · Servicio · Emprendimiento · College Prep'
    : 'Character · Purpose · Service · Entrepreneurship · College Prep';
  if (leadEl) leadEl.textContent = lang === 'es'
    ? 'Desarrollo de carácter, autodisciplina, mayordomía financiera, relaciones sanas y liderazgo de impacto real con cosmovisión bíblica.'
    : 'Character formation, self-discipline, financial stewardship, healthy relationships and impactful leadership with a Biblical worldview.';
  
  updateNavigationUI();
  renderCurrentView();
}

// ---------------- Navigation & View Switching ----------------
function setViewMode(mode) {
  if (state.mode === 'dual' && mode === 'juniors') return;
  // No basta con ocultar la pestana: si la vista no corresponde a esta
  // audiencia, tampoco se entra por URL ni desde la consola.
  if (!isViewAllowed(mode)) return;
  state.viewMode = mode;
  updateNavigationUI();
  renderCurrentView();
}

function selectStage(stageKey) {
  if (stageKey === 'juniors') {
    setViewMode('juniors');
  } else {
    selectHighSchoolLevel(stageKey);
  }
}

function selectHighSchoolLevel(levelKey) {
  if (state.roleView === 'mentor') {
    state.currentLevel = levelKey;
    updateNavigationUI();
    renderCurrentView();
    return;
  }
  const normAssigned = ['8', '8th', 'grade8', 'grade 8', '1', 'level1', 'freshman'].includes(state.assignedLevel) ? 'seedling' : state.assignedLevel;
  if (state.isSis && normAssigned && levelKey !== normAssigned && levelKey !== 'seedling') {
    alert(`🔒 Nivel ${levelKey.toUpperCase()} bloqueado.\n\nTu nivel activo asignado en el SIS es ${normAssigned.toUpperCase()}.\nLos demás niveles estarán disponibles cuando avances a esa etapa académica.`);
    return;
  }
  state.currentLevel = levelKey;
  updateNavigationUI();
  renderCurrentView();
}

// Qué secciones corresponden a cada audiencia. Un alumno de 10 años no tiene
// por qué ver el currículo de secundaria ni el expediente universitario, y uno
// de 17 no tiene por qué ver el catálogo Junior.
function allowedViews() {
  return VIEWS_BY_AUDIENCE[state.audience] || [];
}

function isViewAllowed(view) {
  // En Vista Mentor se ve todo: el docente necesita el mapa completo.
  if (state.roleView === 'mentor') return true;
  if (view === 'test-dones' && !isRiasecAvailable()) return false;
  return allowedViews().includes(view);
}

function chooseAudience(audience) {
  if (audience !== 'junior' && audience !== 'highschool') return;
  state.audience = audience;
  try { localStorage.setItem('chanak_audience', audience); } catch (e) { /* modo privado */ }
  state.viewMode = audience === 'junior' ? 'juniors' : 'ruta';
  // Un Junior no pertenece a ningun nivel de secundaria; al volver a
  // Secundaria hay que devolverle un nivel o la vista de capsulas recibe null.
  state.currentLevel = audience === 'junior'
    ? null
    : (state.assignedLevel || state.currentLevel || 'seedling');
  renderCurrentView();
  updateNavigationUI();
}

function resetAudience() {
  try { localStorage.removeItem('chanak_audience'); } catch (e) { /* modo privado */ }
  state.audience = null;
  renderCurrentView();
  updateNavigationUI();
}

// Cápsulas que puede abrir un Junior: solo las transversales de fundamento.
// Tiene acceso a las generales, no a todas.
function juniorCapsuleKeys() {
  return Object.entries(CAPSULES_DATA)
    .filter(([, c]) => c.tag === 'core' && c.level === 'seedling')
    .map(([k]) => k);
}

// El Test "Quién Soy" está anclado a Explorer Q1. En una sesión del SIS de otro
// nivel no se ofrece; sin token (demo/mentor) queda visible.
function isRiasecAvailable() {
  if (state.audience === 'junior') return false;
  if (!state.isSis) return true;
  return state.assignedLevel === 'explorer';
}

function updateNavigationUI() {
  const tabs = ['ruta', 'expediente', 'rubrica', 'transversales', 'herramientas', 'juniors', 'caracter'];
  tabs.forEach(tab => {
    const el = document.getElementById(`tab-${tab}`);
    if (!el) return;
    const isAct = state.viewMode === tab || 
      (tab === 'ruta' && ['capsulas', 'cuaderno'].includes(state.viewMode)) ||
      (tab === 'herramientas' && ['test-dones', 'habitos'].includes(state.viewMode));
    el.classList.toggle('active', isAct);
    el.hidden = !isViewAllowed(tab);
  });

  const navBar = document.getElementById('stage-tabs-bar');
  if (navBar) navBar.hidden = !state.audience && state.roleView !== 'mentor';

  const btnAudHs = document.getElementById('btn-aud-highschool');
  const btnAudJr = document.getElementById('btn-aud-junior');
  if (btnAudHs) btnAudHs.classList.toggle('active', state.audience === 'highschool');
  if (btnAudJr) btnAudJr.classList.toggle('active', state.audience === 'junior');

  const subLevelsBar = document.getElementById('sub-levels-bar');
  if (subLevelsBar) {
    // La barra de niveles Seedling..Launch aplica a highschool en ruta/capsulas/cuaderno
    const showSubBar = state.audience === 'highschool'
      && ['ruta', 'capsulas', 'cuaderno'].includes(state.viewMode);
    subLevelsBar.style.display = showSubBar ? 'flex' : 'none';

    const levelsMeta = [
      { id: 'seedling', icon: '🌱', label: 'Seedling · Grado 8/9 (13–14 años)' },
      { id: 'explorer', icon: '🧭', label: 'Explorer · Grado 10 (15 años)' },
      { id: 'builder',  icon: '🔨', label: 'Builder · Grado 11 (16 años)' },
      { id: 'launch',   icon: '🚀', label: 'Launch · Grado 12 (17 años)' }
    ];

    levelsMeta.forEach(lvl => {
      const el = document.getElementById(`subtab-${lvl.id}`);
      if (el) {
        const normAssigned = ['8', '8th', 'grade8', 'grade 8', '1', 'level1', 'freshman'].includes(state.assignedLevel) ? 'seedling' : state.assignedLevel;
        const isAssigned = (state.roleView === 'mentor') || !state.isSis || !normAssigned || (normAssigned === lvl.id) || (lvl.id === 'seedling');
        const isActive = (state.currentLevel === lvl.id);
        el.classList.toggle('active', isActive);

        if (state.roleView !== 'mentor' && state.isSis && normAssigned && !isAssigned) {
          el.innerHTML = `🔒 ${lvl.label} <span style="font-size: 10px; opacity: 0.85;">(Bloqueado)</span>`;
          el.style.opacity = '0.55';
          el.style.cursor = 'not-allowed';
          el.title = 'Disponible cuando avances a este nivel';
          el.style.background = '#f8fafc';
          el.style.borderColor = '#cbd5e1';
          el.style.color = '#64748b';
        } else {
          el.innerHTML = `${lvl.icon} ${lvl.label}`;
          el.style.opacity = '1';
          el.style.cursor = 'pointer';
          el.title = '';
          el.style.background = '';
          el.style.borderColor = '';
          el.style.color = '';
        }
      }
    });
  }
}

// ---------------- View Router ----------------
function renderCurrentView() {
  try { updateGuideLink(); applyLiveSchedule(); } catch (e) { /* la guía y el horario son opcionales */ }
  const container = document.getElementById('stage-content-area');
  if (!container) return;

  // Sin audiencia definida se pregunta antes de mostrar nada.
  if (!state.audience && state.roleView !== 'mentor') {
    renderAudienceChooser(container);
    return;
  }

  // Si la vista activa no corresponde a la audiencia, se cae a la de inicio.
  if (!isViewAllowed(state.viewMode)) {
    state.viewMode = state.audience === 'junior' ? 'juniors' : 'ruta';
  }

  switch (state.viewMode) {
    case 'ruta':
    case 'capsulas':
    case 'cuaderno':
      renderUnifiedStudentRouteView(container, state.currentLevel);
      break;
    case 'expediente':
      renderExpedienteUniversitario(container);
      break;
    case 'rubrica':
      renderRubricaView(container);
      break;
    case 'transversales':
      renderTransversalModules(container);
      break;
    case 'herramientas':
    case 'habitos':
      renderInteractiveTools(container);
      break;
    case 'test-dones':
      renderRiasecTestView(container);
      break;
    case 'caracter':
      renderCharacterView(container);
      break;
    case 'juniors':
      if (state.mode !== 'dual') {
        renderJuniorsStage(container);
      } else {
        renderUnifiedStudentRouteView(container, 'seedling');
      }
      break;
    default:
      renderUnifiedStudentRouteView(container, state.currentLevel);
      break;
  }
}

// ============================================================================
// 1. VISTA: MI RUTA DE APRENDIZAJE (Experiencia Unificada Dual Diploma & Off-Campus)
// ============================================================================

function getWeekNumber(d = new Date()) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
}

function toggleDailyGoalDay(dayIdx) {
  const week = getWeekNumber();
  const key = `chanak_daily_goal_w${week}_d${dayIdx}`;
  const isDone = localStorage.getItem(key) === '1';
  if (isDone) {
    localStorage.removeItem(key);
  } else {
    localStorage.setItem(key, '1');
    awardCoins('daily_goal', `goal:w${week}:d${dayIdx}`, 'Meta Diaria Cumplida (+5 🪙)');
  }
  const container = document.getElementById('stage-content-area');
  if (container && ['ruta', 'capsulas', 'cuaderno'].includes(state.viewMode)) {
    renderUnifiedStudentRouteView(container, state.currentLevel);
  }
}

function selectVocationalTrack(trackId) {
  if (!VOCATIONAL_TRACKS[trackId]) return;
  state.selectedTrack = trackId;
  localStorage.setItem('chanak_selected_track', trackId);
  const container = document.getElementById('stage-content-area');
  if (container && ['ruta', 'capsulas', 'cuaderno'].includes(state.viewMode)) {
    renderUnifiedStudentRouteView(container, state.currentLevel);
  }
}

function toggleModuleAccordion(modId) {
  state.expandedModules[modId] = !state.expandedModules[modId];
  const sessContainer = document.getElementById(`sessions-${modId}`);
  const arrowEl = document.getElementById(`arrow-${modId}`);
  if (sessContainer && arrowEl) {
    const isOpen = state.expandedModules[modId];
    sessContainer.style.display = isOpen ? 'block' : 'none';
    arrowEl.classList.toggle('open', isOpen);
    arrowEl.textContent = isOpen ? '▼' : '▶';
  } else {
    const container = document.getElementById('stage-content-area');
    if (container && ['ruta', 'capsulas', 'cuaderno'].includes(state.viewMode)) {
      renderUnifiedStudentRouteView(container, state.currentLevel);
    }
  }
}

function toggleWeeklyCommitment(goalId) {
  let completed = [];
  try {
    completed = JSON.parse(localStorage.getItem('chanak_ls_weekly_goals') || '[]');
  } catch (e) { completed = []; }

  const isDone = completed.includes(goalId);
  const next = isDone ? completed.filter(x => x !== goalId) : [...completed, goalId];

  try {
    localStorage.setItem('chanak_ls_weekly_goals', JSON.stringify(next));
  } catch (e) {}

  if (!isDone && next.length === 3) {
    awardCoins('weekly_goals_complete', `wgoals:${getWeekNumber()}`, '¡3 Compromisos Semanales Completados! (+25 🪙)');
  }

  const container = document.getElementById('stage-content-area');
  if (container && ['ruta', 'capsulas', 'cuaderno'].includes(state.viewMode)) {
    renderUnifiedStudentRouteView(container, state.currentLevel);
  }
}
window.toggleWeeklyCommitment = toggleWeeklyCommitment;

function renderUnifiedStudentRouteView(container, stageKey) {
  const isEs = state.lang === 'es';
  const isMentor = state.roleView === 'mentor';

  // Audiencia Junior ve sus cápsulas de fundamento
  if (state.audience === 'junior' || !stageKey) {
    renderJuniorCapsulesView(container);
    return;
  }

  // Normalización de grado: Grado 8 / Seedling nunca se bloquea
  const normAssigned = ['8', '8th', 'grade8', 'grade 8', '1', 'level1', 'freshman'].includes(state.assignedLevel) ? 'seedling' : state.assignedLevel;
  if (state.isSis && normAssigned && stageKey !== normAssigned) {
    container.innerHTML = `
      <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 48px 24px; text-align: center; max-width: 600px; margin: 40px auto; box-shadow: var(--shadow-sm);">
        <div style="font-size: 52px; margin-bottom: 16px;">🔒</div>
        <h3 style="font-size: 22px; color: var(--navy); margin-bottom: 10px; font-family: var(--font-display);">
          ${isEs ? `Nivel ${stageKey.toUpperCase()} Bloqueado` : `Level ${stageKey.toUpperCase()} Locked`}
        </h3>
        <p style="color: var(--ink-muted); font-size: 15px; line-height: 1.6; margin-bottom: 24px;">
          ${isEs 
            ? `Este nivel está reservado para etapas posteriores de tu formación académica. Tu nivel actual activo registrado en el SIS es <b>${normAssigned.toUpperCase()}</b>.`
            : `This level is reserved for later academic stages. Your active level registered in the SIS is <b>${normAssigned.toUpperCase()}</b>.`}
        </p>
        <button class="btn-interactive" onclick="selectHighSchoolLevel('${normAssigned}')" style="background: var(--navy); color: #fff; padding: 10px 24px;">
          ${isEs ? `Ir a mi Nivel Asignado (${normAssigned.toUpperCase()}) →` : `Go to my Assigned Level (${normAssigned.toUpperCase()}) →`}
        </button>
      </div>
    `;
    return;
  }

  const levelData = HIGH_SCHOOL_LEVELS[stageKey] || HIGH_SCHOOL_LEVELS.seedling;
  const verse = (levelData && levelData.verseKey && BIBLE_VERSES[levelData.verseKey]) || BIBLE_VERSES.seedling || { ref: '', text: {}, context: {} };
  const verseText = verse.text ? (verse.text[state.lang] || verse.text.es || verse.text) : '';
  const verseCtx = verse.context ? (verse.context[state.lang] || verse.context.es || verse.context) : '';

  const levelTitle = levelData.title ? (levelData.title[state.lang] || levelData.title.es || levelData.title) : stageKey.toUpperCase();
  const levelSub = levelData.subtitle ? (levelData.subtitle[state.lang] || levelData.subtitle.es || levelData.subtitle) : '';

  // 3 Metas Semanales según audiencia (Off-Campus / SIS vs Dual Diploma)
  const isDualDiplomaMode = state.mode === 'dual' && !state.isSis;
  const activeGoalsList = isDualDiplomaMode ? WEEKLY_GOALS_LIST : SIS_WEEKLY_GOALS_LIST;
  const goalsCardTitle = isDualDiplomaMode 
    ? (isEs ? 'Compromisos Formativos de la Semana (Dual Diploma)' : 'Weekly Formative Commitments (Dual Diploma)')
    : (isEs ? 'Tu Enfoque Semanal de Life Skills · Formación y Carácter (Off-Campus)' : 'Your Weekly Life Skills Focus · Character & Growth (Off-Campus)');
  const goalsCardSubtitle = isDualDiplomaMode
    ? (isEs ? '3 actividades clave: Inglés Académico (2h), Life Skills (2h) y Ciencias Sociales USA (1h)' : '3 core activities: Academic English (2h), Life Skills (2h), and US Social Studies (1h)')
    : (isEs ? '3 metas formativas: 1 Sesión Interactiva, Práctica de Hábitos y Avance en tu Proyecto del SIS' : '3 formative goals: 1 Interactive Session, Daily Habit Practice, and SIS Project Progress');

  let completedWeeklyGoals = [];
  try {
    completedWeeklyGoals = JSON.parse(localStorage.getItem('chanak_ls_weekly_goals') || '[]');
  } catch (e) { completedWeeklyGoals = []; }
  const doneGoalsCount = completedWeeklyGoals.length;

  // Itinerario Vocacional Activo
  const currentTrack = VOCATIONAL_TRACKS[state.selectedTrack] || VOCATIONAL_TRACKS.tree;
  const trackName = currentTrack.name ? (currentTrack.name[state.lang] || currentTrack.name.es) : currentTrack.id;
  const trackTag = currentTrack.tag ? (currentTrack.tag[state.lang] || currentTrack.tag.es) : '';
  const trackLevelProjects = (currentTrack.levels && currentTrack.levels[stageKey]) || [];

  // Módulos para este nivel
  const allModulesForLevel = Object.entries(EXTENSION_CAPSULES_DATA)
    .filter(([id, m]) => m.level === stageKey)
    .sort(([a], [b]) => a.localeCompare(b));

  container.innerHTML = `
    <!-- 1. Level Hero Card -->
    <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 24px; margin-bottom: 20px; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 8px;">
        <span class="eyebrow-tag" style="color: var(--navy); font-weight: 800; margin: 0;">
          ${isEs ? `NIVEL ${levelData.num || 1} · ${stageKey.toUpperCase()} · ${levelData.age || ''} · ${levelData.gradeUS || ''} · PILAR 3 SIS (20%)` : `LEVEL ${levelData.num || 1} · ${stageKey.toUpperCase()} · ${levelData.gradeUS || ''}`}
        </span>
        <a href="https://drive.google.com/file/d/1tuB-OX7-mwLIpHNHXPS0lSKaSRponaAk/view" target="_blank" class="btn-interactive" style="font-size: 12px; display: inline-flex; align-items: center; gap: 6px; background: var(--navy); color: #fff; border: none; font-weight: 700;">
          📄 ${isEs ? 'Guía PDF Oficial del Nivel' : 'Official Level PDF Guide'} ↗
        </a>
      </div>
      <h3 style="font-size: 24px; color: var(--navy); margin-bottom: 6px; font-weight: 800;">
        ${levelTitle}
      </h3>
      <p style="font-size: 14px; color: var(--ink-muted); margin: 0; line-height: 1.5;">
        ${levelSub}
      </p>
    </div>

    <!-- 2. Academic Calendar Structure Banner (3 Quarters + 1 Leveling) -->
    <div style="background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: var(--radius-md); padding: 14px 18px; margin-bottom: 20px; display: flex; align-items: flex-start; gap: 14px;">
      <span style="font-size: 22px; flex-shrink: 0; line-height: 1.2;">📅</span>
      <div style="font-size: 13px; color: #1E3A8A; line-height: 1.55;">
        <strong style="font-size: 13px; display: block; margin-bottom: 2px; color: #1E40AF;">
          ${isEs ? 'Estructura del Año Académico: 3 Trimestres Regulares (Q1, Q2, Q3) + 1 Período de Nivelación Formativa' : 'Academic Year Structure: 3 Regular Quarters (Q1, Q2, Q3) + 1 Formative Leveling Period'}
        </strong>
        ${isEs 
          ? 'En Chanak los proyectos oficiales del expediente se entregan en Q1, Q2 y Q3 (evaluación continua del 20% en el SIS). El 4º período es de nivelación, consolidación de hábitos y tutoría formativa personalizada.' 
          : 'At Chanak official dossier projects are completed in Q1, Q2, and Q3 (continuous 20% assessment in SIS). The 4th period is reserved for leveling, habit consolidation, and personalized mentoring.'}
      </div>
    </div>

    <!-- 3. Weekly Formative Commitments (Off-Campus SIS vs Dual Diploma) -->
    <div class="weekly-commitments-card" style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 20px; margin-bottom: 24px; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 14px; border-bottom: 1px solid var(--line); padding-bottom: 12px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 22px;">📋</span>
          <div>
            <h4 style="font-size: 15px; font-weight: 800; color: var(--navy); margin: 0;">
              ${goalsCardTitle}
            </h4>
            <span style="font-size: 12px; color: var(--ink-muted);">
              ${goalsCardSubtitle}
            </span>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="background: #F0FDF4; color: #166534; border: 1px solid #BBF7D0; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700;">
            ${doneGoalsCount} / 3 ${isEs ? 'completadas' : 'completed'} (${Math.round((doneGoalsCount / 3) * 100)}%)
          </div>
          ${doneGoalsCount === 3 ? `
            <span style="font-size: 12px; font-weight: 700; color: #B45309; background: #FEF3C7; border: 1px solid #FDE68A; padding: 4px 10px; border-radius: 20px;">
              🎉 ${isEs ? '¡Semana Completa! +25 Coins' : 'Week Complete! +25 Coins'}
            </span>
          ` : ''}
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; margin-bottom: 14px;">
        ${activeGoalsList.map(g => {
          const isDone = completedWeeklyGoals.includes(g.id);
          return `
            <div class="weekly-goal-item ${isDone ? 'is-done' : ''}" onclick="toggleWeeklyCommitment('${g.id}')"
                 style="background: ${isDone ? '#F0FDF4' : '#F8FAFC'}; border: 1.5px solid ${isDone ? '#86EFAC' : 'var(--line)'}; border-radius: 12px; padding: 14px 16px; cursor: pointer; display: flex; flex-direction: column; gap: 6px; transition: all 0.2s;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="background: ${isDone ? '#166534' : 'var(--navy)'}; color: #fff; font-size: 11px; font-weight: 800; padding: 2px 8px; border-radius: 6px;">
                  ${isEs ? g.badge_es : g.badge_en}
                </span>
                <span style="font-size: 16px;">${isDone ? '✅' : '⚪'}</span>
              </div>
              <div style="font-size: 13.5px; font-weight: 800; color: ${isDone ? '#166534' : 'var(--navy)'}; line-height: 1.35;">
                ${g.icon} ${isEs ? g.title_es : g.title_en}
              </div>
              <div style="font-size: 12px; color: var(--ink-muted); line-height: 1.45;">
                ${isEs ? g.desc_es : g.desc_en}
              </div>
              <div style="margin-top: auto; padding-top: 6px; border-top: 1px dashed var(--line); font-size: 11px; color: ${isDone ? '#15803D' : '#0369A1'}; font-weight: 700;">
                📅 ${isEs ? g.schedule_es : g.schedule_en}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      ${isDualDiplomaMode ? `
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; background: #F8FAFC; padding: 10px 14px; border-radius: 8px; font-size: 12px; border: 1px solid var(--line);">
          <span style="color: var(--ink-muted);">
            💡 <b>${isEs ? 'Clases en Vivo por Google Meet:' : 'Live Classes on Google Meet:'}</b> ${isEs ? 'Martes 16:00 CET (Inglés) · Jueves 18:00 CET (Life Skills)' : 'Tuesday 16:00 CET (English) · Thursday 18:00 CET (Life Skills)'}
          </span>
          <a href="https://meet.google.com/gye-nzqs-gdd" target="_blank" rel="noopener noreferrer"
             style="background: #16a34a; color: #fff; text-decoration: none; padding: 6px 14px; border-radius: 6px; font-weight: 700; font-size: 12px; display: inline-flex; align-items: center; gap: 6px;">
            📹 ${isEs ? 'Unirme a Meet' : 'Join Meet'} ↗
          </a>
        </div>
      ` : `
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; background: #F8FAFC; padding: 10px 14px; border-radius: 8px; font-size: 12px; border: 1px solid var(--line);">
          <span style="color: var(--navy); font-weight: 600;">
            🌱 <b>${isEs ? 'Evaluación Formativa & Evidencias SIS:' : 'Formative Assessment & SIS Evidence:'}</b> ${isEs ? 'Sube tu entregable trimestral a la carpeta 03_LIFE_SKILLS para tu reporte de calificaciones (Pilar 3 · 20%).' : 'Upload your quarterly project to the 03_LIFE_SKILLS folder for your grade report (Pillar 3 · 20%).'}
          </span>
          <span style="background: #E0F2FE; color: #0369A1; padding: 3px 10px; border-radius: 20px; font-weight: 700; font-size: 11px;">
            Off-Campus SIS
          </span>
        </div>
      `}
    </div>

    <!-- 4. CONTINUOUS ROUTE BY QUARTERS WITH INLINE ACCORDION SESSIONS (FRONT AND CENTER) -->
    <div style="margin-bottom: 32px;">
      <div style="margin-bottom: 16px;">
        <span class="eyebrow-tag" style="color: var(--navy); margin: 0; font-weight: 800;">CURRÍCULO INTEGRADO · RUTA CONTINUA</span>
        <h3 style="font-size: 22px; color: var(--navy); margin: 4px 0; font-weight: 800;">
          🧭 ${isEs ? 'Ruta Continua de Aprendizaje por Trimestres (Q1, Q2, Q3)' : 'Continuous Learning Route by Quarters (Q1, Q2, Q3)'}
        </h3>
        <p style="font-size: 13.5px; color: var(--ink-muted); margin: 0;">
          ${isEs ? 'Haz clic en cada módulo para desplegar sus 8 sesiones interactivas, avanzar en tu cuaderno digital y preparar tu entregable para el SIS.' : 'Click each module to unfold its 8 interactive sessions, advance in your digital notebook, and prepare your SIS deliverable.'}
        </p>
      </div>

      ${(levelData.quarters || []).map((q, qIdx) => {
        const qTitle = q.title ? (q.title[state.lang] || q.title.es || q.title) : q.id;
        const qProject = q.project ? (q.project[state.lang] || q.project.es || q.project) : '';
        const qFiles = q.files || [];

        // Match modules for this quarter
        let qModules = allModulesForLevel.filter(([modId, modData]) => {
          return modData.quarter === q.id || modId.includes(`-${qIdx + 1}`);
        });

        if (qModules.length === 0 && allModulesForLevel.length > 0) {
          const modPerQ = Math.ceil(allModulesForLevel.length / (levelData.quarters.length || 3));
          qModules = allModulesForLevel.slice(qIdx * modPerQ, (qIdx + 1) * modPerQ);
        }

        const trackQProject = trackLevelProjects[qIdx] 
          ? (typeof trackLevelProjects[qIdx] === 'object' ? (trackLevelProjects[qIdx][state.lang] || trackLevelProjects[qIdx].es) : trackLevelProjects[qIdx])
          : '';

        return `
          <div class="quarter-section-wrap" style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 20px; margin-bottom: 20px; box-shadow: var(--shadow-sm);">
            <div class="quarter-section-head" style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px; border-bottom: 1px solid var(--line); padding-bottom: 10px;">
              <span class="quarter-badge" style="background: var(--navy); color: #fff; font-size: 13px; font-weight: 800; padding: 4px 12px; border-radius: 8px;">${q.id}</span>
              <h3 style="font-size: 18px; color: var(--navy); font-weight: 800; margin: 0;">${qTitle}</h3>
            </div>

            <!-- Modules in this Quarter with Inline Accordion -->
            ${qModules.map(([modId, modData]) => {
              const sessionCount = (modData.sessions && modData.sessions.length) || 8;
              const p = moduleProgress(modId, sessionCount);
              const firstTitle = (modData.sessions && modData.sessions[0] && modData.sessions[0].title) || modId;
              const eq = (modData.teacherGuide && modData.teacherGuide.essentialQuestion) || '';
              const isExpanded = !!state.expandedModules[modId];

              const stateLabel = {
                completado: isEs ? '✓ Completado' : '✓ Completed',
                'en-curso': isEs ? `${p.done}/${p.total} sesiones` : `${p.done}/${p.total} sessions`,
                pendiente: isEs ? `${sessionCount} sesiones` : `${sessionCount} sessions`,
              }[p.status];

              return `
                <div class="module-unit-box" style="border: 1px solid var(--line); border-radius: 12px; margin-bottom: 12px; overflow: hidden; background: #fff;">
                  <div class="module-unit-header" onclick="toggleModuleAccordion('${modId}')" style="padding: 14px 18px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; background: #FAFBFD; border-bottom: ${isExpanded ? '1px solid var(--line)' : 'none'};">
                    <div class="unit-head-info" style="flex: 1;">
                      <span class="unit-head-tag" style="font-size: 11px; font-weight: 800; color: #0284C7; letter-spacing: 0.05em;">MÓDULO ${modId.toUpperCase()} · ${sessionCount} SESIONES</span>
                      <h4 class="unit-head-title" style="font-size: 15px; font-weight: 800; color: var(--navy); margin: 2px 0;">${firstTitle}</h4>
                      ${eq ? `<p class="unit-head-eq" style="font-size: 12.5px; color: var(--ink-muted); margin: 0; font-style: italic;">“${eq}”</p>` : ''}
                      
                      <div style="margin-top: 8px; max-width: 380px;">
                        <div class="progress-track" style="height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
                          <div class="progress-fill" style="width: ${p.pct}%; height: 100%; background: var(--navy); transition: width 0.3s ease;"></div>
                        </div>
                        <div style="font-size: 11px; color: var(--ink-muted); margin-top: 4px;">
                          ${p.done} de ${p.total} ${isEs ? 'sesiones completadas' : 'sessions completed'} (${p.pct}%)
                        </div>
                      </div>
                    </div>

                    <div class="unit-head-right" style="text-align: right;">
                      <span class="unit-status-chip ${p.status}">${stateLabel}</span>
                      <div style="display: flex; align-items: center; justify-content: flex-end; gap: 6px; font-size: 12px; font-weight: 700; color: var(--navy); margin-top: 6px;">
                        <span>${isExpanded ? (isEs ? 'Ocultar' : 'Hide') : (isEs ? 'Ver sesiones' : 'View sessions')}</span>
                        <span class="unit-expand-arrow ${isExpanded ? 'open' : ''}" id="arrow-${modId}">${isExpanded ? '▼' : '▶'}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Inline Accordion Sessions List -->
                  <div class="module-sessions-container" id="sessions-${modId}" style="display: ${isExpanded ? 'block' : 'none'}; padding: 14px 18px; background: #fff;">
                    <div class="sessions-subheading" style="font-size: 12px; font-weight: 800; color: var(--navy); text-transform: uppercase; margin-bottom: 12px;">
                      📖 ${isEs ? `Sesiones & Cápsulas del Módulo (${sessionCount} Sesiones de 60 min)` : `Module Sessions & Capsules (${sessionCount} 60-min sessions)`}
                    </div>

                    ${(modData.sessions || []).map(sess => {
                      const isDone = localStorage.getItem(`chanak_done_${modId}_s${sess.number}`) === 'done';
                      return `
                        <div class="session-row-item ${isDone ? 'is-done' : ''}" style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; border-bottom: 1px solid #F1F5F9; gap: 12px;">
                          <div style="display: flex; align-items: center; gap: 10px; flex: 1;">
                            <div class="session-num-badge" style="width: 26px; height: 26px; border-radius: 50%; background: ${isDone ? '#DCFCE7' : '#EFF6FF'}; color: ${isDone ? '#166534' : '#1D4ED8'}; font-weight: 800; font-size: 12px; display: flex; align-items: center; justify-content: center; shrink-0: 0;">${sess.number}</div>
                            <div class="session-meta-text">
                              <div class="session-row-title" style="font-weight: 700; font-size: 13.5px; color: var(--navy);">${sess.title || `Sesión ${sess.number}`}</div>
                              ${sess.objective ? `<div class="session-row-obj" style="font-size: 12px; color: var(--ink-muted);"><b>🎯 ${isEs ? 'Objetivo:' : 'Objective:'}</b> ${sess.objective}</div>` : ''}
                              ${sess.keyActivity ? `<div class="session-row-obj" style="font-size: 12px; color: var(--ink-muted); margin-top: 1px;"><b>⚡ ${isEs ? 'Actividad:' : 'Activity:'}</b> ${sess.keyActivity}</div>` : ''}
                            </div>
                          </div>

                          <div style="display: flex; align-items: center; gap: 10px; shrink-0: 0;">
                            ${isDone ? `
                              <span style="font-size: 12px; font-weight: 700; color: var(--green);">
                                ✓ ${isEs ? 'Completada' : 'Done'}
                              </span>
                            ` : `
                              <span style="font-size: 11px; color: var(--gold); font-weight: 700;">
                                +10 🪙
                              </span>
                            `}
                            <button class="btn-open-session ${isDone ? 'btn-review' : ''}" style="padding: 6px 12px; border-radius: 8px; font-size: 12px; font-weight: 700; cursor: pointer;" onclick="openCurriculumModule('${modId}', ${sess.number})">
                              ${isDone ? (isEs ? 'Repasar Sesión →' : 'Review Session →') : (isEs ? 'Abrir Cuaderno (+10 🪙) →' : 'Open Notebook (+10 🪙) →')}
                            </button>
                          </div>
                        </div>
                      `;
                    }).join('')}
                  </div>
                </div>
              `;
            }).join('')}

            <!-- Micro-Cápsulas Interactivas del Trimestre (si existen) -->
            ${(q.capsules && q.capsules.length > 0) ? `
              <div style="margin: 16px 0 14px;">
                <div style="font-size: 12px; font-weight: 800; color: var(--navy); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">
                  ⚡ ${isEs ? 'Micro-Cápsulas Interactivas de Práctica (4 Pasos + Quiz)' : 'Interactive Practice Micro-Capsules (4 Steps + Quiz)'}
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
                  ${q.capsules.map(capKey => {
                    const cap = CAPSULES_DATA[capKey];
                    if (!cap) return '';
                    const isDone = localStorage.getItem(`chanak_cap_${capKey}`) === 'done';
                    const capTitle = cap.title ? (cap.title[state.lang] || cap.title.es || cap.title) : capKey;
                    return `
                      <div class="session-row-item ${isDone ? 'is-done' : ''}" style="margin: 0; background: #F8FAFC; border: 1px solid var(--line); border-radius: 10px; padding: 10px 14px; display: flex; justify-content: space-between; align-items: center;">
                        <div style="display: flex; align-items: center; gap: 8px; flex: 1;">
                          <span style="font-size: 20px;">${cap.icon || '🚀'}</span>
                          <div>
                            <div style="font-size: 13px; font-weight: 700; color: var(--navy);">${capTitle}</div>
                            <div style="font-size: 11px; color: var(--ink-muted);">4 pasos interactivos · Quiz bíblico/ético</div>
                          </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                          ${isDone ? `<span style="font-size: 11px; font-weight: 700; color: var(--green);">✓ Hecho</span>` : `<span style="font-size: 11px; color: var(--gold); font-weight: 700;">+10 🪙</span>`}
                          <button class="btn-open-session ${isDone ? 'btn-review' : ''}" style="padding: 4px 10px; font-size: 11px; border-radius: 6px;" onclick="openCapsule('${capKey}')">
                            ${isDone ? (isEs ? 'Repasar' : 'Review') : (isEs ? 'Iniciar →' : 'Start →')}
                          </button>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Quarter Deliverable & Drive Folder Card -->
            <div class="quarter-card" style="margin-top: 14px; background: #FAFBFD; border: 1px solid var(--line); border-radius: 12px; padding: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
                <span class="quarter-badge" style="background: #EFF6FF; border: 1px solid #BFDBFE; color: #1E40AF; font-size: 11px; font-weight: 800; padding: 2px 8px; border-radius: 6px;">
                  📁 ${isEs ? `Entregable Oficial del Trimestre ${q.id}` : `Official Deliverable ${q.id}`}
                </span>
                <span style="font-size: 12px; font-weight: 700; color: var(--gold);">
                  📂 ${q.folder || ''}
                </span>
              </div>

              <h4 style="font-size: 15px; color: var(--navy); font-weight: 800; margin-bottom: 6px;">
                ${qProject}
              </h4>

              ${trackQProject ? `
                <div style="background: var(--green-light); border-left: 3px solid var(--green); padding: 8px 12px; border-radius: 0 6px 6px 0; font-size: 12px; color: #166534; margin-bottom: 8px;">
                  <b>${currentTrack.icon} ${isEs ? 'Aplicación en tu Track' : 'Application in your Track'}:</b> ${trackQProject}
                </div>
              ` : ''}

              <div class="deliverable-box" style="background: #fff; border: 1px solid #E2E8F0; border-radius: 8px; padding: 10px 12px; font-size: 12px;">
                <b style="font-size: 11px; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 4px;">
                  📄 ${isEs ? 'Archivos requeridos en tu Carpeta Drive (SIS):' : 'Required files in your Drive folder (SIS):'}
                </b>
                <ul class="deliverable-files" style="margin: 0; padding-left: 18px; color: #334155;">
                  ${qFiles.map(f => `<li>📄 <code>${f}</code></li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <!-- 5. Special Highlight for Explorer Q1: Test "Quién Soy" -->
    ${stageKey === 'explorer' ? `
      <div style="background: linear-gradient(135deg, #193D6D, #0F284E); color: #fff; border-radius: var(--radius-md); padding: 22px 26px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; box-shadow: var(--shadow-sm);">
        <div style="max-width: 620px;">
          <span class="badge" style="background: rgba(255,255,255,0.2); color: #fff; font-size: 11px; margin-bottom: 8px;">
            ⭐ PROYECTO ANCLA Q1 · DOSSIER SIS
          </span>
          <h4 style="font-size: 19px; color: #fff; margin-bottom: 6px; font-weight: 800;">
            🧭 Test "Quién Soy" · Perfil Vocacional & Test de Dones
          </h4>
          <p style="font-size: 13.5px; opacity: 0.9; margin: 0; line-height: 1.5;">
            Descubre tus inclinaciones vocacionales mediante el modelo RIASEC adaptado al servicio cristiano. Genera el entregable oficial <code>Test_Dones_Resultados.pdf</code>.
          </p>
        </div>
        <button class="btn-primary" style="background: var(--gold); color: #fff; border: none; padding: 10px 20px; font-size: 13px; font-weight: 700; border-radius: 8px;" onclick="setViewMode('herramientas')">
          Hacer Test Vocacional (+50 🪙) →
        </button>
      </div>
    ` : ''}

    <!-- 6. Master Class Section (Libros Formativos de cada Nivel con Resumen Ejecutivo) -->
    <div class="masterclass-section" style="margin-bottom: 28px;">
      <div class="masterclass-head" style="margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
        <div>
          <span class="eyebrow-tag" style="color: var(--gold); margin: 0; font-weight: 800;">MASTER CLASS · FORMACIÓN POR LECTURA</span>
          <h3 style="margin-top: 2px; color: var(--navy); font-size: 20px; font-weight: 800;">
            📖 ${isEs ? 'Master Class & Lecturas Clave del Nivel' : 'Master Class & Key Level Books'}
          </h3>
          <p style="font-size: 13px; color: var(--ink-muted); margin: 2px 0 0;">
            ${isEs ? 'Libros formativos de impacto con ideas fuerza, citas inspiradoras y resumen ejecutivo desplegable.' : 'Foundational books with core principles, quotes, and expandable executive summaries.'}
          </p>
        </div>
        <span class="badge" style="background: var(--gold-light); color: #7a5a1e; font-weight: 700; font-size: 12px;">
          ${(levelData.books || []).length} ${isEs ? 'Lecturas de Impacto' : 'Key Readings'}
        </span>
      </div>

      <div class="masterclass-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 14px;">
        ${(levelData.books || []).map(bKey => {
          const book = BOOKS[bKey];
          if (!book) return '';
          const bAudience = book.audience ? (book.audience[state.lang] || book.audience.es || book.audience) : (isEs ? 'Lectura Altamente Recomendada (Opcional)' : 'Highly Recommended (Optional)');
          const bTitle = book.title ? (book.title[state.lang] || book.title.es || book.title) : bKey;
          const bAuthor = book.author || '';
          const bKeyPoint = book.key ? (book.key[state.lang] || book.key.es || book.key) : '';
          const bQuote = book.quote ? (book.quote[state.lang] || book.quote.es || book.quote) : '';
          return `
            <div class="masterclass-card" style="display: flex; flex-direction: column; gap: 8px; background: #fff; border: 1px solid var(--line); border-radius: 12px; padding: 18px; box-shadow: var(--shadow-sm);">
              <span class="mc-badge" style="background: var(--gold-light); color: #7a5a1e; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 20px; align-self: flex-start;">
                📖 ${bAudience}
              </span>
              <div class="mc-title" style="font-size: 16px; font-weight: 800; color: var(--navy);">⚡ ${bTitle}</div>
              <div class="mc-author" style="font-size: 12px; color: var(--ink-muted); margin-top: -4px;">Por ${bAuthor}</div>
              
              <div class="mc-key" style="font-size: 12.5px; color: var(--navy); line-height: 1.45;">
                <b>💡 ${isEs ? 'Idea Fuerza' : 'Key Idea'}:</b> ${bKeyPoint}
              </div>
              <div class="mc-quote" style="font-size: 12px; color: var(--ink-muted); font-style: italic; border-left: 2px solid var(--green); padding-left: 8px; margin: 2px 0;">
                "${bQuote}"
              </div>

              ${book.summary_es ? `
                <details style="margin-top: 4px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 8px 10px; font-size: 12.5px; color: var(--ink);">
                  <summary style="font-weight: 700; color: var(--navy); cursor: pointer; user-select: none; font-size: 11px; text-transform: uppercase;">
                    📑 ${isEs ? 'Ver Resumen Ejecutivo del Libro' : 'View Book Summary'}
                  </summary>
                  <div style="margin-top: 6px; line-height: 1.5; color: #334155; font-size: 12px;">
                    ${book.summary_es}
                  </div>
                </details>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- 7. Vocational Tracks Picker & Project Context -->
    <div class="tracks-picker-box" style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 20px; margin-bottom: 24px; box-shadow: var(--shadow-sm);">
      <div class="tracks-picker-head" style="margin-bottom: 12px;">
        <span class="eyebrow-tag" style="color: var(--green); margin: 0; font-weight: 800;">ITINERARIOS VOCACIONALES CHANAK</span>
        <h4 style="margin-top: 4px; font-size: 17px; font-weight: 800; color: var(--navy);">
          🎯 ${isEs ? 'Elige tu Track Vocacional para los Proyectos' : 'Choose your Vocational Track for Projects'}
        </h4>
        <p style="font-size: 13px; color: var(--ink-muted); margin: 2px 0 0;">
          ${isEs ? 'Cada módulo y entregable trimestral se adapta a la vocación y talentos que Dios te dio:' : 'Every module and quarterly deliverable adapts to your calling and talents:'}
        </p>
      </div>

      <div class="tracks-picker-pills" style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
        ${Object.values(VOCATIONAL_TRACKS).map(trk => {
          const isActive = trk.id === state.selectedTrack;
          const tName = trk.name ? (trk.name[state.lang] || trk.name.es) : trk.id;
          return `
            <button class="track-pill-btn ${isActive ? 'is-active' : ''}" style="padding: 6px 12px; font-size: 12px; font-weight: 700; border-radius: 8px;" onclick="selectVocationalTrack('${trk.id}')">
              <span>${trk.icon}</span> ${tName}
            </button>
          `;
        }).join('')}
      </div>

      <div class="track-detail-card" style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <b style="font-size: 13.5px; color: var(--navy);">
            ${currentTrack.icon} ${trackName}
          </b>
          <span style="font-size: 11px; background: #DCFCE7; color: #166534; padding: 2px 8px; border-radius: 10px; font-weight: 700;">
            ${isEs ? 'Track Activo' : 'Active Track'}
          </span>
        </div>
        <div style="font-size: 12px; color: var(--ink-muted); margin-bottom: 6px;">
          ${trackTag}
        </div>
        <div style="font-size: 12.5px; line-height: 1.45; color: var(--ink);">
          📌 <b>${isEs ? `Aplicación en ${stageKey.toUpperCase()}:` : `Application in ${stageKey.toUpperCase()}:`}</b>
          ${trackLevelProjects.length > 0 ? trackLevelProjects.map((p, i) => {
            const pTxt = typeof p === 'object' ? (p[state.lang] || p.es) : p;
            return `<div style="margin-top: 3px;">• ${pTxt}</div>`;
          }).join('') : (isEs ? 'Personaliza tus entregables en base a este itinerario.' : 'Customize your deliverables based on this track.')}
        </div>
      </div>
    </div>

    <!-- 8. Biblical Devotional Card -->
    <div class="devotional-card" style="background: #FFFBEB; border: 1px solid #FDE68A; border-left: 4px solid var(--gold); border-radius: 0 var(--radius-md) var(--radius-md) 0; padding: 18px 22px; margin-bottom: 24px;">
      <div class="devotional-ref" style="font-size: 12px; font-weight: 800; color: #B45309; text-transform: uppercase; margin-bottom: 4px;">
        📖 <span>${verse.ref || 'Cita Bíblica'}</span> · ${isEs ? 'Texto Bíblico del Nivel' : 'Key Scripture'}
      </div>
      <div class="devotional-text" style="font-size: 15px; font-style: italic; color: #78350F; line-height: 1.5; margin-bottom: 6px;">
        "${verseText}"
      </div>
      ${verseCtx ? `
        <div class="devotional-applied" style="font-size: 13px; color: #92400E; line-height: 1.5;">
          💡 <b>${isEs ? 'Devocional Aplicado:' : 'Applied Devotional:'}</b> ${verseCtx}
        </div>
      ` : ''}
    </div>

    <!-- 9. Rubric & Accreditation Footer Card -->
    <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 18px 22px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px; box-shadow: var(--shadow-sm);">
      <div>
        <span class="eyebrow-tag" style="color: var(--navy); margin: 0; font-weight: 800;">EVALUACIÓN CONTINUA · PILAR 3 SIS (20%)</span>
        <h4 style="font-size: 16px; color: var(--navy); margin: 2px 0 2px; font-weight: 800;">
          🎓 Rúbrica Oficial de Evaluación 40 / 30 / 30
        </h4>
        <p style="font-size: 12.5px; color: var(--ink-muted); margin: 0;">
          40% Cuaderno de Vida & Reflexiones · 30% Proyecto Trimestral & Evidencias Drive · 30% Autoevaluación & Asistencia
        </p>
      </div>

      <button class="btn-interactive" onclick="setViewMode('expediente')" style="font-size: 12.5px; padding: 8px 16px; background: #FAFBFD; border: 1px solid var(--line); font-weight: 700;">
        Ver Mi Expediente Completo →
      </button>
    </div>
  `;
}

// Compatibilidad con invocaciones previas
function renderCapsulesAndChallengesView(container, stageKey) {
  renderUnifiedStudentRouteView(container, stageKey);
}

// ============================================================================
// 2. VISTA: CUADERNO DE VIDA (19 Módulos Curriculares)
// ============================================================================
// Progreso real del alumno en un módulo, leído de las sesiones ya completadas.
function moduleProgress(modId, total) {
  let done = 0;
  for (let n = 1; n <= total; n++) {
    if (localStorage.getItem(`chanak_done_${modId}_s${n}`) === 'done') done++;
  }
  const finished = localStorage.getItem(`chanak_mod_${modId}`) === 'done';
  return {
    done,
    total,
    finished,
    nextSession: Math.min(done + 1, total),
    pct: total ? Math.round((done / total) * 100) : 0,
    status: finished ? 'completado' : done > 0 ? 'en-curso' : 'pendiente',
  };
}

// Cápsulas de fundamento para Junior: acceso a las generales, no a todas.
function renderJuniorCapsulesView(container) {
  const isEs = state.lang === 'es';
  const keys = juniorCapsuleKeys();

  container.innerHTML = `
    <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 26px; margin-bottom: 24px; box-shadow: var(--shadow-sm);">
      <span class="eyebrow-tag" style="color: var(--green); margin: 0;">
        ${isEs ? 'PORTAL CHANAK · JUNIORS · CÁPSULAS DE FUNDAMENTO' : 'CHANAK PORTAL · JUNIORS · FOUNDATION CAPSULES'}
      </span>
      <h3 style="font-size: 26px; color: var(--navy); margin: 6px 0 4px; font-family: var(--font-display);">
        🚀 ${isEs ? 'Cápsulas de Fundamento' : 'Foundation Capsules'}
      </h3>
      <p style="font-size: 14px; color: var(--ink-muted); margin: 0;">
        ${isEs
          ? 'Micro-lecciones en 4 pasos sobre identidad, hábitos y cómo tratar a los demás. Las cápsulas de secundaria llegarán cuando pases a Seedling.'
          : 'Four-step micro-lessons on identity, habits and how to treat others. High school capsules arrive when you reach Seedling.'}
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
      ${keys.map(capKey => {
        const cap = CAPSULES_DATA[capKey];
        const isDone = localStorage.getItem(`chanak_cap_${capKey}`) === 'done';
        const capTitle = cap.title ? (cap.title[state.lang] || cap.title.es || capKey) : capKey;
        const stepsCount = (cap.steps && cap.steps.length) || 4;

        return `
          <article class="module-card is-${isDone ? 'completado' : 'pendiente'}">
            <header class="module-card__top">
              <span class="module-card__id">${stepsCount} ${isEs ? 'PASOS' : 'STEPS'}</span>
              <span class="module-card__state">${isDone ? (isEs ? '✓ Completada' : '✓ Completed') : '+10 🪙'}</span>
            </header>
            <h4 class="module-card__title">${cap.icon || '🚀'} ${capTitle}</h4>
            <button class="btn-primary module-card__cta" style="margin-top: auto;" onclick="openCapsule('${capKey}')">
              ${isDone ? (isEs ? 'Repasar cápsula →' : 'Review capsule →') : (isEs ? 'Iniciar cápsula →' : 'Start capsule →')}
            </button>
          </article>
        `;
      }).join('')}
    </div>
  `;
}

// Puerta de entrada cuando no hay sesión del SIS. Antes se abría directamente
// con todo visible para todos; ahora se elige el itinerario una vez y queda
// recordado en el navegador.
function renderAudienceChooser(container) {
  const isEs = state.lang === 'es';

  container.innerHTML = `
    <div class="audience-gate">
      <span class="eyebrow-tag" style="color: var(--green);">
        ${isEs ? 'PORTAL CHANAK · ELIGE TU ITINERARIO' : 'CHANAK PORTAL · CHOOSE YOUR TRACK'}
      </span>
      <h2>${isEs ? '¿Quién va a trabajar hoy?' : 'Who is working today?'}</h2>
      <p class="audience-gate__lead">
        ${isEs
          ? 'Cada etapa tiene sus propios retos y su propio ritmo. Elige la tuya para ver solo lo que te toca.'
          : 'Each stage has its own challenges and pace. Pick yours to see only what belongs to you.'}
      </p>

      <div class="audience-gate__options">
        <button class="audience-option" onclick="chooseAudience('junior')">
          <span class="audience-option__icon">🌿</span>
          <b>${isEs ? 'Junior' : 'Junior'}</b>
          <span class="audience-option__age">${isEs ? '8 a 13 años · Off-Campus' : 'Ages 8–13 · Off-Campus'}</span>
          <span class="audience-option__desc">
            ${isEs
              ? 'Retos de carácter, ciencia, servicio y ahorro, más las cápsulas de fundamento.'
              : 'Character, science, service and savings challenges, plus foundation capsules.'}
          </span>
        </button>

        <button class="audience-option" onclick="chooseAudience('highschool')">
          <span class="audience-option__icon">🎓</span>
          <b>${isEs ? 'Secundaria' : 'High School'}</b>
          <span class="audience-option__age">${isEs ? '14 a 17 años · Seedling a Launch' : 'Ages 14–17 · Seedling to Launch'}</span>
          <span class="audience-option__desc">
            ${isEs
              ? 'Currículo por niveles, Cuaderno de Vida, expediente universitario y proyectos de trimestre.'
              : 'Level curriculum, Life Notebook, university portfolio and quarterly projects.'}
          </span>
        </button>
      </div>

      <p class="audience-gate__note">
        ${isEs
          ? 'Si entras desde el SIS con tu cuenta, esto se decide solo con tu grado y no tienes que elegir nada.'
          : 'When you enter from the SIS with your account, this is set automatically from your grade.'}
      </p>
    </div>
  `;
}

function renderCuadernoDeVidaView(container) {
  const isEs = state.lang === 'es';
  const isMentor = state.roleView === 'mentor';
  const stageKey = state.currentLevel;

  const modulesForLevel = Object.entries(EXTENSION_CAPSULES_DATA)
    .filter(([id, m]) => m.level === stageKey)
    .sort(([a], [b]) => a.localeCompare(b));

  container.innerHTML = `
    <!-- Header Cuaderno de Vida -->
    <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 26px; margin-bottom: 24px; box-shadow: var(--shadow-sm); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
      <div>
        <span class="eyebrow-tag" style="color: var(--green); margin: 0;">
          CURRÍCULO INSTITUCIONAL · ${stageKey.toUpperCase()} · FLDOE #134620
        </span>
        <h3 style="font-size: 26px; color: var(--navy); margin: 6px 0 4px; font-family: var(--font-display);">
          📓 ${isEs ? 'Cuaderno de Vida & Sesiones Curriculares' : 'Life Notebook & Curriculum Sessions'}
        </h3>
        <p style="font-size: 14px; color: var(--ink-muted); margin: 0;">
          ${isEs ? 'Formación integral por sesiones con preguntas esenciales, rúbrica 40/30/30 y cuaderno reflexivo de trabajo.' : 'Structured session modules with essential questions and student notebook.'}
        </p>
      </div>

      <div style="display: flex; gap: 10px; align-items: center;">
        <span class="badge" style="background: var(--paper); border: 1px solid var(--line); font-size: 12px; color: var(--navy);">
          ${modulesForLevel.length} ${isEs ? 'Módulos en este Nivel' : 'Modules in this Level'}
        </span>
      </div>
    </div>

    <!-- Grid de los 19 Módulos Curriculares -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin-bottom: 32px;">
      ${modulesForLevel.map(([modId, modData]) => {
        const sessionCount = (modData.sessions && modData.sessions.length) || 8;
        const p = moduleProgress(modId, sessionCount);
        const firstTitle = (modData.sessions && modData.sessions[0] && modData.sessions[0].title) || modId;
        const qTag = modData.quarter || 'Módulo';
        const eq = (modData.teacherGuide && modData.teacherGuide.essentialQuestion) || '';
        const standards = (modData.teacherGuide && modData.teacherGuide.floridaStandards) || [];

        const stateLabel = {
          completado: isEs ? '✓ Completado' : '✓ Completed',
          'en-curso': isEs ? `En curso · ${p.done}/${p.total}` : `In progress · ${p.done}/${p.total}`,
          pendiente: isEs ? `${sessionCount} sesiones` : `${sessionCount} sessions`,
        }[p.status];

        const cta = {
          completado: isEs ? 'Repasar módulo' : 'Review module',
          'en-curso': isEs ? `Continuar · Sesión ${p.nextSession}` : `Continue · Session ${p.nextSession}`,
          pendiente: isEs ? 'Empezar módulo' : 'Start module',
        }[p.status];

        return `
          <article class="module-card is-${p.status}">
            <header class="module-card__top">
              <span class="module-card__id">${modId.toUpperCase()} · ${qTag}</span>
              <span class="module-card__state">${stateLabel}</span>
            </header>

            <h4 class="module-card__title">${firstTitle}</h4>

            ${eq ? `
              <p class="module-card__eq">
                <span>${isEs ? 'Pregunta esencial' : 'Essential question'}</span>
                “${eq}”
              </p>
            ` : ''}

            <div class="module-card__progress">
              <div class="progress-track"><div class="progress-fill" style="width: ${p.pct}%;"></div></div>
              <ol class="session-dots" aria-label="${isEs ? 'Sesiones completadas' : 'Completed sessions'}">
                ${Array.from({ length: sessionCount }, (_, i) => {
                  const n = i + 1;
                  const cls = n <= p.done ? 'is-done' : n === p.nextSession && !p.finished ? 'is-next' : '';
                  return `<li class="${cls}">${n}</li>`;
                }).join('')}
              </ol>
            </div>

            ${isMentor ? `
              <div class="module-card__mentor">
                <b>🧑‍🏫 FLDOE Durable Skills:</b> ${standards.join(', ')}<br>
                <b>⏱️ Minutado:</b> ${sessionCount} sesiones × 60 min
              </div>
            ` : ''}

            <button class="btn-primary module-card__cta" onclick="openCurriculumModule('${modId}')">
              ${cta} →
            </button>
          </article>
        `;
      }).join('')}
    </div>
  `;
}

// ============================================================================
// 3. VISTA: TEST "QUIÉN SOY" & PERFIL VOCACIONAL (RIASEC / Test de Dones)
// ============================================================================
function renderRiasecTestView(container) {
  const isEs = state.lang === 'es';

  if (!isRiasecAvailable()) {
    container.innerHTML = `
      <div class="locked-notice">
        <div style="font-size: 30px; margin-bottom: 10px;">🔒</div>
        <h3 style="color: var(--navy); margin-bottom: 8px;">
          ${isEs ? 'Test "Quién Soy" · Explorer Q1' : 'Who Am I Test · Explorer Q1'}
        </h3>
        <p style="color: var(--ink-muted); font-size: 14px; max-width: 460px; margin: 0 auto;">
          ${isEs
            ? `Este test forma parte del primer trimestre de Explorer. Tu nivel activo en el SIS es <b>${(state.assignedLevel || '').toUpperCase()}</b>. Estará disponible cuando avances a esa etapa — habla con tu mentora.`
            : `This test belongs to Explorer Q1. Your active level in the SIS is <b>${(state.assignedLevel || '').toUpperCase()}</b>. It will unlock when you reach that stage — talk to your mentor.`}
        </p>
      </div>
    `;
    return;
  }

  const questions = RIASEC_TEST_DATA.questions;
  const dimensions = RIASEC_TEST_DATA.dimensions;
  const answers = state.riasecAnswers;
  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === questions.length;
  const result = state.riasecResult;

  container.innerHTML = `
    <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 28px; margin-bottom: 24px; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <span class="eyebrow-tag" style="color: var(--green); margin: 0;">
            PROYECTO ANCLA EXPLORER Q1 · TEST DE DONES & VOCACIÓN
          </span>
          <h3 style="font-size: 26px; color: var(--navy); margin: 6px 0 4px; font-family: var(--font-display);">
            🧭 Test "Quién Soy" · Perfil Vocacional RIASEC
          </h3>
          <p style="font-size: 14px; color: var(--ink-muted); margin: 0;">
            Marco pedagógico de orientación vocacional (Holland Codes) alineado con los dones y el servicio cristiano a la comunidad.
          </p>
        </div>

        <span class="badge" style="background: var(--gold-light); color: var(--gold); font-size: 13px; font-weight: 700; padding: 6px 14px;">
          Recompensa: +50 🪙 ChanakCoins
        </span>
      </div>
    </div>

    <!-- Progress Indicator -->
    <div style="background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 14px 20px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center;">
      <span style="font-size: 13px; font-weight: 600; color: var(--navy);">
        Preguntas Respondidas: <b>${answeredCount} de ${questions.length}</b>
      </span>
      <div style="width: 200px; height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden;">
        <div style="width: ${Math.round((answeredCount / questions.length) * 100)}%; height: 100%; background: var(--green); transition: width 0.3s ease;"></div>
      </div>
    </div>

    <!-- Questions Matrix -->
    <div class="riasec-test-container">
      <div style="font-size: 13px; color: var(--ink-muted); margin-bottom: 18px; padding-bottom: 8px; border-bottom: 1px solid var(--line); display: flex; justify-content: space-between;">
        <span>Escala: <b>1</b> = En desacuerdo · <b>2</b> = Poco · <b>3</b> = De acuerdo · <b>4</b> = Totalmente</span>
        <span>Selecciona una opción por fila</span>
      </div>

      ${questions.map((q, idx) => {
        const val = answers[q.id];
        return `
          <div class="riasec-q-card">
            <div style="flex: 1; min-width: 260px;">
              <span style="font-size: 11px; font-weight: 700; color: ${dimensions[q.dim].color}; margin-right: 6px;">#${idx + 1}</span>
              <span style="font-size: 14px; color: var(--ink);">${q.text}</span>
            </div>
            <div class="riasec-options-group">
              <button class="riasec-opt-btn ${val === 1 ? 'active-1' : ''}" onclick="setRiasecAnswer('${q.id}', 1)" title="En desacuerdo">1</button>
              <button class="riasec-opt-btn ${val === 2 ? 'active-2' : ''}" onclick="setRiasecAnswer('${q.id}', 2)" title="Poco">2</button>
              <button class="riasec-opt-btn ${val === 3 ? 'active-3' : ''}" onclick="setRiasecAnswer('${q.id}', 3)" title="De acuerdo">3</button>
              <button class="riasec-opt-btn ${val === 4 ? 'active-4' : ''}" onclick="setRiasecAnswer('${q.id}', 4)" title="Totalmente">4</button>
            </div>
          </div>
        `;
      }).join('')}

      <div style="margin-top: 24px; text-align: center;">
        <button class="btn-primary" style="padding: 12px 32px; font-size: 15px; font-weight: 700; ${!isComplete ? 'opacity: 0.5; cursor: not-allowed;' : ''}" onclick="calculateRiasecProfile()" ${!isComplete ? 'disabled' : ''}>
          ${isComplete ? '✓ Calcular y Guardar mi Perfil Vocacional (+50 🪙)' : `Responde las ${questions.length - answeredCount} preguntas restantes para calcular`}
        </button>
      </div>
    </div>

    <!-- Results Section (when calculated) -->
    ${result ? renderRiasecResultsCard(result) : ''}
  `;
}

function setRiasecAnswer(qId, value) {
  state.riasecAnswers[qId] = value;
  localStorage.setItem('chanak_riasec_answers', JSON.stringify(state.riasecAnswers));
  renderCurrentView();
}

function calculateRiasecProfile() {
  const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  RIASEC_TEST_DATA.questions.forEach(q => {
    const val = state.riasecAnswers[q.id] || 0;
    scores[q.dim] = (scores[q.dim] || 0) + val;
  });

  // Sort dimensions by highest score
  const sortedDims = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  const primaryCode = sortedDims[0];
  const secondaryCode = sortedDims[1];
  const comboKey = `${primaryCode}${secondaryCode}`;
  const reverseKey = `${secondaryCode}${primaryCode}`;
  const profileData = RIASEC_TEST_DATA.profiles[comboKey] || RIASEC_TEST_DATA.profiles[reverseKey] || {
    title: 'Explorador Vocacional Integral',
    service: 'Servicio en liderazgo y proyectos comunitarios.',
    careers: ['Gestión', 'Liderazgo', 'Comunicación']
  };

  const finalResult = {
    scores,
    primaryCode,
    secondaryCode,
    comboKey,
    profileData,
    date: new Date().toLocaleDateString()
  };

  state.riasecResult = finalResult;
  localStorage.setItem('chanak_riasec_result', JSON.stringify(finalResult));

  // El servidor compone la clave de idempotencia a partir del student_id y el
  // curso que vienen firmados dentro del token, y comprueba que el nivel sea
  // Explorer antes de acreditar.
  awardCoins('riasec_test', 'explorer:q1', 'Test de Dones y Vocación (Explorer Q1)');

  renderCurrentView();
  setTimeout(() => {
    const el = document.getElementById('riasec-results-anchor');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

function resetRiasecTest() {
  if (!confirm('¿Deseas reiniciar tus respuestas del test?')) return;
  state.riasecAnswers = {};
  state.riasecResult = null;
  localStorage.removeItem('chanak_riasec_answers');
  localStorage.removeItem('chanak_riasec_result');
  renderCurrentView();
}

function renderRiasecResultsCard(res) {
  const isEs = state.lang === 'es';
  const dims = RIASEC_TEST_DATA.dimensions;

  // Generate SVG Radar points geometrically
  const dimOrder = ['R', 'I', 'A', 'S', 'E', 'C'];
  const cx = 260, cy = 200, rMax = 110;
  const maxPossible = 16; // 4 questions * 4 max points

  const polygonPoints = dimOrder.map((dim, i) => {
    const angle = (Math.PI * 2 / 6) * i - Math.PI / 2;
    const scoreVal = res.scores[dim] || 0;
    const r = (scoreVal / maxPossible) * rMax;
    const x = Math.round((cx + r * Math.cos(angle)) * 10) / 10;
    const y = Math.round((cy + r * Math.sin(angle)) * 10) / 10;
    return `${x},${y}`;
  }).join(' ');

  return `
    <div id="riasec-results-anchor" class="vocation-card" style="margin-top: 32px; border-top: 5px solid var(--gold);">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 20px;">
        <div>
          <span class="badge" style="background: var(--gold-light); color: var(--gold); font-size: 11px; font-weight: 700;">
            RESULTADO OFICIAL DE EVALUACIÓN
          </span>
          <h3 style="font-size: 24px; color: var(--navy); margin-top: 4px; font-family: var(--font-display);">
            Tu Perfil Vocacional: ${res.profileData.title} (${res.comboKey})
          </h3>
        </div>
        <button class="btn-interactive" style="font-size: 12px;" onclick="resetRiasecTest()">
          🔄 Repetir Test
        </button>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 28px; align-items: center;">
        
        <!-- SVG Radar Chart -->
        <div style="background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 18px; text-align: center;">
          <h4 style="font-size: 14px; color: var(--navy); margin-bottom: 8px;">Radar de Dimensiones RIASEC</h4>
          <svg class="radar-chart-svg" viewBox="0 0 520 400" style="max-width: 100%; height: auto;">
            <!-- Grid Circles -->
            <polygon points="260,90 355.3,145 355.3,255 260,310 164.7,255 164.7,145" fill="none" stroke="#e2e8f0" stroke-width="1.5" />
            <polygon points="260,125 325,162.5 325,237.5 260,275 195,237.5 195,162.5" fill="none" stroke="#e2e8f0" stroke-width="1" />
            <polygon points="260,160 294.6,180 294.6,220 260,240 225.4,220 225.4,180" fill="none" stroke="#e2e8f0" stroke-width="1" />
            
            <!-- Axis lines -->
            <line x1="260" y1="200" x2="260" y2="90" stroke="#cbd5e1" stroke-width="1" />
            <line x1="260" y1="200" x2="355.3" y2="145" stroke="#cbd5e1" stroke-width="1" />
            <line x1="260" y1="200" x2="355.3" y2="255" stroke="#cbd5e1" stroke-width="1" />
            <line x1="260" y1="200" x2="260" y2="310" stroke="#cbd5e1" stroke-width="1" />
            <line x1="260" y1="200" x2="164.7" y2="255" stroke="#cbd5e1" stroke-width="1" />
            <line x1="260" y1="200" x2="164.7" y2="145" stroke="#cbd5e1" stroke-width="1" />

            <!-- User Shape -->
            <polygon points="${polygonPoints}" fill="rgba(40, 107, 67, 0.35)" stroke="#286b43" stroke-width="2.5" />

            <!-- Labels with full margin -->
            <text x="260" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#0284c7">🔧 Realista (${res.scores.R || 0})</text>
            <text x="375" y="148" text-anchor="start" font-size="12" font-weight="700" fill="#7c3aed">🔬 Investigador (${res.scores.I || 0})</text>
            <text x="375" y="260" text-anchor="start" font-size="12" font-weight="700" fill="#db2777">🎨 Artístico (${res.scores.A || 0})</text>
            <text x="260" y="332" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">🤝 Social (${res.scores.S || 0})</text>
            <text x="145" y="260" text-anchor="end" font-size="12" font-weight="700" fill="#d97706">📣 Emprendedor (${res.scores.E || 0})</text>
            <text x="145" y="148" text-anchor="end" font-size="12" font-weight="700" fill="#475569">📋 Convencional (${res.scores.C || 0})</text>
          </svg>
        </div>

        <!-- Career & Service Insights -->
        <div>
          <div style="margin-bottom: 18px;">
            <b style="font-size: 12px; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">
              🎓 Áreas Universitarias y Carreras Sugeridas:
            </b>
            <div style="margin-top: 4px;">
              ${res.profileData.careers.map(c => `<span class="career-chip">🎓 ${c}</span>`).join('')}
            </div>
          </div>

          <div class="service-callout-box">
            <b style="font-size: 13px; display: block; margin-bottom: 4px;">
              🤝 ¿Cómo puedes servir en la Iglesia y tu Comunidad?
            </b>
            <p style="font-size: 13px; line-height: 1.5; margin: 0;">
              ${res.profileData.service}
            </p>
          </div>

          <div style="background: #f8fafc; border: 1px solid var(--line); border-radius: 8px; padding: 12px 14px; margin-top: 16px; font-size: 12px; color: var(--ink-muted);">
            📄 <b>Entregable Expediente:</b> Este resultado alimenta automáticamente tu dossier de <i>Identidad y Propósito</i> (<code>Test_Dones_Resultados.pdf</code>).
          </div>
        </div>

      </div>
    </div>
  `;
}

// ============================================================================
// 4. VISTA: HÁBITOS & CARÁCTER (Habit Tracker & Escudo)
// ============================================================================
function renderInteractiveTools(container) {
  const isEs = state.lang === 'es';
  const completedDaysCount = state.trackerDays.filter(Boolean).length;
  const progressPercent = Math.round((completedDaysCount / 21) * 100);

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 24px; margin-bottom: 32px;">
      
      <!-- Card 1: Interactive 21-Day Habit Tracker -->
      <div class="reading-card" style="padding: 26px; border-top: 4px solid var(--navy);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span class="eyebrow-tag" style="color: var(--gold); margin: 0;">HERRAMIENTA FORMATIVA</span>
          <span class="badge" style="background: var(--paper); border: 1px solid var(--line);">${completedDaysCount}/21 Días</span>
        </div>
        <h3 style="font-size: 22px; color: var(--navy); margin-bottom: 6px; font-family: var(--font-display);">
          ⏱️ Habit Tracker de 21 Días
        </h3>
        <p style="font-size: 13px; color: var(--ink-muted); margin-bottom: 16px;">
          Define un hábito de carácter o autodisciplina y haz seguimiento diario:
        </p>

        <div style="margin-bottom: 16px;">
          <input type="text" id="habit-name-input" value="${state.trackerHabitName}" 
                 style="width: 100%; padding: 8px 12px; border: 1px solid var(--line); border-radius: 8px; font-family: inherit; font-size: 14px; font-weight: 600; color: var(--navy);"
                 onchange="updateTrackerHabit(this.value)">
        </div>

        <div class="habit-days-grid" style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; margin-bottom: 18px;">
          ${state.trackerDays.map((isDone, idx) => `
            <button class="btn-interactive ${isDone ? 'active' : ''}" 
                    style="padding: 8px 0; justify-content: center; font-size: 12px; ${isDone ? 'background: var(--green); color: #fff; border-color: var(--green);' : ''}"
                    onclick="toggleTrackerDay(${idx})">
              ${idx + 1}
            </button>
          `).join('')}
        </div>

        <div style="background: var(--paper); border-radius: 8px; padding: 12px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 12px; font-weight: 700; color: var(--navy);">Progreso del Hábito:</span>
          <span style="font-size: 13px; font-weight: 800; color: var(--green);">${progressPercent}%</span>
        </div>
      </div>

      <!-- Card 2: Interactive Shield Creator (Coat of Arms) -->
      <div class="reading-card" style="padding: 26px; border-top: 4px solid var(--gold);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span class="eyebrow-tag" style="color: var(--green); margin: 0;">ENTREGABLE SEEDLING Q1</span>
          <span class="badge" style="background: var(--paper); border: 1px solid var(--line);">Identidad</span>
        </div>
        <h3 style="font-size: 22px; color: var(--navy); margin-bottom: 6px; font-family: var(--font-display);">
          🛡️ Escudo de Armas Personal
        </h3>
        <p style="font-size: 13px; color: var(--ink-muted); margin-bottom: 16px;">
          Cuatro cuadrantes esenciales de tu identidad y propósito:
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;">
          <div style="background: #f0f7ff; border: 1px solid #c8e1ff; border-radius: 8px; padding: 10px;">
            <b style="font-size: 11px; text-transform: uppercase; color: #0052cc; display: block; margin-bottom: 4px;">✝️ 1. Mi Fe</b>
            <input type="text" id="coat-fe" value="${state.coatFe}" onchange="updateCoatOfArms()" style="width: 100%; font-size: 12px; padding: 4px 6px; border: 1px solid var(--line); border-radius: 4px;">
          </div>
          <div style="background: #fcf4e8; border: 1px solid #f6d8ae; border-radius: 8px; padding: 10px;">
            <b style="font-size: 11px; text-transform: uppercase; color: #b76e00; display: block; margin-bottom: 4px;">🌳 2. Mis Raíces</b>
            <input type="text" id="coat-raices" value="${state.coatRaices}" onchange="updateCoatOfArms()" style="width: 100%; font-size: 12px; padding: 4px 6px; border: 1px solid var(--line); border-radius: 4px;">
          </div>
          <div style="background: #eefcf3; border: 1px solid #bcefd0; border-radius: 8px; padding: 10px;">
            <b style="font-size: 11px; text-transform: uppercase; color: #166534; display: block; margin-bottom: 4px;">⚡ 3. Mis Talentos</b>
            <input type="text" id="coat-talentos" value="${state.coatTalentos}" onchange="updateCoatOfArms()" style="width: 100%; font-size: 12px; padding: 4px 6px; border: 1px solid var(--line); border-radius: 4px;">
          </div>
          <div style="background: #fbf0f8; border: 1px solid #f2cbe6; border-radius: 8px; padding: 10px;">
            <b style="font-size: 11px; text-transform: uppercase; color: #861864; display: block; margin-bottom: 4px;">🚀 4. Mi Sueño</b>
            <input type="text" id="coat-sueno" value="${state.coatSueno}" onchange="updateCoatOfArms()" style="width: 100%; font-size: 12px; padding: 4px 6px; border: 1px solid var(--line); border-radius: 4px;">
          </div>
        </div>

        <button class="btn-interactive" style="width: 100%; justify-content: center;" onclick="showCoinToast('🛡️ Escudo de Armas guardado correctamente')">
          ✓ Guardar Cuadrantes del Escudo
        </button>
      </div>

      <!-- Card 3: Test Vocacional "Quién Soy" (RIASEC / Dones) -->
      <div class="reading-card" style="padding: 26px; border-top: 4px solid #0052cc;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span class="eyebrow-tag" style="color: #0052cc; margin: 0;">ENTREGABLE EXPLORER Q1</span>
          <span class="badge" style="background: var(--paper); border: 1px solid var(--line);">Vocación & Dones</span>
        </div>
        <h3 style="font-size: 22px; color: var(--navy); margin-bottom: 6px; font-family: var(--font-display);">
          🧭 Test "Quién Soy" (RIASEC)
        </h3>
        <p style="font-size: 13px; color: var(--ink-muted); margin-bottom: 16px;">
          Descubre tus inclinaciones vocacionales mediante el modelo RIASEC adaptado a la mayordomía de dones y servicio cristiano.
        </p>
        <div style="background: #f0f7ff; border: 1px solid #c8e1ff; border-radius: 8px; padding: 12px 14px; margin-bottom: 16px; font-size: 12px; color: #0052cc; line-height: 1.5;">
          <strong>🎯 Entregable Oficial:</strong> Genera tu perfil vocacional y el archivo <code>Test_Dones_Resultados.pdf</code> para tu Expediente Universitario.
        </div>
        <button class="btn-primary" style="width: 100%; justify-content: center; background: #0052cc; color: #fff; padding: 12px; font-size: 13px; border-radius: 8px; border: none; font-weight: 700; cursor: pointer;" onclick="setViewMode('test-dones')">
          🚀 Abrir Test Vocacional RIASEC (+50 🪙) →
        </button>
      </div>

    </div>
  `;
}

function toggleTrackerDay(idx) {
  state.trackerDays[idx] = !state.trackerDays[idx];
  localStorage.setItem('chanak_tracker_days', JSON.stringify(state.trackerDays));
  renderCurrentView();
}

function updateTrackerHabit(val) {
  state.trackerHabitName = val;
  localStorage.setItem('chanak_habit_name', val);
}

function updateCoatOfArms() {
  state.coatFe = document.getElementById('coat-fe')?.value || state.coatFe;
  state.coatRaices = document.getElementById('coat-raices')?.value || state.coatRaices;
  state.coatTalentos = document.getElementById('coat-talentos')?.value || state.coatTalentos;
  state.coatSueno = document.getElementById('coat-sueno')?.value || state.coatSueno;

  localStorage.setItem('chanak_coat_fe', state.coatFe);
  localStorage.setItem('chanak_coat_raices', state.coatRaices);
  localStorage.setItem('chanak_coat_talentos', state.coatTalentos);
  localStorage.setItem('chanak_coat_sueno', state.coatSueno);
}

// ============================================================================
// 5. VISTA: EXPEDIENTE UNIVERSITARIO & RÚBRICA 40/30/30
// ============================================================================
function renderExpedienteUniversitario(container) {
  const isEs = state.lang === 'es';

  container.innerHTML = `
    <!-- Header Expediente -->
    <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 26px; margin-bottom: 24px; box-shadow: var(--shadow-sm);">
      <span class="eyebrow-tag" style="color: var(--navy); margin: 0;">DOSSIER UNIVERSITARIO ACADÉMICO</span>
      <h3 style="font-size: 26px; color: var(--navy); margin: 6px 0 4px; font-family: var(--font-display);">
        🎓 Expediente & Rúbrica Institucional 40/30/30
      </h3>
      <p style="font-size: 14px; color: var(--ink-muted); margin: 0;">
        Evidencias acumuladas a lo largo de los cuatro años de secundaria para universidades en EE.UU., España y Latinoamérica.
      </p>
    </div>

    <!-- Rúbrica 40/30/30 -->
    <div style="background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-md); padding: 24px; margin-bottom: 28px;">
      <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 12px; font-family: var(--font-display);">
        📋 Rúbrica Institucional Oficial 40 / 30 / 30
      </h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
        <div style="background: #fff; border: 1px solid var(--line); border-radius: 8px; padding: 16px;">
          <div style="font-size: 24px; font-weight: 800; color: var(--green);">40 pts</div>
          <b style="font-size: 14px; color: var(--navy); display: block; margin: 4px 0;">Evidencia Visual / Proyecto</b>
          <p style="font-size: 12px; color: var(--ink-muted); margin: 0;">Fotos del proceso, video, prototipo funcional o documento real del proyecto.</p>
        </div>
        <div style="background: #fff; border: 1px solid var(--line); border-radius: 8px; padding: 16px;">
          <div style="font-size: 24px; font-weight: 800; color: var(--gold);">30 pts</div>
          <b style="font-size: 14px; color: var(--navy); display: block; margin: 4px 0;">Referencia Externa</b>
          <p style="font-size: 12px; color: var(--ink-muted); margin: 0;">Carta o validación firmada por mentor, pastor, supervisor o líder comunitario.</p>
        </div>
        <div style="background: #fff; border: 1px solid var(--line); border-radius: 8px; padding: 16px;">
          <div style="font-size: 24px; font-weight: 800; color: var(--navy);">30 pts</div>
          <b style="font-size: 14px; color: var(--navy); display: block; margin: 4px 0;">Reflexión / Personal Statement</b>
          <p style="font-size: 12px; color: var(--ink-muted); margin: 0;">Ensayo reflexivo de 300–500 palabras respondiendo al aprendizaje del trimestre.</p>
        </div>
      </div>
      <div style="margin-top: 14px; font-size: 12px; color: var(--ink-muted); font-style: italic;">
        🔒 Umbral de Dominio Chanak: 80% mínimo requerido para validación institucional.
      </div>
    </div>

    <!-- Categorías del Dossier -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px;">
      ${EXPEDIENTE_CATEGORIES.map(cat => {
        const catTitle = cat.title?.[state.lang] || cat.title?.es || cat.id;
        const items = cat.items || [];
        const mine = items.filter(it => it.level === state.currentLevel).length;

        return `
          <article class="dossier-card">
            <header class="dossier-card__top">
              <span class="dossier-card__icon">${cat.icon || '🗂️'}</span>
              <div>
                <h4 class="dossier-card__title">${catTitle}</h4>
                <span class="dossier-card__count">
                  ${items.length} ${isEs ? 'entregables' : 'artifacts'}${mine ? ` · ${mine} ${isEs ? 'en tu nivel' : 'at your level'}` : ''}
                </span>
              </div>
            </header>

            <ul class="dossier-items">
              ${items.map(it => {
                const itTitle = it.title?.[state.lang] || it.title?.es || '';
                const itDesc = it.desc?.[state.lang] || it.desc?.es || '';
                const isMine = it.level === state.currentLevel;
                return `
                  <li class="${isMine ? 'is-mine' : ''}">
                    <div class="dossier-items__head">
                      <span class="dossier-items__level">${it.levelLabel || it.level || ''}${it.quarter ? ` · ${it.quarter}` : ''}</span>
                      ${isMine ? `<span class="dossier-items__you">${isEs ? 'Tu nivel' : 'Your level'}</span>` : ''}
                    </div>
                    <b>${itTitle}</b>
                    ${itDesc ? `<p>${itDesc}</p>` : ''}
                    ${it.file ? `<code>${it.file}</code>` : ''}
                  </li>
                `;
              }).join('')}
            </ul>
          </article>
        `;
      }).join('')}
    </div>
  `;
}

// ============================================================================
// 6. VISTA: RÚBRICA INSTITUCIONAL 40/30/30 (CANÓNICA)
// ============================================================================
function renderRubricaView(container) {
  const isEs = state.lang === 'es';

  container.innerHTML = `
    <!-- Header Rúbrica -->
    <div style="background: linear-gradient(135deg, #09204A, #163275); color: #fff; border-radius: var(--radius-md); padding: 28px; margin-bottom: 24px; box-shadow: var(--shadow-sm);">
      <span class="eyebrow-tag" style="color: #93c5fd; margin: 0; font-size: 11px; letter-spacing: 0.1em;">SISTEMA DE EVALUACIÓN · INSTITUCIONAL · INMUTABLE</span>
      <h3 style="font-size: 28px; color: #fff; margin: 8px 0 6px; font-family: var(--font-display); font-weight: 800;">
        📋 Rúbrica Chanak 40 / 30 / 30
      </h3>
      <p style="font-size: 14px; color: #e2e8f0; margin: 0; max-width: 740px; line-height: 1.6;">
        ${isEs
          ? 'Todos los entregables de Life Skills se evalúan con esta rúbrica de tres criterios estructurados. Es idéntica en todos los niveles (Seedling, Explorer, Launch, Catalyst) y constituye la base formal de validación del Expediente Universitario y la acreditación FLDOE #134620.'
          : 'All Life Skills deliverables are graded with this three-criterion structured rubric. It is identical across all levels and serves as the foundation for university transcripts and FLDOE #134620 accreditation.'}
      </p>
    </div>

    <!-- 3 Criterios de Evaluación -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 28px;">
      
      <!-- Criterio 1: 40 pts -->
      <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
        <div style="background: linear-gradient(135deg, #0C6E70, #0A5658); color: white; padding: 22px;">
          <div style="font-size: 38px; font-weight: 900; line-height: 1;">40 pts</div>
          <div style="font-size: 12px; opacity: 0.85; margin-top: 2px;">${isEs ? 'Puntos de 100' : 'Points out of 100'}</div>
          <h4 style="margin: 12px 0 0; font-size: 17px; font-weight: 700; color: #fff;">
            📸 ${isEs ? 'Evidencia Visual o Proyecto Tangible' : 'Visual Evidence or Tangible Project'}
          </h4>
        </div>
        <div style="background: #e6f6f6; padding: 18px; flex: 1; display: flex; flex-direction: column; gap: 8px;">
          <p style="margin: 0; font-size: 13px; color: #1e3a40; line-height: 1.55;">
            ${isEs
              ? 'Fotos verídicas del proceso, enlace a video demostrativo (YouTube / Drive), prototipo real o documento producido según el entregable del trimestre.'
              : 'Verifiable process photos, video link, functional prototype or project document as specified for the quarter.'}
          </p>
          <div style="margin-top: auto; font-size: 11px; font-weight: 700; color: #0C6E70;">
            ✓ ${isEs ? 'Verificación de autenticidad requerida' : 'Authenticity verification required'}
          </div>
        </div>
      </div>

      <!-- Criterio 2: 30 pts -->
      <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
        <div style="background: linear-gradient(135deg, #2B6840, #1D4D2C); color: white; padding: 22px;">
          <div style="font-size: 38px; font-weight: 900; line-height: 1;">30 pts</div>
          <div style="font-size: 12px; opacity: 0.85; margin-top: 2px;">${isEs ? 'Puntos de 100' : 'Points out of 100'}</div>
          <h4 style="margin: 12px 0 0; font-size: 17px; font-weight: 700; color: #fff;">
            ✍️ ${isEs ? 'Referencia Externa / Feedback de Mentor' : 'External Reference / Mentor Feedback'}
          </h4>
        </div>
        <div style="background: #DCFCE7; padding: 18px; flex: 1; display: flex; flex-direction: column; gap: 8px;">
          <p style="margin: 0; font-size: 13px; color: #14532d; line-height: 1.55;">
            ${isEs
              ? 'Validación o carta firmada por un mentor, supervisor, pastor, padre de familia o líder comunitario que acredite el impacto, servicio y actitud del estudiante.'
              : 'Endorsement or signed letter from a mentor, pastor, supervisor, parent or community leader validating service and character.'}
          </p>
          <div style="margin-top: auto; font-size: 11px; font-weight: 700; color: #166534;">
            ✓ ${isEs ? 'Firma o correo de respaldo institucional' : 'Institutional signature or contact email'}
          </div>
        </div>
      </div>

      <!-- Criterio 3: 30 pts -->
      <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
        <div style="background: linear-gradient(135deg, #B8891E, #8C642B); color: white; padding: 22px;">
          <div style="font-size: 38px; font-weight: 900; line-height: 1;">30 pts</div>
          <div style="font-size: 12px; opacity: 0.85; margin-top: 2px;">${isEs ? 'Puntos de 100' : 'Points out of 100'}</div>
          <h4 style="margin: 12px 0 0; font-size: 17px; font-weight: 700; color: #fff;">
            📝 ${isEs ? 'Reflexión Personal / Statement' : 'Personal Statement / Reflection'}
          </h4>
        </div>
        <div style="background: #FEF3C7; padding: 18px; flex: 1; display: flex; flex-direction: column; gap: 8px;">
          <p style="margin: 0; font-size: 13px; color: #78350f; line-height: 1.55;">
            ${isEs
              ? 'Ensayo reflexivo de 300–500 palabras estructurado en: lecciones aprendidas, obstáculos de carácter superados y aplicación futura con base bíblica.'
              : 'Reflective personal statement of 300-500 words on key lessons learned, challenges overcome and future applications.'}
          </p>
          <div style="margin-top: auto; font-size: 11px; font-weight: 700; color: #92400e;">
            ✓ ${isEs ? 'Pensamiento crítico y autoevaluación' : 'Critical thinking and self-evaluation'}
          </div>
        </div>
      </div>

    </div>

    <!-- Niveles de Desempeño Chanak -->
    <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 24px; margin-bottom: 24px; box-shadow: var(--shadow-sm);">
      <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 16px; font-family: var(--font-display); font-weight: 700;">
        📊 ${isEs ? 'Niveles de Desempeño Académico' : 'Academic Performance Levels'}
      </h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px;">
        <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 10px; padding: 16px; text-align: center;">
          <div style="font-size: 26px; font-weight: 900; color: #047857;">90–100</div>
          <div style="font-size: 13px; font-weight: 700; color: #065f46; margin: 4px 0 2px;">⭐ ${isEs ? 'Excelente (Exemplary)' : 'Exemplary'}</div>
          <div style="font-size: 11px; color: #047857;">${isEs ? 'Supera expectativas y apto para honores' : 'Exceeds expectations, honors ready'}</div>
        </div>

        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 16px; text-align: center;">
          <div style="font-size: 26px; font-weight: 900; color: #166534;">80–89</div>
          <div style="font-size: 13px; font-weight: 700; color: #14532d; margin: 4px 0 2px;">✅ ${isEs ? 'Satisfactorio (Dominio)' : 'Proficient (Mastery)'}</div>
          <div style="font-size: 11px; color: #166534;">${isEs ? 'Dominio validado institucionalmente' : 'Institutional validated mastery'}</div>
        </div>

        <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 10px; padding: 16px; text-align: center;">
          <div style="font-size: 26px; font-weight: 900; color: #b45309;">70–79</div>
          <div style="font-size: 13px; font-weight: 700; color: #92400e; margin: 4px 0 2px;">⚠️ ${isEs ? 'En Desarrollo (Developing)' : 'Developing'}</div>
          <div style="font-size: 11px; color: #b45309;">${isEs ? 'Requiere fortalecer evidencias' : 'Requires stronger evidence'}</div>
        </div>

        <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 10px; padding: 16px; text-align: center;">
          <div style="font-size: 26px; font-weight: 900; color: #b91c1c;">&lt; 70</div>
          <div style="font-size: 13px; font-weight: 700; color: #991b1b; margin: 4px 0 2px;">🔄 ${isEs ? 'Requiere Revisión' : 'Needs Revision'}</div>
          <div style="font-size: 11px; color: #b91c1c;">${isEs ? 'Debe nivelar con su mentor' : 'Must level up with mentor'}</div>
        </div>
      </div>
    </div>

    <!-- Banner Umbral de Dominio y Calendario -->
    <div style="background: #f0fdf4; border: 1.5px solid #86efac; border-radius: var(--radius-md); padding: 18px 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
      <div>
        <strong style="color: #166534; font-size: 14px; display: block;">
          🔒 ${isEs ? 'Umbral de Dominio Institucional Chanak: 80 / 100 pts (80% mínimo)' : 'Chanak Mastery Threshold: 80 / 100 pts (80% minimum)'}
        </strong>
        <span style="font-size: 13px; color: #15803d;">
          ${isEs
            ? 'Los estudiantes que no alcancen 80 pts en un trimestre regular (Q1, Q2, Q3) disponen del Período de Nivelación Formativa para subsanar observaciones.'
            : 'Students not reaching 80 pts in regular quarters (Q1, Q2, Q3) use the Formative Leveling Period to revise submissions.'}
        </span>
      </div>
      <button class="btn-primary" style="background: #166534; color: #fff; padding: 10px 18px; font-size: 13px; border-radius: 8px; border: none; font-weight: 700; cursor: pointer;" onclick="setViewMode('expediente')">
        Ver Mi Expediente →
      </button>
    </div>
  `;
}

// ============================================================================
// MODALES Y CONTROLADORES INTERACTIVOS
// ============================================================================

function openCapsule(capKey) {
  const cap = CAPSULES_DATA[capKey];
  if (!cap) return;

  state.activeCapsule = capKey;
  state.capsuleCurrentStep = 0;

  const modal = document.getElementById('capsule-modal');
  const body = document.getElementById('capsule-modal-body');
  if (!modal || !body) return;

  renderCapsuleModalContent(body);
  modal.classList.add('open');
}

function closeCapsuleModal() {
  const modal = document.getElementById('capsule-modal');
  if (modal) modal.classList.remove('open');
  renderCurrentView();
}

function capsuleNextStep() {
  state.capsuleCurrentStep++;
  const body = document.getElementById('capsule-modal-body');
  if (body) renderCapsuleModalContent(body);
}

function capsulePrevStep() {
  if (state.capsuleCurrentStep > 0) state.capsuleCurrentStep--;
  const body = document.getElementById('capsule-modal-body');
  if (body) renderCapsuleModalContent(body);
}

function checkQuizStepAnswer(isOk, okMsgEncoded, noMsgEncoded) {
  const okMsg = decodeURIComponent(okMsgEncoded);
  const noMsg = decodeURIComponent(noMsgEncoded);
  const feedbackEl = document.getElementById('quiz-feedback');
  if (feedbackEl) {
    feedbackEl.style.display = 'block';
    if (isOk) {
      feedbackEl.style.background = '#dcfce7';
      feedbackEl.style.color = '#166534';
      feedbackEl.style.border = '1px solid #86efac';
      feedbackEl.innerHTML = `✓ ${okMsg}`;
    } else {
      feedbackEl.style.background = '#fee2e2';
      feedbackEl.style.color = '#991b1b';
      feedbackEl.style.border = '1px solid #fca5a5';
      feedbackEl.innerHTML = `✕ ${noMsg}`;
    }
  }
}
window.checkQuizStepAnswer = checkQuizStepAnswer;

function finishCapsule(capKey) {
  localStorage.setItem(`chanak_cap_${capKey}`, 'done');
  awardCoins('capsule_complete', `cap:${capKey}`, `Cápsula Completada (${capKey})`);
  closeCapsuleModal();
  renderCurrentView();
}

function renderCapsuleModalContent(container) {
  const isEs = state.lang === 'es';
  const cap = CAPSULES_DATA[state.activeCapsule];
  if (!cap) return;

  const steps = cap.steps || [];
  const stepsTotal = steps.length || 4;
  const step = Math.min(state.capsuleCurrentStep, stepsTotal - 1);
  const curStep = steps[step];

  let stepHtml = '';
  if (curStep) {
    const kicker = curStep.kicker ? (curStep.kicker[state.lang] || curStep.kicker.es || curStep.kicker) : `Paso ${step + 1}`;
    const h = curStep.h ? (curStep.h[state.lang] || curStep.h.es || curStep.h) : '';
    const body = curStep.body ? (curStep.body[state.lang] || curStep.body.es || curStep.body) : '';
    const scenario = curStep.scenario ? (curStep.scenario[state.lang] || curStep.scenario.es || curStep.scenario) : '';
    const diagram = curStep.diagram ? (curStep.diagram[state.lang] || curStep.diagram.es || curStep.diagram) : '';

    if (curStep.type === 'hook') {
      stepHtml = `
        <span class="eyebrow-tag" style="color: var(--gold); margin-bottom: 6px;">${kicker}</span>
        <h4 style="font-size: 19px; color: var(--navy); margin-bottom: 12px; font-family: var(--font-display);">${h}</h4>
        ${scenario ? `<div style="background: #fff; border-left: 4px solid var(--gold); padding: 12px 16px; border-radius: 4px; margin-bottom: 14px; font-size: 14px; font-style: italic; color: var(--navy);">${scenario}</div>` : ''}
        <p style="font-size: 14px; color: var(--ink); line-height: 1.6; margin: 0;">${body}</p>
      `;
    } else if (curStep.type === 'theory') {
      stepHtml = `
        <span class="eyebrow-tag" style="color: var(--green); margin-bottom: 6px;">${kicker}</span>
        <h4 style="font-size: 19px; color: var(--navy); margin-bottom: 12px; font-family: var(--font-display);">${h}</h4>
        <p style="font-size: 14px; color: var(--ink); line-height: 1.6; margin-bottom: 14px;">${body}</p>
        ${diagram ? `<div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 14px; font-size: 13px; color: #166534; line-height: 1.6;">${diagram}</div>` : ''}
      `;
    } else if (curStep.type === 'quiz') {
      const qText = curStep.q ? (curStep.q[state.lang] || curStep.q.es || curStep.q) : h;
      const opts = curStep.opts || [];
      stepHtml = `
        <span class="eyebrow-tag" style="color: var(--navy); margin-bottom: 6px;">${kicker}</span>
        <h4 style="font-size: 19px; color: var(--navy); margin-bottom: 8px; font-family: var(--font-display);">${h}</h4>
        <p style="font-size: 14px; color: var(--ink); margin-bottom: 14px; font-weight: 600;">${qText}</p>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${opts.map((opt, i) => {
            const optText = opt.t ? (opt.t[state.lang] || opt.t.es || opt.t) : (opt.text ? (opt.text[state.lang] || opt.text) : opt);
            const isOk = !!opt.ok;
            const okMsg = curStep.okMsg ? (curStep.okMsg[state.lang] || curStep.okMsg.es || curStep.okMsg) : '¡Correcto! Has comprendido el principio.';
            const noMsg = curStep.noMsg ? (curStep.noMsg[state.lang] || curStep.noMsg.es || curStep.noMsg) : 'Inténtalo de nuevo.';
            return `
              <button class="btn-interactive" style="justify-content: flex-start; text-align: left; padding: 12px 14px; font-size: 13px;" onclick="checkQuizStepAnswer(${isOk}, '${encodeURIComponent(okMsg)}', '${encodeURIComponent(noMsg)}')">
                ${optText}
              </button>
            `;
          }).join('')}
        </div>
        <div id="quiz-feedback" style="display: none; border-radius: 8px; padding: 12px 16px; margin-top: 14px; font-size: 13px; font-weight: 600;"></div>
      `;
    } else if (curStep.type === 'reflect') {
      const promptText = curStep.prompt ? (curStep.prompt[state.lang] || curStep.prompt.es || curStep.prompt) : '';
      stepHtml = `
        <span class="eyebrow-tag" style="color: var(--gold); margin-bottom: 6px;">${kicker}</span>
        <h4 style="font-size: 19px; color: var(--navy); margin-bottom: 8px; font-family: var(--font-display);">${h}</h4>
        <p style="font-size: 14px; color: var(--ink); line-height: 1.5; margin-bottom: 12px;">${body}</p>
        ${promptText ? `<div style="background: #fff; border: 1px solid var(--line); border-radius: 6px; padding: 10px 12px; margin-bottom: 10px; font-size: 12px; color: var(--ink-muted); white-space: pre-line;">${promptText}</div>` : ''}
        <textarea id="cap-reflect-input" style="width: 100%; height: 90px; padding: 10px; border: 1px solid var(--line); border-radius: 8px; font-family: inherit; font-size: 13px; box-sizing: border-box;" placeholder="Escribe tu reflexión aquí..."></textarea>
      `;
    }
  }

  container.innerHTML = `
    <!-- Header Modal -->
    <div style="margin-bottom: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
        <span class="eyebrow-tag" style="color: var(--green); margin: 0;">CÁPSULA FORMATIVA · +10 🪙</span>
        <span class="badge" style="background: var(--paper); border: 1px solid var(--line); font-size: 11px;">
          Paso ${step + 1} de ${stepsTotal}
        </span>
      </div>
      <h3 style="font-size: 22px; color: var(--navy); margin: 4px 0; font-family: var(--font-display);">
        ${cap.icon || '🚀'} ${cap.title[state.lang] || cap.title.es || cap.title}
      </h3>
    </div>

    <!-- Step Content -->
    <div style="background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 22px; margin-bottom: 20px; min-height: 230px;">
      ${stepHtml}
    </div>

    <!-- Navigation buttons inside Modal -->
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <button class="btn-interactive" onclick="capsulePrevStep()" ${step === 0 ? 'style="visibility:hidden;"' : ''}>
        ← Anterior
      </button>

      ${step < stepsTotal - 1 ? `
        <button class="btn-primary" onclick="capsuleNextStep()">
          Siguiente Paso →
        </button>
      ` : `
        <button class="btn-primary" style="background: var(--green);" onclick="finishCapsule('${state.activeCapsule}')">
          ✓ Completar y Recibir 10 🪙
        </button>
      `}
    </div>
  `;
}

// ---------------- Curriculum Module & Student Notebook Modal Controller ----------------
function openCurriculumModule(modId, sessionNum = 1) {
  const modData = EXTENSION_CAPSULES_DATA[modId];
  if (!modData) return;

  if (state.roleView !== 'mentor' && state.isSis && state.assignedLevel && modData.level) {
    const normAssigned = ['8', '8th', 'grade8', 'grade 8', '1', 'level1', 'freshman'].includes(state.assignedLevel) ? 'seedling' : state.assignedLevel;
    if (state.audience === 'highschool' && modData.level === 'seedling') {
      // Desbloqueado siempre para Secundaria / 8vo grado
    } else if (normAssigned && modData.level !== normAssigned && normAssigned !== 'junior') {
      alert(`🔒 Módulo bloqueado.\n\nEste módulo pertenece al nivel ${modData.level.toUpperCase()}. Tu nivel actual asignado en el SIS es ${normAssigned.toUpperCase()}.`);
      return;
    }
  }

  state.activeModuleId = modId;
  state.activeSessionNum = sessionNum || 1;
  state.userAgeTier = 'standard';

  const modal = document.getElementById('capsule-modal');
  const body = document.getElementById('capsule-modal-body');
  if (!modal || !body) return;

  renderCurriculumModuleModal(body);
  modal.classList.add('open');
}

function setModuleAgeTier(tier) {
  state.userAgeTier = tier;
  const body = document.getElementById('capsule-modal-body');
  if (body) renderCurriculumModuleModal(body);
}

function selectModuleSession(sessionNum) {
  state.activeSessionNum = sessionNum;
  const body = document.getElementById('capsule-modal-body');
  if (body) renderCurriculumModuleModal(body);
}

function saveNotebookResponse(modId, sessionNum, promptIdx) {
  const inputKey = `nb_input_${modId}_s${sessionNum}_p${promptIdx}`;
  const val = document.getElementById(inputKey)?.value || '';
  const storageKey = `chanak_nb_${modId}_s${sessionNum}_p${promptIdx}`;
  
  localStorage.setItem(storageKey, val);
  awardCoins('notebook_save', `nb:${modId}:s${sessionNum}`, `Guardado en Cuaderno (${modId.toUpperCase()} S${sessionNum})`);
}

function completeModuleSession(modId, sessionNum) {
  const modData = EXTENSION_CAPSULES_DATA[modId];
  if (!modData) return;

  localStorage.setItem(`chanak_done_${modId}_s${sessionNum}`, 'done');
  awardCoins('session_complete', `done:${modId}:s${sessionNum}`, `Sesión ${sessionNum} completada (${modId.toUpperCase()})`);

  if (sessionNum < (modData.sessions?.length || 1)) {
    selectModuleSession(sessionNum + 1);
  } else {
    finishCurriculumModule(modId);
  }
}

function finishCurriculumModule(modId) {
  localStorage.setItem(`chanak_mod_${modId}`, 'done');
  awardCoins('module_complete', `mod:${modId}`, `Módulo ${modId.toUpperCase()} Completado`);
  closeCapsuleModal();
  renderCurrentView();
}

function renderCurriculumModuleModal(container) {
  const isEs = state.lang === 'es';
  const modId = state.activeModuleId;
  const modData = EXTENSION_CAPSULES_DATA[modId];
  if (!modData) return;

  const tg = modData.teacherGuide || {};
  const sessions = modData.sessions || [];
  const currentSession = sessions.find(s => s.number === state.activeSessionNum) || sessions[0] || { number: 1, title: 'Sesión 1', objective: '', keyActivity: '' };
  const isSeedling = (modData.level === 'seedling');
  const isMentor = (state.roleView === 'mentor');

  container.innerHTML = `
    <!-- Module Header -->
    <div style="margin-bottom: 14px;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
        <span class="eyebrow-tag" style="color: var(--green); margin: 0;">
          ${modData.level.toUpperCase()} · ${modData.quarter || 'MÓDULO'} · FLDOE #134620
        </span>
        <span class="badge" style="background: var(--paper); border: 1px solid var(--line); font-size: 11px;">
          ${sessions.length} ${isEs ? 'Sesiones de 60 min' : '60-min Sessions'}
        </span>
      </div>
      <h3 style="font-size: 24px; color: var(--navy); margin-top: 6px; font-family: var(--font-display);">
        ${modId.toUpperCase()}: ${(sessions[0] && sessions[0].title) || modId}
      </h3>
      ${tg.essentialQuestion ? `
        <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">
          <b>${isEs ? 'Pregunta Esencial' : 'Essential Question'}:</b> "${tg.essentialQuestion}"
        </div>
      ` : ''}
    </div>

    <!-- Teacher Guide Institutional Box (Mentor Mode Only) -->
    ${isMentor ? `
      <div class="teacher-guide-box" style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 14px 18px; margin-bottom: 16px;">
        <h4 style="color: #166534; font-size: 14px; margin-bottom: 6px;">📋 Guía Pedagógica Institucional Chanak (Vista Mentor)</h4>
        <div style="font-size: 12px; color: #14532d; line-height: 1.5;">
          <div><strong>Estándares Florida:</strong> ${(tg.floridaStandards || []).join(', ')}</div>
          <div><strong>Criterio de Evaluación:</strong> Rúbrica Chanak 40/30/30 (80% mínimo requerido)</div>
          ${(() => {
            const notes = mentorNotes(modId, currentSession.number);
            return `
              ${notes.commonError ? `<div><strong>⚠️ Error Común Docente:</strong> ${notes.commonError}</div>` : ''}
              ${notes.checkpoint ? `<div><strong>🎯 Checkpoint:</strong> ${notes.checkpoint}</div>` : ''}
            `;
          })()}
        </div>
      </div>
    ` : ''}

    <!-- Horizontal Session Tabs -->
    <div class="session-tabs" style="display: flex; gap: 6px; overflow-x: auto; margin-bottom: 16px; padding-bottom: 4px;">
      ${sessions.map(s => {
        const isDone = localStorage.getItem(`chanak_done_${modId}_s${s.number}`) === 'done';
        const isActive = s.number === currentSession.number;
        return `
          <button class="btn-interactive ${isActive ? 'active' : ''}" style="padding: 6px 12px; font-size: 12px; ${isActive ? 'background: var(--navy); color: #fff;' : ''}" onclick="selectModuleSession(${s.number})">
            S${s.number} ${isDone ? '✓' : ''}
          </button>
        `;
      }).join('')}
    </div>

    <!-- Current Session Content Card -->
    <div style="background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 20px; margin-bottom: 20px;">
      <div style="font-size: 11px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">
        ${isEs ? 'Sesión' : 'Session'} ${currentSession.number} ${isEs ? 'de' : 'of'} ${sessions.length} · 60 min
      </div>
      <h4 style="font-size: 19px; color: var(--navy); margin-bottom: 12px; font-family: var(--font-display);">
        ${currentSession.title}
      </h4>

      ${currentSession.objective ? `
        <div style="background: #fff; border: 1px solid var(--line); border-radius: 8px; padding: 12px 14px; margin-bottom: 12px;">
          <b style="font-size: 12px; color: var(--green); text-transform: uppercase; display: block; margin-bottom: 2px;">🎯 ${isEs ? 'Objetivo de la Sesión' : 'Session Objective'}:</b>
          <p style="font-size: 13px; color: var(--ink); margin: 0;">${currentSession.objective}</p>
        </div>
      ` : ''}

      ${currentSession.keyActivity ? `
        <div style="background: #fff; border: 1px solid var(--line); border-radius: 8px; padding: 12px 14px; margin-bottom: 12px;">
          <b style="font-size: 12px; color: var(--navy); text-transform: uppercase; display: block; margin-bottom: 2px;">⚡ ${isEs ? 'Actividad Clave' : 'Key Activity'}:</b>
          <p style="font-size: 13px; color: var(--ink); margin: 0;">${currentSession.keyActivity}</p>
        </div>
      ` : ''}

      <!-- Cuaderno Reflexivo del Estudiante -->
      <div style="margin-top: 16px;">
        <b style="font-size: 12px; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">
          ✍️ Cuaderno de Vida · Reflexión del Estudiante:
        </b>
        <textarea id="nb_input_${modId}_s${currentSession.number}_p1" style="width: 100%; height: 80px; padding: 10px; border: 1px solid var(--line); border-radius: 8px; font-family: inherit; font-size: 13px; box-sizing: border-box;" placeholder="Escribe tus respuestas y reflexiones aquí...">${localStorage.getItem(`chanak_nb_${modId}_s${currentSession.number}_p1`) || ''}</textarea>
        <div style="display: flex; gap: 8px; margin-top: 8px;">
          <button class="btn-interactive" style="font-size: 12px;" onclick="saveNotebookResponse('${modId}', ${currentSession.number}, 1)">
            💾 Guardar Reflexión (+10 🪙)
          </button>
          <button class="btn-primary" style="font-size: 12px; margin-left: auto;" onclick="completeModuleSession('${modId}', ${currentSession.number})">
            ✓ Completar Sesión ${currentSession.number} →
          </button>
        </div>
      </div>
    </div>
  `;
}

// ---------------- Helper Wallet & Rewards ----------------
function updateHeaderWallet() {
  const el = document.getElementById('header-coin-count');
  const mEl = document.getElementById('modal-coin-count');
  if (el) el.textContent = state.coins;
  if (mEl) mEl.textContent = state.coins;

  const trustLvl = document.getElementById('trust-badge');
  const mTrustLvl = document.getElementById('modal-trust-level');
  const mTrustBar = document.getElementById('modal-trust-bar');

  let title = '🌱 Sembrador';
  let pct = Math.min(100, Math.round((state.coins / 100) * 100));

  if (state.coins >= 500) title = '👑 Mayordomo Fiel';
  else if (state.coins >= 250) title = '🛡️ Líder Servidor';
  else if (state.coins >= 100) title = '🔨 Constructor';

  if (trustLvl) trustLvl.textContent = title;
  if (mTrustLvl) mTrustLvl.textContent = title;
  if (mTrustBar) mTrustBar.style.width = `${pct}%`;
}

function addCoins(amount) {
  state.coins += amount;
  localStorage.setItem('chanak_coins', state.coins.toString());
  updateHeaderWallet();
}

function showCoinToast(msg) {
  const toast = document.getElementById('coin-toast');
  const toastMsg = document.getElementById('coin-toast-msg');
  if (toast && toastMsg) {
    toastMsg.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
}

// Montos canónicos. Esta tabla es un ESPEJO de la que aplica la RPC del SIS,
// usada solo para el número que se muestra en pantalla. La cifra que se
// contabiliza de verdad es siempre la que devuelve el servidor.
const COIN_AMOUNTS = {
  session_reflection: 10,
  session_complete: 10,
  notebook_save: 10,
  capsule_complete: 10,
  module_complete: 25,
  reto_submitted: 25,
  quarterly_project: 50,
  riasec_test: 50,
};

async function awardCoins(event, label = '', reasonText = '') {
  const optimistic = COIN_AMOUNTS[event];
  if (optimistic === undefined) {
    console.warn('Evento de ChanakCoins desconocido:', event);
    return;
  }

  // Sin sesión del SIS (modo demo) las monedas son locales y no se contabilizan.
  if (!state.token) {
    addCoins(optimistic);
    showCoinToast(`+${optimistic} ChanakCoins · ${reasonText || label}`);
    return;
  }

  try {
    // El cliente solo declara QUÉ ocurrió. El servidor verifica la firma del
    // token, decide el monto y resuelve la idempotencia.
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/award_life_skills_coins`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      },
      body: JSON.stringify({ p_token: state.token, p_event: event, p_ref: label })
    });
    const data = await res.json();

    if (!data || data.success !== true) {
      showCoinToast('⚠️ No se pudo registrar tus ChanakCoins. Habla con tu mentora.');
      return;
    }

    if (data.duplicate) {
      showCoinToast('✓ Ya registrado anteriormente — sin monedas duplicadas');
      return;
    }

    addCoins(data.amount);
    showCoinToast(`+${data.amount} ChanakCoins · ${reasonText || label}`);

    if (window.parent && window.parent !== window) {
      window.parent.postMessage({
        type: 'CHANAK_COINS_AWARDED',
        amount: data.amount,
        event,
        timestamp: new Date().toISOString()
      }, '*');
    }
  } catch (err) {
    showCoinToast('⚠️ Sin conexión con el SIS — tus ChanakCoins no se registraron.');
  }
}

function openWalletModal() {
  const modal = document.getElementById('wallet-modal');
  if (modal) modal.classList.add('open');
}

function closeWalletModal() {
  const modal = document.getElementById('wallet-modal');
  if (modal) modal.classList.remove('open');
}

function openMissionModal(id) {
  const m = juniorMissions().find((x) => x.id === id); if (!m) return;
  const isEs = state.lang !== 'en';
  const t = document.getElementById('sub-modal-title'); const d = document.getElementById('sub-modal-desc');
  if (t) t.textContent = `${m.icon} ${m.title}`;
  if (d) d.textContent = m.deliverable ? `${isEs ? 'Entregable' : 'Deliverable'}: ${m.deliverable}` : (m.desc || '');
  openSubmissionModal(id, m.coins);
}
function openSubmissionModal(retoId, reward = COIN_AMOUNTS.reto_submitted) {
  state.activeSubmittingReto = retoId;
  const modal = document.getElementById('submission-modal');
  const rewardEl = document.getElementById('sub-modal-reward');
  if (rewardEl) rewardEl.textContent = reward;
  if (modal) modal.classList.add('open');
}

function closeSubmissionModal() {
  const modal = document.getElementById('submission-modal');
  if (modal) modal.classList.remove('open');
}

function confirmSubmission() {
  if (state.activeSubmittingReto) {
    const id = state.activeSubmittingReto;
    const firstTime = !isMissionDone(id);
    awardCoins('reto_submitted', `sub:${id}`, `Reto Enviado (${id})`);
    try { localStorage.setItem(`chanak_jreto_${id}`, 'done'); } catch (e) { /* sin almacenamiento */ }
    closeSubmissionModal();
    if (firstTime && state.viewMode === 'juniors') { celebrate(); renderCurrentView(); }
  }
}

// ============================================================================
// 6. VISTA: CATÁLOGO JUNIOR (8–13 AÑOS · 80 RETOS)
// ============================================================================
function filterJuniors(cat) {
  state.juniorsFilter = cat;
  renderCurrentView();
}


// ============================================================================
// CARÁCTER: semana de la Agenda Devocional, radar de 4 clústeres y paso de restauración
// ============================================================================
function L(es, en) { return state.lang === 'en' ? en : es; }
function escHtml(v) { return String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

// Datos de demostración (sin sesión del SIS o sin conexión): 65 monedas repartidas entre los 4 clústeres.
function demoCharacterSummary() {
  return { success: true, demo: true, totals: { 1: 20, 2: 15, 3: 10, 4: 20 }, pending_restorations: [], good_standing: true };
}

// Lee el resumen con el token firmado del SIS (la clave anónima no puede leer tablas; el RPC verifica el token).
async function fetchCharacterSummary() {
  if (!state.token) return demoCharacterSummary();
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_life_skills_character_summary`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
      body: JSON.stringify({ p_token: state.token, p_school_year: state.schoolYear || null }),
    });
    const data = await res.json();
    if (!res.ok || !data || data.success !== true) throw new Error((data && data.error) || `HTTP ${res.status}`);
    return data;
  } catch (e) {
    console.warn('Resumen de carácter no disponible, modo demostración:', e);
    return { ...demoCharacterSummary(), fallback: true };
  }
}

function renderWeekCard() {
  const w = getCurrentAgendaWeek();
  const en = state.lang === 'en';
  const cl = CHARACTER_CLUSTERS[w.cluster];
  return `<section class="char-card" aria-label="${escHtml(L('Rasgo semanal', 'Weekly Trait'))}">
    <p class="char-today">${escHtml(new Intl.DateTimeFormat(en ? 'en-US' : 'es-ES', { timeZone: FLORIDA_TZ, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date()))} · ${escHtml(L('hora de Florida', 'Florida time'))}</p>
    <p class="char-eyebrow">${escHtml(L('Semana', 'Week'))} ${w.week} / ${AGENDA_2026_2027.length} · ${escHtml(w.startDate.split('-').reverse().slice(0, 2).join('/'))} – ${escHtml(w.endDate.split('-').reverse().slice(0, 2).join('/'))}</p>
    <h3 class="char-trait">🧭 ${escHtml(en ? w.traitEn : w.trait)}</h3>
    <p class="char-def">${escHtml(en ? w.definicionEn : w.definicion)}</p>
    <p class="char-passage">📖 <b>${escHtml(L('Pasaje bíblico del mes', 'Monthly Scripture Passage'))}:</b> ${escHtml(en ? w.passageEn : w.passage)} · <em>${escHtml(en ? w.monthlyThemeEn : w.monthlyTheme)}</em></p>
    <p class="char-verse">${escHtml(L('Versículos de apoyo', 'Supporting verses'))}: ${escHtml(en ? w.versiculoEn : w.versiculo)}</p>
    <p class="char-cluster">${escHtml(L('Clúster de carácter', 'Character cluster'))}: <strong>${escHtml(cl[state.lang === 'en' ? 'en' : 'es'])}</strong></p>
    <a class="btn-interactive char-link" href="https://portal.chanakacademy.org/" target="_blank" rel="noopener noreferrer">${escHtml(L('Leer Devocional en Portal Chanak ↗', 'Read Devotional on Portal Chanak ↗'))}</a>
  </section>`;
}

// Radar SVG puro: 4 ejes (arriba, derecha, abajo, izquierda) con los totales de cada clúster.
function renderCharacterRadar(totals) {
  const keys = [1, 2, 3, 4];
  const vals = keys.map((k) => Math.max(0, Number(totals?.[k]) || 0));
  const max = Math.max(20, ...vals);
  const cx = 100, cy = 100, R = 62;
  const ang = [-90, 0, 90, 180].map((d) => (d * Math.PI) / 180);
  const pt = (i, f) => [cx + R * f * Math.cos(ang[i]), cy + R * f * Math.sin(ang[i])];
  const ring = (f) => keys.map((_, i) => pt(i, f).map((n) => n.toFixed(1)).join(',')).join(' ');
  const poly = vals.map((v, i) => pt(i, v / max).map((n) => n.toFixed(1)).join(',')).join(' ');
  const lab = [[100, 14, 'middle'], [188, 104, 'end'], [100, 196, 'middle'], [12, 104, 'start']];
  const short = { 1: L('Mayordomía', 'Stewardship'), 2: L('Rigor y Verdad', 'Rigor & Truth'), 3: L('Relaciones y Servicio', 'Relationships & Service'), 4: L('Liderazgo', 'Leadership') };
  const total = vals.reduce((a, b) => a + b, 0);
  return `<section class="char-card" aria-label="${escHtml(L('Radar de equilibrio de carácter', 'Character balance radar'))}">
    <h3 class="char-h3">${escHtml(L('Radar de Equilibrio de Carácter', 'Character Balance Radar'))}</h3>
    <div class="char-radar-wrap">
      <svg class="char-radar" viewBox="0 0 200 200" role="img" aria-labelledby="radar-t radar-d">
        <title id="radar-t">${escHtml(L('Radar de Equilibrio de Carácter', 'Character Balance Radar'))}</title>
        <desc id="radar-d">${keys.map((k, i) => `${CHARACTER_CLUSTERS[k][state.lang === 'en' ? 'en' : 'es']}: ${vals[i]}`).join('; ')}</desc>
        ${[0.25, 0.5, 0.75, 1].map((f) => `<polygon points="${ring(f)}" fill="none" stroke="#cbd5e1" stroke-width="0.6"/>`).join('')}
        ${keys.map((_, i) => `<line x1="${cx}" y1="${cy}" x2="${pt(i, 1)[0].toFixed(1)}" y2="${pt(i, 1)[1].toFixed(1)}" stroke="#cbd5e1" stroke-width="0.6"/>`).join('')}
        <polygon points="${poly}" fill="rgba(245,158,11,0.35)" stroke="#d97706" stroke-width="1.6"/>
        ${vals.map((v, i) => `<circle cx="${pt(i, v / max)[0].toFixed(1)}" cy="${pt(i, v / max)[1].toFixed(1)}" r="2.6" fill="#d97706"/>`).join('')}
        ${lab.map(([x, y, a], i) => `<text x="${x}" y="${y}" text-anchor="${a}" font-size="8.5" fill="#0f172a" font-weight="700">${escHtml(short[i + 1])} · ${vals[i]}</text>`).join('')}
      </svg>
      <ul class="char-radar-list">${keys.map((k, i) => `<li><span class="dot c${k}"></span>${escHtml(CHARACTER_CLUSTERS[k][state.lang === 'en' ? 'en' : 'es'])} <strong>${vals[i]}</strong> 🪙</li>`).join('')}
        <li class="char-total">${escHtml(L('Total', 'Total'))}: <strong>${total}</strong> 🪙</li></ul>
    </div>
  </section>`;
}

function renderRestorationCard(summary) {
  const pend = summary?.pending_restorations || [];
  if (!pend.length) {
    return `<section class="char-card char-good" aria-live="polite"><p>✅ <strong>${escHtml(L('Buen Testimonio', 'Good Standing'))}</strong> — ${escHtml(L('tu mayordomía va en orden. ¡Sigue así!', 'your stewardship is in order. Keep it up!'))}</p></section>`;
  }
  return `<section class="char-card char-restore" role="alert">
    <h3 class="char-h3">🤝 ${escHtml(L('Paso de Restauración', 'Stewardship Restoration Step'))}</h3>
    <p>${escHtml(L('Tu cuenta está en proceso de restitución hasta que tu mentor valide tu evidencia. No es un castigo: es una oportunidad de reparar y servir.', 'Your account is in a restoration process until your mentor validates your evidence. This is not a punishment: it is a chance to repair and serve.'))}</p>
    <ul>${pend.map((r) => `<li>${escHtml(r.task)}</li>`).join('')}</ul>
  </section>`;
}

// ============================================================================
// CARÁCTER INTERACTIVO: semana elegible, devocional, aplicar, orar, memorizar, conversar en familia y ficha bíblica del mes
// ============================================================================
function cStore(key, fallback) { try { const v = localStorage.getItem(`chanak_c_${key}`); return v === null ? fallback : JSON.parse(v); } catch (e) { return fallback; } }
function cSave(key, val) { try { localStorage.setItem(`chanak_c_${key}`, JSON.stringify(val)); } catch (e) { /* sin almacenamiento */ } }
function charState() {
  if (!state.char) state.char = { week: getCurrentAgendaWeek().week, tab: 'devocional', ficha: false, cluster: null, day: null };
  return state.char;
}
const TAB_DEFS = [
  { id: 'devocional', icon: '📖', es: 'Devocional', en: 'Devotional' }, { id: 'aplicar', icon: '🎯', es: 'Aplícalo', en: 'Apply it' },
  { id: 'orar', icon: '🙏', es: 'Orar', en: 'Pray' }, { id: 'memorizar', icon: '🧠', es: 'Memorizar', en: 'Memorize' }, { id: 'familia', icon: '👨‍👩‍👧', es: 'En familia', en: 'Family talk' },
];
const bibleUrl = (ref) => `https://www.biblegateway.com/passage/?search=${encodeURIComponent(ref)}&version=${state.lang === 'en' ? 'NIV' : 'RVR1960'}`;
const dev = (n) => (DEVOTIONAL_WEEKS[n] || {})[state.lang === 'en' ? 'en' : 'es'] || {};
const ficha = (monthEs) => (DEVOTIONAL_MONTHS[monthEs] || {})[state.lang === 'en' ? 'en' : 'es'] || null;
const weekDone = (n) => cStore(`w${n}_note`, '').trim().length >= 15;

function renderWeekStrip() {
  const cur = getCurrentAgendaWeek().week; const sel = charState().week; const en = state.lang === 'en';
  return `<nav class="cv-strip" aria-label="${escHtml(L('Semanas del curso', 'School-year weeks'))}">
    <button class="cv-arrow" onclick="charSelectWeek(${Math.max(1, sel - 1)})" aria-label="${escHtml(L('Semana anterior', 'Previous week'))}">‹</button>
    <div class="cv-chips" id="cv-chips">${AGENDA_2026_2027.map((w) => `<button class="cv-chip c${w.cluster} ${w.week === sel ? 'is-sel' : ''} ${w.week === cur ? 'is-now' : ''} ${weekDone(w.week) ? 'is-done' : ''}" onclick="charSelectWeek(${w.week})" title="${escHtml(en ? w.traitEn : w.trait)}">
      <b>${w.week}</b><span>${escHtml(en ? w.traitEn : w.trait)}</span>${weekDone(w.week) ? '<i>✓</i>' : ''}</button>`).join('')}</div>
    <button class="cv-arrow" onclick="charSelectWeek(${Math.min(42, sel + 1)})" aria-label="${escHtml(L('Semana siguiente', 'Next week'))}">›</button>
  </nav>`;
}

// ---- Devocional diario (lunes a viernes) ----
const DAY_KEYS = ['mon', 'tue', 'wed', 'thu', 'fri'];
function floridaWeekdayIdx() { // 0 = lunes … 4 = viernes; null = fin de semana (hora de Florida)
  const d = new Intl.DateTimeFormat('en-US', { timeZone: FLORIDA_TZ, weekday: 'short' }).format(new Date());
  const i = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].indexOf(d); return i < 0 ? null : i;
}
function selectedDay(week) {
  const c = charState();
  if (c.day !== null && c.day !== undefined) return c.day;
  const today = floridaWeekdayIdx();
  return week === getCurrentAgendaWeek().week && today !== null ? today : 0;
}
function renderDailyCapsule(w) {
  const en = state.lang === 'en'; const dd = DAILY_DEVOTIONALS[w.week]; if (!dd) return '';
  const idx = selectedDay(w.week); const key = DAY_KEYS[idx]; const item = dd[key]; if (!item) return '';
  const t = item[en ? 'en' : 'es']; const read = cStore(`w${w.week}_read`, [false, false, false, false, false]);
  const todayIdx = floridaWeekdayIdx(); const isCur = w.week === getCurrentAgendaWeek().week;
  const dayName = en ? ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] : ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  const short = en ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] : ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'];
  const d = dev(w.week);
  const kind = item.type === 'passage_portion' ? `📖 ${L('Porción de la semana', 'This week’s portion')}: ${d.portion || ''}`
    : item.type === 'month_passage' ? `📜 ${L('Pasaje del mes', 'Passage of the month')}: ${(ficha(w.month) || {}).passage || ''}`
    : `💡 ${L('Reflexión de carácter', 'Character reflection')}: ${CHARACTER_CLUSTERS[item.cluster][en ? 'en' : 'es']}`;
  const readN = read.filter(Boolean).length;
  const pill = (i) => `<button class="cv-dpill c${(dd[DAY_KEYS[i]] || {}).cluster || w.cluster} ${i === idx ? 'is-sel' : ''} ${read[i] ? 'is-read' : ''} ${isCur && i === todayIdx ? 'is-today' : ''}" onclick="charDay(${i})" aria-pressed="${i === idx}">${short[i]}${read[i] ? ' ✓' : ''}</button>`;
  return `<article class="cv-daily" aria-label="${escHtml(L('Devocional del día', 'Daily devotional'))}">
    <div class="cv-daily__top"><span class="cv-daily__tag">☀️ ${escHtml(L('Para empezar el día', 'To start the day'))}</span><div class="cv-dpills">${[0, 1, 2, 3, 4].map(pill).join('')}</div></div>
    <p class="cv-daily__kind">${escHtml(dayName[idx])} · ${escHtml(kind)}</p>
    <h4 class="cv-daily__title">${escHtml(t.title)}</h4>
    <p class="cv-text">${escHtml(t.text)}</p>
    <p class="cv-daily__practice">🎯 <b>${escHtml(L('Práctica de hoy', 'Today’s practice'))}:</b> ${escHtml(t.practice)}</p>
    <div class="cv-daily__foot"><button class="cv-readbtn ${read[idx] ? 'on' : ''}" onclick="charRead(${w.week},${idx})" aria-pressed="${!!read[idx]}">${read[idx] ? '✅ ' + escHtml(L('¡Leído!', 'Read!')) : '☐ ' + escHtml(L('Marcar como leído', 'Mark as read'))}</button>
      <span class="cv-sub">${escHtml(L(`${readN} de 5 días`, `${readN} of 5 days`))}${readN === 5 ? ' 🎉' : ''}</span></div>
  </article>`;
}
function charDay(i) { charState().day = i; charRerender(); }
function charRead(week, i) { const k = `w${week}_read`; const a = cStore(k, [false, false, false, false, false]); a[i] = !a[i]; cSave(k, a); charRerender(); if (a.filter(Boolean).length === 5) celebrate(); }
window.charDay = charDay; window.charRead = charRead;

function renderWeekHero() {
  const c = charState(); const w = AGENDA_2026_2027.find((x) => x.week === c.week) || getCurrentAgendaWeek(); const en = state.lang === 'en';
  const d = dev(w.week); const cl = CHARACTER_CLUSTERS[w.cluster]; const isNow = w.week === getCurrentAgendaWeek().week;
  const days = cStore(`w${w.week}_days`, [false, false, false, false, false]); const mem = cStore(`w${w.week}_mem`, [false, false, false, false, false]);
  const dayN = (en ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] : ['Lun', 'Mar', 'Mié', 'Jue', 'Vie']);
  const portion = d.portion || '';
  let body = '';
  if (c.tab === 'devocional') {
    body = `${renderDailyCapsule(w)}<h5 class="cv-h5">${escHtml(L('Mini devocional de la semana', 'Weekly mini devotional'))}</h5><p class="cv-text">${escHtml(d.devotional || '')}</p>
      <p class="cv-read">📖 ${escHtml(L('Lectura de la semana', 'This week’s reading'))}: <b>${escHtml(portion)}</b>
        <a class="cv-link" href="${bibleUrl(portion)}" target="_blank" rel="noopener noreferrer">${escHtml(L('Leer en la Biblia ↗', 'Read in the Bible ↗'))}</a></p>
      <p class="cv-verse">✨ ${escHtml(L('Versículos de apoyo', 'Supporting verses'))}: ${(d.support || '').split(/;\s*/).filter(Boolean).map((v) => `<a class="cv-link" href="${bibleUrl(v)}" target="_blank" rel="noopener noreferrer">${escHtml(v)}</a>`).join(' · ')}</p>`;
  } else if (c.tab === 'aplicar') {
    const done = days.filter(Boolean).length; const note = cStore(`w${w.week}_note`, '');
    body = `<p class="cv-text"><b>${escHtml(L('Reto de la semana', 'This week’s challenge'))}:</b> ${escHtml(d.application || '')}</p>
      <p class="cv-sub">${escHtml(L('Marca cada día que lo practiques:', 'Check each day you practice it:'))}</p>
      <div class="cv-days">${days.map((on, i) => `<button class="cv-day ${on ? 'on' : ''}" onclick="charToggle(${w.week},'days',${i})" aria-pressed="${on}"><span>${on ? '✅' : '⬜'}</span>${dayN[i]}</button>`).join('')}</div>
      <div class="cv-bar" role="progressbar" aria-valuenow="${done * 20}" aria-valuemin="0" aria-valuemax="100"><i style="width:${done * 20}%"></i></div>
      <p class="cv-sub">${done === 5 ? '🎉 ' + escHtml(L('¡Semana completa! Eres constante.', 'Full week! You are consistent.')) : escHtml(L(`${done} de 5 días`, `${done} of 5 days`))}</p>
      <label class="cv-sub" for="cv-note">${escHtml(L('¿Cómo lo apliqué? ¿Qué pasó, qué hice y cómo resultó?', 'How did I apply it? What happened, what did I do, and how did it turn out?'))}</label>
      <textarea id="cv-note" class="cv-ta" rows="3" maxlength="800" placeholder="${escHtml(L('Escríbelo con tus palabras…', 'Write it in your own words…'))}">${escHtml(note)}</textarea>
      <button class="btn-primary cv-save" onclick="charSaveNote(${w.week})">💾 ${escHtml(L('Guardar y ganar monedas', 'Save & earn coins'))}</button>`;
  } else if (c.tab === 'orar') {
    const amen = cStore(`w${w.week}_amen`, 0);
    body = `<blockquote class="cv-prayer">${escHtml(d.prayer || '')}</blockquote>
      <button class="btn-primary cv-save" onclick="charAmen(${w.week})">🙏 ${escHtml(L('Amén', 'Amen'))}${amen ? ` · ${amen}` : ''}</button>
      <p class="cv-sub">${escHtml(L('Léela en voz alta con tu familia al empezar el día.', 'Read it out loud with your family to start the day.'))}</p>`;
  } else if (c.tab === 'memorizar') {
    const steps = [L('Leer la porción', 'Read the portion'), L('Repetirla en voz alta', 'Say it out loud'), L('Copiarla a mano', 'Copy it by hand'), L('Explicarla con mis palabras', 'Explain it in my own words'), L('Recitarla a mi familia', 'Recite it to my family')];
    const m = mem.filter(Boolean).length;
    body = `<p class="cv-read">🧠 ${escHtml(L('Porción para memorizar', 'Portion to memorize'))}: <b>${escHtml(portion)}</b>
        <a class="cv-link" href="${bibleUrl(portion)}" target="_blank" rel="noopener noreferrer">${escHtml(L('Abrir ↗', 'Open ↗'))}</a></p>
      <ol class="cv-steps">${steps.map((t, i) => `<li><button class="cv-step ${mem[i] ? 'on' : ''}" onclick="charToggle(${w.week},'mem',${i})" aria-pressed="${!!mem[i]}">${mem[i] ? '✅' : '⬜'} <span>${dayN[i]} · ${escHtml(t)}</span></button></li>`).join('')}</ol>
      <div class="cv-bar"><i style="width:${m * 20}%"></i></div><p class="cv-sub">${m === 5 ? '🏆 ' + escHtml(L('¡Porción memorizada!', 'Portion memorized!')) : escHtml(L(`${m} de 5 pasos`, `${m} of 5 steps`))}</p>`;
  } else {
    const qs = (d.questions && d.questions.length) ? d.questions : (ficha(w.month)?.questions || []);
    body = `<p class="cv-sub">${escHtml(L('Conversen en familia y anoten ideas:', 'Talk as a family and jot down ideas:'))}</p>` + qs.map((q, i) => `<div class="cv-q"><label for="cv-q${i}">${escHtml(q)}</label>
      <textarea id="cv-q${i}" class="cv-ta" rows="2" maxlength="500" onchange="charSaveQ(${w.week},${i},this.value)">${escHtml(cStore(`w${w.week}_q${i}`, ''))}</textarea></div>`).join('');
  }
  return `<section class="char-card cv-hero c${w.cluster}" aria-live="polite">
    <p class="char-today">${escHtml(new Intl.DateTimeFormat(en ? 'en-US' : 'es-ES', { timeZone: FLORIDA_TZ, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date()))} · ${escHtml(L('hora de Florida', 'Florida time'))}</p>
    <p class="char-eyebrow">${escHtml(L('Semana', 'Week'))} ${w.week} / 42 · ${escHtml(w.startDate.split('-').reverse().slice(0, 2).join('/'))} – ${escHtml(w.endDate.split('-').reverse().slice(0, 2).join('/'))}${isNow ? ` · <span class="cv-now">${escHtml(L('ESTA SEMANA', 'THIS WEEK'))}</span>` : ''}</p>
    <h3 class="char-trait">🧭 ${escHtml(en ? w.traitEn : w.trait)}</h3>
    <p class="char-def">${escHtml(d.definition || (en ? w.definicionEn : w.definicion))}</p>
    <p class="char-cluster">${escHtml(L('Clúster de carácter', 'Character cluster'))}: <button class="cv-cl" onclick="charShowCluster(${w.cluster})">${escHtml(cl[en ? 'en' : 'es'])} ↗</button></p>
    <div class="cv-tabs" role="tablist">${TAB_DEFS.map((t) => `<button role="tab" class="cv-tab ${c.tab === t.id ? 'is-active' : ''}" aria-selected="${c.tab === t.id}" onclick="charTab('${t.id}')"><span>${t.icon}</span> ${escHtml(t[en ? 'en' : 'es'])}</button>`).join('')}</div>
    <div class="cv-panel">${body}</div>
    <a class="btn-interactive char-link" href="https://portal.chanakacademy.org/" target="_blank" rel="noopener noreferrer">${escHtml(L('Leer Devocional en Portal Chanak ↗', 'Read Devotional on Portal Chanak ↗'))}</a>
  </section>`;
}

function renderFichaBiblica() {
  const w = AGENDA_2026_2027.find((x) => x.week === charState().week) || getCurrentAgendaWeek(); const f = ficha(w.month); const en = state.lang === 'en';
  if (!f) return '';
  const open = charState().ficha;
  const row = (label, v) => (v ? `<div class="cv-frow"><dt>${escHtml(label)}</dt><dd>${escHtml(v)}</dd></div>` : '');
  return `<section class="char-card cv-ficha">
    <button class="cv-ficha__head" onclick="charToggleFicha()" aria-expanded="${open}">
      <span>📜 <b>${escHtml(L('Ficha bíblica del mes', 'Monthly Scripture Passage Card'))}: ${escHtml(en ? w.monthEn : w.month)}</b><em>${escHtml(f.passage)} · ${escHtml(f.theme)}</em></span><span class="cv-caret">${open ? '▾' : '▸'}</span></button>
    ${open ? `<div class="cv-ficha__body"><p class="cv-text">${escHtml(f.focus)}</p>
      <dl class="cv-fdl">${row(L('Libro bíblico', 'Book'), f.book)}${row(L('Autor / atribución', 'Author / attribution'), f.author)}${row(L('Tipo de literatura', 'Type of literature'), f.genre)}${row(L('Personajes principales', 'Main characters'), f.characters)}${row(L('Adaptación para menores de 10 años', 'Adaptation for children under 10'), f.under10)}</dl>
      <p class="cv-sub">${escHtml(L('Palabras clave', 'Key words'))}</p><div class="cv-kw">${(f.keywords || []).map((k) => `<span>${escHtml(k)}</span>`).join('')}</div>
      <h4 class="cv-h4">${escHtml(L('Contexto', 'Context'))}</h4><p class="cv-text">${escHtml(f.context)}</p>
      <h4 class="cv-h4">${escHtml(L('¿Qué revela sobre Dios?', 'What does it reveal about God?'))}</h4><p class="cv-text">${escHtml(f.reveals)}</p>
      <h4 class="cv-h4">${escHtml(L('Aplicación familiar', 'Family application'))}</h4><p class="cv-text">${escHtml(f.application)}</p>
      <h4 class="cv-h4">${escHtml(L('Preguntas para dialogar', 'Questions to talk about'))}</h4><ul class="cv-ul">${(f.questions || []).map((q) => `<li>${escHtml(q)}</li>`).join('')}</ul>
      <a class="cv-link" href="${bibleUrl(f.passage)}" target="_blank" rel="noopener noreferrer">${escHtml(L('Leer el pasaje completo ↗', 'Read the full passage ↗'))}</a></div>` : ''}
  </section>`;
}

function renderClusterPanel() {
  const n = charState().cluster; if (!n) return '';
  const en = state.lang === 'en'; const ws = AGENDA_2026_2027.filter((w) => w.cluster === n);
  return `<section class="char-card cv-clpanel c${n}"><div class="cv-clpanel__head"><h3 class="char-h3">${escHtml(CHARACTER_CLUSTERS[n][en ? 'en' : 'es'])}</h3><button class="cv-x" onclick="charShowCluster(null)" aria-label="${escHtml(L('Cerrar', 'Close'))}">✕</button></div>
    <p class="cv-sub">${escHtml(L('Rasgos que fortalecen este clúster (toca uno para verlo):', 'Traits that strengthen this cluster (tap one to open it):'))}</p>
    <div class="cv-kw">${ws.map((w) => `<button class="cv-pill ${weekDone(w.week) ? 'on' : ''}" onclick="charSelectWeek(${w.week})">${weekDone(w.week) ? '✓ ' : ''}${w.week} · ${escHtml(en ? w.traitEn : w.trait)}</button>`).join('')}</div></section>`;
}

function charRerender() { const c = document.getElementById('stage-content-area'); if (c && state.viewMode === 'caracter') renderCharacterView(c, true); }
function charSelectWeek(n) { const c = charState(); c.week = Math.max(1, Math.min(42, n)); c.tab = 'devocional'; c.day = null; charRerender(); setTimeout(() => { const el = document.querySelector('.cv-chip.is-sel'); if (el && el.scrollIntoView) el.scrollIntoView({ inline: 'center', block: 'nearest' }); }, 30); }
function charTab(t) { charState().tab = t; charRerender(); }
function charToggleFicha() { const c = charState(); c.ficha = !c.ficha; charRerender(); }
function charShowCluster(n) { charState().cluster = n; charRerender(); if (n) setTimeout(() => { const el = document.querySelector('.cv-clpanel'); if (el && el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 30); }
function charToggle(week, kind, i) { const key = `w${week}_${kind}`; const arr = cStore(key, [false, false, false, false, false]); arr[i] = !arr[i]; cSave(key, arr); charRerender(); if (arr.filter(Boolean).length === 5) celebrate(); }
function charAmen(week) { cSave(`w${week}_amen`, cStore(`w${week}_amen`, 0) + 1); charRerender(); }
function charSaveQ(week, i, v) { cSave(`w${week}_q${i}`, String(v).slice(0, 500)); }
function charSaveNote(week) {
  const el = document.getElementById('cv-note'); const txt = el ? el.value.trim() : '';
  if (txt.length < 15) { showCoinToast(L('Cuéntalo con un poco más de detalle (mínimo una frase).', 'Tell it with a bit more detail (at least one sentence).')); return; }
  cSave(`w${week}_note`, txt.slice(0, 800));
  const w = AGENDA_2026_2027.find((x) => x.week === week);
  awardCoins('notebook_save', `trait:w${week}`, `${L('Rasgo', 'Trait')}: ${w ? (state.lang === 'en' ? w.traitEn : w.trait) : week}`);
  charRerender();
}
window.charSelectWeek = charSelectWeek; window.charTab = charTab; window.charToggleFicha = charToggleFicha; window.charShowCluster = charShowCluster;
window.charToggle = charToggle; window.charAmen = charAmen; window.charSaveQ = charSaveQ; window.charSaveNote = charSaveNote;

async function renderCharacterView(container, cached = false) {
  if (!cached) container.innerHTML = `<div class="char-view"><p class="char-loading">${escHtml(L('Cargando carácter…', 'Loading character…'))}</p></div>`;
  const summary = cached && state.characterSummary ? state.characterSummary : await fetchCharacterSummary();
  state.characterSummary = summary;
  if (state.viewMode !== 'caracter') return; // el estudiante cambió de pestaña mientras cargaba
  const demo = summary.demo ? `<p class="char-demo">${escHtml(summary.fallback ? L('DEMO · no se pudo leer tu resumen; se muestran datos de ejemplo.', 'DEMO · your summary could not be read; sample data is shown.') : L('DEMO · datos de ejemplo (abre Life Skills desde tu panel del SIS para ver los tuyos).', 'DEMO · sample data (open Life Skills from your SIS dashboard to see yours).'))}</p>` : '';
  const keep = cached ? { x: window.scrollX, y: window.scrollY } : null;
  container.innerHTML = `<div class="char-view">
    ${demo}
    ${renderRestorationCard(summary)}
    ${renderWeekStrip()}
    ${renderWeekHero()}
    ${renderFichaBiblica()}
    ${renderCharacterRadar(summary.totals)}
    ${renderClusterPanel()}
    <div class="char-actions no-print">
      <button type="button" class="btn-interactive" onclick="printCharacterSheet()">🖨️ ${escHtml(L('Imprimir ficha de reto / reporte familiar', 'Print Challenge Slip / Family Report'))}</button>
    </div>
  </div>`;
  if (keep) window.scrollTo(keep.x, keep.y);
  const sel = container.querySelector('.cv-chip.is-sel'); const strip = container.querySelector('#cv-chips');
  if (sel && strip) strip.scrollLeft = sel.offsetLeft - strip.clientWidth / 2 + sel.clientWidth / 2;
}

function printCharacterSheet() {
  const w = getCurrentAgendaWeek(); const en = state.lang === 'en'; const T = PRINT_LABELS[en ? 'en' : 'es'];
  const sheet = document.getElementById('print-sheet'); if (!sheet) { window.print(); return; }
  const t = state.characterSummary?.totals || {};
  const stage = new URLSearchParams(window.location.search).get('grade') || state.assignedLevel || '';
  const day = new Date().toLocaleDateString(en ? 'en-US' : 'es-ES', { timeZone: FLORIDA_TZ }) + (en ? ' (Florida)' : ' (hora de Florida)');
  const line = (n) => `<div class="ps-lines">${'<span></span>'.repeat(n)}</div>`;
  sheet.innerHTML = `
    <header class="ps-head"><img src="logo-chanak.png" alt="" width="54" height="54"><div><strong>${escHtml(T.header)}</strong><br><span>${escHtml(T.program)}</span></div></header>
    <h2>${escHtml(T.title)}</h2>
    <table class="ps-table">
      <tr><th>${escHtml(T.student)}</th><td>${escHtml(decodeURIComponent(state.studentName || '') || '')}</td><th>${escHtml(T.year)}</th><td>${escHtml(state.schoolYear || '2026-2027')}</td></tr>
      <tr><th>${escHtml(T.stage)}</th><td>${escHtml(stage)}</td><th>${escHtml(T.date)}</th><td>${escHtml(day)}</td></tr>
      <tr><th>${escHtml(T.week)}</th><td colspan="3">${escHtml(`${en ? 'Week' : 'Semana'} ${w.week}: ${en ? w.traitEn : w.trait} · ${en ? w.passageEn : w.passage}`)}</td></tr>
      <tr><th>${escHtml(T.coins)}</th><td colspan="3">${[1, 2, 3, 4].map((k) => `${escHtml(CHARACTER_CLUSTERS[k][en ? 'en' : 'es'])}: ${t[k] ?? 0}`).join(' · ')}</td></tr>
    </table>
    <h3>${escHtml(T.challenge)}</h3>${line(2)}
    <h3>${escHtml(T.evidence)}</h3>${line(3)}
    <h3>${escHtml(T.notes)}</h3>${line(2)}
    <div class="ps-sign"><div><span></span>${escHtml(T.sigStudent)}</div><div><span></span>${escHtml(T.sigMentor)}</div></div>`;
  document.body.classList.add('printing-sheet');
  window.print();
  setTimeout(() => document.body.classList.remove('printing-sheet'), 500);
}
window.printCharacterSheet = printCharacterSheet;
window.openMissionModal = openMissionModal;
window.setJuniorSkin = setJuniorSkin;
window.cycleJuniorAvatar = cycleJuniorAvatar;

// ---- Juniors: 80 mini proyectos en 10 tracks + retos de carácter, con piel "aventura" (≤ 11 años) o sobria ----

function juniorGradeNumber() {
  const raw = new URLSearchParams(window.location.search).get('grade') || '';
  const txt = String(raw);
  // "1.º ESO / Grade 7" → 7 (se prefiere el número que sigue a "Grade"); si no hay, el primero que aparezca
  const n = parseInt(((txt.match(/grade\s*(\d+)/i) || txt.match(/(\d+)/) || [])[1]), 10);
  return Number.isFinite(n) ? n : null;
}
// Piel: aventura (videojuego) hasta 6.º grado; sobria desde 7.º. Se puede cambiar con el botón o con ?skin=kids|teen.
function juniorSkin() {
  const q = new URLSearchParams(window.location.search).get('skin');
  if (q === 'kids' || q === 'teen') return q;
  let saved = null; try { saved = localStorage.getItem('chanak_junior_skin'); } catch (e) { /* sin almacenamiento */ }
  if (saved === 'kids' || saved === 'teen') return saved;
  return juniorSkinForGrade(juniorGradeNumber() ?? NaN);
}
function setJuniorSkin(v) { try { localStorage.setItem('chanak_junior_skin', v); } catch (e) { /* sin almacenamiento */ } renderCurrentView(); }
function cycleJuniorAvatar() {
  let cur = 0; try { cur = Number(localStorage.getItem('chanak_junior_avatar') || 0); } catch (e) { /* */ }
  try { localStorage.setItem('chanak_junior_avatar', String((cur + 1) % JK_AVATARS.length)); } catch (e) { /* */ }
  renderCurrentView();
}

// Lista unificada: 80 proyectos + los retos de carácter y servicio originales
function juniorMissions() {
  const lang = state.lang === 'en' ? 'en' : 'es';
  const projects = JUNIOR_PROJECTS.map((p) => {
    const t = JUNIOR_TRACKS.find((x) => x.id === p.track);
    return { id: `proj-${String(p.n).padStart(2, '0')}`, n: p.n, track: p.track, icon: t.icon, title: p[lang].title, desc: p[lang].desc, deliverable: p[lang].deliverable, verse: p[lang].verse, ref: p[lang].ref, coins: JK_COINS };
  });
  const retos = JUNIORS_RETOS.map((r) => ({
    id: r.id, n: null, track: 'retos', icon: r.icon || '🏅', title: r.title?.[lang] || r.title?.es || r.id, desc: r.desc?.[lang] || r.desc?.es || '',
    deliverable: '', verse: '', ref: '', coins: r.coins || JK_COINS,
  }));
  return [...projects, ...retos];
}
function isMissionDone(id) { try { return localStorage.getItem(`chanak_jreto_${id}`) === 'done'; } catch (e) { return false; } }

function celebrate(msg) {
  const layer = document.createElement('div'); layer.className = 'jk-confetti'; layer.setAttribute('aria-hidden', 'true');
  const colors = ['#f59e0b', '#22c55e', '#3b82f6', '#ec4899', '#8b5cf6', '#ef4444'];
  for (let i = 0; i < 36; i++) {
    const c = document.createElement('i');
    c.style.left = `${Math.random() * 100}%`; c.style.background = colors[i % colors.length];
    c.style.animationDelay = `${Math.random() * 0.4}s`; c.style.transform = `rotate(${Math.random() * 360}deg)`;
    layer.appendChild(c);
  }
  document.body.appendChild(layer); setTimeout(() => layer.remove(), 2600);
  if (msg) showCoinToast(msg);
}

// ---- Cápsulas por tema (4.º–7.º): misión corta cristiana, pregunta de repaso y entregable a elegir ----
function jrCapTramo() { return tramoForGrade(juniorGradeNumber()) || state.jrCapTramo || '4-5'; }
function jrCapsList() { const en = state.lang === 'en'; const t = jrCapTramo(); return JUNIOR_CAPSULES.filter((c) => c.tramo === t).map((c) => localizeCapsule(c, en)); }
function isJrCapDone(id) { try { return !!localStorage.getItem(`chanak_jcap_${id}`); } catch (e) { return false; } }
function setJrCapTramo(t) { state.jrCapTramo = t; renderCurrentView(); }
function jrCapsuleCard(c, kids) {
  const th = JUNIOR_THEMES.find((x) => x.id === c.theme) || { icon: '💡', es: '', en: '' };
  const ok = isJrCapDone(c.id), en = state.lang === 'en';
  return `<article class="jk-mission ${ok ? 'is-done' : ''} ${kids ? 'jk-kids' : 'jk-teen'}" style="--jk:#7c3aed">
    <header class="jk-mission__top"><span class="jk-mission__icon" aria-hidden="true">${ok ? '⭐' : th.icon}</span>
      <span class="jk-mission__num">${escHtml(en ? th.en : th.es)}</span>
      <span class="jk-mission__coins">${ok ? L('✓ ¡Lograda!', '✓ Done!') : `+25 🪙`}</span></header>
    <h4 class="jk-mission__title">${escHtml(c.title)}</h4>
    <p class="jk-mission__desc">${escHtml(c.hook)}</p>
    <p class="jk-mission__verse">📖 ${escHtml(c.verse)} — ${escHtml(c.idea)}</p>
    <button class="btn-primary jk-mission__cta" onclick="openJrCap('${c.id}')">${ok ? L('Ver mi cápsula →', 'View my capsule →') : (kids ? L('¡Empezar cápsula! 🚀', 'Start the capsule! 🚀') : L('Abrir cápsula', 'Open capsule'))}</button>
  </article>`;
}
function openJrCap(id) {
  const c = jrCapsList().find((x) => x.id === id); if (!c) return;
  state.capDraft = { id, choice: null, answered: null };
  let el = document.getElementById('cap-modal');
  if (!el) { el = document.createElement('div'); el.id = 'cap-modal'; el.className = 'jk-capmodal'; document.body.appendChild(el); }
  paintJrCap(c);
  el.classList.add('open');
}
function paintJrCap(c) {
  const el = document.getElementById('cap-modal'); if (!el) return;
  const d = state.capDraft || {}, done = isJrCapDone(c.id), th = JUNIOR_THEMES.find((x) => x.id === c.theme) || {}, en = state.lang === 'en';
  const saved = (() => { try { return JSON.parse(localStorage.getItem(`chanak_jcap_${c.id}`) || 'null'); } catch (e) { return null; } })();
  const q = c.check, answered = d.answered != null;
  el.innerHTML = `<div class="jk-capmodal__box" role="dialog" aria-modal="true">
    <button class="jk-capmodal__x" onclick="closeJrCap()" aria-label="${L('Cerrar', 'Close')}">✕</button>
    <p class="jk-daily__tag">${th.icon || '💡'} ${escHtml(en ? th.en : th.es)}</p>
    <h3>${escHtml(c.title)}</h3>
    <p class="jk-capmodal__hook">${escHtml(c.hook)}</p>
    <p class="jk-mission__verse">📖 ${escHtml(c.verse)} — ${escHtml(c.idea)}</p>
    <h4>${L('🎯 Tu misión', '🎯 Your mission')}</h4>
    <ol class="jk-capmodal__steps">${c.steps.map((s) => `<li>${escHtml(s)}</li>`).join('')}</ol>
    <h4>${L('🧠 Repaso rápido', '🧠 Quick check')}</h4>
    <p><b>${escHtml(q.question)}</b></p>
    <div class="jk-capmodal__opts">${q.options.map((o, i) => { const cls = answered ? (i === q.answer ? 'ok' : (d.answered === i ? 'bad' : '')) : ''; return `<button class="jk-capopt ${cls}" ${answered || done ? 'disabled' : ''} onclick="jrCapAnswer(${i})">${escHtml(o)}</button>`; }).join('')}</div>
    ${answered ? `<p class="jk-capmodal__why">${d.answered === q.answer ? '🎉 ' : '💡 '}${escHtml(q.why)}</p>` : ''}
    <h4>${L('🎁 Elige tu entregable', '🎁 Choose your deliverable')}</h4>
    <div class="jk-capmodal__opts">${c.deliverables.map((o, i) => { const on = (done && saved && saved.choice === i) || d.choice === i; return `<button class="jk-capopt ${on ? 'on' : ''}" ${done ? 'disabled' : ''} onclick="jrCapChoose(${i})">${on ? '✅ ' : ''}${escHtml(o)}</button>`; }).join('')}</div>
    <p class="jk-capmodal__hint">${L('Tu papá, mamá o mentor sube o aprueba el entregable.', 'Your parent or mentor uploads or approves the deliverable.')}</p>
    <div class="jk-capmodal__foot">${done ? `<span class="jk-capmodal__done">✓ ${L('Cápsula lograda', 'Capsule completed')}</span>` : `<button class="btn-primary" ${answered && d.choice != null ? '' : 'disabled'} onclick="completeJrCap('${c.id}')">${L('¡Completar y ganar 25 🪙!', 'Complete and earn 25 🪙!')}</button>`}</div>
  </div>`;
}
function jrCapAnswer(i) { const c = jrCapsList().find((x) => x.id === state.capDraft?.id); if (!c || state.capDraft.answered != null) return; state.capDraft.answered = i; paintJrCap(c); }
function jrCapChoose(i) { const c = jrCapsList().find((x) => x.id === state.capDraft?.id); if (!c) return; state.capDraft.choice = i; paintJrCap(c); }
function closeJrCap() { const el = document.getElementById('cap-modal'); if (el) el.classList.remove('open'); }
function completeJrCap(id) {
  const d = state.capDraft; if (!d || d.id !== id || d.choice == null || d.answered == null || isJrCapDone(id)) return;
  const c = jrCapsList().find((x) => x.id === id);
  awardCoins('reto_submitted', `jcap:${id}`, `${L('Cápsula', 'Capsule')}: ${c ? c.title : id}`);
  try { localStorage.setItem(`chanak_jcap_${id}`, JSON.stringify({ choice: d.choice, ok: d.answered === c.check.answer, ts: Date.now() })); } catch (e) { /* sin almacenamiento */ }
  closeJrCap(); celebrate(); renderCurrentView();
}
window.openJrCap = openJrCap; window.closeJrCap = closeJrCap; window.jrCapAnswer = jrCapAnswer; window.jrCapChoose = jrCapChoose; window.completeJrCap = completeJrCap; window.setJrCapTramo = setJrCapTramo;

// Horario de clases en vivo: Dual Diploma (8.º en adelante) tiene inglés el martes y Life Skills el jueves;
// 4.º a 6.º de España (Primaria, Off-Campus) tiene inglés el MIÉRCOLES de 12:00 a 13:00 (hora de España) y NO tiene Life Skills virtual.
function liveScheduleProfile() {
  const g = juniorGradeNumber();
  const c = String(state.country || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
  const spain = !c || c === 'es' || c === 'espana' || c === 'spain';
  if (state.audience === 'junior' && g >= 4 && g <= 6 && spain) return 'primary-es';
  return 'default';
}
function applyLiveSchedule() {
  const b = document.getElementById('student-meet-banner'); if (!b) return;
  const profile = liveScheduleProfile();
  if (!b.dataset.defaultHtml) b.dataset.defaultHtml = b.innerHTML;
  if (profile === 'default') { if (b.dataset.applied) { b.innerHTML = b.dataset.defaultHtml; delete b.dataset.applied; } return; }
  b.dataset.applied = profile;
  b.innerHTML = `<div class="meet-schedule-left">
      <div class="meet-live-badge">🔴 ${L('AULA VIRTUAL EN VIVO', 'LIVE VIRTUAL CLASSROOM')}</div>
      <h3 class="meet-title">${L('Clase de inglés en vivo · Google Meet', 'Live English class · Google Meet')}</h3>
      <p class="meet-desc">${L('Conéctate a tu clase semanal de inglés con tu mentora. Life Skills se trabaja en esta app, a tu ritmo, sin clase virtual.', 'Join your weekly English class with your mentor. Life Skills is done in this app at your own pace, with no virtual class.')}</p>
      <div class="meet-schedule-chips"><div class="schedule-chip">
        <span class="chip-day">${L('Miércoles', 'Wednesday')}</span><span class="chip-time">12:00 – 13:00</span>
        <span class="chip-subject">🇬🇧 English · ${L('hora de España', 'Spain time')}</span></div></div>
    </div>
    <div class="meet-schedule-right">
      <a href="https://meet.google.com/gye-nzqs-gdd" target="_blank" rel="noopener noreferrer" class="btn-meet-join">📹 ${L('Unirme a Clase Virtual (Meet)', 'Join the Virtual Class (Meet)')} ↗</a>
      <div class="meet-link-sub">meet.google.com/gye-nzqs-gdd</div></div>`;
}

// Guía PDF del nivel/grado: vive dentro de la app (no en el perfil del estudiante del SIS)
function updateGuideLink() {
  let a = document.getElementById('guide-pdf-link');
  const url = lifeSkillsGuideUrl(juniorGradeNumber());
  if (!url) { if (a) a.hidden = true; return; }
  if (!a) {
    a = document.createElement('a'); a.id = 'guide-pdf-link'; a.className = 'guide-pdf-link'; a.target = '_blank'; a.rel = 'noopener noreferrer';
    const host = document.querySelector('.header-inner') || document.body; host.appendChild(a);
  }
  a.hidden = false; a.href = url; a.textContent = L('📄 Guía PDF de tu nivel', '📄 Your level guide (PDF)');
}

function renderJuniorsStage(container) {
  const isEs = state.lang !== 'en';
  const lang = isEs ? 'es' : 'en';
  const skin = juniorSkin();
  const kids = skin === 'kids';
  const missions = juniorMissions();
  const done = missions.filter((m) => isMissionDone(m.id));
  const projectsDone = done.filter((m) => m.track !== 'retos').length;
  const lvlIdx = Math.min(JK_LEVELS.length - 1, Math.floor(done.length / 8));
  const lvl = JK_LEVELS[lvlIdx];
  const toNext = lvlIdx >= JK_LEVELS.length - 1 ? 8 : 8 - (done.length % 8);
  const xpPct = lvlIdx >= JK_LEVELS.length - 1 ? 100 : Math.round(((done.length % 8) / 8) * 100);
  let avIdx = 0; try { avIdx = Number(localStorage.getItem('chanak_junior_avatar') || 0) % JK_AVATARS.length; } catch (e) { /* */ }
  const name = state.studentName ? decodeURIComponent(state.studentName).split(' ')[0] : (isEs ? 'Explorador' : 'Explorer');
  const filter = state.juniorsFilter;

  const trackCards = [
    { id: 'all', icon: '🗺️', label: isEs ? 'Todo el mapa' : 'Whole map', color: '#0f172a', total: missions.length, ok: done.length },
    ...JUNIOR_TRACKS.map((t) => ({ id: t.id, icon: t.icon, label: t[lang], color: t.color, total: 8, ok: done.filter((m) => m.track === t.id).length })),
    ...(jrCapsList().length ? [{ id: 'caps', icon: '💡', label: isEs ? 'Cápsulas por tema (4.º–7.º)' : 'Capsules by theme (grades 4–7)', color: '#7c3aed', total: jrCapsList().length, ok: jrCapsList().filter((c) => isJrCapDone(c.id)).length }] : []),
    { id: 'retos', icon: '🏅', label: isEs ? 'Retos de carácter y servicio' : 'Character & service challenges', color: '#d97706', total: JUNIORS_RETOS.length, ok: done.filter((m) => m.track === 'retos').length },
  ];
  const badge = (ok) => (ok >= 8 ? '🥇' : ok >= 6 ? '🥈' : ok >= 3 ? '🥉' : '');
  const shown = filter === 'all' ? missions : missions.filter((m) => m.track === filter);

  // Misión del día: determinista por fecha de Florida entre las pendientes de proyectos
  const pending = missions.filter((m) => m.track !== 'retos' && !isMissionDone(m.id));
  const dayKey = Number(floridaIsoDate().replace(/-/g, ''));
  const daily = pending.length ? pending[dayKey % pending.length] : null;
  const dailyIsland = daily ? JUNIOR_TRACKS.find((t) => t.id === daily.track) : null;

  const missionCard = (m) => {
    const ok = isMissionDone(m.id);
    const t = JUNIOR_TRACKS.find((x) => x.id === m.track);
    const color = t ? t.color : '#d97706';
    return `<article class="jk-mission ${ok ? 'is-done' : ''} ${kids ? 'jk-kids' : 'jk-teen'}" style="--jk:${color}">
      <header class="jk-mission__top"><span class="jk-mission__icon" aria-hidden="true">${ok ? '⭐' : m.icon}</span>
        <span class="jk-mission__num">${m.n ? `${isEs ? 'Misión' : 'Mission'} ${m.n}` : (isEs ? 'Reto' : 'Challenge')}</span>
        <span class="jk-mission__coins">${ok ? (isEs ? '✓ ¡Lograda!' : '✓ Done!') : `+${m.coins} 🪙`}</span></header>
      <h4 class="jk-mission__title">${escHtml(m.title)}</h4>
      ${m.desc ? `<p class="jk-mission__desc">${escHtml(m.desc)}</p>` : ''}
      ${m.deliverable ? `<p class="jk-mission__deliv"><b>${kids ? '🎁 ' : ''}${isEs ? 'Entregable' : 'Deliverable'}:</b> ${escHtml(m.deliverable)}</p>` : ''}
      ${m.verse ? `<p class="jk-mission__verse">📖 “${escHtml(m.verse)}” — ${escHtml(m.ref)}</p>` : ''}
      <button class="btn-primary jk-mission__cta" onclick="openMissionModal('${m.id}')">${ok ? (isEs ? 'Ver mi entrega →' : 'View my work →') : (kids ? (isEs ? '¡Completar misión! 🚀' : 'Complete mission! 🚀') : (isEs ? 'Entregar evidencia →' : 'Submit evidence →'))}</button>
    </article>`;
  };

  container.innerHTML = `
    <div class="jk-root ${kids ? 'jk-skin-kids' : 'jk-skin-teen'}">
      <section class="jk-hud" aria-label="${isEs ? 'Tu progreso' : 'Your progress'}">
        <button class="jk-avatar" onclick="cycleJuniorAvatar()" title="${isEs ? 'Cambiar personaje' : 'Change character'}" aria-label="${isEs ? 'Cambiar personaje' : 'Change character'}">${JK_AVATARS[avIdx]}</button>
        <div class="jk-hud__main">
          <p class="jk-hud__name">${escHtml(name)} · <b>${lvl.icon} ${isEs ? 'Nivel' : 'Level'} ${lvlIdx + 1}: ${lvl[lang]}</b></p>
          <div class="jk-xp" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${xpPct}"><i style="width:${xpPct}%"></i></div>
          <p class="jk-hud__sub">${lvlIdx >= JK_LEVELS.length - 1 ? (isEs ? '¡Nivel máximo! 🏆' : 'Max level! 🏆') : (isEs ? `Te faltan ${toNext} misiones para subir de nivel` : `${toNext} more missions to level up`)}</p>
        </div>
        <div class="jk-hud__stats"><span>🎯 <b>${projectsDone}</b>/80</span><span>🪙 <b>${state.coins}</b></span></div>
        <button class="jk-skin-btn" onclick="setJuniorSkin('${kids ? 'teen' : 'kids'}')">${kids ? (isEs ? '🧭 Modo sobrio' : '🧭 Calm mode') : (isEs ? '🎮 Modo aventura' : '🎮 Adventure mode')}</button>
      </section>

      ${daily ? `<section class="jk-daily" style="--jk:${dailyIsland.color}">
        <div><p class="jk-daily__tag">${kids ? '⚡ ' : ''}${isEs ? 'Misión del día' : 'Mission of the day'} · ${dailyIsland.icon} ${escHtml(dailyIsland[lang])}</p>
          <h3>${escHtml(daily.title)}</h3><p>${escHtml(daily.desc)}</p></div>
        <button class="btn-primary" onclick="openMissionModal('${daily.id}')">${kids ? (isEs ? '¡Aceptar reto! 🔥' : 'Accept the challenge! 🔥') : (isEs ? 'Empezar' : 'Start')}</button>
      </section>` : ''}

      <h3 class="jk-h3">${kids ? '🗺️ ' : ''}${isEs ? 'Elige tu isla' : 'Choose your island'}</h3>
      <div class="jk-islands" role="tablist">
        ${trackCards.map((t) => `<button class="jk-island ${filter === t.id ? 'is-active' : ''}" role="tab" aria-selected="${filter === t.id}" style="--jk:${t.color}" onclick="filterJuniors('${t.id}')">
          <span class="jk-island__icon" aria-hidden="true">${t.icon}</span>
          <span class="jk-island__name">${escHtml(t.label)}</span>
          <span class="jk-island__prog"><i style="width:${Math.round((t.ok / t.total) * 100)}%"></i></span>
          <span class="jk-island__count">${t.ok}/${t.total} ${badge(t.ok) && t.id !== 'all' && t.id !== 'retos' ? badge(t.ok) : ''}</span></button>`).join('')}
      </div>

      ${filter === 'caps' ? `<div class="jk-tramos">${JUNIOR_TRAMOS.map((t) => `<button class="jk-skin-btn ${jrCapTramo() === t.id ? 'is-on' : ''}" ${tramoForGrade(juniorGradeNumber()) ? 'disabled' : ''} onclick="setJrCapTramo('${t.id}')">${t.label.replace('.º', isEs ? '.º' : 'th')}</button>`).join('')}</div>` : ''}
      <div class="jk-grid">${filter === 'caps' ? jrCapsList().map((c) => jrCapsuleCard(c, kids)).join('') : shown.map(missionCard).join('')}</div>
    </div>`;
}

// ============================================================================
// 7. VISTA: MÓDULOS TRANSVERSALES (TODAS LAS EDADES)
// ============================================================================
function renderTransversalModules(container) {
  const isEs = state.lang === 'es';
  const transversales = [
    { id: 'vida', icon: '✝️', title: 'Vida Cristiana & Cosmovisión Bíblica', desc: 'Fe viva, evangelismo relacional, misiones y carácter al servicio del Reino de Dios.' },
    { id: 'conociendome', icon: '🧠', title: 'Conociéndome: Salud Emocional y Corporal', desc: 'Identidad, salud mental, prevención del acoso escolar y mayordomía del cuerpo como templo.' },
    { id: 'estudio', icon: '📚', title: 'Técnicas de Estudio & Aprendizaje Autónomo', desc: 'Método Cornell, repetición espaciada, mapas conceptuales y rutinas de alta productividad.' }
  ];

  container.innerHTML = `
    <!-- Header Transversales -->
    <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 26px; margin-bottom: 24px; box-shadow: var(--shadow-sm);">
      <span class="eyebrow-tag" style="color: var(--navy); margin: 0;">FORMACIÓN TRANSVERSAL · TODAS LAS EDADES</span>
      <h3 style="font-size: 26px; color: var(--navy); margin: 6px 0 4px; font-family: var(--font-display);">
        ✝️ Módulos Transversales Chanak
      </h3>
      <p style="font-size: 14px; color: var(--ink-muted); margin: 0;">
        Ejes fundamentales de desarrollo espiritual, autocuidado emocional y excelencia académica aplicables a cualquier nivel.
      </p>
    </div>

    <!-- Cards Grid -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
      ${transversales.map(t => `
        <div class="reading-card" style="padding: 24px;">
          <div style="font-size: 32px; margin-bottom: 8px;">${t.icon}</div>
          <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 8px; font-family: var(--font-display);">${t.title}</h4>
          <p style="font-size: 13px; color: var(--ink-muted); line-height: 1.6; margin-bottom: 16px;">
            ${t.desc}
          </p>
          <div style="background: var(--paper); border: 1px solid var(--line); border-radius: 8px; padding: 10px 12px; font-size: 12px; color: var(--ink-muted);">
            📌 <b>Aplicación:</b> Integrado transversalmente en las sesiones semanales y reflexiones de Cuaderno.
          </div>
        </div>
      `).join('')}
    </div>
  `;
}


// ---------------- AI Mentor Logic (Life Skills Socratic Guide) ----------------
state.aiMessages = state.aiMessages || [
  {
    role: 'assistant',
    content: state.lang === 'es'
      ? '¡Hola! Soy tu Mentor IA de Life Skills & Liderazgo de Chanak. Estoy aquí para acompañarte a reflexionar sobre tus hábitos, proyectos trimestrales (Escudo de armas, Tracker de 21 días o Proyecto BOLD) y principios de mayordomía bíblica. ¿En qué te gustaría reflexionar o profundizar hoy?'
      : 'Hello! I am your Chanak Life Skills & Leadership AI Mentor. I am here to guide you in reflecting on habits, quarterly projects, and biblical stewardship. How can I help you reflect today?'
  }
];
state.aiLoading = false;

function toggleAiMentorModal() {
  const modal = document.getElementById('ai-mentor-modal');
  if (!modal) return;
  const isOpen = modal.classList.contains('is-open');
  if (isOpen) {
    closeAiMentorModal();
  } else {
    modal.classList.add('is-open');
    renderAiMessages();
    setTimeout(() => {
      const input = document.getElementById('ai-mentor-input');
      if (input) input.focus();
    }, 100);
  }
}

function closeAiMentorModal() {
  const modal = document.getElementById('ai-mentor-modal');
  if (modal) modal.classList.remove('is-open');
}

function renderAiMessages() {
  const container = document.getElementById('ai-mentor-messages');
  if (!container) return;

  container.innerHTML = state.aiMessages.map(msg => {
    const isUser = msg.role === 'user';
    return `
      <div class="ai-msg ${isUser ? 'ai-msg-user' : 'ai-msg-assistant'}">
        ${isUser ? '' : '<span style="font-size: 11px; font-weight: 800; color: var(--navy); display: block; margin-bottom: 3px;">🤖 Mentor IA</span>'}
        <div>${msg.content.replace(/\n/g, '<br>')}</div>
      </div>
    `;
  }).join('');

  if (state.aiLoading) {
    container.innerHTML += `
      <div class="ai-msg ai-msg-assistant" style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 11px; font-weight: 800; color: var(--navy);">🤖 Mentor IA</span>
        <div class="ai-typing-indicator" title="Reflexionando...">
          <div class="ai-typing-dot"></div>
          <div class="ai-typing-dot"></div>
          <div class="ai-typing-dot"></div>
        </div>
      </div>
    `;
  }

  container.scrollTop = container.scrollHeight;
}

function sendQuickPrompt(promptText) {
  const input = document.getElementById('ai-mentor-input');
  if (input) {
    input.value = promptText;
    handleSendAiMessage(new Event('submit'));
  }
}

// Reto o filtro de Juniors que el estudiante tiene abierto (el servidor limita al resto de temas permitidos).
function currentJuniorTopic() {
  try {
    const f = state.juniorsFilter;
    if (!f || f === 'all') return '';
    const r = JUNIORS_RETOS.find((x) => x.track === f);
    const label = r && r.trackLabel;
    return label ? (label[state.lang] || label.es || '') : '';
  } catch (e) { return ''; }
}

async function handleSendAiMessage(e) {
  if (e && e.preventDefault) e.preventDefault();
  if (state.aiLoading) return;

  const input = document.getElementById('ai-mentor-input');
  if (!input) return;
  const userText = input.value.trim();
  if (!userText) return;

  input.value = '';
  state.aiMessages.push({ role: 'user', content: userText });
  state.aiLoading = true;
  renderAiMessages();

  const submitBtn = document.getElementById('ai-mentor-btn-submit');
  if (submitBtn) submitBtn.disabled = true;

  try {
    const stageKey = state.selectedHighSchoolLevel || 'seedling';
    const levelData = (typeof HIGH_SCHOOL_LEVELS !== 'undefined' && HIGH_SCHOOL_LEVELS[stageKey]) || {};
    const levelTitle = levelData.title ? (levelData.title[state.lang] || levelData.title.es || levelData.title) : stageKey;

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: state.aiMessages,
        stageKey,
        levelTitle,
        lang: state.lang || 'es',
        audience: state.audience === 'junior' ? 'junior' : 'highschool',
        topic: state.audience === 'junior' ? currentJuniorTopic() : undefined,
        moduleTitle: 'Life Skills & Formación de Carácter'
      })
    });

    const data = await res.json().catch(() => null);

    if (res.ok && data?.content) {
      state.aiMessages.push({ role: 'assistant', content: data.content });
    } else {
      const errMsg = (data && data.content) || (state.lang === 'es'
        ? 'El Mentor IA no está disponible en este momento. Por favor verifica que tu API key de Gemini esté configurada en Vercel.'
        : 'The AI Mentor is currently unavailable. Please verify your Gemini API key in Vercel.');
      state.aiMessages.push({ role: 'assistant', content: errMsg });
    }
  } catch (err) {
    console.error('Error enviando mensaje al Mentor IA:', err);
    state.aiMessages.push({
      role: 'assistant',
      content: state.lang === 'es'
        ? 'No se pudo conectar con el servidor del Mentor IA. Revisa tu conexión a internet.'
        : 'Could not connect to the AI Mentor server. Please check your internet connection.'
    });
  } finally {
    state.aiLoading = false;
    if (submitBtn) submitBtn.disabled = false;
    renderAiMessages();
  }
}

window.toggleAiMentorModal = toggleAiMentorModal;
window.closeAiMentorModal = closeAiMentorModal;
window.sendQuickPrompt = sendQuickPrompt;
window.handleSendAiMessage = handleSendAiMessage;
