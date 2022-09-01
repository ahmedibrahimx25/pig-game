'use strict';

function diceNumber() {
  let dice = Math.trunc(Math.random() * 6) + 1;
  return dice;
}

var dice = 0;
dice = diceNumber();
document.querySelector('.btn--roll').addEventListener('click', function () {
  diceNumber();
  console.log(dice);
});

const holdBtn = document
  .querySelector('.btn--hold')
  .addEventListener('click', function () {
    console.log('hey');
  });
