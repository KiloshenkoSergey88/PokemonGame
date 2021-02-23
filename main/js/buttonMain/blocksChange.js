const
    blockMenu = document.getElementById('header'), // блок с кнопками для функции делегирования событий
    collCnt = document.getElementById('collCnt'), // блоки смены контента
    statCnt = document.getElementById('statCnt'),
    shieldCnt = document.getElementById('shieldCnt'),
    payCnt = document.getElementById('payCnt'),
    firstCnt = document.getElementById('firstCnt'),
    playCnt = document.getElementById('playCnt'),
    allBlocksMain = document.querySelectorAll('.blocksCnt');

blockMenu.addEventListener('click', function(e) { // функция для смены блоков при нажатии на кнопку
    if (e.target.className == 'isAllbuttons') { // обнуляем все стили у блоков и по условию назначаем нужный
        allBlocksMain.forEach(el => {
            el.style.display = 'none';
        });
        switch (e.target.id) {

            case 'collBtn':
                collCnt.style.display = 'flex';
                break;
            case 'statBtn':
                statCnt.style.display = 'flex';
                break;
            case 'shieldBtn':
                shieldCnt.style.display = 'flex';
                break;
            case 'payBtn':
                payCnt.style.display = 'flex';
                break;
            case 'firstBtn':
                firstCnt.style.display = 'flex';
                break;
            case 'playBtn':
                playCnt.style.display = 'flex';
                break;
        }
    }
});