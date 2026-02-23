// ══════════════════════════════════════
//  VEGGI TRACKER – app.js
// ══════════════════════════════════════

// ── Plant database ──────────────────────────────────────────────────────────
const PLANTS = [
  // 🥦 Gemüse
  { id:'brokkoli',       name:'Brokkoli',       emoji:'🥦', cat:'Gemüse' },
  { id:'karotte',        name:'Karotte',        emoji:'🥕', cat:'Gemüse' },
  { id:'tomate',         name:'Tomate',         emoji:'🍅', cat:'Gemüse' },
  { id:'spinat',         name:'Spinat',         emoji:'🌿', cat:'Gemüse' },
  { id:'salat',          name:'Salat',          emoji:'🥬', cat:'Gemüse' },
  { id:'paprika_rot',    name:'Paprika (Rot)',   emoji:'🫑', cat:'Gemüse' },
  { id:'paprika_gelb',   name:'Paprika (Gelb)',  emoji:'🫑', cat:'Gemüse' },
  { id:'paprika_gruen',  name:'Paprika (Grün)',  emoji:'🫑', cat:'Gemüse' },
  { id:'zucchini',       name:'Zucchini',       emoji:'🥒', cat:'Gemüse' },
  { id:'gurke',          name:'Gurke',          emoji:'🥒', cat:'Gemüse' },
  { id:'aubergine',      name:'Aubergine',      emoji:'🍆', cat:'Gemüse' },
  { id:'kuerbis',        name:'Kürbis',         emoji:'🎃', cat:'Gemüse' },
  { id:'mais',           name:'Mais',           emoji:'🌽', cat:'Gemüse' },
  { id:'erbsen',         name:'Erbsen',         emoji:'🫛', cat:'Gemüse' },
  { id:'gruene_bohnen',  name:'Grüne Bohnen',   emoji:'🫘', cat:'Gemüse' },
  { id:'blumenkohl',     name:'Blumenkohl',     emoji:'🥦', cat:'Gemüse' },
  { id:'rosenkohl',      name:'Rosenkohl',      emoji:'🌱', cat:'Gemüse' },
  { id:'wirsing',        name:'Wirsing',        emoji:'🥬', cat:'Gemüse' },
  { id:'rotkohl',        name:'Rotkohl',        emoji:'🥬', cat:'Gemüse' },
  { id:'weißkohl',       name:'Weißkohl',       emoji:'🥬', cat:'Gemüse' },
  { id:'staudensellerie',name:'Staudensellerie',emoji:'🌿', cat:'Gemüse' },
  { id:'fenchel',        name:'Fenchel',        emoji:'🌿', cat:'Gemüse' },
  { id:'rote_beete',     name:'Rote Bete',      emoji:'🔴', cat:'Gemüse' },
  { id:'kohlrabi',       name:'Kohlrabi',       emoji:'💚', cat:'Gemüse' },
  { id:'lauch',          name:'Lauch',          emoji:'🧅', cat:'Gemüse' },
  { id:'zwiebel',        name:'Zwiebel',        emoji:'🧅', cat:'Gemüse' },
  { id:'rote_zwiebel',   name:'Rote Zwiebel',   emoji:'🧅', cat:'Gemüse' },
  { id:'knoblauch',      name:'Knoblauch',      emoji:'🧄', cat:'Gemüse' },
  { id:'ingwer',         name:'Ingwer',         emoji:'🫚', cat:'Gemüse' },
  { id:'spargel',        name:'Spargel',        emoji:'🌿', cat:'Gemüse' },
  { id:'artischocke',    name:'Artischocke',    emoji:'🌱', cat:'Gemüse' },
  { id:'pastinake',      name:'Pastinake',      emoji:'🥕', cat:'Gemüse' },
  { id:'petersilienwurzel',name:'Petersilienwurzel',emoji:'🥕', cat:'Gemüse' },
  { id:'sellerie',       name:'Sellerie (Knolle)',emoji:'🫚', cat:'Gemüse' },
  { id:'susskartoffel',  name:'Süßkartoffel',   emoji:'🍠', cat:'Gemüse' },
  { id:'kartoffel',      name:'Kartoffel',      emoji:'🥔', cat:'Gemüse' },
  { id:'champignon',     name:'Champignon',     emoji:'🍄', cat:'Gemüse' },
  { id:'shiitake',       name:'Shiitake',       emoji:'🍄', cat:'Gemüse' },
  { id:'portobello',     name:'Portobello',     emoji:'🍄', cat:'Gemüse' },
  { id:'avocado',        name:'Avocado',        emoji:'🥑', cat:'Gemüse' },
  { id:'radieschen',     name:'Radieschen',     emoji:'🔴', cat:'Gemüse' },
  { id:'rettich',        name:'Rettich',        emoji:'🔴', cat:'Gemüse' },
  { id:'pak_choi',       name:'Pak Choi',       emoji:'🥬', cat:'Gemüse' },
  { id:'mangold',        name:'Mangold',        emoji:'🌿', cat:'Gemüse' },
  { id:'rukola',         name:'Rucola',         emoji:'🌿', cat:'Gemüse' },
  { id:'endivie',        name:'Endivie',        emoji:'🥬', cat:'Gemüse' },
  { id:'radicchio',      name:'Radicchio',      emoji:'🥬', cat:'Gemüse' },
  { id:'okra',           name:'Okra',           emoji:'🌿', cat:'Gemüse' },
  { id:'edamame',        name:'Edamame',        emoji:'🫛', cat:'Gemüse' },
  { id:'maiskölbchen',   name:'Baby-Mais',      emoji:'🌽', cat:'Gemüse' },
  { id:'navetsalat',     name:'Navetsalat',     emoji:'🥬', cat:'Gemüse' },
  { id:'napa_kohl',      name:'Napa-Kohl',      emoji:'🥬', cat:'Gemüse' },
  { id:'yam',            name:'Yams',           emoji:'🍠', cat:'Gemüse' },
  { id:'feldsalat',      name:'Feldsalat',      emoji:'🥬', cat:'Gemüse' },
  { id:'eisbergsalat',   name:'Eisbergsalat',   emoji:'🥬', cat:'Gemüse' },
  { id:'romanasalat',    name:'Romana-Salat',   emoji:'🥬', cat:'Gemüse' },
  { id:'butterhead',     name:'Kopfsalat',      emoji:'🥬', cat:'Gemüse' },
  { id:'lollo_rosso',    name:'Lollo Rosso',    emoji:'🥬', cat:'Gemüse' },
  { id:'lollo_bianco',   name:'Lollo Bianco',   emoji:'🥬', cat:'Gemüse' },
  { id:'friseesalat',    name:'Friseesalat',    emoji:'🥬', cat:'Gemüse' },
  { id:'batavia',        name:'Batavia-Salat',  emoji:'🥬', cat:'Gemüse' },
  { id:'mizuna',         name:'Mizuna',         emoji:'🌿', cat:'Gemüse' },
  { id:'tatsoi',         name:'Tatsoi',         emoji:'🥬', cat:'Gemüse' },
  { id:'babyspinat',     name:'Babyspinat',     emoji:'🌿', cat:'Gemüse' },
  { id:'kraussalat',     name:'Kraussalat',     emoji:'🥬', cat:'Gemüse' },
  { id:'eichblattsalat', name:'Eichblattsalat', emoji:'🥬', cat:'Gemüse' },
  { id:'blattspinat',    name:'Blattspinat',    emoji:'🌿', cat:'Gemüse' },
  { id:'portulak',       name:'Portulak',       emoji:'🌿', cat:'Gemüse' },
  { id:'brunnenkresse',  name:'Brunnenkresse',  emoji:'🌿', cat:'Gemüse' },
  { id:'sauerampfer',    name:'Sauerampfer',    emoji:'🌿', cat:'Gemüse' },

  // 🍎 Obst
  { id:'apfel',          name:'Apfel',          emoji:'🍎', cat:'Obst' },
  { id:'birne',          name:'Birne',          emoji:'🍐', cat:'Obst' },
  { id:'banane',         name:'Banane',         emoji:'🍌', cat:'Obst' },
  { id:'orange',         name:'Orange',         emoji:'🍊', cat:'Obst' },
  { id:'zitrone',        name:'Zitrone',        emoji:'🍋', cat:'Obst' },
  { id:'limette',        name:'Limette',        emoji:'🍋', cat:'Obst' },
  { id:'grapefruit',     name:'Grapefruit',     emoji:'🍊', cat:'Obst' },
  { id:'erdbeere',       name:'Erdbeere',       emoji:'🍓', cat:'Obst' },
  { id:'himbeere',       name:'Himbeere',       emoji:'🫐', cat:'Obst' },
  { id:'heidelbeere',    name:'Heidelbeere',    emoji:'🫐', cat:'Obst' },
  { id:'brombeere',      name:'Brombeere',      emoji:'🫐', cat:'Obst' },
  { id:'johannisbeere',  name:'Johannisbeere',  emoji:'🍇', cat:'Obst' },
  { id:'weintraube_rot', name:'Weintraube (Rot)',emoji:'🍇', cat:'Obst' },
  { id:'weintraube_gruen',name:'Weintraube (Grün)',emoji:'🍇', cat:'Obst' },
  { id:'kirsche',        name:'Kirsche',        emoji:'🍒', cat:'Obst' },
  { id:'pflaume',        name:'Pflaume',        emoji:'🍑', cat:'Obst' },
  { id:'pfirsich',       name:'Pfirsich',       emoji:'🍑', cat:'Obst' },
  { id:'aprikose',       name:'Aprikose',       emoji:'🍑', cat:'Obst' },
  { id:'mango',          name:'Mango',          emoji:'🥭', cat:'Obst' },
  { id:'ananas',         name:'Ananas',         emoji:'🍍', cat:'Obst' },
  { id:'papaya',         name:'Papaya',         emoji:'🍈', cat:'Obst' },
  { id:'kiwi',           name:'Kiwi',           emoji:'🥝', cat:'Obst' },
  { id:'melone',         name:'Melone',         emoji:'🍈', cat:'Obst' },
  { id:'wassermelone',   name:'Wassermelone',   emoji:'🍉', cat:'Obst' },
  { id:'granatapfel',    name:'Granatapfel',    emoji:'🍎', cat:'Obst' },
  { id:'feige',          name:'Feige',          emoji:'🍈', cat:'Obst' },
  { id:'dattel',         name:'Dattel',         emoji:'🌴', cat:'Obst' },
  { id:'pflaume_getrocknet',name:'Pflaume (getr.)',emoji:'🍑', cat:'Obst' },
  { id:'cranberry',      name:'Cranberry',      emoji:'🫐', cat:'Obst' },
  { id:'physalis',       name:'Physalis',       emoji:'🍊', cat:'Obst' },
  { id:'lychee',         name:'Lychee',         emoji:'🍈', cat:'Obst' },
  { id:'maracuja',       name:'Maracuja',       emoji:'🍊', cat:'Obst' },
  { id:'ugli',           name:'Ugli-Frucht',    emoji:'🍊', cat:'Obst' },
  { id:'yuzu',           name:'Yuzu',           emoji:'🍋', cat:'Obst' },

  // 🌾 Vollkorn & Getreide
  { id:'hafer',          name:'Haferflocken',   emoji:'🌾', cat:'Vollkorn' },
  { id:'quinoa',         name:'Quinoa',         emoji:'🌾', cat:'Vollkorn' },
  { id:'buchweizen',     name:'Buchweizen',     emoji:'🌾', cat:'Vollkorn' },
  { id:'braunreis',      name:'Brauner Reis',   emoji:'🍚', cat:'Vollkorn' },
  { id:'gerste',         name:'Gerste',         emoji:'🌾', cat:'Vollkorn' },
  { id:'dinkel',         name:'Dinkel',         emoji:'🌾', cat:'Vollkorn' },
  { id:'roggen',         name:'Roggen',         emoji:'🌾', cat:'Vollkorn' },
  { id:'hirse',          name:'Hirse',          emoji:'🌾', cat:'Vollkorn' },
  { id:'amaranth',       name:'Amaranth',       emoji:'🌾', cat:'Vollkorn' },
  { id:'vollkornbrot',   name:'Vollkornbrot',   emoji:'🍞', cat:'Vollkorn' },

  // 🫘 Hülsenfrüchte
  { id:'linsen_braun',   name:'Linsen (braun)',  emoji:'🫘', cat:'Hülsenfrüchte' },
  { id:'linsen_rot',     name:'Linsen (rot)',    emoji:'🫘', cat:'Hülsenfrüchte' },
  { id:'kichererbsen',   name:'Kichererbsen',   emoji:'🫘', cat:'Hülsenfrüchte' },
  { id:'schwarze_bohnen',name:'Schwarze Bohnen',emoji:'🫘', cat:'Hülsenfrüchte' },
  { id:'kidneybohnen',   name:'Kidney-Bohnen',  emoji:'🫘', cat:'Hülsenfrüchte' },
  { id:'weisse_bohnen',  name:'Weiße Bohnen',   emoji:'🫘', cat:'Hülsenfrüchte' },
  { id:'sojabohnen',     name:'Sojabohnen',     emoji:'🫘', cat:'Hülsenfrüchte' },
  { id:'tofu',           name:'Tofu',           emoji:'🍱', cat:'Hülsenfrüchte' },
  { id:'tempeh',         name:'Tempeh',         emoji:'🍱', cat:'Hülsenfrüchte' },
  { id:'erbsen_getrock', name:'Erbsen (getr.)', emoji:'🫛', cat:'Hülsenfrüchte' },

  // 🥜 Nüsse & Samen
  { id:'mandeln',        name:'Mandeln',        emoji:'🥜', cat:'Nüsse & Samen' },
  { id:'walnuss',        name:'Walnuss',        emoji:'🥜', cat:'Nüsse & Samen' },
  { id:'cashew',         name:'Cashew',         emoji:'🥜', cat:'Nüsse & Samen' },
  { id:'haselnuss',      name:'Haselnuss',      emoji:'🥜', cat:'Nüsse & Samen' },
  { id:'pistazien',      name:'Pistazien',      emoji:'🥜', cat:'Nüsse & Samen' },
  { id:'paranuss',       name:'Paranuss',       emoji:'🥜', cat:'Nüsse & Samen' },
  { id:'pekannuss',      name:'Pekannuss',      emoji:'🥜', cat:'Nüsse & Samen' },
  { id:'macadamia',      name:'Macadamia',      emoji:'🥜', cat:'Nüsse & Samen' },
  { id:'chiasamen',      name:'Chiasamen',      emoji:'⚪', cat:'Nüsse & Samen' },
  { id:'leinsamen',      name:'Leinsamen',      emoji:'🌱', cat:'Nüsse & Samen' },
  { id:'kuerbiskerne',   name:'Kürbiskerne',    emoji:'🟢', cat:'Nüsse & Samen' },
  { id:'sonnenblumenkerne',name:'Sonnenblumenkerne',emoji:'🌻', cat:'Nüsse & Samen' },
  { id:'sesam',          name:'Sesam',          emoji:'⚪', cat:'Nüsse & Samen' },
  { id:'hanfsamen',      name:'Hanfsamen',      emoji:'🌿', cat:'Nüsse & Samen' },
  { id:'mohnsamen',      name:'Mohnsamen',      emoji:'🔵', cat:'Nüsse & Samen' },
  { id:'nigellasamen',   name:'Nigellasamen',   emoji:'⚫', cat:'Nüsse & Samen' },
  { id:'xanthan',        name:'Xanthan-Samen',  emoji:'🌾', cat:'Nüsse & Samen' },

  // 🌿 Kräuter & Gewürze
  { id:'petersilie',     name:'Petersilie',     emoji:'🌿', cat:'Kräuter & Gewürze' },
  { id:'basilikum',      name:'Basilikum',      emoji:'🌿', cat:'Kräuter & Gewürze' },
  { id:'thymian',        name:'Thymian',        emoji:'🌿', cat:'Kräuter & Gewürze' },
  { id:'rosmarin',       name:'Rosmarin',       emoji:'🌿', cat:'Kräuter & Gewürze' },
  { id:'oregano',        name:'Oregano',        emoji:'🌿', cat:'Kräuter & Gewürze' },
  { id:'minze',          name:'Minze',          emoji:'🌿', cat:'Kräuter & Gewürze' },
  { id:'koriander',      name:'Koriander',      emoji:'🌿', cat:'Kräuter & Gewürze' },
  { id:'schnittlauch',   name:'Schnittlauch',   emoji:'🌿', cat:'Kräuter & Gewürze' },
  { id:'dill',           name:'Dill',           emoji:'🌿', cat:'Kräuter & Gewürze' },
  { id:'salbei',         name:'Salbei',         emoji:'🌿', cat:'Kräuter & Gewürze' },
  { id:'kurkuma',        name:'Kurkuma',        emoji:'🟡', cat:'Kräuter & Gewürze' },
  { id:'zimt',           name:'Zimt',           emoji:'🟤', cat:'Kräuter & Gewürze' },
  { id:'kuemmel',        name:'Kreuzkümmel',    emoji:'🌿', cat:'Kräuter & Gewürze' },
  { id:'paprikapulver',  name:'Paprikapulver',  emoji:'🌶️', cat:'Kräuter & Gewürze' },
  { id:'chili',          name:'Chili',          emoji:'🌶️', cat:'Kräuter & Gewürze' },
  { id:'pfeffer',        name:'Pfeffer',        emoji:'⚫', cat:'Kräuter & Gewürze' },
  { id:'kardamom',       name:'Kardamom',       emoji:'🌿', cat:'Kräuter & Gewürze' },
  { id:'kaffee',         name:'Kaffee',         emoji:'☕', cat:'Kräuter & Gewürze' },
  { id:'kakao',          name:'Kakao (>70%)',   emoji:'🍫', cat:'Kräuter & Gewürze' },
  { id:'gruener_tee',    name:'Grüner Tee',     emoji:'🍵', cat:'Kräuter & Gewürze' },
  { id:'nelke',          name:'Nelke',          emoji:'🌿', cat:'Kräuter & Gewürze' },
  { id:'urwuerzsalz',    name:'Urwürzsalz-Kraut',emoji:'🌿', cat:'Kräuter & Gewürze' },
];

