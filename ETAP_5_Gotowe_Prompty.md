# ETAP 5. GOTOWE PROMPTY I SCENARIUSZE UŻYCIA
## Zestaw 30 profesjonalnych promptów dla nauczycieli i pracowników szkoły

---

> **Jak korzystać z tego zestawu:**
> Każdy prompt ma wersję PODSTAWOWĄ i ULEPSZONĄ. Zacznij od wersji podstawowej – działa dobrze w 80% przypadków. Wersja ulepszona daje lepsze wyniki w złożonych lub specyficznych sytuacjach. Zawsze przeczytaj wynik przed użyciem i dostosuj do swojego kontekstu.

---

## KATEGORIA A: NAUCZYCIEL – DYDAKTYKA (7 promptów)

---

### A1 – Konspekt lekcji

**Nazwa zastosowania:** Generowanie konspektu lekcji

**Kiedy używać:** Planowanie lekcji – zwłaszcza gdy potrzebujesz struktury i nowych pomysłów na aktywności

**Czego pilnować:**
- Sprawdź, czy aktywności są realistyczne do wykonania w podanym czasie
- Zweryfikuj poprawność merytoryczną treści
- Dostosuj do konkretnych uczniów i klasy

**Jak sprawdzić jakość odpowiedzi:**
- Czy konspekt jest wykonywalny w 45 minutach?
- Czy zawiera element angażujący uczniów (nie tylko wykład)?
- Czy zawiera element sprawdzenia wiedzy?
- Czy poziom treści pasuje do klasy?

---

**Wersja PODSTAWOWA:**
```
Przygotuj konspekt lekcji (45 minut) na temat: [TEMAT]
Klasa: [klasa i wiek]
Przedmiot: [przedmiot]
Format: tabela Czas | Aktywność | Materiały
```

**Wersja ULEPSZONA:**
```
Działaj jako doświadczony nauczyciel [PRZEDMIOT] pracujący w [TYP SZKOŁY].
Przygotuj konspekt lekcji (45 minut) na temat [TEMAT SZCZEGÓŁOWY] dla uczniów [KLASA, WIEK].
Kontekst klasy: [OPIS, np. "klasa zróżnicowana poziomowo, kilkoro uczniów ze specyfiką dysleksji"]
Wymagania:
- angażujące wprowadzenie (max 5 min), motywujące do tematu
- co najmniej jedna praca w grupach lub parach (10–15 min)
- element sprawdzenia wiedzy na wyjście (5 min)
- zaproponuj jedno ćwiczenie dla uczniów zdolnych i jedno dla wspierające
Styl: praktyczny, możliwy do użycia w polskiej szkole, bez teoretycznych abstrakcji
Format: Tabela | Czas | Aktywność | Opis | Materiały | Uwagi
```

---

### A2 – Różnicowanie materiału

**Nazwa zastosowania:** Adaptacja tekstu do różnych poziomów uczniów

**Kiedy używać:** Kiedy masz materiał dla "średniego" ucznia i potrzebujesz wersji dla uczniów słabszych/mocniejszych

**Czego pilnować:**
- Sprawdź, czy wersja dla słabszych zachowuje cały zakres merytoryczny
- Upewnij się, że sposób wyrażenia jest naturaly (nie sztuczny lub dziwaczny)

**Jak sprawdzić jakość:**
- Czy wersja podstawowa jest rzeczywiście prostsza (krótsze zdania, mniej pojęć)?
- Czy wersja rozszerzona zawiera rzeczywiste pogłębienie, nie tylko więcej słów?

**Wersja PODSTAWOWA:**
```
Mam poniższy tekst dla uczniów klasy [X]:
[TEKST]
Przepisz go w dwóch wersjach:
A) dla uczniów słabszych (uproszczony język, krótkie zdania)
B) dla uczniów zdolnych (głębsze treści, pytania do refleksji)
```

**Wersja ULEPSZONA:**
```
Mam poniższy tekst edukacyjny przeznaczony dla uczniów klasy [KLASA]:
[WKLEJ TEKST]

Przygotuj trzy wersje tego tekstu:

WERSJA A – dla uczniów z trudnościami w czytaniu / dysleksją:
- zdania max 12 słów
- akapity max 3 zdania
- każde kluczowe pojęcie wyjaśnione bezpośrednio po użyciu
- zachowany cały zakres merytoryczny

WERSJA B – oryginalna (bez zmian – pozostaw tekst jak jest)

WERSJA C – dla uczniów zdolnych:
- dodaj 3 pytania otwarte do refleksji na końcu tekstu
- dodaj "wyzwanie do myślenia": jedno pytanie łączące temat z szerszym kontekstem
- zaproponuj jedno zadanie badawcze "dla chętnych"

Zachowaj numerację wersji w odpowiedzi.
```

---

### A3 – Pytania sprawdzające (Bloom)

**Nazwa zastosowania:** Generowanie zestawu pytań dla różnych poziomów taksonomii Blooma

**Kiedy używać:** Tworzenie testów, quizów, kart pracy, sprawdzianów, exit tickets

