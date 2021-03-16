function PokeBallCreate(fullPokeBall) {
    let fragment = new DocumentFragment();

    let pokeball = document.createElement('img');

    pokeball.className = 'pokBArray';
    pokeball.src = './img/logo/PokeBall.png';
    pokeball.title = `${fullPokeBall[0]}\n${fullPokeBall[1]}\n${fullPokeBall[2]}`;
    pokeball.pokemons = {
        name: [
            fullPokeBall[0],
            fullPokeBall[1],
            fullPokeBall[2],
        ]
    };
    pokeball.namePB = fullPokeBall[3];
    fragment.append(pokeball);
    return fragment;
}