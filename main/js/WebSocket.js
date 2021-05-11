const
    namePlayerHref = window.location.href.split('/')[5],
    userLogin = document.getElementById('userLogin');

userLogin.innerText = namePlayerHref;

const socket = io('', { query: `name=${namePlayerHref}` });