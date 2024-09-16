const cardArray = [
    { name: 'wheel of fortune', img: 'images/wheel of fortune.png' },
    { name: 'the fool', img: 'images/the fool.png' },
    { name: 'death', img: 'images/death.png' },
    { name: 'the hanged man', img: 'images/the hanged man.png' },
    { name: 'the lovers', img: 'images/the lovers.png' },
    { name: 'the magician', img: 'images/the magician.png' },
    { name: 'wheel of fortune', img: 'images/wheel of fortune.png' },
    { name: 'the fool', img: 'images/the fool.png' },
    { name: 'death', img: 'images/death.png' },
    { name: 'the hanged man', img: 'images/the hanged man.png' },
    { name: 'the lovers', img: 'images/the lovers.png' },
    { name: 'the magician', img: 'images/the magician.png'},
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
    "With each card revealed, the echo of destiny grows stronger.",
    "Unlock the arcane echoes that guide you through the unknown.",
    "Every turn of the card echoes with timeless wisdom.",
    "The arcane calls, will you heed its ancient echoes?",
    "Echoes of the universe lie hidden within each card.",
    "Trust in the echoes of the past to reveal the future.",
    "The cards reflect your soul, echoing truths untold.",
    "In the silence of the arcane, the echoes of fate speak clearly.",
    "Each card carries a whisper from the ancient realms.",
    "Through the cards, the echoes of destiny unfold step by step.",
    "The arcane resonates with every match, revealing hidden paths.",
    "Echoes of long-lost secrets lie within each arcane symbol.",
    "With every move, the echoes of fate grow stronger.",
    "Reveal the arcane echoes that link the past, present, and future.",
    "The tarot holds the echoes of journeys yet to be discovered.",
    "In every card lies an echo of your soul’s hidden path.",
    "Arcane echoes stir beneath the surface, waiting to be unveiled.",
    "Step into the echoes of the unknown, where answers await.",
    "Every card flipped echoes with the mysteries of time.",
    "Dive into the echoes of the arcane, where the answers lie.",
    "The arcane whispers in echoes only the heart can hear.",
    "The echoes of ancient wisdom lie hidden in the cards.",
    "Each shuffle stirs the arcane echoes waiting to be revealed.",
    "In the quiet between the cards, echoes of truth emerge.",
    "The cards align, and the echoes of fate become clear.",
    "Every card holds a secret echo from the mysteries of the universe.",
    "The arcane echoes grow louder with each step of your journey.",
    "The answers you seek lie within the echoes of the tarot.",
    "Flip the cards and let the arcane echoes guide your way.",
    "Echoes of the arcane lead you through the path of discovery.",
    "The cards resonate with echoes of the past, present, and future.",
    "Feel the echoes of destiny ripple through every turn of the card.",
    "The tarot speaks in echoes, guiding those who listen closely.",
    "In the echoes of the arcane, new paths are revealed.",
    "The mysteries of the universe echo through each tarot card.",
    "With each pair you uncover, the arcane echoes grow stronger.",
    "Let the arcane echoes guide your hand as you reveal each card.",
    "Each flip reveals an echo of the cosmic dance of fate.",
    "The tarot whispers, and its echoes unfold your destiny.",
    "As the cards turn, the echoes of the arcane unveil their secrets.",
    "In the echoes of each card, the path to wisdom is illuminated."
];


let grid=document.getElementById("gridsound")
let numeroRandom=Math.floor(Math.random() * 60) ;
let clickSound=document.getElementById('click-sound');
let background= document.getElementById("background")
cardArray.sort(() => 0.5 - Math.random());
let frase= document.getElementById('frasecita')
const gridDisplay = document.getElementById('grid');
let score = document.getElementById('score');
let clicks = document.getElementById('clicks');
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];
let clicksEnabled = true; // Para controlar clics durante comparación
let music= true;
let sound = document.getElementById("sound")
let final=document.getElementById("final")

frase.innerHTML=frases[numeroRandom]


