//wizualizacja danych !
//dane z tablicy obiektów z pliku json! - zrobione, js poprawnie odczytuje dane z pliku!
//tryb instancji, osadzony w stronie z M1 - dodane do widoku głównego (pod kanban) i js napisany w trybie instancji
//reakcja na rozmiar okna - działa?
//reakcja na interakcje
//Spojne wizualnie!


function szkic(p) {
    let kontener;
    let dane = [];
    let cur_name = 'players_count';
    let font_size = 14;

    p.setup = async function () {
        p.textFont("Verdana");
        kontener = document.getElementById('wykres');
        p.createCanvas(kontener.clientWidth - 25, 300);
        dane = await p.loadJSON('https://nataliawl.github.io/techniki-www/projekt/json/dane.json')
        console.log(dane.length);
        font_size = p.constrain(p.width * 0.015, 8, 20);

    };

    p.draw = function () {
        p.background(252, 238, 238);
        let szer = p.width / dane.length;
        let szer_col = szer - 10;
        let numbers = dane.map(el => Number(el[cur_name]));
        numbers.sort(function(a, b){return b - a});

        let button_w = szer_col * 1.75;
        let button_h = p.constrain(szer / 2, 40, 65);
        let button_x = p.width - button_w - 20;
        let button_y = 10;

        p.textSize(p.constrain(font_size * 2.5, 25, 40));
        p.fill(86, 16, 16);
        p.textStyle(p.BOLD);
        p.text(cur_name, p.width/2, button_y*5)

        p.textStyle(p.NORMAL);
        p.rect(button_x, button_y, button_w, button_h, 4);

        p.fill(252, 238, 238);
        p.textSize(font_size);
        p.textAlign(p.CENTER, p.CENTER);
        p.text("Zmień dane", button_x+ button_w/ 2, button_y + button_h / 2);

        p.textAlign(p.CENTER, p.BOTTOM);
        for (let i = 0; i < dane.length; i++) {
            let h = p.map(numbers[i], 0, p.max(numbers), 0, p.height - 40);

            p.fill(172, 32, 32);
            p.rect(i * szer + 5, p.height - h, szer_col, h, 2, 2, 0, 0);

            p.fill(28, 5, 5);
            let find_game = dane.find(el => el[cur_name] === numbers[i]);
            let name_game = find_game ? find_game.game_name : "";
            p.text(name_game, szer * i + 5  , p.height - h - 8, szer_col);
        }
    };

    p.windowResized = function () {
        p.resizeCanvas(kontener.clientWidth - 25, 300);
        font_size = p.constrain(p.width * 0.015, 8, 20);
    };

}
new p5(szkic, 'wykres');
