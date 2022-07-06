function computerPlay() {
  let pickOne = ["Rock", "Paper", "Scissors"];
  let randomOne = pickOne[Math.floor(Math.random() * pickOne.length)];
  return randomOne;
}

function playRound(thePlayerSelection, theComputerSelection) {
  /* if (thePlayerSelection === "Rock" && theComputerSelection === "Paper") {
    return "You lose! Paper beats rock!";
  } else if (
    thePlayerSelection === "Rock" &&
    theComputerSelection === "Scissors"
  ) {
    return "You win! Rock beats scissors!";
  } else if (thePlayerSelection === "Rock" && theComputerSelection === "Rock") {
    return "It is a tie!";
  } else if (
    thePlayerSelection === "Paper" &&
    theComputerSelection === "Rock"
  ) {
    return "You win! Paper beats Rock!";
  } else if (
    thePlayerSelection === "Paper" &&
    theComputerSelection === "Scissors"
  ) {
    return "You lose! Scissors beats paper!";
  } else if (
    thePlayerSelection === "Paper" &&
    theComputerSelection === "Paper"
  ) {
    return "It is a tie!";
  } else if (
    thePlayerSelection === "Scissors" &&
    theComputerSelection === "Paper"
  ) {
    return "You win! Scissors beats paper!";
  } else if (
    thePlayerSelection === "Scissors" &&
    theComputerSelection === "Rock"
  ) {
    return "You lose! Rock beats scissors!";
  } else {
    return "It is a tiee!";
  } */
  if (thePlayerSelection === "Rock") {
    if (theComputerSelection === "Paper") {
      return "You lose! Paper beats rock!";
    } else if (theComputerSelection === "Scissors") {
      return "You win! Rock beats scissors!";
    } else {
      return "It is a tie!";
    }
  } else if (thePlayerSelection === "Paper") {
    if (theComputerSelection === "Rock") {
      return "You win! Paper beats rock!";
    } else if (theComputerSelection === "Scissors") {
      return "You lose! Scissors beats paper!"
    } else "It is a tie!"
  } else if (thePlayerSelection === "Scissors") {
    if (theComputerSelection === "Rock") {
      return "You lose! Rock beats scissors!"
    } else if (theComputerSelection === "Paper") {
      return "You win! Scissors beats paper!"
    } else {
      return "It is a die!"
    }
  }
}

const thePlayerSelection = "Rock";
const theComputerSelection = computerPlay();

/* function game() {
    for (let i = 0, i < 5; i++) {
      
    }
  
} */