//Rock Paper Scissor i console!



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

function getHumanChoice (){
    let choice = prompt("Rock, paper or scissor?", "Choose wisely");
    switch (choice.toLowerCase()){
        case "rock":
            return ROCK;
        case "paper":
            return PAPER;
        case "scissor":
            return SCISSOR;
        default:
            alert("Not a valid choice. Write only rock, paper or scissor. Reload and try again")
    }
    
}

function playRound ( humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        alert("It's a draw! Both gets points");
        humanScore += 1;
        copmuterScore += 1;
    } else if (humanChoice === SCISSOR && computerChoice === PAPER) {
        alert("Scissor beats paper. You get a point!");
        humanScore += 1;
    } else if (humanChoice === PAPER && computerChoice === ROCK){
        alert("Paper beats Rock. You get a point!");
        humanScore += 1;
    } else if (humanChoice === ROCK && computerChoice === SCISSOR) {
        alert("Rock beats scissor. You get a point!")
        humanScore += 1;
    } else if (computerChoice === SCISSOR && humanChoice === PAPER){
        alert("Scissor beats paper. I get a point");
        copmuterScore += 1;
    } else if (computerChoice === PAPER && humanChoice === ROCK){
        alert("Paper beats rock. I get a point");
        copmuterScore += 1;
    } else if (computerChoice === ROCK && humanChoice === SCISSOR){
        alert("Rock beats scissor. I get a point");
        copmuterScore += 1;
    }
}

let humanScore = 0;
let copmuterScore = 0;

const ROCK = 1;
const PAPER = 2;
const SCISSOR = 3;
const rounds = 5;

function playGame(){
    let human = undefined;
    let computer = undefined;
    for (i=0; i < rounds; i++){
        computer = computerChoice();
        human = getHumanChoice();
        playRound(human, computer);
    }

    if  (humanScore > copmuterScore){
        alert(`Congratulations! You got ${humanScore} points and I got ${copmuterScore}. You win!`)
    }
    else if (copmuterScore > humanScore){
        alert(`HAHA. I win with ${copmuterScore} to ${humanScore}`);
    }
    else{
        alert(`Phew, a Draw! We both got ${humanScore} points`);
    }

}
    
//Låt spelaren välja
    //validera input
//Printa de olika valen
//Jämför valen
//annonsera vinnaren
//spelet pågår 5 rundor

playGame();

