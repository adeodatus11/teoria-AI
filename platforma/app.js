/* ═══════════════════════════════════════════════════════════
   AI W SZKOLE – KURS SELF-LEARNING
   app.js v2 – treści dla uczestnika, bez języka trenerskiego
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════════════
   STATE & localStorage
══════════════════════════════════════ */
const STORE = 'aiSelfCourse_v2';

function gs() { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch (e) { return {}; } }
function ss(state) { localStorage.setItem(STORE, JSON.stringify(state)); }
function us(patch) { const s = gs(); Object.assign(s, patch); ss(s); }

function migrateCourseState() {
  const s = gs();
  if (s.courseStructureVersion === 2) return s;

  if (Array.isArray(s.done)) {
    s.done = s.done.map(id => id === 'module5' ? 'module6' : id);
    s.done = [...new Set(s.done)];
  }
  if (s.lastPage === 'module5') s.lastPage = 'module6';
  s.courseStructureVersion = 2;
  ss(s);
  return s;
}

/* ══════════════════════════════════════
   ROUTER
══════════════════════════════════════ */
const PAGES = {};
let currentPage = 'home';

function parseSlideTarget(target) {
  if (!target) return { setKey: 'm1', slideIdx: 0 };
  const [setKeyRaw, slideRaw] = String(target).split(':');
  const setKey = setKeyRaw && typeof SLIDE_SETS !== 'undefined' && SLIDE_SETS[setKeyRaw] ? setKeyRaw : 'm1';
  const slideIdx = /^s\d+$/.test(slideRaw || '') ? Math.max(0, Number(slideRaw.slice(1)) - 1) : 0;
  return { setKey, slideIdx };
}

function showPage(id, arg2) {
  currentPage = id;
  document.getElementById('sidebar').classList.remove('open');
  us({ lastPage: id });

  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const slideTarget = id === 'slides' ? parseSlideTarget(arg2) : null;
  const pageSelector = id === 'slides' && slideTarget ? `${id}_${slideTarget.setKey}` : id;
  const lnk = document.querySelector(`.nav-link[data-page="${pageSelector}"]`);
  if (lnk) lnk.classList.add('active');

  const main = document.getElementById('mainContent');
  if (PAGES[id]) {
    main.innerHTML = `<div class="page-anim">${PAGES[id]()}</div>`;
    postRender(id);
  } else {
    main.innerHTML = `<div style="padding:80px 40px;text-align:center;color:#94a3b8">
      <div style="font-size:52px;margin-bottom:16px">🚧</div>
      <p style="font-size:16px">Strona <strong>${id}</strong> – wkrótce dostępna.</p>
      <button class="btn-primary" style="margin-top:20px" onclick="showPage('home')">← Wróć do strony głównej</button>
    </div>`;
  }

  window.scrollTo(0, 0);
  main.scrollTop = 0;

  if (arg2) {
    if (id === 'slides') {
      setTimeout(() => switchSlideSet(slideTarget.setKey, slideTarget.slideIdx), 50);
    } else {
      setTimeout(() => {
        const el = document.getElementById(arg2);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 160);
    }
  }

  updateProgress();
  updateContinueBtn();
}

function postRender(id) {
  const s = gs();
  // restore check states
  if (id === 'checklists' || id === 'myplan') restoreChecks();
  // mark done button state
  const btn = document.getElementById('doneBtn_' + id);
  if (btn && Array.isArray(s.done) && s.done.includes(id)) {
    btn.textContent = '✓ Ukończono'; btn.classList.add('done');
  }
  // restore slide viewer if needed
  if (id === 'slides' && typeof initSlides === 'function') initSlides();
}

function markDone(id) {
  const s = gs();
  s.done = s.done || [];
  if (!s.done.includes(id)) s.done.push(id);
  ss(s);
  updateProgress();
  const btn = document.getElementById('doneBtn_' + id);
  if (btn) { btn.textContent = '✓ Ukończono'; btn.classList.add('done'); }
}

function updateProgress() {
  const tracked = ['module1', 'module2', 'module3', 'module4', 'module5', 'module6', 'exercises', 'prompts', 'checklists', 'myplan'];
  const s = gs();
  const done = (s.done || []).filter(m => tracked.includes(m));
  const pct = Math.round((done.length / tracked.length) * 100);
  const fill = document.getElementById('sidebarProgress');
  const pctEl = document.getElementById('sidebarProgressPct');
  const txt = document.getElementById('sidebarProgressText');
  if (fill) fill.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';
  if (txt) txt.textContent = done.length + ' / ' + tracked.length + ' elementów ukończonych';
}

function updateContinueBtn() {
  const s = gs();
  const btn = document.getElementById('btnContinue');
  if (!btn) return;
  if (s.lastPage && s.lastPage !== 'home' && PAGES[s.lastPage]) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }
}

function continueLearning() {
  const s = gs();
  const order = ['module1', 'module2', 'module3', 'module4', 'module5', 'module6'];
  const done = s.done || [];
  // find first incomplete module
  const next = order.find(m => !done.includes(m));
  if (s.lastPage && PAGES[s.lastPage]) showPage(s.lastPage);
  else if (next) showPage(next);
  else showPage('exercises');
}

/* ══════════════════════════════════════
   UI HELPERS
══════════════════════════════════════ */
function toggleSearch() {
  const o = document.getElementById('searchOverlay');
  o.classList.toggle('open');
  if (o.classList.contains('open')) document.getElementById('searchInput').focus();
}
function closeSearch(e) {
  if (e.target.id === 'searchOverlay') document.getElementById('searchOverlay').classList.remove('open');
}

function toggleMobileMenu() { document.getElementById('sidebar').classList.toggle('open'); }

function toggleScenario(el) {
  el.closest('.scenario-card').classList.toggle('open');
}

async function writeTextWithFallback(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return { ok: true, mode: 'clipboard' };
    } catch (err) {
      // przechodzimy do fallbacku niżej
    }
  }

  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '-9999px';
    ta.style.left = '-9999px';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    ta.setSelectionRange(0, ta.value.length);
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    if (ok) return { ok: true, mode: 'execCommand' };
  } catch (err) {
    // ostatni fallback niżej
  }

  try {
    window.prompt('Nie udało się skopiować automatycznie. Skopiuj tekst ręcznie:', text);
    return { ok: false, mode: 'manual' };
  } catch (err) {
    return { ok: false, mode: 'failed' };
  }
}

function showCopyFeedback(btn, ok, defaultLabel, successLabel, manualLabel) {
  if (!btn) return;
  btn.textContent = ok ? successLabel : manualLabel;
  btn.classList.toggle('copied', ok);
  btn.classList.toggle('copy-failed', !ok);
  setTimeout(() => {
    btn.textContent = defaultLabel;
    btn.classList.remove('copied', 'copy-failed');
  }, 2200);
}

async function copyPrompt(btn) {
  const pre = btn.closest('.prompt-box').querySelector('pre');
  const result = await writeTextWithFallback(pre.textContent.trim());
  showCopyFeedback(btn, result.ok, 'Kopiuj', '✓ Skopiowano', 'Skopiuj ręcznie');
}

function savePromptFromBox(btn) {
  const pre = btn.closest('.prompt-box').querySelector('pre');
  const titleEl = btn.closest('.prompt-card') && btn.closest('.prompt-card').querySelector('h4');
  const title = titleEl ? titleEl.textContent : 'Zapisany prompt';
  const text = pre.textContent.trim();
  const s = gs();
  s.savedPrompts = s.savedPrompts || [];
  s.savedPrompts.unshift({ id: Date.now(), title, text });
  ss(s);
  btn.textContent = '✓ Zapisano'; btn.classList.add('saved');
  setTimeout(() => { btn.textContent = '⭐ Zapisz'; btn.classList.remove('saved'); }, 2000);
  if (document.getElementById('notesPanel').classList.contains('open')) renderNotesTabs('prompts');
}

/* ══════════════════════════════════════
   NOTES PANEL
══════════════════════════════════════ */
let currentNotesTab = 'notes';

function toggleNotes() {
  const panel = document.getElementById('notesPanel');
  const btn = document.getElementById('notesToggleBtn');
  panel.classList.toggle('open');
  btn.classList.toggle('active');
  if (panel.classList.contains('open')) renderNotesTabs(currentNotesTab);
}

function switchNotesTab(tab) {
  currentNotesTab = tab;
  document.getElementById('tabNotes').classList.toggle('active', tab === 'notes');
  document.getElementById('tabPrompts').classList.toggle('active', tab === 'prompts');
  renderNotesTabs(tab);
}

function renderNotesTabs(tab) {
  const body = document.getElementById('notesBody');
  if (tab === 'notes') {
    const s = gs();
    const notes = s.notes || '';
    body.innerHTML = `
      <p style="font-size:12.5px;color:var(--clr-text-muted);margin-bottom:10px">Twoje notatki i zapisane prompty są przechowywane lokalnie w tej przeglądarce i zostaną usunięte po wyczyszczeniu danych przeglądania.</p>
      <textarea id="notesTextarea" class="notes-textarea" placeholder="Pisz swoje notatki tutaj...">${notes}</textarea>
      <button class="notes-save-btn" onclick="saveNotes()">💾 Zapisz notatki</button>
      <div id="notesSaveMsg" style="font-size:12px;color:var(--clr-success);margin-top:8px;display:none">✓ Zapisano!</div>`;
  } else {
    const s = gs();
    const prompts = s.savedPrompts || [];
    if (!prompts.length) {
      body.innerHTML = `<div class="notes-empty">
        <div style="font-size:36px;margin-bottom:12px">💡</div>
        <p>Nie masz jeszcze zapisanych promptów.</p>
        <p style="margin-top:8px">W Promptowniku kliknij „⭐ Zapisz" przy wybranym prompcie.</p>
      </div>`;
      return;
    }
    body.innerHTML = prompts.map(p => `
      <div class="saved-prompt-item" data-id="${p.id}">
        <div class="sp-title">${p.title}</div>
        <pre class="sp-text">${(p.text.length > 200 ? p.text.slice(0, 200) + '…' : p.text).replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
        <div style="display:flex;gap:8px;margin-top:8px;align-items:center">
          <button class="saved-prompt-copy" onclick="copyFromPanel(this)">📋 Kopiuj</button>
          <button class="sp-del" onclick="deletePrompt(${p.id})" title="Usuń">✕</button>
        </div>
      </div>
    `).join('');
  }
}

function saveNotes() {
  const txt = document.getElementById('notesTextarea').value;
  us({ notes: txt });
  const msg = document.getElementById('notesSaveMsg');
  msg.style.display = 'block';
  setTimeout(() => { msg.style.display = 'none'; }, 2000);
}

function deletePrompt(id) {
  const s = gs();
  s.savedPrompts = (s.savedPrompts || []).filter(p => p.id !== id);
  ss(s);
  renderNotesTabs('prompts');
}

async function copyText(encoded) {
  return writeTextWithFallback(decodeURIComponent(encoded));
}

async function copyFromPanel(btn) {
  const item = btn.closest('.saved-prompt-item');
  const id = parseInt(item.dataset.id);
  const s = gs();
  const p = (s.savedPrompts || []).find(x => x.id === id);
  if (p) {
    const result = await writeTextWithFallback(p.text);
    showCopyFeedback(btn, result.ok, '📋 Kopiuj', '✓ Skopiowano', 'Skopiuj ręcznie');
  }
}

/* ══════════════════════════════════════
   CHECKLISTS
══════════════════════════════════════ */
function onCheck(cb) {
  const s = gs();
  s.checks = s.checks || {};
  s.checks[cb.id] = cb.checked;
  ss(s);
  cb.closest('.check-item').classList.toggle('checked', cb.checked);
}
function restoreChecks() {
  const s = gs();
  if (!s.checks) return;
  document.querySelectorAll('.check-item input').forEach(cb => {
    if (s.checks[cb.id] !== undefined) {
      cb.checked = s.checks[cb.id];
      cb.closest('.check-item').classList.toggle('checked', cb.checked);
    }
  });
}
function resetChecks(prefix) {
  const s = gs();
  s.checks = s.checks || {};
  document.querySelectorAll('.check-item input').forEach(cb => {
    if (cb.id.startsWith(prefix)) {
      cb.checked = false;
      cb.closest('.check-item').classList.remove('checked');
      delete s.checks[cb.id];
    }
  });
  ss(s);
}
function chk(id, label) {
  return `<div class="check-item" onclick="event.stopPropagation();document.getElementById('${id}').click()">
    <input type="checkbox" id="${id}" onclick="event.stopPropagation();onCheck(this)">
    <label for="${id}">${label}</label>
  </div>`;
}

/* ══════════════════════════════════════
   SEARCH
══════════════════════════════════════ */

function searchScore(item, lq) {
  const title = item.t.toLowerCase();
  const context = item.c.toLowerCase();
  let score = 0;

  if (title === lq) score += 120;
  else if (title.startsWith(lq)) score += 80;
  else if (title.includes(lq)) score += 50;

  item.tags.forEach(tag => {
    const lt = tag.toLowerCase();
    if (lt === lq) score += 35;
    else if (lt.startsWith(lq)) score += 24;
    else if (lt.includes(lq)) score += 16;
  });

  if (context.includes(lq)) score += 10;
  return score;
}

function runSearch(q) {
  const res = document.getElementById('searchResults');
  if (!q.trim()) { res.innerHTML = ''; return; }
  const lq = q.toLowerCase();
  const hits = IDX
    .map(i => ({ item: i, score: searchScore(i, lq) }))
    .filter(h => h.score > 0)
    .sort((a, b) => b.score - a.score || a.item.t.localeCompare(b.item.t, 'pl'))
    .slice(0, 12)
    .map(h => h.item);

  if (!hits.length) { res.innerHTML = `<div class="search-empty">Brak wyników dla „${q}"</div>`; return; }
  res.innerHTML = hits.map(h => `
    <div class="search-result-item" role="option" onclick="document.getElementById('searchOverlay').classList.remove('open');showPage('${h.p}','${h.a}')">
      <div class="sr-title">${h.t}</div>
      <div class="sr-context">${h.tags.map(tg => `<span class="sr-tag">${tg}</span>`).join('')}${h.c}</div>
    </div>`).join('');
}

/* ══════════════════════════════════════
   MODULE PILLS BUILDER
══════════════════════════════════════ */
function modulePills() {
  const s = gs(); const done = s.done || [];
  const ms = [
    { id: 'module1', emoji: '📘', label: 'Moduł 1 – Czym jest AI' },
    { id: 'module2', emoji: '✍️', label: 'Moduł 2 – Prompting' },
    { id: 'module3', emoji: '🎓', label: 'Moduł 3 – AI w dydaktyce' },
    { id: 'module4', emoji: '🌍', label: 'Moduł 4 – Projekty i analityka' },
    { id: 'module5', emoji: '🤝', label: 'Moduł 5 – Praca projektowa z AI' },
    { id: 'module6', emoji: '🌱', label: 'Moduł 6 – Zrównoważone AI' },
    { id: 'exercises', emoji: '🧩', label: 'Ćwiczenia' },
    { id: 'prompts', emoji: '💡', label: 'Promptownik' },
    { id: 'checklists', emoji: '✅', label: 'Checklisty' },
    { id: 'myplan', emoji: '🎯', label: 'Mój plan wdrożenia' },
  ];
  const doneCount = done.filter(d => ms.map(m => m.id).includes(d)).length;
  const pct = Math.round(doneCount / ms.length * 100);
  return `
    <div class="progress-track">
      <div class="progress-track-title">
        <span>🗺️ Twój postęp w kursie</span>
        <span class="pt-pct">${doneCount}/${ms.length} ukończone · ${pct}%</span>
      </div>
      <div class="track-bar-wrap"><div class="track-bar-fill" style="width:${pct}%"></div></div>
      <div class="modules-row">
        ${ms.map(m => {
    const isDone = done.includes(m.id);
    return `<div class="module-pill ${isDone ? 'done' : ''}" onclick="showPage('${m.id}')">${isDone ? '✓ ' : m.emoji + ' '}${m.label}</div>`;
  }).join('')}
      </div>
    </div>`;
}

