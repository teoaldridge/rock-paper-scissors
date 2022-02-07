const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let message = document.querySelector("#message");
let playerResult = document.querySelector("#playerResult");
let computerResult = document.querySelector("#computerResult");

let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;

//function computerTurn:
// selects a random option, 
//displays the computer selection image, 
//and returns the computerSelection 

function computerTurn() {
  let gameChoices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * gameChoices.length);
  computerSelection = gameChoices[random];
  randomImageSource = "images/" + computerSelection + ".jpg";
  document.getElementById("computerSelectionImage").src = randomImageSource;
  return computerSelection;
}

//function playerTurn:
//gets the selected option from the buttons on the interface, 
//activates the computerTurn()
//and the playRound() functions on click of a button,
//so they get acivated at the same time;
//identifies the playerSelection;
//displays the player selection image;

function playerTurn() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let computerSelection = computerTurn();
      playerSelection = button.id;
      playerImageSource = "images/" + playerSelection + ".jpg";
      document.getElementById("playerSelectionImage").src = playerImageSource;

      playRound(playerSelection, computerSelection);
    })
  })
}
playerTurn();


//function playRound:
//gets the values of computerSelection and playerSelection from the 
//computerTurn and playerTurn functions;
//compares the choices; 
//changes the message to say who won;
//displays the new score;
//returns the results, with one point added to the winner's score;
//announces the winner when one of the players has 5 points,
//and sets the scores back to 0;

function playRound(playerSelection, computerSelection) {

  if (computerSelection === playerSelection) {
    message.textContent = "Draw!";

  } else if (computerSelection === "scissors" && playerSelection == "paper") {

    message.textContent = "Computer wins. Scissors win over paper."
    computerScore++;

  } else if (computerSelection === "paper" && playerSelection == "scissors") {

    message.textContent = "Player wins. Scissors win over paper.";
    playerScore++;

  } else if (computerSelection === "rock" && playerSelection == "paper") {

    message.textContent = "Player wins. Paper wins over rock.";
    playerScore++;

  } else if (computerSelection === "paper" && playerSelection == "rock") {

    message.textContent = "Computer wins. Paper wins over rock.";
    computerScore++;

  } else if (computerSelection === "rock" && playerSelection == "scissors") {

    message.textContent = "Computer wins. Rock wins over scissors.";
    computerScore++;

  } else if ("scissors" && playerSelection === "rock") {

    message.textContent = "Player wins. Rock wins over scissors.";
    playerScore++;
  }
  computerResult.textContent = computerScore;
  playerResult.textContent = playerScore;

  if (playerScore === 5) {
    message.textContent = "You won the game! Yay!";
    playerResult.textContent = playerScore;
    computerResult.textContent = computerScore;
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    message.textContent = "Game over. You lost!";
    playerResult.textContent = playerScore;
    computerResult.textContent = computerScore;
    playerScore = 0;
    computerScore = 0;
  }

}

