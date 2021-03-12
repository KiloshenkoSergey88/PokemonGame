const
    BCWS = document.getElementById('buttonCWS'),
    SCWS = document.getElementById('stageCWS'),
    PlayMenuBtn = document.getElementById('playBtn'),
    activePokeball = document.getElementsByClassName('pokBArray');

SCWS.addEventListener('click', function(e) {
    if (e.target.tagName == 'IMG' && e.target.style.border == '') {
        BCWS.style.display = 'flex';
        PlayMenuBtn.disabled = false;
        for (let i = 0; i < activePokeball.length; i++) {
            let el = activePokeball[i];
            el.style.border = '';
        }
        e.target.style.border = '1px solid black';


    }
});