const CATEGORIES = ['Alle', 'Gemüse', 'Obst', 'Vollkorn', 'Hülsenfrüchte', 'Nüsse & Samen', 'Kräuter & Gewürze'];
const WEEK_GOAL  = 30;
const MONTH_GOAL = 120; // ~30/Woche × 4

const CAT_COLORS = {
  'Gemüse':          '#2d8f47',
  'Obst':            '#f06292',
  'Vollkorn':        '#f9a825',
  'Hülsenfrüchte':   '#ab47bc',
  'Nüsse & Samen':   '#ff7043',
  'Kräuter & Gewürze':'#26c6da',
};

// ── State ───────────────────────────────────────────────────────────────────
let log       = []; // { plantId, timestamp }
let activeTab = 'add';
let activeCat = 'Alle';
let searchQ   = '';

function loadState() {
  try { log = JSON.parse(localStorage.getItem('vt_log') || '[]'); } catch(e) { log = []; }
}
function saveState() {
  localStorage.setItem('vt_log', JSON.stringify(log));
}

// ── Time helpers ─────────────────────────────────────────────────────────────
function todayStr()    { return new Date().toISOString().slice(0,10); }
function weekKey(d)    { // ISO week YYYY-WW
  const date  = new Date(d);
  const jan1  = new Date(date.getFullYear(), 0, 1);
  const week  = Math.ceil(((date - jan1) / 86400000 + jan1.getDay() + 1) / 7);
  return `${date.getFullYear()}-${String(week).padStart(2,'0')}`;
}
function monthKey(d)   { return new Date(d).toISOString().slice(0,7); }
function currentWeek() { return weekKey(new Date()); }
function currentMonth(){ return monthKey(new Date()); }
function dayName(dateStr) {
  const days = ['So','Mo','Di','Mi','Do','Fr','Sa'];
  return days[new Date(dateStr).getDay()];
}