/* ══════════════════════════════════════
   PAGE: HOME
══════════════════════════════════════ */

/* ══════════════════════════════════════
   PAGE: MODULE 1
══════════════════════════════════════ */

/* ══════════════════════════════════════
   PAGE: EXERCISES
══════════════════════════════════════ */
PAGES.exercises = () => `
  <div class="page-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> <span class="bc-sep">›</span> Ćwiczenia</div>
    <h2>🧩 Ćwiczenia praktyczne</h2>
    <p>18 głównych ćwiczeń kursu. Każde zawiera cel, instrukcję krok po kroku, materiał startowy lub gotowy prompt oraz kryteria sukcesu.</p>
    <button id="doneBtn_exercises" class="mark-done-btn" onclick="markDone('exercises')">✓ Oznacz jako ukończony</button>
  </div>
  <div class="filter-bar">
    <button class="filter-btn active" onclick="filterEx('all',this)">Wszystkie (18)</button>
    <button class="filter-btn" onclick="filterEx('basic',this)">Podstawowe</button>
    <button class="filter-btn" onclick="filterEx('med',this)">Średniozaawansowane</button>
  </div>
  <div class="exercises-container">
    ${ex('ex1', '1', 'Mój pierwszy prompt', 'basic', '15–20 min',
  'Otwórz narzędzie AI i wykonaj swoje pierwsze zadanie. Oceń wynik.',
  `<ol>
        <li>Otwórz jedno narzędzie: <strong>chatgpt.com</strong> (ChatGPT), <strong>gemini.google.com</strong> (Gemini) lub <strong>claude.ai</strong></li>
        <li>Pomyśl o jednym zadaniu zawodowym, które regularnie zajmuje Ci dużo czasu.</li>
        <li>Opisz to zadanie w polu tekstowym – tak, jak napisałbyś/napisałabyś do kolegi z prośbą o pomoc.</li>
        <li>Kliknij „Wyślij" i przeczytaj wynik.</li>
        <li>Oceń wynik w skali 1–5 (1 = bezużyteczny, 5 = mogę użyć jutro).</li>
        <li>Zapisz: co AI zrobiła dobrze? Co jest ogólne lub błędne? Co byś zmienił/a?</li>
      </ol>
      <div class="tip-box" style="margin-top:12px"><strong>Jeśli nie wiesz od czego zacząć:</strong> Wpisz: „Napisz ogłoszenie dla rodziców klasy 6 o zebraniu w czwartek o 17:00. Temat: wyniki klasyfikacji i plan wycieczki szkolnej do Krakowa."</div>
      <div class="key-insight" style="margin-top:12px"><strong>Na co zwróć uwagę:</strong> czy wynik jest konkretny, czy ogólny? czy byłbyś/abyś gotowy/a go użyć bez edycji? To pokaże Ci, jak ważny jest dobry prompt.</div>`,
  `<ul><li>Masz działające konto w narzędziu AI</li><li>Masz swój pierwszy wynik AI</li><li>Potrafisz wskazać co jest dobre, co nie</li><li>Wiesz, co zmienić w prompcie, żeby wynik był lepszy</li></ul>`
)}
    ${ex('ex2', '2', 'Ulepsz słaby prompt – technika PARTS', 'basic', '20–25 min',
  'Zastosuj framework PARTS, żeby zobaczyć, jak zmiana promptu zmienia wynik AI.',
  `<p><strong>Masz 3 słabe prompty. Wybierz jeden i popraw go według PARTS.</strong></p>
      <div class="prompt-box"><pre>PROMPT A: „Napisz lekcję o wojnie."
PROMPT B: „Zrób mail do rodziców."
PROMPT C: „Opisz projekt."</pre></div>
      <ol>
        <li>Wybierz jeden prompt (najlepiej ten, który pasuje do Twojej pracy).</li>
        <li>Wpisz go do AI – przepisz wynik.</li>
        <li>Teraz przepisz ten sam prompt według PARTS: dodaj Personę, Cel, Odbiorców, Ton, Format.</li>
        <li>Wpisz ulepszoną wersję do AI – przepisz wynik.</li>
        <li>Porównaj oba wyniki. Jaka jest różnica? Który jest bardziej przydatny?</li>
      </ol>
      <div class="tip-box" style="margin-top:10px"><strong>Przykład ulepszonego Promptu B:</strong><br>„Działaj jako wychowawca klasy VI. Napisz profesjonalny mail do rodziców klasy zapraszający na zebranie w środę 15 maja o 17:00. Tematyka: podsumowanie semestru, plan wycieczki szkolnej. Ton: przyjazny, rzeczowy. Format: temat maila + treść (max 140 słów)"</div>
      <p style="margin-top:12px"><strong>Kryteria oceny własnego promptu:</strong> czy zawiera min. 3 z 5 elementów PARTS? Czy wynik jest wyraźnie lepszy niż bez PARTS?</p>`,
  `<ul><li>Napisałeś/aś przynajmniej 1 ulepszony prompt</li><li>Przetestowałeś/aś oba warianty i widzisz różnicę</li><li>Potrafisz nazwać elementy PARTS, które dodałeś/aś</li></ul>`
)}
    ${ex('ex3', '3', 'Konspekt lekcji + różnicowanie', 'med', '20–25 min',
  'Wygeneruj konspekt lekcji ze swojego przedmiotu, a potem dostosuj wybrany fragment do uczniów o różnych potrzebach.',
  `<ol>
        <li>Wybierz temat swojej najbliższej lekcji (lub temat, który masz zaplanowany).</li>
        <li>Wpisz do AI prompt z frameworkiem PARTS – patrz gotowy prompt poniżej.</li>
        <li>Przeczytaj wynik. Sprawdź: Czy struktura czasowa jest realistyczna? Czy aktywności są wykonalne? Co byś zmienił/a przed użyciem?</li>
        <li>Napisz drugi prompt: <em>„Teraz przepisz fragment [wskaż którą część] dla uczniów z trudnościami w czytaniu/rozumieniu"</em> lub <em>„...dla uczniów zdolnych, którzy szybko przerabiają materiał"</em>.</li>
        <li>Porównaj wersje. Co AI zmieniła? Czy to wystarczające?</li>
      </ol>
      <div class="prompt-box" style="position:relative">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <pre>Działaj jako doświadczony nauczyciel [TWÓJ PRZEDMIOT] w [TYP SZKOŁY].
Przygotuj konspekt lekcji (45 min) na temat [TEMAT]
dla uczniów [KLASA, WIEK], [OPIS GRUPY].
Uwzględnij: angażujące intro (max 5 min), pracę aktywną, podsumowanie.
Format: tabela | Czas | Aktywność | Opis | Materiały</pre>
      </div>
      <p><strong>Nie jesteś nauczycielem przedmiotowym?</strong> Zamiast konspektu – przygotuj plan działania lub harmonogram dowolnego projektu szkolnego.</p>`,
  `<ul><li>Masz wygenerowany konspekt gotowy do adaptacji</li><li>Masz wersję zróżnicowaną (uproszczoną lub rozszerzoną)</li><li>Wiesz, co zmienić przed użyciem w klasie</li></ul>`
)}
    ${ex('ex4', '4', 'AI w dokumentach – 3 opcje', 'basic', '15–20 min',
  'Wybierz zadanie z Twojej codziennej pracy i wykonaj je z pomocą AI.',
  `<p>Wybierz jedno zadanie:</p>
      <p><strong>Opcja A – Streszczenie dokumentu:</strong><br>Skopiuj fragment dowolnego dokumentu szkolnego (zarządzenie, regulamin, protokół). Usuń wszystkie imiona i nazwiska. Wklej do AI z promptem:</p>
      <div class="prompt-box" style="position:relative"><button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button><pre>Przeczytaj poniższy dokument i przygotuj:
1. Streszczenie w max 5 zdaniach
2. Listę moich zadań / działań z terminami
3. Trzy pytania, które warto zadać po lekturze
Dokument: [WKLEJ TEKST]</pre></div>
      <p><strong>Opcja B – Mail do rodziców:</strong><br>Wklej poniższe notatki i poproś AI o gotowy mail:</p>
      <div class="prompt-box" style="position:relative"><button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button><pre>Wychowawca klasy VI. Napisz mail do rodziców na podstawie notatek:
„Czwartek g.16.00, zebranie, zabrać notatki, info o wycieczce
do stolicy 7 marca, 120 EUR, formularz, spotkanie z dyrekcją"
Ton: ciepły, rzeczowy. Format: temat + treść (max 130 słów)</pre></div>
      <p><strong>Opcja C – Checklista organizacyjna:</strong></p>
      <div class="prompt-box" style="position:relative"><button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button><pre>Przygotuj checklistę do organizacji:
[wycieczki szkolnej / olimpiady / dni otwartych / konferencji]
Podziel na etapy: 2 tyg. przed / 1 tyg. przed / dzień przed / w dniu</pre></div>`,
  `<ul><li>Masz gotowy wytwór: streszczenie / mail / checklista</li><li>Wskazujesz, co poprawić lub uzupełnić przed użyciem</li><li>Szacujesz: ile czasu zajęłoby to bez AI?</li></ul>`
)}
    ${ex('ex5', '5', 'Opis działania projektowego', 'med', '10–15 min',
  'Wygeneruj szkic opisu działania do raportu projektowego i oceń krytycznie wynik.',
  `<ol>
        <li>Pomyśl o projekcie, przy którym pracujesz lub pracowałeś/aś (możesz też wymyślić fikcyjny projekt Erasmus+).</li>
        <li>Wpisz do AI poniższy prompt – uzupełnij dane w nawiasach:</li>
      </ol>
      <div class="prompt-box" style="position:relative">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <pre>Jestem koordynatorem/ką projektu [TYP: Erasmus+/WIN4SMEs]
pt. "[TYTUŁ]" z partnerami z [KRAJE].
W [MIESIĄC ROK] odbyło się [DZIAŁANIE] z udziałem [OPIS].
Tematyka: [TEMAT].

Napisz opis działania (180–220 słów) do raportu narracyjnego UE.
Styl: rzeczowy, profesjonalny, wartość dodana.
Zaznacz [UZUPEŁNIJ] gdzie potrzebne konkretne dane.</pre>
      </div>
      <div class="alert-box"><strong>Po otrzymaniu wyniku sprawdź krytycznie:</strong><br>
      Ile miejsc [UZUPEŁNIJ] jest w tekście? Co AI „zmyśliła" lub przesadziła? Czy ton pasuje do dokumentów UE? Czy możesz ten tekst podpisać i wysłać?</div>
      <div class="tip-box" style="margin-top:10px"><strong>Ważne:</strong> Wynik AI to zawsze punkt wyjścia, nigdy gotowy raport. Bierzesz pełną odpowiedzialność za to, co wyślesz do instytucji grantowej.</div>`,
  `<ul><li>Masz szkic opisu działania</li><li>Wskazałeś/aś min. 2 miejsca do weryfikacji</li><li>Wiesz, czego AI nie mogła wiedzieć o Twoim projekcie</li></ul>`
)}
    ${ex('ex6', '6', 'Analiza obszernego dokumentu', 'med', '20 min',
  'Przećwicz pracę z długim wnioskiem lub procedurą metodą ekstrakcji, wykrywając granice modelu językowego.',
  `<ol>
        <li>Wybierz długi dokument roboczy (np. statut, regulamin, przewodnik Erasmus+), min. 10 stron. Skopiuj jego sporą część (kilka stron).</li>
        <li>Wklej do klasycznego AI (w razie problemów z długością, wgraj jako PDF jeśli używasz płatnej wersji).</li>
        <li>Wpisz prompt weryfikacyjny:</li>
      </ol>
      <div class="prompt-box" style="position:relative">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <pre>Wciel się w audytora. Przeanalizuj załączony dokument.
Wypunktuj WYŁĄCZNIE sztywne warunki zaporowe
(tzw. red flags i twarde obowiązki z terminami).
Zignoruj cały ogólny żargon i "wodę".
Oddaj to w postaci tabeli roboczej dla Project Managera.</pre>
      </div>
      <div class="alert-box"><strong>Krytyczna weryfikacja:</strong> Skonfrontuj tabelę z dokumentem. Czy AI pominęła jakiś warunek brzegowy ukryty pod koniec tekstu? Jeśli tak - właśnie doświadczyłeś ograniczenia otwartych modeli przy dużej ilości tekstu. Do takich zadań sprawdzają się zamknięte piaskownice jak NotebookLM.</div>`,
  `<ul><li>Zrozumiałeś/aś ryzyko podawania długiego PDFa do otwartego <span translate="no" class="notranslate">LLM</span></li><li>Zauważyłeś/aś próbę kompresji z pominięciem detali</li><li>Znasz prompt audytowy do skanowania warunków zaporowych</li></ul>`
)}
    ${ex('ex7', '7', 'Mail w języku obcym', 'basic', '15 min',
  'Przećwicz użycie AI do korespondencji projektowej w języku obcym.',
  `<ol>
        <li>Napisz w języku polskim, co chcesz przekazać (luźne notatki, np. spotkanie planowane było na 15 maja, zmieniamy na 22 maja).</li>
        <li>Wpisz do AI:</li>
      </ol>
      <div class="prompt-box" style="position:relative">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <pre>Działaj jako doświadczony koordynator projektów międzynarodowych.
Na podstawie poniższych notatek napisz profesjonalny email do partnerów z Włoch.
Notatki: [WKLEJ NOTATKI]
Język: angielski (B2-C1)
Ton: profesjonalny, ale przyjazny; projektowy
Format: Temat maila + Treść (max 120 słów) + Podpis [TWOJE IMIE]</pre>
      </div>`,
  `<ul><li>Język jest poprawny gramatycznie i grzecznościowo</li><li>Uchwycono kluczowe zmiany z notatek</li><li>Wygenerowany mail nadaje się do wysłania po korekcie danych osobowych</li></ul>`
)}
    ${ex('ex8', '8', 'Dostosowanie materiału do ucznia SPE', 'med', '15 min',
  'Dostosuj materiał dydaktyczny do potrzeb ucznia ze SPE.',
  `<ol>
        <li>Przygotuj krótki tekst dydaktyczny ze swojego przedmiotu.</li>
        <li>Wklej jego treść do narzędzia AI i napisz:</li>
      </ol>
      <div class="prompt-box" style="position:relative">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <pre>Mam tekst dydaktyczny przeznaczony dla uczniów:
[WKLEJ TEKST]

