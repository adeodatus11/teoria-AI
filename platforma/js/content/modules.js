PAGES.module1 = () => `
  <div class="lesson-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> <span class="bc-sep">›</span> Moduł 1</div>
    <div class="lesson-number">Moduł 1 z 6</div>
    <h2>Czym jest AI</h2>
    <div class="lesson-meta">
      <span class="meta-badge">⏱ ok. 30 minut</span>
      <span class="meta-badge">🎯 Podstawy AI · Halucynacje · Pierwsze użycie</span>
      <span class="meta-badge">📈 Poziom: podstawowy</span>
    </div>
    <p class="lesson-intro">W tym module poznasz podstawy działania AI językowej, zrozumiesz skąd biorą się jej błędy i wykonasz pierwsze proste zadanie. To teoria potrzebna do świadomego korzystania z narzędzi AI w dalszej części kursu.</p>
    <button id="doneBtn_module1" class="mark-done-btn" onclick="markDone('module1')">✓ Oznacz jako ukończony</button>
  </div>

  <div class="lesson-body">
    <div class="learning-goals">
      <h3>📌 Po przejściu tego modułu będziesz wiedzieć / umieć:</h3>
      <ul class="lg-list">
        <li>wyjaśnić, czym jest <span translate="no" class="notranslate">LLM</span> i dlaczego AI może się mylić</li>
        <li>otworzyć narzędzie AI (ChatGPT / Gemini / Claude) i wpisać pierwszy prompt</li>
        <li>ocenić wynik AI: co jest trafne, co wymaga weryfikacji</li>
        <li>rozumieć, czemu ogólne prompty dają ogólne wyniki</li>
      </ul>
    </div>

    <div class="lesson-section">
      <h3><span class="ls-icon">🤖</span> Co to jest AI językowa?</h3>
      <p>Narzędzia AI, z których korzystamy w tej platformie (<span translate="no" class="notranslate">ChatGPT</span>, <span translate="no" class="notranslate">Gemini</span>, <span translate="no" class="notranslate">Claude</span>), to tzw. <strong>duże modele językowe</strong> (<span translate="no" class="notranslate">Large Language Models, LLM</span>). Generują odpowiedzi na podstawie wzorców językowych poznanych podczas trenowania na bardzo dużych zbiorach tekstu.</p>
      <div class="key-insight">
        <strong>Kluczowa zasada:</strong> AI nie sprawdza prawdy tak jak wyszukiwarka, baza wiedzy lub ekspert. Buduje odpowiedź, przewidując najbardziej prawdopodobny ciąg słów na podstawie kontekstu rozmowy.
      </div>
      <div class="key-insight">
        <strong>Pułapka okna kontekstowego (<span translate="no" class="notranslate">Context Window</span>):</strong> Model pracuje tylko na ograniczonej porcji tekstu, którą „widzi” w danym momencie. Gdy materiał jest bardzo długi, część informacji może zostać pominięta albo słabiej uwzględniona. Dlatego przy obszernych dokumentach warto pracować etapami albo korzystać z rozwiązań typu <span translate="no" class="notranslate">RAG</span>.
      </div>
      <p>W praktyce oznacza to, że AI dobrze radzi sobie z redagowaniem, streszczaniem i porządkowaniem treści, ale przy faktach, prawie i liczbach wymaga weryfikacji.</p>
      
      <div class="info-grid">
        <div class="info-card">
          <h4>🧩 Tokeny zamiast liter</h4>
          <p>Model nie pracuje na pojedynczych literach, tylko na mniejszych fragmentach tekstu zwanych <strong>tokenami</strong>. Dzięki temu potrafi rozpoznawać podobieństwa znaczeniowe i styl wypowiedzi, co dobrze widać przy parafrazach, streszczeniach i dopasowywaniu tonu odpowiedzi.</p>
        </div>
        <div class="info-card">
          <h4>🌡️ Temperatura (<span translate="no" class="notranslate">Temperature</span>)</h4>
          <p><strong>Temperatura</strong> wpływa na to, jak przewidywalna albo kreatywna będzie odpowiedź modelu. Niższa sprzyja większej powtarzalności, wyższa daje więcej różnorodności. Dla użytkownika oznacza to tyle, że AI może czasem pisać bardzo zachowawczo, a czasem bardziej swobodnie.</p>
        </div>
      </div>
    </div>

    <div class="lesson-section" id="halucynacje">
      <h3><span class="ls-icon">⚠️</span> Halucynacje – kiedy AI generuje fikcję</h3>
      <p>Gdy AI generuje nieprawdziwe informacje, mylne daty, nieistniejące cytaty albo zmyślone przepisy prawne, mówimy o <strong>halucynacjach</strong>. Odpowiedź może brzmieć bardzo pewnie, nawet jeśli jest niepełna albo błędna.</p>
      <div class="info-grid">
        <div class="info-card">
          <h4>Kiedy AI może halucynować?</h4>
          <ul>
            <li>Gdy pytasz o konkretne fakty, daty, liczby</li>
            <li>Gdy prosisz o cytaty z dokumentów lub prawa</li>
            <li>Gdy piszesz o specyficznych, lokalnych wydarzeniach</li>
            <li>Gdy pytanie nie daje modelowi wystarczającego kontekstu</li>
          </ul>
        </div>
        <div class="info-card">
          <h4>Co zrobić, żeby nie popełnić błędu?</h4>
          <ul>
            <li>Traktuj każdy wynik AI jak <strong>wersję roboczą</strong></li>
            <li>Fakty, przepisy, daty – zawsze sprawdzaj osobno</li>
            <li>Nie kopiuj wprost artykułów prawa od AI</li>
            <li>Używaj AI do struktury i stylu, nie do faktów</li>
          </ul>
        </div>
      </div>
      <div class="try-it">
        <div class="try-label">🧪 Przetestuj – wykrywanie halucynacji</div>
        <p>Wpisz do dowolnego narzędzia AI poniższy prompt (celowo dotyczy nieistniejącego zapisu):</p>
        <div class="prompt-box" style="position:relative">
          <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
          <pre>Zacytuj dokładnie artykuł 43b Europejskiego Aktu o Sztucznej Inteligencji (EU AI Act) dotyczący dopuszczalności stosowania AI wobec uczniów w szkołach podstawowych.</pre>
        </div>
        <p><strong>Co zaobserwujesz:</strong> AI najprawdopodobniej wygeneruje wiarygodnie brzmiący cytat przepisu, którego nie znajdziesz w oficjalnej bazie prawa <strong>EUR-Lex</strong>. To właśnie przykład halucynacji: odpowiedź wygląda profesjonalnie, ale nie ma potwierdzenia w źródle. Sprawdź: <a href="https://eur-lex.europa.eu/" target="_blank" rel="noopener noreferrer">eur-lex.europa.eu ↗</a>.</p>
        <div class="tip-box" style="margin-top:12px"><strong>Wniosek:</strong> Model potrafi bardzo dobrze naśladować styl dokumentu prawnego, ale to nie oznacza, że przywołany przepis istnieje. Fakty, cytaty i podstawy prawne zawsze sprawdzaj w źródle nadrzędnym.</div>
      </div>
    </div>

    <div class="lesson-section">
      <h3><span class="ls-icon">📊</span> Dlaczego warto – dane z badań</h3>
      <div class="stats-row">
        <div class="stat-item"><div class="stat-num">5,9h</div><div class="stat-label">oszczędności tygodniowo dla regularnych użytkowników AI (Gallup 2025)</div></div>
        <div class="stat-item"><div class="stat-num">29%</div><div class="stat-label">nauczycieli zgłasza potrzebę szkoleń z AI (OECD TALIS 2024)</div></div>
        <div class="stat-item"><div class="stat-num">74%</div><div class="stat-label">nauczycieli uważa, że AI poprawiła jakość pracy administracyjnej (European School Education Platform 2024)</div></div>
      </div>
      <p>Nauczyciele, którzy regularnie korzystają z AI, oszczędzają prawie godzinę dziennie. Nie dlatego, że AI robi wszystko za nich, ale dlatego, że skraca czas wykonywania zadań powtarzalnych: pisania maili, tworzenia checklist i redagowania tekstów.</p>
      <p style="font-size:12.5px;color:var(--clr-text-muted)">Źródła: Gallup / Walton Family Foundation (2025), OECD TALIS (2024), European School Education Platform (2024).</p>
    </div>

    <div class="lesson-section" id="tools">
      <h3><span class="ls-icon">⌨️</span> Otwórz narzędzie AI – teraz</h3>
      <p>Zanim przejdziesz do nauki promptowania, wybierz jedno narzędzie AI dostępne w przeglądarce. Do ćwiczeń z kursu wystarczy podstawowy dostęp do konta.</p>
      <div class="info-grid">
        <div class="info-card">
          <h4>ChatGPT</h4>
          <ul>
            <li>Rejestracja emailem lub kontem Google</li>
            <li>Dobre do: pisania, streszczeń i porządkowania treści</li>
            <li>Wersja w przeglądarce wystarczy do ćwiczeń</li>
            <li><a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">Otwórz ChatGPT ↗</a></li>
          </ul>
        </div>
        <div class="info-card">
          <h4>Gemini</h4>
          <ul>
            <li>Wymagane konto Google</li>
            <li>Dobre do: pracy z tekstem i dokumentami Google</li>
            <li>Wersja w przeglądarce wystarczy do ćwiczeń</li>
            <li><a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer">Otwórz Gemini ↗</a></li>
          </ul>
        </div>
        <div class="info-card">
          <h4>Claude</h4>
          <ul>
            <li>Logowanie przez konto użytkownika w przeglądarce</li>
            <li>Dobre do: dłuższych odpowiedzi i redagowania treści</li>
            <li>Wersja w przeglądarce wystarczy do ćwiczeń</li>
            <li><a href="https://claude.ai/" target="_blank" rel="noopener noreferrer">Otwórz Claude ↗</a></li>
          </ul>
        </div>
      </div>
      <div class="try-it" id="first-prompt-exercise">
        <div class="try-label">🧪 Twoje pierwsze ćwiczenie – Zrób to teraz</div>
        <p><strong>Krok 1:</strong> Otwórz narzędzie AI w nowej karcie przeglądarki.</p>
        <p><strong>Krok 2:</strong> Pomyśl o jednym zadaniu zawodowym, które regularnie zajmuje Ci dużo czasu.</p>
        <p><strong>Krok 3:</strong> Wpisz je do AI tak, jak napisałbyś/napisałabyś do kolegi proszącego o pomoc.</p>
        <p><strong>Krok 4:</strong> Przeczytaj wynik. Oceń go w skali 1–5. Zanotuj: co AI zrobiła dobrze? Co nie?</p>
        <div class="tip-box" style="margin-top:12px">
          <strong>Nie wiesz od czego zacząć?</strong> Wpisz: <em>„Napisz email do partnerów zagranicznych z Włoch o przełożeniu spotkania projektowego na jutro na godzinę 15:00 na platformie Teams"</em>
        </div>
      </div>
    </div>

    <div class="lesson-section">
      <h3><span class="ls-icon">💡</span> Co zaobserwowałeś/aś?</h3>
      <p>Jeśli wynik był ogólnikowy lub mało konkretny – to normalne. Właśnie dlatego istnieje Moduł 2: nauczysz się pisać prompty, które dają naprawdę przydatne odpowiedzi.</p>
      <div class="reflection-box">
        <div class="rb-label">💭 Chwila refleksji</div>
        <p>Zanim przejdziesz dalej, odpowiedz sobie na te pytania:</p>
        <ul>
          <li>Co AI zrobiła dobrze? Co byś zachował/a?</li>
          <li>Co jest bezużyteczne lub za ogólne?</li>
          <li>Co musiałbyś/abyś zmienić, zanim użyjesz tego tekstu?</li>
        </ul>
      </div>
    </div>

    <div class="lesson-nav">
      <button class="btn-secondary" onclick="showPage('home')">← Strona główna</button>
      <div style="display:flex;gap:12px;align-items:center">
        <button id="doneBtn_module1" class="btn-done" onclick="markDone('module1')">✓ Ukończono moduł 1</button>
        <button class="btn-primary" onclick="showPage('module2')">Moduł 2: Prompting →</button>
      </div>
    </div>
  </div>
`;

