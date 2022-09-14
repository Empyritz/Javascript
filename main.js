let firstCard = 6;
let secondCard = 9;
let sum = firstCard + secondCard;

function startGame () {
    if (sum < 21) {
        console.log("Do you want another card")
    } else if (sum === 21) {
        console.log("Wohoo! You`ve got Blackjack")
    } else {
        console.log("You`re out of the Game")
    }
}



