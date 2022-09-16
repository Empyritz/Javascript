let sum = 0;
let cards = [];
let message = ""
let isAlive = false
let hasBlackjack = false


let messageEl = document.querySelector("#message-el")
let startBtn = document.querySelector("#buttonStart")
let newBtn = document.querySelector("#buttonNew")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


startBtn.addEventListener("click", startGame)
newBtn.addEventListener("click", newCard)


function getRandomCard () {
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber == 1) {
        return 11
    } else {
        return randomNumber;
    }
}


function startGame () {
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame () {
    if (sum < 21) {
        message = "Do you want another card?"
        newBtn.classList.remove("showBtn")
    } else if (sum === 21) {
        message = "Wohoo! You`ve got Blackjack"
        hasBlackjack = true
        newBtn.classList.add("showBtn")
    } else {
        message = "You`re out of the Game"
        isAlive = false
        newBtn.classList.add("showBtn")
    };

    cardsEl.textContent = "Cards: " ;

    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;
    messageEl.textContent = message;

};



function newCard () {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }  
}



