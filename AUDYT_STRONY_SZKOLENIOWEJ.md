# AUDYT STRONY SZKOLENIOWEJ

## Zakres audytu

Audyt objął:
- wersję główną platformy w folderze `platforma/`,
- kopię roboczą `platforma-kopia/`,
- dokumentację źródłową `ETAP_1`–`ETAP_9`,
- plik `00_SPIS_TRESCI_i_Nawigacja.md`,
- plik `ankiety_AI_szkolenie_analiza.docx`.

Data audytu: 2026-05-06

---

## 1. Krótkie podsumowanie najważniejszych ustaleń

Główna wersja strony w folderze `platforma/` jest spójna jako kurs self-learningowy: ma 6 modułów, 18 ćwiczeń, 14 kart promptów / 28 wariantów promptów, checklisty, infografiki, plan wdrożenia, bibliografię i krótkie prezentacje modułowe. W warstwie lokalnych zasobów główna platforma nie ma krytycznych braków plików statycznych: wszystkie odwołania do `style.css`, skryptów i grafik w `platforma/assets/` wskazują na istniejące pliki.

Największe luki nie dotyczą samego działania strony, tylko gotowości warsztatowej. Repozytorium zawiera rozbudowane materiały dla prowadzącego i uczestnika jako źródła Markdown (`ETAP_6`, `ETAP_7`, `ETAP_8`, `ETAP_9`), ale nie są one wystawione w głównej platformie jako osobne pliki do pobrania ani jako gotowe PDF/DOCX do dystrybucji. Ćwiczenia warsztatowe da się przeprowadzić na stronie, ale część z nich nadal zakłada użycie materiałów zewnętrznych lub własnych danych uczestników, bez zapewnionych plików zapasowych.

W repozytorium występują też istotne niespójności wersji:
- `platforma/` i `platforma-kopia/` opisują różne produkty,
- `ETAP_4_Cwiczenia_Warsztatowe.md` deklaruje 12 ćwiczeń, ale zawiera co najmniej 15,
- `ETAP_5_Gotowe_Prompty.md` deklaruje 30 promptów, ale zawiera 29,
- główna platforma ma 28 wariantów promptów,
- `ETAP_8_Prezentacja_Slidow.md` opisuje 32-slajdową prezentację warsztatową, a live platforma ma 24 slajdy wprowadzające (6 modułów × 4 slajdy).

Najważniejszy wniosek praktyczny: platforma jest gotowa jako kurs online, ale przed szkoleniem prowadzonym na żywo trzeba dopiąć pakiet materiałów warsztatowych, przykładowych plików i prezentację prowadzącego per moduł.

---

## 2. Tabela brakujących materiałów

| Moduł / sekcja | Fragment treści | Wymagany plik / materiał | Czy plik istnieje? | Lokalizacja, jeśli istnieje | Problem | Rekomendacja |
|---|---|---|---|---|---|---|
| Ćwiczenie 11 / etyka AI | „Przeczytajcie dostępne zasady użycia AI...” (`platforma/app.js:677`) | Lista zasad do pracy grupowej / karta „10 zasad” | Częściowo | `ETAP_7_Materialy_dla_Uczestnikow.md` – Dokument 6 | W głównej platformie brak bezpośredniego odwołania do gotowej karty, więc zespół pracuje na skróconych przykładach z tip-boxa | Przygotować osobny plik `10_zasad_odpowiedzialnego_uzywania_AI.pdf` i podlinkować go z ćwiczenia 11 |
| Ćwiczenie 16 / prompting grupowy | `ETAP_6_Materialy_dla_Prowadzacego.md:379-388` wskazuje „kartę porównania promptów do ex16” | Arkusz porównania 4 wersji promptu | Nie | — | Ćwiczenie ma tabelę na stronie, ale nie ma osobnego arkusza do pracy w grupie / wydruku | Przygotować `EX16_karta_porownania_promptow.docx` lub `.pdf` |
| Ćwiczenie 17 / analiza ankiety | `ETAP_6_Materialy_dla_Prowadzacego.md:379-388` wskazuje „arkusz analizy ankiety do ex17” | Arkusz roboczy do analizy ankiety | Nie | — | Na stronie jest instrukcja i próbka danych, ale brak osobnego arkusza do zapisu kategorii, wniosków i rekomendacji | Przygotować `EX17_arkusz_analizy_ankiety.xlsx` albo `.docx` |
| Ćwiczenie 18 / mini-kodeks AI | `ETAP_6_Materialy_dla_Prowadzacego.md:379-388` wskazuje „szablon mini-kodeksu AI do ex18” | Szablon kodeksu 1-stronicowego | Nie | — | Ćwiczenie ma tabelę na stronie, ale brak gotowego szablonu do pracy zespołowej i archiwizacji ustaleń | Przygotować `EX18_szablon_mini_kodeksu_AI.docx` |
| Wejście do szkolenia | `ETAP_8_Prezentacja_Slidow.md:47-56`, `ETAP_9_Ewaluacja_i_Wdrozenie.md:6-56` | Ankieta wejściowa w formie formularza lub pliku | Częściowo | `ETAP_9_Ewaluacja_i_Wdrozenie.md` | Treść ankiety istnieje jako źródło Markdown, ale brak gotowego pliku do rozdania lub linku/QR do formularza | Przygotować `Ankieta_wejsciowa_AI.pdf` i/lub formularz online |
| Zakończenie szkolenia | `ETAP_8_Prezentacja_Slidow.md:467-471`, `ETAP_9_Ewaluacja_i_Wdrozenie.md:58-123` | Ankieta wyjściowa w formie formularza lub pliku | Częściowo | `ETAP_9_Ewaluacja_i_Wdrozenie.md` | Analogicznie: treść jest, brak gotowego nośnika do użycia podczas szkolenia | Przygotować `Ankieta_wyjsciowa_AI.pdf` i/lub formularz online |
| Materiały dla uczestnika | `00_SPIS_TRESCI_i_Nawigacja.md:73-89`, `ETAP_7_Materialy_dla_Uczestnikow.md:1-301` | Pakiet uczestnika do wydruku / dystrybucji | Częściowo | `ETAP_7_Materialy_dla_Uczestnikow.md` | Materiały są tylko jako jedno źródło Markdown; w live platformie nie ma sekcji „Dla uczestnika” ani plików do pobrania | Przygotować scalony pakiet `Materialy_uczestnika_AI.pdf` oraz opcjonalnie wersje rozdzielone |
| Materiały dla prowadzącego | `ETAP_6_Materialy_dla_Prowadzacego.md:1-433` | Pakiet prowadzącego do pracy na sali | Częściowo | `ETAP_6_Materialy_dla_Prowadzacego.md` | Przewodnik istnieje, ale nie jako finalny plik do wygodnego użycia podczas szkolenia; brak integracji z live platformą | Przygotować `Przewodnik_prowadzacego_AI.pdf` |
| Moduł 3 / ćwiczenie dokumentowe | „Wklej fragment dowolnego dokumentu szkolnego...” (`platforma/js/content/modules.js:446`, `platforma/app.js:550`) | Przykładowy dokument szkolny do streszczenia | Nie | — | Szkolenie zakłada własne materiały uczestników; przy braku własnych dokumentów ćwiczenie traci płynność | Przygotować `Przykladowy_dokument_szkolny_do_streszczenia.docx` |
| Moduł 4 / długa analiza | „Wybierz długi dokument roboczy... min. 10 stron” (`platforma/app.js:592-604`) | Długi dokument testowy | Nie | — | Brak pliku awaryjnego dla ćwiczenia 6 | Przygotować `Przykladowy_dlugi_dokument_do_analizy.pdf` |
| Moduł 4 / porównanie dokumentów | „Porównaj dwa teksty...” (`platforma/js/content/modules.js:585-600`) | Para dokumentów A/B do porównania | Nie | — | Ćwiczenie jest poprawne, ale nie ma zestawu danych wejściowych dla grup bez własnych materiałów | Przygotować `Przyklad_dokument_A.docx` i `Przyklad_dokument_B.docx` |
| Ćwiczenie 8 / SPE | „Przygotuj krótki tekst dydaktyczny...” (`platforma/app.js:624-641`) | Tekst dydaktyczny do adaptacji | Nie | — | Brak neutralnego tekstu wzorcowego dla uczestników spoza dydaktyki przedmiotowej albo bez własnych materiałów | Przygotować `Przykladowy_tekst_dydaktyczny_SPE.docx` |
| Ćwiczenie 15 / reverse prompting | „Znajdź w internecie bardzo dobry konspekt...” (`platforma/app.js:773-787`) | Tekst wzorcowy do odwróconej inżynierii | Nie | — | Ćwiczenie zależy od wyszukania zasobu zewnętrznego; bez niego prowadzący traci kontrolę nad przebiegiem | Przygotować `Tekst_wzorcowy_do_reverse_prompting.docx` |
| Infografiki do druku | `ETAP_6_Materialy_dla_Prowadzacego.md:379-388` wymaga „3 infografik w wersji SVG albo wydruku” | Infografiki do druku | Tak, ale nie są eksponowane | `platforma/assets/infographic-parts.svg`, `platforma/assets/infographic-rodo-ai.svg`, `platforma/assets/infographic-zasada-proporcji.svg` | Pliki istnieją, ale nie są podlinkowane w live platformie; użytkownik widzi wersje HTML i eksport PDF z poziomu przeglądarki | Dodać bezpośrednie linki do SVG/PDF lub przygotować pakiet `Infografiki_A3_PDF.zip` |
| Prezentacja prowadzącego | `ETAP_8_Prezentacja_Slidow.md:1-503` oraz `platforma/js/data/slides-data.js` | Finalna prezentacja prowadzącego per moduł | Częściowo | blueprint w `ETAP_8_Prezentacja_Slidow.md`, mikro-slajdy w `platforma/js/data/slides-data.js` | Brak gotowej, pełnej prezentacji prowadzącego; live platforma ma tylko 4 slajdy intro na moduł | Na podstawie niniejszego raportu przygotować 6 decków lub 1 deck modułowy w PPTX |

