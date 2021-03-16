const blocksForPokeballs = document.querySelectorAll('#stageCWS > div');

BCWS.addEventListener('click', (e) => {
    if (e.target.innerHTML == "Изменить" || e.target.innerHTML == "Удалить") {
        if (e.target.innerHTML == "Изменить") {
            ReRecordPokeball();
            collCnt.style.display = 'none';
            collCntInside.style.display = 'flex';
            forCreateCIM.style.display = 'flex';
        }
        garbageCollectorForWorkspace();
        blocksForPokeballs.forEach(el => {
            if (el.hasChildNodes() && el.previousElementSibling != null) {
                if (!el.previousElementSibling.hasChildNodes()) {
                    el.previousElementSibling.append(el.firstChild);
                    itemSpanCWS.forEach(els => {
                        if (els.innerHTML != '' && els.previousElementSibling != null) {
                            if (els.previousElementSibling.innerHTML == '') {
                                els.previousElementSibling.innerHTML = els.innerHTML;
                                els.innerHTML = '';
                            }
                        }
                    });
                }
            }
        });

    }
});