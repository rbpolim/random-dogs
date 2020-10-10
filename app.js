const API_URL = 'https://dog.ceo/api/breeds/image/random/3'

const randomDogsElement = document.querySelector('.random-dogs')
const goButton = document.querySelector('.go-button')

async function getRandomDogs() {

    randomDogsElement.innerHTML = ""

    const response = await fetch(API_URL)

    const json = await response.json()

    // <div class="column">
    //     <div class="card">
    //         <div class="card-image">
    //             <figure class="image is-4by3">
    //             <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    //             </figure>
    //         </div>
    //     </div>
    // </div>

    json.message.forEach(dogImage => {
        
        //CREATE DIV CLASS="COLUMN"
        const columnElement = document.createElement('div')
        columnElement.classList.add('column')

        //CREATE DIV CLASS="CARD"
        const cardElement = document.createElement('div')
        cardElement.classList.add('card')

        //PUT DIV.CARD INTO INSIDE DIV.COLUMN
        columnElement.appendChild(cardElement) 

        //CREATE DIV CLASS="CARD-IMAGE"
        const cardImageElement = document.createElement('div')
        cardImageElement.classList.add('card-image')

        //PUT DIV.CARD-IMAGE INTO INSIDE DIV.CARD
        cardElement.appendChild(cardImageElement)

        //CREATE FIGURE CLASS="IMAGE"
        const figureElement = document.createElement('figure')
        figureElement.classList.add('image')
        cardImageElement.appendChild(figureElement)

        //PUT FIGURE.IMAGE INTO INSIDE DIV.CARD-IMAGE
        const imageElement = document.createElement('img')
        imageElement.src = dogImage

        //PUT IMG.SCR INTO INSIDE FIGURE.IMAGE
        figureElement.appendChild(imageElement)
        
        //PUT IMAGE INTO INSIDE DIV.COLUMN
        randomDogsElement.appendChild(columnElement)
    });
}

getRandomDogs()

goButton.addEventListener('click', getRandomDogs)
