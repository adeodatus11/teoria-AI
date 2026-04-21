# ETAP 3. PEŁNE TREŚCI MERYTORYCZNE
## Moduł: AI w pracy nauczyciela i szkoły

---

## MODUŁ 1 – CZYM JEST AI I CO NAM DAJE?

---

### TREŚCI DO SEGMENTU 1.2: CO TO JEST AI I DLACZEGO TO WAŻNE?

**[Pełna treść dla prowadzącego – co mówisz]**

---

"Zanim zaczniemy ćwiczyć, potrzebuję, abyście wiedzieli jedno: AI nie jest magią. Nie jest też superinteligentnym robotem z filmów science-fiction. To narzędzie – bardzo użyteczne, ale z poważnymi ograniczeniami.

Duże modele językowe – takie jak ChatGPT, Gemini czy Claude – działają w uproszczeniu tak: zostały „nakarmione" olbrzymią ilością tekstów z internetu, książek, artykułów. Na tej podstawie nauczyły się przewidywać, które słowo lub zdanie może pojawić się po poprzednim. To trochę jak bardzo zaawansowana funkcja 'autouzupełniania'. Dlatego AI pisze płynnie, logicznie... ale nie dlatego, że 'wie' – tylko dlatego, że tak właśnie wyglądają teksty, które widziała.

To ma jeden kluczowy skutek: AI może podać fałszywą informację z absolutną pewnością siebie w głosie. W naszym żargonie to się nazywa 'halucynacja'. AI nie kłamie świadomie – ona po prostu nie wie, że nie wie. Dlatego wszystko, co AI napisze, traktujemy jako wersję roboczą wymagającą weryfikacji.

Ale jest też dobra wiadomość. Badanie przeprowadzone przez Walton Family Foundation i Gallup w 2025 roku pokazało, że nauczyciele regularnie używający narzędzi AI oszczędzają średnio prawie 6 godzin tygodniowo. To 6 tygodni w roku szkolnym. Badanie OECD z 2024 roku pokazuje, że około 30% nauczycieli w krajach OECD zgłasza potrzebę szkoleń właśnie z AI.

Nie jesteście w tym sami – ta rewolucja dotknęła wszystkich jednocześnie i wszyscy dopiero zaczynamy rozumieć, co z tym zrobić. Ale zaczynamy."

---

### KLUCZOWE POJĘCIA DO WYTŁUMACZENIA (i jak to robić)

**LLM (Large Language Model)**
- NIE tłumacz technicznie
- MIEJ to porównanie: "To jak bardzo sprytny student, który przeczytał całą Wikipedię i nauczył się pisać jak wszyscy autorzy naraz. Ale żaden z tych autorów nie miał racji w 100% przypadków."

**Halucynacja AI**
- Przykład: "ChatGPT potrafi podać cytat z książki, której nie ma, od autora, który nie używył tych słów. I zrobi to pewnie, w cudzysłowie, z datą. Zna technikę zapisu cytatu, ale nie wie, czy cytat jest prawdziwy."
- Dlaczego to ważne dla nauczyciela: materiały dydaktyczne, fakty historyczne, daty, nazwiska, przepisy prawa – wszystko wymaga weryfikacji.

**Prompt**
- "To jest zapytanie, które piszesz do AI. Tak jak piszesz SMS do koleżanki – tylko adresatem jest komputer. I tak jak SMS, to, jak go napiszesz, decyduje o tym, co dostaniesz z powrotem."

---

### PRZYKŁADY SZKOLNE DO UŻYCIA W MINI-WYKŁADZIE

**Przykład 1 – Kiedy AI naprawdę pomaga:**
Nauczycielka historii w środę po południu potrzebuje na czwartek ćwiczenia powtórzeniowego z II wojny światowej dla klasy VIII – dwa poziomy trudności. Zamiast siedzieć do 23:00, w 10 minut generuje wersję podstawową i rozszerzoną. Sprawdza, poprawia dwa błędy, drukuje. Oszczędność: 45 minut.

**Przykład 2 – Kiedy AI zawodzi:**
Nauczyciel prawa pyta AI o aktualną ustawę o systemie oświaty. AI podaje przepis – brzmi dobrze, ale jest z 2019 roku. Nauczyciel nie sprawdza, rozdaje uczniom. Błąd. Wniosek: AI nie wie, co jest "aktualne". Data wiedzy modelu jest zamrożona.

