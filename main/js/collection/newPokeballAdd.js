let
    NPBB1 = document.getElementById('newPokeballBody1'),
    NPBN1 = document.getElementById('newPokeballName1'),
    NPBB2 = document.getElementById('newPokeballBody2'),
    NPBN2 = document.getElementById('newPokeballName2'),
    NPBB3 = document.getElementById('newPokeballBody3'),
    NPBN3 = document.getElementById('newPokeballName3'), // определяем переменные
    countforCreateListNewPokeball = 0;

СIMBA.addEventListener('click', () => { // обработчик для кнопки "добавить"делаем клон для создания первого экземпляра в новый покебол 
    let cloneCIMSN = CIMSN.cloneNode(true);
    let cloneiconCIMCI = iconCIMSI.cloneNode(true); // делаем клон для создания первого экземпляра в новый покебол
    switch (countforCreateListNewPokeball) {
        case 0:
            cloneiconCIMCI.id = 'cloneiconCIMCI1';
            cloneCIMSN.id = 'cloneCIMSN1';
            cloneiconCIMCI.className = 'cloneAddNewPokeball';
            NPBB1.append(cloneiconCIMCI);
            NPBN1.append(cloneCIMSN);
            countforCreateListNewPokeball++;
            break;
        case 1:
            if (cloneCIMSN.innerHTML != cloneCIMSN1.innerHTML) {
                cloneiconCIMCI.id = 'cloneiconCIMCI2';
                cloneiconCIMCI.className = 'cloneAddNewPokeball';
                cloneCIMSN.id = 'cloneCIMSN2';
                NPBB2.append(cloneiconCIMCI);
                NPBN2.append(cloneCIMSN);
                countforCreateListNewPokeball++;
                break;
            } else {
                alert('чето хрень какая-то');
                break;
            }
        case 2:
            if (cloneCIMSN.innerHTML != cloneCIMSN1.innerHTML && cloneCIMSN.innerHTML != cloneCIMSN2.innerHTML) {
                cloneiconCIMCI.id = 'cloneiconCIMCI3';
                cloneiconCIMCI.className = 'cloneAddNewPokeball';
                cloneCIMSN.id = 'cloneCIMSN3';
                NPBB3.append(cloneiconCIMCI);
                NPBN3.append(cloneCIMSN);
                countforCreateListNewPokeball++;
                forCreateCIM.disabled = false;
                break;
            } else {
                alert('а уже фсё... а надо было раньше...');
                break;
            }
        default:
            alert('Я дебил чтото пропустил');
            break;
    }
});

CIMBD.addEventListener('click', function() {
    forCreateCIM.disabled = true;
    blocksCIM2.forEach(el => {
        if (el.hasChildNodes()) {
            if (CIMSN.innerHTML == el.firstChild.innerHTML) {
                el.removeChild(el.firstChild);
                let previos = el.previousElementSibling;
                previos.removeChild(previos.firstChild);
            }
        }
    });
    if (NPBB1.hasChildNodes()) {
        if (NPBB2.hasChildNodes()) {
            countforCreateListNewPokeball = 2;
        } else {
            if (NPBB3.hasChildNodes()) {
                let cloneiconCIMCI3 = document.getElementById('cloneiconCIMCI3');
                let cloneCIMSN3 = document.getElementById('cloneCIMSN3');
                cloneCIMSN3.id = 'cloneCIMSN2';
                cloneiconCIMCI3.id = 'cloneiconCIMCI2';
                NPBB2.append(cloneiconCIMCI3);
                NPBN2.append(cloneCIMSN3);
                countforCreateListNewPokeball = 2;
            } else {
                countforCreateListNewPokeball = 1;
            }
        }
    } else {
        if (NPBB2.hasChildNodes()) {
            let cloneiconCIMCI2 = document.getElementById('cloneiconCIMCI2');
            let cloneCIMSN2 = document.getElementById('cloneCIMSN2');
            cloneCIMSN2.id = 'cloneCIMSN1';
            cloneiconCIMCI2.id = 'cloneiconCIMCI1';
            NPBB1.append(cloneiconCIMCI2);
            NPBN1.append(cloneCIMSN2);
            countforCreateListNewPokeball = 1;
            if (NPBB3.hasChildNodes()) {
                let cloneiconCIMCI3 = document.getElementById('cloneiconCIMCI3');
                let cloneCIMSN3 = document.getElementById('cloneCIMSN3');
                cloneCIMSN3.id = 'cloneCIMSN2';
                cloneiconCIMCI3.id = 'cloneiconCIMCI2';
                NPBB2.append(cloneiconCIMCI3);
                NPBN2.append(cloneCIMSN3);
                countforCreateListNewPokeball = 2;
            }
        } else {
            countforCreateListNewPokeball = 0;
        }
    }
});

forCreateCIM.addEventListener('click', function() {
    let nameBall = document.getElementById('newPokeballName');
    let arr = new Array(5);
    for (let k = 0; k < placeesForNamePokeball.length; k++) {

        arr.push(placeesForNamePokeball[k].innerHTML);

    }
    let arrTrue = arr.some(el => el == nameBall.value)

    if (arrTrue == true) {
        alert('Имя покебола уже занято');
    } else {
        let readyBall = [];
        let els = document.querySelectorAll('#collInsideMenu2 > div:nth-child(2n)');
        els.forEach((el, i) => {
            readyBall[i] = el.textContent;
        });
        readyBall.push(nameBall.value);
        AddHandlerCreatedPokeball(readyBall);
        for (let i = 0; i < placeesForNewPokeball.length; i++) {
            let el = placeesForNewPokeball[i];
            if (!el.hasChildNodes()) {
                el.append(PokeBallCreate(readyBall));
                for (let i = 0; i < placeesForNamePokeball.length; i++) {
                    let elSpan = placeesForNamePokeball[i];
                    if (elSpan.innerHTML == '') {
                        elSpan.innerHTML = nameBall.value;
                        break;
                    }
                }
                garbageCollectorForCIM2All();
                garbageCollectorForContent();
                collCnt.style.display = 'flex';
                break;
            }
        }
    }


});