// ── Derived data ─────────────────────────────────────────────────────────────
function uniqueInWeek(wk) {
  const ids = new Set();
  log.filter(e => weekKey(e.timestamp) === wk).forEach(e => ids.add(e.plantId));
  return ids;
}
function uniqueInMonth(mk) {
  const ids = new Set();
  log.filter(e => monthKey(e.timestamp) === mk).forEach(e => ids.add(e.plantId));
  return ids;
}
function eatenToday() {
  const t = todayStr();
  return log.filter(e => e.timestamp.slice(0,10) === t);
}
function isEatenThisWeek(plantId) {
  return uniqueInWeek(currentWeek()).has(plantId);
}

// ── Progress messages ─────────────────────────────────────────────────────────
function progressMessage(count) {
  if (count === 0) return 'Los geht\'s! 🌱';
  if (count < 5)  return 'Schöner Start!';
  if (count < 10) return 'Du kommst in Fahrt!';
  if (count < 15) return 'Halbzeit fast! 🔥';
  if (count < 20) return 'Super Vielfalt!';
  if (count < 25) return 'Kurz vor dem Ziel!';
  if (count < 30) return 'Fast geschafft! 💪';
  return '🎉 Ziel erreicht!';
}

// ── Header update ─────────────────────────────────────────────────────────────
function updateHeader() {
  const wk     = currentWeek();
  const mk     = currentMonth();
  const wCount = uniqueInWeek(wk).size;
  const mCount = uniqueInMonth(mk).size;

  // week ring
  const pct    = Math.min(wCount / WEEK_GOAL, 1);
  const circ   = 226;
  document.getElementById('weekRing').style.strokeDashoffset = circ * (1 - pct);
  document.getElementById('weekCount').textContent = wCount;
  document.getElementById('progressMsg').textContent = progressMessage(wCount);

  // month bar
  const mPct = Math.min(mCount / MONTH_GOAL, 1);
  document.getElementById('monthBarFill').style.width = (mPct * 100) + '%';
  document.getElementById('monthCount').textContent = mCount + ' Sorten';

  // week badge
  document.getElementById('weekBadge').textContent = 'KW ' + wk.split('-')[1];
}