**Czego pilnować:** Zawsze sprawdź merytorycznie, czy pytania są poprawne; pytania Bloom 3 (ewaluacja/tworzenie) wymagają sprawdzenia subtelności

**Wersja PODSTAWOWA:**
```
Przygotuj 10 pytań sprawdzających do tematu: [TEMAT]
Podziel na: zapamiętanie/rozumienie (5 pytań) i analiza/ocena (5 pytań)
Podaj klucz odpowiedzi.
```

**Wersja ULEPSZONA:**
```
Przygotuj kompletny zestaw pytań sprawdzających do tematu: [TEMAT] dla uczniów [KLASA].

POZIOM 1 – ZAPAMIĘTANIE I ROZUMIENIE (5 pytań)
Pytania zamknięte lub krótkie odpowiedzi. Klucz odpowiedzi.

POZIOM 2 – ZASTOSOWANIE I ANALIZA (4 pytania)  
Pytania wymagające odwołania się do przykładu, porównania, wyjaśnienia mechanizmu. Sugestia dobrej odpowiedzi.

POZIOM 3 – OCENA I TWORZENIE (2 pytania)
Pytania otwarte wymagające własnego stanowiska i uzasadnienia. Kryteria oceny odpowiedzi zamiast przykładowej odpowiedzi.

Format tabeli: Poziom Blooma | Pytanie | Oczekiwana odpowiedź / Kryteria
```

---

### A4 – Informacja zwrotna

**Nazwa zastosowania:** Szkicowanie spersonalizowanej informacji zwrotnej do pracy ucznia

**Kiedy używać:** Ocenianie prac pisemnych lub projektów; szczególnie przy dużych klasach

**Czego pilnować:**
- NIGDY nie wklejaj prawdziwego imienia i nazwiska ucznia do AI (RODO)
- Finalna informacja zwrotna wymaga Twojego własnego osądu pedagogicznego
- AI nie zna kontekstu ucznia – dodaj go sam/a

**Wersja PODSTAWOWA:**
```
Mam poniższy fragment pracy ucznia (dane zanonimizowane):
[WKLEJ FRAGMENT]
Napisz krótką (5 zdań) informację zwrotną: co uczeń zrobił dobrze, co wymaga poprawy, jedna konkretna sugestia.
```

**Wersja ULEPSZONA:**
```
Jestem nauczycielem [PRZEDMIOT]. Oceniam pracę ucznia (Uczeń A, dane zanonimizowane).
Kryterium oceny: [OPIS KRYTERIUM, np. "poprawność merytoryczna, struktura argumentacji, jakość języka"]
Praca ucznia:
[WKLEJ FRAGMENT PRACY – BEZ DANYCH OSOBOWYCH]

Napisz informację zwrotną o charakterze formatywnym (rozwijającym):
1. Dwa konkretne elementy, które uczeń zrobił dobrze (z odniesieniem do tekstu)
2. Jeden concrete obszar do poprawy (z przykładową sugestią, jak to ulepszyć)
3. Jedno pytanie otwarte, które prowadzi ucznia do refleksji nad własną pracą
Styl: motywujący, konkretny, bez ogólnikowego chwalenia lub krytyki
Długość: max 120 słów
```

---

### A5 – Przykłady i analogie

**Nazwa zastosowania:** Generowanie analogii i przykładów do trudnych pojęć

**Kiedy używać:** Kiedy pojęcie jest abstrakcyjne i uczniowie nie rozumieją; kiedy szukasz nowego sposobu wyjaśnienia

**Czego pilnować:** Sprawdź, czy analogia jest precyzyjna merytorycznie – AI może tworzyć efektowne, ale niepoprawne analogie

**Wersja PODSTAWOWA:**
```
Wyjaśnij pojęcie [POJĘCIE] używając 3 różnych analogii dla uczniów [KLASA].
```

**Wersja ULEPSZONA:**
```
Działaj jako nauczyciel [PRZEDMIOT] szukający nowych sposobów wyjaśnienia trudnego pojęcia.
Pojęcie: [POJĘCIE ABSTRAKCYJNE]
Wiek uczniów: [WIEK]
Kontekst kulturowy i zainteresowania uczniów: [np. "gry komputerowe, YouTube, sport, muzyka"]

Zaproponuj 4 różne analogie lub porównania dla tego pojęcia:
1. Analogia z życia codziennego
2. Analogia do popularnej gry / technologii / mediów społecznościowych
3. Analogia wizualna (coś, co można narysować na tablicy)
4. Analogia przez kontrast (czym NIE jest to pojęcie)

Dla każdej analogii: jedno zdanie wyjaśnienia + wskazanie, gdzie analogia "urywa się" (tj. czego nie oddaje)
```

---

### A6 – Rubryka oceniania

**Nazwa zastosowania:** Tworzenie rubryk do oceniania zadań pisemnych, prezentacji lub projektów

**Kiedy używać:** Tworzenie przejrzystych kryteriów oceniania; przygotowanie uczniów do zadania

**Czego pilnować:** Dostosuj nomenklaturę ocen do polskiej skali (1-6 lub wpisowych punktów)

