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

function game(){
    for(let i=0; i<5; i++){
        let playerChoice = prompt("Enter your choice: ");
        let result = playRound(playerChoice,getComputerChoice());
        console.log(result);
    }
}