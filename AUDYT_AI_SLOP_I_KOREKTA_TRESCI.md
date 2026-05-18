# Audyt AI slop i korekta treści

## 1. Podsumowanie

- Znaleziono fragmenty zbyt ogólne, zbyt długie lub brzmiące jak nieredagowany tekst AI.
- Poprawiono teksty widoczne w platformie: stronę główną, moduły, ćwiczenia, promptownik, checklisty, slajdy, plan wdrożenia i stronę o projekcie.
- Zachowano strukturę kursu, numerację ćwiczeń, routing i działające linki do materiałów.
- Platforma jest językowo gotowa do publikacji. Nie znaleziono krytycznych miejsc wymagających decyzji redakcyjnej.

## 2. Zakres sprawdzenia

Sprawdzono:

- `platforma/js/content/home.js`,
- `platforma/js/content/modules.js`,
- `platforma/app.js`,
- `platforma/js/data/search-index.js`,
- `platforma/js/data/slides-data.js`,
- `README_DLA_PROWADZACEGO.md`,
- `BRAKUJACE_INPUTY_DO_CWICZEN.md`,
- `MATERIALY_DO_POBRANIA.md`,
- widoki: strona główna, 6 modułów, ćwiczenia, promptownik, checklisty, mój plan, slajdy, infografiki, bibliografia, o projekcie.

## 3. Najważniejsze poprawki

- Skrócono leady modułów i opis strony głównej.
- Uproszczono cele ćwiczeń 1-18, szczególnie ćwiczenia 2, 5, 6, 13, 14, 16, 17 i 18.
- Usunięto sformułowania typu: „ujarzmienie chaosu”, „trening rezyliencji”, „doskonały prompt”, „świetny tekst”, „wartość dodana”.
- Doprecyzowano instrukcje: co pobrać, co wkleić do AI, co sprawdzić i jaki ma być efekt.
- Uproszczono promptownik i ostrzeżenia przy promptach.
- Zneutralizowano przykładowe dane osobowe w ćwiczeniach.
- Uproszczono teksty pod automatyczne tłumaczenie: krótsze zdania, mniej idiomów, mniej skrótów myślowych.
- Zaktualizowano indeks wyszukiwania po zmianach nazw ćwiczeń.

## 4. Przykłady korekt

- Było: „Trening rezyliencji – AI jako trudny rodzic”.
  Jest: „Trudna rozmowa – AI jako rodzic”.
  Powód: prostszy tytuł, mniej żargonu, lepsze tłumaczenie.

- Było: „Ujarzmienie chaosu z ankiet”.
  Jest: „Porządkowanie odpowiedzi z ankiet”.
  Powód: bez idiomu, od razu wiadomo, co robi uczestnik.

- Było: „Zastosuj framework PARTS, żeby zobaczyć, jak zmiana promptu zmienia wynik AI.”
  Jest: „Popraw jeden z trzech promptów i porównaj odpowiedzi przed i po zmianie.”
  Powód: konkretne działanie i rezultat.

- Było: „Chcę tworzyć tak dobre materiały za pomocą AI w przyszłości. Zaprojektuj dla mnie doskonały prompt...”
  Jest: „Chcę tworzyć podobne materiały z pomocą AI. Zaprojektuj prompt w układzie PARTS...”
  Powód: mniej przesady, bardziej neutralny język.

- Było: „AI może pomóc uporządkować materiał, ale nie powinna sama decydować o zasadach.”
  Jest: „AI porządkuje materiał, ale nie decyduje o zasadach.”
  Powód: krócej i bardziej bezpośrednio.

## 5. Miejsca wymagające decyzji

Brak miejsc wymagających decyzji człowieka w zakresie korekty AI slop.

Decyzje publikacyjne dotyczące realnych PDF-ów `input_01`-`input_03` pozostają opisane w `BRAKUJACE_INPUTY_DO_CWICZEN.md` i `MATERIALY_DO_POBRANIA.md`; nie są częścią korekty językowej.

## 6. Kontrola techniczna

Uruchomiono:

- `node --check platforma/app.js` - OK,
- `node --check platforma/js/content/home.js` - OK,
- `node --check platforma/js/content/modules.js` - OK,
- `node --check platforma/js/data/search-index.js` - OK,
- `node --check platforma/js/data/slides-data.js` - OK,
- statyczne sprawdzenie odwołań do plików - OK,
- lokalny serwer `python3 -m http.server 4174 -d platforma` - OK,
- test Playwright wszystkich głównych widoków platformy - OK,
- test Playwright linków do pobrania - znaleziono 56 renderowanych linków, wszystkie wskazują na istniejące pliki.

## 7. Rekomendacje końcowe

- Przed publikacją potwierdzić prawa do publicznego udostępnienia realnych PDF-ów `input_01`-`input_03`.
- Po tłumaczeniu przeglądarkowym sprawdzić ręcznie 2-3 najdłuższe ćwiczenia: `ex16`, `ex17`, `ex18`.
- Nie dodawać nowych opisów marketingowych do modułów; zachować styl instrukcyjny.
- Przy kolejnych materiałach wejściowych używać krótkich nazw widocznych w linkach, a nazwy techniczne zostawiać tylko w ścieżkach plików.

Brak krytycznych poprawek przed publikacją.
