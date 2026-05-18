# Raport tłumaczenia i linków ENG

## 1. Podsumowanie

- Przetłumaczono 14 plików: 10 plików DOCX, 2 pliki CSV i 2 pliki XLSX.
- Wersje angielskie zapisano w folderze `files`, obok wersji polskich, z sufiksem `_EN` przed rozszerzeniem.
- Na platformie dodano dodatkowe linki `Download ENG version` obok polskich linków do pobrania.
- `input_08_notatki_do_maila_partner_angielski.docx` pominięto zgodnie z poleceniem.
- Nie nadpisano wersji polskich.
- Problem techniczny: nie wykonano wizualnego renderu DOCX do PNG/PDF, ponieważ w środowisku brakuje programu `soffice`. Pliki DOCX sprawdzono przez odczyt struktury i treści.

## 2. Pliki przetłumaczone

| Plik źródłowy PL | Plik utworzony EN | Format | Status | Uwagi |
|---|---|---:|---|---|
| `files/input_04a_dlugi_watek_mailowy_80_lecie_szkoly.docx` | `files/input_04a_dlugi_watek_mailowy_80_lecie_szkoly_EN.docx` | DOCX | OK | Zachowano sens wątku mailowego i nagłówek o danych fikcyjnych. |
| `files/input_04b_dlugi_watek_mailowy_szkolenie_wdn.docx` | `files/input_04b_dlugi_watek_mailowy_szkolenie_wdn_EN.docx` | DOCX | OK | Zachowano układ materiału do porządkowania korespondencji. |
| `files/input_05_tekst_dydaktyczny_do_adaptacji.docx` | `files/input_05_tekst_dydaktyczny_do_adaptacji_EN.docx` | DOCX | OK | Zachowano dwa warianty tekstu do uproszczenia i adaptacji. |
| `files/input_06a_ankieta_bezpieczenstwo_w_szkole.csv` | `files/input_06a_ankieta_bezpieczenstwo_w_szkole_EN.csv` | CSV | OK | Zachowano strukturę tabelaryczną i liczbę wierszy. |
| `files/input_06a_ankieta_bezpieczenstwo_w_szkole.xlsx` | `files/input_06a_ankieta_bezpieczenstwo_w_szkole_EN.xlsx` | XLSX | OK | Zachowano strukturę arkusza; nazwy arkuszy: `Description`, `Survey`. |
| `files/input_06b_ankieta_po_szkoleniu.csv` | `files/input_06b_ankieta_po_szkoleniu_EN.csv` | CSV | OK | Zachowano strukturę tabelaryczną i liczbę wierszy. |
| `files/input_06b_ankieta_po_szkoleniu.xlsx` | `files/input_06b_ankieta_po_szkoleniu_EN.xlsx` | XLSX | OK | Zachowano strukturę arkusza; nazwy arkuszy: `Description`, `Survey`. |
| `files/input_07_brief_projektu_edukacyjnego_2_przyklady.docx` | `files/input_07_brief_projektu_edukacyjnego_2_przyklady_EN.docx` | DOCX | OK | Zachowano dwa przykłady briefu projektu. |
| `files/input_09_tekst_wzorcowy_do_reverse_prompting.docx` | `files/input_09_tekst_wzorcowy_do_reverse_prompting_EN.docx` | DOCX | OK | Zachowano strukturę ćwiczenia reverse prompting. |
| `files/input_10_karty_zasad_ai_do_rankingu.docx` | `files/input_10_karty_zasad_ai_do_rankingu_EN.docx` | DOCX | OK | Przetłumaczono karty zasad i pola do rankingu. |
| `files/input_11_szablon_porownania_promptow.docx` | `files/input_11_szablon_porownania_promptow_EN.docx` | DOCX | OK | Zachowano tabelę porównania trzech wersji promptu. |
| `files/input_12_szablon_mini_kodeksu_ai.docx` | `files/input_12_szablon_mini_kodeksu_ai_EN.docx` | DOCX | OK | Zachowano pola do pracy zespołowej. |
| `files/input_13_plan_projektu_do_analizy_ryzyka.docx` | `files/input_13_plan_projektu_do_analizy_ryzyka_EN.docx` | DOCX | OK | Zachowano strukturę planu projektu i nagłówek o danych fikcyjnych. |
| `files/input_14_karta_refleksji_i_oceny_wyniku_ai.docx` | `files/input_14_karta_refleksji_i_oceny_wyniku_ai_EN.docx` | DOCX | OK | Zachowano neutralne oznaczenie uczestnika lub grupy. |

## 3. Pliki pominięte

| Plik | Status | Uwagi |
|---|---|---|
| `files/input_08_notatki_do_maila_partner_angielski.docx` | Pominięto | Pominięto zgodnie z poleceniem. Nie utworzono pliku `_EN` i nie dodano linku ENG. |

## 4. Linki dodane na stronie

Linki dodano przez wspólną konfigurację materiałów w `platforma/app.js`. Tekst każdego nowego linku: `Download ENG version`.

