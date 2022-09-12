//tie results
const ROCK_TIED = "You tied! Rock tied Rock";
const SCISSORS_TIED = "You tied! Scissors tied Scissors";
const PAPER_TIED = "You tied! Paper tied Paper";

//win results
const PAPER_WIN = "You win! Paper win Rock";
const ROCK_WIN = "You win! Rock win Scissors";
const SCISSORS_WIN = "You win! Scissors win Paper";

// lose results
const PAPER_LOSE = "You lose! Paper lose Scissors";
const ROCK_LOSE = "You lose! Rock lose Paper";
const SCISSORS_LOSE = "You lose! Scissor lose Rock";

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
    return "Rock";
}

function playRound(playerSeclection, computerSelection){
    //make the characters as same as computer choice
    let playerChoice = playerSeclection.toLowerCase();
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1);

    switch(computerSelection){
        case "Rock": {
            switch(playerChoice){
                case "Rock": return ROCK_TIED; 
                case "Scissors": return SCISSORS_LOSE;
                case "Paper": return PAPER_WIN;
            }
            break;
        }
        case "Paper":{
            switch(playerChoice){
                case "Rock": return ROCK_LOSE; 
                case "Scissors": return SCISSORS_WIN;
                case "Paper": return PAPER_TIED;
            }
            break;
        }
        case "Scissors":{
            switch(playerChoice){
                case "Rock": return ROCK_WIN; 
                case "Scissors": return SCISSORS_TIED;
                case "Paper": return PAPER_LOSE;
            }
            break;
        }
    }

}


// create a variable for body
const container = document.querySelector("body");

//create 3 buttons for user click
const rockButton = document.createElement("button");
rockButton.textContent = "ROCK";
rockButton.addEventListener("click",clickRockButton);
const paperButton = document.createElement("button");
paperButton.textContent = "PAPER";
paperButton.addEventListener("click",clickPaperButton);
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "SCISSORS";
scissorsButton.addEventListener("click",clickScissorsButton);

//add buttons into body
container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

//a text show result to user under button
const gameResult = document.createElement("div");
gameResult.setAttribute('style','white-space:pre-line');
container.appendChild(gameResult);

//amount of wins
let score = 0;

//function call when click button
function clickRockButton(){
    let result = playRound("ROCK",getComputerChoice());
    if(result === ROCK_WIN){
        score++;
    }
    if(score < 5)
        gameResult.textContent = result + "\r\nScore: " + score;
    else{
        gameResult.textContent = "You have win the game"
    }
    
}
function clickPaperButton(){
    let result = playRound("PAPER",getComputerChoice());

    if(result === PAPER_WIN){
        score++;
    }
    if(score < 5)
        gameResult.textContent = result  + "\r\nScore: " + score;
    else{
        gameResult.textContent = "You have win the game"
    }
}
function clickScissorsButton(){
    let result = playRound("SCISSORS",getComputerChoice());
    if(result === SCISSORS_WIN){
        score++;
    }
    if(score < 5)
        gameResult.textContent = result + "<br>" + "\r\nScore: " + score;
    else{
        gameResult.textContent = "You have win the game"
    }
}


