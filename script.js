//Rock Paper Scissor i console!

const ROCK = 1;
const PAPER = 2;
const SCISSOR = 3;

let humanScore = 0;
let computerScore = 0;

//Datorn väljer Rock paper or scissor
    //Math.random() <33 = Rock >=33 <66 = paper >=66 scissor
function computerChoice(){
    let randomNumber = Math.random();
    if (randomNumber < 0.33){
        return ROCK;
    } else if (randomNumber < 0.66){
        return PAPER;
    } else {
        return SCISSOR; // konvertera valet till integers som representerar valen
    }  
}

function getHumanChoice (event){
    let choice = event.currentTarget.className;
    switch (choice){
        case "rock":
            return ROCK;
        case "paper":
            return PAPER;
        case "scissor":
            return SCISSOR;
        default:
            
    } 
}

//REMOVE ALERTS
//ADD SCORE

function playRound ( humanChoice, computerChoice){
    const humanScoreSpan = document.querySelector(".humanScoreSpan");
    const computerScoreSpan = document.querySelector(".computerScoreSpan");

    if (humanChoice === computerChoice){
        alert("It's a draw! Both gets points"); 
        humanScoreSpan.textContent = `Your score: ${humanScore += 1}`;
        computerScoreSpan.textContent = `Computer score: ${computerScore += 1}`;
    } else if (humanChoice === SCISSOR && computerChoice === PAPER) {
        alert("Scissor beats paper. You get a point!");
        humanScoreSpan.textContent = `Your score: ${humanScore += 1}`;
    } else if (humanChoice === PAPER && computerChoice === ROCK){
        alert("Paper beats Rock. You get a point!");
        humanScoreSpan.textContent = `Your score: ${humanScore += 1}`;
    } else if (humanChoice === ROCK && computerChoice === SCISSOR) {
        alert("Rock beats scissor. You get a point!")
        humanScoreSpan.textContent = `Your score: ${humanScore += 1}`;
    } else if (computerChoice === SCISSOR && humanChoice === PAPER){
        alert("Scissor beats paper. I get a point");
        computerScoreSpan.textContent = `Computer score: ${computerScore += 1}`
    } else if (computerChoice === PAPER && humanChoice === ROCK){
        alert("Paper beats rock. I get a point");
        computerScoreSpan.textContent = `Computer score: ${computerScore += 1}`
    } else if (computerChoice === ROCK && humanChoice === SCISSOR){
        alert("Rock beats scissor. I get a point");
        computerScoreSpan.textContent = `Computer score: ${computerScore += 1}`
    }

}

function playGame(event){
    let human = undefined;
    let computer = undefined;
    computer = computerChoice();
    human = getHumanChoice(event);
    playRound(human, computer);
    }

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", ()=> {
    btn.style.backgroundColor = "grey"
    })
    btn.addEventListener("mouseleave", ()=> {
        btn.style.backgroundColor = "burlywood"
    })
})

buttons.forEach((btn) => {
    btn.addEventListener("click", playGame)
})

