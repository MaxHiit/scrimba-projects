// Variables
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// variables to store references to the necessary DOM nodes
const player1Dice = document.querySelector("#player1Dice");
const player2Dice = document.querySelector("#player2Dice");
const player1Scoreboard = document.querySelector("#player1Scoreboard");
const player2Scoreboard = document.querySelector("#player2Scoreboard");
const message = document.querySelector("#message");
const rollBtn = document.querySelector("#rollBtn");
const resetBtn = document.querySelector("#resetBtn");

// function
function showDisplayButton() {
  // Hide the Roll Dice Button and show the Reset Button
  rollBtn.style.display = "none";
  resetBtn.style.display = "inline-block";
}

function reset() {
  message.textContent = "Player 1 turn";
  player1Scoreboard.textContent = 0;
  player2Scoreboard.textContent = 0;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  player2Score = 0;
  player1Score = 0;
  player1Turn = true;
  resetBtn.style.display = "none";
  rollBtn.style.display = "inline-block";
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
}

// click event listener to the Roll Dice Button
rollBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  // Switch turn betweens player
  if (player1Turn) {
    // Update the scores for each player
    player1Score += randomNumber;
    // Display the scores in their scoreboards
    player1Scoreboard.textContent = player1Score;
    // Display the dice number instead of logging it out
    player1Dice.textContent = randomNumber;
    // how which player's turn it is
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    // Update the "message" DOM
    message.textContent = "Player 2 Turn";
  } else {
    // Update the scores for each player
    player2Score += randomNumber;
    // Display the scores in their scoreboards
    player2Scoreboard.textContent = player2Score;
    // Display the dice number instead of logging it out
    player2Dice.textContent = randomNumber;
    // how which player's turn it is
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    //  Update the "message" DOM
    message.textContent = "Player 1 Turn";
    // Update the scores for each player
  }

  // Check if a player has won
  if (player1Score >= 20) {
    // change the message
    message.textContent = "Player 1 has won ! 🥳";
    showDisplayButton();
  } else if (player2Score >= 20) {
    // change the message
    message.textContent = "Player 2 has won ! 🎉";
    showDisplayButton();
  }

  player1Turn = !player1Turn;
});

resetBtn.addEventListener("click", reset);