**Przykład 3 – Zastosowanie projektowe:**
Koordynatorka projektu Erasmus+ potrzebuje 200-słowowego opisu warsztatu dla partnerów z Włoch w języku angielskim. Wpisuje do AI szczegóły warsztatu i prosi o redakcję. Dostaje solidny tekst, poprawia go pod kątem konkretnych danych liczbowych, wysyła. Oszczędność: 40 minut.

---

### OSTRZEŻENIA I OGRANICZENIA – DLA TEGO SEGMENTU

1. **AI nie zna Twoich uczniów** – nigdy nie da Ci gotowego materiału "dopasowanego do Twojej klasy VIIIb". Daje szablon, który musisz dostosować.
2. **AI nie zna aktualnego prawa oświatowego** – data ucięcia wiedzy modelu to kwestia miesięcy lub lat temu. Prawo oświatowe zmienia się regularnie.
3. **AI nie zna Twojej szkoły ani Twojego projektu** – będzie pisać ogólnie, nie konkretnie, chyba że jej dokładnie powiesz, o co chodzi.
4. **AI to nie Google** – nie szukaj przez AI faktów. Szukaj przez AI struktury, języka, skrótów pracy.

---

## MODUŁ 2 – PROMPTING

---

### TREŚCI DO SEGMENTU 2.1: FRAMEWORK PARTS

**[Pełna treść dla prowadzącego – co mówisz i jak demonstrujesz]**

---

"Teraz właściwa lekcja. Dlaczego wasze pierwsze prompty były różnej jakości? Dlatego że pisaliśmy je intuicyjnie – jak piszemy zapytanie do Google'a. Ale AI to nie wyszukiwarka. AI potrzebuje kontekstu.

Korzystam z frameworku nazwanego PARTS. Każda litera to konkretny element dobrego promptu. Pokażę Wam to na slajdzie, a potem natychmiast porównamy dwa przykłady – słaby i mocny prompt na to samo zadanie."

---

**Framework PARTS – pokaz na slajdzie + objaśnienie:**

| Litera | Co oznacza | Przykład |
|--------|-----------|---------|
| **P** | Persona – jakiej roli ma użyć AI | "Działaj jako doświadczona nauczycielka języka polskiego dla uczniów szkół technicznych..." |
| **A** | Aim – Cel, co ma powstać | "...i przygotuj konspekt lekcji o gatunkach publicystycznych..." |
| **R** | Recipients – dla kogo, w jakim kontekście | "...dla uczniów klasy 3 technikum, którzy mają poziom podstawowy z języka polskiego..." |
| **T** | Tone/styl – jakim językiem, w jakiej formie | "...pisz językiem prostym i angażującym, unikaj akademickiego żargonu..." |
| **S** | Structure – format wyjścia | "...w formacie: Cel lekcji | Przebieg (tabela z czasem) | Materiały | Pytania sprawdzające." |

---

**DEMONSTRACJA NA ŻYWO (wklej do AI i pokaż na projektorze):**

**Słaby prompt:**
```
Napisz lekcję o publicystyce.
```
*(Pokaż wynik – ogólny, akademicki, bezużyteczny w praktyce)*

**Mocny prompt według PARTS:**
```
Działaj jako doświadczona nauczycielka języka polskiego dla uczniów szkół zawodowych i technicznych. 
Przygotuj konspekt lekcji (45 minut) na temat gatunków publicystycznych – artykuł, felieton, reportaż – dla uczniów klasy 3 technikum na poziomie podstawowym. 
Uczniowie nie lubią czytać, więc motywuj ich przykładami z YouYube, podcastów i mediów społecznościowych.
Pisz prostym językiem, z humorem, bez akademickiego żargonu. 
Przedstaw wynik w formie tabeli: Czas | Aktywność | Opis | Materiały.
```
*(Pokaż wynik – konkretny, użyteczny, gotowy do modyfikacji)*

"Widzicie różnicę? To ta sama prośba – tylko inaczej sformułowana. AI dostała kontekst i wiedzę, dla kogo i po co. Dlatego odpowiedź jest 10 razy lepsza."

---

### NAJCZĘSTSZE BŁĘDY UŻYTKOWNIKÓW W PROMPTOWANIU

