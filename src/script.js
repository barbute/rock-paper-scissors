/*
 * Script for a Rock-Paper-Scissors game
 * ---
 * Author: barbute
 */

// -1 will indicate no choice or invalid choice throughout this program
let computerChoice = -1;
let playerChoice = -1;

let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);

    return computerChoice;
}

function getPlayerChoice() {
    let hasPlayerChosen = false;
    let playerInput = "";

    while(!hasPlayerChosen) {
        playerInput = prompt("Choose: Rock, Paper, or Scissors: ").toLowerCase();

        switch(playerInput) {
            case "rock":
                playerChoice = 0;
                break;
            case "paper":
                playerChoice = 1;
                break;
            case "scissors:":
                playerChoice = 2;
                break;
            default:
                playerChoice = -1;
        }

        if (playerChoice > -1) {
            hasPlayerChosen = true;
        }
    }
}