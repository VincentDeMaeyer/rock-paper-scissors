let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let random = Math.random();
    if (random <= 0.33){return 'rock'}
    else if (random >= 0.34 && random <= 0.66){return 'paper'}
    else if (random >= 0.67){return 'scissors'}
}

function getHumanChoice() {
    return prompt('Please enter rock, paper or scissors')
}

function playRound() {
    // Get the choices once per round
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    // Compare choices
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log("You win!");
        humanScore++;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
        console.log("You lose!");
        computerScore++;
    } else {
        console.log("Invalid input! Please enter rock, paper, or scissors.");
    }

    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    console.log('-----------------------------');
}


function playGame(){
    for(let i = 0; i < 5; i++){
    playRound()}
}

playGame()