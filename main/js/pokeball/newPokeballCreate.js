let PKBIDcount = 0;

function PokeBallCreate(fullPokeBall) {
    let fragment = new DocumentFragment();

    let pokeball = document.createElement('img');
    let PokeBallIdCount = `pokeballId${PKBIDcount}`;

    pokeball.className = 'pokBArray';
    pokeball.src = './img/logo/PokeBall.png';
    pokeball.title = `${fullPokeBall[0]}\n${fullPokeBall[1]}\n${fullPokeBall[2]}`;
    pokeball.id = PokeBallIdCount;
    pokeball.pokemons = {
        name: [
            fullPokeBall[0],
            fullPokeBall[1],
            fullPokeBall[2],
        ]
    };
    pokeball.namePB = fullPokeBall[3];
    fragment.append(pokeball);
    PKBIDcount++;
    return fragment;
}