let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let pickOne = ["rock", "paper", "scissors"];
  let randomOne = pickOne[Math.floor(Math.random() * pickOne.length)];
  return randomOne;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It is a tie! You both picked ${playerSelection}.`
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      return "You lose! Paper beats rock!";
    } else if (computerSelection === "scissors") {
      playerScore++;
      return "You win! Rock beats scissors!";
    } 
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return "You win! Paper beats rock!";
    } else if (computerSelection === "scissors") {
      computerScore++;
      return "You lose! Scissors beats paper!";
    } 
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return "You lose! Rock beats scissors!";
    } else if (computerSelection === "paper") {
      playerScore++;
      return "You win! Scissors beats paper!";
    } 
  }
}







function game() {
  for (let i=0; i<5; i++) {
  const computerSelection = computerPlay();
  const playerSelection = prompt("Choose your weapon! Rock, Paper or Scissors?", "Type it bitch!").toLowerCase();
  console.log(playRound(playerSelection, computerSelection));
}
if (playerScore === computerScore) {
  console.log("It is a fucking draw!");
} else if (playerScore > computerScore) {
  console.log("Dat's ma boi! You fucking won the game!");
} else {
  console.log("You lost the game, lol!");
}
}

console.log(game())