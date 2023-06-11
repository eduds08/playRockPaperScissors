let options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let index = Math.floor(Math.random() * options.length);
    return options[index];
}

function round(playerSelection, computerSelection) {
    if (computerSelection == "Rock") {
        if (playerSelection == "Rock") {
            return `DRAW! ${computerSelection} vs ${playerSelection}`;
        }
        else if (playerSelection == "Paper") {
            return "You WIN! Paper beats Rock";
        }
        else if (playerSelection == "Scissors") {
            return "You LOSE! Rock beats Scissors";
        }
    }
    else if (computerSelection == "Paper") {
        if (playerSelection == "Rock") {
            return "You LOSE! Paper beats Rock";
        }
        else if (playerSelection == "Paper") {
            return `DRAW! ${computerSelection} vs ${playerSelection}`;
        }
        else if (playerSelection == "Scissors") {
            return "You WIN! Scissors beats Paper";
        }
    }
    else if (computerSelection == "Scissors") {
        if (playerSelection == "Rock") {
            return "You WIN! Rock beats Scissors";
        }
        else if (playerSelection == "Paper") {
            return "You LOSE! Scissors beats Paper";
        }
        else if (playerSelection == "Scissors") {
            return `DRAW! ${computerSelection} vs ${playerSelection}`;
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();

        let playerChoice = prompt("Choose your move (rock, paper, scissors): ");
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
        
        if (playerChoice != "Rock" && playerChoice != "Paper" && playerChoice != "Scissors") {
            console.log("Opção inválida!");
        }
        else {
            console.log(round(playerChoice, computerChoice));
        }
    }   
}

game();