const CIW = document.getElementById('collInsideWorkspace');
const CIMSI = document.getElementById('collInsideMenuStatImg');
socket.on('message', function(char) {
    for (let i = 0; i < char.length; i++) {
        let data = char[i].body;
        let nameChar = char[i].name;

        function Card() {
            let fragment = new DocumentFragment();

            let card = document.createElement('img');

            card.className = 'cardPok';
            card.id = `${i}`;
            card.src = `${data}`;
            card.title = `${nameChar}`;
            fragment.append(card);
            return fragment;
        };
        CIW.append(Card());
    }

    console.log(char);
});