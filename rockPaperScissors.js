/* Create a variable called randomNumber
The numbers 0-2 need to stand for rock, paper or scissors
When the randomNumber is chosen it returns rock, paper or scissors
Create a function called getComputerChoice
The RandomNumber is chosen throug the function getComputerChoice */

const options = ["rock", "paper", "scissors"]; 

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

getComputerChoice()

