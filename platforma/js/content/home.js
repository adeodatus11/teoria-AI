PAGES.home = () => {
  const s = gs();
  const hasProgress = s.lastPage && s.lastPage !== 'home' && PAGES[s.lastPage];
  const NAMES = {
    module1: 'Moduł 1 – Czym jest AI', module2: 'Moduł 2 – Prompting',
    module3: 'Moduł 3 – AI w dydaktyce', module4: 'Moduł 4 – Projekty i analityka',
    module5: 'Moduł 5 – Praca projektowa z AI', module6: 'Moduł 6 – Zrównoważone AI',
    exercises: 'Ćwiczenia', prompts: 'Promptownik', checklists: 'Checklisty',
    myplan: 'Mój plan wdrożenia', slides: 'Slajdy', bibliography: 'Źródła',
  };
  const lastName = NAMES[s.lastPage] || '';

  return `
  <div class="hero">
    <div class="hero-inner">
      <div class="hero-badge">🎓 Kurs self-learning · edukacja · organizacja · projekty</div>
      <h1>AI w edukacji, organizacji i projektach<br><em>Samodzielny kurs online</em></h1>
      <p class="hero-subtitle">Kurs dla nauczycieli oraz innych osób pracujących w edukacji, organizacji i działaniach projektowych. Przechodź moduły, wykonuj ćwiczenia i korzystaj z gotowych promptów we własnym tempie. Postęp, notatki i zapisane prompty są przechowywane lokalnie w Twojej przeglądarce.</p>
      <div class="hero-stats">
        <div class="hero-stat"><div class="sn">6</div><div class="sl">modułów samodzielnej nauki</div></div>
        <div class="hero-stat"><div class="sn">28</div><div class="sl">wariantów promptów do skopiowania</div></div>
        <div class="hero-stat"><div class="sn">18</div><div class="sl">ćwiczeń z instrukcjami</div></div>
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
    <div class="section-subtitle">Możesz przejść cały kurs albo od razu wejść w temat najbliższy Twojej pracy.</div>
    <div class="entry-grid" style="margin-bottom:40px">
      <div class="entry-card featured" onclick="showPage('module1')">
        <div class="ec-icon">🚀</div>
        <div class="ec-text">
          <div class="ec-title">Pełny kurs – 6 modułów</div>
          <div class="ec-desc">Przejdź kurs od podstaw AI po dydaktykę, analitykę, pracę projektową i zrównoważone użycie narzędzi.</div>
          <span class="ec-tag">⭐ Polecamy dla początkujących</span>
        </div>
      </div>
      <div class="entry-card" onclick="showPage('exercises')">
        <div class="ec-icon">🧩</div>
        <div class="ec-text"><div class="ec-title">Tylko ćwiczenia</div><div class="ec-desc">18 praktycznych zadań z instrukcjami krok po kroku.</div><span class="ec-tag">Praktyka</span></div>
      </div>
      <div class="entry-card" onclick="showPage('prompts')">
        <div class="ec-icon">💡</div>
        <div class="ec-text"><div class="ec-title">Tylko prompty</div><div class="ec-desc">14 kart i 28 wariantów promptów gotowych do skopiowania i użycia od razu.</div><span class="ec-tag">Narzędzia</span></div>
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
        <div class="ec-text"><div class="ec-title">Projekty i analityka</div><div class="ec-desc">Analiza dokumentów, porządkowanie informacji i praca na dużych plikach.</div><span class="ec-tag">Analityka</span></div>
      </div>
      <div class="entry-card" onclick="showPage('module5')">
        <div class="ec-icon">🤝</div>
        <div class="ec-text"><div class="ec-title">Praca projektowa z AI</div><div class="ec-desc">Raporty, partnerzy, komunikacja projektowa i zadania grantowe.</div><span class="ec-tag">Projekty</span></div>
      </div>
      <div class="entry-card" onclick="showPage('checklists')">
        <div class="ec-icon">✅</div>
        <div class="ec-text"><div class="ec-title">Checklisty</div><div class="ec-desc">Prompt, weryfikacja AI, RODO, mini-test wiedzy.</div><span class="ec-tag">Bezpieczeństwo</span></div>
      </div>
      <div class="entry-card" onclick="showPage('module6')">
        <div class="ec-icon">🌱</div>
        <div class="ec-text"><div class="ec-title">Zrównoważone AI</div><div class="ec-desc">Koszty środowiskowe, proporcja użycia i odpowiedzialne decyzje.</div><span class="ec-tag">Świadomość</span></div>
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
      <div class="quick-card" onclick="showPage('prompts','pA1')"><div class="qc-icon">📝</div><div class="qc-title">Konspekt lekcji</div><div class="qc-sub">Gotowy prompt do skopiowania</div></div>
      <div class="quick-card" onclick="showPage('prompts','pC1')"><div class="qc-icon">📧</div><div class="qc-title">Mail do rodziców</div><div class="qc-sub">Szybki komunikat do dopracowania</div></div>
      <div class="quick-card" onclick="showPage('prompts','pB1')"><div class="qc-icon">📄</div><div class="qc-title">Streszczenie dokumentu</div><div class="qc-sub">Lista zadań i terminów</div></div>
      <div class="quick-card" onclick="showPage('prompts','pD1')"><div class="qc-icon">🌍</div><div class="qc-title">Projekt UE – opis działania</div><div class="qc-sub">Szkic do raportu lub sprawozdania</div></div>
      <div class="quick-card" onclick="showPage('checklists','chk-verify')"><div class="qc-icon">🔍</div><div class="qc-title">Checklista: Weryfikacja AI</div><div class="qc-sub">5 pytań przed użyciem odpowiedzi</div></div>
      <div class="quick-card" onclick="showPage('module2','parts')"><div class="qc-icon">🧠</div><div class="qc-title">Ściąga: PARTS</div><div class="qc-sub">Struktura dobrego promptu</div></div>
      <div class="quick-card" onclick="showPage('module4','rodo')"><div class="qc-icon">🔒</div><div class="qc-title">Sekcja: RODO i AI</div><div class="qc-sub">Czego nie wklejać do narzędzi</div></div>
      <div class="quick-card" onclick="showPage('myplan')"><div class="qc-icon">🎯</div><div class="qc-title">Plan wdrożenia</div><div class="qc-sub">7 zadań na pierwszy tydzień</div></div>
    </div>
  </div>`;
};
