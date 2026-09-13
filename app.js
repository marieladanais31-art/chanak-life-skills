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
  RIASEC_TEST_DATA
} from './data.js';

// ---------------- Application State ----------------
const state = {
  lang: 'es',
  mode: 'portal', // 'portal' or 'dual'
  isEmbed: false,
  viewMode: 'capsulas', // 'capsulas', 'cuaderno', 'test-dones', 'habitos', 'expediente', 'juniors', 'transversales'
  currentLevel: 'seedling', // 'seedling', 'explorer', 'builder', 'launch'
  assignedLevel: null,
  roleView: 'student', // 'student' or 'mentor'
  isMentorUnlocked: false,
  userRole: 'student',

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
window.selectHighSchoolLevel = selectHighSchoolLevel;
window.selectStage = selectStage;
window.filterJuniors = filterJuniors;

window.openCapsule = openCapsule;
window.closeCapsuleModal = closeCapsuleModal;
window.capsuleNextStep = capsuleNextStep;
window.capsulePrevStep = capsulePrevStep;
window.checkQuizOpt = checkQuizOpt;
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

    if (params.get('role')) {
      state.userRole = params.get('role');
      if (['tutor', 'mentor', 'coordinator', 'admin', 'super_admin'].includes(state.userRole)) {
        state.isMentorUnlocked = true;
        state.roleView = 'mentor';
      }
    }
  } else {
    state.isSis = false;
    state.assignedLevel = null;
    if (params.get('level')) {
      state.currentLevel = params.get('level').toLowerCase();
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
    if (['capsulas', 'cuaderno', 'test-dones', 'habitos', 'expediente', 'juniors', 'transversales'].includes(v)) {
      state.viewMode = v;
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
function switchRoleView(role) {
  if (role === 'student') {
    state.roleView = 'student';
    updateRoleUI();
    renderCurrentView();
    return;
  }

  if (role === 'mentor') {
    if (state.isMentorUnlocked || ['tutor', 'mentor', 'coordinator', 'admin', 'super_admin'].includes(state.userRole)) {
      state.roleView = 'mentor';
      updateRoleUI();
      renderCurrentView();
    } else {
      openMentorPinModal();
    }
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

function submitMentorPin() {
  const input = document.getElementById('mentor-pin-input');
  const errorEl = document.getElementById('mentor-pin-error');
  const pinVal = (input?.value || '').trim();

  if (pinVal === 'CHANAK2026') {
    state.isMentorUnlocked = true;
    state.roleView = 'mentor';
    closeMentorPinModal();
    updateRoleUI();
    renderCurrentView();
    showCoinToast('🧑‍🏫 Vista Mentor Desbloqueada con Éxito');
  } else {
    if (errorEl) errorEl.style.display = 'block';
  }
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
  if (state.isSis && state.assignedLevel && levelKey !== state.assignedLevel) {
    alert(`🔒 Nivel ${levelKey.toUpperCase()} bloqueado.\n\nTu nivel activo asignado en el SIS es ${state.assignedLevel.toUpperCase()}.\nLos demás niveles estarán disponibles cuando avances a esa etapa académica.`);
    return;
  }
  state.currentLevel = levelKey;
  updateNavigationUI();
  renderCurrentView();
}

function updateNavigationUI() {
  const tabs = ['capsulas', 'cuaderno', 'test-dones', 'habitos', 'expediente', 'juniors', 'transversales'];
  tabs.forEach(tab => {
    const el = document.getElementById(`tab-${tab}`);
    if (el) el.classList.toggle('active', state.viewMode === tab);
  });

  const subLevelsBar = document.getElementById('sub-levels-bar');
  if (subLevelsBar) {
    const showSubBar = ['capsulas', 'cuaderno'].includes(state.viewMode);
    subLevelsBar.style.display = showSubBar ? 'flex' : 'none';

    const levelsMeta = [
      { id: 'seedling', icon: '🌱', label: 'Seedling · 14 años (8th/9th)' },
      { id: 'explorer', icon: '🧭', label: 'Explorer · 15 años (10th)' },
      { id: 'builder',  icon: '🔨', label: 'Builder · 16 años (11th)' },
      { id: 'launch',   icon: '🚀', label: 'Launch · 17 años (12th)' }
    ];

    levelsMeta.forEach(lvl => {
      const el = document.getElementById(`subtab-${lvl.id}`);
      if (el) {
        const isAssigned = !state.isSis || !state.assignedLevel || (state.assignedLevel === lvl.id);
        const isActive = (state.currentLevel === lvl.id);
        el.classList.toggle('active', isActive);

        if (state.isSis && state.assignedLevel && !isAssigned) {
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

  switch (state.viewMode) {
    case 'cuaderno':
      renderCuadernoDeVidaView(container);
      break;
    case 'test-dones':
      renderRiasecTestView(container);
      break;
    case 'habitos':
      renderInteractiveTools(container);
      break;
    case 'expediente':
      renderExpedienteUniversitario(container);
      break;
    case 'juniors':
      if (state.mode !== 'dual') {
        renderJuniorsStage(container);
      } else {
        renderCapsulesAndChallengesView(container, 'seedling');
      }
      break;
    case 'transversales':
      renderTransversalModules(container);
      break;
    case 'capsulas':
    default:
      renderCapsulesAndChallengesView(container, state.currentLevel);
      break;
  }
}

// ============================================================================
// 1. VISTA: CÁPSULAS INTERACTIVAS & RETOS (Vista Principal de Nivel)
// ============================================================================
function renderCapsulesAndChallengesView(container, stageKey) {
  const isEs = state.lang === 'es';
  const isMentor = state.roleView === 'mentor';

  // Bloqueo estricto si el nivel no coincide con el asignado por el SIS
  if (state.isSis && state.assignedLevel && stageKey !== state.assignedLevel) {
    container.innerHTML = `
      <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 48px 24px; text-align: center; max-width: 600px; margin: 40px auto; box-shadow: var(--shadow-sm);">
        <div style="font-size: 52px; margin-bottom: 16px;">🔒</div>
        <h3 style="font-size: 22px; color: var(--navy); margin-bottom: 10px; font-family: var(--font-display);">
          ${isEs ? `Nivel ${stageKey.toUpperCase()} Bloqueado` : `Level ${stageKey.toUpperCase()} Locked`}
        </h3>
        <p style="color: var(--ink-muted); font-size: 15px; line-height: 1.6; margin-bottom: 24px;">
          ${isEs 
            ? `Este nivel está reservado para etapas posteriores de tu formación académica. Tu nivel actual activo registrado en el SIS es <b>${state.assignedLevel.toUpperCase()}</b>.`
            : `This level is reserved for later academic stages. Your active level registered in the SIS is <b>${state.assignedLevel.toUpperCase()}</b>.`}
        </p>
        <button class="btn-interactive" onclick="selectHighSchoolLevel('${state.assignedLevel}')" style="background: var(--navy); color: #fff; padding: 10px 24px;">
          ${isEs ? `Ir a mi Nivel Asignado (${state.assignedLevel.toUpperCase()}) →` : `Go to my Assigned Level (${state.assignedLevel.toUpperCase()}) →`}
        </button>
      </div>
    `;
    return;
  }

  const levelData = HIGH_SCHOOL_LEVELS[stageKey] || HIGH_SCHOOL_LEVELS.seedling;
  const verse = BIBLE_VERSES[levelData.verseKey];

  container.innerHTML = `
    <!-- Level Hero Card -->
    <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 26px; margin-bottom: 24px; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 8px;">
        <span class="eyebrow-tag" style="color: var(--green); margin: 0;">
          ${isEs ? `NIVEL ${levelData.num} · ${stageKey.toUpperCase()} · ${levelData.age} · ${levelData.gradeUS}` : `LEVEL ${levelData.num} · ${stageKey.toUpperCase()} · ${levelData.gradeUS}`}
        </span>
        <a href="https://drive.google.com/file/d/1tuB-OX7-mwLIpHNHXPS0lSKaSRponaAk/view" target="_blank" class="btn-interactive" style="font-size: 12px;">
          📄 ${isEs ? 'Guía PDF Oficial' : 'Official PDF Guide'} ↗
        </a>
      </div>
      <h3 style="font-size: 26px; color: var(--navy); margin-bottom: 6px; font-family: var(--font-display);">
        ${levelData.title[state.lang]}
      </h3>
      <p style="font-size: 15px; color: var(--ink-muted); margin: 0;">
        ${levelData.subtitle[state.lang]}
      </p>
    </div>

    <!-- Biblical Devotional Card -->
    <div class="devotional-card" style="margin-bottom: 28px;">
      <div class="devotional-ref">
        📖 <span>${verse.ref}</span> · ${isEs ? 'Texto Bíblico del Nivel' : 'Key Scripture'}
      </div>
      <div class="devotional-text">
        "${verse.text[state.lang]}"
      </div>
      <div class="devotional-applied">
        💡 <b>${isEs ? 'Devocional Aplicado:' : 'Applied Devotional:'}</b> ${verse.context[state.lang]}
      </div>
    </div>

    <!-- Special Highlight for Explorer Q1: Test "Quién Soy" -->
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
        <button class="btn-primary" style="background: var(--gold); color: #fff; border: none; padding: 12px 22px; font-size: 14px;" onclick="setViewMode('test-dones')">
          Hacer Test Vocacional (+50 🪙) →
        </button>
      </div>
    ` : ''}

    <!-- CÁPSULAS INTERACTIVAS DEL NIVEL -->
    <div style="margin-bottom: 36px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
        <div>
          <h3 style="font-size: 22px; color: var(--navy); font-family: var(--font-display); margin: 0 0 4px;">
            🚀 ${isEs ? 'Cápsulas Interactivas de Aprendizaje' : 'Interactive Learning Capsules'}
          </h3>
          <p style="font-size: 13px; color: var(--ink-muted); margin: 0;">
            ${isEs ? 'Micro-lecciones guiadas en 4 pasos: Apertura, Principio, Quiz interactivo y Reflexión personal.' : 'Guided 4-step micro-lessons with quiz and personal reflection.'}
          </p>
        </div>
        <span class="badge" style="background: var(--green-light); color: var(--green); font-weight: 700; font-size: 12px; padding: 6px 14px;">
          +10 🪙 ChanakCoins por cápsula
        </span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
        ${Array.from(new Set(levelData.quarters.flatMap(q => q.capsules || []))).map(capKey => {
          const cap = CAPSULES_DATA[capKey];
          if (!cap) return '';
          const isDone = localStorage.getItem(`chanak_cap_${capKey}`) === 'done';
          const capTitle = cap.title ? (cap.title[state.lang] || cap.title.es || cap.title) : capKey;
          const capProject = cap.project ? (cap.project[state.lang] || cap.project.es || cap.project) : '';
          const stepsCount = (cap.steps && cap.steps.length) || 4;

          return `
            <div class="reading-card" style="padding: 22px; display: flex; flex-direction: column; justify-content: space-between; border-top: 4px solid ${isDone ? 'var(--green)' : 'var(--navy)'};">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                  <span class="badge" style="background: var(--paper); border: 1px solid var(--line); font-size: 11px; font-weight: 700; color: var(--navy);">
                    ${cap.tag ? cap.tag.toUpperCase() : 'CÁPSULA'} · ${stepsCount} PASOS
                  </span>
                  <span class="badge" style="background: ${isDone ? 'var(--green-light)' : 'var(--gold-light)'}; color: ${isDone ? 'var(--green)' : 'var(--gold)'}; font-size: 11px; font-weight: 700;">
                    ${isDone ? '✓ Completada (+10 🪙)' : '+10 🪙 ChanakCoins'}
                  </span>
                </div>

                <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 8px; font-family: var(--font-display);">
                  ${cap.icon || '🚀'} ${capTitle}
                </h4>
                
                ${capProject ? `
                  <div style="background: var(--paper); border-radius: 6px; padding: 10px 12px; font-size: 12px; color: var(--ink-muted); margin-bottom: 14px; line-height: 1.5;">
                    📌 <b>Entregable Asociado:</b> ${capProject}
                  </div>
                ` : ''}
              </div>

              <button class="btn-primary" style="width: 100%; justify-content: center; ${isDone ? 'background: var(--green);' : ''}" onclick="openCapsule('${capKey}')">
                ${isDone ? '✓ Repasar Cápsula (+10 🪙)' : '🚀 Iniciar Cápsula Interactiva →'}
              </button>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- PROYECTOS Y ENTREGABLES POR TRIMESTRE (Q1, Q2, Q3) -->
    <div style="margin-bottom: 32px;">
      <div style="margin-bottom: 16px;">
        <h3 style="font-size: 20px; color: var(--navy); font-family: var(--font-display); margin: 0 0 4px;">
          📁 ${isEs ? 'Proyectos y Entregables por Trimestre (Drive)' : 'Quarterly Projects & Drive Deliverables'}
        </h3>
        <p style="font-size: 13px; color: var(--ink-muted); margin: 0;">
          ${isEs ? 'Evidencias requeridas para la carpeta Drive institucional y rúbrica 40/30/30.' : 'Required evidences for institutional Drive folder and 40/30/30 rubric.'}
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
        ${levelData.quarters.map(q => {
          return `
            <div class="quarter-card" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                  <span class="quarter-badge">${q.id} · Trimestre</span>
                  <span style="font-size: 12px; font-weight: 700; color: var(--gold);">
                    📁 Entregables Drive
                  </span>
                </div>
                <h4 style="font-size: 17px; color: var(--navy); margin-bottom: 6px;">${q.title[state.lang]}</h4>
                <p style="font-size: 13px; color: var(--ink-muted); margin-bottom: 14px; line-height: 1.5;">
                  ${q.project[state.lang]}
                </p>

                <div class="deliverable-box" style="margin-bottom: 14px;">
                  <b style="font-size: 11px; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 4px;">
                    📂 Carpeta Drive: <code>${q.folder}</code>
                  </b>
                  <ul class="deliverable-files">
                    ${q.files.map(f => `<li>📄 <code>${f}</code></li>`).join('')}
                  </ul>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Lecturas Clave del Nivel -->
    <div style="margin: 32px 0 14px; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--navy);">
      📚 ${isEs ? 'Lecturas Clave del Nivel:' : 'Key Level Readings:'}
    </div>
    <div class="readings-grid">
      ${levelData.books.map(bKey => {
        const book = BOOKS[bKey];
        if (!book) return '';
        return `
          <div class="reading-card">
            <span class="reading-tag">${book.audience ? book.audience[state.lang] : (isEs ? 'Lectura Recomendada' : 'Recommended Reading')}</span>
            <h4>⚡ ${book.title[state.lang]}</h4>
            <div class="author">${book.author}</div>
            <div class="key-point">${book.key[state.lang]}</div>
            <div class="quote-box">"${book.quote[state.lang]}"</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ============================================================================
// 2. VISTA: CUADERNO DE VIDA (19 Módulos Curriculares)
// ============================================================================
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
        const isDone = localStorage.getItem(`chanak_mod_${modId}`) === 'done';
        const sessionCount = (modData.sessions && modData.sessions.length) || 8;
        const firstTitle = (modData.sessions && modData.sessions[0] && modData.sessions[0].title) || modId;
        const qTag = modData.quarter || 'Módulo';
        const eq = (modData.teacherGuide && modData.teacherGuide.essentialQuestion) || '';
        const standards = (modData.teacherGuide && modData.teacherGuide.floridaStandards) || [];

        return `
          <div class="reading-card" style="padding: 22px; display: flex; flex-direction: column; justify-content: space-between; border-top: 4px solid var(--green);">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span class="badge" style="background: var(--green-light); color: var(--green); font-size: 11px; font-weight: 700;">
                  ${modId.toUpperCase()} · ${qTag}
                </span>
                ${isDone ? `
                  <span class="badge" style="background: var(--navy); color: #fff; font-size: 11px;">
                    ✓ ${isEs ? 'Completado' : 'Completed'}
                  </span>
                ` : `
                  <span class="badge" style="background: var(--gold-light); color: var(--gold); font-size: 11px;">
                    ${sessionCount} ${isEs ? 'Sesiones' : 'Sessions'}
                  </span>
                `}
              </div>

              <h4 style="font-size: 17px; color: var(--navy); margin-bottom: 6px; font-family: var(--font-display);">
                ${firstTitle}
              </h4>
              <p style="font-size: 13px; color: var(--ink-muted); line-height: 1.5; margin-bottom: 12px;">
                ${eq ? `<b>${isEs ? 'Pregunta Esencial' : 'Essential Question'}:</b> "${eq}"` : (isEs ? 'Sesiones estructuradas con cuaderno de trabajo y guía docente.' : 'Structured sessions with student notebook.')}
              </p>

              <!-- Capa exclusiva de Vista Mentor -->
              ${isMentor ? `
                <div style="background: #f0fdf4; border: 1px dashed #86efac; border-radius: 8px; padding: 10px 12px; margin-bottom: 14px; font-size: 12px; color: #166534;">
                  <b>🧑‍🏫 FLDOE Durable Skills:</b> ${standards.join(', ')}<br>
                  <b>⏱️ Minutado:</b> 8 sesiones × 60 min
                </div>
              ` : ''}
            </div>

            <button class="btn-primary" style="width: 100%; justify-content: center;" onclick="openCurriculumModule('${modId}')">
              📓 ${isEs ? 'Abrir Módulo y Cuaderno →' : 'Open Module & Notebook →'}
            </button>
          </div>
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

  // Acreditar 50 ChanakCoins vía RPC con clave de idempotencia determinista
  const studentId = state.studentId || 'anon';
  const schoolYear = state.schoolYear || '2026-2027';
  const idempotencyKey = `ls:test-vocacional:${studentId}:${schoolYear}:explorer:q1`;
  awardCoins(50, 'Test de Dones y Vocación (Explorer Q1)', idempotencyKey);

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
      ${Object.entries(EXPEDIENTE_CATEGORIES).map(([catKey, catData]) => `
        <div class="reading-card" style="padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span class="badge" style="background: var(--navy-light); color: #fff; font-size: 11px;">
              ${catData.icon} ${catKey.toUpperCase()}
            </span>
            <span style="font-size: 11px; color: var(--ink-muted);">${catData.items.length} Entregables</span>
          </div>
          <h4 style="font-size: 16px; color: var(--navy); margin-bottom: 6px;">${catData.title[state.lang]}</h4>
          <p style="font-size: 12px; color: var(--ink-muted); line-height: 1.5; margin-bottom: 12px;">
            ${catData.desc[state.lang]}
          </p>
          <ul style="font-size: 12px; color: var(--ink); padding-left: 18px; line-height: 1.6;">
            ${catData.items.map(item => `<li>${item[state.lang]}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
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
  awardCoins(10, `Cápsula Completada (${capKey})`, `cap_${capKey}`);
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
function openCurriculumModule(modId) {
  const modData = EXTENSION_CAPSULES_DATA[modId];
  if (!modData) return;

  if (state.isSis && state.assignedLevel && modData.level && modData.level !== state.assignedLevel) {
    alert(`🔒 Módulo bloqueado.\n\nEste módulo pertenece al nivel ${modData.level.toUpperCase()}. Tu nivel actual asignado en el SIS es ${state.assignedLevel.toUpperCase()}.`);
    return;
  }

  state.activeModuleId = modId;
  state.activeSessionNum = 1;
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
  awardCoins(10, `Guardado en Cuaderno (${modId.toUpperCase()} S${sessionNum})`, storageKey);
}

function completeModuleSession(modId, sessionNum) {
  const modData = EXTENSION_CAPSULES_DATA[modId];
  if (!modData) return;

  localStorage.setItem(`chanak_done_${modId}_s${sessionNum}`, 'done');
  awardCoins(10, `Sesión ${sessionNum} completada (${modId.toUpperCase()})`, `done_${modId}_s${sessionNum}`);

  if (sessionNum < (modData.sessions?.length || 1)) {
    selectModuleSession(sessionNum + 1);
  } else {
    finishCurriculumModule(modId);
  }
}

function finishCurriculumModule(modId) {
  localStorage.setItem(`chanak_mod_${modId}`, 'done');
  awardCoins(25, `Módulo ${modId.toUpperCase()} Completado`, `mod_${modId}`);
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
          ${currentSession.commonError ? `<div><strong>⚠️ Error Común Docente:</strong> ${currentSession.commonError}</div>` : ''}
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

async function awardCoins(amount, reason = 'Actividad Life Skills', refKey = '') {
  addCoins(amount);
  showCoinToast(`+${amount} ChanakCoins · ${reason}`);

  if (state.token && state.studentId) {
    try {
      const SUPABASE_URL = 'https://gepsbesbhsxfyxymemim.supabase.co';
      const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlcHNiZXNiaHN4Znl4eW1lbWltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNjg1MjgsImV4cCI6MjA4Mzc0NDUyOH0.VQ6q4ex-tWp2Nr2YK-Sd7PPGCZgcQvQUmTGNNjZtp5Q';
      
      const idempotencyKey = refKey || `ls_${state.studentId}_${Date.now()}`;
      const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/award_life_skills_coins`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({
          p_token: state.token,
          p_amount: amount,
          p_reason: reason,
          p_idempotency_key: idempotencyKey
        })
      });
      const data = await res.json();
      console.log('ChanakCoins sync with SIS RPC:', data);
    } catch (err) {
      console.warn('Could not sync coins with SIS RPC:', err);
    }
  }

  if (window.parent && window.parent !== window) {
    window.parent.postMessage({
      type: 'CHANAK_COINS_AWARDED',
      amount,
      reason,
      studentId: state.studentId,
      timestamp: new Date().toISOString()
    }, '*');
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

function openSubmissionModal(retoId, reward = 30) {
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
    awardCoins(30, `Reto Enviado (${state.activeSubmittingReto})`, `sub_${state.activeSubmittingReto}`);
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
  const categories = [
    { key: 'all', label: isEs ? 'Todos los Retos' : 'All Challenges' },
    { key: 'caracter', label: isEs ? '🌱 Carácter & Fe' : 'Character & Faith' },
    { key: 'habitos', label: isEs ? '⏱️ Hábitos & Orden' : 'Habits & Order' },
    { key: 'creatividad', label: isEs ? '🎨 Creatividad & Arte' : 'Creativity & Art' },
    { key: 'servicio', label: isEs ? '🤝 Servicio Familiar' : 'Family Service' },
    { key: 'finanzas', label: isEs ? '🪙 Emprendimiento' : 'Entrepreneurship' }
  ];

  const filteredRetos = filter === 'all' 
    ? JUNIORS_RETOS 
    : JUNIORS_RETOS.filter(r => r.category === filter);

  container.innerHTML = `
    <!-- Header Juniors -->
    <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 26px; margin-bottom: 24px; box-shadow: var(--shadow-sm);">
      <span class="eyebrow-tag" style="color: var(--green); margin: 0;">PORTAL CHANAK · OFF-CAMPUS JUNIORS</span>
      <h3 style="font-size: 26px; color: var(--navy); margin: 6px 0 4px; font-family: var(--font-display);">
        🌿 Catálogo de Retos Junior (8–13 Años)
      </h3>
      <p style="font-size: 14px; color: var(--ink-muted); margin: 0;">
        80 mini-proyectos de carácter, mayordomía, arte y servicio organizados para estudiantes en etapa elemental e intermedia.
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
        return `
          <div class="reading-card" style="padding: 20px; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span class="badge" style="background: var(--paper); border: 1px solid var(--line); font-size: 11px;">
                  ${r.stage.toUpperCase()} · ${r.category.toUpperCase()}
                </span>
                <span style="font-size: 11px; font-weight: 700; color: var(--gold);">
                  +${r.coins || 15} 🪙
                </span>
              </div>
              <h4 style="font-size: 16px; color: var(--navy); margin-bottom: 6px;">
                #${r.id}: ${r.title[state.lang]}
              </h4>
              <p style="font-size: 13px; color: var(--ink-muted); line-height: 1.5; margin-bottom: 12px;">
                ${r.desc[state.lang]}
              </p>
            </div>
            <button class="btn-interactive" style="width: 100%; justify-content: center; ${isDone ? 'background:#f0fdf4; border-color:#86efac; color:var(--green);' : ''}" onclick="openSubmissionModal('${r.id}', ${r.coins || 15})">
              ${isDone ? '✓ Reto Enviado (+🪙)' : '🚀 Subir Evidencia →'}
            </button>
          </div>
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