Przepisz go w wersji dostosowanej do ucznia z dysleksją:
- krótsze zdania (max 15 słów)
- wyraźne akapity
- kluczowe pojęcia wyróżnione CAPS
- brak skomplikowanych zdań złożonych
- zachowanie zakresu merytorycznego</pre>
      </div>
      <div class="tip-box" style="margin-top:10px">Porównaj wersję oryginalną z wersją AI. Co się zmieniło?</div>`,
  `<ul><li>Zdania stały się krótsze i łatwiejsze w odbiorze</li><li>Treść merytoryczna została zachowana</li><li>Metoda nadaje się do szybkiego przygotowania kart dla uczniów SPE</li></ul>`
)}
    ${ex('ex9', '9', 'Podsumowanie spotkania z notatek', 'basic', '10 min',
  'Zamień surowe notatki w protokół i krótkie podsumowanie.',
  `<ol>
        <li>Wklej poniższe notatki ze spotkania rady pedagogicznej do AI i poproś o protokół:</li>
      </ol>
      <div class="prompt-box" style="position:relative">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <pre>Przeanalizuj notatki i przygotuj: 1. Formalny protokół 2. Listę działań z odpowiedzialnymi 3. Streszczenie dla nieobecnych (3 zdania)
[NOTATKI]: Środa 12 marca, 15:00. Obecni: dyrektor Wiśniewski, 18 n-cli. 
1. Wyniki klasyfikacji – ogólnie dobrze, 3 uczniów zagrożonych z matematyki (VII kl.) – zebrania z rodzicami do 20 marca.
2. Dzień Ziemi 22 kwietnia, Kowalska potrzebuje 3 wolontariuszy.
3. Erasmus+ – spotkanie w Palermo – 4 nauczycieli, Adamska sprawdza finanse.
4. Ogrzewanie w sali 12 (zgłosi Wiśniewski).</pre>
      </div>`,
  `<ul><li>Powstał uporządkowany protokół</li><li>Wyodrębniono konkretne zadania dla osób</li><li>Streszczenie jest zwięzłe i trafne</li></ul>`
)}
    ${ex('ex10', '10', 'Tworzenie treści promocyjnych projektu', 'basic', '15 min',
  'Przygotuj krótkie treści informacyjne i promocyjne o projekcie.',
  `<ol>
        <li>Pomyśl o szkolnym projekcie i wymyśl co chcesz o nim napisać (Facebook/Strona www).</li>
      </ol>
      <div class="prompt-box" style="position:relative">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <pre>Działaj jako specjalista ds. komunikacji projektu.
Mamy projekt edukacyjny [NAZWA PROJEKTU] w szkole. Zakończył się warsztatami w Bolonii.
Przygotuj:
1. Post na Facebook szkoły (max 80 słów, zachęcający, emotikony, hashtagi)
2. Krótki akapit na stronę www (100 słów, oficjalny, rzeczowy)
3. 3 propozycje tematu emaila do rodziców z informacją o wynikach</pre>
      </div>`,
  `<ul><li>Ton postu na Facebooka diametralnie różni się od opisu na stronę www</li><li>Tekst nie używa ciężkiego "projektowego" żargonu</li><li>Wymaga minimalnej redakcji przed publikacją</li></ul>`
)}
    ${ex('ex11', '11', '10 Zasad AI – Ranking Postaw', 'basic', '20 min',
  'Ustal wspólną listę zasad odpowiedzialnego używania AI.',
  `<p><strong>Praca:</strong> zespoły 2–3 osoby</p>
      <p><strong>Sytuacja wyjściowa:</strong> Wasz zespół chce korzystać z AI w sposób odpowiedzialny, ale zamiast długiej polityki potrzebuje krótkiej listy zasad, które naprawdę da się stosować w codziennej pracy szkoły, projektu albo biura.</p>
      <table class="data-table">
        <thead><tr><th>Rola</th><th>Zakres odpowiedzialności</th></tr></thead>
        <tbody>
          <tr><td>Osoba 1 – moderator</td><td>pilnuje celu zadania i prowadzi wybór najważniejszych zasad</td></tr>
          <tr><td>Osoba 2 – analityk przykładów</td><td>podaje sytuacje z praktyki i sprawdza, czy zasady są użyteczne</td></tr>
          <tr><td>Osoba 3 – redaktor</td><td>zapisuje ranking i krótkie uzasadnienia</td></tr>
        </tbody>
      </table>
      <ol>
        <li>Przeczytajcie dostępne zasady użycia AI i dopiszcie 2-3 własne propozycje, jeśli czegoś brakuje.</li>
        <li>Każda osoba wybiera indywidualnie 5 najważniejszych zasad.</li>
        <li>Połączcie listy i wspólnie ułóżcie <strong>TOP 10</strong> zasad dla Waszego kontekstu pracy.</li>
        <li>Do każdej zasady dopiszcie krótkie uzasadnienie: dlaczego jest ważna i przed czym chroni.</li>
        <li>Wybierzcie jedną zasadę, która była najtrudniejsza do uzgodnienia, i zapiszcie dlaczego.</li>
      </ol>
      <div class="tip-box" style="margin-top:10px"><strong>Efekt końcowy:</strong> lista 10 najważniejszych zasad wraz z krótkim uzasadnieniem i jedną zasadą oznaczoną jako „najtrudniejszą do uzgodnienia”.</div>
      <div class="tip-box" style="margin-top:10px"><strong>Przykładowe zasady do dyskusji:</strong> weryfikacja faktów, ochrona danych uczniów i pracowników, korzystanie z zatwierdzonych narzędzi, oznaczanie użycia AI, odpowiedzialność człowieka za wynik.</div>
      <div class="reflection-box">
        <div class="rb-label">Pytania do refleksji</div>
        <ul>
          <li>Które zasady są dla Was absolutnie obowiązkowe, a które zależą od sytuacji?</li>
          <li>W którym miejscu pojawiła się największa różnica opinii w zespole?</li>
          <li>Czy ten ranking da się zastosować od razu w praktyce, czy wymaga doprecyzowania?</li>
        </ul>
      </div>`,
  `<ul><li>Zespół przygotował wspólną listę 10 zasad</li><li>Przy każdej zasadzie pojawiło się krótkie uzasadnienie</li><li>Wskazaliście co najmniej jedną zasadę trudną do uzgodnienia</li><li>Ranking nadaje się do wykorzystania jako robocza karta zasad dla zespołu</li></ul>`
)}
    ${ex('ex12', '12', 'Checklista bezpieczeństwa', 'basic', '10 min',
  'Sprawdź, czy znasz podstawowe zasady bezpiecznego używania AI.',
  `<div class="alert-box"><strong>Zweryfikuj samego siebie przed wyjazdem ze szkolenia:</strong>
      <ol>
      <li>Wiem, co to jest LLM i dlaczego AI potrafi "kłamać"?</li>
      <li>Potrafię zbudować prompt ze zwrotami PARTS?</li>
      <li>Wiem, co grozi za wklejenie danych wrażliwych ucznia?</li>
      <li>Mam ściągnięty do notatnika chociaż jeden "mój" prompt na ułatwienie życia w tym tygodniu?</li>
      </ol></div>`,
  `<ul><li>Rozumienie ograniczeń modelu LLM</li><li>Gotowość do zaprzęgnięcia narzędzia bezpiecznie w pracy dydaktycznej</li></ul>`
)}
    ${ex('ex13', '13', 'Trening rezyliencji – AI jako trudny rodzic', 'med', '20 min',
  'Przećwicz trudną rozmowę z pomocą AI w formie roleplay.',
  `<p><strong>Praca:</strong> solo lub w parze</p>
      <p><strong>Sytuacja wyjściowa:</strong> chcesz przećwiczyć trudną rozmowę z rodzicem, zanim odbędzie się ona naprawdę. AI ma odegrać wymagającego rozmówcę, a jeśli pracujecie w parze, druga osoba ma obserwować przebieg i dać informację zwrotną.</p>
      <table class="data-table">
        <thead><tr><th>Rola</th><th>Zakres odpowiedzialności</th></tr></thead>
        <tbody>
          <tr><td>Osoba 1 – prowadzący rozmowę</td><td>rozmawia z AI i ćwiczy spokojne, rzeczowe odpowiedzi</td></tr>
          <tr><td>Osoba 2 – obserwator</td><td>notuje, co działa dobrze, a co wymaga poprawy</td></tr>
        </tbody>
      </table>
      <p><strong>Jeśli pracujesz solo:</strong> po zakończeniu rozmowy samodzielnie oceń przebieg według kryteriów poniżej.</p>
      <ol>
        <li>Zamiast prosić o gotowy tekst, poproś AI o wejście w scenkę sytuacyjną.</li>
        <li>Wpisz poniższy prompt i rozpocznij rozmowę.</li>
        <li>Odpowiedz na co najmniej 3 trudne komunikaty „rodzica”, zachowując spokojny i rzeczowy ton.</li>
        <li>Jeśli pracujecie w parze, obserwator zapisuje 2 mocne strony i 2 rzeczy do poprawy.</li>
        <li>Na końcu przygotuj krótką notatkę: które sformułowanie zadziałało najlepiej i co warto przećwiczyć jeszcze raz.</li>
      </ol>
      <div class="prompt-box" style="position:relative">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <pre>Działaj jako poirytowany rodzic ósmoklasisty, któremu właśnie wystawiłem słabą ocenę.
Jesteś wymagający, roszczeniowy, obwiniasz metody szkoły za oceny syna.
Ja zagram rolę nauczyciela. Będę symulował rozmowę przez okno czatu.
Pisz bardzo krótkie wiadomości, max 2-3 zdania.
Zawsze czekaj na moją odpowiedź. Nie pisz całego dialogu na raz.
Zaczynam: Dzień dobry, Panie Tomaszu, chciałem omówić ostatnie wyniki syna...</pre>
      </div>
      <div class="tip-box" style="margin-top:12px"><strong>Efekt końcowy:</strong> zapis 3-4 wymian zdań oraz krótka notatka z informacją, co zadziałało dobrze, a co wymaga dalszego ćwiczenia.</div>
      <div class="reflection-box">
        <div class="rb-label">Pytania do refleksji</div>
        <ul>
          <li>W którym momencie rozmowa zaczęła się uspokajać albo zaostrzać?</li>
          <li>Jakie sformułowanie najlepiej chroniło relację, a jednocześnie nie rozmywało odpowiedzialności?</li>
          <li>Co chcesz zmienić przy kolejnej próbie?</li>
        </ul>
      </div>`,
  `<ul><li>Udało się przeprowadzić rozmowę krok po kroku, bez generowania całego dialogu naraz</li><li>Masz zapis co najmniej 3 odpowiedzi na trudne komunikaty</li><li>Powstała krótka notatka z mocnymi stronami i obszarami do poprawy</li><li>Ćwiczenie pomogło przełożyć prompt na realną sytuację komunikacyjną</li></ul>`
)}
    ${ex('ex14', '14', 'Ujarzmienie chaosu z ankiet', 'med', '15 min',
  'Uporządkuj chaotyczne odpowiedzi z ankiety i zamień je w tabelę.',
  `<ol>
        <li>Skopiuj i wklej do AI poniższy zlepek "surowych" uwag uczniów wraz z podanym promptem:</li>
      </ol>
      <div class="prompt-box" style="position:relative">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <pre>Jesteś analitykiem szkolnym. Przeanalizuj poniższe notatki.
Pogrupuj odpowiedzi w powtarzające się Kategorie tematyczne (np. Relacje).
Wygeneruj czystą tabelę podsumowującą w układzie tabelarycznym: Kategoria | Główne wnioski | Cytat.
Dane wejściowe: 
"nudno na historii", "dlaczego znowu klasówka w piątek?!", "kasia mnie ignoruje", "za zimno w klasie nr 5", "pani kowalska za dużo krzyczy", "super była wczoraj gra", "nic nie rozumiem z fizyki", "chcę więcej przerw", "kiedy wycieczka?"</pre>
      </div>`,
  `<ul><li>AI poprawnie pogrupowała chaotyczne myśli</li><li>Wygenerowano format tabeli zamiast opowiadania</li><li>Zrozumiano użyteczność AI do pracy analitycznej</li></ul>`
)}
    ${ex('ex15', '15', 'Odwrócona inżynieria (Reverse Prompting)', 'med', '15 min',
  'Odtwórz dobry prompt na podstawie gotowego tekstu.',
  `<ol>
        <li>Znajdź w internecie bardzo dobry konspekt lekcji lub oficjalne ogłoszenie z urzędu.</li>
        <li>Wklej cały jego tekst do okna AI wraz z komendą inżynierii wstecznej:</li>
      </ol>
      <div class="prompt-box" style="position:relative">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <pre>Oto świetny tekst z mojego obszaru zawodowego: 
[WKLEJ TEKST]

