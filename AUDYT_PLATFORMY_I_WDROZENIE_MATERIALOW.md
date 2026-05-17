# Audyt platformy i wdrożenie materiałów

## 1. Podsumowanie wykonawcze

- Platforma 6-modułowa w folderze `platforma/` jest kompletna pod kątem aktywnych modułów, ćwiczeń, promptownika, checklist, slajdów i materiałów do pobrania.
- Gotowe materiały z folderu `files` zostały wdrożone jako linki do pobrania w ćwiczeniach, modułach i promptowniku tam, gdzie są potrzebne.
- Nie znaleziono aktywnych braków typu TODO, placeholder, "w przygotowaniu" ani linków do nieistniejących materiałów w aktywnej platformie.
- Pliki są technicznie gotowe do publikacji. Decyzji człowieka wymagają tylko realne PDF-y `input_01`-`input_03` pod kątem prawa do redystrybucji oraz publikowanie XLSX obok CSV dla `input_06`.
- Platforma nadaje się do użycia podczas szkolenia po decyzji publikacyjnej dotyczącej realnych PDF-ów.

## 2. Zakres sprawdzenia

Sprawdzone zostały:

- aktywna strona `platforma/index.html`,
- moduły `module1`-`module6` w `platforma/js/content/modules.js`,
- ćwiczenia `ex1`-`ex18` w `platforma/app.js`,
- promptownik, checklisty, slajdy, bibliografia, infografiki i plan wdrożenia w `platforma/app.js`,
- folder `files`,
- dokumenty `BRAKUJACE_INPUTY_DO_CWICZEN.md` i `MATERIALY_DO_POBRANIA.md`,
- linki do plików i lokalnych assetów,
- `.DS_Store` i `.gitignore`,
- składnia JS oraz renderowanie widoków w lokalnym serwerze.

## 3. Wdrożone materiały do ćwiczeń

| Plik | Gdzie został wdrożony | Forma | Funkcja |
|---|---|---|---|
| `input_01a_dokument_szkolny_do_streszczenia_procedura_odbioru_uczniow.pdf` | Moduł 3, `ex4`, prompt `B1` | link do pobrania | dokument do streszczenia |
| `input_01b_dokument_szkolny_do_streszczenia_regulamin_wycieczek.pdf` | Moduł 3, `ex4`, prompt `B1` | link do pobrania | drugi dokument do streszczenia |
| `input_02a_dlugi_dokument_do_analizy_egzamin_8kl_2026.pdf` | Moduł 4, `ex6` | link do pobrania | długi dokument do analizy |
| `input_02b_dlugi_dokument_do_analizy_matura_2026.pdf` | Moduł 4, `ex6` | link do pobrania | długi dokument do analizy |
| `input_03a_dokument_do_porownania_poradnik_wyjazdow_ko_bialystok.pdf` | Moduł 4, prompt `E2` | link do pobrania | dokument A do porównania |
| `input_03d_dokument_do_porownania_procedura_wycieczek.pdf` | Moduł 4, prompt `E2` | link do pobrania | dokument B do porównania |
| `input_04a_dlugi_watek_mailowy_80_lecie_szkoly.docx` | Moduł 4, `ex9`, prompt `B2`, prompt `E3` | link do pobrania | porządkowanie długiego wątku |
| `input_04b_dlugi_watek_mailowy_szkolenie_wdn.docx` | Moduł 4, `ex9`, prompt `B2`, prompt `E3` | link do pobrania | drugi wariant wątku |
| `input_05_tekst_dydaktyczny_do_adaptacji.docx` | Moduł 3, `ex3`, `ex8`, prompt `A2` | link do pobrania | upraszczanie i adaptacja tekstu |
| `input_06a_ankieta_bezpieczenstwo_w_szkole.csv` | Moduł 4, `ex14`, `ex17` | link do pobrania | dane ankietowe CSV |
| `input_06b_ankieta_po_szkoleniu.csv` | Moduł 4, `ex14`, `ex17` | link do pobrania | dane ankietowe CSV |
| `input_06a_ankieta_bezpieczenstwo_w_szkole.xlsx` | Moduł 4, `ex17` | link do pobrania | opcjonalny arkusz XLSX |
| `input_06b_ankieta_po_szkoleniu.xlsx` | Moduł 4, `ex17` | link do pobrania | opcjonalny arkusz XLSX |
| `input_07_brief_projektu_edukacyjnego_2_przyklady.docx` | Moduł 5, `ex5`, `ex10`, prompt `D1`, prompt `D3` | link do pobrania | brief do opisu, raportu i promocji |
| `input_08_notatki_do_maila_partner_angielski.docx` | Moduł 5, `ex7`, prompt `D2` | link do pobrania | notatki do maila po angielsku |
| `input_09_tekst_wzorcowy_do_reverse_prompting.docx` | `ex15` | link do pobrania | tekst wzorcowy do reverse prompting |
| `input_10_karty_zasad_ai_do_rankingu.docx` | Moduł 6, `ex11`, `ex18` | link do pobrania | karty zasad do rankingu |
| `input_11_szablon_porownania_promptow.docx` | Moduł 2, `ex16` | link do pobrania | karta pracy do porównania promptów |
| `input_12_szablon_mini_kodeksu_ai.docx` | Moduł 6, `ex18` | link do pobrania | szablon mini-kodeksu |
| `input_13_plan_projektu_do_analizy_ryzyka.docx` | Moduł 5, prompt `E1` | link do pobrania | plan projektu do analizy ryzyka |
| `input_14_karta_refleksji_i_oceny_wyniku_ai.docx` | Moduł 1, `ex1`, `ex2` | link do pobrania | karta refleksji po pracy z AI |

