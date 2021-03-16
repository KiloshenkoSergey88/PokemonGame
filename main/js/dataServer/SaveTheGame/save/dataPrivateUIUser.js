let dataPkgThePok = new Array();

function AddHandlerCreatedPokeball(addSaveThePok) { //срабатывает при нажатии кнопки "готово", при создании покебола
    dataPkgThePok.push([...addSaveThePok]);
    SaveGlobal();
}

function DelHandlerCreatedPokeball(delSaveThePok) { //срабатывает в сборщике мусора "garbageCollectorForWorkspace" при удалении элемента
    dataPkgThePok.splice(delSaveThePok, 1);
    SaveGlobal();
}

function LoadHandlerCreatedPokeball(ldSaveThePok) {
    dataPkgThePok.push(...ldSaveThePok);
}



function SaveGlobal() {

    let savePokeballForUser = {
        name: namePlayerHref,
        data: dataPkgThePok
    };

    socket.emit('dataPkgPokeball', savePokeballForUser);
};