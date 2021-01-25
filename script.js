
const actionButtons = document.querySelectorAll(".action-btn");

function startGame() {

    //hides start-button (class add .hide)
    startButton.classList.add("hide");

    // shows action buttons
    
    actionButtons.forEach(button => button.classList.remove("hide"));

    // select random card from cardDeck and assign a card to both players
    
        let cardPlayer1 = cards[Math.floor(Math.random() * cards.length)];
        let cardPlayer2 = cards[Math.floor(Math.random() * cards.length)];

        while (cardPlayer1 === cardPlayer2) {
            cardPlayer2 = cards[Math.floor(Math.random() * cards.length)];
        
    } 

// hide backside of card player1, display frontside
    document.querySelector(".card-backside-player1").classList.add("hide");
    document.querySelector(".player1-card").classList.remove("hide");

// assign card values to both players in DOM
    
    document.getElementById("animal-name-player1").innerHTML = cardPlayer1.name;
    document.getElementById("animal-img-player1").src = cardPlayer1.image;
    document.getElementById("speed-player1").innerHTML = cardPlayer1.topSpeed;
    document.getElementById("fear-player1").innerHTML = cardPlayer1.fearFactor;
    document.getElementById("cute-player1").innerHTML = cardPlayer1.cuteness;
    document.getElementById("life-player1").innerHTML = cardPlayer1.lifeSpan;
    
    document.getElementById("animal-name-player2").innerHTML = cardPlayer2.name;
    document.getElementById("animal-img-player2").src = cardPlayer2.image;
    document.getElementById("speed-player2").innerHTML = cardPlayer2.topSpeed;
    document.getElementById("fear-player2").innerHTML = cardPlayer2.fearFactor;
    document.getElementById("cute-player2").innerHTML = cardPlayer2.cuteness;
    document.getElementById("life-player2").innerHTML = cardPlayer2.lifeSpan;
    
    }
    

 
function chooseAction() {
    
    // display card player2
    document.querySelector(".card-backside-player2").classList.add("hide");
    document.querySelector(".player2-card").classList.remove("hide");

    // on click action button read value from button for player1 and 2 and compare, display you win or you lose (add transition)




// hide action buttons
    actionButtons.forEach(button => button.classList.add("hide"));

// display replay button
    document.querySelector(".replay-button").classList.remove("hide");
    
}


// on click replay button:
function replay() {

    document.querySelector(".card-backside-player1").classList.remove("hide");
    document.querySelector(".card-backside-player2").classList.remove("hide");

    document.querySelector(".player1-card").classList.add("hide");
    document.querySelector(".player2-card").classList.add("hide");

    startButton.classList.remove("hide");
    document.querySelector(".replay-button").classList.add("hide");
}
//display card-backside, display start game button



// eventListeners for buttons

const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', startGame);

const speedButton = document.querySelector('.btn-speed');
speedButton.addEventListener('click', chooseAction);

const fearButton = document.querySelector('.btn-fear');
fearButton.addEventListener('click', chooseAction);

const cuteButton = document.querySelector('.btn-cute');
cuteButton.addEventListener('click', chooseAction);

const lifeButton = document.querySelector('.btn-life');
lifeButton.addEventListener('click', chooseAction);

const replayButton = document.querySelector('.replay-button');
replayButton.addEventListener('click', replay);