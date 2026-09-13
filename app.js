/* =====================================================================
   Chanak Life Skills & Leadership Studio — Application Controller
   Unified Engine: Dual Diploma LMS + Portal Chanak + Interactive Repos
   ===================================================================== */

import {
  BIBLE_VERSES,
  BOOKS,
  JUNIORS_RETOS,
  HIGH_SCHOOL_LEVELS,
  CAPSULES_DATA,
  EXPEDIENTE_CATEGORIES,
  EXTENSION_CAPSULES_DATA
} from './data.js';

// ---------------- Application State ----------------
const state = {
  lang: 'es',
  mode: 'portal', // 'portal' or 'dual'
  isEmbed: false,
  viewMode: 'niveles', // 'niveles', 'herramientas', 'expediente', 'tracks', 'rubrica', 'juniors', 'transversales'
  currentLevel: 'seedling', // 'seedling', 'explorer', 'builder', 'launch'
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
  mentorMode: false,
  userAgeTier: 'standard', // 'standard' or 'lower'

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
window.calculateGrade = calculateGrade;
window.copyFeedbackText = copyFeedbackText;

// Interactive Habit Tracker & Coat of Arms handlers
window.toggleTrackerDay = toggleTrackerDay;
window.updateTrackerHabit = updateTrackerHabit;
window.updateCoatOfArms = updateCoatOfArms;

// Curriculum Modules & Sessions Handlers
window.openCurriculumModule = openCurriculumModule;
window.setModuleMentorMode = setModuleMentorMode;
window.setModuleAgeTier = setModuleAgeTier;
window.selectModuleSession = selectModuleSession;
window.saveNotebookResponse = saveNotebookResponse;
window.completeModuleSession = completeModuleSession;
window.finishCurriculumModule = finishCurriculumModule;
window.showCoinToast = showCoinToast;

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
    state.viewMode = params.get('view');
  }

  if (params.get('level')) {
    state.currentLevel = params.get('level');
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
    if (state.viewMode === 'juniors') state.viewMode = 'niveles';
  } else if (state.isSis && state.studentName) {
    if (contextPill) {
      contextPill.textContent = `🎓 Estudiante: ${decodeURIComponent(state.studentName)}`;
      contextPill.style.background = '#dbeafe';
      contextPill.style.color = '#1e40af';
      contextPill.style.borderColor = '#93c5fd';
    }
  } else {
    if (contextPill) contextPill.textContent = 'Modo Portal SIS';
    if (params.get('stage') === 'juniors') {
      state.viewMode = 'juniors';
    }
  }

  updateHeaderWallet();
  updateNavigationUI();
  renderCurrentView();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
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
    ? 'Formación de carácter, hábitos, vocación, finanzas y liderazgo con cosmovisión bíblica. Construye tu expediente universitario a lo largo de cuatro años.'
    : 'Character formation, habits, vocation, finance, and leadership with a Biblical worldview. Build your university dossier across four years.';
  
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
  state.currentLevel = levelKey;
  state.viewMode = 'niveles';
  updateNavigationUI();
  renderCurrentView();
}

function updateNavigationUI() {
  const tabs = ['niveles', 'herramientas', 'expediente', 'tracks', 'rubrica', 'juniors', 'transversales'];
  tabs.forEach(tab => {
    const el = document.getElementById(`tab-${tab}`);
    if (el) el.classList.toggle('active', state.viewMode === tab);
  });

  const subLevelsBar = document.getElementById('sub-levels-bar');
  if (subLevelsBar) {
    subLevelsBar.style.display = (state.viewMode === 'niveles') ? 'flex' : 'none';
    const levels = ['seedling', 'explorer', 'builder', 'launch'];
    levels.forEach(lvl => {
      const el = document.getElementById(`subtab-${lvl}`);
      if (el) el.classList.toggle('active', state.currentLevel === lvl);
    });
  }
}

// ---------------- View Router ----------------
function renderCurrentView() {
  const container = document.getElementById('stage-content-area');
  if (!container) return;

  switch (state.viewMode) {
    case 'herramientas':
      renderInteractiveTools(container);
      break;
    case 'expediente':
      renderExpedienteUniversitario(container);
      break;
    case 'juniors':
      if (state.mode !== 'dual') {
        renderJuniorsStage(container);
      } else {
        renderHighSchoolStage(container, 'seedling');
      }
      break;
    case 'tracks':
      renderVocationalTracks(container);
      break;
    case 'rubrica':
      renderRubricView(container);
      break;
    case 'transversales':
      renderTransversalModules(container);
      break;
    case 'niveles':
    default:
      renderHighSchoolStage(container, state.currentLevel);
      break;
  }
}