**Wersja PODSTAWOWA:**
```
Przygotuj rubrykę oceniania dla [OPIS ZADANIA] dla uczniów [KLASA].
4 stopnie: Świetnie / Dobrze / Wymaga poprawy / Niewystarczająco
```

**Wersja ULEPSZONA:**
```
Przygotuj szczegółową rubrykę oceniania dla zadania: [OPIS ZADANIA]
Klasa: [KLASA], przedmiot: [PRZEDMIOT]
Skala: punktowa (max [N] punktów) lub 5-stopniowa (zapisz, którą preferujesz)

Kryteria oceniania (zastosuj wszystkie, które pasują do zadania):
- poprawność merytoryczna
- struktura i organizacja
- jakość języka / wysłowienie
- oryginalność lub samodzielność myślenia
- zachowanie formatowania / wymagań formalnych

Format: Tabela | Kryterium | Doskonały | Dobry | Wystarczający | Niewystarczający | Punktacja
Dodaj na dole: 3 pytania, które uczeń może sobie zadać PRZED oddaniem pracy (samoewaluacja)
```

---

### A7 – Plan powtórkowy

**Nazwa zastosowania:** Generowanie struktury lekcji powtórkowej lub planu przygotowań do egzaminu

**Kiedy używać:** Przed sprawdzianem, egzaminem ósmoklasisty, maturą; planowanie lekcji powtórkowej

**Wersja PODSTAWOWA:**
```
Przygotuj plan 2-godzinnej lekcji powtórkowej z [PRZEDMIOT] obejmującej tematy: [LISTA TEMATÓW] dla klasy [KLASA].
```

**Wersja ULEPSZONA:**
```
Działaj jako nauczyciel [PRZEDMIOT] przygotowujący klasę do [EGZAMIN/SPRAWDZIAN].
Czas: 2 x 45 minut (dwie lekcje)
Tematy do powtórzenia: [LISTA – max 5 tematów]
Profil klasy: [np. "połowa klasy dobrze opanowała materiał, 1/3 ma braki w partiach X i Y"]

Plan powtórki:
Lekcja 1: szybka diagnoza i przypomnienie podstaw
Lekcja 2: ćwiczenia poziomowe i praca z trudniejszym materiałem

Dla każdej lekcji:
- konkretne aktywności z timingiem
- co najmniej jedna technika angażująca (np. quiz, praca w parach, kahoot-style)
- materiały potrzebne do przygotowania
Uwagi: gdzie uczniowie najczęściej robią błędy w tym obszarze?
```

---

## KATEGORIA B: NAUCZYCIEL – ORGANIZACJA PRACY (5 promptów)

---

### B1 – Streszczenie dokumentu

**Nazwa zastosowania:** Ekstrakcja kluczowych informacji z długich dokumentów

**Kiedy używać:** Zarządzenia, regulaminy, wytyczne, raporty, protokoły – szybkie wyciągnięcie esencji

**Czego pilnować:** Usuń dane osobowe przed wklejeniem; sprawdź, czy AI nie pominęła czegoś ważnego

**Wersja PODSTAWOWA:**
```
Poniżej wklejam dokument. Streszcz go w 5 zdaniach i wyciągnij listę działań/zadań z terminami:
[DOKUMENT]
```

**Wersja ULEPSZONA:**
```
Poniżej wklejam dokument [TYP: zarządzenie/regulamin/protokół/wytyczne] (dane osobowe usunięte):
[WKLEJ TEKST]

Przygotuj:
1. STRESZCZENIE WYKONAWCZE: 3–5 zdań – co to jest i co z tego wynika
2. LISTA ZADAŃ: co konkretnie muszę/musimy zrobić (działania, nie ogólniki), w formie checklisty
3. TERMINY: wyciągnij wszystkie daty i deadliny w kolejności chronologicznej
4. PYTANIA DO WYJAŚNIENIA: co jest niejasne lub wymaga potwierdzenia (jeśli coś zauważasz)

Format: cztery osobne sekcje z nagłówkami
```

---

### B2 – Plan tygodnia / harmonogram

**Nazwa zastosowania:** Tworzenie tygodniowych planów działań lub harmonogramów

**Kiedy używać:** Planowanie tygodnia pracy, planowanie przygotowań do wydarzeń szkolnych

**Wersja PODSTAWOWA:**
```
Pomóż mi zaplanować tydzień pracy nauczyciela w szkole. Mam do zrobienia: [LISTA ZADAŃ].
```

**Wersja ULEPSZONA:**
```
Działaj jako asystent organizacyjny nauczyciela w polskiej szkole.
Mam za zadanie w tym tygodniu (poniedziałek–piątek):
[WKLEJ LISTĘ ZADAŃ]

Dodatkowe ograniczenia:
- Lekcje: [WPISZ ILE LEKCJI DZIENNIE LUB GODZINY PRACY]
- Spotkania stałe: [WPISZ, np. "środa 14:30 – rada pedagogiczna"]
- Termin nieprzekraczalny: [WPISZ]

Przygotuj tygodniowy plan działań:
- Który dzień na które zadanie (uwzględnij priorytet i czas potrzebny)
- Zaznacz zadania wymagające spokoju i skupienia (praca głęboka) vs. można robić między lekcjami (praca pobieżna)
- Jeśli lista jest za długa na jeden tydzień – wskaż, co można przesunąć

Format: tabela Dzień | Czas | Zadanie | Priorytet | Uwagi
```

