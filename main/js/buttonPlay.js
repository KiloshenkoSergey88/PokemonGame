let logo = document.getElementById('logo');
let sLogo = document.getElementById('sLogo');
const bLogo = document.getElementById('buttonLogo');
bLogo.addEventListener('click', function() {
    logo.style.display = "none";
    sLogo.style.display = "block";
});