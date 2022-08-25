let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach(button => button.addEventListener('click', () => {
  const playerSelection = button.innerText.toLowerCase();
  const computerSelection = getComputerChoice();
}));

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}
