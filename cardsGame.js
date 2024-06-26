

let cards = []
let sum = 0
let maxCards = 5
let isWinning = false
let isLosing = false
const alertMessage = document.getElementById("alert_mes")
let cardsEl = document.getElementById("cards-el");
const newCardButton = document.getElementById('new-card-button');
const newGameButton = document.getElementById('new-game-button');


function getRandomCards(){
    return Math.floor(Math.random()*11+1)
}
function addCard(){
    if (cards.length<maxCards && isWinning == false && isLosing == false) {
        const card = getRandomCards()
        cards.push(card) // push to add new element in the array #random card
        updateSum(card)
        displayCard()
        updateScore()
    }else {
        alertMessage.textContent = " you are out of cards"
       // alert("only 5 cards are avalible ") 
    }
}
function displayCard(){
    cardsEl.textContent = "Cards: ";
   for (let i = 0; i < cards.length; i++) {
     cardsEl.textContent += cards[i] + " ";
    }
}
function updateScore() {
    const scoreText = document.getElementById('score-text');
    scoreText.textContent = `Score: ${sum}`;
}
function updateSum(card){
    sum += card
    if(sum == 21 ){
        isWinning = true
        alertMessage.textContent = "Congratulation you won"
        //alert("Congratulation you won")
       // resetGame()
    }else if(sum>21 || (sum <20 && cards.length == maxCards)){
        isLosing = true
        alertMessage.textContent = "sorry you lose"
         //alert("sorry you lose ")
        
    }

   
}
function updateScore(){
    const scoreText = document.getElementById('score-text');
    scoreText.textContent = `Score:  ${sum}` ;
}
function resetGame(){
    cards =[]
    sum = 0
    isWinning = false
    isLosing = false
    cardsEl.textContent = "Cards: ";
    alertMessage.textContent = " "
    updateScore();
}
document.addEventListener('DOMContentLoaded', () => {
    newCardButton.addEventListener('click', addCard);
    newGameButton.addEventListener('click', resetGame);
});