---

### B3 – Checklista organizacyjna

**Nazwa zastosowania:** Generowanie checklisty do organizacji wydarzeń szkolnych

**Kiedy używać:** Wycieczki, olimpiady, dni otwarte, spotkania, konferencje, mobilności projektowe

**Wersja PODSTAWOWA:**
```
Przygotuj checklistę 30 punktów do organizacji wycieczki szkolnej dla klasy VIII.
```

**Wersja ULEPSZONA:**
```
Działaj jako doświadczony organizator imprez szkolnych.
Wydarzenie: [TYP, np. wycieczka szkolna / dzień otwarty / olimpiada / mobilność Erasmus+]
Szczegóły: [OPIS: kto uczestniczy, kiedy, gdzie, jak wielu uczestników]

Przygotuj kompletną checklistę przygotowań, podzieloną na etapy czasowe:
- 4–6 tygodni przed wydarzeniem
- 2–3 tygodnie przed
- 1 tydzień przed
- dzień przed
- w dniu wydarzenia
- po wydarzeniu (sprawozdanie, dokumentacja, podziękowania)

Dla każdego punktu: działanie + osoba odpowiedzialna [wpisz: ja / inny nauczyciel / dyrekcja / sekretariat] + status [TODO/gotowe/brak danych]

Format: checklisty z polami do odhaczenia (☐ działanie)
```

---

### B4 – Protokół spotkania

**Nazwa zastosowania:** Generowanie protokołu na podstawie luźnych notatek

**Kiedy używać:** Po każdym spotkaniu, radzie pedagogicznej, zebraniu zespołu, spotkaniu z partnerami

**Czego pilnować:** Zastąp imiona i nazwiska mniej wrażliwymi identyfikatorami przed wklejeniem; sprawdź daty i nazwiska po wygenerowaniu

**Wersja PODSTAWOWA:**
```
Na podstawie poniższych notatek napisz protokół ze spotkania:
[NOTATKI]
```

**Wersja ULEPSZONA:**
```
Działaj jako sekretarz protokołujący spotkanie szkolne / projektowe.
Na podstawie poniższych luźnych notatek przygotuj formalny protokół:
[WKLEJ NOTATKI – z oznaczeniami "Osoba A", "Osoba B" zamiast imion]

Protokół powinien zawierać:
1. Nagłówek: data, miejsce, lista obecnych [do uzupełnienia], prowadzący
2. Porządek obrad (wyciągnij z notatek)
3. Przebieg spotkania – każdy punkt porządku jak osobny akapit ze skróconym opisem dyskusji
4. Podjęte decyzje / ustalenia – lista numerowana
5. Lista działań: Co zrobić | Kto odpowiada | Do kiedy
6. Termin i temat następnego spotkania (jeśli wspomniano)
7. Podpis: Protokolant: [IMIĘ I NAZWISKO] / Data: [DATA]

Styl: urzędowy, rzeczowy; bez ocen ani interpretacji
```

---

### B5 – Plan wdrożenia nowego zadania / projektu

**Nazwa zastosowania:** Szybkie rozpisanie kroków do realizacji nowego zadania lub projektu

**Kiedy używać:** Na początku nowego projektu, inicjatywy, zadania organizacyjnego

**Wersja PODSTAWOWA:**
```
Pomóż mi zaplanować wdrożenie [OPIS ZADANIA] w mojej szkole. Co muszę zrobić krok po kroku?
```

**Wersja ULEPSZONA:**
```
Działaj jako konsultant zarządzania projektem edukacyjnym.
Chcę wdrożyć w szkole: [OPIS INICJATYWY, np. "skrzynkę do zbierania pomysłów uczniów", "konkurs literacki dla klas IV–VIII", "szkolenie z AI dla całego grona pedagogicznego"]
Ramy czasowe: [CZAS, np. "w ciągu 6 tygodni"]
Moje zasoby: [np. "1 nauczyciel do pomocy, brak budżetu, sala komputerowa 2 razy w tygodniu"]

Przygotuj plan wdrożenia:
1. Główne etapy (3–5 etapów z tytułem i tygodniem realizacji)
2. Dla każdego etapu: kluczowe działania + kto jest potrzebny + co może pójść nie tak (ryzyka)
3. Czynniki sukcesu: co musi zadziałać, żeby projekt się udał?
4. Pytania do rozstrzygnięcia na początku (zanim ruszę)

Format: plan z tabeli i sekcji tekstowych
```

---

## KATEGORIA C: KOMUNIKACJA SZKOLNA (4 prompty)

---

### C1 – Mail do rodziców

**Nazwa zastosowania:** Redagowanie maili do rodziców lub opiekunów uczniów

**Kiedy używać:** Informacje o zebraniach, wycieczce, zmianach w planie, trudnościach ucznia itp.

**Czego pilnować:** Nie wpisuj nazwisk uczniów ani rodziców; dostosuj ton maila do sytuacji (informacyjny vs. trudna rozmowa)

