const //определяем переменные
    СIMBA = document.getElementById('СIMBA'),
    CIMBD = document.getElementById('CIMBD'),
    CIW = document.getElementById('collInsideWorkspace'),
    iconCIMSI = document.getElementById('iconCIMSI'),
    CIMSN = document.getElementById('collInsideMenuStatName'),
    CIM1 = document.getElementById('collInsideMenu1'),
    CIM2 = document.getElementById('collInsideMenu2');
let
    CIMSDL = document.getElementById('CIMSDL'),
    CIMSDT = document.getElementById('CIMSDT'),
    CIMSDTT = document.getElementById('CIMSDTT'),
    CIMSDH = document.getElementById('CIMSDH'),
    CIMSDA = document.getElementById('CIMSDA'),
    CIMSDD = document.getElementById('CIMSDD'),
    CIMSDS = document.getElementById('CIMSDS'),
    CIMSDU = document.getElementById('CIMSDU'),
    CIMSDO = document.getElementById('CIMSDO');

socket.on('message', function(char) { // получаем глобальное сообщение с данными покемонов в 'JSON'

    window.Sandbox = char;
    const DataAccessPok = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];

    for (let i = 0; i < Sandbox.length; i++) { // обрабатываем через цикл и создаём переменные для наполнения коллекции картами покемонов
        let data = Sandbox[i].body;
        let nameChar = Sandbox[i].name;
        const element = DataAccessPok[i];
        if (Sandbox[i].level == '1') {
            if (element == true) {
                CIW.append(Card2(data, nameChar, i)); // добавляем карты покемонов в блок на отрисовку
            } else {
                CIW.append(Card1(data, nameChar, i));
            }
        }

    }


    CIW.addEventListener('click', function(e) { // обработчик с делегированием по родительскому блоку, по условию добавляем карты с описанием взятым с сервера 'JSON'...
        CIMBD.style.display = 'none';
        if (e.target.className == 'cardPok' && e.target.style.opacity == '0.95') {
            СIMBA.style.display = 'inline-block';
        } else {
            СIMBA.style.display = 'none';
        }
        CIM1.style.opacity = '1'; // далее выводим в блоке статистика + показываем по свойству "opacity"
        if (e.target.className == 'cardPok') {
            let valuePok = Sandbox.find(i => i.id == e.target.id);
            iconCIMSI.attributes[1].nodeValue = valuePok.body;
            CIMSN.innerHTML = valuePok.name;
            CIMSDL.innerHTML = valuePok.level;
            CIMSDT.innerHTML = valuePok.type[0];
            CIMSDTT.innerHTML = valuePok.type[1];
            CIMSDH.innerHTML = valuePok.stats.HP;
            CIMSDA.innerHTML = valuePok.stats.attack;
            CIMSDD.innerHTML = valuePok.stats.defend;
            CIMSDS.innerHTML = valuePok.stats.speed;
            CIMSDU.innerHTML = valuePok.force.ultimateA;
            CIMSDO.innerHTML = valuePok.stats.allStats;
        }
    });

    CIM2.addEventListener('click', function(e) {
        if (e.target.tagName == "IMG") {
            СIMBA.style.display = 'none';
            CIMBD.style.display = 'inline-block';
            CIM1.style.opacity = '1';
            let addValuePok = Sandbox.find(i => i.body == e.target.attributes[1].nodeValue);
            iconCIMSI.attributes[1].nodeValue = addValuePok.body;
            CIMSN.innerHTML = addValuePok.name;
            CIMSDL.innerHTML = addValuePok.level;
            CIMSDT.innerHTML = addValuePok.type[0];
            CIMSDTT.innerHTML = addValuePok.type[1];
            CIMSDH.innerHTML = addValuePok.stats.HP;
            CIMSDA.innerHTML = addValuePok.stats.attack;
            CIMSDD.innerHTML = addValuePok.stats.defend;
            CIMSDS.innerHTML = addValuePok.stats.speed;
            CIMSDU.innerHTML = addValuePok.force.ultimateA;
            CIMSDO.innerHTML = addValuePok.stats.allStats;
        }

    })

});