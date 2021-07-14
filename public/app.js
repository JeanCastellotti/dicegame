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
let playing = true;

// Click on roll button
btnRoll.addEventListener('click', roll);

// Click on hold button
btnHold.addEventListener('click', hold);

// Click on new game button
btnHold.addEventListener('click', newGame);

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

    document
        .getElementById(`current-${currentPlayer}`)
        .textContent = currentScore;
}

// Hold current score
function hold() {

    if (!playing || currentScore === 0) return;

    playersScores[currentPlayer] += currentScore;

    document
        .getElementById(`score-${currentPlayer}`)
        .textContent = playersScores[currentPlayer];

    if (playersScores[currentPlayer] >= 10) {
        playing = false;
        dice.classList.add('hidden');

        document
            .getElementById(`player-${currentPlayer}`)
            .textContent = "Gagné";
        document
            .getElementById(`player-${currentPlayer}`)
            .classList.add('text-green-400', 'font-bold');

        return;
    }

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