/* ══════════════════════════════════════
   PAGE: MODULE 2
══════════════════════════════════════ */
PAGES.module2 = () => `
  <div class="lesson-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> <span class="bc-sep">›</span> Moduł 2</div>
    <div class="lesson-number">Moduł 2 z 6</div>
    <h2>Prompting</h2>
    <div class="lesson-meta">
      <span class="meta-badge">⏱ ok. 35 minut</span>
      <span class="meta-badge">🎯 Framework <span translate="no" class="notranslate">PARTS</span> · Ćwiczenia poprawy promptów</span>
      <span class="meta-badge">📝 3 ćwiczenia praktyczne</span>
    </div>
    <p class="lesson-intro">Jakość wyniku AI zależy bezpośrednio od jakości pytania. W tym module nauczysz się pisać prompty według struktury <span translate="no" class="notranslate">PARTS</span> – i od razu przetestujesz różnicę.</p>
    <button id="doneBtn_module2" class="mark-done-btn" onclick="markDone('module2')">✓ Oznacz jako ukończony</button>
  </div>

  <div class="lesson-body">
    <div class="learning-goals">
      <h3>📌 Po tym module będziesz umieć:</h3>
      <ul class="lg-list">
        <li>stosować framework <span translate="no" class="notranslate">PARTS</span> w każdym prompcie</li>
        <li>poprawić słaby prompt i porównać wyniki</li>
        <li>wybrać odpowiedni format wyjścia (lista, tabela, mail, akapit)</li>
        <li>iterować – ulepszać wynik kolejnymi promptami</li>
      </ul>
    </div>

    <div class="lesson-section" id="parts">
      <h3><span class="ls-icon">🧠</span> Framework <span translate="no" class="notranslate">PARTS</span> – anatomia dobrego promptu</h3>
      <p><span translate="no" class="notranslate">PARTS</span> to prosta struktura, która pomaga napisać prompt dający naprawdę przydatny wynik. Nie musisz używać wszystkich 5 elementów za każdym razem – ale im więcej, tym lepiej.</p>

      <table class="parts-table">
        <thead><tr><th>Litera</th><th>Co oznacza</th><th>Przykład w praktyce</th></tr></thead>
        <tbody>
          <tr><td><span class="parts-letter" translate="no" class="notranslate">P</span></td><td><strong translate="no" class="notranslate">Persona</strong> – jaką rolę ma AI pełnić</td><td>„Działaj jako doświadczony nauczyciel historii w szkole podstawowej…"</td></tr>
          <tr><td><span class="parts-letter" translate="no" class="notranslate">A</span></td><td><strong translate="no" class="notranslate">Aim</strong> – co ma powstać (cel)</td><td>„…przygotuj konspekt lekcji (45 min) na temat wybuchu I Wojny Światowej…"</td></tr>
          <tr><td><span class="parts-letter" translate="no" class="notranslate">R</span></td><td><strong translate="no" class="notranslate">Recipients</strong> – dla kogo jest wynik</td><td>„…dla uczniów klasy VIII (14 lat), zróżnicowanej poziomowo…"</td></tr>
          <tr><td><span class="parts-letter" translate="no" class="notranslate">T</span></td><td><strong translate="no" class="notranslate">Tone</strong> – styl i ton odpowiedzi</td><td>„…pisząc angażującym językiem z odniesieniami do współczesności…"</td></tr>
          <tr><td><span class="parts-letter" translate="no" class="notranslate">S</span></td><td><strong translate="no" class="notranslate">Structure</strong> – format wyjścia</td><td>„…w formacie tabeli: Czas | Aktywność | Materiały | Uwagi."</td></tr>
        </tbody>
      </table>

      <div class="compare-grid">
        <div>
          <div class="compare-label bad">❌ Bez <span translate="no" class="notranslate">PARTS</span></div>
          <div class="prompt-box"><pre>Napisz lekcję o wojnie.</pre></div>
          <div class="compare-note">Wynik: ogólny, bezużyteczny, nie wiesz dla kogo ani w jakiej formie.</div>
        </div>
        <div>
          <div class="compare-label good">✅ Z <span translate="no" class="notranslate">PARTS</span></div>
          <div class="prompt-box" style="position:relative">
            <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
            <pre>Działaj jako nauczyciel historii w szkole podstawowej.
Przygotuj konspekt lekcji (45 min) na temat wybuchu
I Wojny Światowej dla uczniów klasy VIII (14 lat).
Uwzględnij element dla uczniów zdolnych.
Styl: angażujący, z odniesieniami do dziś.
Format: tabela Czas | Aktywność | Materiały | Uwagi</pre>
          </div>
          <div class="compare-note">Wynik: konkretny, gotowy do adaptacji.</div>
        </div>
      </div>

      <div class="try-it">
        <div class="try-label">🧪 Zrób to sam/a teraz</div>
        <p><strong>Wróć do swojego pierwszego promptu z Modułu 1</strong> i przepisz go według <span translate="no" class="notranslate">PARTS</span>.</p>
        <p>Wpisz <em>do AI</em> obie wersje – oryginalną i ulepszoną. Porównaj wyniki.</p>
        <p>Zapytaj siebie: jak duża jest różnica? Który byś użył/a w pracy jutro?</p>
      </div>
    </div>

    <div class="lesson-section" id="rules">
      <h3><span class="ls-icon">⭐</span> 5 Złotych Zasad Promptowania</h3>
      <ol class="rules-list">
        <li><div><strong>Bądź konkretny/a</strong> – AI nie czyta myśli ani kontekstu Twojej szkoły. Podaj co wiesz: klasa, temat, cel, grupę.</div></li>
        <li><div><strong>Podaj kontekst</strong> – każdy szczegół pomaga: „dla uczniów klasy 6 z dysleksją", „do użycia na zebraniu z rodzicami", „dla projektu Erasmus+".</div></li>
        <li><div><strong>Określ format</strong> – AI może pisać w tabeli, liście, mailu, akapitach. Jeśli nie powiesz – zgaduje. Powiedz: „fmt: lista", „tabela", „mail (max 120 słów)".</div></li>
        <li><div><strong>Iteruj</strong> – pierwszy wynik to szkic. Napisz kolejny prompt: „Teraz skróć to do 100 słów" albo „Dodaj przykład dla uczniów z dysleksją".</div></li>
        <li><div><strong>Weryfikuj</strong> – zanim użyjesz, sprawdź: fakty, ton, brak danych osobowych. Traktuj wynik jak wersję roboczą, nie gotowy dokument.</div></li>
      </ol>

      <div class="key-insight">
        <strong>Kiedy AI zawodzi:</strong> zbyt ogólny prompt · brak kontekstu · pytanie o aktualne przepisy prawa · kopiowanie wyników bez weryfikacji · wklejanie danych osobowych
      </div>
    </div>

    <div class="lesson-section">
      <h3><span class="ls-icon">🔄</span> Technika iteracji – jak poprawiać wynik</h3>
      <p>Praca z AI to dialog, nie jednorazowe zapytanie. Oto jak wygląda efektywna iteracja:</p>
      <div class="info-grid">
        <div class="info-card">
          <h4>Przykład iteracji – konspekt lekcji</h4>
          <ul>
            <li>Prompt 1: Wygeneruj konspekt lekcji o fotosyntezie (klasa 7)</li>
            <li>Prompt 2: Uprość sekcję „Faza ciemna" – to za trudne dla tej klasy</li>
            <li>Prompt 3: Dodaj zadanie grupowe na 10 minut w połowie lekcji</li>
            <li>Prompt 4: Przeformułuj podsumowanie jako pytania do uczniów</li>
          </ul>
        </div>
        <div class="info-card">
          <h4>Przydatne frazy do iteracji</h4>
          <ul>
            <li>„Skróć to do [N] słów"</li>
            <li>„Dodaj wersję dla uczniów z trudnościami"</li>
            <li>„Zmień ton na mniej formalny"</li>
            <li>„Przedstaw to w formie tabeli"</li>
            <li>„Zaznacz, które informacje wymagają weryfikacji"</li>
          </ul>
        </div>
      </div>

      <div class="try-it">
        <div class="try-label">🧪 Ćwiczenie – Ulepsz słaby prompt</div>
        <p>Poniżej masz trzy słabe prompty. Wybierz jeden i popraw go według PARTS, wpisz oba do AI i porównaj:</p>
        <div class="prompt-box">
          <pre>PROMPT A: „Napisz lekcję o wojnie."
PROMPT B: „Zrób mail do rodziców."
PROMPT C: „Opisz projekt."</pre>
        </div>
        <p>Potrzebujesz więcej inspiracji? Przejdź do <a href="#" onclick="showPage('exercises','ex2')" style="color:var(--clr-primary)">Ćwiczenia #2 – Ulepsz słaby prompt</a> z pełną instrukcją.</p>
      </div>
    </div>

    <div class="lesson-section" id="group-prompt-lab">
      <h3><span class="ls-icon">🤝</span> Ćwiczenie grupowe – Prompt w trzech wersjach</h3>
      <p>To zadanie pokazuje, jak dużo daje wspólna praca nad jednym promptem. Jedna osoba pilnuje celu, druga testuje kolejne wersje w narzędziu, a trzecia ocenia wynik pod kątem jakości i użyteczności.</p>

      <table class="data-table">
        <thead><tr><th>Rola</th><th>Za co odpowiada</th></tr></thead>
        <tbody>
          <tr><td>Osoba 1 – właściciel zadania</td><td>wybiera sytuację i określa, jaki wynik będzie naprawdę przydatny</td></tr>
          <tr><td>Osoba 2 – operator AI</td><td>wpisuje prompty, zapisuje różnice i pilnuje porównania wyników</td></tr>
          <tr><td>Osoba 3 – recenzent</td><td>sprawdza ton, kompletność, ryzyka i wskazuje, co jeszcze poprawić</td></tr>
        </tbody>
      </table>

      <div class="try-it">
        <div class="try-label">🧪 Pracujcie w zespole 2–3 osoby</div>
        <p><strong>Sytuacja:</strong> wybierzcie jedno realne zadanie: mail, streszczenie dokumentu, plan lekcji, opis działania albo analizę krótkiej ankiety.</p>
        <ol>
          <li>Ustalcie, jaki ma być efekt końcowy i po czym poznacie, że wynik jest dobry.</li>
          <li>Przygotujcie trzy wersje promptu: prostą, doprecyzowaną i ekspercką.</li>
          <li>Wpiszcie wszystkie trzy wersje do AI i porównajcie odpowiedzi.</li>
          <li>Zapiszcie, które elementy najbardziej poprawiły wynik: rola, kontekst, format, kryteria jakości czy prośba o weryfikację.</li>
          <li>Na końcu zbudujcie jedną wspólną wersję promptu, którą można wykorzystać ponownie.</li>
        </ol>
        <p><strong>Produkt końcowy:</strong> tabela porównawcza 3 promptów i 1 finalny prompt zespołu.</p>
        <p>Pełną wersję tego zadania znajdziesz w <a href="#" onclick="showPage('exercises','ex16')" style="color:var(--clr-primary)">Ćwiczeniu #16 – Prompt w trzech wersjach</a>.</p>
      </div>

      <div class="reflection-box">
        <div class="rb-label">Refleksja po zadaniu</div>
        <ul>
          <li>Co najbardziej poprawiło wynik: doprecyzowanie celu czy dopiero dodanie formatu i kryteriów jakości?</li>
          <li>Który element promptu najłatwiej pominąć, mimo że ma duży wpływ na odpowiedź?</li>
          <li>Jak wykorzystać taki sposób pracy przy kolejnym zadaniu w szkole, projekcie lub biurze?</li>
        </ul>
      </div>
    </div>

    <div class="lesson-nav">
      <button class="btn-secondary" onclick="showPage('module1')">← Moduł 1</button>
      <div style="display:flex;gap:12px;align-items:center">
        <button id="doneBtn_module2" class="btn-done" onclick="markDone('module2')">✓ Ukończono moduł 2</button>
        <button class="btn-primary" onclick="showPage('module3')">Moduł 3: AI w dydaktyce →</button>
      </div>
    </div>
  </div>
`;

