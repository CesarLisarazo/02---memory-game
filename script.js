
const cardArray = [
    {
        name: 'Seiya',
        img: 'images/Seiya.png'
    },
    {
        name: 'Hyoga',
        img: 'images/Hyoga.png'
    },
    {
        name: 'Ikki',
        img: 'images/Ikki.png'
    },
    {
        name: 'Saori',
        img: 'images/Saori.png'
    },
    {
        name: 'Shiryu',
        img: 'images/Shiryu.png'
    },
    {
        name: 'Shun',
        img: 'images/Shun.png'
    },
    {
        name: 'Seiya',
        img: 'images/Seiya.png'
    },
    {
        name: 'Hyoga',
        img: 'images/Hyoga.png'
    },
    {
        name: 'Ikki',
        img: 'images/Ikki.png'
    },
    {
        name: 'Saori',
        img: 'images/Saori.png'
    },
    {
        name: 'Shiryu',
        img: 'images/Shiryu.png'
    },
    {
        name: 'Shun',
        img: 'images/Shun.png'
    }

]




cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.getElementById('grid')
let score = document.getElementById('score')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []
let card
let clicks = document.getElementById('clicks')




function createBoard() {
    for (let i = 0; i < 12; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'images/card.jpeg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        console.log(cardArray)
    }
}



createBoard()




function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

   

    if (cardsChosen[0] == cardsChosen[1]) {
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cards[optionOneId])
        cardsWon.push(cards[optionTwoId])
        console.log(cardsWon)
        score.innerHTML = cardsWon.length / 2

    }
    else {

        cards[optionOneId].setAttribute('src', 'images/card.jpeg')
        cards[optionTwoId].setAttribute('src', 'images/card.jpeg')
    }

    if (score.innerHTML == cardArray.length / 2) {
        Swal.fire({
            title: "¡Ganastes!",
            text: "Y te tomó "+clicks.innerHTML+" clicks ",
            confirmButtonText: "Jugar de nuevo",
            background:  "#e4dbc7",
           
        }).then(() => {
            location.reload();
        });
    }

    cardsChosen = []
    cardsChosenIds = []
}





function flipCard() {
   
    clicks.innerHTML = Number(clicks.innerHTML) + 1
    const cardId = this.dataset.id
    if (cardsChosenIds.includes(cardId)) {
        return 
    }
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

