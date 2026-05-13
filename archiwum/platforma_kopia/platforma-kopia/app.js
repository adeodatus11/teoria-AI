/* ═══════════════════════════════════════════════════════════
   AI W SZKOLE – PLATFORMA SZKOLENIOWA
   app.js – Cała logika aplikacji + treści
   ═══════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────
   STATE & STORAGE
───────────────────────────────────────────── */
const STORE_KEY = 'aiSchoolHub_v1';

function getState() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
  catch(e) { return {}; }
}
function saveState(state) {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}
function updateState(patch) {
  const s = getState();
  Object.assign(s, patch);
  saveState(s);
}

function markDone(moduleId) {
  const s = getState();
  s.done = s.done || [];
  if(!s.done.includes(moduleId)) s.done.push(moduleId);
  saveState(s);
  updateProgress();
  const btn = document.getElementById('markDoneBtn_' + moduleId);
  if(btn) { btn.textContent = '✓ Ukończono'; btn.classList.add('done'); }
}

function updateProgress() {
  const modules = ['module1','module2','module3','module4','exercises','prompts','checklists','participants'];
  const s = getState();
  const done = (s.done || []).filter(m => modules.includes(m));
  const pct = Math.round((done.length / modules.length) * 100);
  document.getElementById('sidebarProgress').style.width = pct + '%';
  document.getElementById('sidebarProgressText').textContent = done.length + ' / ' + modules.length + ' ukończonych';
  // show continue banner data
  if(s.lastPage && s.lastPage !== 'home') {
    const btn = document.getElementById('btnContinue');
    if(btn) btn.style.display = 'flex';
  }
}

/* ─────────────────────────────────────────────
   ROUTER
───────────────────────────────────────────── */
const PAGES = {};

function showPage(id, anchor) {
  // close sidebar on mobile
  document.getElementById('sidebar').classList.remove('open');

  // update state
  updateState({ lastPage: id });

  // highlight nav
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const active = document.querySelector(`.nav-link[data-page="${id}"]`);
  if(active) active.classList.add('active');

  // render
  const main = document.getElementById('mainContent');
  if(PAGES[id]) {
    main.innerHTML = PAGES[id]();
    postRender(id);
  } else {
    main.innerHTML = `<div style="padding:60px 40px;text-align:center">
      <div style="font-size:48px;margin-bottom:16px">🚧</div>
      <p>Strona <strong>${id}</strong> – wkrótce dostępna.</p>
    </div>`;
  }

  main.scrollTo? main.scrollTo(0,0) : window.scrollTo(0,0);
  document.getElementById('mainContent').scrollTop = 0;

  if(anchor) {
    setTimeout(() => {
      const el = document.getElementById(anchor);
      if(el) el.scrollIntoView({ behavior:'smooth', block:'start' });
    }, 150);
  }
  updateProgress();
}

function postRender(id) {
  // restore checkboxes from localStorage
  if(id === 'checklists') restoreChecks();
  // update mark done button
  const s = getState();
  const btn = document.getElementById('markDoneBtn_' + id);
  if(btn && s.done && s.done.includes(id)) {
    btn.textContent = '✓ Ukończono'; btn.classList.add('done');
  }
}

function continueLearning() {
  const s = getState();
  if(s.lastPage && PAGES[s.lastPage]) showPage(s.lastPage);
  else showPage('module1');
}

/* ─────────────────────────────────────────────
   UI HELPERS
───────────────────────────────────────────── */
function toggleSearch() {
  document.getElementById('searchOverlay').classList.toggle('open');
  if(document.getElementById('searchOverlay').classList.contains('open')) {
    document.getElementById('searchInput').focus();
  }
}
function closeSearch(e) {
  if(e.target === document.getElementById('searchOverlay')) {
    document.getElementById('searchOverlay').classList.remove('open');
  }
}

function toggleMobileMenu() {
  document.getElementById('sidebar').classList.toggle('open');
}

function toggleSegment(el) {
  const seg = el.closest('.segment');
  seg.classList.toggle('open');
}

function togglePromptCard(el) {
  const card = el.closest('.prompt-card');
  card.classList.toggle('open');
}

function copyPrompt(btn) {
  const pre = btn.closest('.prompt-box').querySelector('pre');
  navigator.clipboard.writeText(pre.textContent).then(() => {
    btn.textContent = '✓ Skopiowano'; btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Kopiuj'; btn.classList.remove('copied'); }, 1800);
  });
}

function showTab(btn, panelId) {
  const tabset = btn.closest('.tabset');
  tabset.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  tabset.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(panelId).classList.add('active');
}

function filterPrompts(cat) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelectorAll('.prompt-card').forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
  });
}

/* ─────────────────────────────────────────────
   CHECKLIST PERSISTENCE
───────────────────────────────────────────── */
function onCheck(cb) {
  const s = getState();
  s.checks = s.checks || {};
  s.checks[cb.id] = cb.checked;
  saveState(s);
  cb.closest('.check-item').classList.toggle('checked', cb.checked);
}
function restoreChecks() {
  const s = getState();
  if(!s.checks) return;
  document.querySelectorAll('.check-item input').forEach(cb => {
    if(s.checks[cb.id] !== undefined) {
      cb.checked = s.checks[cb.id];
      cb.closest('.check-item').classList.toggle('checked', cb.checked);
    }
  });
}
function resetChecks(prefix) {
  const s = getState();
  s.checks = s.checks || {};
  document.querySelectorAll('.check-item input').forEach(cb => {
    if(cb.id.startsWith(prefix)) {
      cb.checked = false;
      cb.closest('.check-item').classList.remove('checked');
      delete s.checks[cb.id];
    }
  });
  saveState(s);
}

/* ─────────────────────────────────────────────
   SEARCH INDEX
───────────────────────────────────────────── */
const SEARCH_INDEX = [
  { title:'Framework PARTS – anatomia dobrego promptu', page:'module2', anchor:'parts', tags:['prompt','PARTS','struktura'], context:'Persona, Aim, Recipients, Tone, Structure' },
  { title:'RODO i ochrona danych w AI', page:'module4', anchor:'rodo', tags:['RODO','bezpieczeństwo','dane'], context:'Żadnych danych osobowych uczniów w zewnętrznej AI' },
  { title:'Halucynacje – co to jest', page:'module1', anchor:'halucynacje', tags:['halucynacje','błędy AI'], context:'AI może zmyślać fakty brzmiące wiarygodnie' },
  { title:'Ćwiczenie #1: Mój pierwszy prompt', page:'exercises', anchor:'ex1', tags:['ćwiczenie','prompt','wstęp'], context:'Pierwsze uruchomienie narzędzia AI' },
  { title:'Ćwiczenie #2: Ulepsz słaby prompt', page:'exercises', anchor:'ex2', tags:['ćwiczenie','PARTS','ulepsz'], context:'Porównaj słaby i mocny prompt' },
  { title:'Ćwiczenie #3: Konspekt lekcji', page:'exercises', anchor:'ex3', tags:['ćwiczenie','konspekt','dydaktyka'], context:'Tworzenie konspektu lekcji i różnicowanie' },
  { title:'Ćwiczenie #4: AI w administracji', page:'exercises', anchor:'ex4', tags:['ćwiczenie','administracja','mail'], context:'Streszczenie, mail do rodziców, checklista' },
  { title:'Ćwiczenie #5: Opis działania projektowego', page:'exercises', anchor:'ex5', tags:['ćwiczenie','projekt','Erasmus'], context:'Szkicowanie opisu działania do raportu UE' },
  { title:'Prompt: Konspekt lekcji (A1)', page:'prompts', anchor:'pA1', tags:['prompt','dydaktyka','konspekt'], context:'Wersja podstawowa i ulepszona do planowania lekcji' },
  { title:'Prompt: Mail do rodziców (C1)', page:'prompts', anchor:'pC1', tags:['prompt','komunikacja','mail'], context:'Email do rodziców – profesjonalny i ciepły' },
  { title:'Prompt: Streszczenie dokumentu (B1)', page:'prompts', anchor:'pB1', tags:['prompt','administracja','streszczenie'], context:'Wyciągnij kluczowe informacje z dokumentu' },
  { title:'Prompt: Opis działania projektowego (D1)', page:'prompts', anchor:'pD1', tags:['prompt','projekt','Erasmus+'], context:'Narracyjny opis do raportu UE' },
  { title:'Prompt: Mail do partnera zagranicznego (D2)', page:'prompts', anchor:'pD2', tags:['prompt','projekt','angielski'], context:'Angielska korespondencja z partnerem projektowym' },
  { title:'Checklista dobrego promptu', page:'checklists', anchor:'chk-prompt', tags:['checklista','PARTS','weryfikacja'], context:'5 pytań przed wysłaniem promptu' },
  { title:'Checklista weryfikacji odpowiedzi AI', page:'checklists', anchor:'chk-verify', tags:['checklista','weryfikacja','halucynacje'], context:'Sprawdź odpowiedź przed użyciem' },
  { title:'Checklista bezpieczeństwa / RODO', page:'checklists', anchor:'chk-rodo', tags:['checklista','RODO','bezpieczeństwo'], context:'Przed wklejeniem danych do AI' },
  { title:'Scenariusz prowadzenia – minuta po minucie', page:'trainer', anchor:'scenario', tags:['prowadzący','scenariusz','trener'], context:'Co robi trener w każdej minucie szkolenia' },
  { title:'5 Złotych Zasad Promptowania', page:'module2', anchor:'rules', tags:['zasady','prompt'], context:'Konkretny, iteruj, weryfikuj...' },
  { title:'10 zasad odpowiedzialnego używania AI', page:'participants', anchor:'rules10', tags:['etyka','zasady','odpowiedzialność'], context:'AI to narzędzie, nie wyrocznia' },
  { title:'Plan wdrożenia AI w szkole', page:'module4', anchor:'implementation', tags:['wdrożenie','szkoła','plan'], context:'Tydzień po tygodniu – jak wdrożyć AI w placówce' },
  { title:'Ankieta wejściowa', page:'module4', anchor:'survey-in', tags:['ewaluacja','ankieta'], context:'Kwestionariusz przed szkoleniem' },
  { title:'Ankieta wyjściowa', page:'module4', anchor:'survey-out', tags:['ewaluacja','ankieta'], context:'Kwestionariusz po szkoleniu' },
  { title:'Różnicowanie materiałów – prompt', page:'prompts', anchor:'pA2', tags:['dydaktyka','różnicowanie','SPE'], context:'Adaptacja tekstu do różnych poziomów uczniów' },
  { title:'Pytania do dyskusji grupowej', page:'trainer', anchor:'questions', tags:['prowadzący','dyskusja'], context:'Pytania otwierające i do każdego modułu' },
];

