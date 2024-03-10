function getComputerChoice() {
    let gesture = ['Rock', 'Paper', 'Scissors'];
    return gesture[Math.floor(Math.random() * gesture.length)];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let result;
    let win = "You win!";
    let tie = "Tie!";
    let lose = "You lose!";
    switch (player) {
        case "rock":
            if (computer == "rock")
                result = "Computer chooses rock! " + tie; 
            else if (computer == "paper")
                result = "Computer chooses paper! " + lose;
            else if (computer == "scissors")
                result = "Computer chooses scissors! " + win;
            break;
        case "paper":
            if (computer == "rock")
                result = "Computer chooses rock! " + win; 
            else if (computer == "paper")
                result = "Computer chooses paper! " + tie;
            else if (computer == "scissors")
                result = "Computer chooses scissors! " + lose;
            break;
        case "scissors":
            if (computer == "rock")
                result = "Computer chooses rock! " + lose; 
            else if (computer == "paper")
                result = "Computer chooses paper! " + win;
            else if (computer == "scissors")
                result = "Computer chooses scissors! " + tie;
            break;
        default:
            break;
    }
    return result;
}

function playGame() {
    for (let i = 0; i < 5; i ++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?")
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}

playGame();