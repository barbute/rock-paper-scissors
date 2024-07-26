/*
 * Script for a Rock-Paper-Scissors game
 * ---
 * Author: barbute
 */

const rockButton = document.getElementById("user-rock"); 
const paperButton = document.getElementById("user-paper"); 
const scissorsButton = document.getElementById("user-scissors"); 

let playerChoice = "rock"; // Default value
let computerChoice = "rock"; // Default value

let playerScore = 0;
let computerScore = 0;

let roundNumber = 1;

function setPlayerChoice (playerInput) {
    playerChoice = playerInput;
}

rockButton.addEventListener("click", () => {
    playerChoice = "rock";

    playRound();
});

paperButton.addEventListener("click", () => {
    playerChoice = "paper";

    playRound();
});

scissorsButton.addEventListener("click", () => {
    playerChoice = "scissors";

    playRound();
});

function setComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3); // Only 3 different possible nums

    switch (randomNumber) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
}

function playRound() {
    let roundWinner = "NONE";

    setComputerChoice();

    if (playerChoice === computerChoice) {
        roundWinner = "TIE";
    }
    else if ((playerChoice === "rock") && (computerChoice === "scissors")) {
        roundWinner = "PLAYER";
        playerScore++;
    }
    else if ((playerChoice === "scissors") && (computerChoice === "paper")) {
        roundWinner = "PLAYER";
        playerScore++;
    }
    else if ((playerChoice === "paper") && (computerChoice === "rock")) {
        roundWinner = "PLAYER";
        playerScore++;
    }
    else if ((computerChoice === "rock") && (playerChoice === "scissors")) {
        roundWinner = "COMPUTER";
        computerScore++;
    }
    else if ((computerChoice === "scissors") && (playerChoice === "paper")) {
        roundWinner = "COMPUTER";
        computerScore++;
    }
    else if ((computerChoice === "paper") && (playerChoice === "rock")) {
        roundWinner = "COMPUTER";
        computerScore++;
    }
    else {
        roundWinner = "INVALID";
    }

    roundNumber++;

    updateGUI(roundWinner);

    console.log(roundWinner);
}

function updateGUI(roundWinner) {
    let playerScoreBox = document.getElementById("score-player");
    let computerScoreBox = document.getElementById("score-computer");

    playerScoreBox.textContent = playerScore;
    computerScoreBox.textContent = computerScore;

    let resultBox = document.getElementById("result");

    resultBox.textContent = roundWinner;

    let roundNumberBox = document.getElementById("round-number");

    roundNumberBox.textContent = roundNumber;
}