---

## 3. Lista plików do przygotowania

| Proponowana nazwa pliku | Format | Moduł | Cel dydaktyczny | Krótki opis zawartości | Kto korzysta | Priorytet | Konieczny do ćwiczenia? |
|---|---|---|---|---|---|---|---|
| `Materialy_uczestnika_AI.pdf` | PDF | całość | zapewnienie uczestnikom pakietu do pracy i po szkoleniu | karta pracy, karta wdrożenia, ściąga, checklisty, 10 zasad, mini-zadanie po szkoleniu | uczestnik | wysoki | tak przy szkoleniu live |
| `Przewodnik_prowadzacego_AI.pdf` | PDF | całość | ułatwienie prowadzenia warsztatu krok po kroku | eksport i redakcja `ETAP_6` w wygodnej formie | prowadzący | wysoki | tak przy szkoleniu live |
| `Ankieta_wejsciowa_AI.pdf` | PDF / formularz online | start | diagnoza poziomu wejściowego | pytania z `ETAP_9`, gotowe do wydruku lub wysłania linkiem | uczestnik / prowadzący | wysoki | tak dla wariantu warsztatowego |
| `Ankieta_wyjsciowa_AI.pdf` | PDF / formularz online | zakończenie | ewaluacja efektów i gotowości wdrożenia | pytania z `ETAP_9`, wersja końcowa | uczestnik / prowadzący | wysoki | tak dla wariantu warsztatowego |
| `EX16_karta_porownania_promptow.docx` | DOCX / PDF | moduł 2 | uporządkowanie pracy grupowej nad promptami | tabela 4 wersji promptu: prosta, doprecyzowana, ekspercka, finalna | grupa | wysoki | tak, jeśli ćwiczenie ma być archiwizowane lub realizowane analogowo |
| `EX17_arkusz_analizy_ankiety.xlsx` | XLSX | moduł 4 | zapis kategorii, wniosków i rekomendacji | arkusz z polami: dane wejściowe, kategorie, cytaty, wnioski, rekomendacje | grupa / prowadzący | wysoki | tak dla uporządkowanego prowadzenia ex17 |
| `EX18_szablon_mini_kodeksu_AI.docx` | DOCX / PDF | moduł 6 | wypracowanie i zapis zasad zespołowych | tabela sytuacji użycia AI + decyzje + ryzyka + zabezpieczenia + 5–7 zasad | grupa | wysoki | tak dla ex18 |
| `Przykladowy_dokument_szkolny_do_streszczenia.docx` | DOCX / PDF | moduł 3 | ćwiczenie streszczania dokumentu i wyciągania zadań | neutralny, zanonimizowany dokument szkolny z terminami i zadaniami | uczestnik | średni | tak, jeśli grupa nie ma własnych materiałów |
| `Przykladowy_dlugi_dokument_do_analizy.pdf` | PDF | moduł 4 | trening pracy na długim materiale | dokument 10+ stron z sekcjami, obowiązkami i warunkami brzegowymi | uczestnik / prowadzący | wysoki | tak dla ex6 bez własnych materiałów |
| `Przyklad_dokument_A.docx` | DOCX | moduł 4 | porównywanie rozbieżności | pierwszy tekst do porównania | uczestnik / grupa | średni | tak, jeśli ćwiczenie ma być z góry wystandaryzowane |
| `Przyklad_dokument_B.docx` | DOCX | moduł 4 | porównywanie rozbieżności | drugi tekst do porównania, celowo częściowo sprzeczny z A | uczestnik / grupa | średni | tak, jeśli ćwiczenie ma być z góry wystandaryzowane |
| `Przykladowy_tekst_dydaktyczny_SPE.docx` | DOCX / PDF | moduł 3 | ćwiczenie adaptacji tekstu dla ucznia SPE | krótki tekst przedmiotowy do uproszczenia | uczestnik | średni | nie, ale bardzo pomaga |
| `Tekst_wzorcowy_do_reverse_prompting.docx` | DOCX / PDF | ćwiczenie 15 | odwrócona inżynieria promptu bez zależności od internetu | przykład dobrze napisanego ogłoszenia / konspektu | uczestnik / prowadzący | średni | tak dla płynności ex15 |
| `Promptownik_do_wydruku.pdf` | PDF | całość | szybkie korzystanie z promptów offline | skrócona wersja 10–14 najczęściej używanych promptów | uczestnik / prowadzący | średni | nie, ale rekomendowane |
| `Infografiki_A3_PDF.zip` | ZIP z PDF | moduły 2, 4, 6 | wykorzystanie wizualnych skrótów na sali | 3 infografiki w gotowych plikach A3 | prowadzący / grupa | średni | nie, ale rekomendowane |
| `Prezentacja_prowadzacego_Moduly_1_6.pptx` | PPTX | całość | prowadzenie szkolenia z projektora | pełen deck warsztatowy albo 6 decków modułowych | prowadzący | wysoki | tak dla wersji live |

