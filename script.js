//Rock Paper Scissor i console!



//Datorn väljer Rock paper or scissor
    //Math.random() <33 = Rock >=33 <66 = paper >=66 scissor
function computerChoice(){
    let randomNumber = Math.random();
    if (randomNumber < 0.33){
        return 1;
    } else if (randomNumber < 0.66){
        return 2;
    } else {
        return 3; // konvertera valet till integers som representerar valen
    }  
}

function getHumanChoice (){
    let choice = prompt("Rock, paper or scissor?", "Choose wisely");
    switch (choice.toLowerCase()){
        case "rock":
            return 1;
        case "paper":
            return 2;
        case "scissor":
            return 3;
        default:
            alert("Not a valid choice. Write only rock, paper or scissor. Reload and try again")
    }
    
}

function playRound ( humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        alert("It's a draw! Both gets points");
        humanScore += 1;
        copmuterScore += 1;
    } else if (humanChoice === 3 && computerChoice === 2) {
        alert("Scissor beats paper. You get a point!");
        humanScore += 1;
    } else if (humanChoice === 2 && computerChoice === 1){
        alert("Paper beats Rock. You get a point!");
        humanScore += 1;
    } else if (humanChoice === 1 && computerChoice === 3) {
        alert("Rock beats scissor. You get a point!")
        humanScore += 1;
    } else if (computerChoice === 3 && humanChoice === 2){
        alert("Scissor beats paper. I get a point");
        copmuterScore += 1;
    } else if (computerChoice === 2 && humanChoice === 1){
        alert("Paper beats rock. I get a point");
        copmuterScore += 1;
    } else if (computerChoice === 1 && humanChoice === 3){
        alert("Rock beats scissor. I get a point");
        copmuterScore += 1;
    }
}

let humanScore = 0;
let copmuterScore = 0;

const rock = 1;
const paper = 2;
const scissor = 3;
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