// ── Plant Grid ─────────────────────────────────────────────────────────────
function buildCatChips() {
  const wrap = document.getElementById('catChips');
  wrap.innerHTML = CATEGORIES.map(c => `
    <button class="chip ${c === activeCat ? 'active' : ''}"
            style="${c !== 'Alle' && activeCat === c ? `background:${CAT_COLORS[c]};border-color:${CAT_COLORS[c]}` : ''}"
            onclick="setCat('${c}')">${c}</button>
  `).join('');
}

// Active letter filter (separate from text search)
let activeLetter = '';

function buildLetterBar() {
  // Collect first letters present in plant list
  const letters = [...new Set(PLANTS.map(p => p.name[0].toUpperCase()))].sort();
  const bar = document.getElementById('letterBar');
  if (!bar) return;

  let html = '';
  if (activeLetter) {
    html += `<button class="letter-btn clear-btn" onclick="setLetter('')">✕ Alle</button>`;
  }
  html += letters.map(l =>
    `<button class="letter-btn ${l === activeLetter ? 'active' : ''}" onclick="setLetter('${l}')">${l}</button>`
  ).join('');
  bar.innerHTML = html;
}

function setLetter(letter) {
  activeLetter = letter;
  // Also clear text search when using letter buttons
  if (letter) {
    document.getElementById('searchInput').value = '';
    searchQ = '';
  }
  buildLetterBar();
  renderGrid();
}