---

## 4. Dokumentacja prezentacji prowadzącego dla każdego modułu

### Moduł 1 – Czym jest AI

#### 1. Cel modułu

Zbudować wspólne rozumienie tego, czym jest AI językowa, gdzie pomaga, gdzie halucynuje oraz jak bezpiecznie uruchomić pierwsze zadanie.

#### 2. Kluczowe treści

- LLM jako model generujący tekst na podstawie wzorców.
- Halucynacje i konieczność weryfikacji.
- Ograniczenia okna kontekstowego.
- Po co AI w pracy edukacyjnej.
- Pierwsze uruchomienie narzędzia.

#### 3. Kolejność prowadzenia

- Wprowadzenie do modułu i celu.
- Krótkie wyjaśnienie czym jest LLM.
- Omówienie halucynacji na przykładzie AI Act / EUR-Lex.
- Pokaz danych „dlaczego warto”.
- Przejście do narzędzi i ćwiczenia „pierwszy prompt”.
- Refleksja i most do modułu 2.

#### 4. Ćwiczenia i zadania

- Ćwiczenie własne: wykryj halucynację.
- Ćwiczenie własne: pierwszy prompt.

#### 5. Materiały potrzebne do przeprowadzenia modułu

- dostęp do `platforma/index.html`,
- konto w jednym narzędziu AI,
- projektor,
- opcjonalnie checklista weryfikacji AI.

#### 6. Braki lub ryzyka

- uczestnicy mogą nie mieć kont do AI,
- brak offline demo w repo,
- brak osobnej karty refleksji dla uczestnika w live platformie.

#### 7. Rekomendowana prezentacja prowadzącego – lista slajdów

- Start modułu i cel
- Czym jest LLM
- Halucynacje i odpowiedzialność
- Dlaczego warto korzystać z AI
- Jakie narzędzie otworzyć
- Ćwiczenie: pierwszy prompt
- Refleksja i przejście do promptowania

#### 8. Uwagi techniczne do strony WWW

- sekcje kluczowe: `module1`, `halucynacje`, `tools`, `first-prompt-exercise`,
- warto otworzyć moduł 1 bezpośrednio z menu bocznego,
- slajdy w `slides/m1` są tylko skrótem wprowadzającym, nie pełną prezentacją prowadzącego.

| Slajd | Tytuł slajdu | Cel slajdu | Treść na slajdzie | Notatki dla prowadzącego | Powiązane ćwiczenie | Potrzebne materiały |
|---|---|---|---|---|---|---|
| 1 | Po co ten moduł | ustawić oczekiwania | czym jest AI, czego uczestnik się dziś nauczy, czego nie robić | podkreśl, że to fundament całego kursu | — | platforma, projektor |
| 2 | AI językowa w 1 minucie | uprościć pojęcie LLM | model przewiduje kolejne słowa, nie „wie” | unikaj technicznego żargonu; buduj zrozumienie, nie definicję akademicką | — | slajd / projektor |
| 3 | Halucynacje | zbudować ostrożność | pewnie brzmiąca odpowiedź może być błędna; fakty sprawdzamy w źródle | pokaż przykład z `EUR-Lex`; nie zostawiaj wrażenia, że AI jest „autorytetem” | wykryj halucynację | internet + przeglądarka |
| 4 | Dlaczego mimo to warto | uzasadnić praktyczne użycie | 5,9h, 29%, 74% + krótki komentarz | użyj liczb jako pretekstu do rozmowy, nie jako centralnego punktu | — | dane z modułu |
| 5 | Wybór narzędzia | przygotować technicznie grupę | ChatGPT / Gemini / Claude, co otworzyć teraz | zapytaj, kto ma konto; ustal plan awaryjny dla osób bez logowania | — | konta AI |
| 6 | Ćwiczenie: pierwszy prompt | uruchomić działanie | 4 kroki: otwórz, opisz zadanie, oceń wynik, zanotuj obserwacje | w trakcie chodź po sali i pomagaj; nie poprawiaj promptów zbyt wcześnie | pierwszy prompt | AI, karta pracy |
| 7 | Co zauważyliśmy | domknąć moduł | co wyszło dobrze, co było zbyt ogólne, czego brakuje | most do modułu 2: jakość promptu = jakość wyniku | refleksja po pierwszym prompcie | notatki uczestników |

### Moduł 2 – Prompting

#### 1. Cel modułu

Nauczyć uczestników świadomego pisania promptów według struktury PARTS i pokazać, jak iteracja poprawia odpowiedź AI.

#### 2. Kluczowe treści

- struktura PARTS,
- porównanie słabego i dobrego promptu,
- 5 złotych zasad promptowania,
- iteracja,
- ćwiczenie grupowe ex16.

#### 3. Kolejność prowadzenia

- przypomnienie problemu z modułu 1,
- omówienie PARTS,
- pokaz „słaby vs mocny prompt”,
- krótkie ćwiczenie indywidualne,
- iteracja i follow-up prompts,
- ćwiczenie grupowe „prompt w trzech wersjach”,
- podsumowanie.

#### 4. Ćwiczenia i zadania

- ćwiczenie własne: popraw prompt,
- krótki test: popraw słaby prompt,
- ćwiczenie zespołowe: ex16.

#### 5. Materiały potrzebne do przeprowadzenia modułu

- infografika PARTS,
- AI chat,
- karta porównania promptów do ex16,
- opcjonalny promptownik do wydruku.

#### 6. Braki lub ryzyka

- brak osobnego arkusza do ex16,
- brak wydruku PARTS w live platformie,
- uczestnicy mogą mylić „więcej tekstu” z „lepszą strukturą”.

#### 7. Rekomendowana prezentacja prowadzącego – lista slajdów

- Czego brakowało pierwszemu promptowi
- PARTS
- Słaby vs mocny prompt
- Ćwiczenie indywidualne
- 5 zasad promptowania
- Iteracja
- Ćwiczenie grupowe ex16
- Podsumowanie

#### 8. Uwagi techniczne do strony WWW

- kluczowe sekcje: `module2`, `parts`, `rules`, `group-prompt-lab`,
- szybkie przejścia do `infographics/inf-parts` i `exercises/ex16`,
- slajdy `m2` są tylko intro, nie zastępują ćwiczenia grupowego.

