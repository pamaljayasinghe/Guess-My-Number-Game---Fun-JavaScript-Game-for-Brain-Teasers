'use strict';

let highScore = 0;
let score = 20;
let guessScore = Math.trunc(Math.random() * 20) + 1;
console.log(guessScore);

document.querySelector('.check').addEventListener('click', function () {
  var guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Enter a valid number';
  } else if (guess === guessScore) {
    document.querySelector('.message').textContent = 'correct number';
    if (score > highScore) {
      score === highScore;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess > guessScore) {
    document.querySelector('.message').textContent =
      'Your number is too high!!';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'Your number is too low!!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  guessScore = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#164863';
  document.querySelector('.number').style.color = '#FF7F3E';
});