## 4. Miejsca, w których usunięto informacje o brakach

| Lokalizacja | Co było wcześniej | Co zostało zmienione |
|---|---|---|
| `BRAKUJACE_INPUTY_DO_CWICZEN.md` | lista brakujących lub częściowo brakujących inputów | plik przepisany jako aktualny status: wdrożone, opcjonalne, wymagające decyzji |
| `MATERIALY_DO_POBRANIA.md` | lista docelowych plików do przygotowania | lista produkcyjna realnych plików z `files` i miejsc użycia |
| `platforma/app.js` | ćwiczenia często opisywały potrzebę materiału, ale bez linku | dodano widoczne boksy z linkami do właściwych plików |
| `platforma/js/content/modules.js` | moduły odsyłały do zadań lub własnych materiałów bez gotowych plików | dodano linki do plików obok instrukcji ćwiczeń |
| `platforma/app.js`, promptownik | prompty nie miały materiałów startowych | dodano materiały przy promptach wymagających konkretnego inputu |

## 5. Linki do pobrania

| Tekst linku | Ścieżka pliku | Gdzie występuje |
|---|---|---|
| Pobierz procedurę odbioru uczniów | `../files/input_01a_dokument_szkolny_do_streszczenia_procedura_odbioru_uczniow.pdf` | Moduł 3, `ex4`, prompt `B1` |
| Pobierz regulamin wycieczek | `../files/input_01b_dokument_szkolny_do_streszczenia_regulamin_wycieczek.pdf` | Moduł 3, `ex4`, prompt `B1` |
| Pobierz dokument o egzaminie ósmoklasisty | `../files/input_02a_dlugi_dokument_do_analizy_egzamin_8kl_2026.pdf` | Moduł 4, `ex6` |
| Pobierz dokument o egzaminie maturalnym | `../files/input_02b_dlugi_dokument_do_analizy_matura_2026.pdf` | Moduł 4, `ex6` |
| Pobierz dokument A: poradnik organizacji wyjazdów | `../files/input_03a_dokument_do_porownania_poradnik_wyjazdow_ko_bialystok.pdf` | Moduł 4, prompt `E2` |
| Pobierz dokument B: procedura wycieczek | `../files/input_03d_dokument_do_porownania_procedura_wycieczek.pdf` | Moduł 4, prompt `E2` |
| Pobierz wątek mailowy: 80-lecie szkoły | `../files/input_04a_dlugi_watek_mailowy_80_lecie_szkoly.docx` | Moduł 4, `ex9`, prompt `B2`, prompt `E3` |
| Pobierz wątek mailowy: szkolenie WDN | `../files/input_04b_dlugi_watek_mailowy_szkolenie_wdn.docx` | Moduł 4, `ex9`, prompt `B2`, prompt `E3` |
| Pobierz tekst dydaktyczny do adaptacji | `../files/input_05_tekst_dydaktyczny_do_adaptacji.docx` | Moduł 3, `ex3`, `ex8`, prompt `A2` |
| Pobierz CSV: bezpieczeństwo w szkole | `../files/input_06a_ankieta_bezpieczenstwo_w_szkole.csv` | Moduł 4, `ex14`, `ex17` |
| Pobierz CSV: ankieta po szkoleniu | `../files/input_06b_ankieta_po_szkoleniu.csv` | Moduł 4, `ex14`, `ex17` |
| Pobierz XLSX: bezpieczeństwo w szkole | `../files/input_06a_ankieta_bezpieczenstwo_w_szkole.xlsx` | Moduł 4, `ex17` |
| Pobierz XLSX: ankieta po szkoleniu | `../files/input_06b_ankieta_po_szkoleniu.xlsx` | Moduł 4, `ex17` |
| Pobierz brief projektu edukacyjnego | `../files/input_07_brief_projektu_edukacyjnego_2_przyklady.docx` | Moduł 5, `ex5`, `ex10`, prompt `D1`, prompt `D3` |
| Pobierz notatki do maila po angielsku | `../files/input_08_notatki_do_maila_partner_angielski.docx` | Moduł 5, `ex7`, prompt `D2` |
| Pobierz teksty wzorcowe do reverse prompting | `../files/input_09_tekst_wzorcowy_do_reverse_prompting.docx` | `ex15` |
| Pobierz karty zasad AI do rankingu | `../files/input_10_karty_zasad_ai_do_rankingu.docx` | Moduł 6, `ex11`, `ex18` |
| Pobierz szablon porównania promptów | `../files/input_11_szablon_porownania_promptow.docx` | Moduł 2, `ex16` |
| Pobierz szablon mini-kodeksu AI | `../files/input_12_szablon_mini_kodeksu_ai.docx` | Moduł 6, `ex18` |
| Pobierz plan projektu do analizy ryzyka | `../files/input_13_plan_projektu_do_analizy_ryzyka.docx` | Moduł 5, prompt `E1` |
| Pobierz kartę refleksji i oceny wyniku AI | `../files/input_14_karta_refleksji_i_oceny_wyniku_ai.docx` | Moduł 1, `ex1`, `ex2` |

