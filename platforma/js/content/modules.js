PAGES.module1 = () => `
  <div class="lesson-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> <span class="bc-sep">›</span> Moduł 1</div>
    <div class="lesson-number">Moduł 1 z 4</div>
    <h2>Czym jest AI i co zmienia w Twojej pracy?</h2>
    <div class="lesson-meta">
      <span class="meta-badge">⏱ ok. 30 minut</span>
      <span class="meta-badge">🎯 Podstawy AI · Halucynacje · Pierwsze użycie</span>
      <span class="meta-badge">📈 Poziom: podstawowy</span>
    </div>
    <p class="lesson-intro">W tym module dowiesz się, czym naprawdę jest AI językowa i dlaczego może się mylić. Otworzysz narzędzie i wygenerujesz swój pierwszy wynik – zanim przejdziesz do nauki promptowania.</p>
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
      <p>Narzędzia AI, z których korzystamy w tej platformie (<span translate="no" class="notranslate">ChatGPT</span>, <span translate="no" class="notranslate">Gemini</span>, <span translate="no" class="notranslate">Claude</span>), to tzw. <strong>duże modele językowe</strong> (<span translate="no" class="notranslate">Large Language Models, LLM</span>). Działają według prostej zasady:</p>
      <div class="key-insight">
        <strong>Kluczowa zasada:</strong> AI nie wie co jest prawdą. Ona <em>przewiduje</em>, jakie słowo powinno pojawić się po poprzednim. Jest jak bardzo zaawansowane autouzupełnianie – trenowane na miliardach tekstów z internetu.
      </div>
      <div class="key-insight">
        <strong>Pułapka okna kontekstowego (<span translate="no" class="notranslate">Context Window</span>):</strong> Wklejając raport liczący 10 tys. słów, wrzucasz go do pamięci roboczej modelu – tzw. okna kontekstowego. Kiedy to okno się przepełnia, mechanizm tzw. <em><span translate="no" class="notranslate">Attention</span></em> zaczyna „zapominać” to co było w środku dokumentu, skupiając się tylko na początku (nagłówek) i końcu (ostatnie pytania). Do skontrowania tego zjawiska w projektach używamy piaskownic <span translate="no" class="notranslate">RAG</span>.
      </div>
      <p>AI nie posiada "bazy wiedzy" ani "wyszukiwarki faktów". To matematyczny model języka.</p>
      
      <div class="info-grid">
        <div class="info-card">
          <h4>🧩 Tokeny zamiast liter</h4>
          <p>Model (np. <span translate="no" class="notranslate">ChatGPT</span>, <span translate="no" class="notranslate">Gemini</span>) „nie czyta” liter. Tekst jest dzielony na skrawki zwane <strong>Tokenami</strong> (ok. 3-4 litery to jeden token). Model przetwarza wektory powiązań między nimi (tzw. <em><span translate="no" class="notranslate">embeddings</span></em>). Rozumie, że token [KING] ma podobną odległość do [MAN], jak [QUEEN] do [WOMAN]. Dlatego AI jest wybitna w sprytnym parafrazowaniu, ale nie w podawaniu twardych statystyk.</p>
        </div>
        <div class="info-card">
          <h4>🌡️ Temperatura (<span translate="no" class="notranslate">Temperature</span>)</h4>
          <p>Pod spodem AI używa <strong>parametru Temperatury</strong> (zwykle od 0.0 do 1.0), decydującego jak "kreatywnie" ma wybierać kolejny token. Jeśli powiesz "Kawa jest...", przy niskiej temperaturze zawsze powie "...gorąca". Przy wysokiej może powiedzieć "...magicznym napojem". Systemy publiczne mają ustawioną umiarkowaną temperaturę – wystarczającą by brzmieć zgrabnie, ale niebezpieczną gdy szukasz bezwzględnych faktów (wymagających Temp = 0).</p>
        </div>
      </div>
    </div>

    <div class="lesson-section" id="halucynacje">
      <h3><span class="ls-icon">⚠️</span> Halucynacje – kiedy AI generuje fikcję</h3>
      <p>Gdy AI generuje nieprawdziwe informacje (np. nieistniejące fakty, błędne daty, zmyślone przepisy prawne), mówimy o <strong>halucynacjach</strong>. Model może wygenerować fikcyjne informacje – nie rozumie faktów i nie potrafi powiedzieć „nie wiem”.</p>
      <div class="info-grid">
        <div class="info-card">
          <h4>Kiedy AI może halucynować?</h4>
          <ul>
            <li>Gdy pytasz o konkretne fakty, daty, liczby</li>
            <li>Gdy prosisz o cytaty z dokumentów lub prawa</li>
            <li>Gdy piszesz o specyficznych, lokalnych wydarzeniach</li>
            <li>Gdy AI nie ma w swojej bazie odpowiedniej wiedzy</li>
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
        <p><strong>Co zaobserwujesz:</strong> AI najprawdopodobniej wygeneruje przekonująco brzmiący, bardzo prawniczy cytat przepisu, który… absolutnie nie istnieje. Sprawdź go w europejskiej bazie prawa <strong>EUR-Lex</strong> (eur-lex.europa.eu). Nie znajdziesz go tam. To jest halucynacja (model "zgadł" brzmienie prawne bez dostępu do bazy).</p>
        <div class="tip-box" style="margin-top:12px"><strong>Wniosek:</strong> Wyjaśnione wcześniej zjawisko "prawdopodobieństwa tokenów" powoduje, że model potrafi wytworzyć bardzo wiarygodną fikcję literacką, łudząco przypominającą akt prawny. Weryfikuj wszystko w bazach nadrzędnych.</div>
      </div>
    </div>

    <div class="lesson-section">
      <h3><span class="ls-icon">📊</span> Dlaczego warto – dane z badań</h3>
      <div class="stats-row">
        <div class="stat-item"><div class="stat-num">5,9h</div><div class="stat-label">oszczędności tygodniowo dla regularnych użytkowników AI (Gallup 2025)</div></div>
        <div class="stat-item"><div class="stat-num">29%</div><div class="stat-label">nauczycieli zgłasza potrzebę szkoleń z AI (OECD TALIS 2024)</div></div>
        <div class="stat-item"><div class="stat-num">74%</div><div class="stat-label">nauczycieli uważa, że AI poprawiła jakość pracy administracyjnej (European School Education Platform 2024)</div></div>
      </div>
      <p>Nauczyciele, którzy regularnie korzystają z AI, oszczędzają prawie godzinę dziennie. Nie dlatego, że AI robi za nich wszystko – ale dlatego, że skraca czas wykonywania zadań powtarzalnych: pisania maili, tworzenia checklisty, redagowania tekstów. Dane o oszczędności czasu pochodzą z raportu Gallup / Walton Family Foundation (2025).</p>
    </div>

    <div class="lesson-section">
      <h3><span class="ls-icon">⌨️</span> Otwórz narzędzie AI – teraz</h3>
      <p>Zanim przejdziesz do nauki promptowania, otwórz jedno z poniższych narzędzi. Wszystkie mają bezpłatny plan dostępny bez karty kredytowej:</p>
      <div class="info-grid">
        <div class="info-card">
          <h4>ChatGPT – openai.com</h4>
          <ul>
            <li>Rejestracja emailem lub kontem Google</li>
            <li>Darmowy plan: GPT-4o mini (wystarczy do kursu)</li>
            <li>👉 chat.openai.com</li>
          </ul>
        </div>
        <div class="info-card">
          <h4>Gemini – google.com</h4>
          <ul>
            <li>Wymagane konto Google (pewnie już masz)</li>
            <li>Darmowy plan: Gemini 1.5 Flash</li>
            <li>👉 gemini.google.com</li>
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
        <button class="btn-primary" onclick="showPage('module2')">Moduł 2: Prompting PARTS →</button>
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
    <div class="lesson-number">Moduł 2 z 4</div>
    <h2>Prompting – jak pisać do AI, żeby dostawać dobre wyniki</h2>
    <div class="lesson-meta">
      <span class="meta-badge">⏱ ok. 35 minut</span>
      <span class="meta-badge">🎯 Framework <span translate="no" class="notranslate">PARTS</span> · Ćwiczenia poprawy promptów</span>
      <span class="meta-badge">📝 2 ćwiczenia praktyczne</span>
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
            <li>Prompt 1: Wygeneruj konspekt lekcji o fotosyntzie (klasa 7)</li>
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
    <div class="lesson-number">Moduł 3 z 4</div>
    <h2>AI w codziennej pracy nauczyciela</h2>
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
        <p>Po otrzymaniu wynikub napisz kolejny prompt: <em>„Teraz napisz wersję fragmentu [X] dostosowaną dla ucznia z dysleksją lub trudnościami w nauce."</em></p>
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

    <div class="lesson-section" id="overload">
      <h3><span class="ls-icon">🧠</span> Zarządzanie przeciążeniem informacyjnym</h3>
      <p>Osoby pracujące projektowo lub na styku wielu działów (kadra kierownicza, koordynatorzy, pedagodzy) często toną w szumie informacyjnym – długich mailach, wielowątkowych konwersacjach w komunikatorach i wielostronicowych załącznikach.</p>

      <div class="info-grid">
        <div class="info-card">
          <h4>Tradycyjnie (Czytanie liniowe)</h4>
          <ul>
            <li>Czytasz wszystkie maile po kolei</li>
            <li>Szukasz w tekście, co tyczy się Ciebie</li>
            <li>Ręcznie budujesz listę zadań na kartce</li>
            <li>Irytujesz się na brak konkretów</li>
          </ul>
        </div>
        <div class="info-card">
          <h4>Podejście z AI (Separacja sygnału z szumu)</h4>
          <ul>
            <li>Kopiujesz cały długi wątek bez czytania</li>
            <li>Wklejasz do AI (bez danych osobowych!)</li>
            <li>AI wyciąga tylko decyzje i zadania dla Ciebie</li>
            <li>Oszczędzasz min. 10 minut na każdym wątku</li>
          </ul>
        </div>
      </div>

      <div class="key-insight">
        <strong>Metoda 3 pytań (Uporządkuj długi wątek):</strong> Zamiast "streść ten tekst", pytaj zawsze o wyciągnięcie gotowych danych. Zapytaj: 1) O czym to jest w 3 zdaniach? 2) Co ja muszę z tym zrobić i na kiedy? 3) Jakie ważne decyzje tu zapadły? (SPE = specjalne potrzeby edukacyjne).
      </div>
      
      <div class="try-it">
        <div class="try-label">🧪 Zrób to teraz – "Uporządkuj długi wątek"</div>
        <p>Wklej do AI poniższy prompt (najlepiej podpinając pod niego faktycznie długą, zagmatwaną konwersację mailową, pismo z urzędu lub protokół z posiedzenia):</p>
        <div class="prompt-box" style="position:relative">
          <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
          <button class="prompt-save-btn" onclick="savePromptFromBox(this)">⭐ Zapisz</button>
          <pre>Przeanalizuj poniższy chaotyczny tekst/wątek.
Oddziel szum informacyjny od konkretów. Daj mi:
1. Zbiór ustalonych DECYZJI (lista)
2. Zbiór ZADAŃ DO WYKONANIA wraz z osobą przypisaną (tabela)
3. Główny problem do rozwiązania, wokół którego toczy się wymiana zdań
Tekst: [WKLEJ]</pre>
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
    <div class="lesson-number">Moduł 4 z 4</div>
    <h2>AI w projektach UE i etyczne granice</h2>
    <div class="lesson-meta">
      <span class="meta-badge">⏱ ok. 35 minut</span>
      <span class="meta-badge">🎯 Erasmus+ · RODO · Zasady etyczne · Plan wdrożenia</span>
    </div>
    <p class="lesson-intro">Ostatni moduł kursu. Dowiesz się, jak bezpiecznie używać AI przy projektach unijnych, jakich błędów unikać i jak zbudować własny plan wdrożenia AI w codziennej pracy.</p>
    <button id="doneBtn_module4" class="mark-done-btn" onclick="markDone('module4')">✓ Oznacz jako ukończony</button>
  </div>

  <div class="lesson-body">
    <div class="learning-goals">
      <h3>📌 Po tym module będziesz umieć:</h3>
      <ul class="lg-list">
        <li>wskazać, do czego możesz, a do czego nie powinieneś/powinnaś używać AI w projektach UE</li>
        <li>rozumieć różnicę między publicznym <span translate="no" class="notranslate">LLM</span> (np. <span translate="no" class="notranslate">ChatGPT</span>) a "zamkniętą piaskownicą" (np. <span translate="no" class="notranslate">NotebookLM</span>)</li>
        <li>stosować zasadę transparentności wymaganą przez Komisję Europejską</li>
        <li>unikać naruszeń RODO i wycieku know-how z projektów</li>
        <li>stworzyć swój osobisty plan wdrożenia AI</li>
      </ul>
    </div>

    <div class="lesson-section" id="projekty">
      <h3><span class="ls-icon">🌍</span> AI w projektach Erasmus+ i WIN4SMEs</h3>
      <p>AI jest świetnym narzędziem do redagowania tekstów projektowych – ale ma wyraźne granice, których przekraczanie może skutkować problemami z grantem.</p>

      <div class="info-grid">
        <div class="info-card">
          <h4>✅ AI może pomóc Ci w:</h4>
          <ul>
            <li>Szkicowaniu opisów działań do raportów narracyjnych</li>
            <li>Streszczaniu raportów od partnerów</li>
            <li>Tłumaczeniu korespondencji</li>
            <li>Przygotowaniu agendy spotkania partnerskiego</li>
            <li>Newsletterach i komunikatach projektowych</li>
            <li>Redagowaniu korespondencji w języku angielskim</li>
          </ul>
        </div>
        <div class="info-card">
          <h4>❌ AI NIE zastąpi Twojej:</h4>
          <ul>
            <li>Odpowiedzialności za raport (podpisujesz Ty)</li>
            <li>Wiedzy o konkretnych danych projektu</li>
            <li>Weryfikacji wymagań formalnych grantu</li>
            <li>Znajomości faktycznych wydarzeń i wyników</li>
            <li>Decyzji merytorycznych o kształcie sprawozdania</li>
          </ul>
        </div>
      </div>

      <div class="key-insight">
        <strong>Zasada transparentności KE:</strong> Komisja Europejska i instytucje grantowe (FRSE) wymagają, aby użycie AI w dokumentach projektowych było zaznaczone i wyjaśnione (Wytyczne KE 2024). Zaznaczaj zawsze, gdzie AI pomagała – zostajesz w pełni odpowiedzialny/a za treść.
      </div>

      <div class="try-it">
        <div class="try-label">🧪 Ćwiczenie – szkic opisu działania projektowego</div>
        <p>Wpisz poniższy prompt (zastępując nawiasy danymi Twojego projektu lub wymieś fikcyjny Erasmus+):</p>
        <div class="prompt-box" style="position:relative">
          <button class="prompt-copy-btn" onclick="copyPrompt(this)">Kopiuj</button>
          <button class="prompt-save-btn" onclick="savePromptFromBox(this)">⭐ Zapisz</button>
          <pre>Jestem koordynatorem/ką projektu [TYP: Erasmus+/WIN4SMEs]
pt. "[TYTUŁ]", realizowanego z partnerami z [KRAJE].
W [MIESIĄC ROK] odbyło się [DZIAŁANIE: szkolenie/mobilność/warsztaty]
z udziałem [OPIS: X nauczycieli z X krajów].
Tematyka: [TEMAT DZIAŁANIA].

Napisz opis działania (180–220 słów) do sekcji narracyjnej raportu.
Styl: rzeczowy, profesjonalny, podkreślający wartość dodaną.
Zaznacz [UZUPEŁNIJ] wszędzie, gdzie potrzebne są konkretne dane.</pre>
        </div>
        <p><strong>Po otrzymaniu wyniku sprawdź:</strong> Co AI „zmyśliła lub przesadziła"? Ile miejsc oznacza [UZUPEŁNIJ]? Czy ton pasuje do raportów UE?</p>
        <div class="tip-box" style="margin-top:10px">Uczestnik projektu WIN4SMEs może użyć faktycznych danych tego szkolenia jako podstawy.</div>
      </div>
    </div>

    <div class="lesson-section" id="sandbox">
      <h3><span class="ls-icon">📦</span> Zamknięte piaskownice – eliminacja halucynacji (NotebookLM)</h3>
      <p>Kiedy pracujesz z długimi dokumentami projektowymi (np. przewodnik po programie Erasmus+ liczący 300 stron, procedury, zasady ewaluacji), <strong>otwarte modele jak ChatGPT często gubią informacje</strong> lub zmyślają klauzule, których nie było w tekście.</p>

      <div class="info-grid">
        <div class="info-card">
          <h4>Klasyczne AI (ChatGPT)</h4>
          <ul>
            <li>Wgrywasz plik do wspólnego kontekstu</li>
            <li>Gdy dokument jest za długi, "zapomina" środek</li>
            <li>Miesza treść dokumentu z własną wiedzą z internetu</li>
            <li>Halucynuje ("zmyśla") przepisy i zapisy</li>
          </ul>
        </div>
        <div class="info-card">
          <h4>Piaskownice RAG (np. NotebookLM)</h4>
          <ul>
            <li>Budujesz lokalną bazę z max. 50 dokumentów</li>
            <li>AI ma "zakaz" korzystania z wiedzy z internetu</li>
            <li>Odpowiada <strong>tylko</strong> na podstawie Twoich plików</li>
            <li>Do każdej odpowiedzi dodaje <strong>przypis (strona pliku)</strong></li>
          </ul>
        </div>
      </div>

      <div class="key-insight">
        <strong>NotebookLM by Google (notebooklm.google):</strong> To darmowe narzędzie klasy RAG (Retrieval-Augmented Generation). Idealne dla Project Managerów. Ładujesz tam PDFy, wnioski, notatki, a ono staje się "ekspertem od tego konkretnego projektu". Szanse na halucynacje są bliskie zera.
      </div>
    </div>

    <div class="lesson-section" id="rodo">
      <h3><span class="ls-icon">🔒</span> RODO i ochrona danych – trzy zasady absolutne</h3>
      <div class="alert-box">
        <strong>🔴 Trzy absolutne zakazy:</strong><br>
        1. Żadnych imion i nazwisk uczniów ani pracowników w publicznej AI<br>
        2. Żadnych danych wrażliwych (oceny, zdrowie, sytuacja rodzinna) bez anonimizacji<br>
        3. Żadnych poufnych dokumentów szkoły lub projektu bez sprawdzenia polityki narzędzia
      </div>
      <p><strong>Prosta zasada:</strong> Jeśli dokumentu nie możesz opublikować na stronie szkoły – nie wklejaj go do publicznej AI.</p>
      <p><strong>Jak anonimizować?</strong> Zamiast „Jan Kowalski, uczeń klasy 7b" napisz „Uczeń A, klasa 7". Zamiast ocen konkretnych uczniów – „rozkład procentowy klasy".</p>
    </div>

    <div class="lesson-section">
      <h3><span class="ls-icon">🧩</span> Przeanalizuj te sytuacje – co jest nie tak?</h3>
      <p>Kliknij każdy scenariusz, żeby zobaczyć analizę.</p>

      <div class="scenario-card" onclick="toggleScenario(this)">
        <div class="scenario-hdr">
          <h4>⚠️ Scenariusz 1 – RODO i AI</h4>
          <span class="scenario-arrow">▾</span>
        </div>
        <div class="scenario-body">
          <p><em>„Nauczyciel wkleił do ChatGPT imiona i oceny 30 uczniów z wynikami sprawdzianu i poprosił o analizę postępów klasy."</em></p>
          <p><strong>Co jest nie tak?</strong> Imiona + oceny = dane osobowe dzieci. ChatGPT to zewnętrzny serwer, potencjalnie poza UE. Brak zgody rodziców na przetwarzanie przez trzecią stronę. Naruszenie RODO – odpowiedzialność spoczywa na nauczycielu i szkole.</p>
          <div class="tip-box"><strong>Jak powinno być:</strong> Wklej anonimowe dane statystyczne – np. „25% uczniów poniżej 50%, 40% w przedziale 50–75%, 35% powyżej 75%".</div>
        </div>
      </div>

      <div class="scenario-card" onclick="toggleScenario(this)">
        <div class="scenario-hdr">
          <h4>⚠️ Scenariusz 2 – Cytat przepisu prawnego od AI</h4>
          <span class="scenario-arrow">▾</span>
        </div>
        <div class="scenario-body">
          <p><em>„AI podała wytyczne Komisji Europejskiej zakazujące określonej formy przetwarzania danych ucznia. Nauczyciel wrzucił to bezpośrednio w odpowiedź do partnera zagranicznego."</em></p>
          <p><strong>Co jest nie tak?</strong> AI mogła zmyślić ten przepis (halucynacja). Tekst pisma brzmiał wiarygodnie, ale nie istniał. Prowadzący nie sprawdził w EUR-lex ani w oficjalnych dokumentach.</p>
          <div class="tip-box"><strong>Zasada:</strong> Fakty, daty, przepisy, cytaty → zawsze weryfikuj w oficjalnych źródłach. AI jest asystentem stylistycznym, nie bazą prawa.</div>
        </div>
      </div>

      <div class="scenario-card" onclick="toggleScenario(this)">
        <div class="scenario-hdr">
          <h4>⚠️ Scenariusz 3 – Poufny raport audytu</h4>
          <span class="scenario-arrow">▾</span>
        </div>
        <div class="scenario-body">
          <p><em>„Koordynatorka projektu wkleiła do AI treść poufnego raportu z audytu partnera projektu, żeby stworzyć streszczenie na spotkanie."</em></p>
          <p><strong>Co jest nie tak?</strong> Naruszenie klauzuli poufności umowy partnerskiej. Dane komercyjne partnera wysłane na zewnętrzny serwer bez jego zgody. Potencjalne konsekwencje prawne i ryzyko utraty zaufania partnerów.</p>
          <div class="tip-box"><strong>Zasada:</strong> Dokumenty oznaczone jako poufne – nie trafiają do publicznej AI. Możesz zapytać AI o strukturę streszczenia, a poufne dane uzupełnić ręcznie.</div>
        </div>
      </div>
    </div>

    <div class="lesson-section" id="zasady10">
      <h3><span class="ls-icon">⚖️</span> 10 zasad odpowiedzialnego użycia AI w szkole</h3>
      <ol class="rules-list">
        <li><div><strong>AI to narzędzie, nie wyrocznia.</strong> Każdy wynik traktuj jako szkic do weryfikacji, nie gotowy dokument.</div></li>
        <li><div><strong>Odpowiadasz Ty – zawsze.</strong> Niezależnie od tego, czy AI pisała 10% czy 90% tekstu.</div></li>
        <li><div><strong>Dane uczniów zostają w szkole.</strong> Żadnych imion, ocen, danych wrażliwych w narzędziach zewnętrznych.</div></li>
        <li><div><strong>Fakty, przepisy, daty – sprawdzaj.</strong> AI pisze płynnie i pewnie nawet gdy kłamie.</div></li>
        <li><div><strong>Bądź transparentny/a wobec uczniów.</strong> Kiedy AI pomaga w tworzeniu materiałów – powiedz o tym uczniom.</div></li>
        <li><div><strong>Zaznaczaj AI w dokumentach projektowych.</strong> KE i FRSE wymagają przejrzystości w tej kwestii.</div></li>
        <li><div><strong>Ocena i wychowanie – to Twoja rola.</strong> AI nie zna Twoich uczniów i nie może podejmować decyzji pedagogicznych.</div></li>
        <li><div><strong>Buduj własne kompetencje.</strong> AI nie zastąpi Twojej wiedzy przedmiotowej – używaj jej do pracy rutynowej.</div></li>
        <li><div><strong>Iteruj, nie kopiuj.</strong> Pracuj z AI w dialogu – poprawiaj wyniki, zamiast używać pierwszej odpowiedzi wprost.</div></li>
        <li><div><strong>Gdy wątpliwości – pytaj.</strong> Dyrekcja, IOD, polityka szkoły – wspólne zasady chronią wszystkich.</div></li>
      </ol>
    </div>

    <div class="lesson-nav">
      <button class="btn-secondary" onclick="showPage('module3')">← Moduł 3</button>
      <div style="display:flex;gap:12px;align-items:center">
        <button id="doneBtn_module4" class="btn-done" onclick="markDone('module4')">✓ Ukończono moduł 4</button>
        <button class="btn-primary" onclick="showPage('module5')">Moduł 5 →</button>
      </div>
    </div>
  </div>
`;

