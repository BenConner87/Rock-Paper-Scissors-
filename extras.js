/*

function game() {
    let playerScore = 0
    let computerScore = 0 
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection) 
            if (playRound(playerSelection, computerSelection) == 'Win') {
                playerScore++ 
                console.log('Win');
            } else if (playRound(playerSelection, computerSelection) == 'Lose') {
                computerScore++;
                console.log('Lose');
            } else {
                console.log('Draw')
            }
    }
    
}
console.log(game());

function score(){
    let playerScore = 0
    let computerScore = 0 
    playRound(playerSelection, computerSelection) 
    if (playRound(playerSelection, computerSelection) = 'Win') {
        return playerScore++;
    } else if (playRound(playerSelection, computerSelection) = 'Lose') {
        return computerScore++;       
    }
}

function score(){
    let playerScore = 0
    let computerScore = 0 
    playRound(playerSelection, computerSelection)
    if (playRound(playerSelection, computerSelection) = 'Win') {
        return playerScore++;
    } else if (playRound(playerSelection, computerSelection) = 'Lose') {
        return computerScore++;       
    }
}

console.log(score());

// SOMEONE ELSES GAME BELOW 

*/

function game(){
  const games = 5; // total games 
  let playerPoints = 0; // player points to start
  let computerPoints = 0; // computer points to start

  for(let i = 0; i < games; i++) {
    // get player answer and store in a variable
    let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    // generate computer answer
    function computerPlay() { return (["paper","scissors","rock"])[Math.random() * 3 | 0]; }
    let computerSelection = computerPlay();

    let round = playRound(playerSelection, computerSelection);
    if(round === "wins"){
      playerPoints++;
      console.log("You Win");
    } else if(round === "loses"){
      computerPoints++;
      console.log("You Lose");
    } else if(round === "ties") {
      console.log("tied");
    } 
  }

  if(playerPoints > computerPoints){
    console.log('');
    console.log("Congratulations!  You beat the computer " + playerPoints + " to " + computerPoints);
  } else {
    console.log("Sorry!  You lost to the computer " + computerPoints + " to " + playerPoints);
  }
} // end game();

// play a round and get winner/loser and result and increment winner's points
function playRound(playerSelection, computerSelection) {  
  if (playerSelection == 'rock') {
    if (computerSelection == 'scissors') {
      return 'wins';
    } else if (computerSelection == 'paper') {
      return 'loses';
    } else {
      return 'ties';
    } 
  }
  if (playerSelection == 'paper') {
    if (computerSelection == 'rock') {
      return 'wins';
    } else if (computerSelection == 'scissors') {
      return 'loses';
    } else {
      return 'ties';
    } 
  }
  if (playerSelection == 'scissors') {
    if (computerSelection == 'rock') {
      return 'loses';
    } else if (computerSelection == 'paper') {
      return 'wins';
    } else {
      return 'ties';
    } 
  }
}


// ANOTHER ATTEMPT AT GAME

function game(score) {
    let rounds = 0 
    for (let i = 0; i < rounds; i++) {
    let playerScore = 0;
    let computerScore = 0;
    console.log(playRound(playerSelection, computerSelection));
        if (score = 'Win') {
            playerScore++;
            rounds++;
            console.log(`Win ${playerScore} to ${computerScore} round ${rounds}` );
    }   else if (score = 'Lose') {
            computerScore++;
            rounds++;
            console.log(`Lose ${playerScore} to ${computerScore} round ${rounds}`);
    }   else {
        rounds++
        console.log(`Draw ${playerScore} to ${computerScore} round ${rounds}`);
    }
  }
}
const score = playRound(playerSelection, computerSelection);

console.log(game(score));

// ORIGINAL BELOW

function computerPlay() {
    let random = ['rock', 'paper', 'scissors'];
    return random[Math.floor(Math.random() * random.length)];
}

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