Chcę tworzyć tak dobre materiały za pomocą AI w przyszłości. 
Zaprojektuj dla mnie doskonały prompt w układzie PARTS, którego użycie zmusiłoby Cię do napisania dokładnie tego, co powyżej.</pre>
      </div>`,
  `<ul><li>AI podała poprawną konstrukcję promptu naśladującego</li><li>Wychwycono "Ton" i "Personę" oryginału</li><li>Zdobyto wiedzę o promptach budowanych przez samą AI</li></ul>`
)}
    ${ex('ex16', '16', 'Prompt w trzech wersjach', 'basic', '20–25 min',
  'Przećwicz pracę zespołową nad jednym zadaniem i sprawdź, które elementy promptu realnie poprawiają wynik AI.',
  `<p><strong>Praca:</strong> zespoły 2–3 osoby</p>
      <p><strong>Sytuacja wyjściowa:</strong> Wasz zespół ma przygotować jeden konkretny materiał z pomocą AI, np. mail, streszczenie dokumentu, plan lekcji, opis działania projektowego albo analizę krótkich odpowiedzi z ankiety. Chcecie porównać, jak zmienia się wynik przy trzech poziomach doprecyzowania promptu.</p>
      <table class="data-table">
        <thead><tr><th>Rola</th><th>Zakres odpowiedzialności</th></tr></thead>
        <tbody>
          <tr><td>Osoba 1 – właściciel zadania</td><td>wybiera zadanie i określa, po czym poznać dobry wynik</td></tr>
          <tr><td>Osoba 2 – operator AI</td><td>wpisuje prompty i zapisuje odpowiedzi</td></tr>
          <tr><td>Osoba 3 – recenzent</td><td>ocenia użyteczność, kompletność i ryzyka</td></tr>
        </tbody>
      </table>
      <p><strong>Jeśli pracujecie w dwie osoby:</strong> jedna osoba łączy role operatora i recenzenta.</p>
      <ol>
        <li>Wybierzcie jedno zadanie i dopiszcie dwa kryteria sukcesu, np. „ma być gotowe do użycia jutro" albo „ma zawierać tabelę z terminami".</li>
        <li>Napiszcie <strong>wersję 1 – prostą</strong>: tylko sam cel zadania.</li>
        <li>Napiszcie <strong>wersję 2 – doprecyzowaną</strong>: dodajcie kontekst, odbiorcę i format odpowiedzi.</li>
        <li>Napiszcie <strong>wersję 3 – ekspercką</strong>: dodajcie rolę AI, ograniczenia, kryteria jakości i prośbę o zaznaczenie miejsc do weryfikacji.</li>
        <li>Uruchomcie wszystkie trzy prompty w tym samym narzędziu AI i porównajcie wyniki.</li>
        <li>Uzupełnijcie tabelę porównawczą: co się poprawiło, co nadal jest słabe i które elementy promptu miały największy wpływ.</li>
        <li>Na końcu przygotujcie jedną wspólną wersję finalną promptu, którą można zapisać i użyć ponownie.</li>
      </ol>
      <table class="data-table">
        <thead><tr><th>Wersja</th><th>Co dodaliście</th><th>Co działa lepiej</th><th>Co jeszcze poprawić</th></tr></thead>
        <tbody>
          <tr><td>1. Prosta</td><td>sam cel zadania</td><td></td><td></td></tr>
          <tr><td>2. Doprecyzowana</td><td>kontekst, odbiorca, format</td><td></td><td></td></tr>
          <tr><td>3. Ekspercka</td><td>rola, ograniczenia, kryteria jakości, weryfikacja</td><td></td><td></td></tr>
          <tr><td>4. Finalna</td><td>najlepsze elementy z trzech wersji</td><td></td><td></td></tr>
        </tbody>
      </table>
      <div class="tip-box" style="margin-top:12px"><strong>Efekt końcowy:</strong> tabela porównawcza 3 odpowiedzi AI oraz 1 finalny prompt zespołu gotowy do zapisania w Promptowniku lub notatkach.</div>
      <div class="reflection-box">
        <div class="rb-label">Pytania do refleksji</div>
        <ul>
          <li>Który element promptu najbardziej poprawił wynik: rola, kontekst, format czy kryteria jakości?</li>
          <li>Czy najlepsza odpowiedź AI była od razu gotowa do użycia, czy nadal wymagała korekty człowieka?</li>
          <li>Jak możecie wykorzystać ten sposób pracy przy kolejnym zadaniu w szkole, projekcie albo organizacji?</li>
        </ul>
      </div>
      <div class="tip-box" style="margin-top:12px"><strong>Opcjonalne rozszerzenie:</strong> przetestujcie ten sam finalny prompt w drugim narzędziu AI i sprawdźcie, czy wynik jest podobny.</div>`,
  `<ul><li>Zespół przetestował trzy wersje tego samego promptu</li><li>Potraficie wskazać, które elementy najbardziej poprawiły odpowiedź</li><li>Macie jedną finalną wersję promptu do ponownego użycia</li><li>Wskazaliście przynajmniej jedno miejsce, które nadal wymaga weryfikacji człowieka</li></ul>`
)}
    ${ex('ex17', '17', 'Mini-laboratorium analizy ankiety', 'med', '25–30 min',
  'Zaprojektuj bezpieczny sposób analizy krótkich odpowiedzi z ankiety i przygotuj z pomocą AI szkic mini-raportu.',
  `<p><strong>Praca:</strong> zespoły 2–3 osoby</p>
      <p><strong>Sytuacja wyjściowa:</strong> macie krótkie, zanonimizowane odpowiedzi z ankiety po szkoleniu, spotkaniu, wydarzeniu szkolnym lub działaniu projektowym. Chcecie szybko wyciągnąć główne kategorie, wnioski i rekomendacje, ale bez utraty kontroli nad danymi.</p>
      <table class="data-table">
        <thead><tr><th>Rola</th><th>Zakres odpowiedzialności</th></tr></thead>
        <tbody>
          <tr><td>Osoba 1 – moderator</td><td>ustala pytanie analityczne i pilnuje celu pracy</td></tr>
          <tr><td>Osoba 2 – operator AI</td><td>przygotowuje prompty i uruchamia analizę</td></tr>
          <tr><td>Osoba 3 – recenzent danych</td><td>sprawdza anonimizację, ryzyka i wiarygodność wniosków</td></tr>
        </tbody>
      </table>
      <div class="alert-box"><strong>Najpierw bezpieczeństwo:</strong> nie wklejajcie imion, nazwisk, maili, numerów telefonów, nazw klas, nazw firm ani innych danych pozwalających rozpoznać konkretną osobę.</div>
      <p><strong>Jeśli nie macie własnych danych, użyjcie próbki:</strong></p>
      <div class="prompt-box"><pre>"Za mało czasu na ćwiczenia praktyczne."
"Dobre tempo, ale przydałyby się prostsze instrukcje."
"Najbardziej pomogły mi gotowe przykłady promptów."
"Chciałabym więcej przykładów z pracy administracyjnej."
"Za dużo teorii na początku modułu."
"Ćwiczenia były przydatne, ale zabrakło podsumowania."
"Chcę krótkiej checklisty do pracy po szkoleniu."
"Przydałoby się więcej przykładów analizy dokumentów."</pre></div>
      <ol>
        <li>Ustalcie jedno pytanie analityczne, np. „co poprawić w szkoleniu?" albo „jakie potrzeby najczęściej zgłasza zespół?".</li>
        <li>Wypiszcie, jakich danych nie wolno wkleić do publicznego narzędzia AI i jak je zastąpić.</li>
        <li>Przygotujcie trzy prompty: do grupowania odpowiedzi, wyciągania wniosków i szkicu raportu.</li>
        <li>Uruchomcie prompty i sprawdźcie, czy AI nie łączy zbyt odmiennych wypowiedzi w jedną kategorię.</li>
        <li>Przygotujcie mini-raport: 3 główne kategorie, 3 wnioski i 2 rekomendacje dla zespołu.</li>
        <li>Na końcu dopiszcie krótką notatkę: czego nie można stwierdzić na podstawie tych danych i co trzeba sprawdzić ręcznie.</li>
      </ol>
      <div class="prompt-box" style="position:relative">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <pre>Mam zanonimizowane odpowiedzi z ankiety.
Pogrupuj je w 3-5 kategorii tematycznych.
Dla każdej kategorii podaj:
1. krótki opis problemu lub potrzeby,
2. przykładowy cytat,
3. ostrożny wniosek,
4. czego nie można stwierdzić z tych danych.
Na końcu przygotuj szkic mini-raportu:
Kategorie | Główne wnioski | Rekomendacje.
Dane: [WKLEJ ZANONIMIZOWANE ODPOWIEDZI]</pre>
      </div>
      <div class="tip-box" style="margin-top:12px"><strong>Efekt końcowy:</strong> plan analizy, 3 prompty, mini-raport oraz krótka lista danych, których nie wolno wklejać do AI.</div>
      <div class="reflection-box">
        <div class="rb-label">Pytania do refleksji</div>
        <ul>
          <li>W którym momencie AI pomogła najbardziej: przy porządkowaniu danych czy przy pisaniu wniosków?</li>
          <li>Jakie ryzyko pojawia się, gdy zespół bezkrytycznie kopiuje gotowy raport AI?</li>
          <li>Co trzeba było poprawić ręcznie, żeby raport był wiarygodny i użyteczny?</li>
        </ul>
      </div>
      <div class="tip-box" style="margin-top:12px"><strong>Opcjonalne rozszerzenie:</strong> przygotujcie drugą wersję raportu dla innego odbiorcy, np. dyrekcji, zespołu projektowego albo partnera zewnętrznego.</div>`,
  `<ul><li>Zespół zaprojektował prosty i bezpieczny proces analizy danych</li><li>Powstały trzy prompty do pracy z ankietą</li><li>Macie mini-raport z kategoriami, wnioskami i rekomendacjami</li><li>Wskazaliście, których danych nie wolno wkleić do publicznego narzędzia AI</li></ul>`
)}
    ${ex('ex18', '18', 'Mini-kodeks odpowiedzialnego używania AI', 'med', '20–25 min',
  'Stwórz praktyczny zestaw zasad dla wybranego zespołu, tak żeby AI wspierała pracę bez osłabiania odpowiedzialności, prywatności i jakości treści.',
  `<p><strong>Praca:</strong> zespoły 2–3 osoby</p>
      <p><strong>Sytuacja wyjściowa:</strong> zespół nauczycieli, dział administracyjny, koordynatorzy projektu albo pracownicy organizacji chcą korzystać z AI, ale potrzebują krótkiego dokumentu z jasnymi zasadami: kiedy wolno użyć AI, czego nie wolno wkleić, co trzeba oznaczyć i co musi sprawdzić człowiek.</p>
      <table class="data-table">
        <thead><tr><th>Rola</th><th>Zakres odpowiedzialności</th></tr></thead>
        <tbody>
          <tr><td>Osoba 1 – właściciel kontekstu</td><td>wybiera środowisko pracy i najczęstsze sytuacje użycia AI</td></tr>
          <tr><td>Osoba 2 – analityk ryzyk</td><td>wskazuje ryzyka: dane osobowe, błędy, stronniczość, prawa autorskie, nadmierne poleganie</td></tr>
          <tr><td>Osoba 3 – redaktor zasad</td><td>zamienia ustalenia zespołu w prosty mini-kodeks</td></tr>
        </tbody>
      </table>
      <ol>
        <li>Wybierzcie kontekst: szkoła, zespół projektowy, administracja, biblioteka, biuro albo inna organizacja.</li>
        <li>Wypiszcie 5-7 sytuacji, w których ktoś może chcieć użyć AI, np. mail do rodziców, analiza ankiety, opis działania projektowego, streszczenie dokumentu, przygotowanie materiałów promocyjnych.</li>
        <li>Dla każdej sytuacji wpiszcie decyzję: <strong>wolno</strong>, <strong>wolno warunkowo</strong> albo <strong>nie używamy</strong>.</li>
        <li>Dopiszcie główne ryzyko i jedno zabezpieczenie, np. anonimizacja, obowiązkowa weryfikacja, oznaczenie użycia AI albo zatwierdzenie przez człowieka.</li>
        <li>Przygotujcie mini-kodeks na 1 stronę: 5-7 zasad głównych oraz tabelę sytuacji i decyzji.</li>
        <li>Na końcu przetestujcie kodeks na jednym trudniejszym przypadku i poprawcie jedną zasadę, jeśli okaże się zbyt ogólna.</li>
      </ol>
      <table class="data-table">
        <thead><tr><th>Sytuacja użycia</th><th>Decyzja</th><th>Główne ryzyko</th><th>Zabezpieczenie</th></tr></thead>
        <tbody>
          <tr><td>Mail / komunikat</td><td></td><td></td><td></td></tr>
          <tr><td>Analiza ankiety</td><td></td><td></td><td></td></tr>
          <tr><td>Dokument lub raport</td><td></td><td></td><td></td></tr>
          <tr><td>Materiały promocyjne</td><td></td><td></td><td></td></tr>
          <tr><td>Inne zastosowanie</td><td></td><td></td><td></td></tr>
        </tbody>
      </table>
      <div class="prompt-box" style="position:relative">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <pre>Pracujemy nad mini-kodeksem odpowiedzialnego używania AI dla:
[SZKOŁY / ZESPOŁU / PROJEKTU / ORGANIZACJI]
Nasze przykładowe sytuacje użycia AI:
[WKLEJ 5-7 SYTUACJI]
Pomóż uporządkować je w tabeli:
Sytuacja | Wolno / Wolno warunkowo / Nie używamy | Ryzyko | Zabezpieczenie.
Nie twórz gotowej polityki za zespół.
Zaproponuj roboczą strukturę i pytania, które zespół powinien sam rozstrzygnąć.</pre>
      </div>
      <div class="alert-box"><strong>Ważne:</strong> AI może pomóc uporządkować materiał, ale nie powinna sama decydować o zasadach. Ostateczny kodeks musi zatwierdzić człowiek odpowiedzialny za zespół, dokumenty i dane.</div>
      <div class="tip-box" style="margin-top:12px"><strong>Efekt końcowy:</strong> mini-kodeks na 1 stronę z tabelą sytuacji użycia AI i zasadami bezpieczeństwa.</div>
      <div class="reflection-box">
        <div class="rb-label">Pytania do refleksji</div>
        <ul>
          <li>Która zasada była najtrudniejsza do uzgodnienia i dlaczego?</li>
          <li>W których sytuacjach zespół dopuścił użycie AI warunkowo, a nie bez ograniczeń?</li>
          <li>Czy kodeks jest wystarczająco prosty, żeby nowa osoba w zespole mogła z niego skorzystać od razu?</li>
        </ul>
      </div>
      <div class="tip-box" style="margin-top:12px"><strong>Opcjonalne rozszerzenie:</strong> dodajcie krótki wzór oznaczenia „ten materiał był redagowany z pomocą AI” albo procedurę zgłaszania wyjątków.</div>`,
  `<ul><li>Zespół przygotował kodeks możliwy do użycia w praktyce</li><li>W tabeli pojawiło się co najmniej 5 sytuacji użycia AI</li><li>Przy każdej sytuacji określono ryzyko i zabezpieczenie</li><li>Kodeks jasno rozróżnia: wolno, wolno warunkowo i nie używamy</li></ul>`
)}
  </div>
`;

function ex(anchor, num, title, level, time, goal, body, results) {
  const levelLabel = { basic: 'Podstawowy', med: 'Średniozaawansowany' }[level];
  const levelBadge = { basic: 'ebadge-basic', med: 'ebadge-med' }[level];
  return `
    <div class="exercise-card" id="${anchor}" data-level="${level}">
      <div class="exercise-hdr">
        <span class="ex-num">Ćwiczenie #${num}</span>
        <div class="ex-title">${title}</div>
      </div>
      <div class="exercise-badge-row">
        <span class="ebadge ebadge-core">★ Kurs</span>
        <span class="ebadge ${levelBadge}">Poziom: ${levelLabel}</span>
        <span class="ebadge ebadge-time">⏱ ${time}</span>
      </div>
      <div class="exercise-body">
        <p style="color:var(--clr-text-muted);margin-bottom:14px"><strong>Cel:</strong> ${goal}</p>
        ${body}
        <div class="sep"></div>
        <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--clr-primary);margin-bottom:8px">✓ Kryteria sukcesu</div>
        ${results}
      </div>
    </div>`;
}

function filterEx(filter, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.exercise-card').forEach(card => {
    card.style.display = (filter === 'all' || card.dataset.level === filter) ? '' : 'none';
  });
}

/* ══════════════════════════════════════
   PAGE: PROMPTS
══════════════════════════════════════ */
PAGES.prompts = () => `
  <div class="page-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> <span class="bc-sep">›</span> Promptownik</div>
    <h2>💡 Promptownik – gotowe prompty do użycia</h2>
    <p>Znajdziesz tu <strong>14 kart i 28 wariantów promptów</strong>. Skopiuj, wklej do AI i dostosuj do swojej sytuacji. Każda karta pokazuje też, <strong>kiedy używać</strong> promptu i <strong>na co uważać</strong>. Kliknij ⭐ Zapisz, żeby dodać prompt do swojej listy w panelu notatek.</p>
    <button id="doneBtn_prompts" class="mark-done-btn" onclick="markDone('prompts')">✓ Oznacz jako ukończony</button>
  </div>

  <div class="prompt-library">
    <div class="cat-tabs">
      <button class="cat-btn active" onclick="filterPrompts('all',this)">Wszystkie</button>
      <button class="cat-btn" onclick="filterPrompts('A',this)">📚 Dydaktyka</button>
      <button class="cat-btn" onclick="filterPrompts('B',this)">🗂️ Dokumenty</button>
      <button class="cat-btn" onclick="filterPrompts('C',this)">📧 Komunikacja</button>
      <button class="cat-btn" onclick="filterPrompts('D',this)">🌍 Projekty UE</button>
      <button class="cat-btn" onclick="filterPrompts('E',this)">💼 Zarządzanie i PM</button>
      <button class="cat-btn" onclick="filterPrompts('H',this)">🔍 Weryfikacja AI</button>
    </div>

    ${pc('pA1', 'A', 'A1 – Konspekt lekcji',
  'Kiedy planujesz nową lekcję lub szukasz pomysłów na aktywności.',
  '⚠️ Sprawdź, czy aktywności są realistyczne dla Twojej klasy; zweryfikuj poprawność merytoryczną; dostosuj harmonogram (timing).',
  `Przygotuj konspekt lekcji (45 min) na temat: [TEMAT]
Klasa: [klasa i wiek]. Przedmiot: [przedmiot]
Format: tabela Czas | Aktywność | Materiały`,
  `Działaj jako doświadczony nauczyciel [PRZEDMIOT] w [TYP SZKOŁY].