| Slajd | Tytuł slajdu | Cel slajdu | Treść na slajdzie | Notatki dla prowadzącego | Powiązane ćwiczenie | Potrzebne materiały |
|---|---|---|---|---|---|---|
| 1 | Dlaczego pierwszy prompt bywa słaby | uruchomić potrzebę zmiany | ogólny prompt = ogólny wynik | nawiąż do obserwacji z modułu 1 | — | przykłady z modułu 1 |
| 2 | PARTS w praktyce | dać prosty model pracy | Persona, Aim, Recipients, Tone, Structure | omawiaj na przykładzie zawodowym, nie abstrakcyjnym | — | infografika PARTS |
| 3 | Jeden temat, dwa prompty | pokazać różnicę jakości | „Napisz lekcję o wojnie” vs wersja rozbudowana | pokaż obok siebie prompt i wynik albo zrób demo live | popraw prompt | AI |
| 4 | Ćwiczenie: popraw własny prompt | przejść do praktyki | wróć do promptu z modułu 1 i przebuduj go wg PARTS | poproś o porównanie obu wersji w tym samym narzędziu | popraw prompt | AI, notatki |
| 5 | 5 zasad promptowania | utrwalić reguły | konkretnie, kontekst, format, iteracja, weryfikacja | to slajd do sfotografowania lub zapisania | — | slajd |
| 6 | Iteracja = dialog | nauczyć poprawek | skróć, uprość, dodaj przykład, zmień ton, zaznacz weryfikację | pokaż 2–3 follow-upy do jednego wyniku | krótki test | AI |
| 7 | Ćwiczenie grupowe: 3 wersje promptu | przećwiczyć współpracę | prosta, doprecyzowana, ekspercka, finalna | przypisz role i pilnuj, by grupa naprawdę porównała wyniki, a nie tylko pisała dłuższy prompt | ex16 | karta ex16 |
| 8 | Co realnie poprawia wynik | zamknąć moduł | rola, kontekst, format, kryteria jakości | przejście do modułu 3: teraz prompty stosujemy do realnych zadań zawodowych | ex16 | tabela porównawcza |

### Moduł 3 – AI w dydaktyce

#### 1. Cel modułu

Pokazać uczestnikom, jak używać AI do materiałów dydaktycznych, różnicowania, komunikacji z rodzicami oraz prostych zadań administracyjnych.

#### 2. Kluczowe treści

- zasada 80/20: AI szkicuje, człowiek dopasowuje,
- konspekt lekcji,
- adaptacja materiału dla różnych potrzeb,
- mail do rodziców,
- streszczenie dokumentu,
- checklista organizacyjna.

#### 3. Kolejność prowadzenia

- wprowadzenie do zastosowań dydaktycznych,
- pokaz tabeli „AI proponuje / Ty decydujesz”,
- demo konspektu lekcji,
- ćwiczenie z konspektem i adaptacją,
- przejście do administracji i komunikacji,
- wybór jednego z 3 zadań,
- podsumowanie.

#### 4. Ćwiczenia i zadania

- konspekt lekcji + adaptacja,
- wybór 1 z 3 zadań administracyjnych.

#### 5. Materiały potrzebne do przeprowadzenia modułu

- AI chat,
- opcjonalny przykładowy tekst dydaktyczny,
- przykładowy dokument szkolny,
- własne notatki uczestnika.

#### 6. Braki lub ryzyka

- brak przykładowego dokumentu szkolnego,
- brak przykładowego tekstu do ćwiczenia SPE,
- uczestnicy mogą kopiować wynik bez dopasowania do klasy.

#### 7. Rekomendowana prezentacja prowadzącego – lista slajdów

- Co AI może zrobić w dydaktyce
- AI proponuje / Ty decydujesz
- Demo: konspekt lekcji
- Ćwiczenie: adaptacja dla SPE
- AI w administracji
- Ćwiczenie: 1 z 3 zadań
- Zasady bezpieczeństwa
- Podsumowanie

#### 8. Uwagi techniczne do strony WWW

- kluczowe sekcje: `module3`, `dydaktyka`, `administracja`,
- warto mieć przygotowane własne przykłady dla osób spoza nauczania przedmiotowego,
- brak wbudowanej sekcji „materiały dla uczestnika” w live platformie.

| Slajd | Tytuł slajdu | Cel slajdu | Treść na slajdzie | Notatki dla prowadzącego | Powiązane ćwiczenie | Potrzebne materiały |
|---|---|---|---|---|---|---|
| 1 | Gdzie AI realnie pomaga nauczycielowi | ustawić praktyczny kontekst | konspekt, różnicowanie, pytania, informacja zwrotna | podkreśl, że AI skraca pracę redakcyjną, nie decyzję pedagogiczną | — | platforma |
| 2 | AI proponuje, Ty decydujesz | ustawić granice odpowiedzialności | tabela 80/20 dla 5 zadań dydaktycznych | bardzo ważne, żeby nie wzmacniać mitu „AI zrobi lekcję za mnie” | — | slajd / tabela |
| 3 | Demo: konspekt lekcji | pokazać model pracy | prompt + wynik + jedna szybka poprawka | pokaż, jak od razu sprawdzać timing i adekwatność | konspekt lekcji | AI |
| 4 | Ćwiczenie: różnicowanie materiału | przejść do pracy własnej | wygeneruj konspekt i przepisz fragment dla ucznia z trudnościami / zdolnego | jeśli grupa jest mieszana, dopuść plan działania zamiast lekcji | ex3 / adaptacja | AI, opcjonalny tekst |
| 5 | AI w administracji i komunikacji | rozszerzyć zastosowania | streszczenie dokumentu, lista zadań, mail, checklista | pokaż, że tu oszczędność czasu bywa największa | — | slajd |
| 6 | Ćwiczenie: wybierz 1 z 3 zadań | zawęzić pracę do realnych potrzeb | A mail, B dokument, C checklista | pozwól uczestnikom wybrać tylko jedno zadanie; nie rozpraszaj ich na trzy | ex4 | AI, próbki danych |
| 7 | RODO i zdrowy rozsądek | ograniczyć ryzyka | usuń dane osobowe, sprawdź wynik, AI nie zna szkoły | przy streszczeniu dokumentów przypomnij zasadę anonimizacji | ex4 | checklista RODO |
| 8 | Co zabierasz do jutra | zamknąć moduł | 1 zastosowanie dydaktyczne + 1 administracyjne | przygotuj most do modułu 4: od pisania przechodzimy do analizy | refleksja | notatki |

### Moduł 4 – Projekty i analityka

#### 1. Cel modułu

Nauczyć świadomej pracy z długą informacją: dokumentami, wątkami, porównywaniem tekstów, analizą ankiet oraz doborem bezpieczniejszego narzędzia.

#### 2. Kluczowe treści

- analiza dokumentów i wątków,
- RAG / zamknięte piaskownice vs publiczny LLM,
- porównanie dwóch dokumentów,
- analiza ankiet,
- RODO w pracy analitycznej.

#### 3. Kolejność prowadzenia

- wprowadzenie do pracy z informacją,
- demo uporządkowania długiego wątku,
- kiedy zwykły czat nie wystarcza,
- porównanie dwóch tekstów,
- ćwiczenie grupowe ex17,
- domknięcie sekcją bezpieczeństwa danych.

#### 4. Ćwiczenia i zadania

- uporządkuj długi wątek,
- porównaj dwa dokumenty,
- ex17 mini-laboratorium analizy ankiety.

