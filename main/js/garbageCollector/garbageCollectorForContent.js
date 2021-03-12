let allBlocksMain = document.querySelectorAll('.blocksCnt');

function garbageCollectorForContent() {
    allBlocksMain.forEach(el => {
        el.style.display = 'none';
    });
}