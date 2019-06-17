function computerPlay () {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 2) {
      return 'Rock';
    } else if (randomChoice === 1) {
      return 'Paper';
    } else {
      return 'Scissors';
    }
  }
  
function playRound(playerSelection, computerSelection) {
  let playerSelectionFormatted = playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase();
  if (playerSelectionFormatted === computerSelection) {
    return 'Tie! You both picked ' + playerSelectionFormatted;
  } else {
    if (playerSelectionFormatted === 'Rock') {
      if (computerSelection === 'Scissors')  {
        return 'You Win! Rock beats Scissors';
      } else { //computer chose Paper
        return 'You Lose! Paper beats Rock';
      }
    } else if (playerSelectionFormatted === 'Paper') {
      if (computerSelection === 'Rock') {
        return 'You Win! Paper beats Rock';
      } else { //computer chose Scissors
        return 'You Lose! Scissors beat Paper';
      }
    } else { //player chose Scissors
      if (computerSelection === 'Paper') {
        return 'You Win! Scissors beat Paper';
      } else { //computer chose Rock
        return 'You Lose! Rock beats Scissors';
      }
    }
  }
}

function playGame() {
  if (gameOn === true) {
    return;
  } else {
    score = [0, 0];
    gameOn = true;
    roundCount = 1;
  }
}

function getGameResult() {
  if (score[0] > score[1]) {
    return "Player Wins!";
  } else if (score[0] < score[1]) {
    return "Computer Wins!";
  } else {
    return "Tie!";
  }
}

var gameOn = false;
var score = [0, 0];
var roundCount = 0;

var startButton = document.querySelector('#start');
var resetButton = document.querySelector('#reset');

startButton.addEventListener('click', () => {
  playGame();
});

resetButton.addEventListener('click', () => {
  score = [0, 0];
  roundCount = 0;
  gameOn = false;
  document.querySelector("#scoreboard").textContent = score[0] + ':' + score[1];//update scoreboard
  document.querySelector("#gameResult").textContent = '';
  document.querySelector("#matchResult").textContent = '';
});

var playerRockButton = document.querySelector('#playerRock');
var playerPaperButton = document.querySelector('#playerPaper');
var playerScissorsButton = document.querySelector('#playerScissors');

function runRound(playerChoice) {
  console.log(gameOn);
  if (gameOn === false) return; //exit function if game is not on
  let result = playRound(playerChoice, computerPlay());
  document.querySelector("#gameResult").textContent = result;
  roundCount++;
    
  if (result[4] === 'L') {
    score[1]++;
  } else if (result[4] === 'W') {
    score[0]++;
  }
  
  document.querySelector("#scoreboard").textContent = score[0] + ':' + score[1];//update scoreboard
  
  if (roundCount > 5) {
    gameOn = false;
    document.querySelector("#matchResult").textContent = getGameResult();
  }
}

playerRockButton.addEventListener('click', () => runRound('Rock'));
playerPaperButton.addEventListener('click', () => runRound('Paper'));
playerScissorsButton.addEventListener('click', () => runRound('Scissors'));

