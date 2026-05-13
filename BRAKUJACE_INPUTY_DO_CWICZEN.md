# Brakujące input files do ćwiczeń

Ten plik opisuje materiały wejściowe, które warto przygotować jako osobne pliki do pobrania z repozytorium, żeby każdy uczestnik mógł wykonać ćwiczenia bez używania własnych, potencjalnie poufnych dokumentów.

## Szybki wniosek

Platforma ma wiele promptów i kilka próbek danych wbudowanych bezpośrednio w treść ćwiczeń. Nadal brakuje jednak zestawu bezpiecznych plików startowych do zadań, które wymagają dokumentu, tekstu dydaktycznego, ankiety, briefu projektowego albo pary sprzecznych dokumentów.

Najbardziej potrzebne są:

1. przykładowy dokument szkolny do streszczenia,
2. długi dokument do analizy,
3. para dokumentów do porównania,
4. przykładowy długi wątek mailowy,
5. tekst dydaktyczny do adaptacji,
6. zanonimizowane odpowiedzi z ankiety,
7. brief projektu edukacyjnego,
8. tekst wzorcowy do reverse prompting,
9. karty zasad AI do rankingu,
10. szablony pracy zespołowej do ćwiczeń 16-18.

## Tabela szczegółowa

| Priorytet | Proponowany plik do pobrania | Gdzie jest potrzebny | Czy jest konieczny? | Co powinien zawierać | Dlaczego jest potrzebny |
|---|---|---|---|---|---|
| Krytyczny | `input_01_dokument_szkolny_do_streszczenia.docx` | Moduł 3: opcja B, `ex4` opcja A, prompt `B1`, plan wdrożenia `mp4` | Tak, jeśli uczestnik nie ma własnego dokumentu | 1-2 strony fikcyjnego zarządzenia, regulaminu, protokołu lub komunikatu szkolnego. Tekst powinien zawierać terminy, zadania, decyzje i 2-3 miejsca wymagające interpretacji. Bez danych osobowych. | Ćwiczenia proszą o wklejenie dokumentu szkolnego. Bez pliku zapasowego uczestnik musi użyć własnych dokumentów albo pominąć zadanie. |
| Krytyczny | `input_02_dlugi_dokument_do_analizy.pdf` | `ex6`, Moduł 4: analiza długiego dokumentu, prompt `B1`, prompt `H1` | Tak | Minimum 10 stron fikcyjnego dokumentu: statut, regulamin projektu, przewodnik konkursowy lub procedura. Dokument powinien mieć warunki brzegowe, terminy, wyjątki i ważne zapisy także pod koniec tekstu. | Ćwiczenie `ex6` wprost wymaga długiego dokumentu roboczego. Bez tego pliku uczestnik nie zobaczy ograniczeń zwykłego czatu przy dużej ilości tekstu. |
| Krytyczny | `input_03_dwa_dokumenty_do_porownania.docx` | Moduł 4: porównywanie dwóch dokumentów, prompt `E2` | Tak | Dwa krótkie teksty A i B dotyczące tej samej sprawy, np. procedura organizacji wyjazdu i mail z nowymi ustaleniami. Teksty powinny mieć 5-7 celowych różnic: terminy, odpowiedzialności, limity, wymagane zgody, sprzeczne zapisy. | Platforma prosi o wklejenie dwóch tekstów. Bez gotowej pary dokumentów uczestnik musi sam wymyślić materiał albo nie wykona porównania. |
| Wysoki | `input_04_dlugi_watek_mailowy_do_uporzadkowania.txt` lub `.docx` | Moduł 4: uporządkuj długi wątek, prompt `E3` | Tak dla grup bez własnych danych | 1-2 strony fikcyjnego wątku mailowego lub komunikatora. Powinien zawierać kilka osób, decyzje, zadania, terminy, pytania bez odpowiedzi i dublujące się informacje. Dane osobowe zastąpić rolami: Koordynator, Partner A, Dyrekcja. | To ćwiczenie najlepiej działa na chaotycznym materiale. Bez przykładu prowadzący musi improwizować lub prosić uczestników o prywatne wątki. |
| Wysoki | `input_05_tekst_dydaktyczny_do_adaptacji.docx` | Moduł 3: różnicowanie, `ex8`, prompt `A2` | Tak dla nauczycieli bez własnego tekstu pod ręką | Krótki tekst dydaktyczny 250-400 słów, najlepiej w dwóch wariantach tematycznych: humanistycznym i zawodowym/technicznym. Tekst powinien mieć zdania złożone, kilka pojęć trudnych i strukturę możliwą do uproszczenia. | `ex8` wymaga tekstu dydaktycznego. Gotowy plik pozwala wykonać ćwiczenie także osobom, które nie mają materiałów ze swojego przedmiotu. |
| Wysoki | `input_06_ankieta_szkoleniowa_zanonimizowana.csv` oraz `.xlsx` | Moduł 4: mini-laboratorium ankiety, `ex17`, `ex14` jako rozszerzenie | Częściowo. `ex17` ma krótką próbkę na stronie, ale plik jest potrzebny do pełniejszej pracy | 20-40 krótkich odpowiedzi tekstowych po szkoleniu lub wydarzeniu. Kolumny: `id`, `pytanie`, `odpowiedz`, `obszar`. Bez imion, maili, nazw klas i danych wrażliwych. Można dodać kilka odpowiedzi niejednoznacznych. | Wbudowana próbka jest krótka. Plik CSV/XLSX pozwala przećwiczyć realniejsze grupowanie, kategoryzację i mini-raport. |
| Wysoki | `input_07_brief_projektowy_do_modulu_5.docx` | Moduł 5: opis działania, mail do partnera, promocja; `ex5`, `ex10`, prompty `D1-D3` | Tak dla osób bez własnego projektu | Fikcyjny brief projektu edukacyjnego: nazwa, typ projektu, kraje partnerów, opis działania, data, miejsce, liczba uczestników, cele, rezultaty, ograniczenia komunikacyjne, pola brakujące. | Moduł 5 wymaga konkretnych danych projektowych. Brief zapobiega dopisywaniu przez AI zmyślonych faktów i pozwala pracować osobom spoza projektów UE. |
| Wysoki | `input_08_notatki_do_maila_partner_angielski.docx` | `ex7`, Moduł 5: mail do partnera, prompt `D2` | Częściowo. Można użyć własnych notatek, ale plik ułatwia pracę | Krótkie luźne notatki po polsku: zmiana terminu spotkania, prośba o potwierdzenie, załącznik, deadline, osoba kontaktowa jako rola. Wariant prosty i trudniejszy. | Uczestnicy często tracą czas na wymyślenie sytuacji. Gotowe notatki pozwalają od razu ćwiczyć styl i precyzję maila. |
| Wysoki | `input_09_tekst_wzorcowy_do_reverse_prompting.docx` | `ex15` | Tak | Dwa dobre teksty wzorcowe: konspekt lekcji oraz oficjalne ogłoszenie/komunikat. Każdy tekst powinien mieć wyraźny styl, strukturę i jakość, którą AI ma odtworzyć przez zaprojektowanie promptu. | `ex15` prosi uczestnika o znalezienie dobrego tekstu w internecie. Bez pliku zapasowego ćwiczenie zależy od wyszukiwania i jakości przypadkowych materiałów. |
| Wysoki | `input_10_karty_zasad_ai_do_rankingu.docx` lub `.pdf` | `ex11` | Tak | 15-20 krótkich kart zasad odpowiedzialnego używania AI, np. weryfikacja faktów, anonimizacja danych, brak oceniania ucznia wyłącznie przez AI, odpowiedzialność człowieka, oznaczanie użycia AI. Każda karta: nazwa zasady + jednozdaniowe wyjaśnienie. | `ex11` wymaga rankingu zasad. Obecnie platforma podaje przykłady, ale nie daje pełnego zestawu kart do pracy zespołowej. |
| Średni | `input_11_szablon_porownania_promptow.docx` | `ex16`, Moduł 2: prompt w trzech wersjach | Nie jako dane wejściowe, ale bardzo potrzebne jako karta pracy | Tabela: wersja promptu, co dodano, wynik AI, co działa lepiej, co wymaga poprawy, finalna wersja promptu. | Ułatwia porównanie trzech odpowiedzi AI. Bez karty pracy uczestnicy często nie zapisują różnic i ćwiczenie traci wartość refleksyjną. |
| Średni | `input_12_szablon_mini_kodeksu_ai.docx` | `ex18`, Moduł 6: mini-kodeks AI | Nie jako dane wejściowe, ale potrzebne do produktu końcowego | Jednostronicowy szablon: kontekst zespołu, 5-7 zasad, tabela `Sytuacja | Wolno / Warunkowo / Nie używamy | Ryzyko | Zabezpieczenie`, miejsce na zatwierdzenie. | Ćwiczenie kończy się stworzeniem mini-kodeksu. Szablon przyspiesza pracę i daje spójny rezultat między grupami. |
| Średni | `input_13_plan_projektu_do_analizy_ryzyka.docx` | Prompt `E1`, Moduł 5 jako rozszerzenie | Nie dla głównych ćwiczeń, ale przydatne | Krótki plan fikcyjnego działania lub projektu: cel, zakres, zespół, harmonogram, zależności, ryzyka ukryte. | Prompt `E1` wymaga planu lub procedury. Gotowy plan pozwala przećwiczyć analizę ryzyk bez proszenia uczestników o realne dokumenty. |
| Średni | `input_14_karta_refleksji_i_oceny_wyniku_ai.docx` | `ex1`, `ex2`, Moduł 1 i 2 | Nie | Prosta karta: prompt, wynik AI, ocena 1-5, co działa, co jest błędne, co trzeba dopisać, wersja poprawiona. | Nie jest warunkiem wykonania ćwiczenia, ale pomaga uczestnikom zapisać wnioski i porównać jakość promptów. |

