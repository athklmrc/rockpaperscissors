 

alert("Choose between rock/paper/scissors !");
// var playerSelection = prompt("enter your choice");


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


function playRound (playerSelection, computerSelection) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("enter your choice");

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
            if (computerSelection==="") {
                ;
            }



        case "scissors":
            return
    }

}


/*     if (playerSelection===computerSelection) {
        console.log("its a tie!");
    } else if (playerSelection==="rock" && computerSelection==="paper" {
        return `You Loose! Paper beats ${playerSelection} ` ;
    } else if (playerSelection==="rock") {

*/



console.log( playRound( playerSelection, computerSelection) ) 