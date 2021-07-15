// DOM elements
const player1 = document.getElementById('player-0');
const player2 = document.getElementById('player-1');
const playerScore1 = document.getElementById('score-0');
const playerScore2 = document.getElementById('score-1');
const dice = document.getElementById('dice');
const btnNew = document.getElementById('btn-new');
const btnRoll = document.getElementById('btn-roll');
const btnHold = document.getElementById('btn-hold');

let playersScores = [0, 0];
let currentScore = 0;
let currentPlayer = 0;
let playing = true;
const scoreToWin = 50;

// Click on roll button
btnRoll.addEventListener('click', roll);

// Click on hold button
btnHold.addEventListener('click', hold);

// Click on new game button
btnNew.addEventListener('click', newGame);

// Roll the dice
function roll() {

    if (!playing) return;

    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `images/dice-${diceNumber}.png`;

    if (diceNumber === 1) {
        nextPlayer();

        return;
    }

    currentScore += diceNumber;
    document.getElementById(`current-${currentPlayer}`).textContent = currentScore;
}

// Hold current score
function hold() {

    if (!playing || currentScore === 0) return;

    playersScores[currentPlayer] += currentScore;
    document.getElementById(`score-${currentPlayer}`).textContent = playersScores[currentPlayer];

    if (playersScores[currentPlayer] >= scoreToWin) {
        playing = false;
        dice.classList.add('hidden');
        document.getElementById(`player-${currentPlayer}`).querySelector('span').textContent = "Gagné";
        document.getElementById(`player-${currentPlayer}`).querySelector('div').classList.add('hidden');
        document.getElementById(`player-${currentPlayer}`).classList.add('text-green-400');
        document.getElementById(`current-${currentPlayer}`).textContent = 0;

        return;
    }

    nextPlayer();
}

// Start a new game
function newGame() {
    playerScore1.textContent = 0;
    playerScore2.textContent = 0;

    player1.querySelector('span').textContent = "Joueur 1";    
    player1.querySelector('div').classList.remove('hidden');
    player1.classList.remove('font-light', 'text-green-400');
    player1.closest('section').classList.add('bg-gray-50');
    
    player2.querySelector('span').textContent = "Joueur 2";
    player2.querySelector('div').classList.add('hidden');
    player2.classList.add('font-light');
    player2.classList.remove('text-green-400');
    player2.closest('section').classList.remove('bg-gray-50');

    document.getElementById(`current-${currentPlayer}`).textContent = 0;

    dice.classList.add('hidden');

    playersScores = [0, 0];
    currentScore = 0;
    currentPlayer = 0;
    playing = true;
}

// Switch to next player
function nextPlayer() {
    document.getElementById(`current-${currentPlayer}`).textContent = 0;

    player1.classList.toggle('font-light');
    player1.closest('section').classList.toggle('bg-gray-50');
    player1.querySelector('div').classList.toggle('hidden');

    player2.classList.toggle('font-light');
    player2.closest('section').classList.toggle('bg-gray-50');
    player2.querySelector('div').classList.toggle('hidden');

    dice.classList.add('hidden');

    currentPlayer = 1 - currentPlayer; 
    currentScore = 0;
}