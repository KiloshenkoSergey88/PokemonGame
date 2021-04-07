let
    startSearchPlay = document.getElementById('searchPlay'),
    cancelSearchPlay = document.getElementById('unSearchPlay'),
    preGameScreenNamePokeball = document.getElementById('playCntNamePB'),
    playCntTimerWait = document.getElementById('playCntTimerWait'),
    preGameScreenImgLayoutPokeball = document.querySelectorAll('#playCnt > div > div > img');

PlayMenuBtn.addEventListener('click', function () {

    for (let i = 0; i < activePokeball.length; i++) {
        const el = activePokeball[i];
        if (el.style.border == '1px solid black') {
            preGameScreenNamePokeball.innerHTML = el.namePB;
            for (let j = 0; j < el.pokemons.name.length; j++) {
                const elp = el.pokemons.name[j];
                let imgPreGameScreen = Sandbox.find(item => item.name == elp);
                preGameScreenImgLayoutPokeball[j].src = imgPreGameScreen.body;
                preGameScreenImgLayoutPokeball[j].alt = imgPreGameScreen.name;

            }
            break;
        }
    }
});

let
    secondsCTW = 0,
    minuteCTW = 0,
    countTimeWait = '00:00';

function WorkCountTimeWait(block) {
    let time = setInterval(() => {
        ++secondsCTW;
        if (secondsCTW >= 60) {
            secondsCTW = 0;
            ++minuteCTW;
        }
        if (minuteCTW < 10 && secondsCTW < 10 && secondsCTW < 60) {
            countTimeWait = `0${minuteCTW}:0${secondsCTW}`;
        }
        if (minuteCTW >= 10 && secondsCTW < 10 && secondsCTW < 60) {
            countTimeWait = `${minuteCTW}:0${secondsCTW}`;
        }
        if (minuteCTW < 10 && secondsCTW >= 10 && secondsCTW < 60) {
            countTimeWait = `0${minuteCTW}:${secondsCTW}`;
        }
        if (minuteCTW == 10) {
            clearInterval(time);
            secondsCTW = 0;
            minuteCTW = 0;
            countTimeWait = '';
            ResetCountTimeWait();
        }
        block.innerHTML = countTimeWait;
    }, 1000);
}

function ResetCountTimeWait() {
    cancelSearchPlay.style.display = 'none';
    startSearchPlay.style.display = 'block';
}

startSearchPlay.addEventListener('click', () => {

    let dataForDwnldGame = new Array();

    for (let i = 0; i < preGameScreenImgLayoutPokeball.length; i++) {
        dataForDwnldGame.push(preGameScreenImgLayoutPokeball[i].alt);
    }

    socket.emit('ImReadyPlay', [namePlayerHref, dataForDwnldGame]);

    startSearchPlay.style.display = 'none';
    cancelSearchPlay.style.display = 'block';
    playCntTimerWait.innerHTML = '00:00';
    WorkCountTimeWait(playCntTimerWait);
});

cancelSearchPlay.addEventListener('click', () => {
    socket.emit('ImNotReadyPlay');
    minuteCTW = 10;
});

socket.on('event', function (data) {
    console.log(data);
    minuteCTW = 10;
});
