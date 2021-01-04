const socket = io();
let logo = document.getElementById('logo');
let sLogo = document.getElementById('sLogo');
const bLogo = document.getElementById('buttonLogo');
bLogo.addEventListener('click', () => {
    logo.style.display = "none";
    sLogo.style.display = "block";
    main.style.backgroundImage = 'url(../img/HeroesP/mainPlay.jpg)';
    userLogin.style.color = "rgba(243, 177, 77, 0.822)";
});
homeH.addEventListener('click', () => {
    main.style.backgroundImage = 'url(../img/HeroesP/mainMain.jpg)';
    logo.style.display = "block";
    sLogo.style.display = "none";
    userLogin.style.color = "rgba(243, 177, 77, 0.822)";
});
pokeballH.addEventListener('click', () => {
    main.style.backgroundImage = 'url(../img/HeroesP/mainPokeball.jpg)';
    userLogin.style.color = "whitesmoke";
    logo.style.display = "block";
    sLogo.style.display = "none";
});
persStatsH.addEventListener('click', () => {
    main.style.backgroundImage = 'url(../img/HeroesP/mainStats.jpg)';
    userLogin.style.color = "black";
    logo.style.display = "block";
    sLogo.style.display = "none";
});