**Błąd 1: Brak kontekstu**
- Problem: "Zrób mi plan lekcji o zwierzętach."
- Skutek: AI generuje materiał dla dzieci w wieku 6 lat lub dla studentów zoologii – nie wiadomo.
- Rozwiązanie: zawsze podaj wiek/klasę, poziom, przedmiot.

**Błąd 2: Brak formatu wyjścia**
- Problem: "Opisz projekt Erasmus+."
- Skutek: AI pisze proza, 800 słów, bez struktury.
- Rozwiązanie: "Napisz w formie tabeli / trzech akapitów / listy punktowanej / emaila."

**Błąd 3: Nieiterowanie**
- Problem: Pierwsza odpowiedź jest słaba, więc użytkownik rezygnuje.
- Skutek: Zmarnowana szansa.
- Rozwiązanie: Napisz w kolejnym wiadomości "Popraw to, dodając [X]" lub "Zrób to bardziej [przymiotnik]."

**Błąd 4: Traktowanie AI jak Google**
- Problem: "Kiedy weszła w życie ustawa o systemie oświaty?"
- Skutek: AI poda datę z dużą pewnością siebie – ale może być błędna lub nieaktualna.
- Rozwiązanie: Do weryfikacji faktów używaj oficjalnych źródeł, nie AI.

**Błąd 5: Kopiowanie bez weryfikacji**
- Problem: Wklejenie wytworu AI bezpośrednio do dokumentu szkolnego lub raportu projektowego.
- Skutek: Błędy merytoryczne, nieadekwatny ton, ryzyko prawne.
- Rozwiązanie: AI to wersja robocza. Zawsze czytaj, poprawiaj, weryfikuj.

---

### ZASADY DOBREJ PRAKTYKI W PROMPTOWANIU

1. **Zacznij od kontekstu** – kim jesteś, dla kogo tworzysz, po co.
2. **Bądź konkretny/a** – ogólne zapytanie = ogólna odpowiedź.
3. **Jeden prompt = jedno zadanie** – nie proś o 5 rzeczy naraz.
4. **Określ format wyjścia** – tabela, email, lista, 3 zdania, itp.
5. **Iteruj** – napisz "Popraw to, bo..." lub "Zmień X na Y."
6. **Buduj bibliotekę** – zapisuj prompty, które działają; wracaj do nich.
7. **Traktuj wynik jak szkic** – zawsze przeczytaj, zanim użyjesz.

---

## MODUŁ 3 – AI W DYDAKTYCE I ADMINISTRACJI

---

### TREŚCI DO SEGMENTU 3.1: AI W DYDAKTYCE

**[Pełna treść dla prowadzącego]**

---

"Teraz pytanie, które wszyscy zadajecie po cichu: jak to wygląda w praktyce? Czy AI naprawdę napisze mi lekcję lepiej niż ja? Nie. AI nie zna Waszych uczniów. Nie wie, że Kasia ma dysleksję, że Piotr dopiero co wrócił po długiej nieobecności, że klasa VIIb jest trudna po 5. lekcji.

Ale AI może zrobić 80% roboty koncepcyjnej i strukturalnej w ułamku Waszego czasu. Wasza rola to 20% – dostosowanie do Waszego kontekstu."

---

**Co AI może zrobić w dydaktyce:**

| Zadanie | Jak AI pomaga | Co musisz zrobić Ty |
|---------|--------------|---------------------|
| Konspekt lekcji | Generuje strukturę, cele, aktywności, timing | Dostosuj do klasy, sprawdź poprawność merytoryczną |
| Różnicowanie | Przepisuje tekst na 2–3 poziomy trudności | Sprawdź, czy język jest adekwatny, dopasuj realia |
| Pytania sprawdzające | Generuje zestaw pytań różnych poziomów (Bloom) | Zweryfikuj, czy pytania są poprawne merytorycznie |
| Rubryk oceniania | Tworzy kryteria oceniania dla danego zadania | Dostosuj do wymagań podstawy programowej |
| informacja zwrotna | Szkicuje spersonalizowaną IZ do pracy ucznia | Uzupełnij konkretną obserwacją; nie wklejaj jak jest |
| Materiały do ćwiczeń | Generuje zadania z kluczem | Sprawdź każde zadanie merytorycznie |

---

**Przykładowe zastosowania szkolne z promptami (GOTOWE DO UŻYCIA):**

