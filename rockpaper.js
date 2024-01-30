alert("Choose between rock/paper/scissors !");

function getComputerChoice() {
    let cc = Math.floor(Math.random() * 3);
    if (cc===0) {
        return "paper";
    } else if (cc===1) {
        return "rock";
    } else {
        return "scissors";
    }
}

let prompt1 = prompt("enter your choice");
let playerSelection = prompt1.toLowerCase();

let computerSelection = getComputerChoice();



function playRound (playerSelection, computerSelection) {
    console.log(`player has choosen ${playerSelection}`);
    console.log(`computer has choosen ${computerSelection}`);


    switch(playerSelection) {
        case "rock":
            if (computerSelection==="rock") { 
                return "its a tie";
            } else if (computerSelection==="paper") {
                return "you loose against PAPER";
            } else {
                return "you win against SCISSORS";
            }
        case "paper":
            if (computerSelection==="rock") {
                return "You win against ROCK";
            } else if (computerSelection==="paper") {
                return "its a tie";
            } else {
                return "you loose against SCISSORS";
            }
        case "scissors":
            if (computerSelection==="rock") { 
                return "You Loose against ROCK";
            } else if (computerSelection==="paper") {
                return "you win against PAPER";
            } else {
                return "its a tie";
            }
        default:
            return "please use correct input";
    }

}

function playGame() {
    let scorePlayer;
    let scoreComputer;

    playRound();


}






console.log( playRound( playerSelection, computerSelection) ) 