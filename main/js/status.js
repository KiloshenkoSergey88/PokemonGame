avatarDiv.addEventListener('click', function() {
    modW.style.display = "block";
});

closeModW.addEventListener('click', function() {
    modW.style.display = "none";
});
modwindowAvatar.addEventListener('click', function(e) {
    document.querySelectorAll('.modWHero').forEach((el) => {
        el.style.border = "none";
        el.style.margin = '1px';

    });
    if (e.target.id == "modwindowAvatar") {
        console.log('промах');
    } else {
        e.target.style.border = "1px solid red";
        e.target.style.margin = "0";
    }
})
modWScss.addEventListener('click', function() {
    document.querySelectorAll('.modWHero').forEach((el) => {
        if (el.style.border == "1px solid red") {
            let set = el.src;
            avatarDiv.style.backgroundImage = `url('${set}')`;
            modW.style.display = "none";
            el.style.border = "none";
            el.style.margin = '1px';
        }

    });
});

const active = document.getElementById('activeMouseSpan');
const dontActive = 30;
let mouseActive = 0;
let timeMouse = setInterval(() => {
    mouseActive++;
    if (mouseActive >= dontActive) {
        active.style.color = "rgba(255, 50, 50, 0.918)";
        active.textContent = "Offline";
        mouseActive = 0;
        return;
    }
}, 1000);
document.onmousemove = activeUser;

function activeUser() {
    mouseActive = 0;
    active.style.color = "chartreuse";
    active.textContent = "Online";
}