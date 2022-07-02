let player = {
    name: "Oleh",
    chips: 145 
    }
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let playerEl = document.getElementById('player-el');




playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let random = Math.floor(Math.random() * 13 ) + 1;
    if(random === 1){
        return 11;
    } else if ( 10 < random){
        return 10;
    } else {
        return random;
    }
    
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for ( i = 0; i < cards.length; i++ ) {
    cardsEl.textContent += cards[i] + " "; 
    }   

    sumEl.textContent = "Sum: " + sum;
    messageEl.textContent = message;

    if( sum <= 20){
        message = 'Do you want to draw new card?';
    } else if (sum === 21){
        message ='Wohoo! You have got BlackJack!';
        hasBlackJack = true;
    } else{
        message = 'You are out of the game!';
        isAlive = false;
    }
    
}
 


function newCard(){
    if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
    }
}