## 6. Treści wstawione bezpośrednio na stronę

- W Modułu 4 i promptcie `E2` dodano jasną rekomendację pary dokumentów do porównania: `input_03a...` oraz `input_03d...`. To eliminuje losowy wybór spośród kilku PDF-ów.
- Przy boksach materiałów dodano krótką informację o języku polskim plików i sposobie pracy w innym języku.
- Nie wklejano całych długich dokumentów na stronę. Długie DOCX, PDF, CSV i XLSX są linkami do pobrania.

## 7. Informacje o tłumaczeniu plików polskich

Informacja o tłumaczeniu jest generowana przy boksach materiałów do pobrania w:

- `platforma/app.js` - ćwiczenia `ex1`-`ex18` i promptownik,
- `platforma/js/content/modules.js` - moduły 1-6.

Treść informacji:

> Uwaga: pliki do pobrania są przygotowane w języku polskim. Jeśli pracujesz w innym języku, przetłumacz dokument albo wklej jego treść do narzędzia AI i poproś o tłumaczenie oraz dalszą pracę w wybranym języku.

## 8. Pliki gotowe, ale niewdrożone

| Plik | Dlaczego nie został wdrożony jako główny materiał |
|---|---|
| `input_03b_dokument_do_porownania_statut_sp_108_wroclaw.pdf` | dodatkowy statut; platforma potrzebuje jednej rekomendowanej pary do porównania |
| `input_03c_dokument_do_porownania_statut_sp_suchy_las.pdf` | dodatkowy statut; platforma potrzebuje jednej rekomendowanej pary do porównania |

## 9. Pliki problematyczne lub wymagające decyzji

- `input_01a`, `input_01b`, `input_02a`, `input_02b`, `input_03a`, `input_03b`, `input_03c`, `input_03d`: to realne PDF-y. Technicznie działają, ale przed publiczną publikacją repozytorium trzeba potwierdzić prawo do ich udostępnienia.
- `input_06a_*.xlsx` i `input_06b_*.xlsx`: poprawne technicznie, ale opcjonalne. CSV wystarczy do ćwiczenia; XLSX można zostawić jako wygodniejszy wariant dla uczestników.
- Nie znaleziono pustych plików, brakujących plików ani oczywistych duplikatów technicznych w aktywnie wdrożonych materiałach.

## 10. Kontrola jakości

- Nie wykryto aktywnych fragmentów typu TODO, placeholder, "coming soon" ani nieaktualnych informacji o brakujących materiałach.
- Materiały fikcyjne w DOCX mają nagłówek o danych fikcyjnych.
- `input_14` nie zawiera pola "Imię i nazwisko"; używa neutralnego oznaczenia uczestnika lub grupy.
- `input_09` ma skorygowaną zgodność dat w przykładowym komunikacie.
- Nie znaleziono wyraźnego "AI slop" w elementach wdrażanych jako inputy. Największe ryzyko jakościowe nie dotyczy stylu, tylko praw do publicznego udostępniania realnych PDF-ów.

## 11. Test techniczny

Wykonane testy:

- `node --check platforma/app.js` - OK,
- `node --check platforma/js/content/modules.js` - OK,
- `node --check platforma/js/data/search-index.js` - OK,
- `node --check platforma/js/data/slides-data.js` - OK,
- statyczna kontrola ścieżek: 21 ścieżek materiałów z `COURSE_FILES`, 0 braków,
- lokalny serwer `python3 -m http.server 8765` + Playwright: 14 widoków renderuje się bez błędów konsoli,
- Playwright: 21 unikalnych linków do materiałów, 0 linków zwracających błąd,
- `find . -name .DS_Store -print` - brak plików `.DS_Store`.

Nie uruchamiano `npm build`, ponieważ aktywna platforma jest statyczna i w repozytorium nie ma głównego `package.json` dla tej strony.

## 12. Pozostałe działania

1. Potwierdzić prawo do publicznego udostępniania realnych PDF-ów `input_01`-`input_03`.
2. Podjąć decyzję, czy XLSX dla `input_06` zostają w publikacji obok CSV.
3. Opcjonalnie przygotować PDF do druku dla `input_10_karty_zasad_ai_do_rankingu.docx`.
4. Opcjonalnie zdecydować, czy dodatkowe PDF-y `input_03b` i `input_03c` zostają w `files`, czy trafiają do materiałów dodatkowych/archiwum.

Brak krytycznych działań technicznych przed publikacją.
