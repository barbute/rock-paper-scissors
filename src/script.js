/*
 * Script for a Rock-Paper-Scissors game
 * ---
 * Author: barbute
 */

// -1 will indicate no choice or invalid choice 
// throughout this program

let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    let computerChoice = -1;
    computerChoice = Math.floor(Math.random() * 3);

    return computerChoice;
}

function getPlayerChoice() {
    let hasPlayerChosen = false;
    let playerInput = "";
    let playerChoice = -1;

    // This while loop will continually ask for a valid
    // input until the user has provided one
    while(!hasPlayerChosen) {
        playerInput = prompt("Choose: Rock, Paper, or Scissors: ").toLowerCase();

        switch(playerInput) {
            case "rock":
                playerChoice = 0;
                break;
            case "paper":
                playerChoice = 1;
                break;
            case "scissors":
                playerChoice = 2;
                break;
            default:
                playerChoice = -1;
        }

        if (playerChoice > -1) {
            hasPlayerChosen = true;
        }
    }

    return playerChoice;
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return "TIE";
    }
    else if ((computerSelection === 0) && (playerSelection === 1)) {
        playerScore++;
        return "PAPER BEATS ROCK | PLAYER WINS";
    }
    else if ((computerSelection === 1) && (playerSelection === 2)) {
        playerScore++;
        return "SCISSORS BEATS PAPER | PLAYER WINS";
    }
    else if ((computerSelection === 2) && (playerSelection === 0)) {
        playerScore++;
        return "ROCK BEATS SCISSORS | PLAYER WINS";
    }
    else if ((playerSelection === 0) && (computerSelection === 1)) {
        computerScore++;
        return "PAPER BEATS ROCK | COMPUTER WINS";
    }
    else if ((playerSelection === 1) && (computerSelection === 2)) {
        computerScore++;
        return "SCISSORS BEATS PAPER | COMPUTER WINS";
    }
    else if ((playerSelection === 2) && (computerSelection === 0)) {
        computerScore++;
        return "ROCK BEATS SCISSORS | COMPUTER WINS";
    }
    else {
        return "ERROR";
    }
}

console.log(playRound(getComputerChoice(), getPlayerChoice()));

console.log("COMPUTER SCORE: " + computerScore);
console.log("PLAYER SCORE: " + playerScore);