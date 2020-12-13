document.addEventListener("DOMContentLoaded", () => {
    regEmailId.value = null;
    regNickId.value = null;
    regPassId.value = null;
    regCPassId.value = null;
    authNickId.value = null;
    authPassId.value = null;
});
authTo.onclick = () => {
    reg.style.display = "none";
    auth.style.display = "flex";
};
regTo.onclick = () => {
    auth.style.display = "none";
    reg.style.display = "flex";
};
clearPlace.onclick = () => { 
    regEmailId.value = null;
    regNickId.value = null;
    regPassId.value = null;
    regCPassId.value = null;
    authNickId.value = null;
    authPassId.value = null;
};

function validateformReg() {
    let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let validLogin = /^[a-zA-Z0-9]*$/;
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