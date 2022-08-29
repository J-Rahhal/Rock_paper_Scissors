const buttons = document.querySelectorAll("img");
const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");
const divResult = document.getElementsByClassName("result");
const reset = document.getElementById("reset");
const span = document.getElementById("tie");
const exec = document.getElementById("exec");
let computerScore = 0;
let playerScore = 0;
let tie=0;
let rounds = 0;
buttons.forEach((button) => button.addEventListener("click", game));

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * choice.length);
  return choice[random];
}

function playRound(playerSelection, computerSelection) {
  let result = 0;
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  )
    result = 1;
  else if (
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "paper")
  )
    result = 2;
  else result = 3;
  return result;
}

function game(e) {
  if (rounds !== 5) {
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    if (playRound(playerSelection, computerSelection) == 1) {
      ++playerScore;
      pScore.textContent = playerScore;
    } else if (playRound(playerSelection, computerSelection) == 2) {
      ++computerScore;
      cScore.textContent = computerScore;
    } else {
        ++tie;
      span.textContent = tie;

    }
    rounds++;
  } else {
    alert(Winner(playerScore, computerScore));
    rounds =0;
    playerScore=0;
    computerScore=0;
    tie=0;
    cScore.textContent = computerScore;
    pScore.textContent = playerScore;
    span.textContent = tie;

  }
}

function Winner(player, computer) {
  let winner = "";
  alert("Game over! ");
  if (player > computer)
    winner =
      "You Won! " + "Your Score: " + player + " Computer Score: " + computer;
  else if (player < computer)
    winner =
      "You Lost! " + "Your Score: " + player + " Computer Score: " + computer;
  else
    winner =
      "It's a tie! " + "Your Score: " + player + " Computer Score: " + computer;
  return winner;
}