#### 5. Materiały potrzebne do przeprowadzenia modułu

- przykładowy długi dokument,
- dwa dokumenty A/B do porównania,
- próbka zanonimizowanych odpowiedzi ankietowych,
- infografika RODO + AI,
- AI chat lub NotebookLM / podobne narzędzie.

#### 6. Braki lub ryzyka

- brak przykładowego długiego dokumentu,
- brak pary dokumentów A/B,
- brak dedykowanego arkusza do ex17,
- wysokie ryzyko pracy na niezanonimizowanych danych.

#### 7. Rekomendowana prezentacja prowadzącego – lista slajdów

- Cel modułu i zakres analityki
- Jak wyciągać decyzje i zadania
- Demo: długi wątek
- Kiedy wybrać RAG
- Porównanie dwóch dokumentów
- Ex17: analiza ankiety
- Bezpieczeństwo danych i infografika RODO
- Podsumowanie

#### 8. Uwagi techniczne do strony WWW

- kluczowe sekcje: `documents`, `sandbox`, `compare`, `survey-lab`, `rodo`,
- w module są odwołania do `ex17` i `infographics/inf-rodo`,
- bez przykładowych danych prowadzący musi improwizować na własnych dokumentach.

| Slajd | Tytuł slajdu | Cel slajdu | Treść na slajdzie | Notatki dla prowadzącego | Powiązane ćwiczenie | Potrzebne materiały |
|---|---|---|---|---|---|---|
| 1 | Praca z informacją, nie tylko z tekstem | ustawić ramę modułu | dokumenty, wątki, ankiety, rozbieżności, bezpieczeństwo | podkreśl, że tu celem nie jest „ładny tekst”, tylko decyzja i porządek | — | platforma |
| 2 | Co AI ma wyciągnąć z dokumentu | doprecyzować oczekiwany wynik | streszczenie, zadania, decyzje, sprawy otwarte | najpierw pokaż pytanie analityczne, potem prompt | uporządkuj wątek | AI |
| 3 | Demo: długi wątek / protokół | pokazać workflow | wklej tekst, pokaż tabelę z zadaniami i listę decyzji | koniecznie omów, co AI mogła pominąć | uporządkuj wątek | przykładowy dokument |
| 4 | Kiedy zwykły czat nie wystarcza | nauczyć doboru narzędzia | klasyczne AI vs RAG / NotebookLM | zaznacz odpowiedzialność za źródła i cytowalność | — | slajd |
| 5 | Porównanie dwóch dokumentów | przećwiczyć rozbieżności | Tekst A, Tekst B, tabela luk i sprzeczności | dobrze działa na procedurach, regulaminach i szkicach raportu | porównaj dwa dokumenty | para dokumentów A/B |
| 6 | Ćwiczenie grupowe: analiza ankiety | zorganizować pracę zespołu | role, cel analizy, 3 prompty, mini-raport | pilnuj, by grupa najpierw ustaliła czego nie wolno wkleić | ex17 | próbka ankiety, karta ex17 |
| 7 | RODO i dane wrażliwe | obniżyć ryzyko | 3 zasady przed wklejeniem dokumentu + podział danych | otwórz infografikę `RODO + AI` na projektorze | ex17 / analiza dokumentów | infografika RODO |
| 8 | Co trzeba sprawdzić ręcznie | domknąć moduł | czego nie wywnioskujesz z danych i co wymaga człowieka | przejście do modułu 5: teraz wykorzystujemy AI do pracy projektowej | refleksja | notatki |

### Moduł 5 – Praca projektowa z AI

#### 1. Cel modułu

Nauczyć używania AI w pracy projektowej jako wsparcia redakcyjnego: przy opisach działań, korespondencji i komunikacji projektowej, bez utraty kontroli nad faktami.

#### 2. Kluczowe treści

- AI jako asystent redakcyjny,
- opis działania do raportu,
- mail do partnera,
- treści promocyjne,
- transparentność i odpowiedzialność.

#### 3. Kolejność prowadzenia

- wprowadzenie: gdzie AI pomaga, a gdzie nie,
- ćwiczenie na opisie działania,
- ćwiczenie na mailu do partnera,
- ćwiczenie na komunikacji promocyjnej,
- domknięcie regułami transparentności.

#### 4. Ćwiczenia i zadania

- opis działania,
- mail do partnera,
- komunikacja o projekcie.

#### 5. Materiały potrzebne do przeprowadzenia modułu

- AI chat,
- karta faktów o przykładowym projekcie,
- opcjonalny brief projektowy z datami, partnerami i efektami.

#### 6. Braki lub ryzyka

- brak przykładowego briefu projektowego,
- ryzyko dopowiadania liczb i efektów przez AI,
- brak osobnego wzoru „oznacz brak danych”.

#### 7. Rekomendowana prezentacja prowadzącego – lista slajdów

- Gdzie AI pomaga w projektach
- AI nie zastępuje odpowiedzialności
- Ćwiczenie: opis działania
- Ćwiczenie: mail do partnera
- Ćwiczenie: komunikacja promocyjna
- Transparentność i zasady pracy
- Podsumowanie

#### 8. Uwagi techniczne do strony WWW

- kluczowe sekcje: `projekty`, `reporting`, `partnerzy`, `promocja`, `transparentnosc`,
- moduł bazuje głównie na promptach; przy pracy live warto mieć gotowe dane projektowe,
- brak osobnego pliku przykładowego projektu osłabia standaryzację ćwiczenia.

| Slajd | Tytuł slajdu | Cel slajdu | Treść na slajdzie | Notatki dla prowadzącego | Powiązane ćwiczenie | Potrzebne materiały |
|---|---|---|---|---|---|---|
| 1 | AI w pracy projektowej | ustawić kontekst | raporty, partnerzy, promocja, notatki, ustalenia | powiedz wprost: AI przyspiesza redakcję, ale nie może wymyślać faktów | — | platforma |
| 2 | Czego AI nie może za Ciebie zrobić | wyznaczyć granice | dane projektu, zgodność z programem, odpowiedzialność autora | to kluczowy slajd zabezpieczający przed bezkrytycznym użyciem | — | slajd |
| 3 | Ćwiczenie: opis działania | przejść do praktyki | prompt narracyjny 180–220 słów + `[UZUPEŁNIJ]` | pokaż, jak celowo zostawiać luki zamiast pozwalać AI zmyślać | opis działania | brief projektu |
| 4 | Ćwiczenie: mail do partnera | ćwiczyć prosty profesjonalny angielski | Subject + Greeting + Body + Closing | pilnuj prostoty dla nienatywnych użytkowników | mail do partnera | dane spotkania / partnera |
| 5 | Ćwiczenie: komunikacja o projekcie | zróżnicować kanały komunikacji | post social, akapit WWW, tematy maili | zwróć uwagę na różnicę tonu między kanałami | komunikacja o projekcie | fakty projektowe |
| 6 | Transparentność i odpowiedzialność | domknąć ryzyka | brakujące dane, zgodność z programem, brak poufnych załączników, wersja źródłowa | poproś uczestników o wskazanie jednego miejsca, gdzie AI mogłaby przesadzić | wszystkie | checklista weryfikacji |
| 7 | Co warto zabrać do własnego projektu | przejście do wdrożenia | 1 prompt do raportu, 1 do maila, 1 do promocji | most do modułu 6: odpowiedzialne użycie to także proporcja użycia | refleksja | notatki |

