bodyParent = document.getElementById('wrapper'); // переменная главного блока для обработки через делегирование на отмену событий:
bodyParent.addEventListener('click', function(e) {
    if (e.target.className != 'cardPok' && e.target.className != 'cloneAddNewPokeball') { // условие 1 (при нажатии на поле - "некарту покемонов", убираем окно по свойству "opacity")
        CIM1.style.opacity = '0';
        СIMBA.style.display = 'none';
        CIMBD.style.display = 'none';
    }
    if (e.target.className != 'pokBArray') {
        BCWS.style.display = 'none';
        PlayMenuBtn.disabled = true;
        for (let i = 0; i < activePokeball.length; i++) {
            let el = activePokeball[i];
            el.style.border = '';
        }
    }
});