**Wersja PODSTAWOWA:**
```
Napisz mail do rodziców klasy [KLASA] z informacją o [TEMAT]. Ton: przyjazny i profesjonalny. Max 120 słów.
```

**Wersja ULEPSZONA:**
```
Działaj jako wychowawca klasy [KLASA] w polskiej szkole podstawowej/ponadpodstawowej.
Napisz email do rodziców klasy na temat: [TEMAT, np. zebranie / wycieczka / trudna sytuacja / wyniki klasyfikacji]
Kluczowe informacje:
[WYPUNKTUJ INFORMACJE DO PRZEKAZANIA]
Ton: [WYBIERZ: ciepły i angażujący / rzeczowy i profesjonalny / empatyczny i dyplomatyczny]
Długość: max [N] słów
Format: Temat maila + Treść wiadomości
Zakończenie: zachęcające do kontaktu z wychowawcą
```

---

### C2 – Ogłoszenie szkolne

**Nazwa zastosowania:** Tworzenie ogłoszeń na tablicę szkolną, szkolną stronę, portal lub media społecznościowe

**Wersja PODSTAWOWA:**
```
Napisz ogłoszenie szkolne zachęcające uczniów do [DZIAŁANIE]. Odbiorca: uczniowie klas [KLASY]. Max 60 słów.
```

**Wersja ULEPSZONA:**
```
Działaj jako specjalista ds. komunikacji w szkole.
Napisz ogłoszenie dla uczniów klas [KLASY] dotyczące: [OPIS WYDARZENIA LUB ZAPROSZENIA]
Kluczowe informacje: [DATA / MIEJSCE / FORMA ZAPISU / KONTAKT]
Charakter ogłoszenia: energetyczne, motywujące, bez zbędnego formalizmu
Format: krótki nagłówek (1 zdanie) + treść (40–60 słów) + call-to-action (1 zdanie zachęcające do działania)
Unikaj: sloganów w stylu "nauka przez zabawę", fraz ogólnikowych, zbyt formalnego języka
```

---

### C3 – Uproszczenie dokumentu

**Nazwa zastosowania:** Uproszczenie języka dokumentów szkolnych dla rodziców lub uczniów

**Kiedy używać:** Statut szkoły, regulamin, wytyczne – kiedy dokument jest niezrozumiały

**Czego pilnować:** Sprawdź, czy uproszczona wersja nie pomija ważnych postanowień

**Wersja PODSTAWOWA:**
```
Uprość poniższy fragment dokumentu szkolnego dla rodziców, którzy nie mają prawniczego wykształcenia:
[FRAGMENT]
```

**Wersja ULEPSZONA:**
```
Działaj jako specjalista ds. prostego języka (plain language).
Poniżej wklejam fragment [STATUT/REGULAMIN/WYTYCZNE] (dane usunięte):
[WKLEJ FRAGMENT]

Przepisz go w wersji "plain language" dla rodziców uczniów:
- zdania max 20 słów
- brak żargonu prawniczego (lub każdy termin wyjaśniony)
- zachowanie wszystkich ważnych informacji
- forma: "Wy jako rodzice macie prawo do..." / "Szkoła ma obowiązek..."
Dodaj na końcu: 3 pytania, które rodzic może chcieć zadać po przeczytaniu
Format: oryginalny fragment | → UPROSZCZONA WERSJA
```

---

### C4 – Post na media społecznościowe szkoły

**Nazwa zastosowania:** Tworzenie postów na Facebook / Instagram / stronę szkoły

**Kiedy używać:** Relacje z wydarzeń szkolnych, zaproszenia, wyniki konkursów, promocja szkoły

**Wersja PODSTAWOWA:**
```
Napisz post na Facebook szkoły o [WYDARZENIE]. Max 80 słów + 5 hashtagów.
```

**Wersja ULEPSZONA:**
```
Działaj jako community manager szkolnej strony na Facebooku / Instagramie.
Wydarzenie: [OPIS WYDARZENIA – kiedy, co, kto uczestniczył, wyniki lub wrażenia]
Cel posta: [np. relacja z wydarzenia / zaproszenie na kolejne / podziękowanie]
Ton: [WYBIERZ: entuzjastyczny / profesjonalny / ciepły i wspólnotowy]

Przygotuj:
1. Wersja dla Facebooka (100–150 słów + 5 hashtagów)
2. Wersja skrócona dla Instagrama/SMS (max 50 słów + 5 hashtagów)
3. Propozycja opisu do zdjęcia (alt-text: 1 zdanie opisujące, co jest na zdjęciu)

Unikaj: zbyt formalnego języka, sloganów reklamowych, przesadnego chwalenia
```

---

## KATEGORIA D: PROJEKTY UNIJNE I MIĘDZYNARODOWE (5 promptów)

---

### D1 – Opis działania projektowego

**Nazwa zastosowania:** Szkicowanie opisów działań dla raportów projektowych (Erasmus+, WIN4SMEs i inne)

**Kiedy używać:** Przy pisaniu sekcji narracyjnych raportu końcowego lub pośredniego