### Moduł 6 – Zrównoważone AI

#### 1. Cel modułu

Zbudować bardziej dojrzałą decyzję o używaniu AI: z uwzględnieniem infrastruktury, zasobów i zasady proporcji, a następnie przełożyć to na prosty kodeks zespołowy.

#### 2. Kluczowe treści

- AI działa na fizycznej infrastrukturze,
- energia, woda, chłodzenie,
- jak czytać liczby bez uproszczeń,
- zasada proporcji,
- mini-kodeks odpowiedzialnego używania AI.

#### 3. Kolejność prowadzenia

- wprowadzenie do infrastruktury,
- omówienie liczb i ich ograniczeń,
- zasada proporcji,
- ćwiczenie grupowe ex18,
- przejście do planu wdrożenia.

#### 4. Ćwiczenia i zadania

- ćwiczenie grupowe: mini-kodeks AI.

#### 5. Materiały potrzebne do przeprowadzenia modułu

- infografika „Zasada proporcji”,
- arkusz / szablon mini-kodeksu,
- AI chat tylko jako wsparcie porządkowania zasad.

#### 6. Braki lub ryzyka

- brak osobnego szablonu ex18,
- łatwo popaść w dyskusję ideologiczną zamiast praktyczną,
- dane o śladzie AI wymagają ostrożnego komentowania jako szacunki, nie stałe.

#### 7. Rekomendowana prezentacja prowadzącego – lista slajdów

- Po co mówić o śladzie AI
- Infrastruktura i koszty zasobowe
- Jak czytać te liczby
- Zasada proporcji
- Ćwiczenie: mini-kodeks AI
- Dyskusja i decyzje zespołowe
- Przejście do planu wdrożenia

#### 8. Uwagi techniczne do strony WWW

- kluczowe sekcje: `infrastruktura`, `metryki`, `proporcja`, `mini-codeks`,
- warto otworzyć infografikę `inf-proporcja`,
- ten moduł ma najkrótszy czas w live platformie, ale wymaga moderowanej dyskusji.

| Slajd | Tytuł slajdu | Cel slajdu | Treść na slajdzie | Notatki dla prowadzącego | Powiązane ćwiczenie | Potrzebne materiały |
|---|---|---|---|---|---|---|
| 1 | AI to nie „chmura bez kosztu” | zmienić perspektywę | serwery, energia, chłodzenie, skala użycia | nie moralizuj; pokazuj kontekst decyzji | — | platforma |
| 2 | Co mówią liczby | pokazać skalę | IEA, energia centrów danych, przykłady emisji i zużycia wody | zawsze dodawaj, że to szacunki zależne od warunków | — | dane z modułu |
| 3 | Jak nie nadużywać tych danych | uniknąć uproszczeń | model, długość odpowiedzi, iteracje, miks energetyczny, lokalizacja | zaznacz, że jedna liczba nie opisuje każdego użycia | — | slajd |
| 4 | Zasada proporcji | przełożyć wiedzę na decyzję | wysoka wartość vs niska wartość użycia AI | otwórz infografikę i omów 4 pytania kontrolne | — | infografika proporcji |
| 5 | Ćwiczenie: mini-kodeks AI | pracować na decyzjach zespołowych | wolno / wolno warunkowo / nie używamy + ryzyko + zabezpieczenie | użyj AI tylko do porządkowania, nie do podejmowania decyzji za grupę | ex18 | szablon ex18 |
| 6 | Czy Wasz kodeks jest używalny? | zweryfikować efekt | czy nowa osoba zrozumie zasady; co wymaga doprecyzowania | poproś grupy o jeden przykład użycia warunkowego | ex18 | karta kodeksu |
| 7 | Co wdrażamy po szkoleniu | zamknąć kurs | 1 sytuacja do użycia AI, 1 do ograniczenia, 1 zasada zespołu | przejście do `Mój plan wdrożenia` | plan wdrożenia | platforma |

### Przekrojowa uwaga do prezentacji prowadzącego

Obecna sekcja `Prezentacje` w live platformie (`platforma/js/data/slides-data.js`) nadaje się jako krótkie intro do modułu, ale nie jako pełny deck prowadzącego. Dla pracy na projektorze potrzeba prezentacji bardziej operacyjnej: z instrukcjami dla grupy, slajdami pauzy, slajdami dyskusyjnymi, wskazaniem momentów pracy na stronie i przypomnieniem o wymaganych materiałach.

---

## 5. Struktura modułów

### Moduł 1 – Czym jest AI

1. Cel modułu: zrozumieć działanie AI językowej i ryzyko halucynacji.
2. Kluczowe treści: LLM, kontekst, halucynacje, źródła, pierwsze narzędzie AI.
3. Kolejność prowadzenia: teoria skrócona → przykład halucynacji → dane → logowanie → pierwszy prompt → refleksja.
4. Ćwiczenia i zadania: wykryj halucynację; pierwszy prompt.
5. Materiały potrzebne: konto AI, przeglądarka, projektor, opcjonalna checklista.
6. Braki lub ryzyka: brak offline demo; brak pakietu uczestnika w głównej platformie.
7. Rekomendowana prezentacja prowadzącego – lista slajdów: 7 slajdów opisanych wyżej.
8. Uwagi techniczne do strony WWW: korzystać z sekcji `halucynacje`, `tools`, `first-prompt-exercise`.

### Moduł 2 – Prompting

1. Cel modułu: nauczyć pisania promptów z użyciem PARTS i iteracji.
2. Kluczowe treści: PARTS, słaby vs mocny prompt, 5 zasad, iteracja, praca grupowa.
3. Kolejność prowadzenia: PARTS → demo → ćwiczenie indywidualne → iteracja → ex16 → podsumowanie.
4. Ćwiczenia i zadania: popraw prompt; ex16.
5. Materiały potrzebne: infografika PARTS, karta ex16, AI.
6. Braki lub ryzyka: brak gotowego arkusza ex16; brak drukowalnej ściągi w platformie.
7. Rekomendowana prezentacja prowadzącego – lista slajdów: 8 slajdów opisanych wyżej.
8. Uwagi techniczne do strony WWW: używać `infographics/inf-parts` oraz `exercises/ex16`.

### Moduł 3 – AI w dydaktyce

1. Cel modułu: przejść od promptowania do zastosowań dydaktycznych i administracyjnych.
2. Kluczowe treści: konspekty, różnicowanie, komunikacja, dokumenty, checklisty.
3. Kolejność prowadzenia: dydaktyka → demo → adaptacja → administracja → wybór zadania → podsumowanie.
4. Ćwiczenia i zadania: konspekt lekcji; adaptacja materiału; mail / dokument / checklista.
5. Materiały potrzebne: przykładowy dokument, przykładowy tekst dydaktyczny, AI.
6. Braki lub ryzyka: brak plików przykładowych; wysokie ryzyko kopiowania wyników bez korekty.
7. Rekomendowana prezentacja prowadzącego – lista slajdów: 8 slajdów opisanych wyżej.
8. Uwagi techniczne do strony WWW: pracować na sekcjach `dydaktyka` i `administracja`.

