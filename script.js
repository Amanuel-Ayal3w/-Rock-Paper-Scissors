const choices = ["rock", "paper", "scissors"];
const playerScoreElement = document.getElementById("player_score");
const computerScoreElement = document.getElementById("Computer_score");
const overallResultElement = document.getElementById("overall_result");

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function playGame(playerChoice) {
    if (roundsPlayed < 5) {
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        let result = '';

        if (playerChoice === computerChoice) {
            result = "It's a tie!";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            playerScore++;
            result = "You win this round!";
        } else {
            computerScore++;
            result = "Computer wins this round!";
        }

        playerScoreElement.textContent = `Player: ${playerScore}`;
        computerScoreElement.textContent = `Computer: ${computerScore}`;
        overallResultElement.textContent = result;

        roundsPlayed++;

        if (roundsPlayed === 5) {
            // Determine overall winner and display it
            if (playerScore > computerScore) {
                overallResultElement.textContent = " Final Winner: Player!";
            } else if (playerScore < computerScore) {
                overallResultElement.textContent = " Final Winner: Computer!";
            } else {
                overallResultElement.textContent = "Final result: It's a tie!";
            }
        }
    }
}
function resetGame() {
    // Reset scores and roundsPlayed
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;

    // Reset displayed scores and result
    playerScoreElement.textContent = "Player: 0";
    computerScoreElement.textContent = "Computer: 0";
    overallResultElement.textContent = "";

    // Hide the "Play Again" button
    document.getElementById("play_again_button").style.display = "none";
}