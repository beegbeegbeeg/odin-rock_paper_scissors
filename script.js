let humanScore = 0;
let computerScore = 0;
let round = 0;
let playingGame = true;

const gameMessage = document.querySelector("#gameMessage");

const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorsButton = document.querySelector("#Scissors");
const restartButton = document.querySelector("#Restart");

const score = document.querySelector("#score");


rockButton.addEventListener("click", () => { playRound("rock") });
paperButton.addEventListener("click", () => { playRound("paper") });
scissorsButton.addEventListener("click", () => { playRound("scissors") });
restartButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    round = 0;
    playingGame = true;
    score.textContent = "";
    gameMessage.textContent = "";
});



function printMessage(message) {
    gameMessage.textContent = message;
}

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    return ["rock", "paper", "scissors"][choice];
}
function updateScore(playerWin, computerWin) {
    round += 1;
    humanScore += playerWin;
    computerScore += computerWin;

    if (computerScore > humanScore && round == 5) {
        score.textContent = "Final score! puny human: " + humanScore + " MIGHTY COMPUTER: " + computerScore + ".";
        playingGame = false;
        return;
    }
    if (computerScore == 5 && humanScore <= 5) {
        score.textContent = "Final score! puny human: " + humanScore + " MIGHTY COMPUTER: " + computerScore + ".";
        playingGame = false;
        return;
    }
    if (computerScore <= 5 && humanScore == 5) {
        score.textContent = "Final score... human: " + humanScore + " computer: " + computerScore + ".";
        playingGame = false;
        return;
    }

    // the computer cheats a little bit with the best of 5 or up to 5
    if (round < 5)
        score.textContent = "score (round " + round + " of 5) Human: " + humanScore + " Computer: " + computerScore;
    else
        score.textContent = "score (first to 5 wins) Human: " + humanScore + " Computer: " + computerScore;

}
function playRound(humanChoice) {
    if (!playingGame)
        return;
    const computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        printMessage("TIE, I WIN!!! you also win. " + humanChoice + " is the same as " + computerChoice + ".");
        updateScore(1, 1);
    }
    if (humanChoice == "paper" && computerChoice == "rock") {
        printMessage("You win this time... " + humanChoice + " beats " + computerChoice + ".");
        updateScore(1, 0);
    }
    if (humanChoice == "paper" && computerChoice == "scissors") {
        printMessage("I WIN!!! your puny " + humanChoice + " has no chance against my sharp " + computerChoice + "!");
        updateScore(0, 1);
    }
    if (humanChoice == "rock" && computerChoice == "scissors") {
        printMessage("You win this time... " + humanChoice + " beats " + computerChoice + ".");
        updateScore(1, 0);
    }
    if (humanChoice == "rock" && computerChoice == "paper") {
        printMessage("I WIN!!! your dull " + humanChoice + " has no chance against my sleek " + computerChoice + "!");
        updateScore(0, 1);
    }
    if (humanChoice == "scissors" && computerChoice == "paper") {
        printMessage("You win this time... " + humanChoice + " beats " + computerChoice + ".");
        updateScore(1, 0);
    }
    if (humanChoice == "scissors" && computerChoice == "rock") {
        printMessage("I WIN!!! your brittle " + humanChoice + " have no chance against my strong " + computerChoice + "!");
        updateScore(0, 1);
    }
}


function playGame() {

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection);
        humanScore += result[0];
        computerScore += result[1];
    }
    printMessage("Final score! puny human: " + humanScore + " MIGHTY COMPUTER: " + computerScore + ".");
    if (computerScore > humanScore) {
        printMessage("I win");
    }
}




