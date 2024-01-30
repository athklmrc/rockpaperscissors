 

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

let playerSelection = prompt("enter your choice");
let computerSelection = getComputerChoice();



function playRound (playerSelection, computerSelection) {
    console.log(`player has choosen ${playerSelection}`);
    console.log(`computer has choosen ${computerSelection}`);


    switch(playerSelection) {
        case "rock":
            if (computerSelection==="rock") { 
                return "its a tie";
            } else if (computerSelection==="paper") {
                return "you loose against paper";
            } else {
                return "you win against scissors";
            }
        case "paper":
            if (computerSelection==="rock") {
                return "You win against ROCK";
            } else if (computerSelection==="paper") {
                return "its a tie";
            } else {
                return "you loose";
            }
        case "scissors":
            if (computerSelection==="rock") { 
                return "You Loose against ROCK";
            } else if (computerSelection==="paper") {
                return "you win";
            } else {
                return "its a tie";
            }    
    }

}




console.log( playRound( playerSelection, computerSelection) ) 