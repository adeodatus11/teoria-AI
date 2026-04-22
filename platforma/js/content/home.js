PAGES.home = () => {
  const s = gs();
  const hasProgress = s.lastPage && s.lastPage !== 'home' && PAGES[s.lastPage];
  const NAMES = {
    module1: 'Moduł 1 – Czym jest AI?', module2: 'Moduł 2 – Prompting PARTS',
    module3: 'Moduł 3 – AI w dydaktyce', module4: 'Moduł 4 – Projekty i analityka',
    exercises: 'Ćwiczenia', prompts: 'Promptownik', checklists: 'Checklisty',
    myplan: 'Mój plan wdrożenia', slides: 'Slajdy', bibliography: 'Źródła',
  };
  const lastName = NAMES[s.lastPage] || '';

  return `
  <div class="hero">
    <div class="hero-inner">
      <div class="hero-badge">🎓 Kurs self-learning · WIN4SMEs · COVE Network · International Consortium</div>
      <h1>AI w pracy nauczyciela i szkoły<br><em>Samodzielny kurs online</em></h1>
      <p class="hero-subtitle">Ucz się we własnym tempie. Przejdź moduły, wykonuj ćwiczenia i korzystaj z gotowych promptów bez logowania i bez prowadzącego. Wszystko jest zapisywane lokalnie w Twojej przeglądarce.</p>
      <div class="hero-stats">
        <div class="hero-stat"><div class="sn">6</div><div class="sl">modułów samodzielnej nauki</div></div>
        <div class="hero-stat"><div class="sn">30+</div><div class="sl">gotowych promptów do skopiowania</div></div>
        <div class="hero-stat"><div class="sn">15</div><div class="sl">ćwiczeń z instrukcjami</div></div>
        <div class="hero-stat"><div class="sn">5,9h</div><div class="sl">oszczędności / tydzień (Gallup 2025)<sup>*</sup></div></div>
      </div>
      <div class="hero-cta">
        <button class="btn-hero-primary" onclick="showPage('module1')">🚀 Zacznij kurs od początku</button>
        ${hasProgress ? `<button class="btn-hero-secondary" onclick="showPage('${s.lastPage}')">▶ Kontynuuj: ${lastName}</button>` : ''}
      </div>
    </div>
  </div>

  ${hasProgress ? `<div class="continue-banner">
    <div><div class="cb-text">👋 Witaj z powrotem!</div><div class="cb-sub">Ostatnio byłeś/aś w: <strong>${lastName}</strong></div></div>
    <button onclick="showPage('${s.lastPage}')">Kontynuuj →</button>
  </div>` : ''}

  <div class="section-block">
    ${modulePills()}

    <div class="section-label">GDZIE CHCESZ ZACZĄĆ?</div>
    <div class="section-title">Wybierz swoją ścieżkę</div>
    <div class="section-subtitle">Możesz przejść cały kurs lub od razu skoczyć do konkretnego tematu.</div>
    <div class="entry-grid" style="margin-bottom:40px">
      <div class="entry-card featured" onclick="showPage('module1')">
        <div class="ec-icon">🚀</div>
        <div class="ec-text">
          <div class="ec-title">Pełny kurs – 6 modułów</div>
          <div class="ec-desc">Przejdź kurs od podstaw AI po pracę projektową i ekologię AI. Każdy moduł to lekcja z ćwiczeniami.</div>
          <span class="ec-tag">⭐ Polecamy dla początkujących</span>
        </div>
      </div>
      <div class="entry-card" onclick="showPage('exercises')">
        <div class="ec-icon">🧩</div>
        <div class="ec-text"><div class="ec-title">Tylko ćwiczenia</div><div class="ec-desc">15 praktycznych zadań z instrukcjami krok po kroku.</div><span class="ec-tag">Praktyka</span></div>
      </div>
      <div class="entry-card" onclick="showPage('prompts')">
        <div class="ec-icon">💡</div>
        <div class="ec-text"><div class="ec-title">Tylko prompty</div><div class="ec-desc">30+ gotowych promptów do skopiowania i użycia od razu.</div><span class="ec-tag">Narzędzia</span></div>
      </div>
      <div class="entry-card" onclick="showPage('module3','dydaktyka')">
        <div class="ec-icon">🎓</div>
        <div class="ec-text"><div class="ec-title">AI w dydaktyce</div><div class="ec-desc">Konspekty, różnicowanie, materiały dla uczniów.</div><span class="ec-tag">Nauczanie</span></div>
      </div>
      <div class="entry-card" onclick="showPage('module3','administracja')">
        <div class="ec-icon">🗂️</div>
        <div class="ec-text"><div class="ec-title">AI w dokumentach</div><div class="ec-desc">Maile, streszczenia, protokoły, checklisty.</div><span class="ec-tag">Administracja</span></div>
      </div>
      <div class="entry-card" onclick="showPage('module4','sandbox')">
        <div class="ec-icon">🌍</div>
        <div class="ec-text"><div class="ec-title">Praca na dokumentach</div><div class="ec-desc">AI w projektach (Erasmus+), narzędzia sandboxowe (NotebookLM).</div><span class="ec-tag">PM i Projekty</span></div>
      </div>
      <div class="entry-card" onclick="showPage('checklists')">
        <div class="ec-icon">✅</div>
        <div class="ec-text"><div class="ec-title">Checklisty</div><div class="ec-desc">Prompt, weryfikacja AI, RODO, mini-test wiedzy.</div><span class="ec-tag">Bezpieczeństwo</span></div>
      </div>
      <div class="entry-card" onclick="showPage('slides')">
        <div class="ec-icon">📊</div>
        <div class="ec-text"><div class="ec-title">Prezentacje</div><div class="ec-desc">Przeglądaj slajdy jak w prawdziwym deck'u.</div><span class="ec-tag">Slajdy</span></div>
      </div>
    </div>

    <div class="section-label">GOTOWE DO UŻYCIA OD RAZU</div>
    <div class="section-title">Najczęściej wybierane</div>
    <div class="section-subtitle">Kliknij i zacznij – nie wymaga przerabiania całego kursu.</div>
    <div class="quick-grid">
      <div class="quick-card" onclick="showPage('prompts','pA1')"><div class="qc-icon">📝</div><div class="qc-title">Prompt: Konspekt lekcji</div><div class="qc-sub">Skopiuj i wklej do AI</div></div>
      <div class="quick-card" onclick="showPage('prompts','pC1')"><div class="qc-icon">📧</div><div class="qc-title">Prompt: Mail do rodziców</div><div class="qc-sub">Gotowy w 30 sekund</div></div>
      <div class="quick-card" onclick="showPage('prompts','pB1')"><div class="qc-icon">📄</div><div class="qc-title">Prompt: Streszczenie doc.</div><div class="qc-sub">Lista zadań + terminy</div></div>
      <div class="quick-card" onclick="showPage('prompts','pD1')"><div class="qc-icon">🌍</div><div class="qc-title">Prompt: Projekt EU</div><div class="qc-sub">Opis działania do raportu</div></div>
      <div class="quick-card" onclick="showPage('checklists','chk-verify')"><div class="qc-icon">🔍</div><div class="qc-title">Prompt: Weryfikacja AI</div><div class="qc-sub">5 pytań przed użyciem</div></div>
      <div class="quick-card" onclick="showPage('module2','parts')"><div class="qc-icon">🧠</div><div class="qc-title">Prompt: PARTS – ściąga</div><div class="qc-sub">Struktura dobrego promptu</div></div>
      <div class="quick-card" onclick="showPage('module4','rodo')"><div class="qc-icon">🔒</div><div class="qc-title">Prompt: RODO i AI</div><div class="qc-sub">Czego NIE wklejać do AI</div></div>
      <div class="quick-card" onclick="showPage('myplan')"><div class="qc-icon">🎯</div><div class="qc-title">Prompt: Mój plan wdrożenia</div><div class="qc-sub">7 zadań na pierwszy tydzień</div></div>
    </div>
  </div>`;
};
