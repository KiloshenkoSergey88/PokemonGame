function AccessDataPlayer() {
    socket.on('accessPokemon', function (dataAccessPok) {
        for (let i = 0; i < 150; i++) { // обрабатываем через цикл и создаём переменные для наполнения коллекции картами покемонов
            let data = Sandbox[i].body;
            let nameChar = Sandbox[i].name;
            const element = dataAccessPok[i];
            if (Sandbox[i].level <= '3') {
                if (element == true) {
                    CIW.append(Card2(data, nameChar, i)); // добавляем карты покемонов в блок на отрисовку
                } else {
                    CIW.append(Card1(data, nameChar, i));
                }
            }

        }
    });
}