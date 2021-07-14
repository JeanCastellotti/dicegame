const player1 = document.getElementById('player-0');
const player2 = document.getElementById('player-1');
const playerScore1 = document.getElementById('score-0');
const playerScore2 = document.getElementById('score-1');
const dice = document.getElementById('dice');
const btnNew = document.getElementById('btn-new');
const btnRoll = document.getElementById('btn-roll');
const btnHold = document.getElementById('btn-hold');

const playersScores = [0, 0];
let currentScore = 0;
let currentPlayer = 0;

// Roll the dice
function roll() {

}

// Hold current score
function hold() {

}

// Start a new game
function newGame() {

}

// Switch to next player
function nextPlayer() {

}

btnRoll.addEventListener('click', roll);
btnHold.addEventListener('click', hold);
btnHold.addEventListener('click', newGame);