let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let pickOne = ["rock", "paper", "scissors"];
  let randomOne = pickOne[Math.floor(Math.random() * pickOne.length)];
  return randomOne;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      return "You lose! Paper beats rock!";
    } else if (computerSelection === "scissors") {
      playerScore++;
      return "You win! Rock beats scissors!";
    } else {
      return "It is a tie!";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return "You win! Paper beats rock!";
    } else if (computerSelection === "scissors") {
      computerScore++;
      return "You lose! Scissors beats paper!";
    } else {
      return "It is a tie!";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return "You lose! Rock beats scissors!";
    } else if (computerSelection === "paper") {
      playerScore++;
      return "You win! Scissors beats paper!";
    } else {
      return "It is a tie!";
    }
  }
}







function game() {
  for (let i=0; i<5; i++) {
  const computerSelection = computerPlay();
  const playerSelection = prompt("Choose your weapon!Rock, Paper or Scissors?", "Type it bitch!").toLowerCase();
  playRound(playerSelection, computerSelection);
}
if (playerScore === computerScore) {
  alert("It is a fucking tie!");
} else if (playerScore > computerScore) {
  alert("You fucking won!");
} else {
  alert("You lost, lol!");
}
}

console.log(game())