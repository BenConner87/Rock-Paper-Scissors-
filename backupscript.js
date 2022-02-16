 /*
 function game(playerScore, computerScore) {
    playerRound(playerSelection, computerSelection);
    let playerRound = 0;
    let computerRound = 0;
    for (let i = 0; i < 5; i++)
    if (playerScore > computerScore) {
        playerRound++
        return "WIN"
    } else if (playerScore < computerScore) {
        computerRound++
        return "LOSE"
    }   else return "DRAW"
}
console.log(game(playerScore, computerScore));

    function game(go)
        let score = '';
        let round = [playRound(playerSelection, computerSelection), 
                     playRound(playerSelection, computerSelection),
                     playRound(playerSelection, computerSelection), 
                     playRound(playerSelection, computerSelection), 
                     playRound(playerSelection, computerSelection)];                                  
        for (let i = 0; i < 5; i++) {
            score += round[i] = " ";
        }
    }
       console.log(game(go));    
    
    if (playRound(playerSelection, computerSelection) == 
            `It's a tie! Score ${playerScore} to ${computerScore}`) {
            return `Score ${playerScore} to ${computerScore}`
        } else if (playRound(playerSelection, computerSelection) == 
            `You win! Score ${playerScore} to ${computerScore}.`) {
            playerScore++                                                 
            return `Score ${playerScore} to ${computerScore}.`
        }  else 
            computerScore++
            return `Score ${playerScore} to ${computerScore}.`
        }
    }
        console.log(game());

  /* Write a function that plays a single round of Rock Paper Scissors. 
  The function should take two parameters - the playerSelection and computerSelection - 
  and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK 
    or any other variation).
Important note: you want to return the results of this function call, not console.log() them. 
You’re going to use what you return later on, so let’s test this function by using console.log to 
see the results: 
IF playRound = WIN 
RESULT = playerScore++ and i++
IF playRound = LOSE
RESULT = computerScore++ and i++


function computerPlay() {
    const random = ['rock', 'paper', 'scissors'];
    return Math.floor(Math.random() * random.length);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Draw';
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                (playerSelection == 'paper' && computerSelection == 'rock') ||
                (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return 'Win';
    } else {
        return 'Lose'
    }
}

const computerSelection = computerPlay();
let playerSelection = prompt('rock, paper, or scissors').toLowerCase();
// playerSelection = playerSelection.toLowerCase();

console.log(playRound(playerSelection, computerSelection)); 
*/


let text = ['rock', 'paper', 'scissors'];
const computerSelection = computerPlay(text); 
let playerSelection = prompt('rock, paper, or scissors').toLowerCase();

function computerPlay(text) {
    return text[Math.floor(Math.random() * text.length)];
}
console.log(computerPlay(text));


/
function playRound(playerSelection, computerSelection) {
    let playerScore = 0;
    let computerScore = 0;
    if  (playerSelection == computerSelection){
        return `It's a tie! Score ${playerScore} to ${computerScore}.`
    } else if  
        ((playerSelection == 'rock' && computerSelection == 'Scissor') ||
        (playerSelection == 'paper' && computerSelection == 'Rock') || 
        (playerSelection == 'scissor' && computerSelection == 'Paper')) {
        playerScore++ 
        return `You win! Score ${playerScore} to ${computerScore}.`
    } else 
        computerScore++ 
        return `You lose! Score ${playerScore} to ${computerScore}.`
}
    

