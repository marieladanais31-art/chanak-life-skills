/* =====================================================================
   Chanak Life Skills & Leadership — APP LOGIC
   ===================================================================== */

let LANG = 'es';
let USER = null; // {name,type,age,band}
const g = (o) => (o && o[LANG] !== undefined ? o[LANG] : o);

/* ---------- Storage (localStorage keyed by user) ---------- */
const LS = {
  get(k){ try { return JSON.parse(localStorage.getItem(k)); } catch(e){ return null; } },
  set(k,v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} },
  del(k){ try { localStorage.removeItem(k); } catch(e){} }
};
function userKey(){ return USER ? 'chanak_ls_'+USER.type+'_'+USER.name.replace(/\s+/g,'_').toLowerCase() : 'chanak_ls_guest'; }
function loadProgress(){ return LS.get(userKey()) || {coins:0, done:{}}; }
function saveProgress(p){ LS.set(userKey(), p); }
let PROG = {coins:0, done:{}};

/* ---------- Valid access codes (demo). Replace with SIS endpoint in prod ---------- */
const VALID_CODES = ['CHANAK2026','EDUCAFE2026','SEEDLING','LIFESKILLS'];

/* ---------- Init ---------- */
window.addEventListener('DOMContentLoaded', () => {
  applyUI();
  // restore session
  const saved = LS.get('chanak_ls_session');
  if(saved && saved.name){ USER = saved; PROG = loadProgress(); enterApp(); }
  else { showView('auth'); }
  renderAuth();
});

/* ---------- Language ---------- */
function setLang(l){
  LANG = l;
  document.documentElement.lang = l;
  document.getElementById('btn-es').classList.toggle('on', l==='es');
  document.getElementById('btn-en').classList.toggle('on', l==='en');
  applyUI();
  renderAuth();
  if(USER){
    updateUserChip();
    renderHome(); updateCoins();
    if(isActive('level')) openLevel(STATE.level);
    if(isActive('capsule')) openCapsule(STATE.capsule);
  }
}
function updateUserChip(){
  if(!USER) return;
  const chip = document.getElementById('user-chip');
  chip.querySelector('.uc-name').textContent = UI['auth-welcome'][LANG]+', '+USER.name.split(' ')[0];
  chip.querySelector('.uc-band').textContent = g(BAND_LABEL[USER.band]);
}
function applyUI(){
  document.querySelectorAll('[data-i]').forEach(el=>{
    const k = el.getAttribute('data-i');
    if(UI[k]) el.textContent = UI[k][LANG];
  });
}