Przygotuj konspekt lekcji (45 min) na temat [TEMAT SZCZEGÓŁOWY]
dla uczniów [KLASA, WIEK], [OPIS GRUPY].
Wymagania: angażujące intro (max 5 min), aktywność grupowa,
co najmniej jedno narzędzie sprawdzające wiedzę na wyjście.
Format: tabela | Czas | Aktywność | Opis | Materiały | Uwagi`)}

    ${pc('pA2', 'A', 'A2 – Różnicowanie i adaptacja materiału',
    'Kiedy masz uczniów o różnych potrzebach i chcesz dostosować ten sam materiał.',
    '⚠️ Sprawdź, czy uproszczona wersja zachowuje zakres merytoryczny; czy zmiany są adekwatne do potrzeb ucznia.',
    `Mam tekst dla klasy [X]:
[WKLEJ TEKST]
Napisz wersję uproszczoną dla uczniów z trudnościami
i wersję rozszerzoną dla uczniów zdolnych.`,
    `Mam poniższy tekst edukacyjny dla uczniów klasy [KLASA]:
[WKLEJ TEKST]
Przygotuj trzy wersje:
A) Dla uczniów z trudnościami / dysleksją:
   – zdania max 12 słów, akapity max 3 zdania
   – każde kluczowe pojęcie wyjaśnione od razu
B) Oryginalna (bez zmian)
C) Dla uczniów zdolnych:
   – 3 pytania do refleksji, zadanie badawcze „dla chętnych"`)}

    ${pc('pA3', 'A', 'A3 – Pytania sprawdzające (Bloom)',
      'Gdy chcesz stworzyć test, quiz lub exit ticket z różnymi poziomami trudności.',
      '⚠️ Sprawdź merytorycznie każde pytanie; pytania na wyższych poziomach Blooma wymagają weryfikacji odpowiedzi.',
      `Przygotuj 10 pytań sprawdzających do tematu [TEMAT],
klasa [KLASA]. Podziel: 5 pytań podstawowych
(zapamiętanie/rozumienie) + 5 zaawansowanych (analiza/ocena). Klucz.`,
      `Przygotuj zestaw pytań sprawdzających do tematu: [TEMAT]
dla uczniów klasy [KLASA].
POZIOM 1 – Zapamiętanie i rozumienie (5 pytań):
Pytania zamknięte lub krótka odpowiedź. Dołącz klucz.
POZIOM 2 – Zastosowanie i analiza (4 pytania):
Wyjaśnienie mechanizmu, porównanie, zastosowanie w nowej sytuacji.
POZIOM 3 – Ocena i tworzenie (2 pytania):
Pytania otwarte z własnym stanowiskiem. Kryteria zamiast klucza.
Format: tabela | Poziom Blooma | Pytanie | Oczekiwana odpowiedź`)}

    ${pc('pB1', 'B', 'B1 – Streszczenie dokumentu i lista zadań',
        'Gdy otrzymujesz długi dokument i chcesz szybko wyciągnąć z niego to, co ważne.',
        '⚠️ Usuń dane osobowe przed wklejeniem; sprawdź, czy AI nie pominęła ważnych terminów.',
        `Streść poniższy dokument w 5 zdaniach i podaj listę zadań:
[DOKUMENT - bez danych osobowych]`,
        `Poniżej wklejam dokument szkolny (dane osobowe usunięte):
[WKLEJ TEKST]
Przygotuj:
1. Streszczenie: 3–5 zdań – o czym jest i co z tego wynika
2. Lista moich zadań: co ja muszę zrobić (checklista z terminami)
3. Pytania do wyjaśnienia: co jest niejasne lub wymaga doprecyzowania
Format: trzy osobne sekcje z nagłówkami`)}

    ${pc('pB2', 'B', 'B2 – Protokół ze spotkania',
          'Gdy masz luźne notatki ze spotkania i chcesz je zamienić w formalny protokół.',
          '⚠️ Nie wklejaj imion i nazwisk uczestników bez anonimizacji; sprawdź zgodność decyzji z rzeczywistością.',
          `Zamień poniższe notatki w formalny protokół spotkania:
[NOTATKI]
Uwzględnij: listę uczestników (anonimową), porządek,
decyzje, działania z odpowiedzialnością i terminem.`,
          `Działaj jako sekretarz rady pedagogicznej.
Przekształć poniższe notatki w formalny protokół spotkania:
[WKLEJ NOTATKI - bez danych osobowych]
Protokół powinien zawierać:
1. Nagłówek: rodzaj spotkania, data, czas, liczba uczestników
2. Porządek obrad
3. Omówienie każdego punktu (zwięźle, 2–4 zdania)
4. Podjęte decyzje i uchwały
5. Tabela zadań: Zadanie | Kto odpowiada | Termin
6. Podpis (do uzupełnienia)
Styl: formalny, rzeczowy, czas przeszły`)}

    ${pc('pC1', 'C', 'C1 – Mail do rodziców',
            'Gdy piszesz komunikat do rodziców i chcesz go przygotować profesjonalnie w ciągu minut.',
            '⚠️ NIE wpisuj nazwisk konkretnych uczniów (RODO); finalna wersja wymaga Twojego przejrzenia.',
            `Napisz mail do rodziców klasy [KLASA]
z info o [TEMAT]. Ton: przyjazny. Max 120 słów.`,
            `Działaj jako koordynator lub wychowawca klasy [KLASA] w systemie oświaty [TWÓJ KRAJ].
Napisz email do rodziców klasy na temat: [TEMAT / WYDARZENIE]
Kluczowe informacje:
– [PUNKT 1]
– [PUNKT 2]
– [PUNKT 3 – np. prośba, termin, kwota]
Ton: [ciepły i angażujący / rzeczowy / empatyczny]
Długość: max [N] słów
Format: Temat maila + Treść + Zaproszenie do kontaktu`)}

    ${pc('pC2', 'C', 'C2 – Ogłoszenie szkolne / post szkolny',
              'Gdy potrzebujesz szybko napisać ogłoszenie dla uczniów, rodziców lub post na stronę szkoły.',
              '⚠️ Sprawdź daty, miejsce, odbiorcę i ton komunikatu; nie publikuj danych osobowych ani informacji, które nie powinny trafić do szerokiego obiegu.',
              `Napisz ogłoszenie szkolne o [TEMAT].
Dla: [uczniowie / rodzice / społeczność szkolna]. Max 60 słów.`,
              `Działaj jako specjalista ds. komunikacji szkoły.
Napisz ogłoszenie dla [ODBIORCY] dotyczące: [OPIS WYDARZENIE]
Kluczowe informacje: [DATA / MIEJSCE / KONTAKT / ACTION]
Wariant A: ogłoszenie na tablicę (max 60 słów, zwięzłe)
Wariant B: post na Facebook / stronę szkoły (max 100 słów, #hashtagi)
Unikaj: biurokratycznego języka, długich zdań`)}

    ${pc('pD1', 'D', 'D1 – Opis działania projektowego do raportu UE',
                'Gdy piszesz raport narracyjny Erasmus+, WIN4SMEs lub innego projektu UE.',
                '⚠️ Zaznaczaj [UZUPEŁNIJ]; nigdy nie traktuj wyniku jako gotowego; sprawdź zgodność z wymaganiami instytucji grantowej.',
                `Napisz 180-słowowy opis działania projektowego:
Projekt: [TYTUŁ], działanie: [OPIS].
Styl: narracyjny, profesjonalny, wartość dodana.`,
                `Działaj jako koordynator projektów edukacyjnych UE (Erasmus+).
Projekt: [TYTUŁ PROJEKTU]
Działanie: [OPIS, np. "3-dniowe warsztaty mobilności dla nauczycieli, Bolonia, październik"]
Liczba uczestników: [N] z [KRAJE]
Tematyka: [TEMAT]
Wyniki / osiągnięcia: [CO OSIĄGNIĘTO]

Napisz opis działania (180–220 słów) do raportu narracyjnego:
– neutralny, rzeczowy styl (typowy dla dokumentów UE)
– podkreśl: cel, przebieg, uczestnictwo, wartość dodaną, efekty
– ZAZNACZ [UZUPEŁNIJ DANE] wszędzie gdzie potrzebne konkretne liczby
Format: jeden akapit narracyjny. Język: [POLSKI / ANGIELSKI]`)}

    ${pc('pD2', 'D', 'D2 – Mail do zagranicznego partnera projektu',
                  'Gdy piszesz korespondencję z partnerami zagranicznymi projektu.',
                  '⚠️ Weryfikuj angielski pod kątem stylu projektowego; nie wklejaj poufnych danych projektu.',
                  `Napisz email po angielsku do partnera projektowego
z informacją o [TEMAT]. Max 120 słów. Profesjonalny ton.`,
                  `Działaj jako koordynator projektu UE piszący do zagranicznego partnera.
Projekt: [NAZWA], partner z [KRAJ]
Temat maila: [OPIS – np. "zmiana terminu spotkania partnerskiego"]
Kluczowe informacje:
– [PUNKT 1: np. pierwotny termin]
– [PUNKT 2: np. nowa propozycja]
– [PUNKT 3: np. prośba o potwierdzenie]
Ton: profesjonalny, ale przyjazny (wieloletni współpracownik)
Język: angielski C1, czytelny dla nienatywnych użytkowników
Format: Subject: + Greeting + Body (max 110 słów) + Closing + Signature`)}

    ${pc('pD3', 'D', 'D3 – Treści promocyjne o projekcie',
                    'Gdy chcesz opowiedzieć o projekcie szkołom, rodzicom lub mediom.',
                    '⚠️ Sprawdź fakty, liczby, daty i zgodność z zasadami komunikacji projektu; nie dopisuj rezultatów, których nie ma w dokumentacji.',
                    `Przygotuj krótkie treści o projekcie [NAZWA] dotyczącego [TEMAT]:
1. Post na FB/IG szkoły (80 słów, hashtagi)
2. Akapit na stronę szkoły (100 słów)`,
                    `Działaj jako specjalista ds. komunikacji projektu edukacyjnego.
Projekt: [NAZWA], realizowany w [SZKOŁA/INSTYTUCJA], kraj: [TWÓJ KRAJ].
Dotyczy: [TEMAT, np. "rozwijania kompetencji cyfrowych nauczycieli w 4 krajach UE"].
Ostatnie działanie: [OPIS, np. "warsztaty mobilności w Bolonii dla 12 nauczycieli"].

Przygotuj:
1. Post na Facebook/Instagram szkoły (max 80 słów, #hashtagi, angażujący)
2. Akapit na stronę szkoły (max 100 słów, oficjalny, rzeczowy)
3. Trzy propozycje tematu maila do rodziców o wynikach projektu`)}

    ${pc('pE1', 'E', 'E1 – Pre-mortem projektu (ocena ryzyk)',
                      'Gdy planujesz nowe przedsięwzięcie i chcesz zabezpieczyć się przed porażką.',
                      '⚠️ Wymaga nałożenia własnej znajomości zespołu i kontekstu placówki.',
                      `Przyjrzyj się procedurze / planowi projektu: [WKLEJ].
Zrób "pre-mortem". Załóżmy, że projekt całkowicie się zawalił.
Napisz 3 główne scenariusze dlaczego tak się stało i zaproponuj środki zaradcze.`,
                      `Działaj jako Analityk Ryzyka i Senior Project Manager.
Oto plan mojego nowego przedsięwzięcia: [WKLEJ PLAN/ZŁOŻENIA]

Wykonaj analizę typu "Pre-mortem". Pokaż scenariusze porażki. Załóżmy, że jesteśmy pół roku w przyszłości i to przedsięwzięcie nie przyniosło oczekiwanych rezultatów.
1. Zidentyfikuj 3 najbardziej prawdopodobne punkty krytyczne (bottlenecks/ryzyka) na których projekt się wywrócił.
2. Spróbuj wskazać błędy w komunikacji ludzkiej i niedoszacowania zasobów.
3. Przedstaw do każdego punktu konkretną tabelę ze środkami zapobiegawczymi (Co zrobić już dziś, by tego uniknąć).`)}

    ${pc('pE2', 'E', 'E2 – Zestawianie sprzeczności',
                        'Gdy dokumenty robocze lub ustalenia nie spinają się ze sobą.',
                        '⚠️ Sprawdź czy piaskownica/AI na pewno odczytała najnowszą wersję.',
                        `Zestaw raport A [WKLEJ] z wytycznymi B [WKLEJ].
Oznacz czerwoną flagą miejsca, w których oba teksty są ze sobą sprzeczne.`,
                        `Wciel się w rygorystycznego weryfikatora dokumentacji (Audytor QA).
Załączam dwa teksty dotyczące tej samej sprawy (np. regulamin i mail od wicedyrektora lub wytyczne KE i zarys raportu):
Tekst A (Procedura domyślna): [WKLEJ TEKST A]
Tekst B (Stan faktyczny): [WKLEJ TEKST B]

Twoje zadanie: Pomiń powielenia i skup się WYŁĄCZNIE na tym, gdzie Tekst B zaprzecza Tekstowi A, albo łamie podane wytyczne.
Generuj listę "Red Flags" (Czerwone flagi) - punkt, na czym polega sprzeczność i kto musi podjąć decyzję arbitrażową.`)}

    ${pc('pE3', 'E', 'E3 – Porządkowanie przeciążenia informacyjnego',
                          'Gdy masz długi wątek z wieloma odpowiedziami i nie wiesz na czym stoisz.',
                          '⚠️ Usuń ze skopiowanego wątku loginy, imiona uczniów i inne dane osobowe przed wklejeniem.',
                          `Wklejam długi wątek mailowy lub komunikacyjny: [WKLEJ].
Uporządkuj go i pokaż, kto co ma zrobić oraz do kiedy.`,
                          `Działaj jako mój asystent do dekompozycji szumu informacyjnego.
Mam tylko kilka minut przed spotkaniem. Poniżej wklejam długi, sklejony wątek z maili i komunikatora:
[WKLEJ CAŁOŚĆ WĄTKU (bez danych osobowych)]

Twoje zadanie to wyłuskać wyłącznie "sygnał" i ukryć "szum":
1. W jednym zdaniu - o czym jest ten wątek lub dyskusja.
2. Tabela: [Kto musi to zrobić] | [Konkretne zadanie przypisane u] | [Deadline]
3. Oznacz pilne sprawy lub pytania, które pozostają bez odpowiedzi od dwóch dni.`)}

    ${pc('pH1', 'H', 'H1 – Weryfikacja i krytyczna analiza odpowiedzi AI',
                            'Użyj <em>zawsze</em> po otrzymaniu ważnej odpowiedzi AI – szczególnie w kwestiach faktycznych, prawnych lub projektowych.',
                            '⚠️ Ten prompt pomaga wychwycić ryzyka, ale nie zastępuje sprawdzenia aktualności danych i weryfikacji w oficjalnych źródłach.',
                            `Oceń krytycznie swoją poprzednią odpowiedź.
Wskaż: fakty do weryfikacji, potencjalne halucynacje,
założenia, które mogą być błędne.`,
                            `Przeczytaj swoją poprzednią odpowiedź (lub tekst poniżej):
[WKLEJ TEKST]

Teraz wciel się w krytycznego recenzenta i odpowiedz:
1. Które stwierdzenia są oparte na weryfikowalnych danych?
2. Które stwierdzenia mogą być „generatywnym wypełnieniem" bez pewności faktycznej?
3. Jakie informacje mogą być nieaktualne (knowledge cutoff)?
4. Jakie założenia przyjąłeś/aś, które mogą być błędne w kontekście systemu oświaty w moim kraju?
5. Co powinienem/powinnam sprawdzić w oficjalnych źródłach przed użyciem?
Podaj konkretne wskazania – nie ogólniki.`)}
  </div>