function runSearch(query) {
  const res = document.getElementById('searchResults');
  if(!query.trim()) { res.innerHTML = ''; return; }
  const q = query.toLowerCase();
  const hits = SEARCH_INDEX.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.context.toLowerCase().includes(q) ||
    item.tags.some(t => t.toLowerCase().includes(q))
  ).slice(0, 10);

  if(!hits.length) {
    res.innerHTML = `<div class="search-empty">Nie znaleziono wyników dla „${query}"</div>`;
    return;
  }
  res.innerHTML = hits.map(h => `
    <div class="search-result-item" onclick="document.getElementById('searchOverlay').classList.remove('open'); showPage('${h.page}','${h.anchor}')">
      <div class="sr-title">${h.title}</div>
      <div class="sr-context">
        ${h.tags.map(t => `<span class="sr-tag">${t}</span>`).join('')}
        ${h.context}
      </div>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════
   PAGE DEFINITIONS
═══════════════════════════════════════════════ */

/* ─────────── HOME ─────────── */
PAGES.home = () => {
  const s = getState();
  const hasProgress = s.lastPage && s.lastPage !== 'home';
  const lastPageName = {
    module1:'Moduł 1 – Czym jest AI?',
    module2:'Moduł 2 – Prompting PARTS',
    module3:'Moduł 3 – AI w dydaktyce',
    module4:'Moduł 4 – Projekty i ryzyka',
    exercises:'Ćwiczenia warsztatowe',
    prompts:'Promptownik',
    checklists:'Checklisty',
    participants:'Materiały dla uczestnika',
    trainer:'Materiały dla prowadzącego',
    slides:'Prezentacja – slajdy',
    bibliography:'Źródła i bibliografia',
  }[s.lastPage] || '';

  return `
  <div class="hero">
    <div class="hero-inner">
      <div class="hero-badge">
        <span>🎓</span> WIN4SMEs · COVE Polska · ZSZ nr 5 Wrocław
      </div>
      <h1>AI w pracy nauczyciela<br>i szkoły – <span>platforma szkoleniowa</span></h1>
      <p class="hero-subtitle">Interaktywny training hub do 4-godzinnego warsztatu praktycznego.<br>
      Przejdź cały kurs, wróć do konkretnego ćwiczenia lub otwórz promptownik – każdy materiał dostępny w sekundę.</p>
      <div class="hero-stats">
        <div class="hero-stat"><span class="stat-num">4h</span><span class="stat-label">praktyczny warsztat</span></div>
        <div class="hero-stat"><span class="stat-num">30+</span><span class="stat-label">gotowych promptów</span></div>
        <div class="hero-stat"><span class="stat-num">12</span><span class="stat-label">ćwiczeń</span></div>
        <div class="hero-stat"><span class="stat-num">~5.9h</span><span class="stat-label">oszczędności/tydzień</span></div>
      </div>
      <div class="hero-cta">
        <button class="btn-hero-primary" onclick="showPage('module1')">🚀 Zacznij kurs od początku</button>
        ${hasProgress ? `<button class="btn-hero-secondary" onclick="showPage('${s.lastPage}')">▶ Kontynuuj: ${lastPageName}</button>` : ''}
      </div>
    </div>
  </div>

  ${hasProgress ? `
  <div class="continue-banner">
    <div>
      <div class="cb-text">👋 Witaj z powrotem!</div>
      <div class="cb-sub">Ostatnio przeglądałeś/łaś: <strong>${lastPageName}</strong></div>
    </div>
    <button onclick="showPage('${s.lastPage}')">Kontynuuj →</button>
  </div>` : ''}

  <div class="section-block">
    <div style="max-width:860px; background:white; border:1px solid var(--clr-border); border-radius:16px; padding:28px 30px; margin-bottom:40px">
      <div class="module-track-title">🗺️ Mapa kursu – Twój postęp</div>
      <div class="modules-row">
        ${buildModulePills()}
      </div>
    </div>

    <h2 class="section-title">Wybierz ścieżkę wejścia</h2>
    <p class="section-subtitle">Wejdź w dowolny punkt kursu, ćwiczenie lub zasób.</p>

    <div class="entry-grid">
      <div class="entry-card featured" onclick="showPage('module1')">
        <div class="ec-icon">📘</div>
        <div class="ec-title">Przejdź pełny kurs</div>
        <div class="ec-desc">4 moduły, od podstaw AI po projekty unijne</div>
        <span class="ec-tag">⭐ Polecamy</span>
      </div>
      <div class="entry-card" onclick="showPage('exercises')">
        <div class="ec-icon">🧩</div>
        <div class="ec-title">Ćwiczenia warsztatowe</div>
        <div class="ec-desc">12 gotowych ćwiczeń z instrukcjami</div>
        <span class="ec-tag">Praktyka</span>
      </div>
      <div class="entry-card" onclick="showPage('prompts')">
        <div class="ec-icon">💡</div>
        <div class="ec-title">Promptownik</div>
        <div class="ec-desc">30+ gotowych promptów w 8 kategoriach</div>
        <span class="ec-tag">Narzędzia</span>
      </div>
      <div class="entry-card" onclick="showPage('checklists')">
        <div class="ec-icon">✅</div>
        <div class="ec-title">Checklisty</div>
        <div class="ec-desc">Prompt, weryfikacja AI, RODO, minitest wiedzy</div>
        <span class="ec-tag">Narzędzia</span>
      </div>
      <div class="entry-card" onclick="showPage('participants')">
        <div class="ec-icon">📋</div>
        <div class="ec-title">Dla uczestnika</div>
        <div class="ec-desc">Karta pracy, ściąga, 10 zasad, mini-zadanie</div>
        <span class="ec-tag">Materiały</span>
      </div>
      <div class="entry-card" onclick="showPage('trainer')">
        <div class="ec-icon">🎤</div>
        <div class="ec-title">Dla prowadzącego</div>
        <div class="ec-desc">Scenariusz min po min, Q&A, stop-klatki</div>
        <span class="ec-tag">Trener</span>
      </div>
      <div class="entry-card" onclick="showPage('slides')">
        <div class="ec-icon">📊</div>
        <div class="ec-title">Plan prezentacji</div>
        <div class="ec-desc">32 slajdy z treścią i narracją</div>
        <span class="ec-tag">Prezentacja</span>
      </div>
      <div class="entry-card" onclick="showPage('bibliography')">
        <div class="ec-icon">📚</div>
        <div class="ec-title">Źródła i bibliografia</div>
        <div class="ec-desc">UNESCO, OECD, KE, badania naukowe</div>
        <span class="ec-tag">Nauka</span>
      </div>
    </div>
  </div>

  <div style="background:var(--clr-bg2); border-top:1px solid var(--clr-border); border-bottom:1px solid var(--clr-border); padding:40px">
    <div style="max-width:1200px; margin:0 auto">
      <h2 class="section-title">🚀 Użyj od razu – szybki dostęp</h2>
      <p class="section-subtitle">Najczęśiej używane zasoby w jednym miejscu</p>
      <div class="quick-grid">
        <div class="quick-card" onclick="showPage('prompts','pA1')">
          <div class="qc-icon">📝</div>
          <div class="qc-title">Prompt: Konspekt lekcji</div>
          <div class="qc-sub">Wersja podstawowa + ulepszona</div>
        </div>
        <div class="quick-card" onclick="showPage('prompts','pC1')">
          <div class="qc-icon">📧</div>
          <div class="qc-title">Prompt: Mail do rodziców</div>
          <div class="qc-sub">Profesjonalny email w 30 sek.</div>
        </div>
        <div class="quick-card" onclick="showPage('prompts','pB1')">
          <div class="qc-icon">📄</div>
          <div class="qc-title">Prompt: Streszczenie doc.</div>
          <div class="qc-sub">Lista zadań + terminy</div>
        </div>
        <div class="quick-card" onclick="showPage('prompts','pD1')">
          <div class="qc-icon">🌍</div>
          <div class="qc-title">Prompt: Projekt EU</div>
          <div class="qc-sub">Opis działania do raportu</div>
        </div>
        <div class="quick-card" onclick="showPage('checklists','chk-prompt')">
          <div class="qc-icon">✅</div>
          <div class="qc-title">Checklista promptu</div>
          <div class="qc-sub">Sprawdź przed wysłaniem</div>
        </div>
        <div class="quick-card" onclick="showPage('checklists','chk-verify')">
          <div class="qc-icon">🔍</div>
          <div class="qc-title">Weryfikacja odpowiedzi AI</div>
          <div class="qc-sub">5 pytań przed użyciem</div>
        </div>
        <div class="quick-card" onclick="showPage('module2','parts')">
          <div class="qc-icon">🧠</div>
          <div class="qc-title">Framework PARTS</div>
          <div class="qc-sub">Struktura dobrego promptu</div>
        </div>
        <div class="quick-card" onclick="showPage('participants','rules10')">
          <div class="qc-icon">⚖️</div>
          <div class="qc-title">10 zasad etycznych AI</div>
          <div class="qc-sub">Do zapamiętania i wdrożenia</div>
        </div>
      </div>
    </div>
  </div>
  `;
};

function buildModulePills() {
  const s = getState();
  const done = s.done || [];
  const modules = [
    { id:'module1', label:'📘 Moduł 1' },
    { id:'module2', label:'✍️ Moduł 2' },
    { id:'module3', label:'🎓 Moduł 3' },
    { id:'module4', label:'🌍 Moduł 4' },
    { id:'exercises', label:'🧩 Ćwiczenia' },
    { id:'prompts', label:'💡 Prompty' },
    { id:'checklists', label:'✅ Checklisty' },
    { id:'participants', label:'📋 Uczestnik' },
  ];
  return modules.map(m => {
    const isDone = done.includes(m.id);
    const cls = isDone ? 'done' : '';
    return `<div class="module-pill ${cls}" onclick="showPage('${m.id}')">${isDone ? '✓ ' : ''}${m.label}</div>`;
  }).join('');
}

/* ─────────── MODULE 1 ─────────── */
PAGES.module1 = () => `
  <div class="module-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> › Moduł 1</div>
    <div class="module-number">Moduł 1 · 60 minut</div>
    <h2>Czym jest AI i co nam daje?</h2>
    <div class="module-meta">
      <span class="meta-badge">⏱ 60 min</span>
      <span class="meta-badge">📍 0:00 – 1:00</span>
      <span class="meta-badge">🎯 Wprowadzenie</span>
    </div>
    <p class="module-desc">Podstawy działania dużych modeli językowych, demitologizacja AI, pierwsze użycie narzędzia i analiza wyników. Minimum teorii – maksimum praktyki.</p>
    <button id="markDoneBtn_module1" class="mark-done-btn" onclick="markDone('module1')">✓ Oznacz jako ukończony</button>
  </div>
  <div class="module-body">

    <div class="data-highlight">
      <div class="data-stat"><span class="ds-num">5,9h</span><span class="ds-label">tygodniowej oszczędności dla regularnych użytkowników AI (Gallup/Walton 2025)</span></div>
      <div class="data-stat"><span class="ds-num">29%</span><span class="ds-label">nauczycieli OECD zgłasza potrzebę szkoleń z AI (TALIS 2024)</span></div>
      <div class="data-stat"><span class="ds-num">74%</span><span class="ds-label">nauczycieli: AI poprawiła jakość pracy administracyjnej</span></div>
    </div>

    <div class="segment open" id="seg11">
      <div class="segment-header" onclick="toggleSegment(this)">
        <h3><span>📋</span> Segment 1.1 – Intro i ankieta wejściowa</h3>
        <span class="seg-time">0:00–0:10 (10 min)</span>
        <span class="segment-toggle">▾</span>
      </div>
      <div class="segment-body">
        <p><strong>Cel:</strong> Nawiązanie kontaktu, ustalenie poziomu grupy, aktywacja uczestników od pierwszej minuty.</p>
        <div class="info-card" style="margin-top:12px">
          <h4>Co dzieje się w tej fazie?</h4>
          <ul>
            <li>Prowadzący wita się i przedstawia strukturę dnia (3 min)</li>
            <li>Uczestnicy wypełniają ankietę wejściową (5 min)</li>
            <li>Klucz pytań: „Co używałeś z AI do tej pory i czego oczekujesz?"</li>
            <li>Wyniki ankiety pozwalają dostosować tempo do grupy</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="segment" id="seg12">
      <div class="segment-header" onclick="toggleSegment(this)">
        <h3><span>🤖</span> Segment 1.2 – Co to jest AI i dlaczego to ważne <em>teraz</em></h3>
        <span class="seg-time">0:10–0:22 (12 min)</span>
        <span class="segment-toggle">▾</span>
      </div>
      <div class="segment-body" id="halucynacje">
        <p><strong>Cel:</strong> Podstawowe, niestraszące zrozumienie działania LLM; demitologizacja AI.</p>

        <div class="content-grid" style="margin-top:14px">
          <div class="info-card">
            <h4>Czym jest AI językowa (LLM)</h4>
            <ul>
              <li>Model przewidywania następnego słowa – nie baza wiedzy</li>
              <li>Trenowany na miliardach tekstów z internetu</li>
              <li>Dlatego pisze płynnie – ale nie „wie"</li>
              <li>Najlepsza analogia: <strong>bardzo zaawansowane autouzupełnianie</strong></li>
            </ul>
          </div>
          <div class="info-card">
            <h4>Halucynacje – mechanizm i skutki</h4>
            <ul>
              <li>AI generuje tekst „prawdopodobny", nie „prawdziwy"</li>
              <li>Może zmyślać fakty, daty, cytaty, przepisy prawa</li>
              <li>Robi to z absolutną pewnością siebie</li>
              <li>Jedyne rozwiązanie: <strong>zawsze weryfikuj</strong></li>
            </ul>
          </div>
        </div>

        <div class="warn-box">
          <strong>⚠️ Kluczowe do zapamiętania:</strong> AI językowa NIGDY nie „wie". Ona <em>przewiduje</em>. Cały czas miej to z tyłu głowy – szczególnie przy faktach, datach i przepisach.
        </div>

        <p style="margin-top:14px;font-size:14px;"><strong>Przykład demonstracji na żywo:</strong> Prowadzący otwiera ChatGPT/Gemini i wpisuje prompt dotyczący konkretnego zadania szkolnego. Uczestnicy obserwują proces i wynik.</p>
      </div>
    </div>

    <div class="segment" id="seg13">
      <div class="segment-header" onclick="toggleSegment(this)">
        <h3><span>⌨️</span> Segment 1.3 – Pierwsze logowanie i pierwszy prompt (Ćwiczenie #1)</h3>
        <span class="seg-time">0:22–0:45 (23 min)</span>
        <span class="segment-toggle">▾</span>
      </div>
      <div class="segment-body">
        <p><strong>Cel:</strong> Przełamanie bariery; pierwsze realne doświadczenie z narzędziem.</p>
        <div class="info-card" style="margin-top:12px">
          <h4>Dostępne narzędzia (bezpłatne)</h4>
          <ul>
            <li><strong>ChatGPT</strong> → chat.openai.com (konto email lub Google)</li>
            <li><strong>Gemini</strong> → gemini.google.com (konto Google)</li>
            <li><strong>Claude</strong> → claude.ai (bezpłatna rejestracja)</li>
          </ul>
        </div>
        <div class="success-box" style="margin-top:12px">
          <strong>Instrukcja dla uczestnika:</strong> Wpisz jedno pytanie lub zadanie, z którym regularnie tracisz czas w pracy. Nie myśl za dużo – napisz tak, jak myślisz.
        </div>
        <div style="margin-top:14px;font-size:14px">
          <strong>Przykładowe zadania (dla osób, które nie wiedzą od czego zacząć):</strong>
          <ul style="margin-top:8px;padding-left:20px">
            <li>„Napisz dla mnie ogłoszenie o zebraniu z rodzicami"</li>
            <li>„Pomóż mi napisać plan lekcji na temat…"</li>
            <li>„Streszcz mi ten fragment: [wklej fragment]"</li>
            <li>„Zrób checklistę do organizacji wycieczki szkolnej"</li>
          </ul>
        </div>
        <div style="margin-top:16px">
          <button class="btn-continue" onclick="showPage('exercises','ex1')" style="display:inline-flex">→ Przejdź do pełnego Ćwiczenia #1</button>
        </div>
      </div>
    </div>

    <div class="segment" id="seg14">
      <div class="segment-header" onclick="toggleSegment(this)">
        <h3><span>💬</span> Segment 1.4 – Omówienie pierwszych wyników + „Co poszło źle?"</h3>
        <span class="seg-time">0:45–1:00 (15 min)</span>
        <span class="segment-toggle">▾</span>
      </div>
      <div class="segment-body">
        <p><strong>Cel:</strong> Analiza wyników; zrozumienie, dlaczego ogólne prompty dają ogólne wyniki.</p>
        <div class="info-card" style="margin-top:12px">
          <h4>Pytania do dyskusji zbiorowej</h4>
          <ul>
            <li>Co AI zrobiła dobrze?</li>
            <li>Co jest bezużyteczne lub ogólnikowe?</li>
            <li>Co musiałbyś/musiałabyś zmienić przed użyciem?</li>
          </ul>
        </div>
        <div class="success-box" style="margin-top:12px">
          <strong>Kluczowy wniosek:</strong> <em>Jakość promptu = jakość wyniku.</em><br>Zaraz nauczymy się pisać prompty, które dają przydatne wyniki.
        </div>
      </div>
    </div>

    <div style="margin-top:16px;display:flex;gap:12px;flex-wrap:wrap">
      <button class="btn-continue" onclick="showPage('module2')" style="display:inline-flex">Dalej: Moduł 2 – Prompting PARTS →</button>
    </div>
  </div>
`;

/* ─────────── MODULE 2 ─────────── */
PAGES.module2 = () => `
  <div class="module-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> › Moduł 2</div>
    <div class="module-number">Moduł 2 · 50 minut</div>
    <h2>Prompting – jak rozmawiać z AI, żeby miało sens</h2>
    <div class="module-meta">
      <span class="meta-badge">⏱ 50 min</span>
      <span class="meta-badge">📍 1:00 – 1:50</span>
      <span class="meta-badge">🎯 Framework PARTS</span>
    </div>
    <p class="module-desc">Nauka budowania skutecznych promptów według frameworku PARTS. Ćwiczenie: poprawa słabych promptów. Pięć złotych zasad prompting.</p>
    <button id="markDoneBtn_module2" class="mark-done-btn" onclick="markDone('module2')">✓ Oznacz jako ukończony</button>
  </div>
  <div class="module-body">

    <div class="segment open" id="parts">
      <div class="segment-header" onclick="toggleSegment(this)">
        <h3><span>🧠</span> Segment 2.1 – Framework PARTS (anatomia dobrego promptu)</h3>
        <span class="seg-time">1:00–1:10 (10 min)</span>
        <span class="segment-toggle">▾</span>
      </div>
      <div class="segment-body">
        <p style="margin-bottom:16px"><strong>Cel:</strong> Przekazanie prostej, zapamiętywialnej struktury skutecznego promptu.</p>

        <table class="parts-table">
          <thead><tr><th>Litera</th><th>Znaczenie</th><th>Przykład</th></tr></thead>
          <tbody>
            <tr><td><span class="parts-letter">P</span></td><td><strong>Persona</strong> – jaką rolę przyjmuje AI</td><td>„Działaj jako doświadczony nauczyciel biologii…"</td></tr>
            <tr><td><span class="parts-letter">A</span></td><td><strong>Aim</strong> – cel, co ma powstać</td><td>„…przygotuj konspekt lekcji o fotosyntzie…"</td></tr>
            <tr><td><span class="parts-letter">R</span></td><td><strong>Recipients</strong> – dla kogo jest efekt</td><td>„…dla uczniów klasy 7, którzy mają trudności…"</td></tr>
            <tr><td><span class="parts-letter">T</span></td><td><strong>Tone</strong> – styl i ton odpowiedzi</td><td>„…pisząc w prostym, angażującym języku…"</td></tr>
            <tr><td><span class="parts-letter">S</span></td><td><strong>Structure</strong> – format wyjścia</td><td>„…w formacie tabeli: Aktywność | Czas | Materiały."</td></tr>
          </tbody>
        </table>

        <h4 style="margin:20px 0 10px;font-size:14px">Porównanie promptów:</h4>
        <div class="content-grid">
          <div>
            <p style="font-size:12px;font-weight:700;color:var(--clr-warn);margin-bottom:6px">❌ SŁABY PROMPT</p>
            <div class="prompt-box"><pre>Napisz lekcję o wojnie.</pre></div>
            <p style="font-size:12px;color:var(--clr-text-muted);margin-top:6px">Wynik: ogólnikowy, bezużyteczny</p>
          </div>
          <div>
            <p style="font-size:12px;font-weight:700;color:var(--clr-success);margin-bottom:6px">✅ MOCNY PROMPT (PARTS)</p>
            <div class="prompt-box" style="position:relative">
              <pre>Działaj jako nauczyciel historii w szkole podstawowej.
Przygotuj konspekt lekcji (45 min) na temat wybuchu
I wojny światowej dla uczniów klasy VIII (14 lat).
Uwzględnij element dla uczniów zdolnych.
Styl: angażujący, z odniesieniami do współczesności.
Format: Czas | Aktywność | Materiały | Uwagi</pre>
              <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
            </div>
          </div>
        </div>
        <div style="margin-top:16px">
          <button class="btn-continue" onclick="showPage('exercises','ex2')" style="display:inline-flex">→ Przejdź do Ćwiczenia #2</button>
        </div>
      </div>
    </div>

    <div class="segment" id="rules">
      <div class="segment-header" onclick="toggleSegment(this)">
        <h3><span>⭐</span> Segment 2.3 – 5 Złotych Zasad Promptowania</h3>
        <span class="seg-time">1:30–1:50 (20 min)</span>
        <span class="segment-toggle">▾</span>
      </div>
      <div class="segment-body">
        <ol class="rules-list">
          <li><div><strong>Bądź konkretny</strong> – AI nie czyta myśli. Im więcej kontekstu, tym lepszy wynik.</div></li>
          <li><div><strong>Podaj kontekst</strong> – kto piszesz, dla kogo, w jakim celu, dla jakiej grupy.</div></li>
          <li><div><strong>Określ format wyjścia</strong> – lista, tabela, email, streszczenie, akapit narracyjny.</div></li>
          <li><div><strong>Iteruj</strong> – pierwsza odpowiedź to szkic, nie finał. Kolejny prompt to: „Teraz zmień X".</div></li>
          <li><div><strong>Weryfikuj</strong> – traktuj każdy wynik jak wersję roboczą wymagającą sprawdzenia.</div></li>
        </ol>
        <div class="warn-box" style="margin-top:20px">
          <strong>Kiedy AI zawodzi:</strong> Zbyt ogólny prompt · Szukanie aktualnych faktów/przepisów · Brak kontekstu Twojego projektu · Kopiowanie bez sprawdzenia wyników
        </div>
      </div>
    </div>

    <div style="margin-top:16px;display:flex;gap:12px;flex-wrap:wrap">
      <button class="btn-continue" onclick="showPage('module3')" style="display:inline-flex">Dalej: Moduł 3 – AI w dydaktyce →</button>
    </div>
  </div>
`;

/* ─────────── MODULE 3 ─────────── */
PAGES.module3 = () => `
  <div class="module-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> › Moduł 3</div>
    <div class="module-number">Moduł 3 · 60 minut</div>
    <h2>AI w pracy dydaktycznej i organizacyjnej</h2>
    <div class="module-meta">
      <span class="meta-badge">⏱ 60 min</span>
      <span class="meta-badge">📍 2:00 – 3:00</span>
      <span class="meta-badge">🎯 Dydaktyka + Administracja</span>
    </div>
    <p class="module-desc">Praktyczne generowanie materiałów dydaktycznych, różnicowanie, AI w dokumentach szkolnych i komunikacji.</p>
    <button id="markDoneBtn_module3" class="mark-done-btn" onclick="markDone('module3')">✓ Oznacz jako ukończony</button>
  </div>
  <div class="module-body">

    <div class="segment open">
      <div class="segment-header" onclick="toggleSegment(this)">
        <h3><span>🎓</span> Segment 3.1 – AI w dydaktyce: co jest możliwe?</h3>
        <span class="seg-time">2:00–2:30 (30 min)</span>
        <span class="segment-toggle">▾</span>
      </div>
      <div class="segment-body">
        <table class="data-table" style="margin:12px 0">
          <thead>
            <tr><th>Zadanie dydaktyczne</th><th>AI robi</th><th>Ty robisz</th></tr>
          </thead>
          <tbody>
            <tr><td>Konspekt lekcji</td><td>Strukturę i treść (~80%)</td><td>Dostosowanie do Twojej klasy</td></tr>
            <tr><td>Różnicowanie materiału</td><td>Wersje dla różnych poziomów</td><td>Weryfikacja i finalizacja</td></tr>
            <tr><td>Pytania sprawdzające</td><td>Zestaw wg taksonomii Blooma</td><td>Sprawdzenie merytoryczne</td></tr>
            <tr><td>Informacja zwrotna</td><td>Szkic formatywnej IZ</td><td>Twój osąd pedagogiczny</td></tr>
            <tr><td>Przykłady i analogie</td><td>4 różne analogie pojęcia</td><td>Wybór najlepszej dla grupy</td></tr>
          </tbody>
        </table>
        <div class="success-box">
          <strong>Zasada:</strong> AI robi ciężką, powtarzalną robotę. <strong>Wy robicie wartościową, kontekstową robotę</strong> – tę, której AI nie może zrobić za Was.
        </div>
        <div style="margin-top:16px">
          <button class="btn-continue" onclick="showPage('exercises','ex3')" style="display:inline-flex">→ Przejdź do Ćwiczenia #3 – Konspekt lekcji</button>
        </div>
      </div>
    </div>

    <div class="segment">
      <div class="segment-header" onclick="toggleSegment(this)">
        <h3><span>🗂️</span> Segment 3.2 – AI w administracji i komunikacji</h3>
        <span class="seg-time">2:30–3:00 (30 min)</span>
        <span class="segment-toggle">▾</span>
      </div>
      <div class="segment-body">
        <div class="content-grid" style="margin-top:12px">
          <div class="info-card">
            <h4>AI w administracji szkolnej</h4>
            <ul>
              <li>Streszczenia dokumentów + lista zadań</li>
              <li>Protokoły z luźnych notatek</li>
              <li>Harmonogram tygodnia / plan imprez</li>
              <li>Checklisty organizacyjne</li>
              <li>Plan wdrożenia nowej inicjatywy</li>
            </ul>
          </div>
          <div class="info-card">
            <h4>AI w komunikacji szkolnej</h4>
            <ul>
              <li>Maile do rodziców (z notatek)</li>
              <li>Ogłoszenia i posty szkolne</li>
              <li>Uproszczenie dokumentów prawnych</li>
              <li>Komunikaty dla rodziców/uczniów</li>
              <li>Profile szkoły i projekt dla mediów</li>
            </ul>
          </div>
        </div>
        <div style="margin-top:16px">
          <button class="btn-continue" onclick="showPage('exercises','ex4')" style="display:inline-flex">→ Przejdź do Ćwiczenia #4</button>
        </div>
      </div>
    </div>

    <div style="margin-top:16px">
      <button class="btn-continue" onclick="showPage('module4')" style="display:inline-flex">Dalej: Moduł 4 – Projekty i ryzyka →</button>
    </div>
  </div>
`;

/* ─────────── MODULE 4 ─────────── */
PAGES.module4 = () => `
  <div class="module-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> › Moduł 4</div>
    <div class="module-number">Moduł 4 · 50 minut</div>
    <h2>AI w projektach UE i etyczne granice</h2>
    <div class="module-meta">
      <span class="meta-badge">⏱ 50 min</span>
      <span class="meta-badge">📍 3:00 – 3:55</span>
      <span class="meta-badge">🎯 Projekty · RODO · Etyka</span>
    </div>
    <p class="module-desc">Zastosowania AI w projektach Erasmus+/WIN4SMEs, zasady transparentności wobec KE, ryzyka prawne i etyczne, osobisty plan wdrożenia.</p>
    <button id="markDoneBtn_module4" class="mark-done-btn" onclick="markDone('module4')">✓ Oznacz jako ukończony</button>
  </div>
  <div class="module-body">

    <div class="segment open" id="projects">
      <div class="segment-header" onclick="toggleSegment(this)">
        <h3><span>🌍</span> Segment 4.1 – AI w projektach unijnych i współpracy międzynarodowej</h3>
        <span class="seg-time">3:00–3:20 (20 min)</span>
        <span class="segment-toggle">▾</span>
      </div>
      <div class="segment-body">
        <div class="content-grid" style="margin-top:12px">
          <div class="info-card">
            <h4>✅ AI może pomóc w:</h4>
            <ul>
              <li>Szkicowaniu opisów działań do raportów</li>
              <li>Streszczaniu raportów partnerów</li>
              <li>Tłumaczeniu korespondencji</li>
              <li>Przygotowaniu agendy spotkania</li>
              <li>Newsletterach projektowych</li>
              <li>Streszeniach wykonawczych projektu</li>
            </ul>
          </div>
          <div class="info-card">
            <h4>❌ AI NIE może zastąpić:</h4>
            <ul>
              <li>Twojej odpowiedzialności za raport UE</li>
              <li>Konkretnych danych Twojego projektu</li>
              <li>Weryfikacji wymagań grantu (FRSE, KE)</li>
              <li>Decyzji o treści i kształcie sprawozdania</li>
              <li>Podpisu koordynatora</li>
            </ul>
          </div>
        </div>
        <div class="warn-box" style="margin-top:12px">
          <strong>⚠️ Zasada transparentności KE:</strong> Komisja Europejska oczekuje, że użycie AI w dokumentach projektowych jest zaznaczone i wyjaśnione (Wytyczne KE 2024). Zawsze zaznaczaj, gdzie korzystałeś/łaś z AI – bierzesz pełną odpowiedzialność za wynik.
        </div>
        <div style="margin-top:16px">
          <button class="btn-continue" onclick="showPage('exercises','ex5')" style="display:inline-flex">→ Przejdź do Ćwiczenia #5</button>
        </div>
      </div>
    </div>

    <div class="segment" id="rodo">
      <div class="segment-header" onclick="toggleSegment(this)">
        <h3><span>🔐</span> Segment 4.2 – Ryzyka, etyka i ochrona danych (RODO)</h3>
        <span class="seg-time">3:20–3:40 (20 min)</span>
        <span class="segment-toggle">▾</span>
      </div>
      <div class="segment-body">
        <div class="alert-box" style="margin-top:12px">
          <strong>🔴 Trzy absolutne zasady:</strong><br>
          1. Żadnych danych osobowych uczniów w publicznej AI<br>
          2. Żadnych poufnych dokumentów szkoły/projektu bez sprawdzenia polityki prywatności<br>
          3. Anonimizuj dane ZANIM wkleisz (imię → „Uczeń A")
        </div>

        <h4 style="margin:20px 0 12px;font-size:15px">Scenariusze do dyskusji:</h4>
        <div class="segment" style="margin-bottom:10px;border:1px solid #fca5a5">
          <div class="segment-header" onclick="toggleSegment(this)" style="background:#fef2f2;padding:14px 18px">
            <h3 style="font-size:14px;color:#991b1b">Scenariusz 1 – Dane uczniów</h3>
            <span class="segment-toggle" style="color:#991b1b">▾</span>
          </div>
          <div class="segment-body" style="font-size:14px">
            <p><em>„Nauczyciel wkleił do ChatGPT dane 30 uczniów z ocenami i poprosił o analizę postępów."</em></p>
            <p style="margin-top:10px"><strong>Co z tym nie tak?</strong> Naruszenie RODO – dane osobowe uczniów (oceny, imiona) to dane wrażliwe chronione prawem. ChatGPT to zewnętrzny serwer poza UE. Brak zgody rodziców na przetwarzanie przez trzecią stronę. <strong>Konsekwencje:</strong> sankcja IOD, odpowiedzialność cywilna.</p>
          </div>
        </div>
        <div class="segment" style="margin-bottom:10px;border:1px solid #fca5a5">
          <div class="segment-header" onclick="toggleSegment(this)" style="background:#fef2f2;padding:14px 18px">
            <h3 style="font-size:14px;color:#991b1b">Scenariusz 2 – Halucynacja przepisu</h3>
            <span class="segment-toggle" style="color:#991b1b">▾</span>
          </div>
          <div class="segment-body" style="font-size:14px">
            <p><em>„AI podała, że dyrektywą UE z 2023 r. zakazano określonej formy oceniania. Nauczyciel cytuje to w dokumencie."</em></p>
            <p style="margin-top:10px"><strong>Co zrobił błędnie?</strong> Nie zweryfikował informacji w oficjalnych źródłach. AI mogła zmyślić ten przepis (halucynacja). <strong>Zasada:</strong> Fakty, daty, przepisy → zawsze sprawdzaj w isap.sejm.gov.pl lub europa.eu.</p>
          </div>
        </div>
        <div class="segment" style="margin-bottom:10px;border:1px solid #fca5a5">
          <div class="segment-header" onclick="toggleSegment(this)" style="background:#fef2f2;padding:14px 18px">
            <h3 style="font-size:14px;color:#991b1b">Scenariusz 3 – Poufny raport partnerski</h3>
            <span class="segment-toggle" style="color:#991b1b">▾</span>
          </div>
          <div class="segment-body" style="font-size:14px">
            <p><em>„Koordynatorka projektu wkleiła do AI zawartość poufnego raportu z audytu partnera."</em></p>
            <p style="margin-top:10px"><strong>Błąd:</strong> Naruszenie klauzuli poufności umowy partnerskiej. Dane komercyjne i projektowe wysłane na zewnętrzny serwer bez zgody partnera. <strong>Zasada:</strong> Jeśli dokumentu nie możesz opublikować – nie wklejaj go do publicznej AI.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="segment" id="implementation">
      <div class="segment-header" onclick="toggleSegment(this)">
        <h3><span>🎯</span> Segment 4.3 – Mój plan wdrożenia + karta działań</h3>
        <span class="seg-time">3:40–3:55 (15 min)</span>
        <span class="segment-toggle">▾</span>
      </div>
      <div class="segment-body">
        <p style="margin-bottom:14px">Każdy uczestnik wypełnia <strong>Kartę Wdrożenia</strong> (dostępna w „Materiałach dla uczestnika"):</p>
        <ol style="padding-left:20px;font-size:14px">
          <li style="padding:6px 0">Jedno zadanie, w którym zacznę używać AI już jutro / w tym tygodniu</li>
          <li style="padding:6px 0">Jeden prompt, który zabieram ze sobą</li>
          <li style="padding:6px 0">Jedno ryzyko, o którym będę pamiętać</li>
          <li style="padding:6px 0">Jedna osoba w szkole, z którą podzielę się tym, czego się nauczyłem/łam</li>
        </ol>

        <h4 style="margin:20px 0 12px;font-size:15px">Plan wdrożenia AI w szkole (po szkoleniu)</h4>
        <table class="data-table">
          <thead><tr><th>Etap</th><th>Czas</th><th>Działania</th></tr></thead>
          <tbody>
            <tr><td>Indywidualne wdrożenie</td><td>Tydzień 1–2</td><td>Każdy realizuje mini-zadanie wdrożeniowe; kanał do dzielenia się promptami</td></tr>
            <tr><td>Pierwsze podsumowanie</td><td>Miesiąc 1</td><td>30-min spotkanie: co działa? Zbieranie najlepszych promptów w bank</td></tr>
            <tr><td>Rozszerzenie</td><td>Miesiąc 2–3</td><td>Nauczyciele-ambasadorzy AI; polityka AI dla szkoły; szkolenie uzupełniające</td></tr>
            <tr><td>Ewaluacja</td><td>Miesiąc 4–6</td><td>Co się zmieniło? Aktualizacja zasobów; decyzja o narzędziach</td></tr>
          </tbody>
        </table>

        <div style="margin-top:16px">
          <button class="btn-continue" onclick="showPage('participants')" style="display:inline-flex">→ Materiały dla uczestnika (Karta Wdrożenia)</button>
        </div>
      </div>
    </div>

    <div class="segment" id="survey-in">
      <div class="segment-header" onclick="toggleSegment(this)">
        <h3><span>📊</span> Ankieta wejściowa i wyjściowa</h3>
        <span class="segment-toggle">▾</span>
      </div>
      <div class="segment-body">
        <p style="margin-bottom:12px;font-size:14px">Kompletne kwestionariusze znajdziesz w pliku <code>ETAP_9_Ewaluacja_i_Wdrozenie.md</code>. Poniżej kluczowe pytania.</p>
        <div class="content-grid">
          <div class="info-card">
            <h4>Ankieta wejściowa – klucz pytań</h4>
            <ul>
              <li>Czy kiedykolwiek używałeś AI?</li>
              <li>Skala wiedzy 1–5</li>
              <li>Jakie zadanie AI miałoby Ci ułatwić?</li>
              <li>Co Cię najbardziej niepokoi?</li>
            </ul>
          </div>
          <div class="info-card" id="survey-out">
            <h4>Ankieta wyjściowa – klucz pytań</h4>
            <ul>
              <li>Ocena szkolenia (1–5) + szczegółowe kryteria</li>
              <li>Lista 6 umiejętności (TAK/CZĘŚCIOWO/NIE)</li>
              <li>Prawdopodobieństwo użycia AI w 7 dni (1–5)</li>
              <li>Jakie wsparcie jest potrzebne?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div style="margin-top:16px">
      <button class="btn-continue" onclick="showPage('home')" style="display:inline-flex">🏠 Powrót do strony głównej</button>
    </div>
  </div>
`;

/* ─────────── EXERCISES ─────────── */
PAGES.exercises = () => `
  <div class="page-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> › Ćwiczenia</div>
    <h2>🧩 Ćwiczenia warsztatowe</h2>
    <p>12 gotowych ćwiczeń z pełną dokumentacją. Oznaczone ★ realizowane w 4-godzinnym wariancie szkolenia.</p>
    <button id="markDoneBtn_exercises" class="mark-done-btn" onclick="markDone('exercises')">✓ Oznacz jako ukończony</button>
  </div>
  <div class="filter-bar">
    <button class="filter-btn active" onclick="filterExercises('all',this)">Wszystkie (12)</button>
    <button class="filter-btn" onclick="filterExercises('core',this)">★ Podstawowe (5)</button>
    <button class="filter-btn" onclick="filterExercises('reserve',this)">Rezerwowe (7)</button>
    <button class="filter-btn" onclick="filterExercises('basic',this)">Poziom: Podstawowy</button>
    <button class="filter-btn" onclick="filterExercises('med',this)">Poziom: Średni</button>
  </div>
  <div style="max-width:900px;margin:0 auto;padding:30px 40px">
    ${renderExercise('ex1','1','★ Mój pierwszy prompt','23 min','basic','core',
      'Przełamanie bariery; pierwsze doświadczenie z narzędziem AI; zidentyfikowanie realnych potrzeb uczestnika.',
      `<p>1. Otwórz: <strong>chat.openai.com</strong> (ChatGPT) lub <strong>gemini.google.com</strong> (Gemini) lub <strong>claude.ai</strong></p>
      <p>2. Pomyśl o jednym zadaniu zawodowym, które regularnie zajmuje Ci dużo czasu.</p>
      <p>3. Napisz prompt opisujący zadanie – tak, jak napisałbyś do kolegi proszącego o pomoc.</p>
      <p>4. Przeczytaj odpowiedź. Oceń w skali 1–5.</p>
      <p>5. Zapisz: co AI zrobiła dobrze? Co nie?</p>
      <h4 style="margin:16px 0 8px;font-size:13px">Jeśli nie wiesz od czego zacząć:</h4>
      <ul style="font-size:14px;padding-left:18px">
        <li>„Napisz ogłoszenie o zebraniu z rodzicami"</li>
        <li>„Pomóż mi napisać plan lekcji na temat…"</li>
        <li>„Streszcz mi ten fragment: [fragment]"</li>
        <li>„Zrób checklistę do organizacji wycieczki szkolnej"</li>
      </ul>`,
      `<ul style="font-size:14px">
        <li>Sprawdź Wi-Fi <strong>przed</strong> szkoleniem. Miej alternatywę (demo offline) gdy internet zawiedzie</li>
        <li>Chodź po sali, zagaduj: „Co wybrał Pan/Pani? Co widzi?"</li>
        <li>NIE koryguj słabych promptów na tym etapie – to materiał do analizy w seg. 1.4</li>
        <li>Wynik ogólnikowy? Świetnie – materiał do dyskusji o jakości promptów</li>
        <li>Wynik z błędem? Materiał do dyskusji o halucynacjach</li>
      </ul>`,
      `<div class="info-card"><h4>Oczekiwany rezultat</h4><ul>
        <li>Każdy uczestnik ma działające narzędzie i pierwszą odpowiedź AI</li>
        <li>Każdy zidentyfikował co było dobre, co nie</li>
        <li>Uczestnik samodzielnie ocenia wynik – nie pyta „czy to dobrze?"</li>
      </ul></div>`
    )}
    ${renderExercise('ex2','2','★ Ulepsz słaby prompt','20 min','basic','core',
      'Praktyczne stosowanie frameworku PARTS; zrozumienie, jak prompt wpływa na jakość odpowiedzi.',
      `<p>Masz 3 słabe prompty. Każdy daje odpowiedź ogólną i mało użyteczną.</p>
      <p style="margin-top:10px"><strong>Zadanie:</strong> Wybierz 1–2 prompty i przepisz według PARTS:</p>
      <div class="prompt-box" style="margin:12px 0;position:relative">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <pre>PROMPT A: „Napisz lekcję o wojnie."
PROMPT B: „Zrób mail do rodziców."
PROMPT C: „Opisz projekt."</pre>
      </div>
      <p>Wpisz OBIE wersje (słabą i ulepszoną) do AI i porównaj wyniki.</p>
      <h4 style="margin:16px 0 8px;font-size:13px">Przykład ulepszonej wersji B:</h4>
      <div class="prompt-box" style="position:relative">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <pre>Działaj jako wychowawca klasy VI.
Napisz profesjonalny i ciepły mail do rodziców klasy VI
zapraszający na zebranie w środę 15 maja o 17:00.
Tematyka: podsumowanie semestru, wycieczka szkolna.
Ton: przyjazny, rzeczowy, bez formalizmu.
Format: temat maila + treść (max 150 słów)</pre>
      </div>`,
      `<ul style="font-size:14px">
        <li>Slajd z PARTS musi być widoczny przez całe ćwiczenie</li>
        <li>Pilnuj, żeby uczestnicy świadomie dodawali elementy PARTS – nie tylko „pisali więcej"</li>
        <li>Jeśli uczestnik utknął: „Dla kogo piszesz prompt? Kto jest odbiorcą efektu?"</li>
        <li>Zaawansowani: poprawiają wszystkie 3. Wolniejsi: jeden.</li>
      </ul>`,
      `<div class="info-card"><h4>Kryteria jakości</h4><ul>
        <li>Ulepszony prompt zawiera min. 3 elementy PARTS</li>
        <li>Wynik z ulepszonego promptu jest wyraźnie bardziej użyteczny</li>
        <li>Uczestnik uzasadnia, które elementy PARTS dodał i dlaczego</li>
      </ul></div>`
    )}
    ${renderExercise('ex3','3','★ Konspekt lekcji i różnicowanie','20 min','med','core',
      'Praktyczne tworzenie materiałów dydaktycznych; doświadczenie różnicowania z wsparciem AI.',
      `<p>1. Wybierz temat lekcji z Twojego przedmiotu (może być najbliższa planowana lekcja)</p>
      <p>2. Wygeneruj konspekt (45 min) przy użyciu PARTS</p>
      <p>3. Sprawdź wynik krytycznie: Czy struktura ma sens? Czy czas jest realistyczny?</p>
      <p>4. Napisz kolejny prompt:</p>
      <div class="prompt-box" style="margin:12px 0;position:relative">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <pre>Działaj jako doświadczony nauczyciel [PRZEDMIOT] w [TYP SZKOŁY].
Przygotuj konspekt lekcji (45 min) na temat [TEMAT]
dla uczniów [KLASA, WIEK].
Uwzględnij: angażujące intro, pracę grupową, podsumowanie.
Format: Tabela | Czas | Aktywność | Opis | Materiały</pre>
      </div>
      <p>5. Potem: „Przepisz fragment [...] dla uczniów z trudnościami w [...]" lub „...dla uczniów zdolnych"</p>`,
      `<ul style="font-size:14px">
        <li>Najpierw pokaż 5-min demonstrację na projektorze</li>
        <li>Zachęcaj do pracy z własnym przedmiotem – personalizacja = zaangażowanie</li>
        <li>Pedagodzy / wicedyrektorzy: plan działania lub harmonogram zamiast konspektu</li>
        <li>W omówieniu: „Co AI napisała świetnie? Co jest niemożliwe do użycia w Twojej klasie?"</li>
      </ul>`,
      `<div class="info-card"><h4>Kryteria jakości</h4><ul>
        <li>Konspekt jest realistyczny (wykonalne aktywności)</li>
        <li>Różnicowanie jest wyraźne (wersja podstawowa vs. rozszerzona się różnią)</li>
        <li>Uczestnik identyfikuje min. jedną zmianę, którą by wprowadził</li>
      </ul></div>`
    )}
    ${renderExercise('ex4','4','★ AI w administracji (wybór zadania)','20 min','basic','core',
      'Praktyczne zastosowanie AI do jednego z realnych zadań administracyjnych lub organizacyjnych.',
      `<p>Wybierz JEDNO zadanie (najbliższe codziennej pracy):</p>
      <div class="warn-box" style="margin:12px 0">
        <strong>OPCJA A – Streszczenie dokumentu:</strong> Skopiuj fragment dokumentu szkolnego (usuń dane osobowe) i poproś AI o: streszczenie w 5 zdaniach, listę zadań z terminami, pytania do wyjaśnienia.
      </div>
      <div class="warn-box">
        <strong>OPCJA B – Mail do rodziców:</strong> Na podstawie luźnych notatek:<br>
        <em>„Czwartek g.16.00, zebranie, zabrać dziennik, info o wycieczce Kraków 7 marca, 120 zł, formularz, spotkanie z pedagogiem dla chętnych"</em><br>
        → Napisz maila do rodziców.
      </div>
      <div class="warn-box">
        <strong>OPCJA C – Checklista organizacyjna:</strong> Poproś AI o checklistę do jednego z: wycieczka szkolna / olimpiada / dni otwarte / konferencja / spotkanie z partnerem zagranicznym.
      </div>`,
      `<ul style="font-size:14px">
        <li>Zaprezentuj wszystkie 3 opcje (2 min) zanim uczestnicy wybiorą</li>
        <li>Zachęć do opcji najbliższej realiom własnej pracy</li>
        <li>W omówieniu opcja A: jakie zadania AI „wyciągnęła"?</li>
        <li>Opcja B: porównaj styl AI z tym, co uczestnik by napisał sam</li>
        <li>Podkreśl: „To możesz zabrać i użyć jutro"</li>
      </ul>`,
      `<div class="info-card"><h4>Oczekiwany rezultat</h4><ul>
        <li>Uczestnik ma gotowy wytwór: streszczenie / mail / checklista</li>
        <li>Wskazuje, co należy poprawić lub dodać</li>
        <li>Czas „z AI" vs. „bez AI" jest wyraźnie krótszy</li>
      </ul></div>`
    )}
    ${renderExercise('ex5','5','★ Opis działania projektowego','10 min','med','core',
      'Praktyczne używanie AI do treści projektowych; krytyczna ocena wygenerowanego tekstu.',
      `<p>1. Wybierz projekt, przy którym pracujesz lub wymyśl fikcyjny projekt Erasmus+</p>
      <p>2. Wpisz do AI poniższy prompt (dostosuj dane):</p>
      <div class="prompt-box" style="position:relative;margin:12px 0">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <pre>Jestem koordynatorem/ką projektu [TYP: Erasmus+/WIN4SMEs]
pod tytułem "[TYTUŁ]" realizowanego z partnerami z [KRAJE].
W [MIESIĄC ROK] odbyło się [DZIAŁANIE: szkolenie/warsztaty/mobilność]
z udziałem [OPIS: nauczyciele, X osób, z X krajów].
Tematyka: [TEMAT].

Napisz opis działania (150–200 słów) do sekcji narracyjnej raportu.
Styl: rzeczowy, profesjonalny, podkreślający wartość dodaną.
Zaznacz [UZUPEŁNIJ] gdzie trzeba wpisać konkretne dane.</pre>
      </div>
      <p>3. Przeczytaj krytycznie: Co AI zmyśliła? Jakie miejsca wymagają uzupełnienia?</p>`,
      `<ul style="font-size:14px">
        <li>Jeśli uczestnik nie jest w projekcie – wymyślony projekt Erasmus+ jest OK</li>
        <li>Kluczowy wniosek: AI nie może znać konkretnych danych projektu</li>
        <li>Podkreśl: „Podpisując – odpowiadasz Ty, nie AI"</li>
        <li>Sprawdź czy uczestnik zaznaczył miejsca do uzupełnienia</li>
      </ul>`,
      `<div class="info-card"><h4>Kryteria jakości</h4><ul>
        <li>Uczestnik wskazuje min. 2 miejsca wymagające weryfikacji</li>
        <li>Uczestnik ocenia ton względem dokumentów projektowych</li>
        <li>Uczestnik NIE traktuje wyniku jako gotowego do wysłania</li>
      </ul></div>`
    )}
    ${renderExercise('ex6','6','Wykrywanie halucynacji','20 min','med','reserve',
      'Rozwinięcie krytycznej oceny odpowiedzi AI; wykrywanie błędów i halucynacji.',
      `<p>Wpisz jeden z promptów „pułapkowych" (wszystkie odnoszą się do NIEISTNIEJĄCYCH badań/przepisów):</p>
      <div class="prompt-box" style="margin:12px 0;position:relative">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <pre>PROMPT A: „Opisz wyniki badań Kowalskiego i Nowaka 
z 2022 roku dotyczących efektywności AI w polskich szkołach."

PROMPT B: „Zacytuj artykuł 18a Ustawy o systemie oświaty 
z 2024 roku dotyczący stosowania AI w ocenianiu uczniów."

PROMPT C: „Opisz wyniki projektu EduTech Polska 2023, 
który obejmował 142 polskie szkoły."</pre>
      </div>
      <p>Spróbuj zweryfikować w Google Scholar lub isap.sejm.gov.pl. AI BĘDZIE halucynować – to jest cel ćwiczenia.</p>`,
      `<ul style="font-size:14px">
        <li>Wszystkie 3 odnoszą się do nieistniejących źródeł – AI stworzy przekonującą halucynację</li>
        <li>Klucz dyskusji: „Kto znalazł to badanie/przepis w internecie?"</li>
        <li>„Jak możliwe, że AI napisała 300 słów o czymś, co nie istnieje?"</li>
        <li>Wniosek: Nie wystarczy, że AI pisze pewnie i płynnie</li>
      </ul>`,
      `<div class="alert-box"><strong>⚠️ Pamiętaj:</strong> To ćwiczenie celowo demonstruje niebezpieczne halucynacje. Zawsze weryfikuj fakty, cytaty i przepisy w oficjalnych źródłach przed użyciem!</div>`
    )}
    <div style="text-align:center;padding:20px;color:var(--clr-text-muted);font-size:14px">
      <p>Ćwiczenia #7–#12 (mail zagraniczny, SPE, protokół, promo projektu, ranking zasad, checklista bezpieczeństwa)</p>
      <p style="margin-top:4px">dostępne w pliku <code>ETAP_4_Cwiczenia_Warsztatowe.md</code></p>
    </div>
  </div>
`;

function renderExercise(anchor, num, title, time, level, type, goal, participantInstr, trainerInstr, results) {
  const levelBadge = {basic:'badge-basic', med:'badge-med', adv:'badge-adv'}[level];
  const levelLabel = {basic:'Podstawowy', med:'Średni', adv:'Zaawansowany'}[level];
  const typeLabel = type === 'core' ? '★ Podstawowe' : 'Rezerwowe';
  return `
  <div class="exercise-card" id="${anchor}" data-level="${level}" data-type="${type}">
    <div class="exercise-header">
      <div>
        <div class="exercise-number">Ćwiczenie #${num}</div>
        <div class="exercise-title">${title}</div>
      </div>
    </div>
    <div class="exercise-badge-row">
      <span class="exercise-badge ${type==='core'?'badge-core':''}">${typeLabel}</span>
      <span class="exercise-badge ${levelBadge}">Poziom: ${levelLabel}</span>
      <span class="exercise-badge badge-time">⏱ ${time}</span>
    </div>
    <div class="exercise-body">
      <p style="font-size:14px;color:var(--clr-text-muted);margin-bottom:16px"><strong>Cel:</strong> ${goal}</p>
      <div class="tabset">
        <div class="tab-nav">
          <button class="tab-btn active" onclick="showTab(this,'tp_participant_${anchor}')">👤 Uczestnik</button>
          <button class="tab-btn" onclick="showTab(this,'tp_trainer_${anchor}')">🎤 Prowadzący</button>
          <button class="tab-btn" onclick="showTab(this,'tp_result_${anchor}')">🎯 Efekty</button>
        </div>
        <div id="tp_participant_${anchor}" class="tab-panel active">${participantInstr}</div>
        <div id="tp_trainer_${anchor}" class="tab-panel">${trainerInstr}</div>
        <div id="tp_result_${anchor}" class="tab-panel">${results}</div>
      </div>
    </div>
  </div>`;
}

function filterExercises(filter, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.exercise-card').forEach(card => {
    let show = false;
    if(filter === 'all') show = true;
    else if(filter === 'core') show = card.dataset.type === 'core';
    else if(filter === 'reserve') show = card.dataset.type === 'reserve';
    else if(filter === 'basic') show = card.dataset.level === 'basic';
    else if(filter === 'med') show = card.dataset.level === 'med';
    card.style.display = show ? '' : 'none';
  });
}

/* ─────────── PROMPTS ─────────── */
PAGES.prompts = () => `
  <div class="page-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> › Promptownik</div>
    <h2>💡 Promptownik – 30+ gotowych promptów</h2>
    <p>Każdy prompt ma wersję PODSTAWOWĄ i ULEPSZONĄ. Zacznij od podstawowej – działa w 80% przypadków.</p>
    <button id="markDoneBtn_prompts" class="mark-done-btn" onclick="markDone('prompts')">✓ Oznacz jako ukończony</button>
  </div>
  <div class="filter-bar">
    <button class="cat-btn active" onclick="filterPrompts('all')">Wszystkie</button>
    <button class="cat-btn" onclick="filterPrompts('A')">📚 Dydaktyka (A)</button>
    <button class="cat-btn" onclick="filterPrompts('B')">🗂️ Organizacja (B)</button>
    <button class="cat-btn" onclick="filterPrompts('C')">📧 Komunikacja (C)</button>
    <button class="cat-btn" onclick="filterPrompts('D')">🌍 Projekty EU (D)</button>
    <button class="cat-btn" onclick="filterPrompts('E')">📄 Analiza doc. (E)</button>
    <button class="cat-btn" onclick="filterPrompts('F')">✏️ Redakcja (F)</button>
    <button class="cat-btn" onclick="filterPrompts('G')">📅 Planowanie (G)</button>
    <button class="cat-btn" onclick="filterPrompts('H')">🔍 Weryfikacja AI (H)</button>
  </div>
  <div class="prompt-library">
    ${renderPromptCard('pA1','A','A1 – Konspekt lekcji','Planowanie lekcji – gdy potrzebujesz struktury i nowych pomysłów',
      'Sprawdź, czy aktywności są realistyczne; zweryfikuj poprawność merytoryczną; dostosuj do swoich uczniów',
      `Przygotuj konspekt lekcji (45 minut) na temat: [TEMAT]
Klasa: [klasa i wiek]
Przedmiot: [przedmiot]
Format: tabela Czas | Aktywność | Materiały`,
      `Działaj jako doświadczony nauczyciel [PRZEDMIOT] pracujący w [TYP SZKOŁY].
Przygotuj konspekt lekcji (45 minut) na temat [TEMAT SZCZEGÓŁOWY]
dla uczniów [KLASA, WIEK].
Kontekst klasy: [OPIS, np. "klasa zróżnicowana poziomowo, kilkoro z dysleksją"]
Wymagania:
- angażujące wprowadzenie (max 5 min)
- co najmniej jedna praca w grupach lub parach (10–15 min)
- element sprawdzenia wiedzy na wyjście (5 min)
- ćwiczenie dla uczniów zdolnych i wspierające dla słabszych
Format: Tabela | Czas | Aktywność | Opis | Materiały | Uwagi`)}
    ${renderPromptCard('pA2','A','A2 – Różnicowanie materiału','Adaptacja tekstu do różnych poziomów uczniów',
      'Sprawdź czy wersja dla słabszych zachowuje zakres merytoryczny; czy uproszczenie jest naturalne',
      `Mam poniższy tekst dla uczniów klasy [X]:
[TEKST]
Przepisz w dwóch wersjach:
A) dla uczniów słabszych (uproszczony język, krótkie zdania)
B) dla uczniów zdolnych (głębsze treści, pytania do refleksji)`,
      `Mam poniższy tekst edukacyjny dla uczniów klasy [KLASA]:
[WKLEJ TEKST]
Przygotuj trzy wersje:
WERSJA A – dla uczniów z trudnościami w czytaniu/dysleksją:
- zdania max 12 słów, akapity max 3 zdania
- każde kluczowe pojęcie wyjaśnione bezpośrednio po użyciu
WERSJA B – oryginalna (bez zmian)
WERSJA C – dla uczniów zdolnych:
- 3 pytania otwarte do refleksji
- „wyzwanie do myślenia": połącz z szerszym kontekstem
- jedno zadanie badawcze „dla chętnych"`)}
    ${renderPromptCard('pA3','A','A3 – Pytania sprawdzające (Bloom)','Tworzenie testów, quizów, exit tickets',
      'Sprawdź merytorycznie poprawność pytań; pytania Bloom 3 wymagają szczególnej uwagi',
      `Przygotuj 10 pytań sprawdzających do tematu: [TEMAT]
Podziel: zapamiętanie/rozumienie (5 pytań) i analiza/ocena (5 pytań)
Podaj klucz odpowiedzi.`,
      `Przygotuj kompletny zestaw pytań sprawdzających do tematu: [TEMAT]
dla uczniów [KLASA].
POZIOM 1 – ZAPAMIĘTANIE I ROZUMIENIE (5 pytań):
Pytania zamknięte lub krótkie odpowiedzi. Klucz.
POZIOM 2 – ZASTOSOWANIE I ANALIZA (4 pytania):
Pytania wymagające porównania, wyjaśnienia mechanizmu.
POZIOM 3 – OCENA I TWORZENIE (2 pytania):
Pytania otwarte z własnym stanowiskiem. Kryteria zamiast klucza.
Format: Tabela | Poziom Blooma | Pytanie | Oczekiwana odpowiedź`)}
    ${renderPromptCard('pB1','B','B1 – Streszczenie dokumentu','Ekstrakcja kluczowych informacji z długich dokumentów (zarządzenia, regulaminy, protokoły)',
      'Usuń dane osobowe przed wklejeniem; sprawdź czy AI nie pominęła czegoś ważnego',
      `Poniżej wklejam dokument. Streszcz go w 5 zdaniach
i wyciągnij listę działań/zadań z terminami:
[DOKUMENT]`,
      `Poniżej wklejam dokument [TYP: zarządzenie/regulamin/protokół/wytyczne]
(dane osobowe usunięte):
[WKLEJ TEKST]
Przygotuj:
1. STRESZCZENIE: 3–5 zdań – co to jest i co z tego wynika
2. LISTA ZADAŃ: co muszę zrobić (checklista)
3. TERMINY: wszystkie daty w kolejności chronologicznej
4. PYTANIA DO WYJAŚNIENIA: co jest niejasne
Format: cztery osobne sekcje z nagłówkami`)}
    ${renderPromptCard('pC1','C','C1 – Mail do rodziców','Redagowanie profesjonalnych maili do rodziców',
      'NIE wpisuj nazwisk uczniów/rodziców (RODO); finalna wersja wymaga Twojego osądu',
      `Napisz mail do rodziców klasy [KLASA] z informacją o [TEMAT].
Ton: przyjazny i profesjonalny. Max 120 słów.`,
      `Działaj jako wychowawca klasy [KLASA] w polskiej szkole.
Napisz email do rodziców na temat: [TEMAT]
Kluczowe informacje:
[WYPUNKTUJ]
Ton: [ciepły i angażujący / rzeczowy / empatyczny]
Długość: max [N] słów
Format: Temat maila + Treść wiadomości
Zakończenie: zachęcające do kontaktu z wychowawcą`)}
    ${renderPromptCard('pC2','C','C2 – Ogłoszenie szkolne','Tworzenie ogłoszeń na tablicę, stronę lub media społecznościowe',
      '',
      `Napisz ogłoszenie szkolne zachęcające uczniów do [DZIAŁANIE].
Odbiorca: uczniowie klas [KLASY]. Max 60 słów.`,
      `Działaj jako specjalista ds. komunikacji w szkole.
Napisz ogłoszenie dla uczniów klas [KLASY] dotyczące: [OPIS]
Kluczowe informacje: [DATA / MIEJSCE / KONTAKT]
Format: nagłówek (1 zdanie) + treść (40–60 słów) + call-to-action
Unikaj: sloganów, fraz ogólnikowych, zbyt formalnego języka`)}
    ${renderPromptCard('pD1','D','D1 – Opis działania projektowego','Szkicowanie opisów działań do raportów projektowych (Erasmus+, WIN4SMEs)',
      'Zaznaczaj miejsca [UZUPEŁNIJ]; NIGDY nie traktuj wyniku jako gotowego; sprawdź zgodność z wymaganiami grantu',
      `Napisz 150-słowowy opis działania projektowego: [OPIS].
Styl: narracyjny, profesjonalny.`,
      `Działaj jako doświadczony koordynator projektów edukacyjnych UE (Erasmus+).
Projekt: [TYTUŁ PROJEKTU]
Działanie: [OPIS, np. "3-dniowe warsztaty mobilności dla nauczycieli, Bolonia, październik 2025"]
Liczba uczestników: [N] z [KRAJE]
Tematyka: [TEMAT]
Wyniki: [CO OSIĄGNIĘTO]
Napisz opis działania (180–220 słów) do sekcji narracyjnej raportu:
- neutralny, rzeczowy styl (typowy dla raportów UE)
- podkreśl: cele, przebieg, uczestnictwo, wartość dodaną
- ZAZNACZ [UZUPEŁNIJ DANE] gdzie potrzebne konkretne liczby
Format: jeden spójny akapit narracyjny
Język: [POLSKI / ANGIELSKI]`)}
    ${renderPromptCard('pD2','D','D2 – Mail do partnera zagranicznego','Profesjonalna korespondencja z partnerami zagranicznymi projektu',
      'Weryfikuj angielski pod kątem stylu projektowego; nie wklejaj poufnych informacji',
      `Napisz email w języku angielskim do partnera projektu
z informacją o: [TEMAT]. Ton: profesjonalny. Max 150 słów.`,
      `Działaj jako koordynator projektu edukacyjnego UE piszący do zagranicznego partnera.
Kontekst: [PROJEKT, RELACJA Z PARTNEREM]
Temat maila: [OPIS]
Kluczowe informacje:
[WYPUNKTUJ]
Ton: profesjonalny, ale przyjazny (jak do wieloletniego współpracownika)
Język: angielski C1 (czytelny dla nienatywnych użytkowników)
Format: Subject: + Pozdrowienie + Treść (max 120 słów) + Pożegnanie + Podpis`)}
    ${renderPromptCard('pE1','E','E1 – Porównanie dwóch dokumentów','Identyfikacja różnic i podobieństw między dwoma dokumentami',
      'Usuń dane wrażliwe z obu dokumentów przed wklejeniem',
      '',
      `Poniżej wklejam dwa dokumenty (dane zanonimizowane):
DOKUMENT A: [WKLEJ]
DOKUMENT B: [WKLEJ]
Przeprowadź analizę porównawczą:
1. Główne różnice (tabela: Aspekt | Dokument A | Dokument B)
2. Główne podobieństwa (lista)
3. Co jest w A, a nie ma w B?
4. Co jest w B, a nie ma w A?
5. Rekomendacja: który jest pełniejszy i dlaczego?`)}
    ${renderPromptCard('pH1','H','H1 – Prośba o kontrargumenty','Testowanie jakości odpowiedzi AI przez celowe szukanie słabych punktów',
      'Używaj ZAWSZE po uzyskaniu ważnej odpowiedzi AI – szczególnie w kwestiach faktycznych',
      '',
      `Przeczytaj swoją poprzednią odpowiedź (lub tekst poniżej):
[WKLEJ TEKST]
Teraz wciel się w krytycznego recenzenta:
1. Które stwierdzenia są oparte na danych i możesz je zweryfikować?
2. Które stwierdzenia są generatywnym "wypełnieniem" bez pewności faktycznej?
3. Jakie informacje mogą być nieaktualne (cutoff knowledge)?
4. Jakie założenia przyjąłeś/łaś, które mogą być błędne?
5. Czego NIE wiesz i co powinienem sprawdzić w oficjalnych źródłach?`)}
  </div>
`;

function renderPromptCard(anchor, cat, title, when, warning, basic, advanced) {
  return `
  <div class="prompt-card" id="${anchor}" data-cat="${cat}">
    <div class="prompt-card-header" onclick="togglePromptCard(this)">
      <div>
        <div style="font-size:11px;font-weight:700;color:var(--clr-primary);margin-bottom:2px">${cat} – ${cat==='A'?'Dydaktyka':cat==='B'?'Organizacja':cat==='C'?'Komunikacja':cat==='D'?'Projekty EU':cat==='E'?'Analiza dokumentów':cat==='F'?'Redakcja':cat==='G'?'Planowanie':'Weryfikacja AI'}</div>
        <h4>${title}</h4>
      </div>
      <span style="font-size:20px;color:var(--clr-text-muted)">▾</span>
    </div>
    <div class="prompt-card-body">
      ${when ? `<p class="prompt-when">📌 <strong>Kiedy używać:</strong> ${when}</p>` : ''}
      ${warning ? `<div class="prompt-warn">⚠️ <span><strong>Na co uważać:</strong> ${warning}</span></div>` : ''}
      ${basic ? `<p style="font-size:12px;font-weight:700;color:var(--clr-text-muted);text-transform:uppercase;letter-spacing:.05em;margin:14px 0 6px">Wersja PODSTAWOWA</p>
      <div class="prompt-box" style="position:relative">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <pre>${basic}</pre>
      </div>` : ''}
      ${advanced ? `<p style="font-size:12px;font-weight:700;color:var(--clr-primary);text-transform:uppercase;letter-spacing:.05em;margin:14px 0 6px">Wersja ULEPSZONA</p>
      <div class="prompt-box" style="position:relative;border:1px solid rgba(26,111,206,.3)">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <pre>${advanced}</pre>
      </div>` : ''}
    </div>
  </div>`;
}

/* ─────────── CHECKLISTS ─────────── */
PAGES.checklists = () => `
  <div class="page-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> › Checklisty</div>
    <h2>✅ Checklisty</h2>
    <p>Twoje wpisy są zapisywane automatycznie w tej przeglądarce – możesz wrócić do nich w dowolnej chwili.</p>
    <button id="markDoneBtn_checklists" class="mark-done-btn" onclick="markDone('checklists')">✓ Oznacz jako ukończony</button>
  </div>
  <div class="checklist-page">
    <div class="checklist-block" id="chk-prompt">
      <h3>🎯 Checklista dobrego promptu</h3>
      <p style="font-size:14px;color:var(--clr-text-muted);margin-bottom:20px">Sprawdź PRZED wysłaniem promptu:</p>
      ${chk('chk1','P – Persona: czy powiedziałem AI, jaką rolę ma przyjąć? (np. „Działaj jako nauczyciel historii…")')}
      ${chk('chk2','A – Aim: czy jasno określiłem/łam, co ma powstać? (np. „Przygotuj konspekt 45 minut…")')}
      ${chk('chk3','R – Recipients: czy wyjaśniłem/łam, dla kogo jest wynik? (np. „…dla uczniów klasy 7…")')}
      ${chk('chk4','T – Tone: czy określiłem/łam styl i ton? (np. „…w prostym, angażującym języku…")')}
      ${chk('chk5','S – Structure: czy podałem/łam format wyjścia? (np. „…w formie tabeli: Czas | Aktywność…")')}
      ${chk('chk6','Ograniczenia: czy powiedziałem/łam, czego NIE chcę? (np. „Max 150 słów", „bez akademickiego żargonu")')}
      ${chk('chk7','Weryfikacja: czy pamiętam, że wynik AI wymaga korekty przed użyciem?')}
      <button class="checklist-reset" onclick="resetChecks('chk')">↺ Zresetuj listę</button>
    </div>

    <div class="checklist-block" id="chk-verify">
      <h3>🔍 Checklista weryfikacji odpowiedzi AI</h3>
      <p style="font-size:14px;color:var(--clr-text-muted);margin-bottom:20px">Sprawdź PO otrzymaniu odpowiedzi – przed użyciem:</p>
      ${chk('chkv1','Fakty: czy wszystkie fakty, daty, liczby, cytaty, przepisy można zweryfikować w oficjalnych źródłach?')}
      ${chk('chkv2','Ton i styl: czy ton jest adekwatny do sytuacji (szkolna, projektowa, formalna)?')}
      ${chk('chkv3','RODO: czy w tekście nie pojawiają się dane osobowe, których nie chciałeś/łaś?')}
      ${chk('chkv4','Adekwatność: czy wynik pasuje do MOJEGO konkretnego kontekstu (moja klasa, mój projekt)?')}
      ${chk('chkv5','Odpowiedzialność: czy za każde zdanie w tym tekście mogę wziąć odpowiedzialność? Czy mogę podpisać?')}
      <div class="success-box" style="margin-top:16px">
        <strong>Skala decyzji:</strong> 5/5 ✅ → używaj z drobną korektą · 3–4/5 → popraw przed użyciem · &lt;3 → napisz nowy prompt
      </div>
      <button class="checklist-reset" onclick="resetChecks('chkv')">↺ Zresetuj listę</button>
    </div>

    <div class="checklist-block" id="chk-rodo">
      <h3>🔒 Checklista bezpieczeństwa i ochrony danych (RODO)</h3>
      <p style="font-size:14px;color:var(--clr-text-muted);margin-bottom:20px">Sprawdź PRZED wklejeniem czegokolwiek do AI:</p>
      ${chk('chkr1','Czy w tekście są imiona i nazwiska uczniów? Jeśli TAK → anonimizuj (zastąp: „Uczeń A")')}
      ${chk('chkr2','Czy w tekście są oceny lub informacje o uczniach? Jeśli TAK → anonimizuj lub nie wklejaj')}
      ${chk('chkr3','Czy w tekście są dane wrażliwe (zdrowie, sytuacja rodzinna, SPE)? Jeśli TAK → NIE WKLEJAJ')}
      ${chk('chkr4','Czy tekst jest dokumentem poufnym szkoły lub projektu? Jeśli TAK → sprawdź politykę szkoły')}
      ${chk('chkr5','Czy narzędzie AI jest zaakceptowane przez szkołę? Jeśli NIE WIESZ → zapytaj IOD')}
      ${chk('chkr6','Czy wiesz, że korzystasz z zewnętrznego serwera (potencjalnie poza UE)? Sprawdź politykę prywatności.')}
      <div class="alert-box" style="margin-top:16px">
        <strong>Bezpieczna zasada:</strong> Jeśli dokumentu nie możesz opublikować na stronie szkoły, nie wklejaj go do publicznej AI.
      </div>
      <button class="checklist-reset" onclick="resetChecks('chkr')">↺ Zresetuj listę</button>
    </div>

    <div class="checklist-block" id="chk-selftest">
      <h3>🧠 Mini-test wiedzy po szkoleniu</h3>
      <p style="font-size:14px;color:var(--clr-text-muted);margin-bottom:20px">Odpowiedz szczerze – to tylko dla Ciebie:</p>
      ${chk('chks1','Wiem, co to jest LLM i dlaczego AI może się mylić (halucynacje)')}
      ${chk('chks2','Potrafię napisać prompt według frameworku PARTS')}
      ${chk('chks3','Wiem, jakich danych NIE wolno wklejać do AI (RODO)')}
      ${chk('chks4','Mam co najmniej 1 konkretne zadanie, do którego użyję AI w tym tygodniu')}
      ${chk('chks5','Wiem, jak sprawdzić, czy odpowiedź AI jest poprawna')}
      ${chk('chks6','Znam co najmniej 3 zastosowania AI w pracy dydaktycznej')}
      ${chk('chks7','Znam co najmniej 2 zastosowania AI w pracy administracyjnej')}
      ${chk('chks8','Wiem, jak AI może pomóc mi w projektach (Erasmus+, raportowanie, korespondencja)')}
      ${chk('chks9','Mam zapisany co najmniej 1 prompt, który zabieram ze sobą ze szkolenia')}
      ${chk('chks10','Wiem, do kogo w szkole zwrócić się z pytaniem o politykę AI')}
      <button class="checklist-reset" onclick="resetChecks('chks')">↺ Zresetuj test</button>
    </div>
  </div>
`;

function chk(id, label) {
  return `<div class="check-item" onclick="document.getElementById('${id}').click()">
    <input type="checkbox" id="${id}" onclick="event.stopPropagation();onCheck(this)">
    <label for="${id}">${label}</label>
  </div>`;
}

/* ─────────── PARTICIPANTS ─────────── */
PAGES.participants = () => `
  <div class="page-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> › Materiały dla uczestnika</div>
    <h2>📋 Materiały dla uczestnika</h2>
    <p>Karta pracy, ściąga, zasady etyczne, mini-zadanie wdrożeniowe.</p>
    <button id="markDoneBtn_participants" class="mark-done-btn" onclick="markDone('participants')">✓ Oznacz jako ukończony</button>
  </div>
  <div class="resource-page">
    <div class="resource-section">
      <h3>📝 Karta pracy – notatnik uczestnika</h3>
      <p>Twoje prompty ze szkolenia – zapisz i zachowaj:</p>
      <div style="background:var(--clr-bg2);border-radius:var(--radius-md);padding:20px;margin:12px 0">
        <table class="parts-table" style="margin-bottom:16px">
          <thead><tr><th>Symbol PARTS</th><th>Znaczenie</th><th>Mój przykład</th></tr></thead>
          <tbody>
            <tr><td>P</td><td>Persona – rola AI</td><td></td></tr>
            <tr><td>A</td><td>Aim – cel</td><td></td></tr>
            <tr><td>R</td><td>Recipients – odbiorcy</td><td></td></tr>
            <tr><td>T</td><td>Tone – ton/styl</td><td></td></tr>
            <tr><td>S</td><td>Structure – format</td><td></td></tr>
          </tbody>
        </table>
        <p style="font-size:13px;color:var(--clr-text-muted)"><em>Wydrukuj lub uzupełnij ręcznie podczas szkolenia</em></p>
      </div>
    </div>

    <div class="resource-section" id="rules10">
      <h3>⚖️ 10 Zasad odpowiedzialnego używania AI w szkole</h3>
      <ol class="rules-list">
        <li><div><strong>AI jest narzędziem, nie wyrocznią.</strong> Traktuj każdy wynik AI jak projekt do sprawdzenia, nie jak gotowy produkt.</div></li>
        <li><div><strong>Ty odpowiadasz za każdy dokument, który podpisujesz.</strong> Niezależnie od tego, czy pomogła Ci AI.</div></li>
        <li><div><strong>Dane osobowe uczniów zostają w szkole.</strong> Żadnych imion, ocen, danych wrażliwych w narzędziach zewnętrznych AI.</div></li>
        <li><div><strong>Weryfikuj fakty, daty, cytaty i przepisy.</strong> AI może „halucynować" – zawsze sprawdzaj w oficjalnych źródłach.</div></li>
        <li><div><strong>Transparentność wobec uczniów.</strong> Jeśli używasz AI do tworzenia materiałów dydaktycznych, poinformuj – gdy to stosowne.</div></li>
        <li><div><strong>Zaznaczaj użycie AI w dokumentach projektowych.</strong> KE i instytucje grantowe wymagają transparentności.</div></li>
        <li><div><strong>Nie oddawaj AI decyzji pedagogicznych.</strong> Ocena, wsparcie, interwencja wychowawcza – zawsze Twoja rola.</div></li>
        <li><div><strong>Buduj własne kompetencje.</strong> AI nie zastąpi Twojej wiedzy pedagogicznej. Używaj AI do skracania pracy rutynowej.</div></li>
        <li><div><strong>Iteruj i poprawiaj.</strong> Pierwszy wynik to rzadko finalny produkt. Praca z AI to dialog.</div></li>
        <li><div><strong>Gdy masz wątpliwości – zapytaj.</strong> Dyrekcja, IOD, collegium nauczycielskie – wspólne zasady chronią wszystkich.</div></li>
      </ol>
    </div>

    <div class="resource-section">
      <h3>📌 Ściąga – jak korzystać z AI rozsądnie i skutecznie</h3>
      <div class="content-grid">
        <div class="info-card">
          <h4>AI może (✅)</h4>
          <ul>
            <li>Szybko i niezmordowanie generować tekst</li>
            <li>Restrukturyzować i parafrazować</li>
            <li>Tłumaczyć i upraszczać</li>
            <li>Tworzyć szablony i checklisty</li>
            <li>Sugerować analogie i przykłady</li>
          </ul>
        </div>
        <div class="info-card">
          <h4>AI nie może (❌)</h4>
          <ul>
            <li>Znać Twoich uczniów</li>
            <li>Gwarantować poprawności faktycznej</li>
            <li>Znać aktualnych przepisów prawa</li>
            <li>Zastąpić Twojego osądu pedagogicznego</li>
            <li>Ponosić odpowiedzialności</li>
          </ul>
        </div>
      </div>
      <div class="success-box" style="margin-top:12px">
        <strong>5 kroków skutecznego korzystania z AI:</strong><br>
        1. Określ zadanie → 2. Napisz prompt (PARTS) → 3. Przeczytaj wynik → 4. Popraw lub doprecyzuj → 5. Zweryfikuj i użyj
      </div>
    </div>

    <div class="resource-section">
      <h3>🎯 Mini-zadanie wdrożeniowe (na 7 dni po szkoleniu)</h3>
      <p>Zrealizuj co najmniej <strong>2 z 5 zadań</strong> w ciągu tygodnia:</p>
      <div style="display:flex;flex-direction:column;gap:12px;margin-top:14px">
        ${miniTask('1','Konspekt lekcji','Wygeneruj konspekt nadchodzącej lekcji (min 45 min, min 3 aktywności). Oceń wynik w skali 1–5.')}
        ${miniTask('2','Streszczenie dokumentu','Znajdź dokument szkolny i poproś AI o streszczenie + listę zadań. Co AI dobrze zrobiła, co pominęła?')}
        ${miniTask('3','Mail lub ogłoszenie','Napisz komunikat (mail do rodziców, ogłoszenie szkolne) ze wsparciem AI. Porównaj czas z AI vs. bez AI.')}
        ${miniTask('4','Biblioteka promptów','Zapisz 3 prompty, które chcesz używać regularnie, w notatniku lub dokumencie.')}
        ${miniTask('5','Podziel się wiedzą','Pokaż jednej osobie w szkole jak działa PARTS i przeprowadź z nią mini-ćwiczenie (10–15 min).')}
      </div>
    </div>
  </div>
`;

function miniTask(num, title, desc) {
  return `<div style="background:var(--clr-bg2);border-radius:var(--radius-md);padding:16px 20px;display:flex;gap:14px;align-items:flex-start">
    <div style="min-width:32px;height:32px;background:var(--clr-primary);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700">${num}</div>
    <div><div style="font-size:14px;font-weight:700;margin-bottom:4px">${title}</div><div style="font-size:13px;color:var(--clr-text-muted)">${desc}</div></div>
  </div>`;
}

/* ─────────── TRAINER ─────────── */
PAGES.trainer = () => `
  <div class="page-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> › Dla prowadzącego</div>
    <h2>🎤 Materiały dla prowadzącego</h2>
    <p>Scenariusz minuta po minucie, pytania dyskusyjne, stop-klatki, warianty dla grup.</p>
  </div>
  <div class="resource-page">
    <div class="resource-section" id="scenario">
      <h3>⏱ Scenariusz prowadzenia – minuta po minucie (wybrane segmenty)</h3>
      <table class="data-table">
        <thead><tr><th>Minuta</th><th>Co robi prowadzący</th><th>Co robią uczestnicy</th><th>Uwagi</th></tr></thead>
        <tbody>
          <tr><td>0:00</td><td>Przywitanie, przedstawienie siebie, struktura dnia</td><td>Słuchają, dostają karty pracy</td><td>Sprawdź Wi-Fi przed startem</td></tr>
          <tr><td>0:03</td><td>Ankieta wejściowa</td><td>Wypełniają ankietę</td><td>Max 5 min</td></tr>
          <tr><td>0:10</td><td>Mini-wykład: mechanizm LLM, halucynacje, dane OECD</td><td>Notatki opcjonalne</td><td>Analogia: „autouzupełnianie na sterydach"</td></tr>
          <tr><td>0:22</td><td>Demonstracja na projektorze: pierwszy prompt</td><td>Obserwują</td><td>Wybierz konkretne szkolne zadanie</td></tr>
          <tr><td>0:28</td><td>„Teraz Wy" – logowanie</td><td>Logują się lub obserwują</td><td>Pomáhaj technicznie, chodź po sali</td></tr>
          <tr><td>0:35</td><td>Ćwiczenie #1: każdy wpisuje swój pierwszy prompt</td><td>Piszą i czytają wynik</td><td>NIE koryguj promptów – materiał do analizy</td></tr>
          <tr><td>0:45</td><td>3–4 osoby czytają wyniki</td><td>Dzielą się, dyskutują</td><td>Nie oceniaj – pytaj „co poszło dobrze?"</td></tr>
          <tr><td>1:00</td><td>Prezentacja PARTS (slajd)</td><td>Notują na kartach pracy</td><td>Slajd prosty: 5 liter, 5 opisów</td></tr>
          <tr><td>1:05</td><td>Demo na żywo: słaby → mocny prompt</td><td>Obserwują oba wyniki</td><td>Pokaż wyniki obok siebie</td></tr>
          <tr><td>1:10</td><td>Ćwiczenie #2: Ulepsz słaby prompt</td><td>Ind. lub w parach</td><td>Sprawdzaj czy stosują PARTS</td></tr>
          <tr><td>1:32</td><td>5 Złotych Zasad prompting</td><td>Notują</td><td>Slajd prosty, bez nadmiaru tekstu</td></tr>
          <tr><td>1:50</td><td>Zapowiedź przerwy</td><td>Przerwa 10 min</td><td>Sprawdź technikę na kolejne ćwiczenia</td></tr>
          <tr><td>2:00</td><td>Demo: konspekt lekcji + różnicowanie (5 min)</td><td>Obserwują</td><td>Realistyczny przykład – nie abstrakcyjny</td></tr>
          <tr><td>2:07</td><td>Ćwiczenie #3: konspekt + różnicowanie</td><td>Samodzielnie (20 min)</td><td>Chodź po sali, zachęcaj do własnego przedmiotu</td></tr>
          <tr><td>2:30</td><td>Ćwiczenie #4: zadanie administracyjne (3 opcje)</td><td>Samodzielnie (15 min)</td><td>Zachęcaj do użycia własnych dokumentów</td></tr>
          <tr><td>3:00</td><td>Mini-wykład: AI w projektach UE (5 min)</td><td>Słuchają</td><td>AI = asystent redakcyjny, nie autor</td></tr>
          <tr><td>3:05</td><td>Ćwiczenie #5: opis działania projektowego</td><td>Pracują (10 min)</td><td>Fikcyjny projekt OK</td></tr>
          <tr><td>3:20</td><td>Stop-klatka: RODO i ryzyka (15 min)</td><td>Dyskusja</td><td>3 scenariusze – edukuj, nie strasz</td></tr>
          <tr><td>3:42</td><td>Karta wdrożenia (8 min ciszy)</td><td>Wypełniają indywidualnie</td><td>Nie przerywaj ciszy</td></tr>
          <tr><td>3:50</td><td>Podsumowanie (5 kluczowych wniosków)</td><td>Słuchają</td><td>Nie powtarzaj całego dnia – skrót</td></tr>
          <tr><td>3:55</td><td>Ankieta wyjściowa</td><td>Wypełniają</td><td>QR kod lub papier</td></tr>
        </tbody>
      </table>
    </div>

    <div class="resource-section" id="questions">
      <h3>💬 Pytania do dyskusji grupowej</h3>
      <div style="display:flex;flex-direction:column;gap:14px">
        <div class="info-card">
          <h4>Po Module 1 (Czym jest AI?)</h4>
          <ul>
            <li>„Jak to, że AI nie 'wie' – tylko 'przewiduje' – zmienia Wasz stosunek do jej odpowiedzi?"</li>
            <li>„Kiedy byście zaufali AI, a kiedy nie? Co by musiało się stać?"</li>
            <li>„Co Was zaskoczyło w pierwszym kontakcie z narzędziem?"</li>
          </ul>
        </div>
        <div class="info-card">
          <h4>Po Module 2 (Prompting)</h4>
          <ul>
            <li>„Który element PARTS najtrudniej Wam było zastosować?"</li>
            <li>„Dla jakich zadań chcielibyście zbudować swoje gotowe prompty?"</li>
            <li>„Czy warto uczyć uczniów pisania promptów? Dlaczego / dlaczego nie?"</li>
          </ul>
        </div>
        <div class="info-card">
          <h4>Po Module 4 (Ryzyka)</h4>
          <ul>
            <li>„Jak zareagujecie, gdy uczeń poda Wam pracę napisaną przez AI?"</li>
            <li>„Jakie zasady AI chcielibyście mieć w swojej szkole?"</li>
            <li>„Co by przekonało Waszą dyrekcję do wsparcia AI w szkole?"</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="resource-section">
      <h3>🛑 Stop-klatki – gdy koniecznie się zatrzymać</h3>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${stopKlatka('1','Po ćwiczeniu #1','Dlaczego ogólne prompty dają ogólne wyniki?','5–7 min','Poproś o najsłabszy i najlepszy wynik z grupy. Analizuj na żywo.')}
        ${stopKlatka('2','Po ćwiczeniu #2','„5 Złotych Zasad" + refleksja','8 min','Zatrzymaj się, podsumuj PARTS. „Które ćwiczenie Was zaskoczyło najbardziej?"')}
        ${stopKlatka('3','Po ćwiczeniu #3','Co AI zrobiła dobrze? Co byś zmienił/a przed użyciem?','5 min','Wybierz dwa przykłady z grupy – jeden udany, jeden do poprawy.')}
        ${stopKlatka('4','Segment 4.2 – RODO (BARDZO WAŻNA)','Etyka, RODO, halucynacje, odpowiedzialność','15 min','3 scenariusze. Nie strasz – edukuj. Konkretne zasady.')}
        ${stopKlatka('5','Karta wdrożenia','Co zabieram? Co zrobię jutro?','8 min ciszy','„Teraz czas tylko dla Was. Wypełnijcie kartę. Nie musicie się dzielić."')}
      </div>
    </div>

    <div class="resource-section">
      <h3>🚨 Najczęstsze trudności i jak sobie z nimi radzić</h3>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${diffCard('Problemy techniczne (Wi-Fi, logowanie)','Miej przygotowane konto demo; testuj Wi-Fi przed szkoleniem; alternatywa: praca w parze')}
        ${diffCard('Zbyt zróżnicowany poziom grupy','Zaawansowani pracują jako „buddies" lub dostają trudniejsze ćwiczenia')}
        ${diffCard('Uczestnicy chcą „zobaczyć więcej narzędzi AI"','„To szkolenie nie jest o narzędziach – jest o kompetencji. Zasady działają w każdym narzędziu."')}
        ${diffCard('Opór emocjonalny / „nie dla mnie"','Nie przekonuj teorią. Zapytaj: „Jakie jedno zadanie chciałbyś/łaś dzisiaj ułatwić?"')}
        ${diffCard('AI napisała coś absurdalnego','„Świetnie! Pokażcie to grupie – to najlepszy przykład halucynacji."')}
      </div>
    </div>

    <div class="resource-section">
      <h3>⚡ Szybkie zasady trenera</h3>
      <ul>
        <li>✅ Zawsze miej timer – widoczny dla uczestników</li>
        <li>✅ Chodź po sali – nie siedź za laptopem podczas ćwiczeń</li>
        <li>✅ Zawsze pytaj – nie mów co uczestnik ma wpisać; zadawaj pytania naprowadzające</li>
        <li>✅ Wyłącz PowerPoint podczas ćwiczeń – slajdy rozpraszają w trakcie pracy</li>
        <li>✅ Miej plan B – na wypadek braku internetu</li>
        <li>✅ Podkreślaj wdrożenie nie wiedzę – „Co zrobisz jutro?" ważniejsze niż „co wiesz?"</li>
        <li>✅ Na pytania prawne: „Doskonałe pytanie – polecam sprawdzić w [źródle]. Ja nie jestem prawnikiem."</li>
      </ul>
    </div>
  </div>
`;

function stopKlatka(num, when, topic, time, how) {
  return `<div style="background:var(--clr-bg2);border-radius:var(--radius-md);padding:16px 20px;display:flex;gap:14px">
    <div style="min-width:32px;height:32px;background:var(--clr-warn);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700">⛔</div>
    <div>
      <div style="font-size:12px;font-weight:700;color:var(--clr-primary);text-transform:uppercase">${when}</div>
      <div style="font-size:14px;font-weight:700;margin:2px 0">${topic}</div>
      <div style="font-size:13px;color:var(--clr-text-muted)">Czas: ${time} · ${how}</div>
    </div>
  </div>`;
}

function diffCard(title, solution) {
  return `<div style="background:white;border:1px solid var(--clr-border);border-radius:var(--radius-md);padding:14px 18px">
    <div style="font-size:14px;font-weight:700;margin-bottom:6px">⚠️ ${title}</div>
    <div style="font-size:13px;color:var(--clr-text-muted)"><strong>Strategia:</strong> ${solution}</div>
  </div>`;
}

/* ─────────── SLIDES ─────────── */
PAGES.slides = () => `
  <div class="page-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> › Prezentacja</div>
    <h2>📊 Blueprint prezentacji – 32 slajdy</h2>
    <p>Kompletny układ prezentacji z treścią i narracją dla prowadzącego.</p>
  </div>
  <div class="slides-page">
    <div class="warn-box" style="margin-bottom:24px">
      <strong>Zasady projektowania slajdów:</strong> Max 20 słów na slajdzie · 1 myśl = 1 slajd · Podczas ćwiczeń: schowaj lub zostaw tylko timer · Nie zastępują warsztatu – wspierają go.
    </div>
    ${slide(1,'Okładka','inne','Sekcja wstępna','AI w pracy nauczyciela i szkoły | Praktyczny warsztat od podstaw do wdrożenia | Logo szkoły · Data · Prowadzący')}
    ${slide(2,'Jak wygląda dziś?','wykład','Sekcja wstępna','Wykres kołowy: 15% teoria / 15% demo / 50% ćwiczenia / 20% omówienie i refleksja')}
    ${slide(3,'Ankieta wejściowa','dzialanie','Sekcja wstępna','Link QR do ankiety lub instrukcja na tablicy. Czas: 3–5 minut.')}
    ${slide(4,'Co to jest AI?','wykład','Moduł 1','Tylko 3 bullet: „Przewiduje kolejne słowo" · „Pisze gładko, ale nie wie" · „Może mylić się z pewnością siebie"')}
    ${slide(5,'Liczby, które warto znać','wykład','Moduł 1','5,9h / tydzień (Gallup 2025) · 29% nauczycieli OECD potrzebuje szkoleń (TALIS 2024) · 74% AI poprawiła pracę admin.')}
    ${slide(6,'Logowanie + narzędzia','dzialanie','Moduł 1','chat.openai.com · gemini.google.com · claude.ai — Wybierz jedno i idź z nim.')}
    ${slide(7,'ĆWICZENIE #1 – Twój pierwszy prompt','cwiczenie','Moduł 1','Pomyśl o zadaniu, które regularnie pochłania Twój czas. Wpisz do AI. Czas: 10 minut [timer]')}
    ${slide(8,'Omówienie: co dostaliśmy?','dyskusja','Moduł 1','2–3 osoby pokazują wyniki · Co AI zrobiła dobrze? · Co nie? · Dlaczego?')}
    ${slide(9,'Framework PARTS','wykład','Moduł 2','P-Persona · A-Aim · R-Recipients · T-Tone · S-Structure — Tabela z przykładami')}
    ${slide(10,'Słaby vs. Mocny prompt','demo','Moduł 2','[Na żywo] Pokaz obu wyników obok siebie na projektorze')}
    ${slide(11,'ĆWICZENIE #2 – Ulepsz słaby prompt','cwiczenie','Moduł 2','3 słabe prompty na ekranie. Wybierz 1–2. Popraw wg PARTS. Czas: 15 minut [timer]')}
    ${slide(12,'5 Złotych Zasad prompting','wykład','Moduł 2','1. Bądź konkretny 2. Podaj kontekst 3. Określ format 4. Iteruj 5. Weryfikuj')}
    ${slide(13,'Kiedy AI zawodzi','wykład','Moduł 2','Zbyt ogólny prompt · Aktualne fakty/przepisy · Dane ze swojego projektu · Bez sprawdzenia')}
    ${slide(14,'Dyskusja mostkowa','dyskusja','Moduł 2','[Pusty slajd z pytaniem] Jakie zadanie AI mogłaby skrócić o połowę?')}
    ${slide(15,'PRZERWA 10 minut','przerwa','Przerwa','Duży countdown: odlicza 10 minut.')}
    ${slide(16,'AI w dydaktyce','wykład','Moduł 3','Tabela: Zadanie | AI robi | Ty robisz — Konspekt / Różnicowanie / Pytania / Informacja zwrotna')}
    ${slide(17,'Demo: konspekt + różnicowanie','demo','Moduł 3','[Na żywo] Prowadzący wpisuje prompt. Czekamy. Analizujemy.')}
    ${slide(18,'ĆWICZENIE #3 – Twoja lekcja','cwiczenie','Moduł 3','Wybierz swój temat. Wygeneruj konspekt. Następny prompt: wersja różnicująca. Czas: 20 min.')}
    ${slide(19,'ĆWICZENIE #4 – Zadanie administracyjne','cwiczenie','Moduł 3','A) Streszczenie dokumentu B) Mail do rodziców C) Checklista. Czas: 15 min.')}
    ${slide(20,'Omówienie: co działa?','dyskusja','Moduł 3','Podzielmy się wynikami. Kto był zaskoczony jakością? Co wymagało poprawy?')}
    ${slide(21,'AI w projektach EU','wykład','Moduł 4','Tabela: Co AI może | Co AI nie może — asystent redakcyjny, nie autor')}
    ${slide(22,'ĆWICZENIE #5 – Opis działania','cwiczenie','Moduł 4','Wygeneruj opis działania. Zaznacz [UZUPEŁNIJ]. Ocena krytyczna. Czas: 10 min.')}
    ${slide(23,'Zasada transparentności KE','wykład','Moduł 4','„Komisja Europejska oczekuje, że użycie AI w dokumentach projektowych jest zaznaczone." — Wytyczne KE 2024')}
    ${slide(24,'STOP – 3 zasady RODO','dzialanie','Moduł 4','🔴 1. Żadnych danych os. uczniów 2. Żadnych poufnych doc. bez polityki prywatności 3. Anonimizuj ZANIM wkleisz')}
    ${slide(25,'Scenariusze do dyskusji','dyskusja','Moduł 4','[Jeden scenariusz na kliknięcie] Co jest nie tak?')}
    ${slide(26,'Checklista weryfikacji AI','wykład','Moduł 4','5 pytań przed użyciem: Fakty · Ton · Dane osobowe · Adekwatność · Odpowiedzialność')}
    ${slide(27,'Karta wdrożenia','cwiczenie','Moduł 4','8 minut ciszy. „Czas tylko dla Was. Wypełnijcie kartę." [timer]')}
    ${slide(28,'5 kluczowych wniosków','wykład','Podsumowanie','1. AI = narzędzie 2. PARTS 3. Weryfikuj fakty 4. RODO 5. Zacznij od 1 zadania')}
    ${slide(29,'Zasoby do nauki','inne','Zamknięcie','UNESCO AI CFT · ESEP · AI for Education · europa.eu/digital-education')}
    ${slide(30,'Ankieta wyjściowa','dzialanie','Zamknięcie','[QR kod duży] 3 minuty. Anonimowo. Wasza ocena pomaga.')}
    ${slide(31,'Dziękuję','inne','Zamknięcie','Imię prowadzącego · kontakt · informacja o materiałach')}
    ${slide(32,'Okładka końcowa (tło)','inne','After','Slajd zapasowy wyświetlany podczas rozmów końcowych')}
  </div>
`;

function slide(num, title, type, section, content) {
  const typeMap = { wykład:'type-wykład', cwiczenie:'type-cwiczenie', demo:'type-demo', dyskusja:'type-dyskusja', dzialanie:'type-dzialanie', przerwa:'type-przerwa', inne:'type-inne' };
  const typeLabel = { wykład:'Mini-wykład', cwiczenie:'Ćwiczenie', demo:'Demonstracja', dyskusja:'Dyskusja', dzialanie:'Działanie', przerwa:'Przerwa', inne:'Inne' };
  return `<div class="slide-card">
    <div class="slide-num">${num}</div>
    <div class="slide-info">
      <div class="slide-title">${title}</div>
      <div>
        <span class="slide-type ${typeMap[type]}">${typeLabel[type]}</span>
        <span style="font-size:11px;color:var(--clr-text-muted);margin-left:8px">${section}</span>
      </div>
      <div class="slide-content">${content}</div>
    </div>
  </div>`;
}

/* ─────────── BIBLIOGRAPHY ─────────── */
PAGES.bibliography = () => `
  <div class="page-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> › Źródła</div>
    <h2>📚 Źródła i bibliografia</h2>
    <p>Badania, dokumenty i raporty instytucjonalne, na których oparty jest moduł szkoleniowy.</p>
  </div>
  <div class="bib-page">
    ${bib('UNESCO AI Competency Framework for Teachers (AI CFT)',2024,'UNESCO – Organizacja Narodów Zjednoczonych ds. Oświaty, Nauki i Kultury',
      'Definiuje 5 kompetencji AI dla nauczycieli: rozumienie AI, użycie AI, projektowanie z AI, etyka, uczenie uczniów AI.',
      'Fundament merytoryczny całego szkolenia. Kompetencje AI dla nauczycieli (5 obszarów)','1')}
    ${bib('OECD TALIS 2024 – Teaching and Learning International Survey',2024,'OECD – Organizacja Współpracy Gospodarczej i Rozwoju',
      '29% nauczycieli zgłasza potrzebę szkoleń z AI. Kluczowe dane nt. gotowości pedagogów na AI.',
      'Dane dot. luki kompetencyjnej i potrzeb szkoleniowych (segmenty 1.2, 2.3)','1')}
    ${bib('OECD Education Policy Outlook 2024',2024,'OECD',
      'Analiza tendencji w polityce edukacyjnej, integracja AI w systemach edukacji krajów OECD.',
      'Kontekst polityki edukacyjnej i wdrożeń AI w Europie','2')}
    ${bib('Komisja Europejska – Wytyczne etyczne AI dla edukacji',2026,'Komisja Europejska – DG EAC',
      'Zasady etycznego i transparentnego użycia AI w instytucjach edukacyjnych finansowanych ze środków UE.',
      'Zasady transparentności w projektach UE (segment 4.1, 4.2)','1')}
    ${bib('Digital Education Action Plan 2021–2027',2021,'Komisja Europejska',
      'Plan działania UE ws. edukacji cyfrowej – kompetencje, narzędzia, ekosystem. Baza dla projektów Erasmus+.',
      'Kontekst projektowy i wytyczne dla Erasmus+','2')}
    ${bib('DigCompEdu – European Framework for the Digital Competence of Educators',2017,'Komisja Europejska (JRC)',
      '22 kompetencje cyfrowe nauczycieli w 6 obszarach. Zawiera AI Pioneers Supplement (2024).',
      'Definiuje kompetencje cyfrowe i AI nauczycieli, stopniowanie poziomów (A1–C2)','1')}
    ${bib('Gallup / Walton Family Foundation – AI in Education (2025)',2025,'Gallup Inc. / Walton Family Foundation',
      'Badanie produktywności nauczycieli używających AI. Kluczowy wynik: 5,9h oszczędności / tydzień dla regularnych użytkowników.',
      'Dane motywacyjne w hero section i segmencie 1.2','1')}
    ${bib('Knowles, Malcolm et al. – The Adult Learner (8th ed.)',2015,'Routledge / Taylor & Francis',
      'Klasyk andragogiki. Model autodyrektywnego uczenia dorosłych. Zasada uczenia przez działanie i natychmiastowej stosowalności.',
      'Fundament metodyczny: proporcje szkolenia 15/15/50/20%, „I do We do You do"','1')}
    ${bib('AI Literacy – UNESCO Global Framework',2023,'UNESCO',
      'Globalne ramy kompetencji AI-literacy dla wszystkich poziomów edukacji.',
      'Definicja AI literacy i poziomów kompetencji uczestnika','2')}
    ${bib('European School Education Platform (ESEP) – AI Resources',2024,'Komisja Europejska (EACEA)',
      'Zasoby do nauki i szkolenia z AI dostępne bezpłatnie dla nauczycieli w UE.',
      'Materiały uzupełniające dla uczestników po szkoleniu','3')}
  </div>
`;

function bib(title, year, org, desc, note, prio) {
  const prioLabel = {1:'Priorytet 1 – kluczowe', 2:'Priorytet 2 – wspierające', 3:'Priorytet 3 – uzupełniające'};
  const prioCls = {1:'prio-1',2:'prio-2',3:'prio-3'};
  return `<div class="bib-entry">
    <span class="bib-priority-badge ${prioCls[prio]}">${prioLabel[prio]}</span>
    <div class="bib-title">${title}</div>
    <div class="bib-detail">${org} · ${year}</div>
    <div class="bib-note">${desc}<br><br><strong>Rola w szkoleniu:</strong> ${note}</div>
  </div>`;
}

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const s = getState();
  // restore last page or default to home
  const startPage = s.lastPage && PAGES[s.lastPage] ? s.lastPage : 'home';
  showPage(startPage);

  // keyboard: Escape closes search
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape') document.getElementById('searchOverlay').classList.remove('open');
  });
});