sound.addEventListener("click", soundOnOff)
  
 function soundOnOff(){

  
    if(sound.innerHTML=="Sound: Off"){
    
        sound.innerHTML="Sound: On";
        background.play()
      
    }
    else{
        sound.innerHTML="Sound: Off"
        background.pause()
    }
 }

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

    playmusic()


    // Reinicia el audio cada vez que se hace clic
    clickSound.currentTime=0;
    clickSound.play()
  
     
   
 
    

  
     
    



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
        final.play()
        if(Number(clicks.innerHTML)>=33  ) {
            Swal.fire({
                title: "The Lost Soul ",
                html: "You’ve crossed into the #10 tier of enlightenment.<br><br>" + clicks.innerHTML + " clicks... You are trapped in the labyrinth of existence, searching for a spark of light.<br><h1>🌑</h1>",
                confirmButtonText: "Reload",
                background: "#e4dbc7",
            }).then(() => {
                clearDisplay();
            });
        }
    
        if(Number(clicks.innerHTML)==32 || Number(clicks.innerHTML)==31) {
            Swal.fire({
                title: "Seeker of Shadows ",
                html:  "You’ve crossed into the #9 tier of enlightenment.<br><br>" + clicks.innerHTML +  " clicks. Still in darkness, you begin to perceive the shadows of hidden truths.<br><h1>🌒</h1>",
                confirmButtonText: "Reload",
                background: "#e4dbc7",
            }).then(() => {
                clearDisplay();
            });
        }
    
        if(Number(clicks.innerHTML)==29 || Number(clicks.innerHTML)==30) {
            Swal.fire({
                title: "Wandering Spirit ",
                html:  "You’ve crossed into the #8 tier of enlightenment.<br><br>" + clicks.innerHTML + " clicks. Your spirit wanders, yet you feel the distant echo of illumination.<br><h1>🌀</h1>",
                confirmButtonText: "Reload",
                background: "#e4dbc7",
            }).then(() => {
                clearDisplay();
            });
        }
    
        if(Number(clicks.innerHTML)==27 || Number(clicks.innerHTML)==28) {
            Swal.fire({
                title: "Novice of the Arcane ",
                html: "You’ve crossed into the #7 tier of enlightenment.<br><br>" + clicks.innerHTML + " clicks... You've taken your first steps, but much remains to be uncovered.<br><h1>🔮</h1>",
                confirmButtonText: "Reload",
                background: "#e4dbc7",
            }).then(() => {
                clearDisplay();
            });
        }
    
        if(Number(clicks.innerHTML)==26 || Number(clicks.innerHTML)==25) {
            Swal.fire({
                title: "Initiate of the Veil ",
                html:  "You’ve crossed into the #6 tier of enlightenment.<br><br>" + clicks.innerHTML + " clicks, you have entered the threshold into esoteric knowledge.<br><h1>🌕</h1>",
                confirmButtonText: "Reload",
                background: "#e4dbc7",
            }).then(() => {
                clearDisplay();
            });
        }
    
        if(Number(clicks.innerHTML)==23 || Number(clicks.innerHTML)==24) {
            Swal.fire({
                title: "Adept of the Stars ",
                html:  "You’ve crossed into the #5 tier of enlightenment.<br><br>" + clicks.innerHTML + " clicks... You have begun to navigate the stars, mastering cosmic secrets.<br><h1>✨</h1>",
                confirmButtonText: "Reload",
                background: "#e4dbc7",
            }).then(() => {
                clearDisplay();
            });
        }
    
        if(Number(clicks.innerHTML)==22 || Number(clicks.innerHTML)==21) {
            Swal.fire({
                title: "Guide of the Cosmos ",
                html:  "You’ve crossed into the #4 tier of enlightenment.<br><br>" +clicks.innerHTML + " clicks... The cosmos starts to reveal its meaning under your gaze.<br><h1>🌌</h1>",
                confirmButtonText: "Reload",
                background: "#e4dbc7",
            }).then(() => {
                clearDisplay();
            });
        }
    
        if(Number(clicks.innerHTML)<=20 && Number(clicks.innerHTML)>=18) {
            Swal.fire({
                title: "Guardian of Mysteries ",
                html:  "You’ve crossed into the #3 tier of enlightenment.<br><br> " + "With "+clicks.innerHTML + " clicks, your connection to the universe strengthens.<br><h1>🔱</h1>",
                confirmButtonText: "Reload",
                background: "#e4dbc7",
            }).then(() => {
                clearDisplay();
            });
        }
    
        if(Number(clicks.innerHTML)<=17 && Number(clicks.innerHTML)>=13) {
            Swal.fire({
                title: "Master of Echoes ",
                html: "You’ve crossed into the #2 tier of enlightenment.<br><br>" +"Just " + clicks.innerHTML + " clicks, the echoes of time and fate respond to your call.<br><h1>🧿</h1>",
                confirmButtonText: "Reload",
                background: "#e4dbc7",
            }).then(() => {
                clearDisplay();
            });
        }
    
        if(Number(clicks.innerHTML)==12) {
            Swal.fire({
                title: "Ascended One ",
                html: "May the light be with you.<br><br>" +"You have achieved total enlightenment with " + clicks.innerHTML + " clicks! Master of the cosmos! <br><h1>🌟</h1>",
                confirmButtonText: "Reload",
                background: "#e4dbc7",
            }).then(() => {
               
                clearDisplay();
            });
        }
    }

    cardsChosen = [];
    cardsChosenIds = [];
}

function clearDisplay(){
    clicks.innerHTML=0;
    score.innerHTML=0
    cardArray.sort(() => 0.5 - Math.random());
    gridDisplay.innerHTML=""
    numeroRandom=Math.floor(Math.random() * 60) ;   
 frase.innerHTML=frases[numeroRandom]
  
   cardsWon = [];
    createBoard();



}


function playmusic(){


    if (music==true){
        sound.innerHTML="Sound: On";
        background.play()
        music=false
    }

    else{
       return
    }
}

createBoard();