`;

const defaultPromptCards = new Set(['pA1', 'pB1', 'pD1']);

function pc(anchor, cat, title, when, warn, basic, advanced) {
  const catLabel = { A: 'Dydaktyka', B: 'Dokumenty i org.', C: 'Komunikacja', D: 'Projekty UE', E: 'Zarządzanie i PM', H: 'Weryfikacja AI' }[cat];
  return `
  <div class="prompt-card ${defaultPromptCards.has(anchor) ? 'open' : ''}" id="${anchor}" data-cat="${cat}">
    <div class="prompt-card-hdr" onclick="togglePromptCard(this)">
      <div>
        <div class="prompt-cat-label">${catLabel}</div>
        <h4>${title}</h4>
      </div>
      <span style="font-size:20px;color:var(--clr-text-muted);transition:transform .2s" class="pc-arrow">▾</span>
    </div>
    <div class="prompt-card-body">
      ${when ? `<p class="prompt-when">📌 <strong>Kiedy używać:</strong> ${when}</p>` : ''}
      ${warn ? `<div class="prompt-warning">⚠️ <span>${warn}</span></div>` : ''}
      <div class="prompt-version-label pvl-basic">WERSJA PROSTA</div>
      <div class="prompt-box" style="position:relative">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <button class="prompt-save-btn" onclick="savePromptFromBox(this)">⭐ Zapisz</button>
        <pre>${basic}</pre>
      </div>
      ${advanced ? `<div class="prompt-version-label pvl-advanced">WERSJA ROZWINIĘTA (PARTS)</div>
      <div class="prompt-box" style="position:relative;border-left:3px solid var(--clr-primary)">
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
        <button class="prompt-save-btn" onclick="savePromptFromBox(this)">⭐ Zapisz</button>
        <pre>${advanced}</pre>
      </div>` : ''}
    </div>
  </div>`;
}

function togglePromptCard(el) {
  const card = el.closest('.prompt-card');
  card.classList.toggle('open');
  const arrow = el.querySelector('.pc-arrow');
  if (arrow) arrow.style.transform = card.classList.contains('open') ? 'rotate(180deg)' : '';
}

function filterPrompts(cat, btn) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.prompt-card').forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
  });
}

/* ══════════════════════════════════════
   PAGE: CHECKLISTS
══════════════════════════════════════ */
PAGES.checklists = () => `
  <div class="page-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> <span class="bc-sep">›</span> Checklisty</div>
    <h2>✅ Checklisty</h2>
    <p>Twoje zaznaczenia są automatycznie zapisywane w tej przeglądarce. Możesz tu wracać w dowolnej chwili.</p>
    <button id="doneBtn_checklists" class="mark-done-btn" onclick="markDone('checklists')">✓ Oznacz jako ukończony</button>
  </div>
  <div class="checklist-page">

    <div class="checklist-block" id="chk-prompt">
      <h3>🎯 Checklista dobrego promptu</h3>
      <p class="clb-desc">Sprawdź <strong>przed wysłaniem promptu</strong> do AI:</p>
      ${chk('cp1', 'P – Persona: czy powiedziałem/am AI, jaką rolę ma przyjąć? (np. „Działaj jako nauczyciel matematyki...")')}
      ${chk('cp2', 'A – Aim: czy jasno określiłem/am, co ma powstać? (np. „Przygotuj konspekt lekcji 45 min...")')}
      ${chk('cp3', 'R – Recipients: czy wyjaśniłem/am, dla kogo jest wynik? (np. „...dla uczniów klasy 7, zróżnicowanej poziomowo")')}
      ${chk('cp4', 'T – Tone: czy określiłem/am styl i ton? (np. „...w prostym, angażującym języku...")')}
      ${chk('cp5', 'S – Structure: czy podałem/am format wyjścia? (np. „...w formie tabeli: Czas | Aktywność")')}
      ${chk('cp6', 'Ograniczenia: czy podałem/am, czego NIE chcę? (np. „Max 150 słów", „bez żargonu akademickiego")')}
      ${chk('cp7', 'Weryfikacja: czy pamiętam, że wynik AI to szkic, a nie gotowy dokument?')}
      <button class="checklist-reset" onclick="resetChecks('cp')">↺ Zacznij od nowa</button>
    </div>

    <div class="checklist-block" id="chk-verify">
      <h3>🔍 Checklista weryfikacji odpowiedzi AI</h3>
      <p class="clb-desc">Sprawdź <strong>po otrzymaniu odpowiedzi</strong>, przed użyciem:</p>
      ${chk('cv1', 'Fakty: czy wszystkie fakty, daty, liczby, cytaty, przepisy mogę zweryfikować w oficjalnych źródłach?')}
      ${chk('cv2', 'Ton i styl: czy ton jest adekwatny do sytuacji – szkolnej, administracyjnej, projektowej?')}
      ${chk('cv3', 'RODO: czy w tekście nie pojawiają się dane osobowe uczniów lub pracowników?')}
      ${chk('cv4', 'Adekwatność: czy wynik pasuje do mojego kontekstu (moja klasa, moja szkoła, mój projekt)?')}
      ${chk('cv5', 'Odpowiedzialność: czy za każde zdanie w tym tekście mogę wziąć odpowiedzialność i go podpisać?')}
      <div class="tip-box" style="margin-top:14px">
        <strong>Wynik oceny:</strong><br>
        • 5/5: używaj bez zmian;<br>
        • 3–4/5: wprowadź poprawki przed użyciem;<br>
        • mniej niż 3: stwórz nowy, lepszy prompt.
      </div>
      <button class="checklist-reset" onclick="resetChecks('cv')">↺ Zacznij od nowa</button>
    </div>

    <div class="checklist-block" id="chk-rodo">
      <h3>🔒 Checklista bezpieczeństwa – RODO i AI</h3>
      <p class="clb-desc">Sprawdź <strong>przed wklejeniem czegokolwiek</strong> do narzędzia AI:</p>
      ${chk('cr1', 'Czy tekst zawiera imiona i nazwiska uczniów? Jeśli TAK → anonimizuj lub nie wklejaj')}
      ${chk('cr2', 'Czy tekst zawiera oceny, frekwencję lub wyniki konkretnych uczniów? Jeśli TAK → usuń lub zastąp statystyką')}
      ${chk('cr3', 'Czy tekst zawiera dane wrażliwe (zdrowie, sytuacja rodzinna, SPE, opinia poradni)? Jeśli TAK → NIE WKLEJAJ')}
      ${chk('cr4', 'Czy dokument jest oznaczony jako poufny lub do użytku wewnętrznego? Jeśli TAK → sprawdź politykę szkoły')}
      ${chk('cr5', 'Czy narzędzie AI jest zatwierdzone przez szkołę?')}
      ${chk('cr5b', 'Czy wiem, gdzie są przechowywane moje dane?')}
      ${chk('cr6', 'Czy pamiętam o zasadzie: korzystam z zewnętrznego serwera, który może znajdować się poza UE?')}
      <div class="alert-box" style="margin-top:14px">
        <strong>Prosta zasada:</strong> Jeśli dokumentu nie możesz opublikować na stronie szkoły – nie wklejaj go do publicznej AI.
      </div>
      <button class="checklist-reset" onclick="resetChecks('cr')">↺ Zacznij od nowa</button>
    </div>

    <div class="checklist-block" id="chk-selftest">
      <h3>🧠 Mini-test wiedzy po kursie</h3>
      <p class="clb-desc">Odpowiedz szczerze – to tylko dla Ciebie. Każda odpowiedź „NIE" to wskazówka, co powtórzyć.</p>
      ${chk('cs1', 'Wiem, co to jest <span translate="no" class="notranslate">LLM</span> i dlaczego AI może generować halucynacje')}
      ${chk('cs2', 'Potrafię napisać prompt z co najmniej 3 elementami frameworku PARTS')}
      ${chk('cs3', 'Wiem, jakich danych NIE wolno wklejać do publicznej AI (RODO)')}
      ${chk('cs4', 'Mam co najmniej 1 konkretne zadanie, do którego użyję AI w tym tygodniu')}
      ${chk('cs5', 'Wiem, jak sprawdzić, czy odpowiedź AI jest merytorycznie poprawna')}
      ${chk('cs6', 'Znam co najmniej 3 zastosowania AI w pracy dydaktycznej')}
      ${chk('cs7', 'Znam co najmniej 2 zastosowania AI w pracy administracyjnej i komunikacji')}
      ${chk('cs8', 'Wiem, jak AI może pomóc mi w projektach UE i czego nie wolno AI zlecać')}
      ${chk('cs9', 'Mam zapisany co najmniej 1 prompt, który zabieram z tego kursu do codziennej pracy')}
      ${chk('cs10', 'Wiem, do kogo w szkole zwrócić się z pytaniem o politykę AI i RODO')}
      <div class="tip-box" style="margin-top:14px">
        <strong>Gdzie zaznaczasz NIE:</strong> wróć do odpowiedniego modułu lub ćwiczenia.<br>
        <strong>Gdzie zaznaczasz same TAK:</strong> jesteś gotowy/a do wdrożenia AI! 🎉
      </div>
      <button class="checklist-reset" onclick="resetChecks('cs')">↺ Zacznij od nowa</button>
    </div>
  </div>
`;

/* ══════════════════════════════════════
   PAGE: MY PLAN
══════════════════════════════════════ */
PAGES.myplan = () => `
  <div class="page-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> <span class="bc-sep">›</span> Mój plan</div>
    <h2>🎯 Mój plan wdrożenia AI</h2>
    <p>7 konkretnych zadań na pierwszy tydzień. Zaznaczaj ukończone – Twój postęp jest zapisywany automatycznie.</p>
    <button id="doneBtn_myplan" class="mark-done-btn" onclick="markDone('myplan')">✓ Oznacz jako ukończony</button>
  </div>
  <div class="checklist-page">
    <div class="checklist-block">
      <h3>📋 7 zadań na pierwszy tydzień z AI</h3>
      <p class="clb-desc">Wykonaj każde zadanie w ciągu 7 dni po ukończeniu kursu. Każde zajmuje 10–30 minut.</p>
      ${chk('mp1', '✍️ Napisz swój pierwszy prompt PARTS dla realnego zadania zawodowego i oceń wynik')}
      ${chk('mp2', '📝 Wygeneruj konspekt jednej najbliższej lekcji z pomocą AI – sprawdź go krytycznie')}
      ${chk('mp3', '📧 Napisz jeden mail do rodziców lub ogłoszenie z pomocą AI – porównaj czas z metodą tradycyjną')}
      ${chk('mp4', '📄 Weź jeden dokument szkolny i poproś AI o streszczenie z listą zadań')}
      ${chk('mp5', '💡 Zapisz w panelu notatek (📓) min. 3 prompty, które chcesz używać regularnie')}
      ${chk('mp6', '🔍 Przetestuj wykrywanie halucynacji – wpisz zapytanie o nieistniejący przepis i sprawdź wynik')}
      ${chk('mp7', '👥 Pokaż jednej osobie z zespołu czym jest PARTS – przeprowadź 10-minutowe mini-demo')}
      <div class="sep"></div>
      <div class="tip-box">
        <strong>Po tygodniu zadaj sobie pytania:</strong> Ile czasu udało się zaoszczędzić? Które zastosowania były najbardziej przydatne? Co chcę wprowadzić do stałej pracy?
      </div>
    </div>

    <div class="checklist-block">
      <h3>📌 Mój osobisty kontrakt z AI</h3>
      <p class="clb-desc">Wypełnij zdania poniżej w myślach lub na kartce. To Twój plan wdrożenia.</p>
      <div style="display:flex;flex-direction:column;gap:16px;margin-top:8px">
        ${planItem('1', 'Jedno zadanie, w którym zacznę używać AI <strong>już jutro</strong>:', 'np. pisanie maili do rodziców, tworzenie ogłoszeń szkolnych...')}
        ${planItem('2', 'Jeden prompt, który <strong>zabieram ze sobą</strong> z tego kursu:', 'np. prompt do konspektu lekcji, prompt do streszczenia dokumentu...')}
        ${planItem('3', 'Jedno ryzyko, o którym <strong>zawsze będę pamiętać</strong>:', 'np. weryfikacja faktów, brak danych osobowych w AI, transparentność w projektach...')}
        ${planItem('4', 'Jedna osoba w szkole, z którą <strong>podzielę się wiedzą</strong> o AI:', 'np. kolega/koleżanka z zespołu, dyrekcja, bibliotekarz...')}
      </div>
    </div>

    <div style="max-width:780px;margin:0 auto;background:linear-gradient(135deg,#eff6ff,#f0f9ff);border:1px solid #bfdbfe;border-radius:var(--radius-lg);padding:28px 32px">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--clr-primary);margin-bottom:12px">ETAPY WDROŻENIA W SZKOLE</div>
      <table class="data-table" style="background:transparent">
        <thead><tr><th>Etap</th><th>Czas</th><th>Co robisz</th></tr></thead>
        <tbody>
          <tr><td>Indywidualny start</td><td>Tydzień 1–2</td><td>Realizujesz 7 zadań powyżej; testujesz prompty w pracy</td></tr>
          <tr><td>Pierwsze podsumowanie</td><td>Miesiąc 1</td><td>Nota z 3 wnioskami: co działa, co nie, czego brakuje</td></tr>
          <tr><td>Rozszerzenie</td><td>Miesiące 2–3</td><td>Podziel się z zespołem; zaproś do korzystania z promptownika</td></tr>
          <tr><td>Ewaluacja</td><td>Miesiąc 4–6</td><td>Jakie zadania oszczędzają czas? Jakie narzędzia zostawiasz?</td></tr>
        </tbody>
      </table>
      <div class="tip-box" style="margin-top:16px">
        <strong>Chcesz mieć politykę AI w szkole?</strong> Poproś AI o szkic na podstawie promptu:<br>
        „Przygotuj szkic szkolnej polityki używania AI dla nauczycieli, uczniów i administracji. Oprzyj ją na wytycznych RODO oraz zasadach UNESCO AI Competency Framework for Teachers.”
      </div>
    </div>
  </div>
