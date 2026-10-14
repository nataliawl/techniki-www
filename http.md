**Zadanie 1**

aquarium - pokazuje animacje akwarium

sudoko - otwiera grywalne sudoku

primes - wypisuje liczby pierwsze



**Odpowiedź do pytania 4:** Większość funkcji robi dziś Internet, przykładowo łatwo można z jego pomocą znaleźć informacje o aktualnej pogodzie, jakie są liczby pierwsze itd. Wiele innych funkcji posiada dzisiaj specjalne aplikacje, które możemy znaleźć na każdym telefonie np. aplikacja kalendarz.



**Zadanie 2**

|**Żądanie**|**Metoda**|**Ścieżka**|**Kod**|**3 nagłówki + znaczenie**|
|-|-|-|-|-|
|info.cern.ch|GET |info.cern.ch |200 OK|Accept-Ranges: bytes - określa czy klient potrafi odczytać pliki przesłane w częściach ( bytes tak, *none* nie)<br />Content-Lenght: 646 - długość w bajtach przesłanej zawartości bez części nagłówkowej<br />Last-Modified: Wed, 05 Feb 2014 16:00:31 GMT - ostatnia aktualizacja dokumentu|
|github.com|HEAD|github.com|301 Moved Permanently|Content-Lenght: 0 - długość w bajtach przesłanej zawartości bez części nagłówkowej<br /><br />Location:https://github.com/ - wymusza przekierowanie na określony adres|
|nie-ma-takiej|HEAD|info.cern.ch|404 Not Found|Server:Apache - identyfikacja serwera i użytego w nim oprogramowania<br />Connection: Close - połaczenie zostanie zamknięte po obsłużeniu zapytania<br />Content-Type: text/html; charset=iso-8859-1 - informacja w jakim formacie i stronie kodowej wysyłany jest dokument|



**Odpowiedź na pytanie:** github.com odpowiada inaczej niż info.cern.ch, ponieważ pierwszy został



Zadanie 3



|**Pomiar**|**info.cern.ch**|**spacejam.com/1996**|**onet.pl**|
|-|-|-|-|
|**liczba żadań**|2|19|44|
|**przesłane dane (kB)**|2.53|66.42|485.57|
|**czas ładowania**|686ms|1.3s|11.65s|
|**elementy DOM**|19|122|1440|
|**najcięższy plik**|image/vnd.microsoft.com|image/gif|text/JavaScirpt|



**Odpowiedź na pytanie :** W mojej opinii różnica zależy od znaczącej różnicy w liczbie elementów znajdujących się na każdej ze stron. Z racji, że info.cern.ch miało ich najmniej, pomiary dla niej miały najniższą wartość. Natomiast dla onet.pl miały one największą wartość.

