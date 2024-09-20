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
    "Cada carta guarda un eco del destino, ¿te atreves a escuchar?",
    "Los ecos arcanos resuenan con cada tirada, revelando lo oculto.",
    "Explora las sombras y la luz, donde te esperan misterios.",
    "Las cartas susurran verdades antiguas, escucha atentamente.",
    "Tu intuición es la clave para desvelar los ecos del pasado.",
    "Dentro de las cartas yacen respuestas que solo el alma puede ver.",
    "Con cada pareja encontrada, se revela un fragmento de lo arcano.",
    "Siente la energía del arcano resonar con cada movimiento.",
    "En este juego de memoria, los ecos del destino se entrelazan.",
    "El tarot es un espejo, y cada carta, un reflejo del alma.",
    "Reconéctate con lo arcano, donde pasado y futuro convergen.",
    "Las cartas te llaman a descubrir las huellas del destino.",
    "Cada carta es una ventana a los misterios arcanos.",
    "Revela los ecos que conectan el presente con lo eterno.",
    "Con cada paso, un eco arcano te guiará hacia la verdad.",
    "En cada carta, un eco arcano resuena a través del tiempo.",
    "Desliza las cartas, escucha el eco de lo que fue y lo que será.",
    "Los ecos del destino vibran dentro de los misterios del tarot.",
    "A través de los ecos arcanos, la sabiduría se despliega en silencio.",
    "Con cada carta revelada, el eco del destino se fortalece.",
    "Desbloquea los ecos arcanos que te guían a través de lo desconocido.",
    "Cada giro de la carta resuena con sabiduría atemporal.",
    "El arcano llama, ¿escucharás sus antiguos ecos?",
    "Ecos del universo yacen ocultos en cada carta.",
    "Confía en los ecos del pasado para revelar el futuro.",
    "Las cartas reflejan tu alma, resonando verdades no contadas.",
    "En el silencio de lo arcano, los ecos del destino hablan claramente.",
    "Cada carta lleva un susurro de los antiguos reinos.",
    "A través de las cartas, los ecos del destino se despliegan paso a paso.",
    "Lo arcano resuena con cada coincidencia, revelando caminos ocultos.",
    "Ecos de secretos perdidos hace mucho tiempo yacen en cada símbolo arcano.",
    "Con cada movimiento, los ecos del destino se hacen más fuertes.",
    "Revela los ecos arcanos que enlazan el pasado, presente y futuro.",
    "El tarot guarda los ecos de viajes aún por descubrir.",
    "En cada carta hay un eco del camino oculto de tu alma.",
    "Ecos arcanos se agitan bajo la superficie, esperando ser revelados.",
    "Adéntrate en los ecos de lo desconocido, donde te esperan respuestas.",
    "Cada carta volteada resuena con los misterios del tiempo.",
    "Sumérgete en los ecos de lo arcano, donde yacen las respuestas.",
    "Lo arcano susurra en ecos que solo el corazón puede oír.",
    "Los ecos de la sabiduría antigua yacen ocultos en las cartas.",
    "Cada barajada agita los ecos arcanos esperando ser revelados.",
    "En el silencio entre las cartas, emergen los ecos de la verdad.",
    "Las cartas se alinean y los ecos del destino se vuelven claros.",
    "Cada carta guarda un eco secreto de los misterios del universo.",
    "Los ecos arcanos se hacen más fuertes con cada paso de tu viaje.",
    "Las respuestas que buscas yacen dentro de los ecos del tarot.",
    "Voltea las cartas y deja que los ecos arcanos te guíen.",
    "Ecos de lo arcano te conducen por el camino del descubrimiento.",
    "Las cartas resuenan con ecos del pasado, presente y futuro.",
    "Siente los ecos del destino vibrar con cada giro de la carta.",
    "El tarot habla en ecos, guiando a aquellos que escuchan atentamente.",
    "En los ecos de lo arcano, se revelan nuevos caminos.",
    "Los misterios del universo resuenan a través de cada carta del tarot.",
    "Con cada pareja que descubres, los ecos arcanos se hacen más fuertes.",
    "Deja que los ecos arcanos guíen tu mano mientras revelas cada carta.",
    "Cada giro revela un eco de la danza cósmica del destino.",
    "El tarot susurra, y sus ecos despliegan tu destino.",
    "A medida que las cartas giran, los ecos de lo arcano revelan sus secretos.",
    "En los ecos de cada carta, el camino hacia la sabiduría se ilumina."
];

