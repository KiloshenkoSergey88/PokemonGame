let
    placeesForNewPokeball = document.querySelectorAll('#stageCWS > div'),
    placeesForNamePokeball = document.querySelectorAll('#spanCWS > span');

function LoadSavePokeball() {

    socket.on('downloadPokeball', function(loadPokeball) {
        if (loadPokeball != null && loadPokeball.length > 0) {
            LoadHandlerCreatedPokeball(loadPokeball);
            for (let i = 0; i < loadPokeball.length; i++) {

                let el = placeesForNewPokeball[i];
                el.append(PokeBallCreate(loadPokeball[i]));
                let elSpan = placeesForNamePokeball[i];
                elSpan.innerHTML = loadPokeball[i][3];

            }
            SaveGlobal();
        }
    })
}

LoadSavePokeball();