function filterPlants() {
  const input = document.getElementById('searchInput');
  searchQ = input.value.toLowerCase();
  // Clear letter filter when typing
  if (searchQ.length > 0 && activeLetter) {
    activeLetter = '';
    buildLetterBar();
  }
  // Hide iOS toolbar after 3 characters
  if (searchQ.length >= 3) {
    clearTimeout(window._kbTimer);
    window._kbTimer = setTimeout(() => input.blur(), 400);
  }
  renderGrid();
}

function setCat(cat) {
  activeCat = cat;
  buildCatChips();
  renderGrid();
}

function renderGrid() {
  const wk = currentWeek();
  let plants = PLANTS.filter(p => {
    const matchCat    = activeCat === 'Alle' || p.cat === activeCat;
    const matchQ      = p.name.toLowerCase().includes(searchQ);
    const matchLetter = !activeLetter || p.name[0].toUpperCase() === activeLetter;
    return matchCat && matchQ && matchLetter;
  });

  // Sort: not eaten first, then alpha
  plants.sort((a,b) => {
    const ae = isEatenThisWeek(a.id);
    const be = isEatenThisWeek(b.id);
    if (ae !== be) return ae ? 1 : -1;
    return a.name.localeCompare(b.name, 'de');
  });

  const grid = document.getElementById('plantGrid');
  if (plants.length === 0) {
    grid.innerHTML = `<div class="no-results"><span>🔍</span>Nichts gefunden</div>`;
    return;
  }
  grid.innerHTML = plants.map(p => {
    const eaten = isEatenThisWeek(p.id);
    const color = CAT_COLORS[p.cat] || '#2d8f47';
    return `
      <div class="plant-card ${eaten ? 'eaten' : ''}" onclick="togglePlant('${p.id}')">
        <div class="plant-emoji">${p.emoji}</div>
        <div class="plant-info">
          <div class="plant-name">${p.name}</div>
          <div class="plant-cat" style="color:${color}">${p.cat}</div>
        </div>
      </div>`;
  }).join('');
}

