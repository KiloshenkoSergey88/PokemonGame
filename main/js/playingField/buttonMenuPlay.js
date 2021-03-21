let startSearchPlay = document.getElementById('searchPlay');

PlayMenuBtn.addEventListener('click', function() {

})

startSearchPlay.addEventListener('click', () => {

    socket.emit('ImReadyPlay', namePlayerHref);
});