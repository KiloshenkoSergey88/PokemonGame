let
    newPokeballBtn = document.getElementById('newPokeball'), // блоки смены контента
    collCntInside = document.getElementById('collCntInside'),
    forCreateCIM = document.getElementById('forCreateCIM');

newPokeballBtn.addEventListener('click', function() { // функция для смены блоков при нажатии на кнопку
    collCnt.style.display = 'none';
    collCntInside.style.display = 'flex';
    forCreateCIM.style.display = 'flex'; // определенная кнопка под контент 
});