let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = firstCard + secondCard;
let cards = [firstCard, secondCard];
let message = ""
let isAlive = true
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
    renderGame()
}

function renderGame () {
    if (sum < 21) {
        message = "Do you want another card?"
    } else if (sum === 21) {
        message = "Wohoo! You`ve got Blackjack"
        hasBlackjack = true
    } else {
        message = "You`re out of the Game"
        isAlive = false
    };

    cardsEl.textContent = "Cards: " ;

    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;
    messageEl.textContent = message;

};

function newCard () {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}



