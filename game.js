function getComputerSelection() {
  let gesture = ["Rock", "Paper", "Scissors"];
  return gesture[Math.floor(Math.random() * gesture.length)];
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();
  let win = "You win!";
  let tie = "Tie!";
  let lose = "You lose!";
  let output = "Computer chose " + computer + "! ";
  let flag = -1;
  // flag == 0, player win
  // flag == 1, tie
  // flag == 2, computer win
  switch (player) {
    case "rock":
      if (computer == "rock") {
        output += tie;
        flag = 1;
      } else if (computer == "paper") {
        output += lose;
        flag = 2;
      } else if (computer == "scissors") {
        output += win;
        flag = 0;
      }
      break;
    case "paper":
      if (computer == "rock") {
        output += win;
        flag = 0;
      } else if (computer == "paper") {
        output += tie;
        flag = 1;
      } else if (computer == "scissors") {
        output += lose;
        flag = 2;
      }
      break;
    case "scissors":
      if (computer == "rock") {
        output += lose;
        flag = 2;
      } else if (computer == "paper") {
        output += win;
        flag = 0;
      } else if (computer == "scissors") {
        output += tie;
        flag = 1;
      }
      break;
    default:
      break;
  }
  return [output, flag];
}

function playGame() {
  const rockBtn = document.querySelector("#rock-btn");
  const paperBtn = document.querySelector("#paper-btn");
  const scissorsBtn = document.querySelector("#scissors-btn");
  const res = document.querySelector("#result");
  const playerScoreDiv = document.querySelector("#player-score");
  const computerScoreDiv = document.querySelector("#computer-score");
  let text;
  let flag;
  let playerScore = 0;
  let computerScore = 0;

  function update() {
    playerSelection = this.textContent;
    [text, flag] = playRound(playerSelection, getComputerSelection());
    res.textContent = text;

    switch (flag) {
      case 0:
        playerScore++;
        break;
      case 2:
        computerScore++;
        break;
      default:
        break;
    }

    playerScoreDiv.textContent = "Your score: " + playerScore;
    computerScoreDiv.textContent = "Computer score: " + computerScore;

    if (playerScore == 5) {
      alert("You won 5 times! You are the final winner!");
    } else if (computerScore == 5) {
      alert("Computer won 5 times! Computer is the final winner!");
    }
  }

  rockBtn.addEventListener("click", update);
  paperBtn.addEventListener("click", update);
  scissorsBtn.addEventListener("click", update);
}

playGame();
