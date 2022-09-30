trioMonstro = {
    trio: [
        {
            "id": 1,
            "nome": "Luffy",
            "descricao": "Luffy chapéu de palha",
            "fotoURL": "img/luffy.jpg",
            "linkExterno": "https://onepiece.fandom.com/pt/wiki/Monkey_D._Luffy"
        },

        {
            "id": 2,
            "nome": "Zoro",
            "descricao": "Rei do inferno",
            "fotoURL": "img/zoro.jpg",
            "linkExterno": "https://onepiece.fandom.com/pt/wiki/Roronoa_Zoro"
        },

        {
            "id": 3,
            "nome": "Sanji",
            "descricao": "Perna negra",
            "fotoURL": "img/sanji.png",
            "linkExterno": "https://onepiece.fandom.com/pt/wiki/Sanji"
        },
    ]
}

var cardTrio = document.getElementById('card');
var btn = document.getElementById('btn');

function getTrio() {
    var inputTrio = document.getElementById('myInput').value.toLowerCase();

    for (var i = 0; trioMonstro.trio.length > i; i++) {

        var monstro = trioMonstro.trio[i];

        if (inputTrio == monstro.nome.toLowerCase()) {

            cardTrio.querySelector('h1').innerHTML = monstro.nome;
            cardTrio.querySelector('p').innerHTML = monstro.descricao;
            cardTrio.querySelector('img').setAttribute('src', monstro.fotoURL);
            cardTrio.querySelector('.external-link').setAttribute('href', monstro.linkExterno);
            return;
        } else {
            console.log('Mugiwara inexistente')
        }
    }
}

btn.addEventListener('click', getTrio);