# Status input files do ćwiczeń

Ten plik pokazuje aktualny stan materiałów wejściowych do ćwiczeń. Materiały są przechowywane w folderze `files` i zostały wdrożone w aktywnej platformie `platforma/`.

## Szybki status

- Wszystkie inputy `input_01`-`input_14` mają odpowiedniki w folderze `files`.
- Nie ma obecnie materiałów, które trzeba tworzyć od zera przed użyciem szkolenia.
- Gotowe materiały zostały podlinkowane w ćwiczeniach, modułach lub promptowniku zgodnie z ich funkcją.
- Przed publikacją wymagają decyzji tylko realne PDF-y użyte jako `input_01`-`input_03` oraz to, czy publikować pliki XLSX obok CSV dla `input_06`.
- `input_10_karty_zasad_ai_do_rankingu.docx` jest poprawnym materiałem. Brak wersji PDF nie jest brakiem. PDF można przygotować później jako wersję wygodną do druku.

## Lista robocza inputów

| Nr | Status | Plik / pliki w `files` | Wdrożenie w platformie | Uwagi |
|---|---|---|---|---|
| 01 | Wdrożone, wymaga decyzji publikacyjnej | `input_01a_dokument_szkolny_do_streszczenia_procedura_odbioru_uczniow.pdf`, `input_01b_dokument_szkolny_do_streszczenia_regulamin_wycieczek.pdf` | Moduł 3, `ex4`, prompt `B1` | Materiały działają jako dokumenty do streszczenia, ale są oparte na realnych PDF-ach. Przed publikacją trzeba potwierdzić prawo do redystrybucji. |
| 02 | Wdrożone, wymaga decyzji publikacyjnej | `input_02a_dlugi_dokument_do_analizy_egzamin_8kl_2026.pdf`, `input_02b_dlugi_dokument_do_analizy_matura_2026.pdf` | Moduł 4, `ex6` | Dobre do pracy z długim dokumentem i testu narzędzi pracujących na źródłach. Przed publikacją trzeba potwierdzić prawo do redystrybucji. |
| 03 | Wdrożone, rekomendowana para wskazana | `input_03a_dokument_do_porownania_poradnik_wyjazdow_ko_bialystok.pdf`, `input_03b_dokument_do_porownania_statut_sp_108_wroclaw.pdf`, `input_03c_dokument_do_porownania_statut_sp_suchy_las.pdf`, `input_03d_dokument_do_porownania_procedura_wycieczek.pdf` | Moduł 4, prompt `E2` | Rekomendowana para do porównania: `input_03a_dokument_do_porownania_poradnik_wyjazdow_ko_bialystok.pdf` oraz `input_03d_dokument_do_porownania_procedura_wycieczek.pdf`. Pliki `03b` i `03c` są dodatkowe. |
| 04 | Wdrożone | `input_04a_dlugi_watek_mailowy_80_lecie_szkoly.docx`, `input_04b_dlugi_watek_mailowy_szkolenie_wdn.docx` | Moduł 4, `ex9`, prompt `B2`, prompt `E3` | Fikcyjne wątki mailowe. Zawierają nagłówek o danych fikcyjnych. |
| 05 | Wdrożone | `input_05_tekst_dydaktyczny_do_adaptacji.docx` | Moduł 3, `ex3`, `ex8`, prompt `A2` | Tekst jest celowo trudny i nadaje się do ćwiczenia upraszczania oraz adaptacji. Zawiera nagłówek o danych fikcyjnych. |
| 06 | Wdrożone, XLSX opcjonalny | `input_06a_ankieta_bezpieczenstwo_w_szkole.csv`, `input_06b_ankieta_po_szkoleniu.csv`, `input_06a_ankieta_bezpieczenstwo_w_szkole.xlsx`, `input_06b_ankieta_po_szkoleniu.xlsx` | Moduł 4, `ex14`, `ex17` | CSV jest formatem głównym. XLSX może zostać jako wersja pomocnicza; arkusze mają czytelne nazwy `Opis` i `Ankieta`. |
| 07 | Wdrożone | `input_07_brief_projektu_edukacyjnego_2_przyklady.docx` | Moduł 5, `ex5`, `ex10`, prompt `D1`, prompt `D3` | Brief zawiera dwa przykłady i nagłówek o danych fikcyjnych. |
| 08 | Wdrożone | `input_08_notatki_do_maila_partner_angielski.docx` | Moduł 5, `ex7`, prompt `D2` | Notatki do przygotowania maila po angielsku. Zawiera nagłówek o danych fikcyjnych. |
| 09 | Wdrożone | `input_09_tekst_wzorcowy_do_reverse_prompting.docx` | `ex15` | Materiał do odtworzenia dobrego promptu na podstawie tekstu wzorcowego. Daty w przykładzie zostały skorygowane. Zawiera nagłówek o danych fikcyjnych. |
| 10 | Wdrożone | `input_10_karty_zasad_ai_do_rankingu.docx` | Moduł 6, `ex11`, `ex18` | Zestaw kart zasad odpowiedzialnego korzystania z AI. DOCX jest akceptowalnym formatem. PDF do druku jest opcjonalny. |
| 11 | Wdrożone | `input_11_szablon_porownania_promptow.docx` | Moduł 2, `ex16` | Prosta tabela porównawcza trzech wersji promptu. |
| 12 | Wdrożone | `input_12_szablon_mini_kodeksu_ai.docx` | Moduł 6, `ex18` | Szablon pracy zespołowej do mini-kodeksu AI. |
| 13 | Wdrożone | `input_13_plan_projektu_do_analizy_ryzyka.docx` | Moduł 5, prompt `E1` | Fikcyjny plan projektu do analizy ryzyk. Zawiera nagłówek o danych fikcyjnych. |
| 14 | Wdrożone | `input_14_karta_refleksji_i_oceny_wyniku_ai.docx` | Moduł 1, `ex1`, `ex2` | Karta refleksji po ćwiczeniach. Pole danych osobowych zostało zastąpione neutralnym oznaczeniem uczestnika lub grupy. |

## Minimalny pakiet przed publikacją

Nie trzeba przygotowywać nowych plików od zera. Przed publikacją należy tylko:

1. potwierdzić, czy realne PDF-y `input_01`-`input_03` mogą być udostępniane publicznie w repozytorium,
2. zdecydować, czy publikować XLSX dla `input_06`, czy zostawić wyłącznie CSV jako format główny.

## Materiały dodatkowe lub opcjonalne

- `input_03b_dokument_do_porownania_statut_sp_108_wroclaw.pdf` i `input_03c_dokument_do_porownania_statut_sp_suchy_las.pdf` są dodatkowymi dokumentami do porównań, ale platforma wskazuje jedną rekomendowaną parę: `03a` + `03d`.
- Wersje XLSX dla `input_06` są opcjonalne, ponieważ CSV wystarcza do ćwiczenia analizy ankiety.
- Wersja PDF dla `input_10` jest opcjonalna i może zostać przygotowana później do wygodnego druku kart.

## Uwagi redakcyjne

- Pliki fikcyjne mają widoczny nagłówek: `Materiał ćwiczeniowy - dane fikcyjne`.
- Pliki CSV pozostają czystymi tabelami danych, żeby nie zaburzać importu do narzędzi analitycznych.
- Pliki `.DS_Store` nie są materiałami szkoleniowymi i nie powinny trafiać do publikacji.
