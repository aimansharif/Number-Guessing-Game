//create secretNumber

var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number between 1 to 10: "));

//check if guess is right
console.log("Before entering while loop")
while (true) {
    console.log("Entered while loop");
    if (guess === secretNumber) {
        console.log("CORRECT ANSWER");
        alert("CONGRATULATIONS!! YOU WIN THE GAME");
        break;
    }

    //otherwise check if higher
    else if (guess > secretNumber) {
        alert("The number you entered is higher than the secretNumber");
        console.log("Number higher than secretNumber");
        guess = Number(prompt("Enter again: "));
    }
        
    //otherwise check if lower
    else if (guess < secretNumber) {
        alert("The number you entered is lower than the secretNumber");
        console.log("Number lower than secretNumber");
        guess = Number(prompt("Enter again: "));
    }
}

console.log("Exit while loop");


//JavaScript Notes
// == allows comparison by making type correction
// === does not make type correction, both have to be the exact same type 
// in order for the result to be true

// === checks for the value and also the type of the variable
// == checks for the value but does not for the type of the variable