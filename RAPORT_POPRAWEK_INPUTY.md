# Raport poprawek inputów

## 1. Wykonane zmiany

- W `input_14_karta_refleksji_i_oceny_wyniku_ai.docx` zamieniono pole `Imię i nazwisko` na `Oznaczenie uczestnika lub grupy`.
- `input_11_szablon_porownania_promptow.docx` przebudowano na prostą tabelę porównawczą trzech wersji promptu.
- Do fikcyjnych dokumentów DOCX dodano nagłówek `Materiał ćwiczeniowy – dane fikcyjne` i krótką informację o braku prawdziwych danych.
- W plikach XLSX dla `input_06` poprawiono nazwy arkuszy na `Opis` i `Ankieta`; arkusz `Opis` zawiera informację, że dane są fikcyjne.
- Zaktualizowano `BRAKUJACE_INPUTY_DO_CWICZEN.md`, aby pokazywał aktualny stan materiałów zamiast listy braków.
- Usunięto pliki `.DS_Store` z publikowanych katalogów i dodano `.DS_Store` do `.gitignore`.

## 2. Pliki zmodyfikowane

- `.gitignore`
- `BRAKUJACE_INPUTY_DO_CWICZEN.md`
- `files/input_04a_dlugi_watek_mailowy_80_lecie_szkoly.docx`
- `files/input_04b_dlugi_watek_mailowy_szkolenie_wdn.docx`
- `files/input_05_tekst_dydaktyczny_do_adaptacji.docx`
- `files/input_06a_ankieta_bezpieczenstwo_w_szkole.xlsx`
- `files/input_06b_ankieta_po_szkoleniu.xlsx`
- `files/input_07_brief_projektu_edukacyjnego_2_przyklady.docx`
- `files/input_08_notatki_do_maila_partner_angielski.docx`
- `files/input_09_tekst_wzorcowy_do_reverse_prompting.docx`
- `files/input_11_szablon_porownania_promptow.docx`
- `files/input_13_plan_projektu_do_analizy_ryzyka.docx`
- `files/input_14_karta_refleksji_i_oceny_wyniku_ai.docx`
- `RAPORT_POPRAWEK_INPUTY.md`

## 3. Pliki wymagające dalszej decyzji

- `files/input_01a_dokument_szkolny_do_streszczenia_procedura_odbioru_uczniow.pdf`
- `files/input_01b_dokument_szkolny_do_streszczenia_regulamin_wycieczek.pdf`
- `files/input_02a_dlugi_dokument_do_analizy_egzamin_8kl_2026.pdf`
- `files/input_02b_dlugi_dokument_do_analizy_matura_2026.pdf`
- `files/input_03a_dokument_do_porownania_poradnik_wyjazdow_ko_bialystok.pdf`
- `files/input_03b_dokument_do_porownania_statut_sp_108_wroclaw.pdf`
- `files/input_03c_dokument_do_porownania_statut_sp_suchy_las.pdf`
- `files/input_03d_dokument_do_porownania_procedura_wycieczek.pdf`
- `files/input_06a_ankieta_bezpieczenstwo_w_szkole.xlsx`
- `files/input_06b_ankieta_po_szkoleniu.xlsx`
- `files/input_09_tekst_wzorcowy_do_reverse_prompting.docx`

PDF-y `input_01`-`input_03` wymagają decyzji publikacyjnej, bo są oparte na realnych dokumentach. XLSX dla `input_06` są opcjonalne, ponieważ CSV wystarcza do ćwiczenia. `input_09` wymaga drobnej korekty dat w przykładowym komunikacie.

## 4. Uwagi dotyczące publikacji

- `.DS_Store` został usunięty z publikowanych katalogów.
- `.gitignore` został zaktualizowany o `.DS_Store`.
- Nie rekomenduję publikowania realnych PDF-ów `input_01`-`input_03` bez sprawdzenia źródła i prawa do redystrybucji.
- Pliki CSV dla `input_06` pozostawiono jako czyste dane tabelaryczne, bez dodatkowych wierszy nagłówkowych, żeby nie utrudniać importu.

## 5. Uwagi dotyczące `input_03`

Rekomendowana para do porównania: `input_03a_dokument_do_porownania_poradnik_wyjazdow_ko_bialystok.pdf` oraz `input_03d_dokument_do_porownania_procedura_wycieczek.pdf`.

Oba pliki dotyczą organizacji wyjazdów, ale różnią się strukturą, szczegółowością i stylem. Dzięki temu uczestnik może porównać dokument poradnikowy z dokumentem proceduralnym.
