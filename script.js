
function computerPlay() {
    let random = ['rock', 'paper', 'scissors'];
    return random[Math.floor(Math.random() * random.length)];
}

function game() {
    const games = 5;
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < games; i++) {
        let playerSelection = prompt('rock, paper, or scissors').toLowerCase();
        function computerPlay() {
            let random = ['rock', 'paper', 'scissors'];
            return random[Math.floor(Math.random() * random.length)]}
        let computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        if (round == 'Win') {
            playerScore++;
            console.log('Win');
        } else if (round == 'Lose') {
            computerScore++;
            console.log('Lose');
        } else {
            console.log('Draw');
        }
    }

    if (playerScore > computerScore) {
        console.log(`You win ${playerScore} to ${computerScore}.`);
    } else {
        console.log(`You lose ${playerScore} to ${computerScore}`);
    }
}

game();


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `Draw`;
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                (playerSelection == 'paper' && computerSelection == 'rock') ||
                (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return `Win`;
    } else {
        return `Lose`;  
    }
}
const playerSelection = prompt('rock, paper, or scissors').toLowerCase();
const computerSelection = computerPlay();