**PRZYKŁAD 1 – Konspekt lekcji:**
```
Działaj jako nauczyciel historii w szkole podstawowej.
Przygotuj konspekt lekcji (45 minut) na temat II wojny światowej – kampania wrześniowa 1939 roku, dla klasy VIII (14-latki).
Lekcja powinna zawierać: angażujące wprowadzenie (5 minut), pracę z mapą lub dokumentem źródłowym (15 minut), pracę w grupach (15 minut), podsumowanie i pytania (10 minut).
Uczniowie są zróżnicowani poziomowo – zaproponuj jeden element różnicujący.
Format: tabela z kolumnami: Czas | Aktywność | Opis | Wskazówki dla nauczyciela
```

**PRZYKŁAD 2 – Dostosowanie materiału:**
```
Mam tekst o fotosyntzezie napisany dla 7. klasy:
[WKLEJ TEKST]
Proszę przepisz go w dwóch wersjach:
Wersja A – dla uczniów z trudnościami w czytaniu (poziom klasy 5, krótkie zdania, mniej pojęć)
Wersja B – dla uczniów zdolnych (dodaj wyższy poziom szczegółowości, pytania otwarte na koniec)
```

**PRZYKŁAD 3 – Zestaw pytań Bloom:**
```
Przygotuj 10 pytań sprawdzających do materiału o romantyzacji w literaturze polskiej dla klasy 1 LO.
Podziel pytania na trzy poziomy taksonomii Blooma:
- Poziom 1 – zapamiętanie i rozumienie (4 pytania)
- Poziom 2 – zastosowanie i analiza (4 pytania)
- Poziom 3 – ocena i tworzenie (2 pytania)
Podaj klucz odpowiedzi dla pytań z poziomów 1 i 2.
```

---

**Ostrzeżenia – waar AI zawodzi w dydaktyce:**

1. **Błędy merytoryczne** – AI może mylić fakty, daty, nazwiska. Zawsze sprawdź merytorycznie.
2. **Nieadekwatny poziom trudności** – AI nie zna Twojej klasy. Tekst "dla klasy 7" może być za trudny lub za łatwy.
3. **Brak zgodności z podstawą programową** – AI nie zna polskiej podstawy programowej. Weryfikuj.
4. **Szablonowość** – materiały AI mogą być banalne lub monotonne. Dodaj swoją osobowość i doświadczenie.
5. **Naruszenia praw autorskich** – cytaty, teksty kultury wymagają weryfikacji.

---

### TREŚCI DO SEGMENTU 3.2: AI W ADMINISTRACJI I KOMUNIKACJI

**[Pełna treść dla prowadzącego]**

---

"Jednym z najbardziej niedocenianych zastosowań AI w szkole jest odciążenie administracyjne. Ile razy w tym roku napisałeś/łaś maila do rodziców od zera, chociaż pisałeś/łaś podobny 3 razy wcześniej? Ile razy przepisywałeś/łaś protokół z notatek? Ile razy streszczałeś/łaś 20-stronicowy dokument, żeby wyciągnąć 3 ważne informacje?

AI robi te rzeczy w 30 sekund."

---

**Zastosowania administracyjne – scenariusze:**

**STRESZCZENIE DOKUMENTU:**
```
Poniżej wklejam fragment zarządzenia/regulaminu/protokołu:
[TEKST DOKUMENTU – bez danych personalnych]

Proszę:
1. Streść w 5 zdaniach główne tezy dokumentu.
2. Wyciągnij listę zadań lub działań, które wynikają z dokumentu.
3. Podkreśl terminy i deadliny, jeśli się pojawiają.
```

**MAIL DO RODZICÓW:**
```
Na podstawie poniższych luźnych notatek napisz profesjonalny, ale ciepły mail do rodziców uczniów klasy 6B:
Notatki: czwartek godz. 16.00, wywiadówka, przynieść dziennik podpisany, informacja o wycieczce do Krakowa (7 marca, koszt 120 zł, formularz do podpisania), spotkanie z pedagogiem dla chętnych.
Mail ma być krótki (do 150 słów), życzliwy, profesjonalny.
Temat maila: "Zaproszenie na spotkanie z wychowawcą – czwartek 16.00"
```

**PROTOKÓŁ SPOTKANIA:**
```
Na podstawie poniższych notatek z rady pedagogicznej napisz profesjonalny protokół:
[LUŹNE NOTATKI]
Format protokołu: Data i miejsce spotkania | Obecni (wpisz [lista uczestników]) | Porządek obrad | Przebieg dyskusji (punkty) | Podjęte decyzje | Zadania z odpowiedzialnym i terminem | Podpis protokolanta.
```

