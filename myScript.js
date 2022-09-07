function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
    return "Rock";
}