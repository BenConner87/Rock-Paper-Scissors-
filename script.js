
// cache DOM
const pScore = document.querySelector('.p-score');
const cScore = document.querySelector('.r-score');
const rockButt = document.querySelector('.rock-button');
const paperButt = document.querySelector('.paper-button');
const scissorsButt = document.querySelector('.scissors-button');
const results = document.querySelector('.results-text');

let playerSelection = '';
let tempPlayerScore = 0;
let tempComputerScore = 0;

// function to generate random choice for computer
function computerPlay() {
    let random = ['rock', 'paper', 'scissors'];
    return random[Math.floor(Math.random() * random.length)];
}

// rock button listener 
rockButt.addEventListener('click', function() {
    playerSelection = 'rock';
    computerSelection = computerPlay();
    if (computerSelection === 'paper') {
        tempComputerScore++;
        cScore.innerHTML = tempComputerScore;
    }   else {
        tempPlayerScore++;
        pScore.innerHTML = tempPlayerScore;
    }
    roundResults();
})

//paper event listener
paperButt.addEventListener('click', function() {
    playerSelection = 'paper';
    computerSelection = computerPlay();
    if (computerSelection === 'scissors') {
        tempComputerScore++;
        cScore.innerHTML = tempComputerScore;
    }   else {
        tempPlayerScore++;
        pScore.innerHTML = tempPlayerScore;
    }
    roundResults();
})

// scissor event listener
scissorsButt.addEventListener('click', function() {
    playerSelection = 'scissors';
    computerSelection = computerPlay();
    if (computerSelection === 'rock') {
        tempComputerScore++;
        cScore.innerHTML = tempComputerScore;
    }   else {
        tempPlayerScore++;
        pScore.innerHTML = tempPlayerScore;
    }
    roundResults();
})

// function to show results after 5 rounds and clear score
function roundResults() {
    if (pScore.innerHTML >= 5) {
        results.innerHTML = 'You WIN!'
        tempPlayerScore = 0;
        pScore.innerHTML = tempPlayerScore;
        tempComputerScore = 0;
        cScore.innerHTML = tempComputerScore;

    } else if (cScore.innerHTML >= 5) {
        results.innerHTML = 'You LOSE!'
        tempPlayerScore = 0;
        pScore.innerHTML = tempPlayerScore;
        tempComputerScore = 0;
        cScore.innerHTML = tempComputerScore;
    } else {
        results.innerHTML = '';  
  }
}

