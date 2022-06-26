let firstCard = 10;
let secondCard = 6;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

function startGame(){
    renderGame();
}

function renderGame(){
    if( sum <= 20){
        message = 'Do you want to draw new card?';
    } else if (sum === 21){
        message ='Wohoo! You have got BlackJack!';
        hasBlackJack = true;
    } else{
        message = 'You are out of the game!';
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + firstCard +" "+ secondCard;
}
 


function newCard(){
    let card = 5;
    sum += card;
   renderGame();
}



