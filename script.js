// gererate a random number between 1 to 3 and assign values to rock paper and scissor 
function getComputerChoice() {
    let rock = "ROCK";
    let scissor = "SCISSOR";
    let paper = "PAPER";

    let computerChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = rock;
    } else if (randomNumber === 2) {
        computerChoice = paper;
    } else if (randomNumber === 3) {
        computerChoice = scissor;
    }

    return computerChoice;
}

// get value from user and make it case sensitive by changing it to all caps 
function getPlayerChoice() {
    let playerSelection = prompt("Choose and input between rock, paper and scissor: ");
    let playerChoice = playerSelection ? playerSelection.toUpperCase() : '';
    return playerChoice;
}

// compare values of user input and computer-generated value 
function game() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
  
    let z;
    if (computerChoice === playerChoice) {
        z = "It's a tie. Play again.";
    } else if (computerChoice === "ROCK" && playerChoice === "SCISSOR") {
        z = "You lose. Computer wins.";
    } else if (computerChoice === "ROCK" && playerChoice === "PAPER") {
        z = "You win.";
    } else if (computerChoice === "PAPER" && playerChoice === "ROCK") {
        z = "You lose. Computer wins.";
    } else if (computerChoice === "PAPER" && playerChoice === "SCISSOR") {
        z = "You win.";
    } else if (computerChoice === "SCISSOR" && playerChoice === "ROCK") {
        z = "You win.";
    } else if (computerChoice === "SCISSOR" && playerChoice === "PAPER") {
        z = "You lose. Computer wins.";
    } else {
        z = "Invalid input.";
    }

    return z;
}

// Function to display a centered modal message
function showAlert(message) {
    // Get the modal container
    var modal = document.getElementById('myModal');
    
    // Set the message content
    modal.innerHTML = '<p>' + message + '</p>';
    
    // Display the modal
    modal.style.display = 'block';

    // Close the modal after 2 seconds (adjust as needed)
    setTimeout(function() {
        modal.style.display = 'none';
    }, 2000);
}

// Example: Display a centered alert after 1 second
setTimeout(function() {
    showAlert(game());
}, 1000);