**Czego pilnować:**
- Zaznaczaj miejsca [UZUPEŁNIJ] z konkretnymi danymi liczbowymi
- Nigdy nie traktuj wygenerowanego tekstu jako gotowego do wysłania
- Sprawdź zgodność z wymaganiami konkretnego programu grantowego

**Wersja PODSTAWOWA:**
```
Napisz 150-słowowy opis działania projektowego: [OPIS DZIAŁANIA]. Styl: narracyjny, profesjonalny.
```

**Wersja ULEPSZONA:**
```
Działaj jako doświadczony koordynator projektów edukacyjnych UE (Erasmus+/Horizon/ESF).
Projekt: [TYTUŁ PROJEKTU]
Działanie: [OPIS DZIAŁANIA, np. "3-dniowe warsztaty mobilności dla nauczycieli w Bolonii, październik 2025"]
Liczba uczestników: [N] z [KRAJE]
Tematyka: [TEMAT WARSZTATU]
Wyniki/rezultaty: [CO OSIĄGNIĘTO – jeśli znasz]

Napisz opis działania (180–220 słów) do sekcji narracyjnej raportu:
- neutralny, rzeczowy, bezosobowy styl (typowy dla raportów UE)
- podkreśl: cele działania, przebieg, uczestnictwo, wartość dodaną
- zachowaj spójność z językiem dokumentów projektowych
- ZAZNACZ [UZUPEŁNIJ DANE] wszędzie tam, gdzie potrzebne są konkretne liczby
Format: jeden spójny akapit narracyjny (nie lista punktorów)
Język: [POLSKI lub ANGIELSKI]
```

---

### D2 – Mail do partnera zagranicznego

**Nazwa zastosowania:** Profesjonalna korespondencja z partnerami zagranicznymi projektu

**Kiedy używać:** Organizacja spotkań, wymiana informacji, potwierdzenia

**Czego pilnować:** Weryfikuj język angielski pod kątem stylu projektowego; nie wklejaj poufnych informacji

**Wersja PODSTAWOWA:**
```
Napisz email w języku angielskim do partnera projektu z informacją o: [TEMAT].
Ton: profesjonalny. Max 150 słów.
```

**Wersja ULEPSZONA:**
```
Działaj jako koordynator projektu edukacyjnego UE piszący do zagranicznego partnera.
Kontekst: [PROJEKT, RELACJA Z PARTNEREM]
Temat maila: [OPIS – np. potwierdzenie terminu, prośba o dokument, info o zmianie]
Kluczowe informacje do przekazania:
[WYPUNKTUJ]
Ton: profesjonalny, ale przyjazny (jak do wieloletniego współpracownika)
Język: angielski C1 (ale czytelny dla nienatywnych użytkowników angielskiego)
Format: Temat (Subject:) + Pozdrowienie + Treść (max 120 słów) + Pożegnanie + Podpis [IMIĘ, STANOWISKO, SZKOŁA]
```

---

### D3 – Newsletter projektowy

**Nazwa zastosowania:** Generowanie treści newslettera dla projektu lub sieci szkolnej

**Wersja PODSTAWOWA:**
```
Napisz krótki newsletter projektowy (200 słów) podsumowujący działania projektu [TYTUŁ] za [OKRES].
```

**Wersja ULEPSZONA:**
```
Działaj jako redaktor newslettera projektu edukacyjnego UE.
Projekt: [TYTUŁ]
Partnerzy: [LISTA KRAJÓW]
Okres: [NP. "pierwszy semestr roku szkolnego 2025/26"]
Zrealizowane działania: [WYPUNKTUJ]
Planowane działania: [WYPUNKTUJ]

Napisz newsletter (250–350 słów) skierowany do:
[ ] partnerów projektu (styl: rzeczowy, sprawozdawczy)
[ ] szerokiej publiczności / uczniów rodziców (styl: angażujący, dostępny)

Struktura newslettera:
1. Nagłówek / tytuł wydania
2. Krótkie wprowadzenie (2–3 zdania)
3. Sekcja "Co zrobiliśmy" (opis działań)
4. Sekcja "Co planujemy" (zapowiedź następnych działań)
5. Cytat uczestnika [wpisz lub zaznacz "DO UZUPEŁNIENIA"]
6. Informacja o projekcie i finansowaniu (stopka)
Język: [POLSKI / ANGIELSKI]
```

---

### D4 – Agenda spotkania partnerskiego

**Nazwa zastosowania:** Przygotowanie profesjonalnej agendy spotkania z partnerami projektu

**Wersja PODSTAWOWA:**
```
Przygotuj agendę spotkania projektowego trwającego 2 dni. Tematy: [LISTA TEMATÓW]. Uczestnicy: koordynatorzy z 4 krajów.
```

