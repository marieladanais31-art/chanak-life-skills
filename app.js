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

const VIEWS_BY_AUDIENCE = {
  junior: ['juniors', 'capsulas', 'herramientas'],
  highschool: ['ruta', 'expediente', 'rubrica', 'transversales', 'herramientas', 'capsulas', 'cuaderno', 'test-dones', 'habitos'],
};

// ---------------- Application State ----------------
const state = {
  lang: 'es',
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
  
  if (params.get('token')) {
    state.token = params.get('token');
    state.studentId = params.get('student_id');
    state.studentName = params.get('student_name');
    state.schoolYear = params.get('school_year');
    state.isSis = true;
    state.mode = 'portal';

    // Parse signed token (5 parts: student_id.school_year.level.expires_at.signature)
    const tokenParts = state.token.split('.');
    if (tokenParts.length === 5) {
      state.assignedLevel = tokenParts[2].toLowerCase();
      state.currentLevel = state.assignedLevel;
    } else if (params.get('level')) {
      state.assignedLevel = params.get('level').toLowerCase();
      state.currentLevel = state.assignedLevel;
    } else {
      state.assignedLevel = 'seedling';
      state.currentLevel = 'seedling';
    }

    // Normalización de Grado 8 / Seedling
    if (['8', '8th', 'grade8', 'grade 8', 'seedling', '1', 'level1', 'freshman'].includes(state.assignedLevel)) {
      state.assignedLevel = 'seedling';
      state.currentLevel = 'seedling';
    }

    state.userRole = 'student';

    // La audiencia sale del nivel firmado en el token: Grado 8 / Seedling es High School
    state.audience = state.assignedLevel === 'junior' ? 'junior' : 'highschool';
    if (state.audience === 'junior') {
      state.currentLevel = null;
      state.viewMode = 'juniors';
    } else {
      state.viewMode = 'ruta';
    }
  } else {
    state.isSis = false;
    state.assignedLevel = null;

    const chosen = params.get('audience') || localStorage.getItem('chanak_audience');
    const gradeParam = params.get('grade');
    if (gradeParam) {
      const g = gradeParam.toLowerCase();
      const n = parseInt((g.match(/\d+/) || [])[0], 10);
      if (n >= 8 || g.includes('seedling') || g.includes('freshman')) {
        state.audience = 'highschool';
        state.assignedLevel = 'seedling';
        state.currentLevel = 'seedling';
        state.viewMode = 'ruta';
      }
    } else {
      state.audience = (chosen === 'junior' || chosen === 'highschool') ? chosen : null;
    }

    if (state.audience === 'junior') {
      state.viewMode = 'juniors';
    } else if (params.get('level')) {
      let lvl = params.get('level').toLowerCase();
      if (['8', '8th', 'grade8', 'grade 8', '1', 'level1', 'seedling', 'freshman'].includes(lvl)) lvl = 'seedling';
      state.currentLevel = lvl;
      if (['seedling', 'explorer', 'builder', 'launch'].includes(lvl)) {
        state.audience = 'highschool';
        state.viewMode = 'ruta';
      }
    }
  }

  if (params.get('mode') === 'dual' || window.location.pathname.includes('dualdiploma')) {
    state.mode = 'dual';
  }
  
  if (params.get('embed') === 'true' || params.get('embed') === '1' || window.self !== window.top) {
    state.isEmbed = true;
    document.body.classList.add('embed-mode');
  }

  if (params.get('lang') === 'en') {
    state.lang = 'en';
  }

  if (params.get('view')) {
    const v = params.get('view');
    if (['ruta', 'capsulas', 'cuaderno', 'test-dones', 'habitos', 'expediente', 'rubrica', 'herramientas', 'juniors', 'transversales'].includes(v)) {
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

// ---------------- Language Switcher ----------------
function switchLanguage(lang) {
  state.lang = lang;
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
  const normAssigned = ['8', '8th', 'grade8', 'grade 8', '1', 'level1', 'freshman'].includes(state.assignedLevel) ? 'seedling' : state.assignedLevel;
  if (state.isSis && normAssigned && levelKey !== normAssigned) {
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
  const tabs = ['ruta', 'expediente', 'rubrica', 'transversales', 'herramientas', 'juniors'];
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
        const isAssigned = !state.isSis || !normAssigned || (normAssigned === lvl.id);
        const isActive = (state.currentLevel === lvl.id);
        el.classList.toggle('active', isActive);

        if (state.isSis && normAssigned && !isAssigned) {
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

  const levelTitle = levelData.title ? (levelData.title[state.lang] || levelData.title.es || levelData.title) : stageKey;
  const levelSub = levelData.subtitle ? (levelData.subtitle[state.lang] || levelData.subtitle.es || levelData.subtitle) : '';

  // 3 Compromisos Semanales Formativos (Dual Diploma)
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
    <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 26px; margin-bottom: 24px; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 8px;">
        <span class="eyebrow-tag" style="color: var(--green); margin: 0;">
          ${isEs ? `NIVEL ${levelData.num || 1} · ${stageKey.toUpperCase()} · ${levelData.age || ''} · ${levelData.gradeUS || ''} · FLDOE #134620` : `LEVEL ${levelData.num || 1} · ${stageKey.toUpperCase()} · ${levelData.gradeUS || ''}`}
        </span>
        <a href="https://drive.google.com/file/d/1tuB-OX7-mwLIpHNHXPS0lSKaSRponaAk/view" target="_blank" class="btn-interactive" style="font-size: 12px; display: inline-flex; align-items: center; gap: 6px;">
          📄 ${isEs ? 'Guía PDF Oficial del Nivel' : 'Official Level PDF Guide'} ↗
        </a>
      </div>
      <h3 style="font-size: 26px; color: var(--navy); margin-bottom: 6px; font-family: var(--font-display);">
        ${levelTitle}
      </h3>
      <p style="font-size: 15px; color: var(--ink-muted); margin: 0;">
        ${levelSub}
      </p>
    </div>

    <!-- 2. Academic Calendar Structure Banner (3 Quarters + 1 Leveling) -->
    <div style="background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: var(--radius-md); padding: 16px 20px; margin-bottom: 24px; display: flex; align-items: flex-start; gap: 14px;">
      <span style="font-size: 24px; flex-shrink: 0; line-height: 1.2;">📅</span>
      <div style="font-size: 13px; color: #1E3A8A; line-height: 1.55;">
        <strong style="font-size: 14px; display: block; margin-bottom: 3px; color: #1E40AF;">
          ${isEs ? 'Estructura del Año Académico: 3 Trimestres Regulares (Q1, Q2, Q3) + 1 Período de Nivelación Formativa' : 'Academic Year Structure: 3 Regular Quarters (Q1, Q2, Q3) + 1 Formative Leveling Period'}
        </strong>
        ${isEs 
          ? 'En Chanak los proyectos oficiales del expediente se entregan en Q1, Q2 y Q3. El 4º período es de nivelación, consolidación de hábitos y tutoría personalizada con tu mentor.' 
          : 'At Chanak official dossier projects are completed in Q1, Q2, and Q3. The 4th period is reserved for leveling, habit consolidation, and personalized mentoring.'}
      </div>
    </div>

    <!-- 3. Weekly Formative Commitments (Dual Diploma Focus: 3 Core Activities) -->
    <div class="weekly-commitments-card" style="background: #fff; border: 1.5px solid var(--line); border-radius: var(--radius-md); padding: 22px; margin-bottom: 26px; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; border-bottom: 1px solid var(--line); padding-bottom: 12px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 24px;">📋</span>
          <div>
            <h4 style="font-size: 16px; font-weight: 800; color: var(--navy); margin: 0;">
              ${isEs ? 'Compromisos Formativos de la Semana (Dual Diploma)' : 'Weekly Formative Commitments (Dual Diploma)'}
            </h4>
            <span style="font-size: 12px; color: var(--ink-muted);">
              ${isEs ? '3 actividades clave: Inglés Académico (2h), Life Skills (2h) y Ciencias Sociales USA (1h)' : '3 core activities: Academic English (2h), Life Skills (2h), and US Social Studies (1h)'}
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

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin-bottom: 16px;">
        ${WEEKLY_GOALS_LIST.map(g => {
          const isDone = completedWeeklyGoals.includes(g.id);
          return `
            <div class="weekly-goal-item ${isDone ? 'is-done' : ''}" onclick="toggleWeeklyCommitment('${g.id}')"
                 style="background: ${isDone ? '#F0FDF4' : '#F8FAFC'}; border: 1.5px solid ${isDone ? '#86EFAC' : 'var(--line)'}; border-radius: 12px; padding: 14px 16px; cursor: pointer; display: flex; flex-direction: column; gap: 8px; transition: all 0.2s;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="background: ${isDone ? '#166534' : 'var(--navy)'}; color: #fff; font-size: 11px; font-weight: 800; padding: 2px 8px; border-radius: 6px;">
                  ${isEs ? g.badge_es : g.badge_en}
                </span>
                <span style="font-size: 18px;">${isDone ? '✅' : '⚪'}</span>
              </div>
              <div style="font-size: 14px; font-weight: 800; color: ${isDone ? '#166534' : 'var(--navy)'}; line-height: 1.35;">
                ${g.icon} ${isEs ? g.title_es : g.title_en}
              </div>
              <div style="font-size: 12px; color: var(--ink-muted); line-height: 1.45;">
                ${isEs ? g.desc_es : g.desc_en}
              </div>
              <div style="margin-top: auto; padding-top: 8px; border-top: 1px dashed var(--line); font-size: 11px; color: ${isDone ? '#15803D' : '#0C6E70'}; font-weight: 700;">
                📅 ${isEs ? g.schedule_es : g.schedule_en}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; background: var(--paper); padding: 10px 14px; border-radius: 8px; font-size: 12px;">
        <span style="color: var(--ink-muted);">
          💡 <b>${isEs ? 'Clases en Vivo por Google Meet:' : 'Live Classes on Google Meet:'}</b> ${isEs ? 'Martes 16:00 CET (Inglés) · Jueves 18:00 CET (Life Skills)' : 'Tuesday 16:00 CET (English) · Thursday 18:00 CET (Life Skills)'}
        </span>
        <a href="https://meet.google.com/gye-nzqs-gdd" target="_blank" rel="noopener noreferrer"
           style="background: #16a34a; color: #fff; text-decoration: none; padding: 6px 14px; border-radius: 6px; font-weight: 700; font-size: 12px; display: inline-flex; align-items: center; gap: 6px;">
          📹 ${isEs ? 'Unirme a Meet' : 'Join Meet'} ↗
        </a>
      </div>
    </div>

    <!-- 4. Biblical Devotional Card -->
    <div class="devotional-card" style="margin-bottom: 28px;">
      <div class="devotional-ref">
        📖 <span>${verse.ref || 'Cita Bíblica'}</span> · ${isEs ? 'Texto Bíblico del Nivel' : 'Key Scripture'}
      </div>
      <div class="devotional-text">
        "${verseText}"
      </div>
      ${verseCtx ? `
        <div class="devotional-applied">
          💡 <b>${isEs ? 'Devocional Aplicado:' : 'Applied Devotional:'}</b> ${verseCtx}
        </div>
      ` : ''}
    </div>

    <!-- 5. Special Highlight for Explorer Q1: Test "Quién Soy" -->
    ${stageKey === 'explorer' ? `
      <div style="background: linear-gradient(135deg, #1e3a8a, #0f2240); color: #fff; border-radius: var(--radius-md); padding: 24px 28px; margin-bottom: 28px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; box-shadow: var(--shadow-md);">
        <div style="max-width: 620px;">
          <span class="badge" style="background: rgba(255,255,255,0.2); color: #fff; font-size: 11px; margin-bottom: 8px;">
            ⭐ PROYECTO ANCLA Q1 · DOSSIER UNIVERSITARIO
          </span>
          <h4 style="font-size: 20px; color: #fff; margin-bottom: 6px; font-family: var(--font-display);">
            🧭 Test "Quién Soy" · Perfil Vocacional & Test de Dones
          </h4>
          <p style="font-size: 14px; opacity: 0.9; margin: 0; line-height: 1.5;">
            Descubre tus inclinaciones vocacionales mediante el modelo RIASEC adaptado al servicio cristiano. Genera el entregable oficial <code>Test_Dones_Resultados.pdf</code>.
          </p>
        </div>
        <button class="btn-primary" style="background: var(--gold); color: #fff; border: none; padding: 12px 22px; font-size: 14px;" onclick="setViewMode('herramientas')">
          Hacer Test Vocacional (+50 🪙) →
        </button>
      </div>
    ` : ''}

    <!-- 6. Master Class Section (Libros Formativos de cada Nivel con Resumen Ejecutivo) -->
    <div class="masterclass-section" style="margin-bottom: 32px;">
      <div class="masterclass-head" style="margin-bottom: 16px;">
        <div>
          <span class="eyebrow-tag" style="color: var(--gold); margin: 0;">MASTER CLASS · FORMACIÓN POR LECTURA</span>
          <h3 style="font-family: var(--font-display); margin-top: 4px; color: var(--navy); font-size: 22px;">
            📖 ${isEs ? 'Master Class & Lecturas Clave del Nivel' : 'Master Class & Key Level Books'}
          </h3>
          <p style="font-size: 13px; color: var(--ink-muted); margin: 2px 0 0;">
            ${isEs ? 'Libros formativos de impacto integrados a las sesiones curriculares con ideas fuerza, citas inspiradoras y resumen ejecutivo.' : 'Foundational books integrated into curriculum sessions with core principles, quotes, and executive summaries.'}
          </p>
        </div>
        <span class="badge" style="background: var(--gold-light); color: #7a5a1e; font-weight: 700; font-size: 12px;">
          ${(levelData.books || []).length} ${isEs ? 'Lecturas de Impacto' : 'Key Readings'}
        </span>
      </div>

      <div class="masterclass-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 16px;">
        ${(levelData.books || []).map(bKey => {
          const book = BOOKS[bKey];
          if (!book) return '';
          const bAudience = book.audience ? (book.audience[state.lang] || book.audience.es || book.audience) : (isEs ? 'Lectura Altamente Recomendada (Opcional)' : 'Highly Recommended (Optional)');
          const bTitle = book.title ? (book.title[state.lang] || book.title.es || book.title) : bKey;
          const bAuthor = book.author || '';
          const bKeyPoint = book.key ? (book.key[state.lang] || book.key.es || book.key) : '';
          const bQuote = book.quote ? (book.quote[state.lang] || book.quote.es || book.quote) : '';
          return `
            <div class="masterclass-card" style="display: flex; flex-direction: column; gap: 10px; background: #fff; border: 1px solid var(--line); border-radius: 12px; padding: 20px; box-shadow: var(--shadow-xs);">
              <span class="mc-badge" style="background: var(--gold-light); color: #7a5a1e; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; align-self: flex-start;">
                📖 ${bAudience}
              </span>
              <div class="mc-title" style="font-size: 18px; font-weight: 800; color: var(--navy); font-family: var(--font-display);">⚡ ${bTitle}</div>
              <div class="mc-author" style="font-size: 12px; color: var(--ink-muted); margin-top: -6px;">Por ${bAuthor}</div>
              ${book.summary_es ? `
                <div class="mc-summary" style="background: var(--paper); border-radius: 8px; padding: 12px; font-size: 13px; color: var(--ink); line-height: 1.55; border-left: 3px solid var(--gold);">
                  <strong style="color: var(--navy); display: block; margin-bottom: 4px; font-size: 12px; text-transform: uppercase;">📑 ${isEs ? 'Resumen Ejecutivo:' : 'Executive Summary:'}</strong>
                  ${book.summary_es}
                </div>
              ` : ''}
              <div class="mc-key" style="font-size: 13px; color: var(--navy); line-height: 1.5;">
                <b>💡 ${isEs ? 'Idea Fuerza' : 'Key Idea'}:</b> ${bKeyPoint}
              </div>
              <div class="mc-quote" style="font-size: 12px; color: var(--ink-muted); font-style: italic; border-left: 2px solid var(--green); padding-left: 10px;">
                "${bQuote}"
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- 6. Vocational Tracks Picker & Project Context -->
    <div class="tracks-picker-box">
      <div class="tracks-picker-head">
        <span class="eyebrow-tag" style="color: var(--green); margin: 0;">ITINERARIOS VOCACIONALES CHANAK</span>
        <h4 style="font-family: var(--font-display); margin-top: 4px;">
          🎯 ${isEs ? 'Elige tu Track Vocacional para los Proyectos' : 'Choose your Vocational Track for Projects'}
        </h4>
        <p style="font-size: 13px; color: var(--ink-muted); margin: 2px 0 0;">
          ${isEs ? 'Cada módulo y entregable trimestral se adapta a la vocación y talentos que Dios te dio:' : 'Every module and quarterly deliverable adapts to your calling and talents:'}
        </p>
      </div>

      <div class="tracks-picker-pills">
        ${Object.values(VOCATIONAL_TRACKS).map(trk => {
          const isActive = trk.id === state.selectedTrack;
          const tName = trk.name ? (trk.name[state.lang] || trk.name.es) : trk.id;
          return `
            <button class="track-pill-btn ${isActive ? 'is-active' : ''}" onclick="selectVocationalTrack('${trk.id}')">
              <span>${trk.icon}</span> ${tName}
            </button>
          `;
        }).join('')}
      </div>

      <div class="track-detail-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <b style="font-size: 14px; color: var(--navy);">
            ${currentTrack.icon} ${trackName}
          </b>
          <span style="font-size: 11px; background: rgba(22, 163, 74, 0.15); color: #166534; padding: 2px 8px; border-radius: 10px; font-weight: 700;">
            ${isEs ? 'Track Activo' : 'Active Track'}
          </span>
        </div>
        <div style="font-size: 12px; color: var(--ink-muted); margin-bottom: 8px;">
          ${trackTag}
        </div>
        <div style="font-size: 13px; line-height: 1.5; color: var(--ink);">
          📌 <b>${isEs ? `Aplicación en ${stageKey.toUpperCase()}:` : `Application in ${stageKey.toUpperCase()}:`}</b>
          ${trackLevelProjects.length > 0 ? trackLevelProjects.map((p, i) => {
            const pTxt = typeof p === 'object' ? (p[state.lang] || p.es) : p;
            return `<div style="margin-top: 4px;">• ${pTxt}</div>`;
          }).join('') : (isEs ? 'Personaliza tus entregables en base a este itinerario.' : 'Customize your deliverables based on this track.')}
        </div>
      </div>
    </div>

    <!-- 7. CONTINUOUS ROUTE BY QUARTERS WITH INLINE ACCORDION SESSIONS (English I style) -->
    <div style="margin-bottom: 36px;">
      <div style="margin-bottom: 18px;">
        <span class="eyebrow-tag" style="color: var(--navy); margin: 0;">CURRÍCULO INTEGRADO · RUTA CONTINUA</span>
        <h3 style="font-size: 24px; color: var(--navy); font-family: var(--font-display); margin: 4px 0;">
          🧭 ${isEs ? 'Ruta Continua de Aprendizaje por Trimestres' : 'Continuous Learning Route by Quarters'}
        </h3>
        <p style="font-size: 14px; color: var(--ink-muted); margin: 0;">
          ${isEs ? 'Haz clic en cada módulo para desplegar sus 8 sesiones/cápsulas directamente abajo. Todo en un único flujo sin perderte.' : 'Click each module to unfold its 8 sessions/capsules directly underneath in a single unified flow.'}
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
          <div class="quarter-section-wrap">
            <div class="quarter-section-head">
              <span class="quarter-badge" style="font-size: 13px; padding: 4px 10px;">${q.id}</span>
              <h3>${qTitle}</h3>
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
                <div class="module-unit-box">
                  <div class="module-unit-header" onclick="toggleModuleAccordion('${modId}')">
                    <div class="unit-head-info">
                      <span class="unit-head-tag">MÓDULO ${modId.toUpperCase()} · ${sessionCount} SESIONES</span>
                      <h4 class="unit-head-title">${firstTitle}</h4>
                      ${eq ? `<p class="unit-head-eq">“${eq}”</p>` : ''}
                      
                      <div style="margin-top: 10px; max-width: 400px;">
                        <div class="progress-track" style="height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
                          <div class="progress-fill" style="width: ${p.pct}%; height: 100%; background: var(--navy); transition: width 0.3s ease;"></div>
                        </div>
                        <div style="font-size: 11px; color: var(--ink-muted); margin-top: 4px;">
                          ${p.done} de ${p.total} ${isEs ? 'sesiones completadas' : 'sessions completed'} (${p.pct}%)
                        </div>
                      </div>
                    </div>

                    <div class="unit-head-right">
                      <span class="unit-status-chip ${p.status}">${stateLabel}</span>
                      <div style="display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; color: var(--navy); margin-top: 8px;">
                        <span>${isExpanded ? (isEs ? 'Ocultar' : 'Hide') : (isEs ? 'Ver sesiones' : 'View sessions')}</span>
                        <span class="unit-expand-arrow ${isExpanded ? 'open' : ''}" id="arrow-${modId}">${isExpanded ? '▼' : '▶'}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Inline Accordion Sessions List -->
                  <div class="module-sessions-container" id="sessions-${modId}" style="display: ${isExpanded ? 'block' : 'none'};">
                    <div class="sessions-subheading">
                      📖 ${isEs ? `Sesiones & Cápsulas del Módulo (${sessionCount} Sesiones de 60 min)` : `Module Sessions & Capsules (${sessionCount} 60-min sessions)`}
                    </div>

                    ${(modData.sessions || []).map(sess => {
                      const isDone = localStorage.getItem(`chanak_done_${modId}_s${sess.number}`) === 'done';
                      return `
                        <div class="session-row-item ${isDone ? 'is-done' : ''}">
                          <div class="session-num-badge">${sess.number}</div>
                          <div class="session-meta-text">
                            <div class="session-row-title">${sess.title || `Sesión ${sess.number}`}</div>
                            ${sess.objective ? `<div class="session-row-obj"><b>🎯 ${isEs ? 'Objetivo:' : 'Objective:'}</b> ${sess.objective}</div>` : ''}
                            ${sess.keyActivity ? `<div class="session-row-obj" style="margin-top: 2px;"><b>⚡ ${isEs ? 'Actividad:' : 'Activity:'}</b> ${sess.keyActivity}</div>` : ''}
                          </div>

                          <div style="display: flex; align-items: center; gap: 10px;">
                            ${isDone ? `
                              <span style="font-size: 12px; font-weight: 700; color: var(--green);">
                                ✓ ${isEs ? 'Completada' : 'Done'}
                              </span>
                            ` : `
                              <span style="font-size: 11px; color: var(--gold); font-weight: 600;">
                                +10 🪙
                              </span>
                            `}
                            <button class="btn-open-session ${isDone ? 'btn-review' : ''}" onclick="openCurriculumModule('${modId}', ${sess.number})">
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
                <div style="font-size: 12px; font-weight: 700; color: var(--navy); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">
                  ⚡ ${isEs ? 'Micro-Cápsulas Interactivas de Práctica (4 Pasos + Quiz)' : 'Interactive Practice Micro-Capsules (4 Steps + Quiz)'}
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
                  ${q.capsules.map(capKey => {
                    const cap = CAPSULES_DATA[capKey];
                    if (!cap) return '';
                    const isDone = localStorage.getItem(`chanak_cap_${capKey}`) === 'done';
                    const capTitle = cap.title ? (cap.title[state.lang] || cap.title.es || cap.title) : capKey;
                    return `
                      <div class="session-row-item ${isDone ? 'is-done' : ''}" style="margin: 0; background: #ffffff;">
                        <div style="display: flex; align-items: center; gap: 8px; flex: 1;">
                          <span style="font-size: 20px;">${cap.icon || '🚀'}</span>
                          <div>
                            <div style="font-size: 13px; font-weight: 600; color: var(--navy);">${capTitle}</div>
                            <div style="font-size: 11px; color: var(--ink-muted);">4 pasos interactivos · Quiz bíblico/ético</div>
                          </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                          ${isDone ? `<span style="font-size: 11px; font-weight: 700; color: var(--green);">✓ Hecho</span>` : `<span style="font-size: 11px; color: var(--gold); font-weight: 700;">+10 🪙</span>`}
                          <button class="btn-open-session ${isDone ? 'btn-review' : ''}" style="padding: 4px 10px; font-size: 11px;" onclick="openCapsule('${capKey}')">
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
            <div class="quarter-card" style="margin-top: 14px; background: #ffffff;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
                <span class="quarter-badge" style="background: var(--paper); border: 1px solid var(--line); color: var(--navy);">
                  📁 ${isEs ? `Entregable Oficial del Trimestre ${q.id}` : `Official Deliverable ${q.id}`}
                </span>
                <span style="font-size: 12px; font-weight: 700; color: var(--gold);">
                  📂 ${q.folder || ''}
                </span>
              </div>

              <h4 style="font-size: 16px; color: var(--navy); margin-bottom: 6px;">
                ${qProject}
              </h4>

              ${trackQProject ? `
                <div style="background: var(--green-light); border-left: 3px solid var(--green); padding: 8px 12px; border-radius: 0 6px 6px 0; font-size: 12px; color: #166534; margin-bottom: 10px;">
                  <b>${currentTrack.icon} ${isEs ? 'Aplicación en tu Track' : 'Application in your Track'}:</b> ${trackQProject}
                </div>
              ` : ''}

              <div class="deliverable-box">
                <b style="font-size: 11px; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 4px;">
                  📄 ${isEs ? 'Archivos requeridos en tu Carpeta Drive:' : 'Required files in your Drive folder:'}
                </b>
                <ul class="deliverable-files">
                  ${qFiles.map(f => `<li>📄 <code>${f}</code></li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <!-- 8. Rubric & Accreditation Footer Card -->
    <div style="background: #f8fafc; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 22px 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
      <div>
        <span class="eyebrow-tag" style="color: var(--navy); margin: 0;">ACREDITACIÓN FLDOE #134620</span>
        <h4 style="font-size: 17px; color: var(--navy); margin: 4px 0 2px; font-family: var(--font-display);">
          🎓 Rúbrica Oficial de Evaluación 40 / 30 / 30
        </h4>
        <p style="font-size: 13px; color: var(--ink-muted); margin: 0;">
          40% Cuaderno de Vida & Reflexiones · 30% Proyecto Trimestral & Evidencias Drive · 30% Autoevaluación & Asistencia Virtual
        </p>
      </div>

      <button class="btn-interactive" onclick="setViewMode('expediente')" style="font-size: 13px; padding: 10px 18px; background: #fff;">
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

  if (state.isSis && state.assignedLevel && modData.level && modData.level !== state.assignedLevel) {
    alert(`🔒 Módulo bloqueado.\n\nEste módulo pertenece al nivel ${modData.level.toUpperCase()}. Tu nivel actual asignado en el SIS es ${state.assignedLevel.toUpperCase()}.`);
    return;
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
    awardCoins('reto_submitted', `sub:${state.activeSubmittingReto}`, `Reto Enviado (${state.activeSubmittingReto})`);
    closeSubmissionModal();
  }
}

// ============================================================================
// 6. VISTA: CATÁLOGO JUNIOR (8–13 AÑOS · 80 RETOS)
// ============================================================================
function filterJuniors(cat) {
  state.juniorsFilter = cat;
  renderCurrentView();
}

function renderJuniorsStage(container) {
  const isEs = state.lang === 'es';
  const filter = state.juniorsFilter;
  // Los filtros se derivan de los propios retos. Antes estaban escritos a mano
  // con claves que no existían en los datos, así que todos devolvían cero.
  const tracks = new Map();
  JUNIORS_RETOS.forEach(r => {
    if (r.track && !tracks.has(r.track)) tracks.set(r.track, r.trackLabel);
  });

  const categories = [
    { key: 'all', label: isEs ? 'Todos los retos' : 'All challenges' },
    ...Array.from(tracks, ([key, label]) => ({
      key,
      label: label?.[state.lang] || label?.es || key,
    })),
  ];

  const filteredRetos = filter === 'all'
    ? JUNIORS_RETOS
    : JUNIORS_RETOS.filter(r => r.track === filter);

  container.innerHTML = `
    <!-- Header Juniors -->
    <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 26px; margin-bottom: 24px; box-shadow: var(--shadow-sm);">
      <span class="eyebrow-tag" style="color: var(--green); margin: 0;">PORTAL CHANAK · OFF-CAMPUS JUNIORS</span>
      <h3 style="font-size: 26px; color: var(--navy); margin: 6px 0 4px; font-family: var(--font-display);">
        🌿 Catálogo de Retos Junior (8–13 Años)
      </h3>
      <p style="font-size: 14px; color: var(--ink-muted); margin: 0;">
        ${JUNIORS_RETOS.length} ${isEs
          ? 'mini-proyectos de carácter, mayordomía, ciencia y servicio para estudiantes en etapa elemental e intermedia.'
          : 'mini-projects in character, stewardship, science and service for elementary and middle school students.'}
      </p>
    </div>

    <!-- Filter Buttons -->
    <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
      ${categories.map(c => `
        <button class="track-filter-btn ${filter === c.key ? 'active' : ''}" onclick="filterJuniors('${c.key}')">
          ${c.label}
        </button>
      `).join('')}
    </div>

    <!-- Grid de Retos -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin-bottom: 32px;">
      ${filteredRetos.map(r => {
        const isDone = localStorage.getItem(`chanak_jreto_${r.id}`) === 'done';
        const trackLabel = r.trackLabel?.[state.lang] || r.trackLabel?.es || r.track || '';
        const title = r.title?.[state.lang] || r.title?.es || r.id;
        const desc = r.desc?.[state.lang] || r.desc?.es || '';
        const coins = r.coins || COIN_AMOUNTS.reto_submitted;

        return `
          <article class="module-card is-${isDone ? 'completado' : 'pendiente'}">
            <header class="module-card__top">
              <span class="module-card__id">
                ${r.icon || '🌿'} ${trackLabel}${r.retoNum ? ` · ${isEs ? 'Reto' : 'Challenge'} ${r.retoNum}` : ''}
              </span>
              <span class="module-card__state">
                ${isDone ? (isEs ? '✓ Enviado' : '✓ Submitted') : `+${coins} 🪙`}
              </span>
            </header>

            <h4 class="module-card__title">${title}</h4>
            ${desc ? `<p class="module-card__eq">${desc}</p>` : ''}

            <button class="btn-primary module-card__cta" style="margin-top: auto;"
                    onclick="openSubmissionModal('${r.id}', ${coins})">
              ${isDone
                ? (isEs ? 'Ver mi entrega →' : 'View my submission →')
                : (isEs ? 'Subir evidencia →' : 'Upload evidence →')}
            </button>
          </article>
        `;
      }).join('')}
    </div>
  `;
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

