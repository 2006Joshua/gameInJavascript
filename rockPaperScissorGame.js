// Run this script using chrome and play the game from the console in the developer options
// This is a rock paper scissors game 


// Setting up the rock paper scissors
let choice = ["Rock", "Paper", "Scissors"]
let rock = choice[0];
let paper = choice[1];
let Scissors = choice[2];

// Start prompts
alert("This is a rock paper scissors game between you and a computer.")
console.log(rock + " = 0", paper + " = 1", Scissors + " = 2");

// Computer's choice
let computerChoice = Math.random() * 3;
computerChoice = Math.floor(computerChoice);

// Human's or your input choice 
let userInput = prompt("Enter any number of your choice between: 0 and 2")
userInput = Number(userInput);

console.log("Game results")
console.log("Computer's choice was: " + computerChoice);
console.log("Your choice was: " + userInput);

// This is the core of the logic of the game.
if (computerChoice === 0 && userInput === 0) {
    console.log("Tie Computer's choice was " + rock + " and so was yours");
}  else if (computerChoice === 1 && userInput === 1) {
    console.log("Tie Computer's choice was " + paper + " and so was yours");
}  else if (computerChoice === 2 && userInput === 2) {
    console.log("Tie Computer's choice was " + Scissors + " and so was yours")
}  else if (computerChoice === 0 && userInput === 1) {
    console.log("You have won. Since the computer's choice was " + rock + " and yet yours was " + paper + ".")
}  else if (computerChoice === 0 && userInput === 2) {
    console.log("Computer has won. Since the computer's choice was " + rock + " and yet yours was " + Scissors + ".")
}  else if (computerChoice === 1 && userInput === 0) {
    console.log("Computer has won. Since the computer's choice was " + paper + " and yet yours was " + rock + ".")
}  else if (computerChoice === 1 && userInput === 2) {
    console.log("You have won. Since the computer's choice was " + paper + " and yet yours was " + Scissors + ".")
}  else if (computerChoice === 2 && userInput === 0) {
    console.log("You have won. Since the computer's choice was " + Scissors + " and yet yours was " + rock + ".")
}  else if (computerChoice === 2 && userInput === 1) {
    console.log("Computer has won. Since the computer's choice was " + Scissors + " and yet yours was " + paper + ".")
}  else {
    console.log("You entered a wrong value, refresh the page and read the instructions.")
}

// Further information reach me at: mwesigwajoshua439@gmail.com