## Ćwiczenia, które nie wymagają osobnych plików wejściowych

Te ćwiczenia można wykonać od razu na podstawie treści w platformie:

| Ćwiczenie / moduł | Dlaczego nie wymaga pliku |
|---|---|
| Moduł 1: wykryj halucynację | Prompt jest wbudowany w platformę. |
| Moduł 1: pierwszy prompt | Uczestnik może użyć własnego zadania albo przykładu z platformy. |
| `ex1` | Ma gotowy przykład ogłoszenia dla rodziców. |
| `ex2` | Trzy słabe prompty są podane w ćwiczeniu. |
| `ex9` | Notatki ze spotkania są podane w ćwiczeniu. |
| `ex12` | To checklista samooceny, bez danych wejściowych. |
| `ex13` | Prompt do symulacji rozmowy jest podany w ćwiczeniu. |
| `ex14` | Surowe odpowiedzi uczniów są podane w ćwiczeniu. |
| `ex17` w wersji krótkiej | Krótka próbka odpowiedzi jest podana w ćwiczeniu, choć do pełniejszej pracy lepszy jest plik CSV/XLSX. |
| `ex18` w wersji krótkiej | Tabela sytuacji jest wbudowana w ćwiczenie, choć szablon DOCX ułatwi pracę zespołową. |