// ---------------- Interactive Tools View (from Dual Diploma Screenshot 1) ----------------
function renderInteractiveTools(container) {
  const isEs = state.lang === 'es';
  const completedDaysCount = state.trackerDays.filter(Boolean).length;
  const progressPercent = Math.round((completedDaysCount / 21) * 100);

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 24px; margin-bottom: 32px;">
      
      <!-- Card 1: Interactive 21-Day Habit Tracker -->
      <div class="reading-card" style="padding: 26px; border-top: 4px solid var(--navy);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-size: 11px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 0.08em;">
            ⚡ PROYECTO Q2 · SEEDLING
          </span>
          <span class="badge badge-green" style="font-size: 11px;">Interactivo</span>
        </div>
        <h3 style="font-size: 22px; color: var(--navy); margin-bottom: 14px;">
          📅 ${isEs ? 'Tracker de 21 Días' : '21-Day Habit Tracker'}
        </h3>
        
        <label style="display: block; font-size: 12px; font-weight: 700; color: var(--ink-muted); text-transform: uppercase; margin-bottom: 6px;">
          ${isEs ? 'Nombre del hábito (versión 2 minutos):' : 'Habit Name (2-min version):'}
        </label>
        <input type="text" id="habit-name-input" value="${state.trackerHabitName}" oninput="updateTrackerHabit(this.value)" 
          style="width: 100%; padding: 10px 14px; border: 1.5px solid var(--line); border-radius: 8px; font-family: inherit; font-size: 14px; margin-bottom: 16px;">

        <!-- 21 Day Clickable Grid -->
        <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; margin-bottom: 16px;">
          ${state.trackerDays.map((done, idx) => `
            <button onclick="toggleTrackerDay(${idx})" 
              style="border: 1.5px solid ${done ? 'var(--green)' : 'var(--line)'}; background: ${done ? 'var(--green)' : '#fff'}; color: ${done ? '#fff' : 'var(--ink)'}; border-radius: 8px; padding: 10px 4px; font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; cursor: pointer; transition: all 0.15s ease;">
              D${idx + 1}<br>${done ? '✓' : ''}
            </button>
          `).join('')}
        </div>

        <div style="background: var(--paper); border: 1px solid var(--green-border); border-radius: 8px; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 13px; font-weight: 700; color: var(--green);">
            ${completedDaysCount}/21 ${isEs ? 'días' : 'days'} (${progressPercent}%)
          </span>
          <div style="width: 50%; height: 8px; background: var(--line); border-radius: 8px; overflow: hidden;">
            <div style="height: 100%; background: var(--green); width: ${progressPercent}%;"></div>
          </div>
        </div>
      </div>

      <!-- Card 2: Interactive Personal Coat of Arms Builder -->
      <div class="reading-card" style="padding: 26px; border-top: 4px solid var(--gold);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-size: 11px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 0.08em;">
            🛡️ PROYECTO Q1 · SEEDLING
          </span>
          <span class="badge badge-gold" style="font-size: 11px;">Interactivo</span>
        </div>
        <h3 style="font-size: 22px; color: var(--navy); margin-bottom: 14px;">
          🛡️ ${isEs ? 'Escudo de Armas Personal' : 'Personal Coat of Arms'}
        </h3>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;">
          <div>
            <label style="display: block; font-size: 11px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">1. Fe & Principios</label>
            <input type="text" id="coat-fe" value="${state.coatFe}" oninput="updateCoatOfArms()" style="width: 100%; padding: 8px 10px; border: 1.5px solid var(--line); border-radius: 6px; font-size: 12px;">
          </div>
          <div>
            <label style="display: block; font-size: 11px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">2. Raíces & Familia</label>
            <input type="text" id="coat-raices" value="${state.coatRaices}" oninput="updateCoatOfArms()" style="width: 100%; padding: 8px 10px; border: 1.5px solid var(--line); border-radius: 6px; font-size: 12px;">
          </div>
          <div>
            <label style="display: block; font-size: 11px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">3. Talentos & Dones</label>
            <input type="text" id="coat-talentos" value="${state.coatTalentos}" oninput="updateCoatOfArms()" style="width: 100%; padding: 8px 10px; border: 1.5px solid var(--line); border-radius: 6px; font-size: 12px;">
          </div>
          <div>
            <label style="display: block; font-size: 11px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">4. Sueño & Propósito</label>
            <input type="text" id="coat-sueno" value="${state.coatSueno}" oninput="updateCoatOfArms()" style="width: 100%; padding: 8px 10px; border: 1.5px solid var(--line); border-radius: 6px; font-size: 12px;">
          </div>
        </div>

        <!-- Live Coat of Arms Preview -->
        <div style="background: var(--navy); color: #fff; border-radius: 12px; padding: 16px;">
          <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--gold); text-align: center; margin-bottom: 10px; font-weight: 700;">
            VISTA PREVIA DEL ESCUDO
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 12px;">
            <div style="background: rgba(255,255,255,0.08); padding: 10px; border-radius: 8px;" id="prev-coat-fe">
              ✝️ ${state.coatFe}
            </div>
            <div style="background: rgba(255,255,255,0.08); padding: 10px; border-radius: 8px;" id="prev-coat-raices">
              🌳 ${state.coatRaices}
            </div>
            <div style="background: rgba(255,255,255,0.08); padding: 10px; border-radius: 8px;" id="prev-coat-talentos">
              ⚡ ${state.coatTalentos}
            </div>
            <div style="background: rgba(255,255,255,0.08); padding: 10px; border-radius: 8px;" id="prev-coat-sueno">
              🌟 ${state.coatSueno}
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Google Finance Virtual Portfolio Simulator -->
    <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 26px; box-shadow: var(--shadow-sm);">
      <span style="font-size: 11px; font-weight: 700; color: var(--green); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 4px;">
        📊 PROYECTO Q2 · BUILDER · FINANZAS REALES
      </span>
      <h3 style="font-size: 22px; color: var(--navy); margin-bottom: 8px;">
        ${isEs ? 'Simulador de Portfolio Virtual en Google Finance ($10.000 USD)' : 'Google Finance Virtual Portfolio ($10k USD)'}
      </h3>
      <p style="font-size: 13px; color: var(--ink-muted); margin-bottom: 18px;">
        ${isEs ? 'Aprende a distribuir un capital ficticio en activos éticos de tecnología, salud y energías renovables, evaluando dividendos y mayordomía.' : 'Learn to allocate capital across ethical sectors with real metrics.'}
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px;">
        <div style="background: var(--paper); border: 1px solid var(--line); border-radius: 8px; padding: 14px;">
          <b style="font-size: 12px; color: var(--navy); display: block; margin-bottom: 4px;">Empresa 1 (40%):</b>
          <span style="font-size: 13px; color: var(--green); font-weight: 600;">AAPL / MSFT ($4.000)</span>
          <p style="font-size: 11px; color: var(--ink-muted); margin-top: 4px;">Tecnología e Innovación de Alto Impacto</p>
        </div>
        <div style="background: var(--paper); border: 1px solid var(--line); border-radius: 8px; padding: 14px;">
          <b style="font-size: 12px; color: var(--navy); display: block; margin-bottom: 4px;">Empresa 2 (30%):</b>
          <span style="font-size: 13px; color: var(--green); font-weight: 600;">JNJ / PFE ($3.000)</span>
          <p style="font-size: 11px; color: var(--ink-muted); margin-top: 4px;">Salud, Biotecnología y Bienestar</p>
        </div>
        <div style="background: var(--paper); border: 1px solid var(--line); border-radius: 8px; padding: 14px;">
          <b style="font-size: 12px; color: var(--navy); display: block; margin-bottom: 4px;">Empresa 3 (30%):</b>
          <span style="font-size: 13px; color: var(--green); font-weight: 600;">ENPH / NEE ($3.000)</span>
          <p style="font-size: 11px; color: var(--ink-muted); margin-top: 4px;">Energías Renovables y Sostenibilidad</p>
        </div>
      </div>
    </div>
  `;
}

function toggleTrackerDay(index) {
  state.trackerDays[index] = !state.trackerDays[index];
  localStorage.setItem('chanak_tracker_days', JSON.stringify(state.trackerDays));
  renderCurrentView();
}

function updateTrackerHabit(val) {
  state.trackerHabitName = val;
  localStorage.setItem('chanak_habit_name', val);
}

function updateCoatOfArms() {
  state.coatFe = document.getElementById('coat-fe')?.value || '';
  state.coatRaices = document.getElementById('coat-raices')?.value || '';
  state.coatTalentos = document.getElementById('coat-talentos')?.value || '';
  state.coatSueno = document.getElementById('coat-sueno')?.value || '';

  localStorage.setItem('chanak_coat_fe', state.coatFe);
  localStorage.setItem('chanak_coat_raices', state.coatRaices);
  localStorage.setItem('chanak_coat_talentos', state.coatTalentos);
  localStorage.setItem('chanak_coat_sueno', state.coatSueno);

  const pFe = document.getElementById('prev-coat-fe');
  const pRaices = document.getElementById('prev-coat-raices');
  const pTalentos = document.getElementById('prev-coat-talentos');
  const pSueno = document.getElementById('prev-coat-sueno');

  if (pFe) pFe.innerHTML = `✝️ ${state.coatFe}`;
  if (pRaices) pRaices.innerHTML = `🌳 ${state.coatRaices}`;
  if (pTalentos) pTalentos.innerHTML = `⚡ ${state.coatTalentos}`;
  if (pSueno) pSueno.innerHTML = `🌟 ${state.coatSueno}`;
}

// ---------------- Expediente Universitario View (Screenshots 2, 3, 4) ----------------
function renderExpedienteUniversitario(container) {
  const isEs = state.lang === 'es';

  container.innerHTML = `
    <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 24px; margin-bottom: 28px; box-shadow: var(--shadow-sm);">
      <span class="eyebrow-tag" style="color: var(--navy); margin-bottom: 4px;">
        🎓 ${isEs ? 'EXPEDIENTE UNIVERSITARIO · 4 AÑOS DE CONSTRUCCIÓN' : 'COLLEGE DOSSIER · 4-YEAR BUILD'}
      </span>
      <h3 style="font-size: 24px; color: var(--navy); margin-bottom: 6px;">
        ${isEs ? 'Catálogo de Artefactos y Documentación Oficial' : 'Official Artifacts & Dossier Catalog'}
      </h3>
      <p style="font-size: 14px; color: var(--ink-muted);">
        ${isEs ? 'Cada trimestre de secundaria produce evidencias y documentos formales que se acumulan en tu expediente para postulación universitaria en EE.UU., Panamá o Europa.' : 'Official documentation pathway built across 8th–12th grades for college admissions.'}
      </p>
    </div>

    <!-- 6 Artifact Categories -->
    <div style="display: flex; flex-direction: column; gap: 36px;">
      ${EXPEDIENTE_CATEGORIES.map(cat => `
        <div>
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
            <span style="font-size: 24px;">${cat.icon}</span>
            <h4 style="font-size: 19px; color: var(--navy);">${cat.title[state.lang]}</h4>
            <span class="badge" style="background: var(--paper); color: var(--ink-muted); border: 1px solid var(--line); font-size: 11px;">
              ${cat.artifactsCount} ${isEs ? 'artefactos' : 'artifacts'}
            </span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px;">
            ${cat.items.map(item => {
              let badgeColor = 'var(--green)';
              let badgeBg = 'var(--green-light)';
              if (item.level === 'builder') { badgeColor = '#1f7a8c'; badgeBg = '#e0f0f5'; }
              if (item.level === 'launch') { badgeColor = '#b3821a'; badgeBg = '#fbf5e6'; }

              return `
                <div class="reading-card" style="padding: 18px; display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                      <span class="badge" style="background: ${badgeBg}; color: ${badgeColor}; font-size: 11px; padding: 2px 8px;">
                        ${item.levelLabel}
                      </span>
                      <span class="badge" style="background: var(--navy); color: #fff; font-size: 10px; padding: 2px 6px;">
                        ${item.quarter}
                      </span>
                    </div>
                    <h5 style="font-size: 15px; color: var(--navy); font-weight: 700; margin-bottom: 4px;">
                      ${item.title[state.lang]}
                    </h5>
                    <code style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--green); display: block; margin-bottom: 8px;">
                      ${item.file}
                    </code>
                    <p style="font-size: 12px; color: var(--ink-muted); line-height: 1.4;">
                      ${item.desc[state.lang]}
                    </p>
                  </div>
                  ${item.tag ? `
                    <div style="margin-top: 10px; font-size: 10px; color: var(--gold); font-weight: 700; text-transform: uppercase;">
                      ★ ${item.tag}
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ---------------- Vocational Tracks View ----------------
function renderVocationalTracks(container) {
  const isEs = state.lang === 'es';

  container.innerHTML = `
    <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 24px; margin-bottom: 28px; box-shadow: var(--shadow-sm);">
      <span class="eyebrow-tag" style="color: var(--green); margin-bottom: 4px;">
        🎯 ${isEs ? 'ORIENTACIÓN VOCACIONAL · 6 RUTAS DE IMPACTO' : 'VOCATIONAL TRACKS · 6 PATHWAYS'}
      </span>
      <h3 style="font-size: 24px; color: var(--navy); margin-bottom: 6px;">
        ${isEs ? 'Tracks Vocacionales de Life Skills' : 'Life Skills Vocational Tracks'}
      </h3>
      <p style="font-size: 14px; color: var(--ink-muted);">
        ${isEs ? 'Rutas orientativas que acompañan tus proyectos trimestrales según tus dones y llamado en la sociedad.' : 'Guiding pathways that steer your quarterly projects according to your gifts.'}
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
      <div class="reading-card" style="border-top: 4px solid #286b43;">
        <h4>🌳 ${isEs ? 'Ciencia & Naturaleza' : 'Science & Nature'}</h4>
        <p style="font-size: 13px; color: var(--ink-muted); margin: 8px 0 12px;">Investigación científica, biología, medio ambiente y creación.</p>
        <button class="btn-interactive" onclick="openCapsule('encuestas')">Ver Proyectos →</button>
      </div>

      <div class="reading-card" style="border-top: 4px solid #b3821a;">
        <h4>🎨 ${isEs ? 'Artes & Creatividad' : 'Arts & Creativity'}</h4>
        <p style="font-size: 13px; color: var(--ink-muted); margin: 8px 0 12px;">Diseño visual, comunicación audiovisual, música y narrativa.</p>
        <button class="btn-interactive" onclick="openCapsule('presentaciones')">Ver Proyectos →</button>
      </div>

      <div class="reading-card" style="border-top: 4px solid #c0392b;">
        <h4>💓 ${isEs ? 'Salud & Bienestar' : 'Health & Wellbeing'}</h4>
        <p style="font-size: 13px; color: var(--ink-muted); margin: 8px 0 12px;">Medicina, nutrición, deporte y cuidado integral del cuerpo.</p>
        <button class="btn-interactive" onclick="openCapsule('saludEmocional')">Ver Proyectos →</button>
      </div>

      <div class="reading-card" style="border-top: 4px solid #2980b9;">
        <h4>🤝 ${isEs ? 'Servicio & Comunidad' : 'Service & Community'}</h4>
        <p style="font-size: 13px; color: var(--ink-muted); margin: 8px 0 12px;">Voluntariado, misiones, ayuda social y liderazgo eclesiástico.</p>
        <button class="btn-interactive" onclick="openCapsule('sieteEsferas')">Ver Proyectos →</button>
      </div>

      <div class="reading-card" style="border-top: 4px solid #8e44ad;">
        <h4>💼 ${isEs ? 'Negocios & Emprendimiento' : 'Business & Venture'}</h4>
        <p style="font-size: 13px; color: var(--ink-muted); margin: 8px 0 12px;">Educación financiera, mayordomía de recursos y startups.</p>
        <button class="btn-interactive" onclick="openCapsule('padreRico')">Ver Proyectos →</button>
      </div>

      <div class="reading-card" style="border-top: 4px solid #d35400;">
        <h4>📣 ${isEs ? 'Liderazgo & Cívica' : 'Civic Leadership'}</h4>
        <p style="font-size: 13px; color: var(--ink-muted); margin: 8px 0 12px;">Derecho, políticas públicas, debate, oratoria y gobernanza.</p>
        <button class="btn-interactive" onclick="openCapsule('sieteEsferas')">Ver Proyectos →</button>
      </div>
    </div>
  `;
}

// ---------------- Transversal Modules View ----------------
function renderTransversalModules(container) {
  const isEs = state.lang === 'es';

  container.innerHTML = `
    <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 24px; margin-bottom: 28px; box-shadow: var(--shadow-sm);">
      <span class="eyebrow-tag" style="color: var(--green); margin-bottom: 4px;">
        ✝️ ${isEs ? 'MÓDULOS TRANSVERSALES' : 'CROSS-CUTTING MODULES'}
      </span>
      <h3 style="font-size: 24px; color: var(--navy); margin-bottom: 6px;">
        ${isEs ? 'Cápsulas de Formación Integral para la Vida' : 'Holistic Life Training Capsules'}
      </h3>
      <p style="font-size: 14px; color: var(--ink-muted);">
        ${isEs ? 'Módulos aplicables a cualquier etapa para desarrollar madurez espiritual, emocional y relacional.' : 'Applicable modules to build spiritual, emotional, and relational maturity.'}
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;">
      ${Object.keys(CAPSULES_DATA).map(key => {
        const cap = CAPSULES_DATA[key];
        const verse = BIBLE_VERSES[cap.verseKey];
        return `
          <div class="reading-card" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <span class="reading-tag" style="background: var(--green-light); color: var(--green);">Cápsula Interactiva</span>
              <h4 style="margin: 8px 0 6px;">${cap.title[state.lang]}</h4>
              ${verse ? `
                <div style="font-size: 11px; color: var(--gold); font-style: italic; margin-bottom: 10px;">
                  📖 <b>${verse.ref}</b>
                </div>
              ` : ''}
              <div style="font-size: 13px; color: var(--ink-muted); line-height: 1.5; margin-bottom: 14px;">
                ${cap.project[state.lang]}
              </div>
            </div>
            <button class="btn-primary" onclick="openCapsule('${key}')" style="width: 100%; justify-content: center;">
              ${isEs ? 'Abrir Cápsula Paso a Paso →' : 'Open Capsule →'}
            </button>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ---------------- Rubric Dedicated View ----------------
function renderRubricView(container) {
  const isEs = state.lang === 'es';

  container.innerHTML = `
    <div class="rubric-container" style="border: none; padding: 0;">
      <div class="rubric-header">
        <h3 style="font-size: 26px; color: var(--navy);">⚖️ ${isEs ? 'Rúbrica Oficial Life Skills Chanak (40 / 30 / 30 = 100 pts)' : 'Official Life Skills Rubric (40 / 30 / 30)'}</h3>
        <p style="font-size: 14px; color: var(--ink-muted); margin-top: 6px;">
          ${isEs ? 'Estándar de aprobación oficial de Chanak International Academy: mínimo 80% (80 puntos).' : 'Chanak official passing standard: minimum 80% (80 points).'}
        </p>
      </div>

      <div class="rubric-grid" style="margin: 24px 0;">
        <div class="rubric-item">
          <b>40 pts</b>
          <span style="font-weight: 700; font-size: 14px; color: var(--navy); display: block; margin-bottom: 4px;">
            ${isEs ? 'Evidencia Visual del Proyecto' : 'Visual Project Evidence'}
          </span>
          <p>${isEs ? 'Fotos, video, collage o documento del proceso. Debe verse al estudiante trabajando activamente, no solo el producto terminado.' : 'Process photos/video clearly showing student execution.'}</p>
        </div>
        <div class="rubric-item">
          <b>30 pts</b>
          <span style="font-weight: 700; font-size: 14px; color: var(--navy); display: block; margin-bottom: 4px;">
            ${isEs ? 'Referencia Externa / Servicio' : 'External Reference / Service'}
          </span>
          <p>${isEs ? 'Validación de un adulto externo (pastor, vecino, entrenador, tutor) o carta del supervisor de servicio.' : 'Validation from external adult or service supervisor.'}</p>
        </div>
        <div class="rubric-item">
          <b>30 pts</b>
          <span style="font-weight: 700; font-size: 14px; color: var(--navy); display: block; margin-bottom: 4px;">
            ${isEs ? 'Reflexión en Inglés & Carácter' : 'English Reflection & Character'}
          </span>
          <p>${isEs ? 'El estudiante describe qué hizo, qué aprendió y cómo conectó su fe con la acción en inglés/español.' : 'Personal reflection connecting faith, character, and learning.'}</p>
        </div>
      </div>

      <!-- Grade Calculator Form -->
      <div class="calculator-box">
        <h4 style="font-size: 18px; color: var(--navy); margin-bottom: 14px;">
          🧮 ${isEs ? 'Calculador Oficial de Notas con Generador de Feedback' : 'Grade Calculator & Feedback Generator'}
        </h4>
        <div class="calc-grid">
          <div class="calc-input-group">
            <label>${isEs ? 'Nombre del Estudiante' : 'Student Name'}</label>
            <input type="text" id="calc-student-name" placeholder="Ej. Samuel Andrade" oninput="calculateGrade()">
          </div>
          <div class="calc-input-group">
            <label>${isEs ? 'Proyecto / Reto' : 'Project / Challenge'}</label>
            <input type="text" id="calc-project-name" placeholder="Ej. Escudo de Armas Personal" oninput="calculateGrade()">
          </div>
          <div class="calc-input-group">
            <label>${isEs ? 'Evidencia Visual (0–40)' : 'Evidence (0–40)'}</label>
            <input type="number" id="calc-evidencia" min="0" max="40" value="40" oninput="calculateGrade()">
          </div>
          <div class="calc-input-group">
            <label>${isEs ? 'Referencia Externa (0–30)' : 'Reference (0–30)'}</label>
            <input type="number" id="calc-referencia" min="0" max="30" value="30" oninput="calculateGrade()">
          </div>
          <div class="calc-input-group">
            <label>${isEs ? 'Reflexión / Inglés (0–30)' : 'Reflection (0–30)'}</label>
            <input type="number" id="calc-reflexion" min="0" max="30" value="28" oninput="calculateGrade()">
          </div>
        </div>

        <div class="calc-result-box">
          <div>
            <div style="font-size: 12px; color: var(--ink-muted); text-transform: uppercase; font-weight: 700;">
              ${isEs ? 'Puntaje Total Calculado:' : 'Total Calculated Score:'}
            </div>
            <div class="calc-total-score" id="calc-score-display">98 / 100 pts (Aprobado ✓)</div>
          </div>
          <button class="btn-primary" onclick="copyFeedbackText()">
            📋 ${isEs ? 'Copiar Feedback Oficial para Mentor' : 'Copy Official Feedback'}
          </button>
        </div>
      </div>
    </div>
  `;
}

// ---------------- Juniors Stage Renderer (8–13 Años) ----------------
function renderJuniorsStage(container) {
  const isEs = state.lang === 'es';
  
  let retos = JUNIORS_RETOS;
  if (state.juniorsFilter !== 'all') {
    retos = JUNIORS_RETOS.filter(r => r.track === state.juniorsFilter);
  }

  container.innerHTML = `
    <!-- Juniors Header -->
    <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 24px; margin-bottom: 28px; box-shadow: var(--shadow-sm);">
      <span class="eyebrow-tag" style="color: var(--green); margin-bottom: 6px;">
        ${isEs ? 'ETAPA FORMATIVA JUNIOR · 8 A 13 AÑOS' : 'JUNIOR FORMATIVE STAGE · AGES 8 TO 13'}
      </span>
      <h3 style="font-size: 24px; color: var(--navy); margin-bottom: 8px;">
        ${isEs ? 'Mini Proyectos, Experimentos & Hábitos en el Hogar' : 'Mini Projects, Experiments & Home Habits'}
      </h3>
      <p style="font-size: 14px; color: var(--ink-muted); line-height: 1.6;">
        ${isEs 
          ? 'Experiencias prácticas interactivas organizadas por Tracks de Habilidad para cultivar curiosidad científica, orden, creatividad, servicio familiar y mayordomía temprana. ¡Completa cada reto, documenta tu proceso y gana ChanakCoins + XP!' 
          : 'Interactive hands-on challenges organized by Skill Tracks to nurture scientific curiosity, order, creativity, family service, and early stewardship.'}
      </p>
    </div>

    <!-- Track Filter Buttons -->
    <div class="junior-track-filters">
      <button class="track-filter-btn ${state.juniorsFilter === 'all' ? 'active' : ''}" onclick="filterJuniors('all')">
        🌟 ${isEs ? 'Todos los Retos (18)' : 'All Challenges (18)'}
      </button>
      <button class="track-filter-btn ${state.juniorsFilter === 'sci' ? 'active' : ''}" onclick="filterJuniors('sci')">
        🧪 ${isEs ? 'Ciencia & Fe (3)' : 'Science & Faith (3)'}
      </button>
      <button class="track-filter-btn ${state.juniorsFilter === 'cook' ? 'active' : ''}" onclick="filterJuniors('cook')">
        🍞 ${isEs ? 'Cocina & Costos (3)' : 'Cooking & Costs (3)'}
      </button>
      <button class="track-filter-btn ${state.juniorsFilter === 'auto' ? 'active' : ''}" onclick="filterJuniors('auto')">
        🧹 ${isEs ? 'Autonomía & Orden (3)' : 'Autonomy & Order (3)'}
      </button>
      <button class="track-filter-btn ${state.juniorsFilter === 'nat' ? 'active' : ''}" onclick="filterJuniors('nat')">
        🌿 ${isEs ? 'Naturaleza & Paciencia (3)' : 'Nature & Patience (3)'}
      </button>
      <button class="track-filter-btn ${state.juniorsFilter === 'serv' ? 'active' : ''}" onclick="filterJuniors('serv')">
        🤝 ${isEs ? 'Servicio & Gratitud (3)' : 'Service & Gratitude (3)'}
      </button>
      <button class="track-filter-btn ${state.juniorsFilter === 'save' ? 'active' : ''}" onclick="filterJuniors('save')">
        🪙 ${isEs ? '3 Frascos & Ahorro (3)' : '3 Jars & Savings (3)'}
      </button>
    </div>

    <!-- Retos Cards Grid -->
    <div class="retos-grid">
      ${retos.map(reto => `
        <div class="reto-card">
          <div>
            <div class="reto-header">
              <span class="reto-icon">${reto.icon}</span>
              <span class="reto-badge">${reto.trackLabel[state.lang]} · Reto ${reto.retoNum}</span>
            </div>
            <h4>${reto.title[state.lang]}</h4>
            <p>${reto.desc[state.lang]}</p>
            <div class="reto-materials">
              <b>📦 ${isEs ? 'Materiales' : 'Materials'}:</b> ${reto.materials[state.lang]}
            </div>
            <div class="reto-scripture-chip">
              📖 <b>${reto.verse}:</b> "${reto.verseText[state.lang]}"
            </div>
          </div>
          <div class="reto-actions">
            <button class="btn-submit-reto" onclick="openSubmissionModal('${reto.id}', '${reto.title[state.lang].replace(/'/g, "\\'")}', ${reto.coins}, '03_LIFE_SKILLS/JUNIORS')">
              ${isEs ? 'Ver Reto & Subir' : 'View & Submit'} (+${reto.coins} 🪙)
            </button>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Recommended Reading for Juniors (10-13 years) -->
    <div style="margin: 32px 0 14px; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--navy);">
      📚 ${isEs ? 'Lecturas de Carácter Recomendadas (10 a 13 años):' : 'Recommended Character Readings (Ages 10–13):'}
    </div>
    <div class="readings-grid">
      <div class="reading-card" style="border-top: 3px solid #d45d8b;">
        <span class="reading-tag" style="background: #fdf0f5; color: #b8336a;">
          🌸 ${isEs ? 'Especial Niñas (10–13 años)' : 'For Girls (10–13 years)'}
        </span>
        <h4>📖 ${BOOKS.mentirasNinas.title[state.lang]}</h4>
        <div class="author">${BOOKS.mentirasNinas.author}</div>
        <div class="key-point">${BOOKS.mentirasNinas.key[state.lang]}</div>
        <div class="quote-box" style="border-left-color: #d45d8b; color: #b8336a;">"${BOOKS.mentirasNinas.quote[state.lang]}"</div>
      </div>

      <div class="reading-card" style="border-top: 3px solid #2f6ba5;">
        <span class="reading-tag" style="background: #edf4fb; color: #2461a8;">
          ⚔️ ${isEs ? 'Especial Niños (10–13 años)' : 'For Boys (10–13 years)'}
        </span>
        <h4>📖 ${BOOKS.salvajeCorazon.title[state.lang]}</h4>
        <div class="author">${BOOKS.salvajeCorazon.author}</div>
        <div class="key-point">${BOOKS.salvajeCorazon.key[state.lang]}</div>
        <div class="quote-box" style="border-left-color: #2f6ba5; color: #2461a8;">"${BOOKS.salvajeCorazon.quote[state.lang]}"</div>
      </div>
    </div>

    <!-- Official PDF Guides Downloads -->
    <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 22px 26px; margin-bottom: 32px;">
      <h4 style="font-size: 16px; color: var(--navy); margin-bottom: 12px;">
        📄 ${isEs ? 'Guías Oficiales en PDF para Descarga (Portal Chanak):' : 'Official PDF Guides for Download:'}
      </h4>
      <div style="display: flex; gap: 14px; flex-wrap: wrap;">
        <a href="https://drive.google.com/file/d/18_JEjr1lTGGhFnpNfSrTVImkzYEtZ2Pn/view" target="_blank" class="btn-interactive">
          📄 Junior 1 (8–9 años) ↗
        </a>
        <a href="https://drive.google.com/file/d/1sN9UFFJMl4Kkn8ZReW2e_Sv-DBR8EOe-/view" target="_blank" class="btn-interactive">
          📄 Junior 2 (10–11 años) ↗
        </a>
        <a href="https://drive.google.com/file/d/1iPv7JP2kQn-SzqLiRzKrNwvAe79ORw_y/view" target="_blank" class="btn-interactive">
          📄 Junior 3 (12–13 años) ↗
        </a>
      </div>
    </div>
  `;
}

function filterJuniors(trackKey) {
  state.juniorsFilter = trackKey;
  renderCurrentView();
}

// ---------------- High School Stages (Seedling, Explorer, Builder, Launch) ----------------
function renderHighSchoolStage(container, stageKey) {
  const isEs = state.lang === 'es';
  const levelData = HIGH_SCHOOL_LEVELS[stageKey] || HIGH_SCHOOL_LEVELS.seedling;
  const verse = BIBLE_VERSES[levelData.verseKey];

  container.innerHTML = `
    <!-- High School Stage Header -->
    <div style="background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 26px; margin-bottom: 28px; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 8px;">
        <span class="eyebrow-tag" style="color: var(--green); margin: 0;">
          ${isEs ? `NIVEL ${levelData.num} · ${stageKey.toUpperCase()} · ${levelData.age} · ${levelData.gradeUS}` : `LEVEL ${levelData.num} · ${stageKey.toUpperCase()} · ${levelData.gradeUS}`}
        </span>
        <a href="https://drive.google.com/file/d/1tuB-OX7-mwLIpHNHXPS0lSKaSRponaAk/view" target="_blank" class="btn-interactive" style="font-size: 12px;">
          📄 ${isEs ? 'Guía PDF Oficial' : 'Official PDF Guide'} ↗
        </a>
      </div>
      <h3 style="font-size: 26px; color: var(--navy); margin-bottom: 6px;">
        ${levelData.title[state.lang]}
      </h3>
      <p style="font-size: 15px; color: var(--ink-muted);">
        ${levelData.subtitle[state.lang]}
      </p>
    </div>

    <!-- Biblical Devotional Card with Full Scripture -->
    <div class="devotional-card">
      <div class="devotional-ref">
        📖 <span>${verse.ref}</span> · ${isEs ? 'Texto Bíblico de la Etapa' : 'Key Bible Passage'}
      </div>
      <div class="devotional-text">
        "${verse.text[state.lang]}"
      </div>
      <div class="devotional-applied">
        💡 <b>${isEs ? 'Devocional Aplicado:' : 'Applied Devotional:'}</b> ${verse.context[state.lang]}
      </div>
    </div>

    <!-- Recommended Books / Reading Cards -->
    <div style="margin-bottom: 12px; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--navy);">
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

    <!-- 19 MÓDULOS CURRICULARES CON SESIONES, CUADERNO Y GUÍA DOCENTE -->
    <div style="margin: 32px 0 14px; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--navy); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
      <span>📓 ${isEs ? 'Mis Sesiones y Cuaderno de Trabajo (Módulos Curriculares):' : 'My Sessions & Student Notebook (Curriculum Modules):'}</span>
      <span class="badge" style="background: var(--paper); border: 1px solid var(--line); color: var(--ink-muted); font-size: 11px;">
        FLDOE #134620 · Florida Standards
      </span>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px; margin-bottom: 28px;">
      ${Object.entries(EXTENSION_CAPSULES_DATA)
        .filter(([id, m]) => m.level === stageKey)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([modId, modData]) => {
          const isDone = localStorage.getItem(`chanak_mod_${modId}`) === 'done';
          const sessionCount = (modData.sessions && modData.sessions.length) || 8;
          const firstTitle = (modData.sessions && modData.sessions[0] && modData.sessions[0].title) || modId;
          const qTag = modData.quarter || 'Módulo';
          const eq = (modData.teacherGuide && modData.teacherGuide.essentialQuestion) || '';
          
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
                <h4 style="font-size: 17px; color: var(--navy); margin-bottom: 6px;">
                  ${firstTitle}
                </h4>
                <p style="font-size: 13px; color: var(--ink-muted); line-height: 1.5; margin-bottom: 12px;">
                  ${eq ? `<b>${isEs ? 'Pregunta Esencial' : 'Essential Question'}:</b> "${eq}"` : (isEs ? 'Sesiones estructuradas con cuaderno de trabajo y guía docente.' : 'Structured sessions with student notebook.')}
                </p>
              </div>
              <button class="btn-primary" style="width: 100%; justify-content: center;" onclick="openCurriculumModule('${modId}')">
                📓 ${isEs ? 'Abrir Módulo y Cuaderno →' : 'Open Module & Notebook →'}
              </button>
            </div>
          `;
        }).join('')}
    </div>

    <!-- Quarterly Projects & Deliverables Grid (Q1, Q2, Q3) -->
    <div style="margin: 28px 0 12px; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--navy);">
      🗓️ ${isEs ? 'Ruta Anual de Entregables (Drive & SIS):' : 'Annual Deliverable Pathway (Drive & SIS):'}
    </div>
    <div class="quarters-grid">
      ${levelData.quarters.map(q => `
        <div class="quarter-card">
          <div>
            <span class="quarter-badge">${q.id} · Trimestre</span>
            <h4>${q.title[state.lang]}</h4>
            <p>${q.project[state.lang]}</p>
            <div class="deliverable-box">
              <b>📁 ${isEs ? 'Archivos Requeridos en Drive:' : 'Required Drive Files:'}</b>
              <ul class="deliverable-files">
                ${q.files.map(f => `<li>📄 <code>${f}</code></li>`).join('')}
              </ul>
              <div class="drive-folder-note">
                📂 Carpeta: <code>${q.folder}</code>
              </div>
            </div>
          </div>
          <div>
            ${q.capsules.map(capKey => {
              const cap = CAPSULES_DATA[capKey];
              if (!cap) return '';
              return `
                <button class="btn-interactive" style="width: 100%; justify-content: center; margin-bottom: 8px;" onclick="openCapsule('${capKey}')">
                  🚀 ${isEs ? 'Cápsula:' : 'Capsule:'} ${cap.title[state.lang]}
                </button>
              `;
            }).join('')}
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Kahoot-Style Lightning Challenge Banner -->
    <div style="background: linear-gradient(135deg, var(--green), var(--navy-light)); color: #fff; border-radius: var(--radius-md); padding: 24px; margin-top: 32px; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
      <div>
        <h4 style="font-size: 18px; color: #fff; margin-bottom: 4px;">⚡ ${isEs ? 'Desafío Relámpago (Trivia Cronometrada)' : 'Lightning Challenge (Timed Trivia)'}</h4>
        <p style="font-size: 13px; color: rgba(255,255,255,0.85); margin: 0;">
          ${isEs ? 'Demuestra tu comprensión de los conceptos clave de este nivel y gana monedas para tu billetera.' : 'Show your mastery of core concepts to earn bonus ChanakCoins.'}
        </p>
      </div>
      <button class="btn-sis" onclick="openCapsule('identidad')">
        ${isEs ? 'Comenzar Desafío →' : 'Start Challenge →'}
      </button>
    </div>
  `;
}

// ---------------- Interactive Capsule Modal Runner ----------------
function openCapsule(capsuleKey) {
  const cap = CAPSULES_DATA[capsuleKey] || CAPSULES_DATA.identidad;
  state.activeCapsule = cap;
  state.capsuleCurrentStep = 0;
  
  const modal = document.getElementById('capsule-modal');
  const body = document.getElementById('capsule-modal-body');
  if (!modal || !body) return;

  renderCapsuleStep(body);
  modal.classList.add('open');
}

function closeCapsuleModal() {
  const modal = document.getElementById('capsule-modal');
  if (modal) modal.classList.remove('open');
}

function renderCapsuleStep(container) {
  const cap = state.activeCapsule;
  const step = cap.steps[state.capsuleCurrentStep];
  const isEs = state.lang === 'es';
  const totalSteps = cap.steps.length;
  const verse = BIBLE_VERSES[cap.verseKey];

  container.innerHTML = `
    <div style="margin-bottom: 16px;">
      <span class="eyebrow-tag" style="color: var(--green); margin-bottom: 4px;">
        ${cap.title[state.lang]} · ${step.kicker[state.lang]} (${state.capsuleCurrentStep + 1}/${totalSteps})
      </span>
      <h3 style="font-size: 24px; color: var(--navy);">${step.h[state.lang]}</h3>
    </div>

    ${verse ? `
      <div style="background: var(--gold-light); border-left: 3px solid var(--gold); padding: 8px 14px; border-radius: 6px; font-size: 12px; color: var(--gold); margin-bottom: 16px; font-style: italic;">
        📖 <b>${verse.ref}:</b> "${verse.text[state.lang]}"
      </div>
    ` : ''}

    ${step.scenario ? `
      <div class="step-scenario-box">
        "${step.scenario[state.lang]}"
      </div>
    ` : ''}

    ${step.body ? `
      <p style="font-size: 15px; color: var(--ink); line-height: 1.6; margin-bottom: 14px;">
        ${step.body[state.lang]}
      </p>
    ` : ''}

    ${step.diagram ? `
      <div class="step-diagram-box">
        ${step.diagram[state.lang]}
      </div>
    ` : ''}

    ${step.type === 'quiz' ? `
      <div style="margin: 18px 0;">
        <p style="font-weight: 600; font-size: 15px; color: var(--navy); margin-bottom: 12px;">
          ${step.q[state.lang]}
        </p>
        ${step.opts.map((opt, idx) => `
          <button class="step-quiz-opt" id="opt-${idx}" onclick="checkQuizOpt(${idx}, ${opt.ok})">
            ${opt.t[state.lang]}
          </button>
        `).join('')}
        <div id="quiz-feedback" class="step-feedback-msg"></div>
      </div>
    ` : ''}

    ${step.type === 'reflect' ? `
      <div style="margin: 18px 0;">
        <textarea class="step-textarea" id="capsule-reflection-input" placeholder="${step.prompt[state.lang]}"></textarea>
      </div>
    ` : ''}

    <div class="step-navigation-bar">
      <button class="btn-secondary" onclick="capsulePrevStep()" ${state.capsuleCurrentStep === 0 ? 'style="visibility:hidden"' : ''}>
        ← ${isEs ? 'Atrás' : 'Back'}
      </button>

      ${state.capsuleCurrentStep === totalSteps - 1 ? `
        <button class="btn-primary" onclick="finishCapsule()">
          ✓ ${isEs ? 'Completar Cápsula (+30 🪙)' : 'Complete (+30 🪙)'}
        </button>
      ` : `
        <button class="btn-primary" onclick="capsuleNextStep()">
          ${isEs ? 'Continuar →' : 'Continue →'}
        </button>
      `}
    </div>
  `;
}

function checkQuizOpt(index, isOk) {
  const cap = state.activeCapsule;
  const step = cap.steps[state.capsuleCurrentStep];
  const fb = document.getElementById('quiz-feedback');
  
  step.opts.forEach((_, idx) => {
    const btn = document.getElementById(`opt-${idx}`);
    if (btn) {
      btn.disabled = true;
      if (idx === index) {
        btn.classList.add(isOk ? 'correct' : 'wrong');
      }
    }
  });

  if (fb) {
    fb.className = `step-feedback-msg show ${isOk ? 'ok' : 'no'}`;
    fb.textContent = isOk ? step.okMsg[state.lang] : step.noMsg[state.lang];
  }
}

function capsuleNextStep() {
  if (state.activeCapsule && state.capsuleCurrentStep < state.activeCapsule.steps.length - 1) {
    state.capsuleCurrentStep++;
    const body = document.getElementById('capsule-modal-body');
    if (body) renderCapsuleStep(body);
  }
}

function capsulePrevStep() {
  if (state.capsuleCurrentStep > 0) {
    state.capsuleCurrentStep--;
    const body = document.getElementById('capsule-modal-body');
    if (body) renderCapsuleStep(body);
  }
}

function finishCapsule() {
  addCoins(30);
  closeCapsuleModal();
  
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({
      type: 'CHANAK_CAPSULE_COMPLETED',
      capsuleId: state.activeCapsule?.id,
      coinsEarned: 30,
      timestamp: new Date().toISOString()
    }, '*');
  }
}

// ---------------- Wallet Modal & Trust Tiers ----------------
function addCoins(amount) {
  state.coins += amount;
  localStorage.setItem('chanak_coins', state.coins.toString());
  updateHeaderWallet();
}

function updateHeaderWallet() {
  const countEl = document.getElementById('header-coin-count');
  const badgeEl = document.getElementById('trust-badge');
  const modalCountEl = document.getElementById('modal-coin-count');
  const modalTrustEl = document.getElementById('modal-trust-level');
  const modalBarEl = document.getElementById('modal-trust-bar');
  const modalHintEl = document.getElementById('modal-trust-hint');

  if (countEl) countEl.textContent = state.coins;
  if (modalCountEl) modalCountEl.textContent = state.coins;

  let trustTier = '🌱 Sembrador';
  let progressPercent = Math.min((state.coins / 100) * 100, 100);
  let nextHint = 'Acumula 100 🪙 para ascender al rango de Mayordomo.';

  if (state.coins >= 250) {
    trustTier = '👑 Embajador';
    progressPercent = 100;
    nextHint = '¡Nivel máximo de confianza alcanzado! Sigue sembrando.';
  } else if (state.coins >= 100) {
    trustTier = '⚖️ Mayordomo';
    progressPercent = Math.min(((state.coins - 100) / 150) * 100, 100);
    nextHint = 'Acumula 250 🪙 para ascender al rango de Embajador.';
  }

  if (badgeEl) badgeEl.textContent = trustTier;
  if (modalTrustEl) modalTrustEl.textContent = trustTier;
  if (modalBarEl) modalBarEl.style.width = `${progressPercent}%`;
  if (modalHintEl) modalHintEl.innerHTML = nextHint;
}

function openWalletModal() {
  updateHeaderWallet();
  const m = document.getElementById('wallet-modal');
  if (m) m.classList.add('open');
}

function closeWalletModal() {
  const m = document.getElementById('wallet-modal');
  if (m) m.classList.remove('open');
}

// ---------------- Reto Submission Modal ----------------
function openSubmissionModal(retoId, retoTitle, coins, folder) {
  state.activeSubmittingReto = { retoId, coins };
  const m = document.getElementById('submission-modal');
  const titleEl = document.getElementById('sub-modal-title');
  const rewardEl = document.getElementById('sub-modal-reward');
  const folderEl = document.getElementById('sub-modal-folder');

  if (titleEl) titleEl.textContent = `Subir Reto: ${retoTitle}`;
  if (rewardEl) rewardEl.textContent = coins;
  if (folderEl) folderEl.textContent = folder;
  if (m) m.classList.add('open');
}

function closeSubmissionModal() {
  const m = document.getElementById('submission-modal');
  if (m) m.classList.remove('open');
}

function confirmSubmission() {
  if (state.activeSubmittingReto) {
    addCoins(state.activeSubmittingReto.coins);
  }
  closeSubmissionModal();
}

// ---------------- Grade Calculator & Feedback Generator ----------------
function calculateGrade() {
  const ev = parseFloat(document.getElementById('calc-evidencia')?.value || '0');
  const ref = parseFloat(document.getElementById('calc-referencia')?.value || '0');
  const refl = parseFloat(document.getElementById('calc-reflexion')?.value || '0');
  const display = document.getElementById('calc-score-display');

  const total = Math.min(Math.max(ev, 0), 40) + Math.min(Math.max(ref, 0), 30) + Math.min(Math.max(refl, 0), 30);
  const isApproved = total >= 80;
  
  if (display) {
    display.textContent = `${total} / 100 pts (${isApproved ? 'Aprobado ✓' : 'Requiere Revisión ⚠️'})`;
    display.style.color = isApproved ? 'var(--green)' : '#c9302c';
  }
}

function copyFeedbackText() {
  const name = document.getElementById('calc-student-name')?.value || 'Estudiante';
  const project = document.getElementById('calc-project-name')?.value || 'Proyecto Life Skills';
  const ev = document.getElementById('calc-evidencia')?.value || '0';
  const ref = document.getElementById('calc-referencia')?.value || '0';
  const refl = document.getElementById('calc-reflexion')?.value || '0';
  const total = parseFloat(ev) + parseFloat(ref) + parseFloat(refl);

  const text = `FEEDBACK OFICIAL CHANAK ACADEMY · LIFE SKILLS & LEADERSHIP
Estudiante: ${name}
Proyecto: ${project}
Puntaje Total: ${total}/100 pts
- Evidencia Visual del Proyecto: ${ev}/40 pts
- Referencia Externa / Servicio: ${ref}/30 pts
- Reflexión en Inglés & Carácter: ${refl}/30 pts
Estado: ${total >= 80 ? 'APROBADO (Cumple con el estándar oficial del 80%)' : 'REVISIÓN REQUERIDA'}
Comentario: Excelente trabajo y testimonio en la ejecución práctica y mayordomía del proyecto.`;

  navigator.clipboard.writeText(text).then(() => {
    alert('¡Feedback copiado al portapapeles con éxito!');
  }).catch(() => {
    alert('Copia el texto:\n\n' + text);
  });
}

// ---------------- Toast & Coin Synchronization System ----------------
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

// ---------------- Curriculum Module & Student Notebook Modal Controller ----------------
function openCurriculumModule(modId) {
  const modData = EXTENSION_CAPSULES_DATA[modId];
  if (!modData) return;

  state.activeModuleId = modId;
  state.activeSessionNum = 1;
  state.mentorMode = false;
  state.userAgeTier = 'standard';

  const modal = document.getElementById('capsule-modal');
  const body = document.getElementById('capsule-modal-body');
  if (!modal || !body) return;

  renderCurriculumModuleModal(body);
  modal.classList.add('open');
}

function setModuleMentorMode(isMentor) {
  state.mentorMode = isMentor;
  const body = document.getElementById('capsule-modal-body');
  if (body) renderCurriculumModuleModal(body);
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
  const notebookEntries = (modData.studentNotebook || []).filter(n => n.session === currentSession.number);

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
      <h3 style="font-size: 24px; color: var(--navy); margin-top: 6px;">
        ${modId.toUpperCase()}: ${(sessions[0] && sessions[0].title) || modId}
      </h3>
      ${tg.essentialQuestion ? `
        <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">
          <b>${isEs ? 'Pregunta Esencial' : 'Essential Question'}:</b> "${tg.essentialQuestion}"
        </div>
      ` : ''}
    </div>

    <!-- View Mode & Age Tier Bar -->
    <div class="view-mode-bar">
      <div class="mode-toggle-group">
        <button class="mode-toggle-btn ${!state.mentorMode ? 'active' : ''}" onclick="setModuleMentorMode(false)">
          🎓 ${isEs ? 'Vista Estudiante' : 'Student View'}
        </button>
        <button class="mode-toggle-btn ${state.mentorMode ? 'active' : ''}" onclick="setModuleMentorMode(true)">
          🧑‍🏫 ${isEs ? 'Guía Mentor / Docente' : 'Faculty / Mentor Guide'}
        </button>
      </div>

      ${isSeedling ? `
        <div class="mode-toggle-group">
          <button class="mode-toggle-btn ${state.userAgeTier === 'standard' ? 'active' : ''}" onclick="setModuleAgeTier('standard')">
            ${isEs ? 'Estándar (14 años)' : 'Standard (14 yrs)'}
          </button>
          <button class="mode-toggle-btn ${state.userAgeTier === 'lower' ? 'active' : ''}" onclick="setModuleAgeTier('lower')">
            🐣 ${isEs ? 'Nivelación (12-13 años)' : 'Leveling (12-13 yrs)'}
          </button>
        </div>
      ` : ''}
    </div>

    <!-- Teacher Guide Institutional Box (Mentor Mode Only) -->
    ${state.mentorMode ? `
      <div class="teacher-guide-box">
        <h4>📋 ${isEs ? 'Guía Pedagógica Institucional Chanak' : 'Chanak Institutional Faculty Guide'}</h4>
        <div class="teacher-guide-meta">
          <div><strong>${isEs ? 'Estándares de Florida (Career Readiness)' : 'Florida Standards'}:</strong> ${(tg.floridaStandards || []).join(', ')}</div>
          <div><strong>${isEs ? 'Criterio de Evaluación' : 'Evaluation Rubric'}:</strong> Rúbrica Chanak 40/30/30 (Mínimo 80% de dominio requerido)</div>
        </div>
        ${tg.verse ? `
          <div class="teacher-guide-verse">
            📖 <b>${tg.verse.ref}:</b> "${tg.verse.text}"
          </div>
        ` : ''}
      </div>
    ` : ''}

    <!-- Horizontal Session Tabs -->
    <div class="session-tabs">
      ${sessions.map(s => {
        const isDone = localStorage.getItem(`chanak_done_${modId}_s${s.number}`) === 'done';
        const isActive = s.number === currentSession.number;
        return `
          <button class="session-tab ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}" onclick="selectModuleSession(${s.number})">
            <span>S${s.number}</span>
            <small>${isDone ? '✓' : ''}</small>
          </button>
        `;
      }).join('')}
    </div>

    <!-- Current Session Content Card -->
    <div style="background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 20px; margin-bottom: 20px;">
      <div style="font-size: 11px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">
        ${isEs ? 'Sesión' : 'Session'} ${currentSession.number} ${isEs ? 'de' : 'of'} ${sessions.length} · ${(currentSession.timeMin || 60)} min
      </div>
      <h4 style="font-size: 19px; color: var(--navy); margin-bottom: 12px;">
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

      <!-- Mentor Callouts in Mentor Mode -->
      ${state.mentorMode ? `
        <div class="mentor-callout error">
          <strong>⚠️ ${isEs ? 'Error Frecuente a Observar' : 'Common Error'}:</strong> ${currentSession.commonError || (isEs ? 'Asegurarse de que el estudiante no copie respuestas genéricas y reflexione con honestidad.' : 'Ensure authentic reflection.')}
        </div>
        <div class="mentor-callout checkpoint">
          <strong>✅ ${isEs ? 'Punto de Control / Checkpoint' : 'Mentor Checkpoint'}:</strong> ${currentSession.checkpoint || (isEs ? 'Comprobar que el estudiante guarde su cuaderno antes de pasar a la siguiente sesión.' : 'Verify notebook response is saved.')}
        </div>
      ` : ''}

      <!-- Student Notebook Pages for this session -->
      ${notebookEntries.length > 0 ? `
        <div class="notebook-section">
          <h5 style="font-size: 15px; color: var(--navy); margin-bottom: 14px; display: flex; align-items: center; gap: 6px;">
            📓 ${isEs ? 'Cuaderno de Trabajo del Estudiante' : 'Student Notebook Reflection'}
          </h5>
          ${notebookEntries.map((entry, idx) => {
            const inputKey = `nb_input_${modId}_s${currentSession.number}_p${idx}`;
            const storageKey = `chanak_nb_${modId}_s${currentSession.number}_p${idx}`;
            const savedText = localStorage.getItem(storageKey) || '';
            const promptText = (state.userAgeTier === 'lower' && entry.prompt)
              ? entry.prompt + (isEs ? ' (Nivel 12-13 años: responde en 2 a 3 frases claras).' : ' (Ages 12-13: answer in 2-3 sentences).')
              : entry.prompt;

            return `
              <div class="notebook-card">
                <div class="notebook-header">
                  <strong style="font-size: 13px; color: var(--navy);">${entry.pageTitle || (`Página ${idx + 1}`)}</strong>
                  ${entry.graded ? `<span class="rubric-tag">⭐ Rúbrica 40/30/30 (${entry.rubricWeight || 'Formativo'})</span>` : ''}
                </div>
                <div class="notebook-prompt">${promptText || ''}</div>
                <textarea id="${inputKey}" class="notebook-textarea" placeholder="${isEs ? 'Escribe tu reflexión o trabajo aquí...' : 'Write your reflection here...'}">${savedText}</textarea>
                <div style="margin-top: 10px; display: flex; justify-content: flex-end;">
                  <button class="btn-interactive" onclick="saveNotebookResponse('${modId}', ${currentSession.number}, ${idx})">
                    💾 ${isEs ? 'Guardar en Cuaderno (+10 Coins)' : 'Save to Notebook (+10 Coins)'}
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      ` : ''}
    </div>

    <!-- Navigation between sessions -->
    <div style="display: flex; justify-content: space-between; align-items: center; gap: 12px;">
      <button class="btn-secondary" onclick="selectModuleSession(${Math.max(1, currentSession.number - 1)})" ${currentSession.number === 1 ? 'style="visibility:hidden"' : ''}>
        ← ${isEs ? 'Anterior' : 'Previous'}
      </button>

      ${currentSession.number === sessions.length ? `
        <button class="btn-primary" onclick="finishCurriculumModule('${modId}')">
          🎉 ${isEs ? 'Completar Módulo (+25 Coins)' : 'Complete Module (+25 Coins)'}
        </button>
      ` : `
        <button class="btn-primary" onclick="completeModuleSession('${modId}', ${currentSession.number})">
          ${isEs ? 'Completar Sesión y Continuar (+10 Coins)' : 'Complete Session & Continue (+10 Coins)'} →
        </button>
      `}
    </div>
  `;
}
