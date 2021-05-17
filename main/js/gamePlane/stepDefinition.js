let coumtStepForGameGP = 50;

let timerStepForGameGP;
function TimerStepForGameGP(serverName) {

    timerStepForGameGP = setInterval(() => {
        if (coumtStepForGameGP > 0) {
            myProgressTime.innerHTML = coumtStepForGameGP;
            uProgressTime.innerHTML = coumtStepForGameGP;
            coumtStepForGameGP--;
            if (myName.innerText == serverName) {
                myProgressTime.style.display = "none";
                uProgressImg.style.display = 'none';
                uProgressTime.style.display = "block";
                myProgressImg.style.display = 'block';

            } else if (opponentName.innerText == serverName) {
                uProgressTime.style.display = "none";
                myProgressImg.style.display = 'none';
                myProgressTime.style.display = "block";
                uProgressImg.style.display = 'block';
            }
        } else {
            clearInterval(timerStepForGameGP);
        }
    }, 1000);
};

function ShowHideBtnChangePok(serverName) {
    if (myName.innerText == serverName) {
        for (let i = 0; i < myButtonPok.length; i++) {
            myButtonPok[i].style.display = 'inline-block';
        }
    } else if (opponentName.innerText == serverName) {
        for (let i = 0; i < myButtonPok.length; i++) {
            myButtonPok[i].style.display = 'none';
        }
    }
}