// ── Toggle plant eaten ────────────────────────────────────────────────────────
function togglePlant(plantId) {
  const plant = PLANTS.find(p => p.id === plantId);
  if (!plant) return;

  const alreadyThisWeek = isEatenThisWeek(plantId);

  if (alreadyThisWeek) {
    // Remove ALL entries this week for this plant
    const wk = currentWeek();
    log = log.filter(e => !(e.plantId === plantId && weekKey(e.timestamp) === wk));
    showToast(`${plant.emoji} ${plant.name} entfernt`);
  } else {
    log.push({ plantId, timestamp: new Date().toISOString() });
    const wCount = uniqueInWeek(currentWeek()).size;
    if (wCount === WEEK_GOAL) {
      showToast('🎉 30 Sorten erreicht! Fantastisch!');
      celebrate();
    } else {
      showToast(`${plant.emoji} ${plant.name} hinzugefügt!`);
    }
  }

  saveState();
  updateHeader();
  renderGrid();
  if (activeTab === 'today') renderToday();
  if (activeTab === 'stats') renderStats();
}

// ── Today tab ─────────────────────────────────────────────────────────────
function renderToday() {
  const today = eatenToday();
  const list  = document.getElementById('todayList');
  const title = document.getElementById('todayTitle');

  const dateStr = new Date().toLocaleDateString('de-DE', { weekday:'long', day:'numeric', month:'long' });
  title.textContent = dateStr;

  if (today.length === 0) {
    list.innerHTML = `
      <div class="today-empty">
        <span class="big-emoji">🥗</span>
        Noch nichts für heute eingetragen.<br>
        Geh zu <strong>➕ Hinzufügen</strong> und tippe deine Mahlzeiten ein!
      </div>`;
    return;
  }

  list.innerHTML = `<div class="today-list">` +
    today.slice().reverse().map(entry => {
      const p    = PLANTS.find(x => x.id === entry.plantId);
      if (!p) return '';
      const time = new Date(entry.timestamp).toLocaleTimeString('de-DE', { hour:'2-digit', minute:'2-digit' });
      const color= CAT_COLORS[p.cat] || '#2d8f47';
      return `
        <div class="today-item">
          <div class="today-item-emoji">${p.emoji}</div>
          <div class="today-item-info">
            <div class="today-item-name">${p.name}</div>
            <div class="today-item-cat" style="color:${color}">${p.cat}</div>
          </div>
          <div class="today-item-time">${time}</div>
          <button class="remove-btn" onclick="removeEntry('${entry.plantId}', '${entry.timestamp}')">✕</button>
        </div>`;
    }).join('') + `</div>`;
}

