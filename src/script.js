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
        roundWinner = "ROCK BEATS SCISSORS | PLAYER WINS";
        playerScore++;
    }
    else if ((playerChoice === "scissors") && (computerChoice === "paper")) {
        roundWinner = "SCISSORS BEATS PAPER | PLAYER WINS";
        playerScore++;
    }
    else if ((playerChoice === "paper") && (computerChoice === "rock")) {
        roundWinner = "PAPER BEATS ROCK | PLAYER WINS";
        playerScore++;
    }
    else if ((computerChoice === "rock") && (playerChoice === "scissors")) {
        roundWinner = "ROCK BEATS SCISSORS | COMPUTER WINS";
        computerScore++;
    }
    else if ((computerChoice === "scissors") && (playerChoice === "paper")) {
        roundWinner = "SCISSORS BEATS PAPER | COMPUTER WINS";
        computerScore++;
    }
    else if ((computerChoice === "paper") && (playerChoice === "rock")) {
        roundWinner = "PAPER BEATS ROCK | COMPUTER WINS";
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