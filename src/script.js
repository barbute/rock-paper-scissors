/*
 * Script for a Rock-Paper-Scissors game
 * ---
 * Author: barbute
 */

// -1 will indicate no choice or invalid choice throughout this program
let computerChoice = -1;
let playerChoice = -1;

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);

    return computerChoice;
}