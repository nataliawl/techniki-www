//wizualizacja danych !
//dane z tablicy obiektów z pliku json! - zrobione, js poprawnie odczytuje dane z pliku!
//tryb instancji, osadzony w stronie z M1 - dodane do widoku głównego (pod kanban) i js napisany w trybie instancji
//reakcja na rozmiar okna - nie do końca ( trzeba zmienić choć raz rozmiar okna przeglądarki)
//reakcja na interakcje
//Spojne wizualnie!

//Tu pobiera dane i sprawdza błedy pobierania
function szkic(p) {
    let kontener;
    let dane;
    p.preload = function () {
        dane = p.loadJSON('dane.json', (data) => {dane = Object.values(data);});
    };

    p.setup = function () {
        kontener = document.getElementById('wykres');
        p.createCanvas(kontener.clientWidth, 300);
        console.log(dane.length);
        p.createCanvas(600, 300);
    };

    p.draw = function () {
        p.background(240);
        p.text(dane.length, 100, 150);
        for (let i = 0; i < dane.length; i++){
            p.text(dane[i].players_count, i * 60, 150);
        }
    };

    p.windowResized = function () {
        p.resizeCanvas(kontener.clientWidth, 300);
    };

}
new p5(szkic, 'wykres');
