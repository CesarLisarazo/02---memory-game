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
let frases = [
    "Each card holds an echo of destiny, will you dare to listen?",
    "Arcane echoes resonate with every draw, revealing the hidden.",
    "Explore the shadows and the light, where mysteries await.",
    "The cards whisper ancient truths, listen closely.",
    "Your intuition is the key to unveiling the echoes of the past.",
    "Within the cards lie answers only the soul can see.",
    "With every pair found, a fragment of the arcane is revealed.",
    "Feel the energy of the arcane resonate with every move.",
    "In this memory game, the echoes of fate intertwine.",
    "The tarot is a mirror, and each card, a reflection of the soul.",
    "Reconnect with the arcane, where past and future converge.",
    "The cards call you to uncover the footprints of destiny.",
    "Each card is a window into arcane mysteries.",
    "Reveal the echoes that connect the present with the eternal.",
    "With each step, an arcane echo will guide you to the truth.",
    "In every card, an arcane echo resonates through time.",
    "Slide the cards, hear the echo of what was and what will be.",
    "The echoes of fate vibrate within the mysteries of the tarot.",
    "Through arcane echoes, wisdom unfolds in silence.",
    "With each card revealed, the echo of destiny grows stronger."
];

let numeroRandom=Math.floor(Math.random() * 20) ;

cardArray.sort(() => 0.5 - Math.random());
let frase= document.getElementById('frasecita')
const gridDisplay = document.getElementById('grid');
let score = document.getElementById('score');
let clicks = document.getElementById('clicks');
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];
let clicksEnabled = true; // Para controlar clics durante comparación
frase.innerHTML=frases[numeroRandom]
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
    console-console.log(cardArray);
    
    if (!clicksEnabled) return; // Bloquear clics si están deshabilitados

    clicks.innerHTML = Number(clicks.innerHTML) + 1;
    const cardId = this.dataset.id;

    if (cardsChosenIds.includes(cardId)) return; // Evitar seleccionar la misma carta

    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);

    if (cardsChosen.length === 2) {
        clicksEnabled = false; // Deshabilitar clics mientras se comparan
        setTimeout(checkMatch, 750);
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    clicksEnabled = true; // Habilitar clics de nuevo

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

        if(Number(clicks.innerHTML)>=36  ){

            Swal.fire({
                title: "Are you still there?",
                html:  clicks.innerHTML + " clicks? Well, I guess the important thing is that you made it...<br>🐢",
                confirmButtonText: "Reload",
                background: "#e4dbc7",
               
            }).then(() => {
                location.reload();
            });
        }


        if(Number(clicks.innerHTML)<36 &&Number(clicks.innerHTML)>=30 ){

            Swal.fire({
                title: "You survived!",
                html:  clicks.innerHTML +  " clicks... What if I told you that you could do it right AND fast?<br>⌛",
                confirmButtonText: "Reload",
                background: "#e4dbc7",
               
            }).then(() => {
                location.reload();
            });


        }
        if(Number(clicks.innerHTML)<30 &&Number(clicks.innerHTML)>=24 ){

            Swal.fire({
                title: "You made it... eventually",
                html:  clicks.innerHTML + " clicks? Phew... that took a while. Did you take a coffee break in between?<br>☕️",
                confirmButtonText: "Reload",
                background: "#e4dbc7",
               
            }).then(() => {
                location.reload();
            });


        }





        if(Number(clicks.innerHTML)<24 &&Number(clicks.innerHTML)>=18 ){

            Swal.fire({
                title: "Well done!",
                html:  clicks.innerHTML + " clicks, now you can give those fingers a break.<br>🖐️",
                confirmButtonText: "Reload",
                background: "#e4dbc7",
               
            }).then(() => {
                location.reload();
            });


        }
       
       
       
        if(Number(clicks.innerHTML)<17&& Number(clicks.innerHTML)>12){

            Swal.fire({
                title: "You're a genius!",
                html: "Just " + clicks.innerHTML + " clicks? Are you a robot disguised as a human? That was ridiculously fast!<br>🧠",
                confirmButtonText: "Reload",
                background: "#e4dbc7",
               
            }).then(() => {
                location.reload();
            });
        }

        if(Number(clicks.innerHTML)==12){

            Swal.fire({
                title: "Flawless victory",
                html: "You must have psychic powers! Go get a lottery ticket right now! <br>🍀",
                confirmButtonText: "Reload",
                background: "#e4dbc7",
               
            }).then(() => {
                location.reload();
            });
        }

    }

    cardsChosen = [];
    cardsChosenIds = [];
}

createBoard();