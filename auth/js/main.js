const //определяем переменные
    cp = document.getElementById('clearPlace'), // кнопка "Очиститть"
    collForms = document.querySelectorAll('.collForms'), // коллекция "input" в формах reg и auth
    authTo = document.getElementById('authTo'), // кнопка смены блока на авторизацию
    regTo = document.getElementById('regTo'), // кнопка смены блока на регистрацию
    reg = document.getElementById('reg'), // форма регистрации
    auth = document.getElementById('auth'); // форма авторизации

function collNull() { // функция присваевает коллекции значение "null"
    for (const el of collForms) {
        el.value = null;
    }
}

document.addEventListener("DOMContentLoaded", collNull()); // обработчик загрузки страницы с "collNull()"
cp.onclick = collNull; // обработчик при нажатии на элемент с "collNull()"

authTo.onclick = () => { // выбор формы для авторизации
    reg.style.display = "none";
    auth.style.display = "flex";
};
regTo.onclick = () => { // выбор формы для регистрации
    auth.style.display = "none";
    reg.style.display = "flex";
};