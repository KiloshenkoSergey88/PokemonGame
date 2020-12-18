setTimeout(() => {
    bgForm.style.backgroundImage = "url(../img/bgLogin.jpg)"; 
    ring.style.display = "none";
    auth.style.display = "flex";
}, 2222);

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

regEmailId.addEventListener("mouseover", function() {
    lar1.style.color = "yellow";
    this.addEventListener("mouseout", function() {
        lar1.style.color = "black";
    });
});
regNickId.addEventListener("mouseover", function() {
    lar2.style.color = "yellow";
    this.addEventListener("mouseout", function() {
        lar2.style.color = "black";
    });
});
regPassId.addEventListener("mouseover", function() {
    lar3.style.color = "yellow";
    this.addEventListener("mouseout", function() {
        lar3.style.color = "black";
    });
});
regCPassId.addEventListener("mouseover", function() {
    lar4.style.color = "yellow";
    this.addEventListener("mouseout", function() {
        lar4.style.color = "black";
    });
});
authNickId.addEventListener("mouseover", function() {
    laa1.style.color = "yellow";
    this.addEventListener("mouseout", function() {
        laa1.style.color = "black";
    });
});
authPassId.addEventListener("mouseover", function() {
    laa2.style.color = "yellow";
    this.addEventListener("mouseout", function() {
        laa2.style.color = "black";
        console.log(authNickId.value, authPassId.value, regNickId.value, regPassId.value);
    });
});
regEmailId.addEventListener("mouseover", function() {
    lar1.style.color = "yellow";
    this.addEventListener("mouseout", function() {
        lar1.style.color = "black";
    });
});

function validateformAuth() {
    
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