**OGŁOSZENIE SZKOLNE:**
```
Napisz ogłoszenie szkolne (40–60 słów) zachęcające uczniów do udziału w zawodach matematycznych. 
Termin: 15 maja, zapisy u pani Kowalskiej, sala 23. Ogłoszenie ma być energetyczne, bez nadmiernego formalnego języka. Docelowi odbiorcy: uczniowie klasy 7–8.
```

---

## MODUŁ 4 – AI W PROJEKTACH I RYZYKO

---

### TREŚCI DO SEGMENTU 4.1: AI W PROJEKTACH UNIJNYCH

**[Pełna treść dla prowadzącego]**

---

"Jeśli pracujesz lub będziesz pracować przy projektach unijnych – Erasmus+, WIN4SMEs, inne programy Komisji Europejskiej – AI może być bardzo cennym asystentem. Ale tu muszę powiedzieć wprost: jest kilka rzeczy, których absolutnie nie wolno robić."

---

**Co AI robi dobrze w projektach UE:**

| Zadanie | Jak używać |
|---------|-----------|
| Opis działania projektowego | Podaj szczegóły działania, poproś o redakcję narracyjną w języku angielskim lub polskim |
| Streszczenie raportu | Wklej (bez poufnych danych) treść raportu, poproś o 200-słowowe streszczenie dla raportu partnerów |
| Korespondencja z partnerami | Napisz w języku polskim treść emaila, poproś AI o angielską redakcję |
| Newsletter projektowy | Podaj kluczowe informacje o działaniu, poproś o atrakcyjny, krótki tekst promocyjny |
| Agenda spotkania | Podaj tematy do omówienia, poproś o sformatowaną agendę |
| Tłumaczenie | Wklej tekst w polskim, poproś o tłumaczenie na angielski / włoski / etc. + prośba o weryfikację tonu |

---

**Co AI NIE może zrobić w projektach UE:**

1. **Nie zna danych Twojego projektu** – liczby, wyniki, nombry uczestników, daty – musisz je wpisać sam/a lub podać AI.
2. **Nie zna wymagań konkretnego programu** – zawsze sprawdź z programem grantowym i przewodnikiem Erasmus+.
3. **Może "wymyślić" wymagania** – jeśli zapytasz "jakie są wymagania raportowania w Erasmus+", AI może podać nieaktualne lub błędne informacje.
4. **Nie odpowiada za raport** – podpisując dokument dla KE, to Ty bierzesz pełną odpowiedzialność.

---

**Przykład zastosowania projektowego:**

```
Jestem koordynatorką projektu Erasmus+ KA2 pod tytułem "Digital Skills for Future Teachers" realizowanego w partnerstwie 4 szkół z Polski, Włoch, Niemiec i Turcji.
W octubre odbyliśmy 3-dniowe warsztaty mobilności w Bolonii. Uczestniczyło 12 nauczycieli z 4 krajów. Tematyka: AI w edukacji, tworzenie materiałów multimedialnych. 

Na podstawie tych informacji napisz opis działania projektowego (ok. 200 słów) w języku angielskim, który mogę wykorzystać jako podstawę do sekcji narracyjnej raportu. 
Styl: rzeczowy, profesjonalny, opisujący rezultaty i wartość dodaną.
WAŻNE: Zaznacz [UZUPEŁNIJ] w miejscach, gdzie potrzebuję wpisać konkretne dane.
```

---

**UWAGA: Zasady transparentności w projektach EU (wg wytycznych Komisji Europejskiej 2024):**

Komisja Europejska i agencje krajowe coraz częściej wymagają lub oczekują:
- Jeśli użyłeś AI do redagowania raportów lub opisów – zaznacz to (np. w metodologii lub notatce wstępnej dokumentu)
- Nie podawaj AI poufnych danych partnerów ani informacji objętych klauzulą poufności
- Treści wygenerowane przez AI traktuj jako szkic do weryfikacji – nigdy jako finalny dokument

*(Źródło: Wytyczne Komisji Europejskiej dot. transparentnego użycia AI w projektach, 2024)*

---

### TREŚCI DO SEGMENTU 4.2: RYZYKA, ETYKA, OCHRONA DANYCH

