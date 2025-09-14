

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    return ["rock", "paper", "scissors"][choice];
}
function getHumanChoice() {
    return prompt("choose rock paper or scissors").toLowerCase();
}



function playRound(humanChoice, computerChoice) {
    let result = [0,0];
    if (humanChoice === computerChoice) {
        console.log("TIE, I WIN!!! you also win. " + humanChoice + " is the same as " + computerChoice + ".");
        result = [1,1];
    }
    if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win this time... " + humanChoice + " beats " + computerChoice + ".");
        result = [1,0];
    }
    if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("I WIN!!! your puny " + humanChoice + " has no change against my sharp " + computerChoice + "!");
        result = [0,1];
    }
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win this time... " + humanChoice + " beats " + computerChoice + ".");
        result = [1,0];
    }
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("I WIN!!! your dull " + humanChoice + " has no change against my sleek " + computerChoice + "!");
        result = [0,1];
    }
    if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win this time... " + humanChoice + " beats " + computerChoice + ".");
        result = [1,0];
    }
    if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("I WIN!!! your brittle " + humanChoice + " have no change against my strong " + computerChoice + "!");
        result = [0,1];
    }
    return result;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection);
        humanScore += result[0];
        computerScore += result[1];
    }
        console.log("Final score! puny Human: " + humanScore + " chad Computer: " + computerScore + ".");
        if(computerScore > humanScore){
            console.log("I win");
        }
}
playGame();