/* ══════════════════════════════════════
   PAGE: MODULE 3
══════════════════════════════════════ */
PAGES.module3 = () => `
  <div class="lesson-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> <span class="bc-sep">›</span> Moduł 3</div>
    <div class="lesson-number">Moduł 3 z 6</div>
    <h2>AI w dydaktyce</h2>
    <div class="lesson-meta">
      <span class="meta-badge">⏱ ok. 40 minut</span>
      <span class="meta-badge">🎯 Dydaktyka · Administracja · Komunikacja</span>
      <span class="meta-badge">🧩 2 ćwiczenia praktyczne</span>
    </div>
    <p class="lesson-intro">W tym module przechodzisz do aktywnej pracy. Nauczysz się używać AI do tworzenia materiałów dydaktycznych, dokumentów szkolnych i komunikacji z rodzicami. Każdy podrozdział zawiera gotowy prompt do wykonania.</p>
    <button id="doneBtn_module3" class="mark-done-btn" onclick="markDone('module3')">✓ Oznacz jako ukończony</button>
  </div>

  <div class="lesson-body">
    <div class="learning-goals">
      <h3>📌 Po tym module będziesz umieć:</h3>
      <ul class="lg-list">
        <li>wygenerować konspekt lekcji i dostosować go do różnych poziomów uczniów</li>
        <li>skrócić lub uprościć materiał naukowy dla uczniów ze SPE</li>
        <li>stworzyć mail do rodziców na podstawie luźnych notatek</li>
        <li>wyciągnąć listę zadań z protokołu lub dokumentu szkolnego</li>
        <li>zbudować checklistę organizacyjną w dwie minuty</li>
      </ul>
    </div>

    <div class="lesson-section" id="dydaktyka">
      <h3><span class="ls-icon">🎓</span> AI w dydaktyce – co możesz zrobić już dziś?</h3>
      <p>AI nie zastąpi Twojej wiedzy o przedmiocie ani znajomości Twoich uczniów. Ale może zdjąć z Ciebie ciężar formatowania, strukturyzowania i redagowania – a to właśnie zajmuje najwięcej czasu.</p>

      <table class="data-table">
        <thead><tr><th>Zadanie dydaktyczne</th><th>AI proponuje (~80%)</th><th>Ty decydujesz (100%)</th></tr></thead>
        <tbody>
          <tr><td>Konspekt lekcji</td><td>Struktura, timing, aktywności, materiały</td><td>Czy pasuje do Twojej klasy, tempa, poziomu</td></tr>
          <tr><td>Różnicowanie materiału</td><td>Wersja uproszczona i rozszerzona</td><td>Czy uproszczenie jest właściwe dla Twojego ucznia</td></tr>
          <tr><td>Pytania sprawdzające</td><td>Pytania wg poziomów taksonomii Blooma</td><td>Poprawność merytoryczna, adekwatność</td></tr>
          <tr><td>Informacja zwrotna na piśmie</td><td>Szkic komentarza do pracy ucznia</td><td>Ton, konkretność, Twoja ocena pedagogiczna</td></tr>
          <tr><td>Analogi i przykłady</td><td>3–4 różne sposoby wyjaśnienia pojęcia</td><td>Który przykład działa dla Twojej klasy</td></tr>
        </tbody>
      </table>

      <div class="tip-box">
        <strong>Zasada:</strong> AI robi ciężką, powtarzalną pracę redakcyjną. Ty robisz wartościową, pedagogiczną robotę – tę, której AI nie może zrobić za Ciebie.
      </div>

      <div class="try-it">
        <div class="try-label">🧪 Zrób to teraz – konspekt lekcji</div>
        <p>Wpisz do AI poniższy prompt, zastępując nawiasy kwadratowe swoimi danymi:</p>
        <div class="prompt-box" style="position:relative">
          <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
          <button class="prompt-save-btn" onclick="savePromptFromBox(this)">⭐ Zapisz</button>
          <pre>Działaj jako doświadczony nauczyciel [TWÓJ PRZEDMIOT] w [TYP SZKOŁY].
Przygotuj konspekt lekcji (45 min) na temat [TWÓJ TEMAT]
dla uczniów [KLASA, WIEK], [OPIS GRUPY np. 'zróżnicowanej poziomowo'].
Wymagania: angażujące wprowadzenie (max 5 min), praca grupowa,
podsumowanie z pytaniami sprawdzającymi.
Format: tabela | Czas | Aktywność | Opis | Materiały</pre>
        </div>
        <p>Po otrzymaniu wyniku napisz kolejny prompt: <em>„Teraz napisz wersję fragmentu [X] dostosowaną dla ucznia z dysleksją lub trudnościami w nauce."</em></p>
        <p>Porównaj obie wersje – co AI zmieniła? Czy to wystarczające? Co byś jeszcze poprawił/a?</p>
      </div>
    </div>

    <div class="lesson-section" id="administracja">
      <h3><span class="ls-icon">🗂️</span> AI w administracji i komunikacji</h3>
      <p>To obszar, gdzie oszczędność czasu jest największa. Dokumenty, maile, protokoły, ogłoszenia – AI radzi sobie z nimi świetnie, jeśli dajesz jej odpowiedni kontekst.</p>

      <div class="info-grid">
        <div class="info-card">
          <h4>Co AI może zrobić za Ciebie?</h4>
          <ul>
            <li>Streścić długi dokument do 5 zdań</li>
            <li>Wyciągnąć listę zadań + terminy z protokołu</li>
            <li>Napisać mail do rodziców z luźnych notatek</li>
            <li>Stworzyć checklistę do organizacji imprezy</li>
            <li>Przygotować ogłoszenie dla uczniów</li>
            <li>Zredagować pismo formalne do organu prowadzącego</li>
          </ul>
        </div>
        <div class="info-card">
          <h4>⚠️ Ważne zasady bezpieczeństwa</h4>
          <ul>
            <li>Usuń dane osobowe zanim wkleisz dokument</li>
            <li>Imię ucznia → zastąp „Uczeń A"</li>
            <li>Sprawdź wynik przed wysłaniem</li>
            <li>AI nie zna Twojej szkoły – uzupełnij szczegóły</li>
          </ul>
        </div>
      </div>

      <div class="try-it">
        <div class="try-label">🧪 Zrób to teraz – 3 zadania do wyboru</div>
        <p>Wybierz <strong>jedno</strong> zadanie, które jest najbliższe Twojej pracy:</p>

        <p><strong>Opcja A – Mail do rodziców (z notatek):</strong></p>
        <div class="prompt-box" style="position:relative">
          <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
          <pre>Działaj jako wychowawca klasy VI.
Na podstawie poniższych notatek napisz mail do rodziców:
Czwartek 16:00, zebranie. Omówienie: wyniki klasyfikacji,
wyjazd do stolicy 7 marca (120 EUR, formularz do oddania do 28.02),
spotkanie z dyrekcją dla chętnych po zebraniu.
Ton: ciepły, rzeczowy. Format: Temat + treść (max 140 słów)</pre>
        </div>

        <p><strong>Opcja B – Streszczenie dokumentu:</strong> Wklej fragment dowolnego dokumentu szkolnego (zarządzenie, regulamin, protokół – bez danych osobowych) i wpisz:</p>
        <div class="prompt-box" style="position:relative">
          <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
          <pre>Przeczytaj poniższy dokument i przygotuj:
1. Streszczenie w max 5 zdaniach
2. Listę zadań z terminami (jeśli są)
3. Trzy pytania, które warto zadać po przeczytaniu

Dokument: [WKLEJ TEKST TUTAJ]</pre>
        </div>

        <p><strong>Opcja C – Checklista organizacyjna:</strong></p>
        <div class="prompt-box" style="position:relative">
          <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
          <pre>Przygotuj szczegółową checklistę do organizacji:
[wycieczki szkolnej / dni otwartych / olimpiady / konferencji]
Szkoła: [TYP SZKOŁY], liczba uczniów/uczestników: [LICZBA]
Podziel checklistę na etapy: 2 tygodnie przed / 1 tydzień przed /
dzień przed / w dniu wydarzenia / po wydarzeniu</pre>
        </div>
      </div>
    </div>

    <div class="lesson-nav">
      <button class="btn-secondary" onclick="showPage('module2')">← Moduł 2</button>
      <div style="display:flex;gap:12px;align-items:center">
        <button id="doneBtn_module3" class="btn-done" onclick="markDone('module3')">✓ Ukończono moduł 3</button>
        <button class="btn-primary" onclick="showPage('module4')">Moduł 4: Projekty i analityka →</button>
      </div>
    </div>
  </div>
`;

