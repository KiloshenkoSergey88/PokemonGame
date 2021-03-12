const
    blockMenu = document.getElementById('header'), // блок с кнопками для функции делегирования событий
    collCnt = document.getElementById('collCnt'), // блоки смены контента
    statCnt = document.getElementById('statCnt'),
    shieldCnt = document.getElementById('shieldCnt'),
    payCnt = document.getElementById('payCnt'),
    firstCnt = document.getElementById('firstCnt'),
    playCnt = document.getElementById('playCnt');

blockMenu.addEventListener('click', function(e) { // функция для смены блоков при нажатии на кнопку
    if (e.target.className == 'isAllbuttons') { // обнуляем все стили у блоков и по условию назначаем нужный
        garbageCollectorForContent();
        switch (e.target.id) {

            case 'collBtn':
                garbageCollectorForCIM2All();
                collCnt.style.display = 'flex';
                break;
            case 'statBtn':
                garbageCollectorForCIM2All();
                statCnt.style.display = 'flex';
                break;
            case 'shieldBtn':
                garbageCollectorForCIM2All();
                shieldCnt.style.display = 'flex';
                break;
            case 'payBtn':
                garbageCollectorForCIM2All();
                payCnt.style.display = 'flex';
                break;
            case 'firstBtn':
                garbageCollectorForCIM2All();
                firstCnt.style.display = 'flex';
                break;
            case 'playBtn':
                garbageCollectorForCIM2All();
                playCnt.style.display = 'flex';
                break;
        }
    }
});