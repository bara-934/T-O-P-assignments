console.log("Let's play!")
console.log("enter 'playGame()' below :")

let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    computerChoice = computerChoice === 0 ? "rock" :
    computerChoice === 1 ? "paper" :
    "scissors";
    return computerChoice;
}


function playRound(humanChoice, computerChoice){
    let result = humanChoice === computerChoice ? 'noWinner' :
    (humanChoice === "paper" && computerChoice === "rock") ? 'humanWins' :
    humanChoice < computerChoice ? 'computerWins' : 'humanWins';
    return result;
    
}

function playGame(rounds = parseInt(prompt("First to ?: (10 max) "))){
    if (rounds > 10){
        console.log("to much rounds required. Choose a number beetween 1 and 10");
        playGame();
    }
    humanScore = 0;
    computerScore = 0;
    while( humanScore < rounds && computerScore < rounds){
        let humanChoice = prompt("rock, paper, or scissors? ").toLowerCase();
        
        while( humanChoice!== 'rock' && humanChoice!== 'paper'&& humanChoice!== 'scissors'){
            humanChoice = prompt("Impossibke choice! Only Rock, paper and scissors are accepted. Try again or type 'Stop'").toLowerCase();
            if (humanChoice === 'stop' ) return;
        }

        let computerChoice = getComputerChoice()
        if(playRound(humanChoice,computerChoice) === 'humanWins') {console.log(`+1 for you! The score is ${++humanScore} for you and ${computerScore} for the Computer!`)
        } else if (playRound(humanChoice,computerChoice) === 'computerWins') {console.log(`The computer take this round! The score is now ${humanScore} for you and ${++computerScore} for the Computer!`)
        } else console.log(`It's a tie! The score is still ${humanScore} for you and ${computerScore} for the Computer`)
    }

    humanScore === rounds ? alert(`Congrats! You are the winner! SCORE: ${humanScore} - ${computerScore}`): alert('GAME OVER')||console.log(`You lost ${computerScore} to ${humanScore}`);
    return;
}