let gridSound=document.getElementById("gridsound")
let match=document.getElementById("match")
let numeroRandom=Math.floor(Math.random() * 60) ;
let clickSound=document.getElementById('click-sound');
let background= document.getElementById("background")
cardArray.sort(() => 0.5 - Math.random());
let numbers= document.getElementById("numbers")

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
let toogle = document.getElementById("toogleIdiom")

numbers.style.display="none";
background.volume = 0;

gridSound.volume = 0;
clickSound.volume = 0;
final.volume = 0;
match.volume=0;
Swal.fire({
  
    html:  " <br><br><br><br><span class='homeText'>Sound Off/On<br></span><button id='homeSound'>Sound: Off</button><br><br><span class='homeText'>English/Español</span><br><button id='homeIdiom'>English</button><br><br><br>",
    confirmButtonText: "Start",
   // Fondo del modal transparente
    width:"40vh",
 
  imageWidth: 400,
  imageHeight: 55,
  backdrop: `rgba(0, 0, 0, 1)`,
    customClass: {
        popup: 'custom-swal',  // Clase personalizada para el modal
        confirmButton: 'custom-confirm-button'  // Clase personalizada para el botón de confirmación
    },
    allowOutsideClick: false
}).then(() => {
    createBoard();
});
frase.style.display="none"

    frase.innerHTML=frases[numeroRandom]




let homeSound =document.getElementById("homeSound")
homeSound.addEventListener("click",homeChange)
toogle.addEventListener("click",toogleChange)


function toogleChange(){
    if(toogle.innerHTML=="English"){
        toogle.innerHTML="Español"
    }
    else{
        toogle.innerHTML="English"
    }
}

let toogleHome=document.getElementById("homeIdiom")

toogleHome.addEventListener("click",toogleHomeChange)
function toogleHomeChange(){
    match.currentTime=0;
    match.play()
    if(toogleHome.innerHTML=="English"){
        toogleHome.innerHTML="Español"
    }
    else{
        toogleHome.innerHTML="English"
    }
}





function homeChange(){
    if(homeSound.innerHTML=="Sound: Off"){
        homeSound.innerHTML="Sound: On";
        soundOnOff()
    }
    else{
        homeSound.innerHTML="Sound: Off"
        soundOnOff()

    }
}

sound.addEventListener("click", soundOnOff)
sound.addEventListener("click", playmusic)

 function soundOnOff(){

  
    if(sound.innerHTML=="Sound: Off"){
    
        sound.innerHTML="Sound: On";
        background.play()
        background.volume = 1;
        gridSound.volume = 1;
        clickSound.volume = 1;
        final.volume = 1;
        match.volume = 1;

     
      
    }
    else{
        sound.innerHTML="Sound: Off" 
        background.volume = 0;
        
        gridSound.volume = 0;
        clickSound.volume = 0;
        final.volume = 0;
        match.volume = 0;
    }
 }

  function createBoard() {
    gridSound.play()
    frase.style.display="flex"
    numbers.style.display="flex";

    for (let i = 0; i < 12; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'images/card.jpeg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

function flipCard() {
  

   


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
        match.play()
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
        match.volume=0;
        setTimeout(() => {
            if(background.volume==1){
                match.volume=1;
            }
            else{
                match.volume=0;
            }

          }, 750)


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
    else{
      
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
 frase.style.animation = "none"; // Reinicia la animación
setTimeout(() => {
    frase.style.animation = "vanish 5s"; // Aplica la animación
}, 10); // Pequeño retardo para permitir el reinicio
   cardsWon = [];
    createBoard();



}


function playmusic(){


    if (music==true){
        sound.innerHTML="Sound: On";
        background.play()
        background.volume = 1;
        background.volume = 1;
        gridSound.volume = 1;
        clickSound.volume = 1;
        final.volume = 1;
        match.volume = 1;
        music=false
    }

    else{
       return
    }
}

