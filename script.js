'use strict';

const domMessage = document.querySelector('.message');
const domHighScore = document.querySelector('.highscore');
const domScore = document.querySelector('.score');
const domNumber = document.querySelector('.number');
const domGuess = document.querySelector('.guess');
const domCheck = document.querySelector('.check');
const domAgain = document.querySelector('.again');

const random = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = function (message) {
  domMessage.textContent = message;
};

let secretNumber = random();
let score = 20;
let highscore = 0;

domAgain.addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  domNumber.style.width = '15rem';
  domScore.textContent = score = 20;
  domGuess.value = '';
  displayMessage('Start guessing...');
  domNumber.textContent = '?';
  secretNumber = random();
});

domCheck.addEventListener('click', function () {
  let input = Number(domGuess.value);

  // When there is no input
  if (!input) {
    displayMessage('⛔ No Number!');

    // When player win
  } else if (secretNumber === input) {
    if (score > highscore) {
      highscore = score;
      domHighScore.textContent = highscore;
    }
    domNumber.textContent = secretNumber;
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    domNumber.style.width = '30rem';

    // When guess is wrong
  } else if (secretNumber !== input) {
    if (score > 1) {
      score--;
      domScore.textContent = score;
      let message = input > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      displayMessage(message);
    } else {
      displayMessage('☠️ You lost the game!');
      score = 0;
      domScore.textContent = 0;
    }
  }
});
