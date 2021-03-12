function PokeballEditorI(data) {
    let fragment = new DocumentFragment();

    let icon = document.createElement('img');

    icon.id = 'cloneiconCIMCI1';
    icon.src = `${data}`;
    icon.alt = ' ';
    icon.className = 'cloneAddNewPokeball';
    fragment.append(icon);
    return fragment;
};

function PokeballEditorN(name) {
    let fragment = new DocumentFragment();

    let word = document.createElement('div');

    word.id = 'cloneCIMSN1';
    word.innerHTML = `${name}`;
    fragment.append(word);
    return fragment;
};