**[Pełna treść dla prowadzącego – kompletna narracja]**

---

"Czas na trudną część. Będę z Wami szczery/a: AI może przynieść szkodę, jeśli używamy jej bez świadomości ryzyk. Nie mówimy o apokalipsie ani robotach. Mówimy o bardzo konkretnych problemach, które zdarzają się w szkołach i w projektach.

Przejdę przez kilka scenariuszy. Przy każdym – Stop. Pytanie: co jest tutaj nie tak?"

---

**SCENARIUSZ 1 – RODO i prywatność danych**

*Historia:* Nauczycielka chciała przeanalizować postępy uczniów. Wkleila do ChatGPT tabelę: imię, nazwisko, oceny, uwagi wychowawcy. Zapytała AI o "kogo warto wzmocnić" i "kto wymaga wsparcia".

*Co poszło nie tak:*
- Imiona i nazwiska uczniów to dane osobowe chronione RODO
- ChatGPT jest usługą zewnętrzną – przesyłając dane, wysyłamy je do serwerów firmy OpenAI w USA
- Naruszenie RODO może być podstawą do zgłoszenia do UODO
- Dane mogą być używane do trenowania modelu (zależnie od polityki prywatności)

*Zasada:* **Nigdy nie wklejaj imion, nazwisk, numerów PESEL, adresów, danych wrażliwych uczniów, rodziców ani pracowników do publicznych narzędzi AI.**

*Jak to robić poprawnie:* Anonimizuj dane – zamiast "Jan Kowalski – klasa 7B – oceny: 2, 3, 3..." użyj "uczeń A z klasy X – oceny: 2, 3, 3..."

---

**SCENARIUSZ 2 – Halucynacje i odpowiedzialność**

*Historia:* Nauczyciel WOS-u zapytał AI o aktualne przepisy dotyczące oceniania uczniów. AI podała szczegółowe informacje o "rozporządzeniu z 2023 r." z numerem i paragrafami. Nauczyciel rozdał to do klasy jako materiał. Przepis był zmyślony.

*Co poszło nie tak:*
- AI wygenerowała brzmiący poprawnie tekst prawny, który nie istnieje
- Nauczyciel nie sprawdził źródła
- Uczniowie mogą działać na podstawie fałszywych informacji

*Zasada:* **Nigdy nie wyprowadzaj faktów, dat, przepisów prawa, danych statystycznych z AI bez weryfikacji w oficjalnym źródle.**

*Złota reguła:* Jeśli nie możesz sprawdzić tego w ciągu 2 minut na stronie rządowej / w oficjalnym dokumencie – nie używaj.

---

**SCENARIUSZ 3 – Nadmierne poleganie na AI**

*Historia:* Nauczyciel całkowicie przestał samodzielnie pisać konspekty. W ciągu semestru przestał planować lekcje samodzielnie – AI robiła to za niego. Po roku stwierdził, że trudno mu zaplanować nawet krótką aktywność bez narzędzia.

*Co poszło nie tak:*
- "Cognitive offloading" – stopniowa utrata umiejętności, które przejęło narzędzie
- Problem zidentyfikowany przez badania Harvard 2024

*Zasada:* **AI to asystent. Ty jesteś nauczycielem/nauczycielką. AI nie zastąpi Twojej wiedzy o uczniach, Twojej intuicji pedagogicznej, Twojego doświadczenia.** Używaj AI do operacyjnych, powtarzalnych zadań – nie do budowania swojego osądu pedagogicznego.

---

**CHECKLISTA WERYFIKACJI ODPOWIEDZI AI (5 pytań)**

Po każdym wytworzonym przez AI tekście zadaj sobie te pytania:
1. ✅ Czy fakty (daty, liczby, cytaty, przepisy) są sprawdzone w oficjalnym źródle?
2. ✅ Czy ton i styl pasują do kontekstu zastosowania (szkolny, projektowy, formalny)?
3. ✅ Czy nie ma w tekście danych, które nie powinny się tu znaleźć?
4. ✅ Czy tekst pasuje do moich konkretnych realiów (klasa, szkoła, projekt)?
5. ✅ Czy za ten tekst możesz postawić swoje podpis i wziąć odpowiedzialność?

Jeśli na którekolwiek pytanie odpowiedź brzmi NIE – popraw przed użyciem.
