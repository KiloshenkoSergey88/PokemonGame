itemSpanCWS = document.querySelectorAll('#spanCWS > span');

function garbageCollectorForWorkspace() {
    for (let i = 0; i < activePokeball.length; i++) {
        if (activePokeball[i].style.border == '1px solid black') {
            DelHandlerCreatedPokeball(i);
            let el = activePokeball[i];
            el.parentNode.removeChild(el);
            for (let i = 0; i < itemSpanCWS.length; i++) {
                let els = itemSpanCWS[i];
                if (el.namePB == els.innerHTML) {
                    els.innerHTML = '';
                }
            }
        }
    }
}