**Wersja ULEPSZONA:**
```
Działaj jako koordynator projektu Erasmus+ organizujący spotkanie partnerskie.
Format: [1 dzień / 2 dni / pół dnia]
Liczba uczestników: [N] osób z [LICZBA] krajów
Cel spotkania: [NP. "przegląd postępów, omówienie działań Roku 2, decyzje o zmianach"]
Tematy do omówienia:
[WYPUNKTUJ]
Ograniczenia czasowe: [GODZINY, NP. "9:00–17:00 z godzinną przerwą obiadową"]
Elementy obowiązkowe: [NP. "przedstawienie raportu finansowego, prezentacja każdego partnera, czas na Q&A"]

Przygotuj profesjonalną agendę:
Format: Tabela | Czas | Aktywność | Prowadzący | Materiały / Notatki
Uwzględnij: przerwy kawowe (15 min co 90 min), sesję otwierającą (check-in) i zamykającą (action items)
Dodaj: lista działań (action items) do wypełnienia na końcu spotkania
Język: angielski
```

---

### D5 – Streszczenie wykonawcze projektu

**Nazwa zastosowania:** Tworzenie krótkich streszczeń projektu do różnych celów (raport, strona, prezentacja)

**Wersja PODSTAWOWA:**
```
Napisz streszczenie projektu [TYTUŁ] (150 słów) do umieszczenia na stronie szkoły.
```

**Wersja ULEPSZONA:**
```
Działaj jako ekspert ds. komunikacji projektów UE.
Projekt: [TYTUŁ]
Typ programu: [ERASMUS+ / WIN4SMEs / Horyzont Europa / inne]
Czas trwania: [DATY]
Partnerzy: [LISTA]
Główne cele: [LISTA]
Kluczowe rezultaty: [LISTA – jeśli projekt trwa, wpisz planowane; jeśli zakończony – osiągnięte]
Grupa docelowa: [NP. "nauczyciele szkół zawodowych"]

Przygotuj 3 wersje streszczenia:
A) 80 słów (np. post na media społecznościowe lub opis na mapie projektów)
B) 150 słów (np. strona szkoły, newsletter)
C) 300 słów (np. raport pośredni, prezentacja dla dyrekcji)
Każda wersja: różny poziom szczegółowości, ale te same kluczowe informacje
Styl: czytelny dla niespecjalistów; bez żargonu programowego
Język: [POLSKI / ANGIELSKI]
```

---

## KATEGORIA E: ANALIZA DOKUMENTÓW (2 prompty)

---

### E1 – Porównanie dwóch dokumentów

**Nazwa zastosowania:** Identyfikacja różnic i podobieństw między dwoma dokumentami

**Kiedy używać:** Porównanie planów, wersji dokumentu, ofert, propozycji

**Wersja ULEPSZONA:**
```
Poniżej wklejam dwa dokumenty (dane zanonimizowane):
DOKUMENT A: [WKLEJ]
DOKUMENT B: [WKLEJ]

Przeprowadź analizę porównawczą:
1. Główne różnice (tabela: Aspekt | Dokument A | Dokument B)
2. Główne podobieństwa (lista)
3. Co jest w A, a nie ma w B?
4. Co jest w B, a nie ma w A?
5. Twoja rekomendacja: który dokument jest pełniejszy/lepszy w danym aspekcie i dlaczego?
Styl: rzeczowy i analityczny
```

---

### E2 – Wykrywanie luk i niespójności

**Nazwa zastosowania:** Identyfikacja niekompletności lub wewnętrznych niespójności w tekście

**Kiedy używać:** Sprawdzanie projektu raportu, planu pracy, koncepcji przed finalną redakcją

**Wersja ULEPSZONA:**
```
Poniżej wklejam dokument [TYP: plan / wniosek / raport / koncepcja]:
[WKLEJ TEKST]

Przeanalizuj go jako krytyczny czytelnik i wskaż:
1. LUKI: czego brakuje (informacje, sekcje, dane, które powinny być a nie ma ich)?
2. NIESPÓJNOŚCI: miejsca gdzie tekst sobie przeczy lub jest niejasny
3. PYTANIA BEZ ODPOWIEDZI: kwestie, które tekst podnosi, ale nie rozwiązuje
4. MOCNE STRONY: co jest dobrze napisane lub dobrze zaplanowane?
Format: numerowana lista dla każdej sekcji
Styl: konstruktywny, konkretny, wskazujący na miejsce w tekście (np. "Akapit 3 mówi X, ale akapit 7 mówi Y – proszę wyjaśnić")
```

---

## KATEGORIA F: REDAGOWANIE I UPRASZCZANIE TREŚCI (2 prompty)

---

### F1 – Korekta i poprawa tekstu

**Nazwa zastosowania:** Redakcja i poprawa stylistyki, spójności i czytelności tekstu

**Wersja ULEPSZONA:**
```
Działaj jako redaktor języka polskiego i korektora tekstów.
Poniżej wklejam mój tekst [TYP: fragment raportu / mail / artykuł / opis]:
[WKLEJ TEKST]

Popraw:
1. Błędy językowe (gramatyczne, ortograficzne, interpunkcyjne)
2. Styl (niezręczne sformułowania, kalki językowe, zbędne powtórzenia)
3. Spójność i płynność (przejścia między zdaniami/akapitami)
Nie zmieniaj: meritum, struktury, kolejności punktów

Format wyjścia:
– poprawiona wersja tekstu
– lista zmian z krótkim uzasadnieniem (ile zmian: max 10 najważniejszych)
```

---

