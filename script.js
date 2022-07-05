'use strict';

const domMessage = document.querySelector('.message');
const domHighScore = document.querySelector('.highscore');
const domScore = document.querySelector('.score');
const domNumber = document.querySelector('.number');
const domGuess = document.querySelector('.guess');
const domCheck = document.querySelector('.check');

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// domNumber.textContent = secretNumber;

domCheck.addEventListener('click', function () {
  let input = Number(domGuess.value);
  if (!input) {
    domMessage.textContent = '⛔ No Number!';
  } else if (secretNumber === input) {
    domHighScore.textContent = score;
    domNumber.textContent = secretNumber;
    domMessage.textContent = '🎉 Correct Number!';
  } else if (input > secretNumber) {
    if (score > 1) {
      score--;
      domScore.textContent = score;
      domMessage.textContent = '📈 Too High!';
    } else {
      domMessage.textContent = '☠️ You lost the game!';
      score = 0;
      domScore.textContent = 0;
    }
  } else {
    if (score > 1) {
      score--;
      domScore.textContent = score;
      domMessage.textContent = '📉 Too Low!';
    } else {
      domMessage.textContent = '☠️ You lost the game!';
      score = 0;
      domScore.textContent = 0;
    }
  }
});