/* ══════════════════════════════════════
   PAGE: MODULE 4
══════════════════════════════════════ */
PAGES.module4 = () => `
  <div class="lesson-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> <span class="bc-sep">›</span> Moduł 4</div>
    <div class="lesson-number">Moduł 4 z 6</div>
    <h2>Projekty i analityka</h2>
    <div class="lesson-meta">
      <span class="meta-badge">⏱ ok. 35 minut</span>
      <span class="meta-badge">🎯 Dokumenty · analiza · RAG · bezpieczeństwo</span>
      <span class="meta-badge">🤝 1 ćwiczenie grupowe</span>
    </div>
    <p class="lesson-intro">W tym module skupiasz się na pracy z informacją: długimi dokumentami, wielowątkowymi wiadomościami i dużymi plikami. Celem jest szybkie oddzielanie decyzji i zadań od szumu oraz wybór właściwego narzędzia do analizy.</p>
    <button id="doneBtn_module4" class="mark-done-btn" onclick="markDone('module4')">✓ Oznacz jako ukończony</button>
  </div>

  <div class="lesson-body">
    <div class="learning-goals">
      <h3>📌 Po tym module będziesz umieć:</h3>
      <ul class="lg-list">
        <li>wyciągać decyzje, zadania i terminy z długich dokumentów oraz wątków</li>
        <li>porównywać dwa teksty i wykrywać sprzeczności lub luki</li>
        <li>rozumieć różnicę między publicznym <span translate="no" class="notranslate">LLM</span> a rozwiązaniem typu <span translate="no" class="notranslate">RAG</span></li>
        <li>wybrać bezpieczniejszy sposób analizy dużych plików</li>
        <li>stosować podstawowe zasady ochrony danych przy pracy analitycznej</li>
      </ul>
    </div>

    <div class="lesson-section" id="documents">
      <h3><span class="ls-icon">📄</span> AI w analizie dokumentów i przepływu informacji</h3>
      <p>Gdy masz do przeczytania protokół, procedurę, pismo lub długi wątek mailowy, AI może bardzo szybko oddzielić informacje ważne od drugorzędnych. Najlepiej sprawdza się wtedy, gdy prosisz ją o konkretne dane wyjściowe: decyzje, zadania, terminy i pytania otwarte.</p>

      <div class="info-grid">
        <div class="info-card">
          <h4>✅ AI pomoże Ci szybko:</h4>
          <ul>
            <li>streścić dokument do kilku zdań</li>
            <li>wyciągnąć listę zadań i terminów</li>
            <li>zebrać ustalone decyzje z długiej dyskusji</li>
            <li>uporządkować materiał przed spotkaniem</li>
          </ul>
        </div>
        <div class="info-card">
          <h4>🧠 Nadal potrzebujesz własnej oceny:</h4>
          <ul>
            <li>czy AI niczego nie pominęła</li>
            <li>czy zadania są dobrze przypisane</li>
            <li>czy wnioski pasują do realnej sytuacji</li>
            <li>czy w tekście nie ma danych, których nie wolno wklejać</li>
          </ul>
        </div>
      </div>

      <div class="try-it">
        <div class="try-label">🧪 Zrób to teraz – uporządkuj długi wątek</div>
        <p>Użyj poniższego promptu do długiego maila, protokołu, komunikacji projektowej albo pisma z wieloma wątkami:</p>
        <div class="prompt-box" style="position:relative">
          <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
          <button class="prompt-save-btn" onclick="savePromptFromBox(this)">⭐ Zapisz</button>
          <pre>Przeanalizuj poniższy tekst lub wątek.
Oddziel szum informacyjny od konkretów i przygotuj:
1. Krótkie streszczenie (maks. 4 zdania)
2. Tabelę z zadaniami: Zadanie | Osoba | Termin
3. Listę decyzji, które już zapadły
4. Listę spraw otwartych lub niejasnych
Tekst: [WKLEJ]</pre>
        </div>
        <p><strong>Sprawdź po analizie:</strong> czy AI nie pominęła decyzji, czy terminy są poprawne i czy nigdzie nie zostały dopowiedziane informacje, których nie było w tekście.</p>
      </div>
    </div>

    <div class="lesson-section" id="sandbox">
      <h3><span class="ls-icon">📦</span> Zamknięte piaskownice – kiedy wybrać rozwiązanie typu RAG?</h3>
      <p>Przy bardzo długich plikach, wielu załącznikach i materiałach, które muszą być analizowane dokładnie, zwykły czat może okazać się niewystarczający. Wtedy lepiej działa rozwiązanie typu <span translate="no" class="notranslate">RAG</span>, czyli narzędzie odpowiadające na podstawie wskazanych przez Ciebie źródeł.</p>

      <div class="info-grid">
        <div class="info-card">
          <h4>Klasyczne AI (ChatGPT)</h4>
          <ul>
            <li>Wgrywasz plik do wspólnego kontekstu rozmowy</li>
            <li>Przy długim dokumencie może pominąć część treści</li>
            <li>Łączy informacje z pliku z ogólną wiedzą modelu</li>
            <li>Wymaga silniejszej weryfikacji odpowiedzi</li>
          </ul>
        </div>
        <div class="info-card">
          <h4>Piaskownice RAG (np. NotebookLM)</h4>
          <ul>
            <li>Budujesz bazę z własnych dokumentów</li>
            <li>Model odpowiada na podstawie wskazanych źródeł</li>
            <li>Łatwiej sprawdzić, z czego wynika odpowiedź</li>
            <li>Lepsze do pracy na większych zestawach plików</li>
          </ul>
        </div>
      </div>

      <div class="key-insight">
        <strong>Praktyczna zasada:</strong> im dłuższy dokument i im większa odpowiedzialność za poprawność odpowiedzi, tym bardziej opłaca się pracować na narzędziu, które pokazuje źródło i nie opiera się wyłącznie na pamięci rozmowy.
      </div>
    </div>

    <div class="lesson-section" id="compare">
      <h3><span class="ls-icon">🔍</span> Zestawianie sprzeczności i luk między dokumentami</h3>
      <p>AI dobrze sprawdza się wtedy, gdy porównujesz dwa teksty: procedurę i praktykę, wytyczne i roboczy szkic, plan i raport. Zamiast czytać oba materiały liniowo, możesz od razu poprosić o listę rozbieżności.</p>
      <div class="try-it">
        <div class="try-label">🧪 Zrób to teraz – porównaj dwa dokumenty</div>
        <div class="prompt-box" style="position:relative">
          <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
          <button class="prompt-save-btn" onclick="savePromptFromBox(this)">⭐ Zapisz</button>
          <pre>Porównaj dwa teksty dotyczące tej samej sprawy.
Pokaż tylko różnice, sprzeczności i braki.

Tekst A: [WKLEJ]
Tekst B: [WKLEJ]

Zwróć wynik w tabeli:
Obszar | Na czym polega rozbieżność | Co trzeba doprecyzować</pre>
        </div>
      </div>
    </div>

    <div class="lesson-section" id="survey-lab">
      <h3><span class="ls-icon">📊</span> Ćwiczenie grupowe – Mini-laboratorium analizy ankiety</h3>
      <p>W pracy projektowej i organizacyjnej AI przydaje się nie tylko do pisania, ale też do porządkowania odpowiedzi z ankiet, notatek i informacji zwrotnych. To ćwiczenie uczy, jak zaprojektować analizę, nie tracąc kontroli nad danymi i wnioskami.</p>

      <table class="data-table">
        <thead><tr><th>Rola</th><th>Za co odpowiada</th></tr></thead>
        <tbody>
          <tr><td>Osoba 1 – moderator</td><td>ustala cel analizy i pilnuje, by zespół odpowiadał na właściwe pytanie</td></tr>
          <tr><td>Osoba 2 – operator AI</td><td>przygotowuje prompty, uruchamia analizę i zapisuje odpowiedzi</td></tr>
          <tr><td>Osoba 3 – recenzent danych</td><td>sprawdza anonimizację, ryzyka i ocenia jakość wniosków</td></tr>
        </tbody>
      </table>

      <div class="try-it">
        <div class="try-label">🧪 Pracujcie na zanonimizowanych danych</div>
        <p><strong>Sytuacja:</strong> macie krótkie odpowiedzi z ankiety po szkoleniu, wydarzeniu, projekcie albo działaniu szkolnym i chcecie przygotować z nich uporządkowane wnioski.</p>
        <ol>
          <li>Ustalcie cel analizy: co chcecie wiedzieć po lekturze odpowiedzi?</li>
          <li>Sprawdźcie, czego nie wolno wklejać do publicznego narzędzia AI.</li>
          <li>Zaprojektujcie 3 prompty: do grupowania odpowiedzi, wyciągania wniosków i szkicu mini-raportu.</li>
          <li>Przetestujcie prompty na krótkiej próbce danych.</li>
          <li>Na końcu przygotujcie 1 stronę roboczą: główne kategorie, 3 wnioski i 2 rekomendacje.</li>
        </ol>
        <p><strong>Produkt końcowy:</strong> plan analizy, zestaw promptów i szkic mini-raportu.</p>
        <p>Pełną instrukcję znajdziesz w <a href="#" onclick="showPage('exercises','ex17')" style="color:var(--clr-primary)">Ćwiczeniu #17 – Mini-laboratorium analizy ankiety</a>.</p>
      </div>

      <div class="alert-box">
        <strong>Ważne:</strong> jeśli w odpowiedziach pojawiają się dane osobowe, informacje wrażliwe albo treści pozwalające rozpoznać konkretną osobę, najpierw je usuńcie lub zastąpcie neutralnymi oznaczeniami.
      </div>
    </div>

    <div class="lesson-section" id="rodo">
      <h3><span class="ls-icon">🔒</span> Bezpieczeństwo danych w pracy analitycznej</h3>
      <div class="alert-box">
        <strong>🔴 Trzy zasady przed wklejeniem dokumentu:</strong><br>
        1. Usuń dane osobowe uczniów, pracowników i partnerów<br>
        2. Nie wklejaj danych wrażliwych bez anonimizacji<br>
        3. Nie wklejaj poufnych dokumentów bez sprawdzenia zasad narzędzia
      </div>
      <p><strong>Prosta zasada:</strong> Jeśli dokumentu nie możesz bezpiecznie udostępnić poza organizacją, nie wklejaj go bezpośrednio do publicznej AI.</p>
      <p><strong>Jak anonimizować?</strong> Zastąp imiona rolami lub kodami, usuń adresy mailowe, numery telefonów i wszystkie dane pozwalające rozpoznać konkretną osobę.</p>
    </div>

    <div class="lesson-nav">
      <button class="btn-secondary" onclick="showPage('module3')">← Moduł 3</button>
      <div style="display:flex;gap:12px;align-items:center">
        <button id="doneBtn_module4" class="btn-done" onclick="markDone('module4')">✓ Ukończono moduł 4</button>
        <button class="btn-primary" onclick="showPage('module5')">Moduł 5: Praca projektowa z AI →</button>
      </div>
    </div>
  </div>
`;