/* ══════════════════════════════════════
   PAGE: MODULE 5 (ŚLAD WĘGLOWY I WODNY)
══════════════════════════════════════ */
PAGES.module5 = () => `
  <div class="lesson-header">
    <div class="breadcrumb"><a href="#" onclick="showPage('home')">🏠 Start</a> <span class="bc-sep">›</span> Moduł 5</div>
    <div class="lesson-number">Moduł 5 z 5</div>
    <h2>Zrównoważone Zarządzanie AI (Ekologia)</h2>
    <div class="lesson-meta">
      <span class="meta-badge">⏱ ok. 15 minut</span>
      <span class="meta-badge">🌱 Ślad węglowy · Ślad wodny · Etyka kosztów</span>
    </div>
    <p class="lesson-intro">Ten krótki i w pełni teoretyczny moduł uświadamia nam, że działanie potężnych algorytmów ma swoją mierzalną, fizyczną cenę w realnym świecie.</p>
    <button id="doneBtn_module5" class="mark-done-btn" onclick="markDone('module5')">✓ Oznacz jako ukończony</button>
  </div>

  <div class="lesson-body">
    <div class="learning-goals">
      <h3>📌 Po tym module będziesz wiedzieć:</h3>
      <ul class="lg-list">
        <li>jak potężny ślad wodny i węglowy zostawia trenowanie komputerów z AI</li>
        <li>dlaczego "wygenerowanie dla zabawy śmiesznego kotka" nie jest bezkosztowe dla planety</li>
        <li>jak stosować zasadę racjonalności w pracy dydaktycznej</li>
      </ul>
    </div>

    <div class="lesson-section">
      <h3><span class="ls-icon">💧</span> Gdzie Sztuczna Inteligencja "wypija" nam wodę?</h3>
      <p>Sieci neuronowe pracują na sprzęcie komputerowym (układach GPU) emitującym niezwykle wysoką temperaturę. Ich praca, by mogła trwać 24 godziny na dobę, wymaga potężnego natężenia chłodzenia generowanego z wyparowywania milionów hektolitrów wody rocznie.</p>

      <div class="info-grid">
        <div class="info-card">
          <h4>Trening jednego modelu</h4>
          <p>Samo ubiegłoroczne stworzenie i zasilanie maszyny "GPT-3" zużyło udokumentowane <strong>700 000 litrów słodkiej wody</strong> dla procesów chłodzenia elektroniki. Nowsze modele na ten sam proces potrzebują w wariancie krytycznym setek milionów galonów.</p>
        </div>
        <div class="info-card">
          <h4>Codzienna rozmowa</h4>
          <p>Analitycy rynkowi MIT wskazują, że standardowa, wnikliwa burza mózgów z czatem nauczyciela (zestaw od 10 do 50 dłuższych analiz), potrafi obciążyć lokalne rezerwuary o kolejne, parujące <strong>0,5 litra świeżej wody</strong> (porcja wielkości standardowej butelki napoju per chat).</p>
        </div>
      </div>
    </div>
    
    <div class="lesson-section">
      <h3><span class="ls-icon">⚡</span> Emisja gazów cieplarnianych (Ślad Węglowy)</h3>
      <p>Skonstruowanie takiego modelu do stanu gotowości, by umiał odpowiadać sensownie, pociągnęło za sobą wygenerowanie w samym tylko GPT-3 śladu bliskiego <strong>550 ton emisji CO₂</strong>. To ubytek nieodwracalny, a nowe środowiska skalowane logarytmicznie żądają setek tysięcy megawatogodzin (MWh). Dane o zużyciu wody (0,5 l na sesję) pochodzą z badań University of California Riverside (2023).</p>
      <div class="key-insight">
        Z raportów środowiskowych wyłania się czarny scenariusz: do końca dekady chmura obliczeniowa AI najprawdopodobniej podniesie tak samo globalne słupki zanieczyszczeń jakbyśmy jako cywilizacja dołączyli do siatki <strong>dodatkowe dwa państwa wielkości Holandii</strong>.
      </div>
    </div>

    <div class="lesson-section">
      <h3><span class="ls-icon">⚖️</span> Rachunek Etycznego Zysku – Zasada Proporcji</h3>
      <p>System ten istnieje po to by pożerać wady w Twojej pracy. Znając te dramatyczne wyliczenia środowiskowe, powinieneś unikać używania go jako głupiej, taniej zabawki. Spójrz na dwa światy:</p>
      
      <div class="slide-two-col" style="margin-top:20px;">
        <div class="slide-col-card sc-green">
          <h4>Skoncentrowana Etyka (Korzystna transakcja)</h4>
          <p style="font-size:14px">Wydajesz prompt PARTS i polecasz przygotowanie tabeli do RODO i dostosowanie jej do wymogów autyzmu Twojego ucznia. Model spala Twoje pół litra wody, ale... <strong>zyskuje Ci Twoje prawdziwe, ludzkie 3-4 godziny życia</strong>. Ten model ratuje Ci zdrowie w słusznym celu środowiska wymiany za zyski Twojego czasu.</p>
        </div>
        <div class="slide-col-card sc-red">
          <h4>Nieracjonalne użycie (Zbyteczna emisja)</h4>
          <p style="font-size:14px">Zlecasz trzykrotne przebudowanie zaawansowanej grafiki "góry lodowej na pustyni" tylko dla rozrywki. Modele obrazowe są skrajnie energochłonne. Używasz potężnej chmury obliczeniowej dla nieistotnego mema, co generuje mierzalny koszt ekologiczny przy minimalnym zysku merytorycznym.</p>
        </div>
      </div>
    </div>

    <div class="lesson-nav">
      <button class="btn-secondary" onclick="showPage('module4')">← Moduł 4</button>
      <div style="display:flex;gap:12px;align-items:center">
        <button id="doneBtn_module5" class="btn-done" onclick="markDone('module5')">✓ Ukończono moduł 5</button>
        <button class="btn-primary" onclick="showPage('myplan')">Mój plan wdrożenia →</button>
      </div>
    </div>
  </div>
`;
