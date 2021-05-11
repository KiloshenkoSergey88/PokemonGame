const
    mainPage = document.getElementById('wrapper'),
    gamePage = document.getElementById('gamePlane'),
    nameAvaMyGP = document.querySelector('#avaTopMSL > span'),
    nameAvaUGP = document.querySelector('#avaTopUSR > span'),
    myBattlePok = document.querySelectorAll('#myBarPok > img'),
    myButtonPok = document.querySelectorAll('#addPokBtn > button'),
    myProgressImg = document.querySelector('#progressBotMSL > img'),
    uProgressImg = document.querySelector('#progressBotUSR > img'),
    myProgressTime = document.querySelector('#progressBotMSL > span'),
    uProgressTime = document.querySelector('#progressBotUSR > span'),
    opponentName = document.getElementById('oppNameGP'),
    myName = document.getElementById('myNameGP');

socket.on('dataConnectGame', function (dataValue) {
    mainPage.style.display = 'none';
    gamePage.style.display = 'flex';
    sessionStorage.setItem('sessionRoom', `${dataValue[0]}`);
    console.log(dataValue);
    minuteCTW = 10;
    let
        c = 1,
        d = 2;

    if (namePlayerHref == dataValue[c][0]) {
        nameAvaMyGP.innerHTML = dataValue[c][0];
        nameAvaUGP.innerHTML = dataValue[d][0];
        AddBattlePokGP(dataValue, c);
        TimerStepForGameGP(dataValue[3]);
    } else {
        nameAvaMyGP.innerHTML = dataValue[d][0];
        nameAvaUGP.innerHTML = dataValue[c][0];
        AddBattlePokGP(dataValue, d);
        TimerStepForGameGP(dataValue[3]);
    }
});