`;

function planItem(num, q, hint) {
  return `<div style="background:var(--clr-bg2);border-radius:var(--radius-md);padding:16px 20px">
    <div style="font-size:11px;font-weight:700;color:var(--clr-primary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">Punkt ${num}</div>
    <div style="font-size:14px;font-weight:600;margin-bottom:6px">${q}</div>
    <div style="font-size:12.5px;color:var(--clr-text-muted);font-style:italic">${hint}</div>
  </div>`;
}

/* ══════════════════════════════════════
   PAGE: SLIDES (Real deck viewer)
══════════════════════════════════════ */

let currentSet = 'm1';
let currentSlideIdx = 0;

PAGES.slides = () => `
  <div class="page-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> <span class="bc-sep">›</span> Prezentacje</div>
    <h2>📊 Prezentacje – slajdy kursu</h2>
    <p>Zestaw interaktywnych slajdów do każdego modułu. Możesz używać ich jako krótkiego wprowadzenia do szkolenia, materiału dla prowadzącego albo szybkiej powtórki treści. Do nawigacji możesz używać strzałek na klawiaturze.</p>
  </div>
  <div class="slide-viewer-wrap">
    <div class="slide-set-nav">
      ${Object.keys(SLIDE_SETS).map(k => `<button class="slide-set-btn ${k === currentSet ? 'active' : ''}" onclick="switchSlideSet('${k}')">${SLIDE_SETS[k].title}</button>`).join('')}
    </div>
    <div class="slide-deck" id="slideDeck">
      <div class="slide-toolbar">
        <span class="slide-title-bar" id="slideSetTitle">${SLIDE_SETS[currentSet].title}</span>
        <span class="slide-counter" id="slideCounter">1 / ${SLIDE_SETS[currentSet].slides.length}</span>
        <div class="slide-nav-btns">
          <button class="slide-nav-btn" onclick="toggleFullScreen()" title="Pełny ekran">⛶</button>
          <button class="slide-nav-btn" id="slidePrev" onclick="prevSlide()" title="Poprzedni">◀</button>
          <button class="slide-nav-btn" id="slideNext" onclick="nextSlide()" title="Następny">▶</button>
        </div>
      </div>
      <div class="slide-area" id="slideArea">
        ${renderAllSlides(currentSet)}
      </div>
      <div class="slide-progress-dots" id="slideDots">
        ${SLIDE_SETS[currentSet].slides.map((_, i) => `<div class="sdot ${i === 0 ? 'active' : ''}" onclick="goSlide(${i})"></div>`).join('')}
      </div>
    </div>
    <div class="slide-keyboard-hint">← → Klawiatura do nawigacji &nbsp;|&nbsp; Kliknij kropkę aby przejść do slajdu</div>
  </div>
`;

function renderAllSlides(setKey) {
  return SLIDE_SETS[setKey].slides.map((s, i) => `
    <div class="slide ${s.type} ${i === currentSlideIdx ? 'active' : ''}" data-idx="${i}">
      <div class="slide-logos-overlay" aria-hidden="true">
         <img class="slide-logo slide-logo-desktop" src="assets/orzel-bez-tla.png" alt="ZSZ5">
         <img class="slide-logo slide-logo-desktop" src="assets/cove-polska-logo.png" alt="COVE">
         <img class="slide-logo slide-logo-core" src="assets/Logo-2025.png" alt="WIN4SMEs">
         <img class="slide-logo slide-logo-core" src="assets/EN_Co-fundedbytheEU_RGB_POS.png" alt="EU">
      </div>
      <div class="slide-tag">${s.tag}</div>
      <h2 style="white-space:pre-line">${s.title}</h2>
      ${s.body}
    </div>`).join('');
}

function initSlides() {
  updateSlideUI();
}
function switchSlideSet(key, startIdx = 0) {
  if (!SLIDE_SETS[key]) key = 'm1';
  currentSet = key;
  currentSlideIdx = Math.max(0, Math.min(startIdx, SLIDE_SETS[key].slides.length - 1));
  document.querySelectorAll('.slide-set-btn').forEach((b, i) => {
    b.classList.toggle('active', Object.keys(SLIDE_SETS)[i] === key);
  });
  const area = document.getElementById('slideArea');
  if (area) { area.innerHTML = renderAllSlides(key); }
  const dotsEl = document.getElementById('slideDots');
  if (dotsEl) dotsEl.innerHTML = SLIDE_SETS[key].slides.map((_, i) => `<div class="sdot ${i === currentSlideIdx ? 'active' : ''}" onclick="goSlide(${i})"></div>`).join('');
  const title = document.getElementById('slideSetTitle');
  if (title) title.textContent = SLIDE_SETS[key].title;
  updateSlideUI();
}
function goSlide(idx) {
  const slides = document.querySelectorAll('#slideArea .slide');
  if (!slides.length) return;
  slides[currentSlideIdx].classList.remove('active');
  currentSlideIdx = Math.max(0, Math.min(idx, slides.length - 1));
  slides[currentSlideIdx].classList.add('active');
  updateSlideUI();
}
function prevSlide() { goSlide(currentSlideIdx - 1); }
function nextSlide() { goSlide(currentSlideIdx + 1); }
function toggleFullScreen() {
  const elem = document.getElementById('slideDeck');
  if (!document.fullscreenElement) {
    if (elem.requestFullscreen) { elem.requestFullscreen(); }
    else if (elem.webkitRequestFullscreen) { elem.webkitRequestFullscreen(); }
  } else {
    if (document.exitFullscreen) { document.exitFullscreen(); }
    else if (document.webkitExitFullscreen) { document.webkitExitFullscreen(); }
  }
}
function updateSlideUI() {
  const total = SLIDE_SETS[currentSet].slides.length;
  const counter = document.getElementById('slideCounter');
  if (counter) counter.textContent = `${currentSlideIdx + 1} / ${total}`;
  const prev = document.getElementById('slidePrev');
  const next = document.getElementById('slideNext');
  if (prev) prev.disabled = currentSlideIdx === 0;
  if (next) next.disabled = currentSlideIdx === total - 1;
  document.querySelectorAll('.sdot').forEach((d, i) => d.classList.toggle('active', i === currentSlideIdx));
}

/* ══════════════════════════════════════
   PAGE: INFOGRAPHICS
══════════════════════════════════════ */
const INFOGRAPHICS = [
  {
    id: 'inf-parts',
    title: 'PARTS – anatomia dobrego promptu',
    moduleLabel: 'Moduł 2 – Prompting',
    desc: 'Tekstowa ściąga pokazująca 5 elementów dobrego promptu: rolę, cel, odbiorcę, ton i strukturę odpowiedzi.',
    points: ['krótkie pytania kontrolne do każdego elementu', 'przykład promptu złożonego z 5 części', 'responsywna forma HTML/CSS, która dobrze działa także z tłumaczeniem w przeglądarce'],
    modulePage: 'module2',
    moduleAnchor: 'parts'
  },
  {
    id: 'inf-rodo',
    title: 'RODO + AI – co wklejać, czego nie wklejać',
    moduleLabel: 'Moduł 4 – Projekty i analityka',
    desc: 'Karta decyzji do pracy z dokumentami, ankietami i notatkami. Rozdziela treści zakazane, wymagające anonimizacji i zwykle bezpieczne.',
    points: ['trzy poziomy ryzyka z przykładami', 'przykłady danych osobowych i danych wrażliwych', 'krótka checklista przed wklejeniem treści do AI'],
    modulePage: 'module4',
    moduleAnchor: 'rodo'
  },
  {
    id: 'inf-proporcja',
    title: 'Zasada proporcji – kiedy AI daje realną wartość',
    moduleLabel: 'Moduł 6 – Zrównoważone AI',
    desc: 'Skrócona karta decyzji, która pomaga odróżnić pracę o wysokiej wartości od zbędnych iteracji.',
    points: ['dwa typy użycia: o wyraźnej i niskiej wartości', 'krótki test 4 pytań przed uruchomieniem AI', 'prosta zasada: używaj AI tam, gdzie daje realny zysk'],
    modulePage: 'module6',
    moduleAnchor: 'proporcja'
  }
];

function renderInfographicBranding() {
  return `
    <div class="infographic-branding">
      <div class="infographic-brand-logos" aria-label="Partnerzy projektu">
        <div class="infographic-brand-logo"><img src="assets/orzel-bez-tla.png" alt="ZSZ nr 5 Wrocław"></div>
        <div class="infographic-brand-logo"><img src="assets/cove-polska-logo.png" alt="COVE Polska"></div>
        <div class="infographic-brand-logo"><img src="assets/Logo-2025.png" alt="WIN4SMEs – Workplace Innovation for SMEs"></div>
        <div class="infographic-brand-logo"><img src="assets/EN_Co-fundedbytheEU_RGB_POS.png" alt="Co-funded by the European Union"></div>
      </div>
      <p class="infographic-brand-caption">Kurs opracowany w ramach projektu WIN4SMEs – Workplace Innovation for SMEs · zadanie WP4 – training module for the teachers · COVE Polska · ZSZ nr 5 we Wrocławiu</p>
    </div>
  `;
}

function renderInfographicParts() {
  return `
    <section class="infographic-sheet parts-sheet" id="inf-parts">
      ${renderInfographicBranding()}
      <div class="infographic-sheet-head">
        <div class="infographic-sheet-module">Moduł 2 – Prompting</div>
        <h3><span translate="no" class="notranslate">PARTS</span> – anatomia dobrego promptu</h3>
        <p>Dobry prompt działa jak dobra instrukcja dla współpracownika: mówi kto, co, dla kogo, jakim tonem i w jakim formacie ma powstać wynik.</p>
      </div>

      <div class="infographic-parts-grid">
        <article class="infographic-parts-card parts-p">
          <div class="infographic-parts-card-head">
            <div class="infographic-parts-letter" translate="no">P</div>
            <div>
              <h4>Persona</h4>
              <p>Jaką rolę ma przyjąć AI?</p>
            </div>
          </div>
          <div class="infographic-parts-card-body">
            <div class="infographic-note-box">
              <strong>Pytanie kontrolne</strong>
              <p>Kim ma być AI w tym zadaniu?</p>
            </div>
            <div class="infographic-example-box">
              <span>Przykład</span>
              <strong>„Działaj jako nauczyciel historii”</strong>
            </div>
            <div>
              <div class="infographic-list-label">Możliwe role</div>
              <ul>
                <li>nauczyciel lub edukator</li>
                <li>koordynator projektu</li>
                <li>analityk lub redaktor</li>
              </ul>
            </div>
          </div>
        </article>

        <article class="infographic-parts-card parts-a">
          <div class="infographic-parts-card-head">
            <div class="infographic-parts-letter" translate="no">A</div>
            <div>
              <h4>Aim</h4>
              <p>Co ma powstać?</p>
            </div>
          </div>
          <div class="infographic-parts-card-body">
            <div class="infographic-note-box">
              <strong>Pytanie kontrolne</strong>
              <p>Jaki jest cel odpowiedzi?</p>
            </div>
            <div class="infographic-example-box">
              <span>Przykład</span>
              <strong>„Przygotuj konspekt lekcji na 45 minut”</strong>
            </div>
            <div>
              <div class="infographic-list-label">Możliwe cele</div>
              <ul>
                <li>mail lub ogłoszenie</li>
                <li>analiza dokumentu lub ankiety</li>
                <li>plan, lista lub raport</li>
              </ul>
            </div>
          </div>
        </article>

        <article class="infographic-parts-card parts-r">
          <div class="infographic-parts-card-head">
            <div class="infographic-parts-letter" translate="no">R</div>
            <div>
              <h4>Recipients</h4>
              <p>Dla kogo jest wynik?</p>
            </div>
          </div>
          <div class="infographic-parts-card-body">
            <div class="infographic-note-box">
              <strong>Pytanie kontrolne</strong>
              <p>Kto będzie czytał lub używał wyniku?</p>
            </div>
            <div class="infographic-example-box">
              <span>Przykład</span>
              <strong>„Dla rodziców klasy 6”</strong>
            </div>
            <div>
              <div class="infographic-list-label">Przykładowi odbiorcy</div>
              <ul>
                <li>uczniowie konkretnej klasy</li>
                <li>rodzice lub zespół</li>
                <li>partnerzy projektu lub dyrekcja</li>
              </ul>
            </div>
          </div>
        </article>

        <article class="infographic-parts-card parts-t">
          <div class="infographic-parts-card-head">
            <div class="infographic-parts-letter" translate="no">T</div>
            <div>
              <h4>Tone</h4>
              <p>Jak ma brzmieć odpowiedź?</p>
            </div>
          </div>
          <div class="infographic-parts-card-body">
            <div class="infographic-note-box">
              <strong>Pytanie kontrolne</strong>
              <p>Jaki styl i ton będą najlepsze?</p>
            </div>
            <div class="infographic-example-box">
              <span>Przykład</span>
              <strong>„Ton: prosty, rzeczowy, przyjazny”</strong>
            </div>
            <div>
              <div class="infographic-list-label">Najczęstsze wybory</div>
              <ul>
                <li>formalny lub profesjonalny</li>
                <li>prosty i angażujący</li>
                <li>spokojny i neutralny</li>
              </ul>
            </div>
          </div>
        </article>

        <article class="infographic-parts-card parts-s">
          <div class="infographic-parts-card-head">
            <div class="infographic-parts-letter" translate="no">S</div>
            <div>
              <h4>Structure</h4>
              <p>W jakim formacie ma przyjść wynik?</p>
            </div>
          </div>
          <div class="infographic-parts-card-body">
            <div class="infographic-note-box">
              <strong>Pytanie kontrolne</strong>
              <p>Jak ma wyglądać wynik?</p>
            </div>
            <div class="infographic-example-box">
              <span>Przykład</span>
              <strong>„Tabela: czas | aktywność | materiały”</strong>
            </div>
            <div>
              <div class="infographic-list-label">Typowe formaty</div>
              <ul>
                <li>lista kroków</li>
                <li>mail do 120 słów</li>
                <li>tabela lub akapit</li>
              </ul>
            </div>
          </div>
        </article>
      </div>

      <div class="infographic-summary-band">
        <strong>Dobry prompt = Persona + Aim + Recipients + Tone + Structure</strong>
        <p>Nie zawsze potrzebujesz wszystkich 5 elementów, ale każdy z nich zmniejsza ryzyko ogólnej i mało użytecznej odpowiedzi.</p>
      </div>

      <div class="infographic-actions">
        <a class="bib-link" href="#" onclick="showPage('module2','parts');return false;">Przejdź do modułu →</a>
      </div>
    </section>
  `;
}

function renderInfographicRodo() {
  return `
    <section class="infographic-sheet rodo-sheet" id="inf-rodo">
      ${renderInfographicBranding()}
      <div class="infographic-sheet-head">
        <div class="infographic-sheet-module">Moduł 4 – Projekty i analityka</div>
        <h3>RODO + AI – co wklejać, czego nie wklejać</h3>
        <p>Zanim wkleisz dokument, ankietę albo notatki do AI, oceń poziom ryzyka: treści zakazane, wymagające anonimizacji albo zwykle bezpieczne.</p>
      </div>

      <div class="infographic-risk-grid">
        <article class="infographic-risk-card risk-high">
          <div class="infographic-risk-card-head">
            <h4>Nie wklejaj</h4>
            <p>bez zgody, podstawy prawnej i lokalnej polityki</p>
          </div>
          <div class="infographic-risk-card-body">
            <div class="infographic-list-label">Przykłady wysokiego ryzyka</div>
            <ul>
              <li>imiona i nazwiska uczniów lub pracowników</li>
              <li>oceny, frekwencja, numery telefonów, adresy</li>
              <li>dane zdrowotne, SPE, opinie poradni</li>
              <li>poufne raporty, budżety, oceny partnerów</li>
              <li>treści pozwalające rozpoznać konkretną osobę</li>
            </ul>
            <p class="infographic-risk-note">Jeśli nie możesz tego bezpiecznie pokazać poza organizacją, nie wklejaj tego bezpośrednio do publicznej AI.</p>
          </div>
        </article>

        <article class="infographic-risk-card risk-medium">
          <div class="infographic-risk-card-head">
            <h4>Tylko po anonimizacji</h4>
            <p>usuń identyfikatory i zamień je na role lub kody</p>
          </div>
          <div class="infographic-risk-card-body">
            <div class="infographic-list-label">Przykłady średniego ryzyka</div>
            <ul>
              <li>odpowiedzi z ankiety po usunięciu danych osobowych</li>
              <li>notatki ze spotkania bez nazwisk i maili</li>
              <li>dokument z rolami zamiast imion</li>
              <li>zbiorcze statystyki bez możliwości identyfikacji</li>
            </ul>
            <p class="infographic-risk-note">Zamień imiona na role lub kody. Usuń maile, numery, dokładne klasy i nazwy instytucji. Sprawdź też, czy połączenie kilku szczegółów nie odtwarza tożsamości.</p>
          </div>
        </article>

        <article class="infographic-risk-card risk-low">
          <div class="infographic-risk-card-head">
            <h4>Zwykle bezpieczne</h4>
            <p>o ile nie dopisujesz danych poufnych w samym prompcie</p>
          </div>
          <div class="infographic-risk-card-body">
            <div class="infographic-list-label">Przykłady niskiego ryzyka</div>
            <ul>
              <li>pomysł na lekcję lub konspekt</li>
              <li>ogólny szkic maila lub ogłoszenia</li>
              <li>fikcyjny przykład do ćwiczenia</li>
              <li>publicznie dostępne informacje i dokumenty</li>
            </ul>
            <p class="infographic-risk-note">Bezpieczne nie znaczy automatycznie gotowe do wysłania. Nadal sprawdzaj fakty, ton i zgodność z celem.</p>
          </div>
        </article>
      </div>

      <div class="infographic-checklist-grid">
        <div class="infographic-checklist-card"><strong>1. Czy są tu dane osobowe?</strong><p>Jeśli tak, nie wklejaj ich bez anonimizacji i jasnej podstawy działania.</p></div>
        <div class="infographic-checklist-card"><strong>2. Czy można kogoś rozpoznać?</strong><p>Pomyśl o połączeniu kilku szczegółów, nie tylko o samym nazwisku.</p></div>
        <div class="infographic-checklist-card"><strong>3. Czy wystarczy anonimizacja?</strong><p>Zamień osoby, klasy, instytucje i identyfikatory na role lub kody.</p></div>
        <div class="infographic-checklist-card"><strong>4. Czy narzędzie jest zgodne z zasadami organizacji?</strong><p>Sprawdź, czy szkoła, projekt lub firma dopuszcza takie użycie AI.</p></div>
      </div>

      <div class="infographic-actions">
        <a class="bib-link" href="#" onclick="showPage('module4','rodo');return false;">Przejdź do modułu →</a>
      </div>
    </section>
  `;
}

function renderInfographicProportion() {
  return `
    <section class="infographic-sheet proporcja-sheet" id="inf-proporcja">
      ${renderInfographicBranding()}
      <div class="infographic-sheet-head">
        <div class="infographic-sheet-module">Moduł 6 – Zrównoważone AI</div>
        <h3>Zasada proporcji – kiedy AI daje realną wartość</h3>
        <p>Nie chodzi o to, by używać AI wszędzie. Chodzi o to, by sięgać po nią tam, gdzie zysk czasu, jakości lub dostępności jest większy niż koszt kolejnych iteracji.</p>
      </div>

      <div class="infographic-value-grid">
        <article class="infographic-value-card value-high">
          <div class="infographic-value-card-head">
            <h4>Użycie o wyraźnej wartości</h4>
            <p>AI pomaga osiągnąć konkretny efekt szybciej lub lepiej.</p>
          </div>
          <ul>
            <li>tworzysz bardziej dostępną wersję materiału dla ucznia</li>
            <li>porządkujesz długi protokół albo dokument z wieloma zadaniami</li>
            <li>skracasz czas pisania raportu lub maila roboczego</li>
            <li>przygotowujesz pierwszą wersję, którą i tak sprawdza człowiek</li>
          </ul>
        </article>

        <article class="infographic-value-card value-low">
          <div class="infographic-value-card-head">
            <h4>Użycie o niskiej wartości</h4>
            <p>AI generuje kolejne wersje bez wyraźnego zysku.</p>
          </div>
          <ul>
            <li>tworzysz wiele prawie identycznych wariantów bez celu</li>
            <li>prosisz AI o coś, co szybciej poprawisz ręcznie</li>
            <li>iterujesz dalej, chociaż materiał jest już wystarczająco dobry</li>
            <li>zlecasz AI zadanie bez sprawdzenia, czy wynik będzie potrzebny</li>
          </ul>
        </article>
      </div>

      <div class="infographic-questions-title">Zanim uruchomisz AI, zadaj sobie 4 pytania</div>
      <div class="infographic-checklist-grid">
        <div class="infographic-checklist-card"><strong>1. Czy oszczędzam czas?</strong><p>Czy ręczna wersja zajęłaby wyraźnie dłużej?</p></div>
        <div class="infographic-checklist-card"><strong>2. Czy podnoszę jakość?</strong><p>Czy AI pomaga uprościć, uporządkować albo dopasować materiał?</p></div>
        <div class="infographic-checklist-card"><strong>3. Czy unikam zbędnych iteracji?</strong><p>Czy mam jasny cel, a nie kolejne wersje dla samego testowania?</p></div>
        <div class="infographic-checklist-card"><strong>4. Czy wynik przejdzie przez człowieka?</strong><p>Czy ktoś sprawdzi fakty, ton, dane i decyzje przed użyciem?</p></div>
      </div>

      <div class="infographic-summary-band">
        <strong>Używaj AI tam, gdzie daje realny zysk jakości, czasu lub dostępności.</strong>
        <p>Jeżeli narzędzie produkuje tylko kolejne wersje bez wyraźnej potrzeby, zatrzymaj się i wróć do prostszego rozwiązania.</p>
      </div>

      <div class="infographic-actions">
        <a class="bib-link" href="#" onclick="showPage('module6','proporcja');return false;">Przejdź do modułu →</a>
      </div>
    </section>
  `;
}

PAGES.infographics = () => `
  <div class="page-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> <span class="bc-sep">›</span> Infografiki</div>
    <h2>🖼️ Infografiki</h2>
    <p>Trzy krótkie materiały wizualne do wykorzystania podczas szkolenia, samodzielnej nauki albo pracy z zespołem. Infografiki są zbudowane z HTML i CSS, więc pozostają czytelne na różnych ekranach i tłumaczą się poprawnie w przeglądarce.</p>
  </div>
  <div class="infographic-page">
    <div class="infographic-overview-grid">
      ${INFOGRAPHICS.map(info => `
        <a class="infographic-overview-card" href="#" onclick="showPage('infographics','${info.id}');return false;">
          <div class="infographic-module">${info.moduleLabel}</div>
          <h3>${info.title}</h3>
          <p>${info.desc}</p>
        </a>
      `).join('')}
    </div>
    ${renderInfographicParts()}
    ${renderInfographicRodo()}
    ${renderInfographicProportion()}
  </div>
