console.log("Let's play!\nEnter 'playGame()' below :");

//let's play button disappear and replaced by the game buttons
let humanScore = 0, computerScore = 0;
let rounds;
const announcement = document.createElement("p");
const playground = document.querySelector(".playGround");
const go = document.querySelector("#go");

go.addEventListener('click',()=>{
    
    const ul = document.createElement("ul");
    
    const rock = document.createElement("li");
    rock.classList.add("rock");
    
    const paper = document.createElement("li");
    paper.classList.add("paper");
    
    const scissors = document.createElement("li");
    scissors.classList.add("scissors");
    
    ul.appendChild(rock);
    ul.appendChild(paper);
    ul.appendChild(scissors);
    
    rounds = parseInt(prompt("First to ?: (10 max) "));
    //creates the button with the right name in the u_list
    const lis = ul.querySelectorAll("li");
    lis.forEach((li)=>{
        const button = document.createElement("button");
        button.textContent = `${li.className}`;
        button.id = `${li.className}`;
        button.style.cssText = "padding: 10px 15px; margin: 20px auto;";
        // compte un round pour chaque clique
        button.addEventListener('click',(e)=>{
            let roundsBfWin = humanScore < computerScore ? rounds - computerScore 
                                                         : rounds - humanScore;
            playGame(roundsBfWin,playRound(e.target.id, getComputerChoice()));
        })
        li.appendChild(button);
    })
    
    playground.replaceChild(ul, go);
    
    const announcementTitle = document.createElement("h3");
    announcementTitle.textContent = "Referee annoucements: ";
    announcement.style.cssText = "max-width:550px; border: 2px solid darkblue; border-radius: 5px;";
    announcement.classList.add("announcement");
    document.body.appendChild(announcementTitle);
    document.body.appendChild(announcement);
    announcement.textContent = "Let's play!";
    
})

function getComputerChoice()
{
    let computerChoice = Math.floor(Math.random()*3);
    computerChoice = computerChoice === 0 ? "rock" :
    computerChoice === 1 ? "paper" :
    "scissors";
    return computerChoice;
}

function playRound(humanChoice = 'a', computerChoice = 'a')
{
    let result = (humanChoice === computerChoice) ? 'noWinner' :
    (humanChoice === "paper" && computerChoice === "rock") ? 'humanWins' :
    humanChoice < computerChoice ? 'computerWins' : 'humanWins';
    return result;
}

function playGame (roundsBfWin, playRoundResult){
    announcement.style.border = "2px solid black";
    if (roundsBfWin > 10){
        announcement.textContent = "to much rounds required. Choose a number beetween 1 and 10";
        playGame();
    }
    
    if(roundsBfWin)
    {   
        if(playRoundResult === 'humanWins') {announcement.textContent = `+1 for you! The score is ${++humanScore} for you and ${computerScore} for the Computer!`;
        } else if (playRoundResult === 'computerWins') {announcement.textContent = `The computer take this round! The score is now ${humanScore} for you and ${++computerScore} for the Computer!`;
        } else announcement.textContent = `It's a tie! The score is still ${humanScore} for you and ${computerScore} for the Computer`;

        if (humanScore ===  rounds || computerScore === rounds)
        {
            announcement.textContent = "We have a winner!"
            const ul = document.querySelector("ul")
            const btn = document.createElement("button");
            btn.style.cssText = "padding:30px 30px; font-size: 1.3rem;";
            btn.textContent = "Click Me to see who it is!"
            playground.replaceChild(btn, ul);
            btn.addEventListener('click',()=>{playGame(0,playRound());})
        }
    }
    else
    {
        const btn = document.querySelector("button");
        btn.textContent = "New Game";
        announcement.textContent = (humanScore === rounds) ? `Congrats! You are the winner! SCORE: ${humanScore} - ${computerScore}`: announcement.textContent = `GAME OVER\n\nYou lost ${computerScore} to ${humanScore}`;
        btn.addEventListener('click', () => {location.reload()} );
    } 
}

