'use strict';

let secretNumber = Math.floor(Math.random() * 21);
let score = 10;
let highscore = 0;

console.log(secretNumber);
document.querySelector('.number').textContent = '?'

document.querySelector('.btn.again').addEventListener('click', function () {
    document.querySelector('body').style.
        backgroundColor = '#222';
    score = 10;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.floor(Math.random() * 21);
    document.querySelector('.number').textContent = '?'
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.guess').value = ''
})

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess || guess < 1 || guess > 20) {
        document.querySelector('.message').textContent = '❌ No Valid Number Entered'
    } else if (guess == secretNumber) {
        document.querySelector('.message').textContent = '👌 Correct!'
        document.querySelector('.number').textContent = secretNumber

        document.querySelector('body').style.
            backgroundColor = '#60b347';
        document.querySelector('.number').style.
            width = '30rem'

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }

    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Try again!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😂 You suck. Try again!'
            document.querySelector('.score').textContent = 0
            document.querySelector('.number').textContent = secretNumber

            document.querySelector('body').style.
                backgroundColor = '#c21919';
            document.querySelector('.number').style.
                width = '30rem'
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Try again!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😂 You suck. Try again!'
            document.querySelector('.score').textContent = 0
            document.querySelector('.number').textContent = secretNumber

            document.querySelector('body').style.
                backgroundColor = '#c21919';
            document.querySelector('.number').style.
                width = '30rem'
        }

    }
});

