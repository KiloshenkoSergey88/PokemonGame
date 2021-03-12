function ReRecordPokeball() {
    for (let i = 0; i < activePokeball.length; i++) {
        if (activePokeball[i].style.border == '1px solid black') {
            let el = activePokeball[i];
            let arr = el.pokemons.name.slice();
            for (let i = 0; i < arr.length; i++) {
                let elName = arr[i];
                for (let j = 0; j < Sandbox.length; j++) {
                    let elPok = Sandbox[j];
                    if (elPok.name == elName) {
                        let data = elPok.body;
                        let name = elPok.name;
                        let cloneEditorI = PokeballEditorI(data);
                        let cloneEditorN = PokeballEditorN(name);
                        switch (i) {
                            case 0:
                                NPBB1.append(cloneEditorI);
                                NPBN1.append(cloneEditorN);
                                break;
                            case 1:
                                cloneEditorI.firstChild.id = 'cloneiconCIMCI2';
                                cloneEditorN.firstChild.id = 'cloneCIMSN2';
                                NPBB2.append(cloneEditorI);
                                NPBN2.append(cloneEditorN);
                                break;
                            case 2:
                                cloneEditorI.firstChild.id = 'cloneiconCIMCI3';
                                cloneEditorN.firstChild.id = 'cloneCIMSN3';
                                NPBB3.append(cloneEditorI);
                                NPBN3.append(cloneEditorN);
                                forCreateCIM.disabled = false;
                                countforCreateListNewPokeball = 3;
                                break;
                        }
                    }

                }
            }
        }
    }
};