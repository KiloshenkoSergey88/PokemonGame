let namePlayerHref = window.location.href.split('/')[5];
let userLogin = document.getElementById('userLogin');
userLogin.innerText = namePlayerHref;

const socket = io('', { query: `name=${namePlayerHref}` });