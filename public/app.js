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

    if (!currentScore) return;

    document.getElementById(`current-${currentPlayer}`).textContent = 0;
    playersScores[currentPlayer] += currentScore;       
    document.getElementById(`score-${currentPlayer}`).textContent = playersScores[currentPlayer];

    nextPlayer();
}

// Start a new game
function newGame() {

}

// Switch to next player
function nextPlayer() {
    document.getElementById(`current-${currentPlayer}`).textContent = 0;
    player1.classList.toggle('font-light');
    player1.closest('section').classList.toggle('bg-gray-50');
    player2.classList.toggle('font-light');
    player2.closest('section').classList.toggle('bg-gray-50');
    dice.classList.add('hidden');

    currentPlayer = 1 - currentPlayer; 
    currentScore = 0;
}

btnRoll.addEventListener('click', roll);
btnHold.addEventListener('click', hold);
btnHold.addEventListener('click', newGame);