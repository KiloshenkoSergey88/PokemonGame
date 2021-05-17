const blockPlayerWithBtnInGame = document.getElementById('addPokBtn');

blockPlayerWithBtnInGame.addEventListener('click', (e) => {
    if (e.target.localName == "button") {
        let oppName = opponentName.innerHTML;
        let btnPressed = e.target.innerHTML;
        let sessionRoom = sessionStorage.getItem('sessionRoom');
        ClientBtnControllerGP(btnPressed, sessionRoom, oppName);
    }
});

function ClientBtnControllerGP(btnPressed, sessionRoom, oppName) {

    let dataStep = [sessionRoom, btnPressed, namePlayerHref, oppName]
    socket.emit('dataStep', dataStep);
}

socket.on('channel1', (dataStep) => {
    ShowHideBtnChangePok(dataStep[3]);
    coumtStepForGameGP = 50;
    clearInterval(timerStepForGameGP);
    TimerStepForGameGP(dataStep[3]);
    console.log(dataStep);
});
