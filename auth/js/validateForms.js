const //определяем переменные
    validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    validLogin = /^[a-zA-Z0-9]*$/;

function validateformAuth() { // функция для валидации авторизации

    if (authNickId.value.length == 0) {
        failA.textContent = "пустое поле 'Логин'";
        return false;
    } else
    if (authPassId.value.length < 6) {
        failA.textContent = "Неправильно введен пароль";
        return false;
    } else {
        return true;
    }
};

function validateformReg() { // функция для валидации регистрации
    if (validEmail.test(regEmailId.value)) {
        if (regNickId.value.length >= 5) {
            if (validLogin.test(regNickId.value)) {
                if (regPassId.value.length > 6) {
                    if (regPassId.value === regCPassId.value) {
                        return true;
                    } else {
                        fail.textContent = "пароли не совпадают";
                        return false;
                    }
                } else {
                    fail.textContent = "Cлишком простой пароль";
                    return false;
                }
            } else {
                fail.textContent = "Логин должен состоять из латинских букв и цифр";
                return false;
            }
        } else {
            fail.textContent = "Логин меньше 6 символов";
            return false;
        }
    } else {
        fail.textContent = "Email некорректен";
        return false;
    }
};