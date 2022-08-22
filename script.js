function getComputerChoice () {
    //array of choices
    let choice= ['rock', 'paper', 'scissors'];

    //get random number within the range of choice
    let random= Math.floor(Math.random()*choice.length);

    //get random choicse
    return choice[random];

}


function playRound (playerSelection, computerSelection) {
   let result = null ;
    switch(true) {

    case (playerSelection==('rock' ||'Rock' || 'ROCK') && computerSelection== 'scissors'):
    case (playerSelection==('scissors' ||'Scissors' || 'SCISSORS') && computerSelection== 'paper'):
    case (playerSelection==('paper' ||'Paper' || 'PAPER') && computerSelection== 'rock'):
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        result = 1;
        break;

    case (computerSelection=='rock' && playerSelection== ('scissors' ||'Scissors' || 'SCISSORS')):
    case (computerSelection== 'scissors' && playerSelection== ('paper' ||'Paper' || 'PAPER')):
    case (computerSelection == 'paper' && playerSelection== ('rock' ||'Rock' || 'ROCK')):
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        result = 2;
        break;

    default:
        console.log(`It's a Tie! ${playerSelection} and ${computerSelection} are the same!`);
        result = 3;
        break;

   }
   return result;
}

function game () {

    let playerScore = 0;
    let computerScore = 0;
    let winner = null;
    let playerInput = null;
    let computerInput =getComputerChoice();

    //play 5 rounds
    for(let i=0; i<5; i++) {
        playerInput = String(prompt('Rock, Paper or Scissors?'));

        switch(playRound(playerInput, computerInput)) {
            case 1:
                playerScore++;
                break;

            case 2 :
                computerScore++;
                break;

            default:
                break;
        }

        console.log(`Player's Score: ${playerScore} \t\t Computer Score: ${computerScore}`);

    }

    //compare scores to determine winner
    switch(true) {
        case playerScore > computerScore:
            winner = 'You Won The game!';
            break;
        case playerScore < computerScore:
            winner = 'You Lost The Game!';
            break;
        default:
            winner= 'It is a Tie!';
            break;
    }

    return winner;
}


console.log (game());