### Moduł 4 – Projekty i analityka

1. Cel modułu: nauczyć pracy z długimi tekstami, rozbieżnościami i danymi jakościowymi.
2. Kluczowe treści: analiza dokumentów, RAG, porównywanie dokumentów, analiza ankiet, RODO.
3. Kolejność prowadzenia: długi wątek → RAG → porównanie tekstów → ex17 → bezpieczeństwo.
4. Ćwiczenia i zadania: analiza wątku; porównanie dokumentów; ex17.
5. Materiały potrzebne: długi dokument testowy, dokumenty A/B, próbka ankiet, infografika RODO.
6. Braki lub ryzyka: brak próbek plików; ryzyko ujawnienia danych osobowych.
7. Rekomendowana prezentacja prowadzącego – lista slajdów: 8 slajdów opisanych wyżej.
8. Uwagi techniczne do strony WWW: używać `survey-lab` i `infographics/inf-rodo`.

### Moduł 5 – Praca projektowa z AI

1. Cel modułu: używać AI do redakcji projektowej bez oddawania odpowiedzialności.
2. Kluczowe treści: raport narracyjny, mail do partnera, treści promocyjne, transparentność.
3. Kolejność prowadzenia: ograniczenia → opis działania → mail → promocja → zasady odpowiedzialności.
4. Ćwiczenia i zadania: opis działania; mail; komunikacja projektu.
5. Materiały potrzebne: brief projektu, dane faktograficzne, AI.
6. Braki lub ryzyka: brak przykładowego briefu; AI może dopowiadać dane liczbowe.
7. Rekomendowana prezentacja prowadzącego – lista slajdów: 7 slajdów opisanych wyżej.
8. Uwagi techniczne do strony WWW: sekcje `reporting`, `partnerzy`, `promocja`, `transparentnosc`.

### Moduł 6 – Zrównoważone AI

1. Cel modułu: nauczyć odpowiedzialnego i proporcjonalnego użycia AI.
2. Kluczowe treści: infrastruktura, energia, woda, interpretacja danych, zasada proporcji, kodeks.
3. Kolejność prowadzenia: infrastruktura → metryki → proporcja → ex18 → plan wdrożenia.
4. Ćwiczenia i zadania: ex18.
5. Materiały potrzebne: infografika proporcji, szablon mini-kodeksu.
6. Braki lub ryzyka: brak gotowego szablonu ex18; łatwo przejść w dyskusję abstrakcyjną.
7. Rekomendowana prezentacja prowadzącego – lista slajdów: 7 slajdów opisanych wyżej.
8. Uwagi techniczne do strony WWW: używać `proporcja`, `mini-codeks`, `myplan`.

---

## 6. Audyt spójności

### 6.1. Moduły, nazwy, numeracja

- W głównej platformie liczba modułów jest spójna: 6 modułów występuje w `platforma/index.html:74-79`, `platforma/js/content/home.js:5-7`, `platforma/app.js:443-448` i `platforma/js/data/slides-data.js:3-48`.
- Numeracja modułów w `platforma/js/content/modules.js` jest spójna i zgodna z nawigacją.
- Nazwy modułów w głównej platformie są spójne.
- W repozytorium równolegle funkcjonuje inne nazewnictwo produktu: `AI w pracy nauczyciela i szkoły` (`00_SPIS_TRESCI_i_Nawigacja.md:31`, `ETAP_2_Architektura_Szkolenia.md:8`) oraz `AI w edukacji, organizacji i projektach` (`platforma/index.html:6`, `platforma/js/content/home.js:17`).

### 6.2. Ćwiczenia

- W live platformie liczba ćwiczeń jest spójna: 18 ćwiczeń w menu (`platforma/index.html:81`), na stronie głównej (`platforma/js/content/home.js:54`) oraz w definicjach `ex1`–`ex18` (`platforma/app.js:496-887`).
- `ETAP_4_Cwiczenia_Warsztatowe.md` deklaruje „12 ćwiczeń” (`ETAP_4_Cwiczenia_Warsztatowe.md:2-6`), ale zawiera ćwiczenia co najmniej od `#1` do `#15`. To realna niespójność dokumentacji źródłowej.

### 6.3. Prompty

- W live platformie liczba promptów jest spójna: 14 kart i 28 wariantów (`platforma/js/content/home.js:58`, `platforma/app.js:983`) oraz 14 kart `pA1`–`pH1` (`platforma/app.js:998-1195`).
- `ETAP_5_Gotowe_Prompty.md` deklaruje „30 profesjonalnych promptów” (`ETAP_5_Gotowe_Prompty.md:2`) i `00_SPIS_TRESCI_i_Nawigacja.md` mówi o „30+ promptów” (`00_SPIS_TRESCI_i_Nawigacja.md:20`, `:59`), ale plik zawiera 29 sekcji promptów (`A1`–`H2`).
- W dokumentacji źródłowej występuje 8 kategorii promptów (`A`–`H`), a w live platformie tylko 6 kategorii filtrów (`A`, `B`, `C`, `D`, `E`, `H`). Kategorie `F` i `G` z `ETAP_5` nie zostały przeniesione do głównej platformy.

### 6.4. Prezentacje

- W live platformie są 24 slajdy wprowadzające: 6 zestawów × 4 slajdy (`platforma/js/data/slides-data.js`, łącznie 24 obiekty `type: 'slide-'`).
- `ETAP_8_Prezentacja_Slidow.md` opisuje pełną prezentację 32-slajdową (`ETAP_8_Prezentacja_Slidow.md:6-12`, `:493` i 32 nagłówki `### Slajd`).
- Oznacza to, że live platforma nie zawiera finalnej wersji prezentacji prowadzącego, tylko skrócone intro-moduły.

### 6.5. Linki wewnętrzne i lokalne zasoby

- W głównej platformie podstawowe lokalne odwołania do `style.css`, `app.js`, `js/data/*`, `js/content/*` i grafik `platforma/assets/*` wskazują na istniejące pliki.
- Odwołania `showPage(...)` w bieżącej wersji prowadzą do istniejących widoków i anchorów, które zostały zdefiniowane w `platforma/js/content/modules.js`, `platforma/app.js` i `platforma/js/content/home.js`.
- `platforma-kopia/` zawiera lokalne odwołania do nieistniejących plików graficznych: `../orzeł logo ZSZ5.png`, `../COVE Polska bez tła.png`, `../win4smes-logo-eu-logo-2025.png` (`platforma-kopia/index.html:19-21`, `:86-88`). To martwe odwołania w kopii roboczej.

### 6.6. Sekcje niedokończone, placeholdery, TODO

- W głównej platformie nie znaleziono niedokończonych sekcji typu `TODO`, `Lorem ipsum`, `placeholder`.
- Występują celowe markery warsztatowe `[UZUPEŁNIJ]` i `(do uzupełnienia)` w promptach, co jest uzasadnione dydaktycznie.
- W repozytorium jest jedna jawna plansza awaryjna „Strona ... – wkrótce dostępna” (`platforma/app.js:63-64`), ale obecnie nie odnosi się do żadnego używanego widoku w `platforma/`.

