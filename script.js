//1. make randomNumber put out a random number
//2. If randomNumber is smaller than or equal to 0,33 return rock
//3. If randomNumber is larger than or equal to 0,34 and smaller than or equal to 0,66 return paper
//4. If randomNumber is larger than or equal to 0,67 return scissors

//let getComputerChoice = Math.random()

//if (getComputerChoice <= 0,33){console.log("rock")}

//else if (getComputerChoice >= 0,34){console.log("paper")}

//else if (getComputerChoice >= 0,67){console.log("scissors")}

function getComputerChoice() {
    let random = Math.random();
    if (random <= 0.33){return 'rock'}
    else if (random >= 0.34 && random <= 0.66){return 'paper'}
    else if (random >= 0.67){return 'scissors'}
}

console.log(getComputerChoice())