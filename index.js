// declare and log
let favouriteFood = "pizza";
console.log(favouriteFood)

// basic comparison
let age = 20;
if (age >= 18) {
    age = "diff number"
}
console.log(age)

// the guessing game
let secretNumber = 22;
let userGuess = prompt("Guess the secret Number");
if (userGuess == secretNumber) {
    console.log("correct")
} else {
    console.log("incorrect")
}


// simple math test
let userNumberOne = prompt ("provide a number");
let userNumberTwo = prompt ("provide a different number for userNumberTwo");
let sum = userNumberOne + userNumberTwo;
console.log(sum);

// whats the weather
let temperature = 24;
if (temperature <= 0){
    console.log("cold")
} else if (temperature > 0 && temperature <= 20) {
    console.log("warm")
} else {
    console.log("hot")
}