### 6.7. Język, literówki, nazewnictwo

Przykłady błędów lub niespójności językowych:
- `ETAP_7_Materialy_dla_Uczestnikow.md:88` – „Podej do AI” zamiast „Podejdź do AI”.
- `ETAP_7_Materialy_dla_Uczestnikow.md:158` – „przede użyciem” zamiast „przed użyciem”.
- `ETAP_7_Materialy_dla_Uczestnikow.md:260` – „collegium nauczycielskie”.
- `ETAP_9_Ewaluacja_i_Wdrozenie.md:149` – „checklsity”.
- `ETAP_3_Tresci_Merytoryczne.md:304` – „nombry uczestników”.
- `ETAP_3_Tresci_Merytoryczne.md:315` – „W octubre”.
- `platforma/app.js:653` – skrót „18 n-cli.” w przykładzie notatek jest mało czytelny dla uczestnika.

### 6.8. Zasoby osierocone lub nieeksponowane

- `ankiety_AI_szkolenie_analiza.docx` nie jest nigdzie podlinkowany w platformie ani w dokumentacji nawigacyjnej.
- Pliki SVG infografik istnieją w `platforma/assets/`, ale nie są nigdzie użyte bezpośrednio.
- `platforma-kopia/` jest osobną, starszą gałęzią produktu i nie jest wykorzystywana przez `index.html`, który przekierowuje do `platforma/index.html`.

### 6.9. Linki zewnętrzne

- Zweryfikowane przykładowo: `https://chatgpt.com/`, `https://chat.openai.com/`, `https://developers.openai.com/api/docs/guides/prompting` odpowiadają poprawnie.
- Dla szerokiej bibliografii z `platforma/app.js` nie wykonywano pełnej, ręcznej walidacji wszystkich adresów jeden po drugim; ich status należy traktować jako `do weryfikacji`, jeśli celem jest publikacja produkcyjna.
- Link `https://covepolska.pl` z poziomu audytu wymaga dodatkowej weryfikacji dostępności.

---

## 7. Rekomendacje priorytetowe

### Priorytet wysoki

1. Ujednolicić wersję produktu: zdecydować, czy repozytorium ma wspierać kurs self-learning, warsztat live, czy oba tryby, a potem uporządkować nazewnictwo i pliki.
2. Wyprowadzić z `ETAP_7` i `ETAP_9` gotowe pliki PDF / DOCX do użycia podczas szkolenia.
3. Przygotować pakiet plików roboczych do `ex16`, `ex17`, `ex18`.
4. Przygotować przykładowe pliki wejściowe do ćwiczeń na dokumentach i analizie.
5. Opracować finalną prezentację prowadzącego na podstawie niniejszej dokumentacji.

### Priorytet średni

6. Włączyć do platformy brakujące kategorie promptów `F` i `G` albo zaktualizować dokumentację, że świadomie ich nie ma.
7. Dodać sekcję / przyciski pobierania: „Dla uczestnika”, „Dla prowadzącego”, „Ankiety”, „Infografiki do druku”.
8. Usunąć albo jednoznacznie oznaczyć `platforma-kopia/` jako archiwum.
9. Przejrzeć i poprawić literówki w plikach ETAP.

### Priorytet niski

10. Podlinkować lub usunąć osierocony plik `ankiety_AI_szkolenie_analiza.docx`.

---

## 8. Lista szybkich poprawek technicznych

- Naprawić zduplikowane identyfikatory `doneBtn_module1`–`doneBtn_module6` w `platforma/js/content/modules.js` – każdy moduł ma po dwa przyciski z tym samym `id`.
- Dodać wyraźne oznaczenie w repo, że bieżąca wersja live to `platforma/`, a `platforma-kopia/` jest archiwalna.
- Poprawić lub usunąć martwe ścieżki obrazków w `platforma-kopia/index.html`.
- Dodać aktywny stan nawigacji dla ogólnego wejścia `showPage('slides')` z karty głównej, bo menu ma tylko `slides_m1`–`slides_m6`.
- Udostępnić bezpośrednie linki do `SVG` infografik albo wygenerowanych `PDF`.
- Zaktualizować stare adresy typu `https://chat.openai.com` w dokumentacji ETAP do jednej, spójnej wersji.
- Poprawić literówki i błędy językowe w plikach ETAP.
- Dodać krótki `README` opisujący relację między wersją live, kopią i dokumentacją ETAP.

---

## 9. Lista większych zadań do wykonania

- Zbudować pakiet warsztatowy: participant pack, trainer pack, ankiety, karty ćwiczeń, przykładowe pliki wejściowe.
- Przygotować 6 prezentacji prowadzącego albo 1 scaloną prezentację modułową z widokiem na pracę na stronie.
- Zdecydować, czy materiały `ETAP_*` mają być tylko zapleczem redakcyjnym, czy elementem produktu końcowego.
- Zsynchronizować liczniki i deklaracje: liczba ćwiczeń, liczba promptów, liczba slajdów, liczba kategorii.
- Rozważyć dodanie do live platformy zakładek „Dla uczestnika” i „Dla prowadzącego”.
- Stworzyć pakiet przykładowych danych do ćwiczeń, aby szkolenie dało się przeprowadzić bez improwizacji i bez wklejania realnych dokumentów uczestników.

---

## 10. 10 najważniejszych działań do wykonania przed szkoleniem

1. Przygotować finalny deck prowadzącego do modułów 1–6.
2. Wygenerować pakiet `Materialy_uczestnika_AI.pdf`.
3. Wygenerować `Ankieta_wejsciowa_AI` i `Ankieta_wyjsciowa_AI`.
4. Przygotować arkusze do `ex16`, `ex17` i `ex18`.
5. Przygotować przykładowy dokument szkolny, długi dokument analityczny i parę dokumentów A/B.
6. Przygotować przykładowy tekst dydaktyczny do ćwiczenia SPE oraz tekst wzorcowy do reverse prompting.
7. Udostępnić prowadzącemu gotowe PDF/SVG infografik do druku lub projekcji.
8. Ujednolicić komunikację wersji: live `platforma/` kontra archiwalna `platforma-kopia/`.
9. Skorygować niespójne liczniki promptów i ćwiczeń w dokumentach ETAP.
10. Poprawić podstawowe błędy techniczne i językowe przed publikacją lub przekazaniem materiału prowadzącemu.

---

## Załącznik roboczy: najważniejsze źródła ustaleń

- Główna platforma: `platforma/index.html`, `platforma/app.js`, `platforma/js/content/home.js`, `platforma/js/content/modules.js`, `platforma/js/data/slides-data.js`
- Dokumentacja warsztatowa: `ETAP_4_Cwiczenia_Warsztatowe.md`, `ETAP_5_Gotowe_Prompty.md`, `ETAP_6_Materialy_dla_Prowadzacego.md`, `ETAP_7_Materialy_dla_Uczestnikow.md`, `ETAP_8_Prezentacja_Slidow.md`, `ETAP_9_Ewaluacja_i_Wdrozenie.md`
- Spis nawigacyjny: `00_SPIS_TRESCI_i_Nawigacja.md`
- Plik osierocony: `ankiety_AI_szkolenie_analiza.docx`
