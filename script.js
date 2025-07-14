function getComputerChoice() 
{let randomNumber=Math.random()
if (randomNumber<0.33) return 'rock'
else if(randomNumber<0.66) return 'paper'
else return 'scissors'
}
getComputerChoice()

function getHumanChoice(){
let input= prompt('Rock, Paper or Scissors?');
return input;
}

let humanScore=0
let computerScore=0

function playRound(humanChoice,computerChoice){
    humanChoice= humanChoice.toLowerCase()
    computerChoice= computerChoice.toLowerCase()
      if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return 'tie'}
    else if( 
            (humanChoice==='rock' && computerChoice==='scissors')||
            (humanChoice==='scissors' && computerChoice==='paper') ||
            (humanChoice==='paper' && computerChoice==='rock'))
            {humanScore++
            console.log('Congratulations! You win!') 
            return'human'}
    else{ computerScore++
    console.log('Sorry, you lose!')
    return'computer'}
    }

function playGame(){
    let humanScore=0
    let computerScore=0

    for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

     console.log(`Round ${i + 1}: You chose ${humanChoice}, Computer chose ${computerChoice}`);
    let result = playRound(humanChoice, computerChoice);

    if (result === 'human') humanScore++;
    else if (result === 'computer') computerScore++;}
     console.log(`Final score - You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log('You won the game! 🎉');
  } else if (computerScore > humanScore) {
    console.log('Computer won the game! 🤖');
  } else {
    console.log('The game is a tie! 🤝');
  }
}

playGame();

