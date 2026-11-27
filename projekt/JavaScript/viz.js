//wizualizacja danych !
//dane z tablicy obiektów z pliku json! - zrobione, js poprawnie odczytuje dane z pliku!
//tryb instancji, osadzony w stronie z M1 - dodane do widoku głównego (pod kanban) i js napisany w trybie instancji
//reakcja na rozmiar okna - działa?
//reakcja na interakcje
//Spojne wizualnie!

//Tu pobiera dane i sprawdza błedy pobierania
function szkic(p) {
    let kontener;
    let dane = [];
    let cur_name = 'players_count';
    let font_size = 14;

    p.setup = async function () {
        kontener = document.getElementById('wykres');
        p.createCanvas(kontener.clientWidth - 25, 300);
        dane = await p.loadJSON('https://nataliawl.github.io/techniki-www/projekt/json/dane.json')
        console.log(dane.length);
    };

    p.draw = function () {
        p.background(252, 238, 238);
        let szer = p.width / dane.length;
        let numbers = dane.map(el => Number(el[cur_name]));
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(font_size);

        for (let i = 0; i < dane.length; i++) {
            let h = p.map(numbers[i], 0, p.max(numbers), 0, p.height - 40);
            p.fill(172, 32, 32);
            p.rect(i * szer, p.height - h, szer - 10, h);
            p.fill(28, 5, 5);
            p.text(dane[i].game_name, szer * i + (szer - 10)/2  , p.height - h - 10);
        }
    };

    p.windowResized = function () {
        p.resizeCanvas(kontener.clientWidth - 25, 300);
        font_size = p.constrain(p.width * 0.015, 2, 20);
    };

}
new p5(szkic, 'wykres');