function removeEntry(plantId, timestamp) {
  log = log.filter(e => !(e.plantId === plantId && e.timestamp === timestamp));
  saveState();
  updateHeader();
  renderToday();
  if (activeTab === 'add') renderGrid();
}

// ── Stats tab ─────────────────────────────────────────────────────────────
function renderStats() {
  renderStatCards();
  renderWeekDays();
  renderTopPlants();
}

function renderStatCards() {
  const wk   = currentWeek();
  const mk   = currentMonth();
  const wCnt = uniqueInWeek(wk).size;
  const mCnt = uniqueInMonth(mk).size;
  const tCnt = new Set(log.map(e => e.plantId)).size;
  const streak = calcStreak();

  const colors = ['#2d8f47','#f06292','#ab47bc','#ff7043'];
  const cards  = [
    { value: wCnt,    label: 'Sorten diese Woche', suffix: '/30' },
    { value: mCnt,    label: 'Sorten diesen Monat', suffix: '' },
    { value: tCnt,    label: 'Sorten gesamt', suffix: '' },
    { value: streak,  label: 'Tage in Folge aktiv', suffix: '' },
  ];

  document.getElementById('statsGrid').innerHTML = cards.map((c,i) => `
    <div class="stat-card">
      <div class="stat-value" style="color:${colors[i]}">${c.value}<span style="font-size:16px;color:var(--text-muted)">${c.suffix}</span></div>
      <div class="stat-label">${c.label}</div>
    </div>`).join('');
}

