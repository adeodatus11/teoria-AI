const IDX = [
  { t: 'Czym są halucynacje AI', p: 'module1', a: 'halucynacje', tags: ['halucynacje', 'błędy', 'fakty'], c: 'AI może wygenerować wiarygodnie brzmiącą, ale błędną odpowiedź.' },
  { t: 'Otwórz narzędzie AI – teraz', p: 'module1', a: 'tools', tags: ['ChatGPT', 'Gemini', 'Claude', 'start'], c: 'Linki do narzędzi AI i pierwsze wejście do pracy z czatem.' },
  { t: 'Pierwsze ćwiczenie z AI', p: 'module1', a: 'first-prompt-exercise', tags: ['pierwszy prompt', 'start', 'ćwiczenie'], c: 'Krótki start z własnym zadaniem zawodowym.' },

  { t: 'Framework PARTS – jak budować dobre prompty', p: 'module2', a: 'parts', tags: ['PARTS', 'prompt', 'struktura'], c: 'Persona, Aim, Recipients, Tone, Structure.' },
  { t: '5 Złotych Zasad Promptowania', p: 'module2', a: 'rules', tags: ['prompt', 'zasady', 'iteracja'], c: 'Konkretny cel, kontekst, format, iteracja i weryfikacja.' },

  { t: 'AI w dydaktyce', p: 'module3', a: 'dydaktyka', tags: ['dydaktyka', 'lekcja', 'materiały'], c: 'Scenariusze lekcji, różnicowanie i pytania sprawdzające.' },
  { t: 'AI w administracji i komunikacji', p: 'module3', a: 'administracja', tags: ['administracja', 'mail', 'protokół'], c: 'Maile, ogłoszenia, podsumowania i teksty organizacyjne.' },

  { t: 'Analiza dokumentów i przepływu informacji', p: 'module4', a: 'documents', tags: ['dokumenty', 'analiza', 'wątek'], c: 'Wyciąganie decyzji, zadań i terminów z długich tekstów.' },
  { t: 'Zamknięte piaskownice i RAG', p: 'module4', a: 'sandbox', tags: ['RAG', 'NotebookLM', 'źródła'], c: 'Kiedy zwykły czat nie wystarcza i warto pracować na źródłach.' },
  { t: 'Porównanie dwóch dokumentów', p: 'module4', a: 'compare', tags: ['porównanie', 'różnice', 'sprzeczności'], c: 'Tabela rozbieżności i luk między tekstami.' },
  { t: 'Bezpieczeństwo danych w pracy analitycznej', p: 'module4', a: 'rodo', tags: ['RODO', 'anonimizacja', 'dane'], c: 'Zasady bezpiecznego wklejania dokumentów do AI.' },

  { t: 'AI w pracy projektowej', p: 'module5', a: 'projekty', tags: ['projekty', 'granty', 'koordynacja'], c: 'Co AI może przyspieszyć w pracy projektowej, a czego nie zastąpi.' },
  { t: 'Opis działania do raportu lub sprawozdania', p: 'module5', a: 'reporting', tags: ['raport', 'sprawozdanie', 'opis działania'], c: 'Szkic opisu działania projektowego z oznaczeniem brakujących danych.' },
  { t: 'Mail do partnera projektu', p: 'module5', a: 'partnerzy', tags: ['mail', 'partnerzy', 'angielski'], c: 'Robocza korespondencja z partnerem lub interesariuszem.' },
  { t: 'Treści promocyjne i informacyjne projektu', p: 'module5', a: 'promocja', tags: ['promocja', 'post', 'strona szkoły'], c: 'Krótka komunikacja po wydarzeniu lub o rezultatach projektu.' },
  { t: 'Transparentność i odpowiedzialność', p: 'module5', a: 'transparentnosc', tags: ['transparentność', 'odpowiedzialność', 'grant'], c: 'AI jako wersja robocza, nie autor faktów i wyników projektu.' },

  { t: 'AI to także infrastruktura', p: 'module6', a: 'infrastruktura', tags: ['energia', 'woda', 'centra danych'], c: 'Moduł o fizycznej infrastrukturze stojącej za działaniem AI.' },
  { t: 'Jak czytać liczby o śladzie AI', p: 'module6', a: 'metryki', tags: ['ślad', 'energia', 'woda'], c: 'Liczby są użyteczne, ale zależą od modelu, lokalizacji i sposobu użycia.' },
  { t: 'Zasada proporcji w użyciu AI', p: 'module6', a: 'proporcja', tags: ['zrównoważone AI', 'proporcja', 'praktyka'], c: 'Używaj AI tam, gdzie daje realny zysk jakości, czasu lub dostępności.' },

  { t: 'Ćwiczenie 1 – Twój pierwszy prompt', p: 'exercises', a: 'ex1', tags: ['ćwiczenie', 'start'], c: 'Pierwsze uruchomienie narzędzia AI.' },
  { t: 'Ćwiczenie 2 – Ulepsz słaby prompt', p: 'exercises', a: 'ex2', tags: ['ćwiczenie', 'PARTS'], c: 'Porównanie promptu przed i po doprecyzowaniu.' },
  { t: 'Ćwiczenie 3 – Konspekt lekcji', p: 'exercises', a: 'ex3', tags: ['ćwiczenie', 'konspekt', 'dydaktyka'], c: 'Generowanie scenariusza lekcji i jego dopasowanie.' },
  { t: 'Ćwiczenie 4 – AI w dokumentach szkolnych', p: 'exercises', a: 'ex4', tags: ['ćwiczenie', 'mail', 'dokumenty'], c: 'Streszczenie, checklista i komunikacja.' },
  { t: 'Ćwiczenie 5 – Opis działania projektowego', p: 'exercises', a: 'ex5', tags: ['ćwiczenie', 'projekt', 'raport'], c: 'Szkic opisu działania do raportu lub sprawozdania.' },
  { t: 'Ćwiczenie 6 – Analiza obszernego dokumentu', p: 'exercises', a: 'ex6', tags: ['ćwiczenie', 'analiza', 'dokumenty'], c: 'Praca z długim materiałem i ryzykiem pominięć.' },
  { t: 'Ćwiczenie 7 – Mail w języku obcym', p: 'exercises', a: 'ex7', tags: ['ćwiczenie', 'mail', 'partnerzy'], c: 'Korespondencja projektowa z partnerem zagranicznym.' },
  { t: 'Ćwiczenie 8 – Dostosowanie materiału SPE', p: 'exercises', a: 'ex8', tags: ['ćwiczenie', 'SPE', 'różnicowanie'], c: 'Adaptacja materiału do potrzeb ucznia.' },
  { t: 'Ćwiczenie 9 – Podsumowanie spotkania', p: 'exercises', a: 'ex9', tags: ['ćwiczenie', 'spotkanie', 'protokół'], c: 'Zamiana notatek w uporządkowane podsumowanie.' },
  { t: 'Ćwiczenie 10 – Treści promocyjne projektu', p: 'exercises', a: 'ex10', tags: ['ćwiczenie', 'promocja', 'projekt'], c: 'Komunikacja o projekcie w krótszych formatach.' },
  { t: 'Ćwiczenie 13 – Trening rezyliencji', p: 'exercises', a: 'ex13', tags: ['ćwiczenie', 'komunikacja', 'symulacja'], c: 'AI jako trudny rozmówca do ćwiczenia komunikacji.' },
  { t: 'Ćwiczenie 14 – Ujarzmienie ankiet', p: 'exercises', a: 'ex14', tags: ['ćwiczenie', 'ankiety', 'analiza'], c: 'Porządkowanie danych opisowych i odpowiedzi.' },
  { t: 'Ćwiczenie 15 – Odwrócona inżynieria promptu', p: 'exercises', a: 'ex15', tags: ['ćwiczenie', 'prompt', 'reverse engineering'], c: 'Odtwarzanie logiki promptu na podstawie gotowego wyniku.' },

  { t: 'Prompt: Konspekt lekcji', p: 'prompts', a: 'pA1', tags: ['prompt', 'lekcja', 'dydaktyka'], c: 'Gotowy prompt do planowania lekcji.' },
  { t: 'Prompt: Różnicowanie materiału', p: 'prompts', a: 'pA2', tags: ['prompt', 'różnicowanie', 'SPE'], c: 'Wersje materiału dla różnych potrzeb uczniów.' },
  { t: 'Prompt: Streszczenie dokumentu i lista zadań', p: 'prompts', a: 'pB1', tags: ['prompt', 'dokument', 'zadania'], c: 'Wyciąganie streszczenia i checklisty z tekstu.' },
  { t: 'Prompt: Mail do rodziców', p: 'prompts', a: 'pC1', tags: ['prompt', 'mail', 'rodzice'], c: 'Profesjonalna wiadomość do rodziców.' },
  { t: 'Prompt: Ogłoszenie szkolne / post szkolny', p: 'prompts', a: 'pC2', tags: ['prompt', 'ogłoszenie', 'komunikacja'], c: 'Krótki komunikat dla uczniów, rodziców lub społeczności.' },
  { t: 'Prompt: Opis działania projektowego', p: 'prompts', a: 'pD1', tags: ['prompt', 'projekt', 'raport'], c: 'Narracyjny opis działania do raportu.' },
  { t: 'Prompt: Mail do partnera zagranicznego', p: 'prompts', a: 'pD2', tags: ['prompt', 'partner', 'angielski'], c: 'Projektowy mail w prostym, profesjonalnym stylu.' },
  { t: 'Prompt: Treści promocyjne projektu', p: 'prompts', a: 'pD3', tags: ['prompt', 'promocja', 'projekt'], c: 'Post, akapit na stronę i temat maila.' },
  { t: 'Prompt: Pre-mortem projektu', p: 'prompts', a: 'pE1', tags: ['prompt', 'ryzyko', 'projekt'], c: 'Analiza scenariuszy porażki i działań zapobiegawczych.' },
  { t: 'Prompt: Zestawianie sprzeczności', p: 'prompts', a: 'pE2', tags: ['prompt', 'sprzeczności', 'audyt'], c: 'Czerwone flagi między procedurą a stanem faktycznym.' },
  { t: 'Prompt: Porządkowanie przeciążenia informacyjnego', p: 'prompts', a: 'pE3', tags: ['prompt', 'szum informacyjny', 'wątek'], c: 'Oddzielanie sygnału od szumu w długiej komunikacji.' },
  { t: 'Prompt: Weryfikacja odpowiedzi AI', p: 'prompts', a: 'pH1', tags: ['prompt', 'weryfikacja', 'halucynacje'], c: 'Krytyczna analiza odpowiedzi przed użyciem.' },

  { t: 'Checklista dobrego promptu', p: 'checklists', a: 'chk-prompt', tags: ['checklista', 'prompt', 'PARTS'], c: 'Szybkie pytania kontrolne przed wysłaniem promptu.' },
  { t: 'Checklista weryfikacji odpowiedzi AI', p: 'checklists', a: 'chk-verify', tags: ['checklista', 'weryfikacja', 'fakty'], c: 'Jak sprawdzić odpowiedź AI przed użyciem.' },
  { t: 'Checklista bezpieczeństwa RODO', p: 'checklists', a: 'chk-rodo', tags: ['checklista', 'RODO', 'anonimizacja'], c: 'Zasady bezpieczeństwa przed wklejeniem danych.' },

  { t: 'Mój plan wdrożenia AI', p: 'myplan', a: '', tags: ['wdrożenie', 'plan', 'kroki'], c: 'Plan pierwszych działań po ukończeniu kursu.' },
  { t: 'Źródła i literatura', p: 'bibliography', a: '', tags: ['źródła', 'bibliografia', 'literatura'], c: 'Klikalne źródła użyte w kursie.' },
  { t: 'Prezentacja: Moduł 1 – Czym jest AI', p: 'slides', a: 'm1', tags: ['slajdy', 'prezentacja', 'moduł 1'], c: 'Zestaw slajdów do modułu 1.' },
  { t: 'Prezentacja: Moduł 6 – Zrównoważone AI', p: 'slides', a: 'm6', tags: ['slajdy', 'prezentacja', 'moduł 6'], c: 'Zestaw slajdów do modułu 6.' }
];