/* ══════════════════════════════════════
   PAGE: MODULE 5
══════════════════════════════════════ */
PAGES.module5 = () => `
  <div class="lesson-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> <span class="bc-sep">›</span> Moduł 5</div>
    <div class="lesson-number">Moduł 5 z 6</div>
    <h2>Praca projektowa z AI</h2>
    <div class="lesson-meta">
      <span class="meta-badge">⏱ ok. 30 minut</span>
      <span class="meta-badge">🤝 Raporty · partnerzy · komunikacja · granty</span>
    </div>
    <p class="lesson-intro">W tym module skupiasz się na zadaniach typowo projektowych: opisach działań, korespondencji z partnerami, materiałach promocyjnych i odpowiedzialnym użyciu AI w dokumentacji grantowej.</p>
    <button id="doneBtn_module5" class="mark-done-btn" onclick="markDone('module5')">✓ Oznacz jako ukończony</button>
  </div>

  <div class="lesson-body">
    <div class="learning-goals">
      <h3>📌 Po tym module będziesz wiedzieć:</h3>
      <ul class="lg-list">
        <li>do czego AI może realnie pomóc w pracy projektowej, a czego nie powinna zastępować</li>
        <li>przygotować szkic opisu działania do raportu lub sprawozdania</li>
        <li>napisać roboczy mail do partnera projektu</li>
        <li>stworzyć krótkie treści promocyjne o działaniach i rezultatach</li>
        <li>stosować zasadę transparentności i odpowiedzialności za treść</li>
      </ul>
    </div>

    <div class="lesson-section" id="projekty">
      <h3><span class="ls-icon">🤝</span> AI w pracy projektowej – co może, a czego nie zastąpi</h3>
      <p>AI dobrze sprawdza się jako asystent redakcyjny i organizacyjny. Pomaga uporządkować informacje, skrócić czas pisania i przygotować pierwszą wersję tekstu. Nie zastępuje jednak wiedzy o faktycznym przebiegu działań, wymaganiach instytucji finansującej ani odpowiedzialności autora dokumentu.</p>
      <div class="info-grid">
        <div class="info-card">
          <h4>✅ AI może pomóc Ci w:</h4>
          <ul>
            <li>szkicowaniu opisów działań i rezultatów</li>
            <li>porządkowaniu ustaleń po spotkaniu</li>
            <li>pisaniu roboczej korespondencji z partnerami</li>
            <li>tworzeniu treści promocyjnych i podsumowań</li>
          </ul>
        </div>
        <div class="info-card">
          <h4>❌ AI nie zastąpi Twojej:</h4>
          <ul>
            <li>odpowiedzialności za treść raportu lub maila</li>
            <li>wiedzy o konkretnych danych projektu</li>
            <li>weryfikacji formalnych wymagań programu</li>
            <li>kontroli nad poufnymi informacjami</li>
          </ul>
        </div>
      </div>
      <div class="key-insight">
        <strong>Zasada pracy projektowej:</strong> AI przygotowuje wersję roboczą, a Ty odpowiadasz za dane, ton, zgodność z wymaganiami i finalną decyzję o użyciu tekstu.
      </div>
    </div>

    <div class="lesson-section" id="reporting">
      <h3><span class="ls-icon">📝</span> Opis działania do raportu lub sprawozdania</h3>
      <p>Jednym z najczęstszych zastosowań AI w pracy projektowej jest przygotowanie pierwszej wersji opisu działania. Najlepiej działa tu model, który dostaje fakty, zakres działania i jasny limit długości. Wszystkie brakujące dane warto oznaczać jako pola do uzupełnienia.</p>
      <div class="try-it">
        <div class="try-label">🧪 Zrób to teraz – opis działania projektowego</div>
        <div class="prompt-box" style="position:relative">
          <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
          <button class="prompt-save-btn" onclick="savePromptFromBox(this)">⭐ Zapisz</button>
          <pre>Jestem koordynatorem/ką projektu [TYP PROJEKTU]
pt. "[TYTUŁ]", realizowanego z partnerami z [KRAJE].
W [MIESIĄC ROK] odbyło się [DZIAŁANIE]
z udziałem [OPIS UCZESTNIKÓW].
Tematyka: [TEMAT DZIAŁANIA].

Napisz opis działania (180–220 słów) do sekcji narracyjnej raportu.
Styl: rzeczowy i profesjonalny.
Zaznacz [UZUPEŁNIJ], jeśli brakuje danych liczbowych lub faktów.</pre>
        </div>
        <p><strong>Sprawdź po wygenerowaniu:</strong> czy tekst nie dopowiada nieistniejących efektów, czy długość pasuje do dokumentu i czy wszystkie pola [UZUPEŁNIJ] zostały przez Ciebie uzupełnione ręcznie.</p>
      </div>
    </div>

    <div class="lesson-section" id="partnerzy">
      <h3><span class="ls-icon">📧</span> Korespondencja z partnerami i interesariuszami</h3>
      <p>AI dobrze wspiera pisanie roboczych maili: zmian terminu, potwierdzeń, próśb o informację lub podsumowań ustaleń. To szczególnie przydatne, gdy komunikacja odbywa się po angielsku lub gdy trzeba zachować profesjonalny, ale prosty styl.</p>
      <div class="try-it">
        <div class="try-label">🧪 Zrób to teraz – mail do partnera projektu</div>
        <div class="prompt-box" style="position:relative">
          <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
          <button class="prompt-save-btn" onclick="savePromptFromBox(this)">⭐ Zapisz</button>
          <pre>Działaj jako koordynator projektu piszący do zagranicznego partnera.
Projekt: [NAZWA]
Partner: [KRAJ / INSTYTUCJA]
Temat wiadomości: [NP. zmiana terminu spotkania]
Kluczowe informacje:
- [PUNKT 1]
- [PUNKT 2]
- [PUNKT 3]

Przygotuj mail po angielsku:
Subject + Greeting + Body (maks. 110 słów) + Closing.
Ton: profesjonalny, uprzejmy, prosty dla nienatywnych użytkowników języka.</pre>
        </div>
      </div>
    </div>

    <div class="lesson-section" id="promocja">
      <h3><span class="ls-icon">📣</span> Treści promocyjne i informacyjne</h3>
      <p>Po wydarzeniu projektowym AI może pomóc szybko przygotować krótkie podsumowanie na stronę szkoły, media społecznościowe lub mail informacyjny. Warunkiem jest podanie faktów i jasne rozdzielenie tego, co już się wydarzyło, od tego, co jest planowane.</p>
      <div class="try-it">
        <div class="try-label">🧪 Zrób to teraz – krótka komunikacja o projekcie</div>
        <div class="prompt-box" style="position:relative">
          <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
          <button class="prompt-save-btn" onclick="savePromptFromBox(this)">⭐ Zapisz</button>
          <pre>Działaj jako osoba odpowiedzialna za komunikację projektu edukacyjnego.
Projekt: [NAZWA]
Ostatnie działanie: [OPIS WYDARZENIA]
Najważniejsze fakty: [DATA / MIEJSCE / LICZBA UCZESTNIKÓW / EFEKT]

Przygotuj:
1. Post na Facebook lub Instagram szkoły (maks. 80 słów)
2. Krótki akapit na stronę szkoły (maks. 100 słów)
3. Trzy propozycje tematu maila informacyjnego</pre>
        </div>
      </div>
    </div>

    <div class="lesson-section" id="transparentnosc">
      <h3><span class="ls-icon">⚖️</span> Transparentność i odpowiedzialność w dokumentach projektowych</h3>
      <div class="alert-box">
        <strong>Najważniejsza zasada:</strong> AI może pomóc w przygotowaniu wersji roboczej, ale odpowiedzialność za finalny dokument zawsze ponosi człowiek podpisujący lub wysyłający materiał.
      </div>
      <ol class="rules-list">
        <li><div><strong>Oznaczaj brakujące dane.</strong> Używaj pól typu [UZUPEŁNIJ], zamiast pozwalać AI dopowiadać liczby.</div></li>
        <li><div><strong>Weryfikuj zgodność z wymaganiami programu.</strong> AI nie zastąpi wytycznych instytucji finansującej.</div></li>
        <li><div><strong>Nie wklejaj poufnych załączników do publicznej AI.</strong> Dotyczy to także raportów, budżetów i ocen partnerów.</div></li>
        <li><div><strong>Zachowuj wersję źródłową.</strong> Przed użyciem porównaj tekst AI z notatkami, dokumentem lub ustaleniami zespołu.</div></li>
        <li><div><strong>Traktuj AI jako wsparcie redakcyjne.</strong> Nie jako autora faktów, decyzji i wyników projektu.</div></li>
      </ol>
    </div>

    <div class="lesson-nav">
      <button class="btn-secondary" onclick="showPage('module4')">← Moduł 4</button>
      <div style="display:flex;gap:12px;align-items:center">
        <button id="doneBtn_module5" class="btn-done" onclick="markDone('module5')">✓ Ukończono moduł 5</button>
        <button class="btn-primary" onclick="showPage('module6')">Moduł 6: Zrównoważone AI →</button>
      </div>
    </div>
  </div>
`;

