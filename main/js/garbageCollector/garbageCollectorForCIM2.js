const blocksCIM2 = document.querySelectorAll('#collInsideMenu2 > div');
let NPNI = document.getElementById('newPokeballName');

function garbageCollectorForCIM2All() {
    forCreateCIM.disabled = true;
    NPNI.value = null;
    blocksCIM2.forEach(el => {
        if (el.hasChildNodes()) {
            countforCreateListNewPokeball = 0;
            el.removeChild(el.firstChild);
        }
    });
}