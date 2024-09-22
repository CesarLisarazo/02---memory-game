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
let frasesEsp = [
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
let ArcaneEchoes= document.getElementById('Arcane-echoes')
ArcaneEchoes.style.display="none";
numbers.style.display="none";
background.muted = true;
gridSound.muted = true;
clickSound.muted = true;
final.muted = true;
match.muted = true;
let reloadGame=document.getElementById("reloadGame")
reloadGame.addEventListener("click",clearDisplay)
Swal.fire({
  
    html:  " <br><br><br><br><br><br><br><span id='homeSoundOnOff' class='homeText'>Sound Off / On<br></span><button id='homeSound'>🔊</button><br><br><span class='homeText'>English / Español</span><br><button id='homeIdiom'>English</button><br><br><br>",
    confirmButtonText: "Start",
   // Fondo del modal transparente
    width:"40vh",
 
  imageWidth: 400,
  imageHeight: 55,

    customClass: {
        popup: 'custom-swal',  // Clase personalizada para el modal
        confirmButton: 'custom-confirm-button'  // Clase personalizada para el botón de confirmación
    },
    allowOutsideClick: false
}).then(() => {
    createBoard();
});
frase.style.display="none"

   

let homeStart= document.querySelector('.custom-confirm-button')
let homeSoundOnOff= document.getElementById('homeSoundOnOff')

let homeSound =document.getElementById("homeSound")
homeSound.addEventListener("click",homeChange)
toogle.addEventListener("click",toogleChange)




let toogleHome=document.getElementById("homeIdiom")

toogleHome.addEventListener("click",toogleHomeChange)
function toogleHomeChange(){
    match.currentTime=0;
    match.play()
    if(toogleHome.innerHTML=="English"){
        toogleHome.innerHTML="Español"
        homeSoundOnOff.innerHTML='Sonido Si / No<br>'
        homeStart.innerHTML='Comienza!'

        toogle.innerHTML= toogleHome.innerHTML
    }
    else{
        toogleHome.innerHTML="English"
        toogle.innerHTML= toogleHome.innerHTML
    
        homeSoundOnOff.innerHTML='Sound On / Off<br>'
        homeStart.innerHTML='Start!'
    }
  
}

toogle.innerHTML= toogleHome.innerHTML


function toogleChange(){
  if(toogle.innerHTML=="English" ){
    toogle.innerHTML="Español" 
    frase.innerHTML=frasesEsp[numeroRandom]
    frase.style.animation = "none"; // Reinicia la animación
setTimeout(() => {
    frase.style.animation = "vanish 3s"; // Aplica la animación
}, 1);
   


  }else{
    toogle.innerHTML="English" 
    frase.innerHTML=frases[numeroRandom]
    frase.style.animation = "none"; // Reinicia la animación
setTimeout(() => {
    frase.style.animation = "vanish 3s"; // Aplica la animación
}, 0);
  
  }
      
}






function homeChange(){
    if(homeSound.innerHTML=="🔊"){
        homeSound.innerHTML="🔈";
        soundOnOff()
    }
    else{
        homeSound.innerHTML="🔊"
        soundOnOff()

    }
}


sound.addEventListener("click", soundOnOff)

 function soundOnOff(){

  
    if(sound.innerHTML=="🔊"){
    
        sound.innerHTML="🔈";
        background.play()
        background.muted = false;
        gridSound.muted = false;
        clickSound.muted = false;
        final.muted = false;
        match.muted = false;

     
      
    }
    else{
        sound.innerHTML="🔊" 
        background.muted = true;
        gridSound.muted = true;
        clickSound.muted = true;
        final.muted = true;
        match.muted = true;
    }
 }

  function createBoard() {
    console.log(cardArray)
    if(toogle.innerHTML=='English'){
        
    frase.innerHTML=frases[numeroRandom];}
    else{
        frase.innerHTML=frasesEsp[numeroRandom];   
    }
    gridSound.play()
    frase.style.display="flex"
    numbers.style.display="flex";
    ArcaneEchoes.style.display="flex";

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
        match.muted=true;
        setTimeout(() => {


            if(background.muted==false){
                match.muted=false;
            }
            else{
                match.muted=true;
            }

          }, 750)


        final.play()

        /*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/
        if(Number(clicks.innerHTML)>=33  ) {


            if(toogle.innerHTML=='Español'){

                Swal.fire({
                    title: "El Alma Perdida",
                    html: "Has cruzado al nivel #10 de iluminación.<br><br>" + clicks.innerHTML + " clics... Estás atrapado en el laberinto de la existencia, buscando una chispa de luz.<br><h1>🌑</h1>",
                    confirmButtonText: "Recargar",
                  
                    customClass: {
                        title:'custom-tittle',
                        popup: 'end-swal',  
                        confirmButton: 'end-swal-button'  
                    },
                }).then(() => {
                    clearDisplay();
                });

            }
            else{
            Swal.fire({
                title: "The Lost Soul ",
                html: "You’ve crossed into the #10 tier of enlightenment.<br><br>" + clicks.innerHTML + " clicks... You are trapped in the labyrinth of existence, searching for a spark of light.<br><h1>🌑</h1>",
                confirmButtonText: "Reload",
              
                customClass: {
                    title:'custom-tittle',
                    popup: 'end-swal',  // Clase personalizada para el modal
                    confirmButton: 'end-swal-button'  // Clase personalizada para el botón de confirmación
                },
            }).then(() => {
                clearDisplay();
            });
        }}
    
        if(Number(clicks.innerHTML)==32 || Number(clicks.innerHTML)==31) {
            if(toogle.innerHTML=='Español'){
                Swal.fire({
                    title: "Buscador de Sombras",
                    html: "Has cruzado al nivel #9 de iluminación.<br><br>" + clicks.innerHTML +  " clics. Todavía en la oscuridad, comienzas a percibir las sombras de verdades ocultas.<br><h1>🌒</h1>",
                    confirmButtonText: "Recargar",
                   
                    customClass: {
                        title:'custom-tittle',
                        popup: 'end-swal',  
                        confirmButton: 'end-swal-button'  
                    },
                }).then(() => {
                    clearDisplay();
                });
            }
            else{
          
          
            Swal.fire({
                title: "Seeker of Shadows ",
                html:  "You’ve crossed into the #9 tier of enlightenment.<br><br>" + clicks.innerHTML +  " clicks. Still in darkness, you begin to perceive the shadows of hidden truths.<br><h1>🌒</h1>",
                confirmButtonText: "Reload",
               
                customClass: {
                    title:'custom-tittle',
                    popup: 'end-swal',  // Clase personalizada para el modal
                    confirmButton: 'end-swal-button'  // Clase personalizada para el botón de confirmación
                },
            }).then(() => {
                clearDisplay();
            });
        }}
    
        if(Number(clicks.innerHTML)==29 || Number(clicks.innerHTML)==30) {


            if(toogle.innerHTML=='Español'){
                Swal.fire({
                    title: "Espíritu Errante",
                    html: "Has cruzado al nivel #8 de iluminación.<br><br>" + clicks.innerHTML + " clics. Tu espíritu vaga, pero sientes el eco distante de la iluminación.<br><h1>🌀</h1>",
                    confirmButtonText: "Recargar",
                 
                    customClass: {
                        title:'custom-tittle',
                        popup: 'end-swal',  
                        confirmButton: 'end-swal-button'  
                    },
                }).then(() => {
                    clearDisplay();
                });



            }
            else{
            Swal.fire({
                title: "Wandering Spirit ",
                html:  "You’ve crossed into the #8 tier of enlightenment.<br><br>" + clicks.innerHTML + " clicks. Your spirit wanders, yet you feel the distant echo of illumination.<br><h1>🌀</h1>",
                confirmButtonText: "Reload",
             
                customClass: {
                    title:'custom-tittle',
                    popup: 'end-swal',  // Clase personalizada para el modal
                    confirmButton: 'end-swal-button'  // Clase personalizada para el botón de confirmación
                },
            }).then(() => {
                clearDisplay();
            });
        }}
    
        if(Number(clicks.innerHTML)==27 || Number(clicks.innerHTML)==28) {

            if(toogle.innerHTML=='Español'){

                Swal.fire({
                    title: "Novato de lo Arcano",
                    html: "Has cruzado al nivel #7 de iluminación.<br><br>" + clicks.innerHTML + " clics... Has dado tus primeros pasos, pero queda mucho por descubrir.<br><h1>🔮</h1>",
                    confirmButtonText: "Recargar",
                  
                    customClass: {
                        title:'custom-tittle',
                        popup: 'end-swal',  
                        confirmButton: 'end-swal-button'  
                    },
                }).then(() => {
                    clearDisplay();
                });

            }
            else{


            Swal.fire({
                title: "Novice of the Arcane ",
                html: "You’ve crossed into the #7 tier of enlightenment.<br><br>" + clicks.innerHTML + " clicks... You've taken your first steps, but much remains to be uncovered.<br><h1>🔮</h1>",
                confirmButtonText: "Reload",
              
                customClass: {
                    title:'custom-tittle',
                    popup: 'end-swal',  // Clase personalizada para el modal
                    confirmButton: 'end-swal-button'  // Clase personalizada para el botón de confirmación
                },
            }).then(() => {
                clearDisplay();
            });
        }}
    
        if(Number(clicks.innerHTML)==26 || Number(clicks.innerHTML)==25) {


            if(toogle.innerHTML=='Español'){
                Swal.fire({
                    title: "Iniciado del Velo",
                    html: "Has cruzado al nivel #6 de iluminación.<br><br>" + clicks.innerHTML + " clics, has entrado al umbral del conocimiento esotérico.<br><h1>🌕</h1>",
                    confirmButtonText: "Recargar",
              
                    customClass: {
                        title:'custom-tittle',
                        popup: 'end-swal',  
                        confirmButton: 'end-swal-button'  
                    },
                }).then(() => {
                    clearDisplay();
                });
            }


            else{
            Swal.fire({
                title: "Initiate of the Veil ",
                html:  "You’ve crossed into the #6 tier of enlightenment.<br><br>" + clicks.innerHTML + " clicks, you have entered the threshold into esoteric knowledge.<br><h1>🌕</h1>",
                confirmButtonText: "Reload",
          
                customClass: {
                    title:'custom-tittle',
                    popup: 'end-swal',  // Clase personalizada para el modal
                    confirmButton: 'end-swal-button'  // Clase personalizada para el botón de confirmación
                },
            }).then(() => {
                clearDisplay();
            });
        }}
    
        if(Number(clicks.innerHTML)==23 || Number(clicks.innerHTML)==24) {


            if(toogle.innerHTML=='Español'){
                Swal.fire({
                    title: "Adepto de las Estrellas",
                    html: "Has cruzado al nivel #5 de iluminación.<br><br>" + clicks.innerHTML + " clics... Has comenzado a navegar las estrellas, dominando secretos cósmicos.<br><h1>✨</h1>",
                    confirmButtonText: "Recargar",
            
                    customClass: {
                        title:'custom-tittle',
                        popup: 'end-swal',  
                        confirmButton: 'end-swal-button'  
                    },
                }).then(() => {
                    clearDisplay();
                });

            }
            else{
            Swal.fire({
                title: "Adept of the Stars ",
                html:  "You’ve crossed into the #5 tier of enlightenment.<br><br>" + clicks.innerHTML + " clicks... You have begun to navigate the stars, mastering cosmic secrets.<br><h1>✨</h1>",
                confirmButtonText: "Reload",
   
                customClass: {
                    title:'custom-tittle',
                    popup: 'end-swal',  // Clase personalizada para el modal
                    confirmButton: 'end-swal-button'  // Clase personalizada para el botón de confirmación
                },
            }).then(() => {
                clearDisplay();
            });
        }}
    
        if(Number(clicks.innerHTML)==22 || Number(clicks.innerHTML)==21) {


            if(toogle.innerHTML=='Español'){

                Swal.fire({
                    title: "Guía del Cosmos",
                    html: "Has cruzado al nivel #4 de iluminación.<br><br>" + clicks.innerHTML + " clics... El cosmos empieza a revelarse bajo tu mirada.<br><h1>🌌</h1>",
                    confirmButtonText: "Recargar",
             
                    customClass: {
                        title:'custom-tittle',
                        popup: 'end-swal',  
                        confirmButton: 'end-swal-button'  
                    },
                }).then(() => {
                    clearDisplay();
                });


            }
            else{
            Swal.fire({
                title: "Guide of the Cosmos ",
                html:  "You’ve crossed into the #4 tier of enlightenment.<br><br>" +clicks.innerHTML + " clicks... The cosmos starts to reveal its meaning under your gaze.<br><h1>🌌</h1>",
                confirmButtonText: "Reload",
     
                customClass: {
                    title:'custom-tittle',
                    popup: 'end-swal',  // Clase personalizada para el modal
                    confirmButton: 'end-swal-button'  // Clase personalizada para el botón de confirmación
                },
            }).then(() => {
                clearDisplay();
            });
        }}
    
        if(Number(clicks.innerHTML)<=20 && Number(clicks.innerHTML)>=18) {

            if(toogle.innerHTML=='Español'){

                Swal.fire({
                    title: "Guardián de los Misterios",
                    html: "Has cruzado al nivel #3 de iluminación.<br><br> " + "Con "+clicks.innerHTML + " clics, tu conexión con el universo se fortalece.<br><h1>🔱</h1>",
                    confirmButtonText: "Recargar",
              
                    customClass: {
                        title:'custom-tittle',
                        popup: 'end-swal',  
                        confirmButton: 'end-swal-button'  
                    },
                }).then(() => {
                    clearDisplay();
                });
            }
            else{


            Swal.fire({
                title: "Guardian of Mysteries ",
                html:  "You’ve crossed into the #3 tier of enlightenment.<br><br> " + "With "+clicks.innerHTML + " clicks, your connection to the universe strengthens.<br><h1>🔱</h1>",
                confirmButtonText: "Reload",
          
                customClass: {
                    title:'custom-tittle',
                    popup: 'end-swal',  // Clase personalizada para el modal
                    confirmButton: 'end-swal-button'  // Clase personalizada para el botón de confirmación
                },
            }).then(() => {
                clearDisplay();
            });
        }}
    
        if(Number(clicks.innerHTML)<=17 && Number(clicks.innerHTML)>=13) {
            if(toogle.innerHTML=='Español'){

                Swal.fire({
                    title: "Maestro de los Ecos",
                    html: "Has cruzado al nivel #2 de iluminación.<br><br>" + "Solo " + clicks.innerHTML + " clics, los ecos del tiempo y el destino responden a tu llamado.<br><h1>🧿</h1>",
                    confirmButtonText: "Recargar",
               
                    customClass: {
                        title:'custom-tittle',
                        popup: 'end-swal',  
                        confirmButton: 'end-swal-button'  
                    },
                }).then(() => {
                    clearDisplay();
                });

            }
            else{



            Swal.fire({
                title: "Master of Echoes ",
                html: "You’ve crossed into the #2 tier of enlightenment.<br><br>" +"Just " + clicks.innerHTML + " clicks, the echoes of time and fate respond to your call.<br><h1>🧿</h1>",
                confirmButtonText: "Reload",
       
                customClass: {
                    title:'custom-tittle',
                    popup: 'end-swal',  // Clase personalizada para el modal
                    confirmButton: 'end-swal-button'  // Clase personalizada para el botón de confirmación
                },
            }).then(() => {
                clearDisplay();
            });
        }}
    






        if(Number(clicks.innerHTML)==12) {

            if(toogle.innerHTML=='Español'){
                if(Number(clicks.innerHTML)==12) {
                    Swal.fire({
                        title: "El Ascendido",
                        html: "Que la luz esté contigo.<br><br>" + "¡Has alcanzado la iluminación total con " + clicks.innerHTML + " clics! Maestro del cosmos! <br><h1>🌟</h1>",
                        confirmButtonText: "Recargar",
                
                        customClass: {
                            title:'custom-tittle',
                            popup: 'end-swal',  
                            confirmButton: 'end-swal-button'  
                        },
                    }).then(() => {
                        clearDisplay();
                    });
                }

            }
            else{

            Swal.fire({
                title: "Ascended One ",
                html: "May the light be with you.<br><br>" +"You have achieved total enlightenment with " + clicks.innerHTML + " clicks! Master of the cosmos! <br><h1>🌟</h1>",
                confirmButtonText: "Reload",
    
                customClass: {
                    title:'custom-tittle',
                    popup: 'end-swal',  // Clase personalizada para el modal
                    confirmButton: 'end-swal-button'  // Clase personalizada para el botón de confirmación
                },
            }).then(() => {
               
                clearDisplay();
            });
       
       
        }}
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



