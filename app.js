/* =====================================================================
   Chanak Life Skills & Leadership Studio — Application Controller
   Supports Standalone, Embed Mode (iframe), and Dual Diploma restriction
   ===================================================================== */

import {
  BIBLE_VERSES,
  BOOKS,
  JUNIORS_RETOS,
  HIGH_SCHOOL_LEVELS,
  CAPSULES_DATA
} from './data.js';

// ---------------- Application State ----------------
const state = {
  lang: 'es',
  mode: 'portal', // 'portal' or 'dual'
  isEmbed: false,
  currentStage: 'seedling',
  juniorsFilter: 'all',
  coins: parseInt(localStorage.getItem('chanak_coins') || '20', 10),
  activeCapsule: null,
  capsuleCurrentStep: 0,
  activeSubmittingReto: null,
};

// ---------------- Initialization ----------------
document.addEventListener('DOMContentLoaded', () => {
  // Parse URL search parameters
  const params = new URLSearchParams(window.location.search);
  
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

  // Handle Dual Diploma restriction: Juniors NOT available in Dual Diploma
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
    state.currentStage = 'seedling';
  } else {
    if (contextPill) contextPill.textContent = 'Modo Portal SIS';
    if (params.get('stage') === 'juniors') {
      state.currentStage = 'juniors';
    }
  }

  updateHeaderWallet();
  updateStageNav();
  renderCurrentStage();

  // Expose global methods for inline HTML event handlers
  window.switchLanguage = switchLanguage;
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
});

// ---------------- Language Switcher ----------------
function switchLanguage(lang) {
  state.lang = lang;
  document.getElementById('btn-lang-es').classList.toggle('active', lang === 'es');
  document.getElementById('btn-lang-en').classList.toggle('active', lang === 'en');
  
  // Update header text
  document.getElementById('ui-subtitle').textContent = lang === 'es'
    ? 'Life Skills & Leadership Studio · FLDOE #134620'
    : 'Life Skills & Leadership Studio · FLDOE #134620';
  document.getElementById('ui-motto').textContent = lang === 'es'
    ? 'Carácter · Propósito · Servicio · Emprendimiento · College Prep'
    : 'Character · Purpose · Service · Entrepreneurship · College Prep';
  document.getElementById('ui-hero-lead').textContent = lang === 'es'
    ? 'Desarrollo de carácter, autodisciplina, mayordomía financiera, relaciones sanas y liderazgo de impacto real con cosmovisión bíblica. Selecciona la etapa correspondiente:'
    : 'Character growth, self-discipline, financial stewardship, healthy relationships, and real leadership with a Biblical worldview. Select stage:';
  
  renderCurrentStage();
}

// ---------------- Stage Selector ----------------
function selectStage(stageKey) {
  if (state.mode === 'dual' && stageKey === 'juniors') {
    return; // Juniors disabled in Dual Diploma
  }
  state.currentStage = stageKey;
  updateStageNav();
  renderCurrentStage();
}

function updateStageNav() {
  const tabs = ['juniors', 'seedling', 'explorer', 'builder', 'launch'];
  tabs.forEach(tab => {
    const el = document.getElementById(`tab-${tab}`);
    if (el) {
      el.classList.toggle('active', state.currentStage === tab);
    }
  });
}

// ---------------- Render Stage Content ----------------
function renderCurrentStage() {
  const container = document.getElementById('stage-content-area');
  if (!container) return;

  if (state.currentStage === 'juniors' && state.mode !== 'dual') {
    renderJuniorsStage(container);
  } else {
    renderHighSchoolStage(container, state.currentStage);
  }
}

// ---------------- Juniors Stage Renderer (8–13 Años) ----------------
function renderJuniorsStage(container) {
  const isEs = state.lang === 'es';
  
  // Filter challenges by selected track
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

    <!-- Rubric & Grade Calculator -->
    <div class="rubric-container">
      <div class="rubric-header">
        <h3>⚖️ ${isEs ? 'Rúbrica Oficial Life Skills Chanak (40 / 30 / 30 = 100 pts)' : 'Official Life Skills Rubric (40 / 30 / 30)'}</h3>
        <p style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">
          ${isEs ? 'Estándar de aprobación oficial de Chanak Academy: mínimo 80% (80 puntos).' : 'Chanak official passing standard: minimum 80% (80 points).'}
        </p>
      </div>

      <div class="rubric-grid">
        <div class="rubric-item">
          <b>40 pts</b>
          <span style="font-weight: 600; font-size: 13px; color: var(--navy); display: block; margin-bottom: 2px;">
            ${isEs ? 'Evidencia Visual del Proyecto' : 'Visual Project Evidence'}
          </span>
          <p>${isEs ? 'Fotos o video donde se aprecie claramente al alumno realizando la actividad.' : 'Photos/video clearly showing student execution.'}</p>
        </div>
        <div class="rubric-item">
          <b>30 pts</b>
          <span style="font-weight: 600; font-size: 13px; color: var(--navy); display: block; margin-bottom: 2px;">
            ${isEs ? 'Referencia Externa / Servicio' : 'External Reference / Service'}
          </span>
          <p>${isEs ? 'Validación firmada por padres, mentor o beneficiario del servicio.' : 'Signed validation from parents, mentor, or beneficiary.'}</p>
        </div>
        <div class="rubric-item">
          <b>30 pts</b>
          <span style="font-weight: 600; font-size: 13px; color: var(--navy); display: block; margin-bottom: 2px;">
            ${isEs ? 'Reflexión en Inglés & Carácter' : 'English Reflection & Character'}
          </span>
          <p>${isEs ? 'Reflexión personal conectando la fe, el carácter y la lección aprendida.' : 'Personal reflection connecting faith, character, and learning.'}</p>
        </div>
      </div>

      <!-- Grade Calculator Form -->
      <div class="calculator-box">
        <h4 style="font-size: 16px; color: var(--navy); margin-bottom: 14px;">
          🧮 ${isEs ? 'Calculador de Nota · Life Skills' : 'Grade Calculator · Life Skills'}
        </h4>
        <div class="calc-grid">
          <div class="calc-input-group">
            <label>${isEs ? 'Nombre del Estudiante' : 'Student Name'}</label>
            <input type="text" id="calc-student-name" placeholder="Ej. Samuel Andrade" oninput="calculateGrade()">
          </div>
          <div class="calc-input-group">
            <label>${isEs ? 'Proyecto / Reto' : 'Project / Challenge'}</label>
            <input type="text" id="calc-project-name" placeholder="Ej. El Huerto de la Paciencia" oninput="calculateGrade()">
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
            <div class="calc-total-score" id="calc-score-display">98 / 100 pts (Excelente)</div>
          </div>
          <button class="btn-primary" onclick="copyFeedbackText()">
            📋 ${isEs ? 'Copiar Feedback para Mentor' : 'Copy Mentor Feedback'}
          </button>
        </div>
      </div>
    </div>
  `;
}

function filterJuniors(trackKey) {
  state.juniorsFilter = trackKey;
  renderCurrentStage();
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
  
  // Notify parent window (for iframe embed in Dual Diploma or SIS)
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