/* ---------- AUTH / registration ---------- */
function renderAuth(){
  const c = document.getElementById('auth-card');
  if(!c) return;
  c.innerHTML = `
    <h2>${UI['auth-title'][LANG]}</h2>
    <p class="auth-sub">${UI['auth-sub'][LANG]}</p>
    <label>${UI['auth-name'][LANG]}</label>
    <input id="f-name" type="text" placeholder="${UI['auth-name'][LANG]}" autocomplete="name">
    <label>${UI['auth-type'][LANG]}</label>
    <div class="type-grid">
      <button class="type-btn on" data-type="chanak" onclick="pickType(this)">${UI['type-chanak'][LANG]}</button>
      <button class="type-btn" data-type="educafe" onclick="pickType(this)">${UI['type-educafe'][LANG]}</button>
      <button class="type-btn" data-type="guest" onclick="pickType(this)">${UI['type-guest'][LANG]}</button>
    </div>
    <div class="two-col">
      <div><label>${UI['auth-age'][LANG]}</label><input id="f-age" type="number" min="6" max="99" placeholder="14"></div>
      <div><label>${UI['auth-code'][LANG]}</label><input id="f-code" type="text" placeholder="CHANAK2026"></div>
    </div>
    <p class="hint">${UI['auth-code-help'][LANG]}</p>
    <div class="auth-err" id="auth-err"></div>
    <button class="btn primary full" onclick="doRegister()">${UI['auth-enter'][LANG]}</button>
    <a class="sis-link" href="https://sis.chanakacademy.org" target="_blank" rel="noopener">${UI['auth-sis'][LANG]}</a>
    <p class="official">${UI['auth-official'][LANG]}</p>
  `;
}
let SELECTED_TYPE = 'chanak';
function pickType(btn){
  SELECTED_TYPE = btn.dataset.type;
  document.querySelectorAll('.type-btn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
}
function doRegister(){
  const name = document.getElementById('f-name').value.trim();
  const age  = document.getElementById('f-age').value.trim();
  const code = document.getElementById('f-code').value.trim().toUpperCase();
  const err  = document.getElementById('auth-err');
  err.textContent = '';
  if(!name){ err.textContent = UI['auth-err-name'][LANG]; return; }
  if(!age){ err.textContent = UI['auth-err-age'][LANG]; return; }
  if((SELECTED_TYPE==='chanak' || SELECTED_TYPE==='educafe') && !VALID_CODES.includes(code)){
    err.textContent = UI['auth-err-code'][LANG]; return;
  }
  USER = { name, type:SELECTED_TYPE, age:Number(age), band:ageBand(age) };
  LS.set('chanak_ls_session', USER);
  PROG = loadProgress();
  enterApp();
}
function logout(){
  LS.del('chanak_ls_session');
  USER = null; PROG = {coins:0,done:{}};
  showView('auth'); renderAuth();
  document.getElementById('user-chip').style.display = 'none';
}
function enterApp(){
  document.getElementById('user-chip').style.display = 'flex';
  updateUserChip();
  renderHome(); updateCoins(); showView('home');
}

/* ---------- Views ---------- */
const STATE = {level:null, capsule:null, step:0};
function showView(v){
  document.querySelectorAll('.view').forEach(x=>x.classList.remove('active'));
  document.getElementById('view-'+v).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}
function isActive(v){ return document.getElementById('view-'+v).classList.contains('active'); }
function updateCoins(){
  document.getElementById('coinCount').textContent = PROG.coins;
  const chip = document.getElementById('trust-chip');
  if(chip){ const t = trustFor(PROG.coins); chip.innerHTML = `${t.em} <b>${g(t.name)}</b>`; }
  const wm = document.getElementById('wallet-modal');
  if(wm && wm.classList.contains('open')) renderWallet();
}

/* ---------- HOME ---------- */
function profileCard(key){
  const l = LEVELS[key];
  return `<div class="pcard" onclick="openLevel('${key}')">
    ${l.rec?`<span class="rec">${LANG==='es'?'Empieza aquí':'Start here'}</span>`:''}
    <span class="em">${l.em}</span>
    <span class="age">${g(l.age)}</span>
    <h4>${g(l.title)}</h4>
    <p>${g(l.desc).split('.')[0]}.</p>
  </div>`;
}
function renderHome(){
  document.getElementById('hero-verse').innerHTML =
    `"${LANG==='es'?'Ninguno tenga en poco tu juventud':'Don\'t let anyone look down on you because you are young'}"<span>1 ${LANG==='es'?'Timoteo':'Timothy'} 4:12</span>`;
  document.getElementById('mainProfiles').innerHTML = ['seedling','explorer','builder','launch'].map(profileCard).join('');
  document.getElementById('moduleProfiles').innerHTML = ['vida','conociendome','estudio','junior'].map(profileCard).join('');
  document.getElementById('adultProfiles').innerHTML = profileCard('adulto');
}

/* ---------- LEVEL ---------- */
function openLevel(key){
  STATE.level = key;
  const l = LEVELS[key];
  document.getElementById('lvl-eyebrow').textContent = g(l.eyebrow);
  document.getElementById('lvl-title').textContent = g(l.title)+' · '+g(l.age);
  document.getElementById('lvl-desc').textContent = g(l.desc);
  document.getElementById('lvl-quarters').innerHTML = l.quarters.map(q=>`<span class="q-tag"><b>${g(q[0])}</b> · ${g(q[1])}</span>`).join('');
  document.getElementById('lvl-capsules').innerHTML = l.capsules.map((c,i)=>{
    const cap = CAPSULES[c]; if(!cap) return '';
    const done = PROG.done[c] ? `<span class="chip done">${UI['done'][LANG]}</span>` : '';
    let tag;
    if(cap.tag==='core') tag=`<span class="chip core">${UI['from-curr'][LANG]}</span>`;
    else if(cap.tag==='faith') tag=`<span class="chip faith">${UI['faith'][LANG]}</span>`;
    else if(cap.tag==='care') tag=`<span class="chip care">${UI['care'][LANG]}</span>`;
    else if(cap.tag==='study') tag=`<span class="chip study">${UI['study'][LANG]}</span>`;
    else if(cap.tag==='team') tag=`<span class="chip team">${UI['team'][LANG]}</span>`;
    else tag=`<span class="chip new">${UI['new'][LANG]}</span>`;
    const sub = cap.scaffold ? g(cap.meta) : UI['cap4step'][LANG];
    const status = cap.scaffold ? UI['coming'][LANG] : UI['open'][LANG];
    return `<div class="mcard" onclick="openCapsule('${c}')">
      <span class="num">${String(i+1).padStart(2,'0')}</span>
      <h4>${g(cap.title)}</h4><p>${sub}</p>
      <div class="foot">${tag}${done}<span class="status">${status}</span></div>
    </div>`;
  }).join('');
  document.getElementById('lvl-tracks').innerHTML = TRACKS.map(t=>`<div class="tcard"><div class="ic">${t.ic}</div><h5>${t.name}</h5><small>${g(t.sub)}</small></div>`).join('');
  document.getElementById('lvl-tracks-intro').innerHTML = UI['tracks-intro'][LANG];
  // Lightning (Kahoot-style) challenge CTA — only if the level has quiz questions
  const qCount = kahootPool(key).length;
  const kEl = document.getElementById('lvl-kahoot');
  if(qCount>0){
    const kd = PROG.kahoot && PROG.kahoot[key];
    kEl.style.display='block';
    kEl.innerHTML = `<div class="kahoot-cta" onclick="openKahoot('${key}')">
      <div class="kc-icon">⚡</div>
      <div class="kc-text"><h4>${UI['kahoot-cta'][LANG]}</h4><p>${UI['kahoot-sub'][LANG]}</p></div>
      <div class="kc-go">${kd?'★':'▶'}</div>
    </div>`;
  } else { kEl.style.display='none'; kEl.innerHTML=''; }
  showView('level');
}

/* ---------- CAPSULE ---------- */
function openCapsule(key){
  const cap = CAPSULES[key];
  STATE.capsule = key; STATE.step = 0;
  document.getElementById('cap-eyebrow').textContent = g(cap.eyebrow);
  document.getElementById('cap-title').textContent = g(cap.title);
  const back = document.getElementById('cap-back');
  back.textContent = STATE.level ? UI['back-level'][LANG] : UI['back-home'][LANG];
  back.onclick = STATE.level ? ()=>openLevel(STATE.level) : ()=>showView('home');

  if(cap.scaffold){
    let bookHtml = cap.book ? `<div class="book">${g(cap.book)}</div>` : '';
    document.getElementById('cap-steps').innerHTML = `<div class="step active">
      <div class="kicker">${UI['coming'][LANG]}</div>
      <h3>${g(cap.title)}</h3><p>${g(cap.meta)}</p>
      ${bookHtml}
      <div class="note">${UI['scaffold-note'][LANG]}</div>
      <div class="rubric"><h4>${UI['built-with'][LANG]}</h4>
        <div class="r-row"><span>${UI['rubric-1'][LANG]}</span><b>40 pts</b></div>
        <div class="r-row"><span>${UI['rubric-2'][LANG]}</span><b>30 pts</b></div>
        <div class="r-row"><span>${UI['rubric-3'][LANG]}</span><b>30 pts</b></div></div>
      <div class="step-nav"><button class="btn ghost" onclick="openLevel(STATE.level)">${UI['back'][LANG]}</button><span></span></div>
    </div>`;
    document.getElementById('cap-bar').style.width='100%';
    showView('capsule'); return;
  }

  // Build steps; inject book + age-scaled deepening challenge as extra steps
  let steps = cap.steps.slice();
  const extras = [];
  if(cap.book || cap.byAge || cap.mentor){
    extras.push({type:'deepen', cap});
  }
  const all = steps.concat(extras);
  document.getElementById('cap-steps').innerHTML = all.map((s,i)=>renderStep(s,i,all.length,key)).join('');
  gotoStep(0); showView('capsule'); bindInteractions(key);
}

function renderStep(s,i,total,key){
  let inner='';
  if(s.type==='hook') inner=`<div class="scenario">${g(s.scenario)}</div><p>${g(s.body)}</p>`;
  else if(s.type==='theory') inner=`<p>${g(s.body)}</p>${s.diagram?`<div class="diagram">${g(s.diagram)}</div>`:''}`;
  else if(s.type==='quiz') inner=`<p>${g(s.q)}</p><div class="opts">${s.opts.map(o=>`<button class="opt" data-ok="${o.ok}" data-step="${i}">${g(o.t)}</button>`).join('')}</div><div class="feedback" id="fb-${i}"></div>`;
  else if(s.type==='match') inner=`<p>${LANG==='es'?'Arrastra cada tarjeta a su categoría.':'Drag each card to its category.'}</p><div class="match-wrap"><div class="pool">${s.pool.map(p=>`<div class="drag" draggable="true" data-id="${p.id}">${g(p.t)}</div>`).join('')}</div><div class="targets">${s.targets.map(t=>`<div class="target" data-ans="${t.ans}"><b>${g(t.label)}</b></div>`).join('')}</div></div><div class="feedback" id="fb-${i}"></div>`;
  else if(s.type==='reflect') inner=`<p>${g(s.body)}</p><textarea placeholder="${g(s.prompt).replace(/\n/g,'&#10;')}"></textarea>`;
  else if(s.type==='safe') return `<div class="step" data-step="${i}"><div class="kicker">${UI['safe-space'][LANG]}</div><h3>${UI['safe-title'][LANG]}</h3><div class="safe">${g(SAFE_BOX)}</div>${navHtml(i,total,key,true)}</div>`;
  else if(s.type==='deepen'){
    const cap = s.cap;
    const band = USER ? USER.band : 'teen';
    const challenge = (cap.byAge && cap.byAge[band]) ? cap.byAge[band] : DEEPEN_DEFAULT[band];
    let html = `<div class="kicker">${UI['deepen'][LANG]}</div><h3>${LANG==='es'?'Lleva este tema más lejos':'Take this topic further'}</h3>`;
    html += `<div class="level-tag">🎯 ${UI['level-label'][LANG]}: <b>${g(BAND_LABEL[band])}</b></div>`;
    html += `<div class="deepen-box">${g(challenge)}</div>`;
    if(cap.mentor) html += `<div class="note">🧑‍🏫 ${UI['mentor-guides'][LANG]}</div>`;
    if(cap.book) html += `<div class="book"><b>${UI['read-more'][LANG]}:</b><br>${g(cap.book)}</div>`;
    if(cap.project){
      html += `<div class="project-box"><h4>📦 ${UI['project-title'][LANG]}</h4><p>${g(cap.project)}</p><small>${UI['project-note'][LANG]}</small></div>`;
    } else if(NO_DELIVERABLE_TAGS.includes(cap.tag)){
      html += `<div class="no-deliver">🌿 <b>${UI['no-deliver-title'][LANG]}</b><br>${UI['no-deliver-body'][LANG]}</div>`;
    }
    return `<div class="step" data-step="${i}">${html}${navHtml(i,total,key,true)}</div>`;
  }
  return `<div class="step" data-step="${i}"><div class="kicker">${g(s.kicker)} · ${UI['step'][LANG]} ${i+1} ${UI['of'][LANG]} ${total}</div><h3>${g(s.h)}</h3>${inner}${navHtml(i,total,key,false)}</div>`;
}
function navHtml(i,total,key,forceLast){
  const isLast = forceLast || i===total-1;
  const backBtn = `<button class="btn ghost" ${i===0?'style="visibility:hidden"':''} onclick="prevStep()">${UI['back'][LANG]}</button>`;
  const nextBtn = isLast
    ? `<button class="btn primary" onclick="finishCapsule('${key}')">${UI['complete'][LANG]}</button>`
    : `<button class="btn primary" onclick="nextStep()">${UI['continue'][LANG]}</button>`;
  return `<div class="step-nav">${backBtn}${nextBtn}</div>`;
}
function gotoStep(n){
  const steps = document.querySelectorAll('#cap-steps .step');
  steps.forEach(s=>s.classList.remove('active'));
  if(steps[n]) steps[n].classList.add('active');
  STATE.step = n;
  document.getElementById('cap-bar').style.width = (n/(steps.length-1)*100)+'%';
  window.scrollTo({top:0,behavior:'smooth'});
}
function nextStep(){ gotoStep(STATE.step+1); }
function prevStep(){ gotoStep(STATE.step-1); }

function bindInteractions(key){
  const cap = CAPSULES[key];
  document.querySelectorAll('#cap-steps .opt').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const step = btn.dataset.step, parent = btn.closest('.opts');
      parent.querySelectorAll('.opt').forEach(b=>b.disabled=true);
      const ok = btn.dataset.ok==='true';
      btn.classList.add(ok?'correct':'wrong');
      const s = cap.steps[step], fb = document.getElementById('fb-'+step);
      fb.textContent = ok ? g(s.okMsg) : g(s.noMsg);
      fb.className = 'feedback show '+(ok?'ok':'no');
      if(!ok) parent.querySelectorAll('.opt').forEach(b=>{ if(b.dataset.ok==='true') b.classList.add('correct'); });
    });
  });
  let dragged=null;
  document.querySelectorAll('#cap-steps .drag').forEach(d=>{
    d.addEventListener('dragstart',()=>{dragged=d;d.classList.add('dragging');});
    d.addEventListener('dragend',()=>{d.classList.remove('dragging');dragged=null;});
  });
  document.querySelectorAll('#cap-steps .target').forEach(t=>{
    t.addEventListener('dragover',e=>{e.preventDefault();t.classList.add('over');});
    t.addEventListener('dragleave',()=>t.classList.remove('over'));
    t.addEventListener('drop',e=>{
      e.preventDefault();t.classList.remove('over');if(!dragged)return;
      const correct = t.dataset.ans===dragged.dataset.id, label = t.querySelector('b').textContent;
      t.innerHTML = `<b>${label}</b><div class="placed">${dragged.textContent} ${correct?'✓':'✕'}</div>`;
      t.classList.add('filled'); dragged.remove();
      const targets = t.closest('.match-wrap').querySelectorAll('.target');
      if([...targets].every(x=>x.classList.contains('filled'))){
        const si = t.closest('.step').dataset.step, fb = document.getElementById('fb-'+si);
        const allRight = [...targets].every(x=>x.querySelector('.placed').textContent.includes('✓'));
        fb.textContent = allRight ? g(cap.steps[si].okMsg) : (LANG==='es'?'Casi. Revisa los que tienen ✕ e inténtalo de nuevo.':'Almost. Check the ones with ✕ and try again.');
        fb.className = 'feedback show '+(allRight?'ok':'no');
      }
    });
  });
}