function calcStreak() {
  if (log.length === 0) return 0;
  const days = new Set(log.map(e => e.timestamp.slice(0,10)));
  let streak = 0;
  let d = new Date();
  while (true) {
    const s = d.toISOString().slice(0,10);
    if (days.has(s)) { streak++; d.setDate(d.getDate()-1); }
    else break;
  }
  return streak;
}

function renderWeekDays() {
  const today  = new Date();
  const rows   = [];
  // Show Mon–today of current week
  let start = new Date(today);
  start.setDate(today.getDate() - ((today.getDay() + 6) % 7)); // Monday
  const maxCount = 10;

  for (let i = 0; i < 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    if (d > today) break;
    const ds   = d.toISOString().slice(0,10);
    const cnt  = new Set(log.filter(e => e.timestamp.slice(0,10) === ds).map(e => e.plantId)).size;
    const pct  = Math.min(cnt / maxCount * 100, 100);
    rows.push(`
      <div class="day-row">
        <div class="day-name">${dayName(ds)}</div>
        <div class="day-bar-wrap"><div class="day-bar" style="width:${pct}%"></div></div>
        <div class="day-count">${cnt}</div>
      </div>`);
  }
  document.getElementById('weekHistory').innerHTML = rows.join('');
}

function renderTopPlants() {
  const freq = {};
  log.forEach(e => { freq[e.plantId] = (freq[e.plantId] || 0) + 1; });
  const sorted = Object.entries(freq).sort((a,b) => b[1]-a[1]).slice(0,8);
  const medals = ['🥇','🥈','🥉'];

  if (sorted.length === 0) {
    document.getElementById('topPlants').innerHTML = '<div style="color:var(--text-muted);font-size:14px;padding:16px 0">Noch keine Daten.</div>';
    return;
  }

  document.getElementById('topPlants').innerHTML = sorted.map(([id, cnt], i) => {
    const p = PLANTS.find(x => x.id === id);
    if (!p) return '';
    return `
      <div class="top-plant-item">
        <div class="top-rank">${medals[i] || `${i+1}.`}</div>
        <div class="top-emoji">${p.emoji}</div>
        <div class="top-name">${p.name}</div>
        <div class="top-freq">${cnt}× gegessen</div>
      </div>`;
  }).join('');
}

// ── Tab switching ─────────────────────────────────────────────────────────────
function switchTab(tab) {
  activeTab = tab;
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  document.querySelectorAll('.tab-btn')[['add','today','stats'].indexOf(tab)].classList.add('active');

  if (tab === 'today') renderToday();
  if (tab === 'stats') renderStats();
  if (tab === 'add')   renderGrid();
}

// ── Toast ─────────────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

// ── Confetti ─────────────────────────────────────────────────────────────
function celebrate() {
  const emojis = ['🥦','🍎','🥕','🍓','🌿','🥑','🍋','🫘','🥜','🌾'];
  for (let i = 0; i < 18; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left = Math.random() * 90 + 5 + 'vw';
      el.style.top  = Math.random() * 40 + 10 + 'vh';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1300);
    }, i * 80);
  }
}

// ── Service worker ────────────────────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(reg => {
      // When a new service worker is found, activate it immediately
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            window.location.reload();
          }
        });
      });
    }).catch(() => {});

    // When new SW takes control, reload once to get fresh files
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) { refreshing = true; window.location.reload(); }
    });
  });
}

// ── Init ─────────────────────────────────────────────────────────────────────
loadState();
buildCatChips();
buildLetterBar();
renderGrid();
updateHeader();