`;

/* ══════════════════════════════════════
   PAGE: BIBLIOGRAPHY
══════════════════════════════════════ */
const BIB_SOURCES = [
  { id: 'bib-unesco-framework', title: 'UNESCO AI Competency Framework for Teachers', year: '2024', org: 'UNESCO', note: 'Definiuje kompetencje AI dla nauczycieli i porządkuje rozwój zawodowy wokół użycia AI w edukacji.', prio: '1', url: 'https://www.unesco.org/en/articles/ai-competency-framework-teachers' },
  { id: 'bib-talis-2024', title: 'Results from TALIS 2024', year: '2024', org: 'OECD', note: 'Oficjalny raport TALIS z danymi o pracy nauczycieli, lukach kompetencyjnych i potrzebie rozwoju zawodowego.', prio: '1', url: 'https://www.oecd.org/en/publications/results-from-talis-2024_90df6235-en.html' },
  { id: 'bib-gallup-ai-time', title: 'Three in 10 Teachers Are Saving Weeks of Time With AI', year: '2025', org: 'Gallup', note: 'Źródło danych o oszczędności czasu przy regularnym używaniu AI w pracy nauczycieli.', prio: '1', url: 'https://news.gallup.com/poll/691967/three-teachers-weekly-saving-six-weeks-year.aspx' },
  { id: 'bib-ec-ethical-guidelines', title: 'Ethical guidelines on the use of artificial intelligence and data in teaching and learning for educators', year: '2024', org: 'Komisja Europejska', note: 'Wytyczne dotyczące etycznego i odpowiedzialnego użycia AI oraz danych w edukacji.', prio: '1', url: 'https://education.ec.europa.eu/news/ethical-guidelines-on-the-use-of-artificial-intelligence-and-data-in-teaching-and-learning-for-educators' },
  { id: 'bib-digcompedu', title: 'DigCompEdu', year: '2017', org: 'Joint Research Centre, Komisja Europejska', note: 'Europejskie ramy kompetencji cyfrowych edukatorów. Ważny punkt odniesienia dla wdrożeń AI w edukacji.', prio: '1', url: 'https://joint-research-centre.ec.europa.eu/digcompedu_en' },
  { id: 'bib-deap', title: 'Digital Education Action Plan 2021–2027', year: '2021', org: 'Komisja Europejska', note: 'Strategiczny kontekst dla edukacji cyfrowej, kompetencji i działań systemowych w UE.', prio: '2', url: 'https://education.ec.europa.eu/focus-topics/digital-education/action-plan' },
  { id: 'bib-unesco-generative-ai', title: 'Guidance for generative AI in education and research', year: '2023', org: 'UNESCO', note: 'Praktyczne wskazówki dotyczące wdrażania generatywnej AI w edukacji i badaniach.', prio: '2', url: 'https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research' },
  { id: 'bib-ai-in-education-platform', title: 'AI in Education', year: '2024', org: 'European School Education Platform', note: 'Kurs i zasoby dla osób pracujących w edukacji, pokazujące praktyczne scenariusze użycia AI.', prio: '2', url: 'https://school-education.ec.europa.eu/en/learn/courses/ai-education' },
  { id: 'bib-gemini-for-education', title: 'Gemini for Education', year: '2025', org: 'Google for Education', note: 'Oficjalny opis narzędzia edukacyjnego i jego ograniczeń oraz zabezpieczeń.', prio: '3', url: 'https://edu.google.com/ai/gemini-for-education/' },
  { id: 'bib-iea-energy-ai', title: 'Energy and AI', year: '2025', org: 'International Energy Agency', note: 'Oficjalny raport o energii, centrach danych i wpływie rozwoju AI na zapotrzebowanie energetyczne.', prio: '2', url: 'https://www.iea.org/reports/energy-and-ai' },
  { id: 'bib-li-water-footprint', title: 'Making AI Less "Thirsty": Uncovering and Addressing the Secret Water Footprint of AI Models', year: '2025', org: 'Li et al.', note: 'Badanie o śladzie wodnym modeli AI, wykorzystywane w module o zrównoważonym AI.', prio: '2', url: 'https://arxiv.org/abs/2304.03271' },
  { id: 'bib-luccioni-bloom', title: 'Estimating the Carbon Footprint of BLOOM, a 176B Parameter Language Model', year: '2022', org: 'Luccioni et al.', note: 'Opracowanie porównawcze dotyczące śladu węglowego dużych modeli językowych.', prio: '2', url: 'https://www.jmlr.org/papers/v24/23-0069.html' }
];

PAGES.bibliography = () => `
  <div class="page-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> <span class="bc-sep">›</span> Źródła</div>
    <h2>📚 Źródła i literatura</h2>
    <p>Badania, raporty i dokumenty instytucjonalne, na których oparty jest kurs. Każdy wpis zawiera link do źródła, które możesz otworzyć w przeglądarce.</p>
  </div>
  <div class="bib-page">
    ${BIB_SOURCES.map(source => bib(source)).join('')}
  </div>
`;

function bib(source) {
  const { id, title, year, org, note, prio, url } = source;
  const prioLabel = { 1: 'Kluczowe źródło', 2: 'Uzupełniające', 3: 'Zasoby dodatkowe' };
  const prioCls = { 1: 'bib-1', 2: 'bib-2', 3: 'bib-3' };
  return `<div class="bib-entry" id="${id}">
    <span class="bib-badge ${prioCls[prio]}">${prioLabel[prio]}</span>
    <div class="bib-title">${title}</div>
    <div class="bib-detail">${org} · ${year}</div>
    <div class="bib-note">${note}</div>
    ${url ? `<div class="bib-link-row"><a class="bib-link" href="${url}" target="_blank" rel="noopener noreferrer">Otwórz źródło ↗</a></div>` : ''}
  </div>`;
}

function stripHtml(html) {
  return html
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extendSearchIndex() {
  if (extendSearchIndex.done || typeof IDX === 'undefined') return;
  const existing = new Set(IDX.map(item => `${item.p}|${item.a}|${item.t}`));
  const extras = [];

  Object.entries(SLIDE_SETS).forEach(([setKey, set]) => {
    set.slides.forEach((slide, index) => {
      const anchor = `${setKey}:s${index + 1}`;
      const title = `Slajd ${index + 1}: ${slide.title}`;
      const tags = [
        'slajd',
        set.title,
        `moduł ${setKey.slice(1)}`,
        slide.tag.replace(/[^\p{L}\p{N}\s]/gu, '').trim()
      ].filter(Boolean);
      extras.push({
        t: title,
        p: 'slides',
        a: anchor,
        tags,
        c: stripHtml(slide.body).slice(0, 180)
      });
    });
  });

  BIB_SOURCES.forEach(source => {
    extras.push({
      t: `Źródło: ${source.title}`,
      p: 'bibliography',
      a: source.id,
      tags: ['źródło', 'bibliografia', source.org, source.year],
      c: source.note
    });
  });

  INFOGRAPHICS.forEach(info => {
    extras.push({
      t: `Infografika: ${info.title}`,
      p: 'infographics',
      a: info.id,
      tags: ['infografika', 'infografiki', info.moduleLabel, 'materiały'],
      c: info.desc
    });
  });

  extras.forEach(item => {
    const key = `${item.p}|${item.a}|${item.t}`;
    if (!existing.has(key)) {
      IDX.push(item);
      existing.add(key);
    }
  });

  extendSearchIndex.done = true;
}

extendSearchIndex();

/* ══════════════════════════════════════
   KEYBOARD NAVIGATION FOR SLIDES
══════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('searchOverlay').classList.remove('open');
    const np = document.getElementById('notesPanel');
    if (np.classList.contains('open')) toggleNotes();
  }
  if (currentPage === 'slides') {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlide();
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
  }
});

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const s = migrateCourseState();
  const startPage = (s.lastPage && PAGES[s.lastPage]) ? s.lastPage : 'home';
  showPage(startPage);
  updateContinueBtn();
});
/* ══════════════════════════════════════
   HIDING TOPBAR ON SCROLL
══════════════════════════════════════ */
let lastScrollY = window.scrollY;
const topbar = document.querySelector('.topbar');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const isMobile = window.innerWidth < 900;
  
  if (!topbar) return;

  // Don't hide if any overlay is open
  const isOverlayOpen = 
    document.getElementById('sidebar').classList.contains('open') ||
    document.getElementById('searchOverlay').classList.contains('open') ||
    document.getElementById('notesPanel').classList.contains('open');

  if (isOverlayOpen) {
    topbar.classList.remove('hidden');
    return;
  }

  if (isMobile) {
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      topbar.classList.add('hidden');
    } else {
      topbar.classList.remove('hidden');
    }
  } else {
    topbar.classList.remove('hidden');
  }
  
  lastScrollY = currentScrollY;
}, { passive: true });

// Ensure topbar shows when opening overlays
const originalToggleMobileMenu = toggleMobileMenu;
toggleMobileMenu = function() {
  topbar.classList.remove('hidden');
  originalToggleMobileMenu();
};

const originalToggleSearch = toggleSearch;
toggleSearch = function() {
  topbar.classList.remove('hidden');
  originalToggleSearch();
};

const originalToggleNotes = toggleNotes;
toggleNotes = function() {
  topbar.classList.remove('hidden');
  originalToggleNotes();
};