| Miejsce na stronie / plik źródłowy | Ścieżka do pliku `_EN` |
|---|---|
| Moduł 4, ćwiczenie `ex9`, prompt `B2`, prompt `E3` / `platforma/app.js`, `platforma/js/content/modules.js` | `../files/input_04a_dlugi_watek_mailowy_80_lecie_szkoly_EN.docx` |
| Moduł 4, ćwiczenie `ex9`, prompt `B2`, prompt `E3` / `platforma/app.js`, `platforma/js/content/modules.js` | `../files/input_04b_dlugi_watek_mailowy_szkolenie_wdn_EN.docx` |
| Moduł 3, ćwiczenia `ex3`, `ex8`, prompt `A2` / `platforma/app.js`, `platforma/js/content/modules.js` | `../files/input_05_tekst_dydaktyczny_do_adaptacji_EN.docx` |
| Moduł 4, ćwiczenia `ex14`, `ex17` / `platforma/app.js`, `platforma/js/content/modules.js` | `../files/input_06a_ankieta_bezpieczenstwo_w_szkole_EN.csv` |
| Moduł 4, ćwiczenia `ex14`, `ex17` / `platforma/app.js`, `platforma/js/content/modules.js` | `../files/input_06b_ankieta_po_szkoleniu_EN.csv` |
| Moduł 4, ćwiczenie `ex17` / `platforma/app.js`, `platforma/js/content/modules.js` | `../files/input_06a_ankieta_bezpieczenstwo_w_szkole_EN.xlsx` |
| Moduł 4, ćwiczenie `ex17` / `platforma/app.js`, `platforma/js/content/modules.js` | `../files/input_06b_ankieta_po_szkoleniu_EN.xlsx` |
| Moduł 5, ćwiczenia `ex5`, `ex10`, prompt `D1`, prompt `D3` / `platforma/app.js`, `platforma/js/content/modules.js` | `../files/input_07_brief_projektu_edukacyjnego_2_przyklady_EN.docx` |
| Ćwiczenie `ex15` / `platforma/app.js` | `../files/input_09_tekst_wzorcowy_do_reverse_prompting_EN.docx` |
| Moduł 6, ćwiczenia `ex11`, `ex18` / `platforma/app.js`, `platforma/js/content/modules.js` | `../files/input_10_karty_zasad_ai_do_rankingu_EN.docx` |
| Moduł 2, ćwiczenie `ex16` / `platforma/app.js`, `platforma/js/content/modules.js` | `../files/input_11_szablon_porownania_promptow_EN.docx` |
| Moduł 6, ćwiczenie `ex18` / `platforma/app.js`, `platforma/js/content/modules.js` | `../files/input_12_szablon_mini_kodeksu_ai_EN.docx` |
| Moduł 5, prompt `E1` / `platforma/app.js`, `platforma/js/content/modules.js` | `../files/input_13_plan_projektu_do_analizy_ryzyka_EN.docx` |
| Moduł 1, ćwiczenia `ex1`, `ex2` / `platforma/app.js`, `platforma/js/content/modules.js` | `../files/input_14_karta_refleksji_i_oceny_wyniku_ai_EN.docx` |

Kontrola Playwright wykazała 41 widocznych wystąpień linku `Download ENG version` na podstronach platformy. Wszystkie prowadzą do istniejących plików.

## 5. Problemy techniczne

- Nie udało się wykonać wizualnego renderu DOCX, ponieważ narzędzie renderujące wymaga `soffice`, którego nie ma w środowisku.
- Nie wykryto problemów z odczytem plików DOCX, CSV ani XLSX.
- Nie wykryto problemów z linkami do plików `_EN`.
- Nie dodano linku ENG przy `input_08`.
- Projekt jest stroną statyczną i nie ma skryptu `package.json` z buildem, testem ani lintem.

## 6. Kontrola jakości

- Sprawdzono, czy w treści plików `_EN` nie pozostały przypadkowe polskie fragmenty ani polskie znaki diakrytyczne.
- Sprawdzono, czy pliki DOCX otwierają się przez `python-docx`.
- Sprawdzono, czy pliki XLSX otwierają się przez `openpyxl` i zachowują arkusze oraz dane.
- Sprawdzono, czy pliki CSV zachowują strukturę wierszy i kolumn.
- Sprawdzono, czy wszystkie `enPath` w `platforma/app.js` prowadzą do istniejących plików.
- Sprawdzono, że wersje polskie pozostały na miejscu i nie zostały zastąpione wersjami angielskimi.
- Sprawdzono składnię `platforma/app.js` przez `node --check`.

## 7. Rekomendacje końcowe

1. Otworzyć wizualnie wybrane pliki DOCX w Wordzie lub LibreOffice przed publikacją, ponieważ automatyczny render nie był dostępny w tym środowisku.
2. Jeżeli materiały będą drukowane, sprawdzić podział stron w najdłuższych plikach DOCX.
3. Zachować `input_08` wyłącznie w wersji polskiej, zgodnie z aktualną decyzją.
4. Przy kolejnych zmianach w polskich plikach aktualizować odpowiadające im wersje `_EN`.
5. Po publikacji sprawdzić linki z docelowego adresu GitHub Pages lub hostingu.