## Minimalny pakiet do przygotowania przed publikacją

Jeśli trzeba przygotować tylko najważniejsze pliki, wystarczy ten zestaw:

1. `input_01_dokument_szkolny_do_streszczenia.docx`
2. `input_02_dlugi_dokument_do_analizy.pdf`
3. `input_03_dwa_dokumenty_do_porownania.docx`
4. `input_05_tekst_dydaktyczny_do_adaptacji.docx`
5. `input_06_ankieta_szkoleniowa_zanonimizowana.csv`
6. `input_07_brief_projektowy_do_modulu_5.docx`
7. `input_09_tekst_wzorcowy_do_reverse_prompting.docx`
8. `input_10_karty_zasad_ai_do_rankingu.pdf`

Ten pakiet pokryje najważniejsze luki w modułach 3-5 oraz w ćwiczeniach 4, 6, 8, 11, 15 i 17.

## Rekomendowana lokalizacja w repozytorium

Proponowana struktura:

```text
materialy_do_pobrania/
  input_01_dokument_szkolny_do_streszczenia.docx
  input_02_dlugi_dokument_do_analizy.pdf
  input_03_dwa_dokumenty_do_porownania.docx
  input_04_dlugi_watek_mailowy_do_uporzadkowania.docx
  input_05_tekst_dydaktyczny_do_adaptacji.docx
  input_06_ankieta_szkoleniowa_zanonimizowana.csv
  input_06_ankieta_szkoleniowa_zanonimizowana.xlsx
  input_07_brief_projektowy_do_modulu_5.docx
  input_08_notatki_do_maila_partner_angielski.docx
  input_09_tekst_wzorcowy_do_reverse_prompting.docx
  input_10_karty_zasad_ai_do_rankingu.pdf
  input_11_szablon_porownania_promptow.docx
  input_12_szablon_mini_kodeksu_ai.docx
  input_13_plan_projektu_do_analizy_ryzyka.docx
  input_14_karta_refleksji_i_oceny_wyniku_ai.docx
```

## Uwagi redakcyjne do przygotowania plików

- Wszystkie pliki powinny być fikcyjne albo całkowicie zanonimizowane.
- Nie używać prawdziwych imion, nazwisk, maili, numerów telefonów, nazw klas ani danych zdrowotnych.
- Warto oznaczyć każdy plik nagłówkiem: `Materiał ćwiczeniowy - dane fikcyjne`.
- Pliki tekstowe najlepiej przygotować w `.docx` i ewentualnie dodatkowo w `.pdf`.
- Dane ankietowe najlepiej przygotować w `.csv` i `.xlsx`.
- Długi dokument do `ex6` powinien mieć celowo ukryte ważne informacje w dalszej części, żeby dało się pokazać ryzyko pominięcia fragmentu przez AI.