### F2 – Tłumaczenie z polskiego na angielski

**Nazwa zastosowania:** Tłumaczenie dokumentów projektowych lub korespondencji

**Czego pilnować:** Duże dokumenty podziel na fragmenty; zawsze sprawdź tłumaczenie specjalistycznych terminów programu Erasmus+ w oryginalnych materiałach KE

**Wersja ULEPSZONA:**
```
Działaj jako tłumacz specjalizujący się w dokumentach edukacyjnych i projektach UE.
Przetłumacz poniższy tekst z języka polskiego na angielski:
[WKLEJ TEKST]
Styl: [WYBIERZ: formalny raportowy / przystępny dla szerokiej publiczności / korespondencja biznesowa]
Poziom angielskiego: C1 (poprawny, ale naturalny dla nienatywnych użytkowników)
WAŻNE: zaznacz [TBC – TO BE CONFIRMED] przy terminach, w których nie jesteś pewien/pewna tłumaczenia
Dostarcz: tłumaczenie + uwagi tłumacza (jeśli coś jest niejasne lub wieloznaczne w oryginale)
```

---

## KATEGORIA G: PLANOWANIE DZIAŁAŃ (2 prompty)

---

### G1 – Plan doskonalenia zawodowego nauczyciela

**Wersja ULEPSZONA:**
```
Działaj jako mentor doskonalenia zawodowego.
Jestem nauczycielem [PRZEDMIOT] z [X] latami doświadczenia, pracującym w [TYP SZKOŁY].
Chcę w tym roku szkolnym rozwinąć następujące kompetencje:
[LISTA – np. "AI w edukacji, komunikacja z trudnymi rodzicami, metody projektowe"]
Dostępne zasoby: [NP. "2 weekendy w semestrze, budżet 0 / budżet szkolny, dostęp do platformy ESEP"]

Przygotuj mi plan doskonalenia zawodowego na 2 semestry:
- Konkretne formy doskonalenia (kursy online, webinary, literatura, peer coaching)
- Horyzont czasowy każdej aktywności
- Jak zmierzę postępy?
- Jak wdrożę to co nauczyłem się w codziennej pracy?
```

---

### G2 – Kalendarz działań projektowych

**Wersja ULEPSZONA:**
```
Działaj jako kierownik projektu edukacyjnego.
Projekt trwa [CZAS TRWANIA] i obejmuje następujące działania:
[LISTA DZIAŁAŃ Z OPISEM]
Partnerzy z krajów: [LISTA] – należy koordynować terminy z ich kalendarzem szkolnym
Ograniczenia kalendarza: [NP. sesja egzaminacyjna, wakacje letnie, terminy raportowania]

Przygotuj:
1. Harmonogram Gantt (tabela: Działanie | M1 | M2 | M3 | ... | MN)
2. Kluczowe kamienie milowe (milestone) z datami
3. Punkty ryzyka czasowego (kiedy jest największe ryzyko opóźnienia i dlaczego)
```

---

## KATEGORIA H: KRYTYCZNA WERYFIKACJA ODPOWIEDZI AI (2 prompty)

---

### H1 – Prośba o kontrargumenty

**Nazwa zastosowania:** Testowanie jakości odpowiedzi AI przez celowe poszukiwanie słabych punktów

**Kiedy używać:** Zawsze po uzyskaniu ważnej odpowiedzi AI – szczególnie w kwestiach faktycznych

**Wersja ULEPSZONA:**
```
Przeczytaj swoją poprzednią odpowiedź (lub poza niżej wklejony tekst):
[WKLEJ TEKST]

Teraz wciel się w krytycznego recenzenta i odpowiedz:
1. Które stwierdzenia są oparte na danych i które możesz zweryfikować źródłami?
2. Które stwierdzenia są Twoim generatywnym "wypełnieniem" bez pewności faktycznej?
3. Jakie informacje mogą być nieaktualne (biorąc pod uwagę Twój knowledge cutoff)?
4. Jakie założenia przyjąłeś/łaś, które mogą być nieprawidłowe?
5. Czego NIE wiesz i co powinienem/powinnam sprawdzić w oficjalnych źródłach?
Format: lista numerowana, szczery i bezpośredni styl
```

---

### H2 – Test faktyczny odpowiedzi AI

**Nazwa zastosowania:** Poproszenie AI o wskazanie, co jest pewne, a co jest niepewnością

**Wersja ULEPSZONA:**
```
Poniżej wklejam odpowiedź wygenerowaną przez AI:
[WKLEJ ODPOWIEDŹ]

Oceń każde zdanie lub stwierdzenie i przypisz mu kategorię:
✅ ZWERYFIKOWALNE – to stwierdzenie można sprawdzić i jest prawdopodobnie poprawne
⚠️ WĄTPLIWE – to stwierdzenie wymaga weryfikacji przed użyciem
❌ NIEPOPRAWNE lub WYMYŚLONE – widzę błąd lub halucynację
🔍 DO SPRAWDZENIA – nie jestem pewien/pewna, wymaga zewnętrznej weryfikacji

Dodaj: rekomendację, które źródła można użyć do weryfikacji poszczególnych stwierdzeń.
```
