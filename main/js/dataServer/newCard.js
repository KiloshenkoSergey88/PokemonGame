function Card1(data, nameChar, i) { // функция в блоке цикла создаёт экземляр каждой карты
    let fragment = new DocumentFragment();

    let card = document.createElement('img');

    card.className = 'cardPok';
    card.id = `${i}`;
    card.src = `${data}`;
    card.title = `${nameChar}`;
    fragment.append(card);
    return fragment;
};

function Card2(data, nameChar, i) { // функция в блоке цикла создаёт экземляр каждой карты
    let fragment = new DocumentFragment();

    let card = document.createElement('img');

    card.className = 'cardPok';
    card.id = `${i}`;
    card.src = `${data}`;
    card.title = `${nameChar}`;
    card.style.opacity = '0.95';
    fragment.append(card);
    return fragment;
};