function AddBattlePokGP(dataValue, b) {

    let a = 0;
    for (let k = 0; k < dataValue[b][1].length; k++) {

        const el = dataValue[b][1][k];

        for (let i = 0; i < Sandbox.length; i++) {
            if (Sandbox[i].name == el) {

                myButtonPok[a].innerHTML = Sandbox[i].name;
                myBattlePok[a].src = Sandbox[i].body;
                a++;
            }
        }
    }
};