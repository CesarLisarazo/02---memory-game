
const cardArray = [
    {
        name: 'Seiya',
        img: 'images/Seiya.jpg'
    },
    {
        name: 'Hyoga',
        img: 'images/Hyoga.jpg'
    },
    {
        name: 'Ikki',
        img: 'images/Ikki.jpg'
    },
    {
        name: 'Saori',
        img: 'images/Saori.png'
    },
    {
        name: 'Shiryu',
        img: 'images/Shiryu.jpg'
    },
    {
        name: 'Shun',
        img: 'images/Shun.jpg'
    },
    {
        name: 'Seiya',
        img: 'images/Seiya.jpg'
    },
    {
        name: 'Hyoga',
        img: 'images/Hyoga.jpg'
    },
    {
        name: 'Ikki',
        img: 'images/Ikki.jpg'
    },
    {
        name: 'Saori',
        img: 'images/Saori.png'
    },
    {
        name: 'Shiryu',
        img: 'images/Shiryu.jpg'
    },
    {
        name: 'Shun',
        img: 'images/Shun.jpg'
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
        alert('Ganaste wey!')
        location.reload();
    }

    cardsChosen = []
    cardsChosenIds = []
}





function flipCard() {
    clicks.innerHTML = Number(clicks.innerHTML) + 1
    const cardId = this.dataset.id
    if (cardsChosenIds.includes(cardId)) {
        return // No hagas nada si la carta ya está volteada
    }


    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 400)
    }
}

