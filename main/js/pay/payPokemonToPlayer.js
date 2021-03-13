const btnPayPokForPlayer = document.querySelector('#payBlockForm > button');
let valuePayPokForPlayer = document.querySelector('#payBlockForm > input');
btnPayPokForPlayer.addEventListener('click', function() {
    for (let i = 0; i < Sandbox.length; i++) {
        const el = Sandbox[i].name;

        if (el == valuePayPokForPlayer.value) {
            let herId = Sandbox[i + 1].id;
            let herClientId = Sandbox[i].id;
            let queryPayPokForPlayer = {
                name: `${namePlayerHref}`,
                id: `${herId}`
            };
            socket.emit('payPokemonForPlayer', queryPayPokForPlayer);
            let payPok = document.getElementById(`${herClientId}`);
            payPok.style.opacity = '0.95';

        }
    }
});