function finishCapsule(key){
  if(!PROG.done[key]){ PROG.done[key]=true; PROG.coins+=COINS_PER_CAPSULE; saveProgress(PROG); updateCoins(); }
  const cap = CAPSULES[key];
  const noDeliver = NO_DELIVERABLE_TAGS.includes(cap.tag);
  let deliverHtml;
  if(cap.project){
    deliverHtml = `<div class="project-box" style="text-align:left;max-width:420px;margin:0 auto 24px">
      <h4>📦 ${UI['project-title'][LANG]}</h4>
      <p>${g(cap.project)}</p>
      <small>${UI['project-note'][LANG]}</small></div>`;
  } else if(noDeliver){
    deliverHtml = `<div class="no-deliver" style="text-align:left;max-width:420px;margin:0 auto 24px">
      <b>🌿 ${UI['no-deliver-title'][LANG]}</b><br>${UI['no-deliver-body'][LANG]}</div>`;
  } else {
    deliverHtml = `<div class="rubric" style="text-align:left;max-width:420px;margin:0 auto 24px"><h4>${UI['deliverable'][LANG]}</h4>
      <div class="r-row"><span>${UI['del-1'][LANG]}</span><b>40 pts</b></div>
      <div class="r-row"><span>${UI['del-2'][LANG]}</span><b>30 pts</b></div>
      <div class="r-row"><span>${UI['del-3'][LANG]}</span><b>30 pts</b></div></div>`;
  }
  const primaryBtn = STATE.level
    ? `<button class="btn primary" onclick="openLevel(STATE.level)">${UI['back-to-level'][LANG]}</button>`
    : `<button class="btn primary" onclick="showView('home')">${UI['to-home'][LANG]}</button>`;
  const ghostBtn = STATE.level ? `<button class="btn ghost" onclick="showView('home')">${UI['to-home'][LANG]}</button>` : '';
  document.getElementById('cap-steps').innerHTML = `<div class="step active done-card">
    <div class="medal">🏅</div><h3>${UI['done-title'][LANG]}</h3>
    <div class="coins-earned">🪙 +${COINS_PER_CAPSULE} ${UI['coins-word'][LANG]}</div>
    <p>${g(cap.title)}. ${UI['done-body'][LANG]}</p>
    ${deliverHtml}
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
      ${primaryBtn}${ghostBtn}</div></div>`;
  document.getElementById('cap-bar').style.width='100%';
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ---------- Open a capsule directly from Home (no parent level) ---------- */
function openCapsuleDirect(key){
  STATE.level = null;
  openCapsule(key);
}

/* ---------- WALLET ---------- */
function openWallet(){
  renderWallet();
  document.getElementById('wallet-modal').classList.add('open');
}
function closeWallet(){
  document.getElementById('wallet-modal').classList.remove('open');
}
function renderWallet(){
  document.getElementById('wallet-title').textContent = UI['wallet-title'][LANG];
  document.getElementById('wallet-sub').textContent = UI['wallet-sub'][LANG];
  const trust = trustFor(PROG.coins);
  const next = trustNext(PROG.coins);
  const pct = next ? Math.max(4,Math.min(100, Math.round((PROG.coins-trust.min)/(next.min-trust.min)*100))) : 100;
  const nextHtml = next
    ? `${UI['trust-next'][LANG]}: <b>${g(next.name)}</b> ${next.em} · ${next.min-PROG.coins} 🪙`
    : UI['trust-max'][LANG];
  document.getElementById('wallet-body').innerHTML = `
    <div class="bill">
      <span class="bill-corner tl">🪙</span><span class="bill-corner tr">🪙</span>
      <div class="bill-mid">
        <div class="bill-em">${trust.em}</div>
        <div class="bill-amount">${PROG.coins}</div>
        <div class="bill-label">${UI['coins-word'][LANG]}</div>
      </div>
      <span class="bill-corner bl">🪙</span><span class="bill-corner br">🪙</span>
      <div class="bill-foot">${UI['wallet-note'][LANG]}</div>
    </div>
    <div class="trust-row"><span>${UI['trust-label'][LANG]}</span><b>${trust.em} ${g(trust.name)}</b></div>
    <div class="trust-bar"><i style="width:${pct}%"></i></div>
    <div class="trust-next">${nextHtml}</div>`;
}

/* ---------- KAHOOT-STYLE LIGHTNING CHALLENGE ---------- */
function kahootPool(levelKey){
  const l = LEVELS[levelKey]; if(!l) return [];
  let qs = [];
  l.capsules.forEach(ck=>{
    const cap = CAPSULES[ck]; if(!cap || cap.scaffold || !cap.steps) return;
    cap.steps.forEach(s=>{ if(s.type==='quiz') qs.push(s); });
  });
  return qs;
}
function shuffleArr(arr){ const a=arr.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

const KAHOOT_TIME = 12000;
let KAHOOT = null, KAHOOT_TIMER = null, KAHOOT_START_T = 0;

function openKahoot(levelKey){
  const pool = kahootPool(levelKey);
  document.getElementById('kahoot-modal').classList.add('open');
  if(!pool.length){
    document.getElementById('kahoot-box').innerHTML = `<div class="k-start">
      <div class="k-emoji">⚡</div><h3>${UI['kahoot-cta'][LANG]}</h3><p>${UI['kahoot-none'][LANG]}</p>
      <button class="btn primary full" onclick="closeKahoot()">${UI['wallet-close'][LANG]}</button></div>`;
    return;
  }
  KAHOOT = {levelKey, questions: shuffleArr(pool).slice(0, Math.min(8,pool.length)), idx:-1, score:0, coins:0};
  renderKahootStart();
}
function closeKahoot(){
  document.getElementById('kahoot-modal').classList.remove('open');
  clearTimeout(KAHOOT_TIMER);
  KAHOOT = null;
}
function renderKahootStart(){
  document.getElementById('kahoot-box').innerHTML = `
    <div class="k-start">
      <div class="k-emoji">⚡</div>
      <h3>${UI['kahoot-cta'][LANG]}</h3>
      <p>${UI['kahoot-sub'][LANG]}</p>
      <div class="k-meta">${KAHOOT.questions.length} ${UI['kahoot-questions'][LANG]}</div>
      <button class="btn primary full" onclick="kahootNext()">${UI['kahoot-start'][LANG]}</button>
      <button class="btn ghost full" onclick="closeKahoot()">${UI['wallet-close'][LANG]}</button>
    </div>`;
}
function kahootNext(){
  KAHOOT.idx++;
  if(KAHOOT.idx >= KAHOOT.questions.length){ kahootFinish(); return; }
  renderKahootQuestion();
}
function renderKahootQuestion(){
  const q = KAHOOT.questions[KAHOOT.idx];
  const shapes = ['▲','◆','●','■'];
  const colors = ['k-red','k-blue','k-yellow','k-green'];
  const opts = q.opts.map((o,i)=>`<button class="k-opt ${colors[i%4]}" data-ok="${o.ok}" onclick="kahootAnswer(this)"><span class="k-shape">${shapes[i%4]}</span>${g(o.t)}</button>`).join('');
  document.getElementById('kahoot-box').innerHTML = `
    <div class="k-quiz">
      <div class="k-top"><span class="k-progress">${KAHOOT.idx+1}/${KAHOOT.questions.length}</span><span class="k-score">🪙 ${KAHOOT.coins}</span></div>
      <div class="k-timerbar"><i id="k-timer-i"></i></div>
      <h3 class="k-q">${g(q.q)}</h3>
      <div class="k-opts">${opts}</div>
      <div class="k-fb" id="k-fb"></div>
    </div>`;
  const bar = document.getElementById('k-timer-i');
  bar.style.transition = 'none'; bar.style.width='100%';
  requestAnimationFrame(()=>{ requestAnimationFrame(()=>{ bar.style.transition = `width ${KAHOOT_TIME}ms linear`; bar.style.width='0%'; }); });
  KAHOOT_START_T = Date.now();
  clearTimeout(KAHOOT_TIMER);
  KAHOOT_TIMER = setTimeout(()=>kahootAnswer(null), KAHOOT_TIME);
}
function kahootAnswer(btn){
  if(!KAHOOT) return;
  clearTimeout(KAHOOT_TIMER);
  const elapsed = Date.now() - KAHOOT_START_T;
  document.querySelectorAll('.k-opt').forEach(b=>b.disabled=true);
  const fb = document.getElementById('k-fb');
  let ok = false;
  if(btn){ ok = btn.dataset.ok === 'true'; btn.classList.add(ok?'correct':'wrong'); }
  if(!ok) document.querySelectorAll('.k-opt').forEach(b=>{ if(b.dataset.ok==='true') b.classList.add('correct'); });
  if(ok){
    KAHOOT.score++;
    let earned = KAHOOT_BASE;
    if(elapsed < KAHOOT_TIME/2) earned += KAHOOT_SPEED;
    KAHOOT.coins += earned;
    fb.textContent = '✓ '+UI['kahoot-correct'][LANG]+' +'+earned+' 🪙';
    fb.className = 'k-fb show ok';
  } else {
    fb.textContent = btn ? UI['kahoot-wrong'][LANG] : UI['kahoot-time'][LANG];
    fb.className = 'k-fb show no';
  }
  setTimeout(kahootNext, 1400);
}
function kahootFinish(){
  PROG.coins += KAHOOT.coins;
  PROG.kahoot = PROG.kahoot || {};
  PROG.kahoot[KAHOOT.levelKey] = Math.max(PROG.kahoot[KAHOOT.levelKey]||0, KAHOOT.score);
  saveProgress(PROG); updateCoins();
  const levelKey = KAHOOT.levelKey;
  document.getElementById('kahoot-box').innerHTML = `
    <div class="k-start">
      <div class="k-emoji">🏆</div>
      <h3>${UI['kahoot-result'][LANG]}</h3>
      <div class="k-final-score">${UI['kahoot-score'][LANG]}: <b>${KAHOOT.score}/${KAHOOT.questions.length}</b></div>
      <div class="coins-earned">🪙 +${KAHOOT.coins} ${UI['kahoot-earned'][LANG]}</div>
      <button class="btn primary full" onclick="openKahoot('${levelKey}')">${UI['kahoot-again'][LANG]}</button>
      <button class="btn ghost full" onclick="closeKahoot();openLevel('${levelKey}')">${UI['kahoot-back'][LANG]}</button>
    </div>`;
}
