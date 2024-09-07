const cardArray = [
    { name: 'Seiya', img: 'images/Seiya.png' },
    { name: 'Hyoga', img: 'images/Hyoga.png' },
    { name: 'Ikki', img: 'images/Ikki.png' },
    { name: 'Saori', img: 'images/Saori.png' },
    { name: 'Shiryu', img: 'images/Shiryu.png' },
    { name: 'Shun', img: 'images/Shun.png' },
    { name: 'Seiya', img: 'images/Seiya.png' },
    { name: 'Hyoga', img: 'images/Hyoga.png' },
    { name: 'Ikki', img: 'images/Ikki.png' },
    { name: 'Saori', img: 'images/Saori.png' },
    { name: 'Shiryu', img: 'images/Shiryu.png' },
    { name: 'Shun', img: 'images/Shun.png' }
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.getElementById('grid');
let score = document.getElementById('score');
let clicks = document.getElementById('clicks');
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];
let clicksEnabled = true; // Para controlar clics durante comparación

function createBoard() {
    for (let i = 0; i < 12; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'images/card.jpeg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

function flipCard() {
    if (!clicksEnabled) return; // Bloquear clics si están deshabilitados

    clicks.innerHTML = Number(clicks.innerHTML) + 1;
    const cardId = this.dataset.id;

    if (cardsChosenIds.includes(cardId)) return; // Evitar seleccionar la misma carta

    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);

    if (cardsChosen.length === 2) {
        clicksEnabled = false; // Deshabilitar clics mientras se comparan
        setTimeout(checkMatch, 600);
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cards[optionOneId]);
        cardsWon.push(cards[optionTwoId]);
        score.innerHTML = cardsWon.length / 2;
    } else {
        cards[optionOneId].setAttribute('src', 'images/card.jpeg');
        cards[optionTwoId].setAttribute('src', 'images/card.jpeg');
    }

    if (score.innerHTML == cardArray.length / 2) {
        Swal.fire({
            title: "¡Ganastes!",
            text: "Y te tomó " + clicks.innerHTML + " clicks.",
            confirmButtonText: "Jugar de nuevo",
            background: "#e4dbc7",
        }).then(() => {
            location.reload();
        });
    }

    cardsChosen = [];
    cardsChosenIds = [];
    clicksEnabled = true; // Habilitar clics de nuevo
}

createBoard();
