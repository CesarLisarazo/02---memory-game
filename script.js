
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

function createBoard (){
    for(let i=0; i< 12; i++ ){
        const card=document.createElement('img')
        card.setAttribute('src','images/card.jpeg')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)

    }
}
createBoard()


function flipCard(){
   const cardId = this.getAttribute('data-id')

console.log(cardArray, cardArray[cardId].name)
}