/* ══════════════════════════════════════
   PAGE: MODULE 6
══════════════════════════════════════ */
PAGES.module6 = () => `
  <div class="lesson-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> <span class="bc-sep">›</span> Moduł 6</div>
    <div class="lesson-number">Moduł 6 z 6</div>
    <h2>Zrównoważone AI</h2>
    <div class="lesson-meta">
      <span class="meta-badge">⏱ ok. 15 minut</span>
      <span class="meta-badge">🌱 Energia · woda · infrastruktura · proporcja użycia</span>
      <span class="meta-badge">🤝 1 ćwiczenie grupowe</span>
    </div>
    <p class="lesson-intro">Ten krótki moduł pokazuje, że AI nie działa w abstrakcyjnej "chmurze", tylko na fizycznej infrastrukturze: serwerach, energii elektrycznej i systemach chłodzenia. Celem nie jest zniechęcanie do używania AI, ale bardziej świadome wybieranie sytuacji, w których daje realną wartość.</p>
    <button id="doneBtn_module6" class="mark-done-btn" onclick="markDone('module6')">✓ Oznacz jako ukończony</button>
  </div>

  <div class="lesson-body">
    <div class="learning-goals">
      <h3>📌 Po tym module będziesz wiedzieć:</h3>
      <ul class="lg-list">
        <li>dlaczego działanie AI wiąże się z zużyciem energii i zasobów chłodzenia</li>
        <li>jak czytać liczby dotyczące śladu AI bez nadmiernych uproszczeń</li>
        <li>jak stosować zasadę proporcji: używać AI tam, gdzie daje realny zysk jakości, czasu lub dostępności</li>
      </ul>
    </div>

    <div class="lesson-section" id="infrastruktura">
      <h3><span class="ls-icon">🏗️</span> AI to także infrastruktura</h3>
      <p>Modele AI są trenowane i uruchamiane głównie w centrach danych. To oznacza zużycie energii elektrycznej przez serwery oraz dodatkowe zużycie zasobów przez chłodzenie, sieć i pozostałą infrastrukturę techniczną.</p>

      <div class="info-grid">
        <div class="info-card">
          <h4>⚡ Energia i emisje</h4>
          <p>Według <strong>IEA (2025)</strong> centra danych zużyły ok. <strong>415 TWh</strong> energii elektrycznej w 2024 r., a w scenariuszu bazowym mogą dojść do ok. <strong>945 TWh</strong> w 2030 r. Jednym z powodów wzrostu jest szybsze wdrażanie serwerów przyspieszonych przez AI.</p>
          <p style="margin-top:8px">W opracowaniu porównawczym dla dużych modeli oszacowano też trening <strong>GPT-3</strong> na ok. <strong>552 tCO2e</strong> przy uwzględnieniu narzutu centrum danych (<span translate="no" class="notranslate">PUE</span>). To przykład pokazujący skalę, nie uniwersalny wynik dla każdego modelu.</p>
        </div>
        <div class="info-card">
          <h4>💧 Woda i chłodzenie</h4>
          <p>Badanie <strong>Li et al.</strong> dotyczące śladu wodnego AI szacuje, że trening <strong>GPT-3</strong> mógł zużyć ok. <strong>700 000 litrów</strong> wody na miejscu w centrum danych, a łącznie ok. <strong>5,4 mln litrów</strong>, jeśli doliczyć także wodę zużytą pośrednio przy produkcji energii.</p>
          <p style="margin-top:8px">Autorzy podają też ilustracyjny szacunek: ok. <strong>500 ml wody</strong> na mniej więcej <strong>10-50 odpowiedzi</strong>, zależnie od miejsca i czasu działania modelu. To przybliżenie z konkretnego badania, a nie stały licznik dla każdego czatu.</p>
        </div>
      </div>

      <div class="key-insight">
        <strong>Najważniejsze doprecyzowanie:</strong> ślad środowiskowy AI nie jest jedną stałą liczbą. Zależy od modelu, długości promptu i odpowiedzi, liczby iteracji, miksu energetycznego, lokalizacji centrum danych i sposobu chłodzenia.
      </div>
    </div>
    
    <div class="lesson-section" id="metryki">
      <h3><span class="ls-icon">📏</span> Jak czytać te liczby bez uproszczeń?</h3>
      <p>Największy błąd w rozmowie o zrównoważonym AI polega na traktowaniu jednego wyniku jako uniwersalnej normy. W praktyce różnica między użyciem krótkiego modelu tekstowego a wielokrotnym generowaniem obrazów lub analizą bardzo dużych plików może być znacząca.</p>

      <div class="info-grid">
        <div class="info-card">
          <h4>Co zwykle zwiększa ślad?</h4>
          <ul>
            <li>większy model i dłuższa odpowiedź</li>
            <li>wiele kolejnych iteracji bez wyraźnego celu</li>
            <li>bardziej złożone zadanie wymagające większej liczby obliczeń</li>
            <li>infrastruktura oparta na bardziej emisyjnym miksie energii</li>
          </ul>
        </div>
        <div class="info-card">
          <h4>Co warto z tego wyciągnąć praktycznie?</h4>
          <ul>
            <li>zacznij od prostszego narzędzia i krótszego polecenia</li>
            <li>łącz poprawki w jedną sensowną iterację zamiast wielu drobnych</li>
            <li>używaj AI wtedy, gdy faktycznie skraca pracę lub podnosi jakość</li>
            <li>przy ważnych materiałach planuj pracę tak, by nie generować wielu zbędnych wersji</li>
          </ul>
        </div>
      </div>

      <p style="font-size:12.5px;color:var(--clr-text-muted)">Źródła dla tej sekcji: IEA, <em>Energy and AI</em> (2025); Li et al., <em>Making AI Less "Thirsty"</em> (wersja z 2025 r.); Luccioni et al., <em>Estimating the Carbon Footprint of BLOOM</em> (2022).</p>
    </div>

    <div class="lesson-section" id="proporcja">
      <h3><span class="ls-icon">⚖️</span> Zasada proporcji w codziennej pracy</h3>
      <p>Z perspektywy użytkownika najrozsądniejsze pytanie brzmi nie "czy używać AI w ogóle?", ale <strong>kiedy użycie AI jest uzasadnione</strong>. Jeśli narzędzie oszczędza realny czas, poprawia dostępność materiałów albo podnosi jakość pracy, jego użycie ma większy sens niż wtedy, gdy generuje kolejne wersje bez wyraźnej potrzeby.</p>
      
      <div class="slide-two-col" style="margin-top:20px;">
        <div class="slide-col-card sc-green">
          <h4>Użycie o wyraźnej wartości</h4>
          <p style="font-size:14px">Przygotowujesz wariant materiału bardziej dostępny dla ucznia, porządkujesz długi protokół, skracasz czas pisania raportu albo tworzysz roboczą odpowiedź do partnera projektu. AI pomaga osiągnąć konkretny efekt w krótszym czasie.</p>
        </div>
        <div class="slide-col-card sc-red">
          <h4>Użycie o niskiej wartości</h4>
          <p style="font-size:14px">Tworzysz wiele niemal identycznych wersji tylko po to, by "jeszcze coś sprawdzić", generujesz kolejne obrazy bez celu albo zlecasz AI zadanie, które szybciej wykonał(a)byś ręcznie prostą edycją już gotowego tekstu.</p>
        </div>
      </div>

      <div class="alert-box" style="margin-top:20px">
        <strong>Wniosek praktyczny:</strong> zrównoważone użycie AI polega na wybieraniu takich zastosowań, w których narzędzie daje wyraźny zysk merytoryczny, organizacyjny lub dostępnościowy. Nie chodzi o zakaz, tylko o lepszą decyzję, kiedy warto po nie sięgnąć.
      </div>
    </div>

    <div class="lesson-section" id="mini-codeks">
      <h3><span class="ls-icon">🧭</span> Ćwiczenie grupowe – Mini-kodeks odpowiedzialnego używania AI</h3>
      <p>Świadome używanie AI nie kończy się na pojedynczej decyzji. W praktyce zespół potrzebuje kilku prostych zasad: kiedy AI wolno użyć, czego nie wolno wklejać, co trzeba oznaczyć i co musi sprawdzić człowiek przed użyciem wyniku.</p>

      <table class="data-table">
        <thead><tr><th>Rola</th><th>Za co odpowiada</th></tr></thead>
        <tbody>
          <tr><td>Osoba 1 – właściciel kontekstu</td><td>wybiera środowisko pracy: szkoła, zespół projektowy, administracja albo biuro</td></tr>
          <tr><td>Osoba 2 – analityk ryzyk</td><td>wskazuje sytuacje ryzykowne: dane osobowe, błędy, stronniczość, prawa autorskie</td></tr>
          <tr><td>Osoba 3 – redaktor zasad</td><td>zamienia ustalenia zespołu w krótki i jasny mini-kodeks</td></tr>
        </tbody>
      </table>

      <div class="try-it">
        <div class="try-label">🧪 Zbudujcie kodeks na 1 stronę</div>
        <p><strong>Sytuacja:</strong> Wasz zespół chce korzystać z AI, ale potrzebuje prostych zasad, które da się zastosować od jutra w codziennej pracy.</p>
        <ol>
          <li>Wybierzcie jeden kontekst: szkoła, dział administracyjny, projekt UE, zespół nauczycieli albo organizacja.</li>
          <li>Wypiszcie 5–7 sytuacji, w których ktoś może chcieć użyć AI.</li>
          <li>Przy każdej sytuacji dopiszcie decyzję: wolno, wolno warunkowo, nie używamy.</li>
          <li>Ustalcie obowiązkowe zabezpieczenia: anonimizacja, weryfikacja faktów, oznaczanie użycia AI, odpowiedzialność człowieka.</li>
          <li>Na końcu przygotujcie mini-kodeks, który zmieści się na jednej stronie.</li>
        </ol>
        <p><strong>Produkt końcowy:</strong> praktyczny mini-kodeks odpowiedzialnego używania AI dla wybranego zespołu.</p>
        <p>Pełna wersja zadania jest w <a href="#" onclick="showPage('exercises','ex18')" style="color:var(--clr-primary)">Ćwiczeniu #18 – Mini-kodeks odpowiedzialnego używania AI</a>.</p>
      </div>

      <div class="reflection-box">
        <div class="rb-label">Sprawdźcie swój kodeks</div>
        <ul>
          <li>Czy z zasad wynika jasno, co wolno, czego nie wolno i co wymaga dodatkowej zgody lub sprawdzenia?</li>
          <li>Czy kodeks da się zastosować w praktyce także przez osobę początkującą?</li>
          <li>Która zasada najbardziej ogranicza ryzyko błędu lub nadużycia?</li>
        </ul>
      </div>
    </div>

    <div class="lesson-nav">
      <button class="btn-secondary" onclick="showPage('module5')">← Moduł 5</button>
      <div style="display:flex;gap:12px;align-items:center">
        <button id="doneBtn_module6" class="btn-done" onclick="markDone('module6')">✓ Ukończono moduł 6</button>
        <button class="btn-primary" onclick="showPage('myplan')">Mój plan wdrożenia →</button>
      </div>
    </div>
  </div>
`;
