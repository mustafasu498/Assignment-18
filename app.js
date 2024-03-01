// chapter no 9/11
// Q1
var cityName = prompt("Please enter a city name:");

if (cityName && "karachi") {
    console.log("Welcome to the city of lights");
} else {
    console.log("Welcome to " + cityName);
}
// Q2
var gender = prompt("Please enter your gender (male/female):");
if (gender === "male") {
    console.log("Good Morning Sir.");
} else if (gender === "female") {
    console.log("Good Morning Ma'am.");
} else {
    console.log("Invalid gender entered.");
}
// Q3
var color = prompt("Please enter the color of the traffic signal (Red/Yellow/Green):");

color = color.toLowerCase();

if (color ==="red") {
    console.log("Must Stop");

}
else if( color ==="yellow"){
    console.log("Ready to move");

}
else if(color ==="green"){
    console.log("Move now");
}
else{
    console.log("Invalid color entered. Please enter Red, Yellow, or Green.");

}
// Q4
var remainingFuel = +prompt("Please enter the remaining fuel in your car in liters:");

if (remainingFuel < 0.25) {
    console.log("Please refill the fuel in your car");
} else {
    console.log("You have enough fuel in your car");
}
// Q5
var subject1 = +prompt("Enter your english marks");
var subject2 = +prompt("Enter your urdu marks");
var subject3 = +prompt("Enter your maths marks");
var subject4 = +prompt("Enter your islamiyat marks");
var total = (subject1+subject2+subject3+subject4)/(400)*100;

if(total >= 80 && total < 100){
    alert("A+")
}
else if(total >= 70 && total < 80){
    alert("A")
}
else if(total >= 60 && total < 70){
    alert("B")
}
else if(total >= 50 && total < 70){
    alert("C")
}
else if(total >= 40 && total < 80){
    alert("D")
}
else if(total >= 33 && total < 40){
    alert("FAil")
}
else{
    alert("Error")
}
// Q6

var secretNumber = Math.floor(Math.random() * 10) + 1;

var userGuess = +prompt("Guess the secret number between 1 and 10");

if (userGuess === secretNumber) {
    console.log("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    console.log("Close enough to the correct answer");
} else {
    console.log("Sorry, incorrect guess. The correct answer was " + secretNumber);
}
// Q7
var number = +prompt("Enter a number:");

if (number % 3 === 0) {
    console.log(number + " is divisible by 3");
} 
 else {
    console.log(number + " is not divisible by 3");
}
// Q8
var number = +prompt("Enter a number:");

if (number % 2 === 0) {
    console.log(number + " is an even number");
} 
else {
    console.log(number + " is an odd number");
}
// Q9

var temperature = parseFloat(prompt("Enter the temperature:"));

if (temperature > 40) {
    console.log("It is too hot outside.");
} else if (temperature > 30) {
    console.log("The Weather today is Normal.");
} else if (temperature > 20) {
    console.log("Today’s Weather is cool.");
} else if (temperature > 10) {
    console.log("OMG! Today’s weather is so Cool.");
} else {
    console.log("The temperature is extremely cold.");
}

// Q10

var num1 = parseFloat(prompt("Enter the first number:"));

var num2 = parseFloat(prompt("Enter the second number:"));

var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;

if (operation === '+') {
    result = num1 + num2;
}
 else if (operation === '-') {
    result = num1 - num2;
} 
else if (operation === '*') {
    result = num1 * num2;
}
 else if (operation === '/') {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Cannot divide by zero";
    }
} else if (operation === '%') {
    result = num1 % num2;
} else {
    result = "Invalid operation";
}

console.log("Result: " + result);

// chapter no 12/13

// Q1

var char = prompt("Enter a character:");

var charCode = char.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
    console.log(char + " is a number.");
} else if (charCode >= 65 && charCode <= 90) {
    console.log(char + " is an uppercase letter.");
} else if (charCode >= 97 && charCode <= 122) {
    console.log(char + " is a lowercase letter.");
} else {
    console.log("Invalid input.");
}

// Q2

var num1 = +prompt("Enter the first integer:");

var num2 = +prompt("Enter the second integer:");

if (num1 > num2) {
    console.log("The larger integer is: " + num1);
} 
else if (num2 > num1) {
    console.log("The larger integer is: " + num2);
} 
else {
    console.log("Both integers are equal.");
}

// Q3

var number = +prompt("Enter a number:");
if (number > 0) {
    console.log("The number is positive.");
}
 else if (number < 0) {
    console.log("The number is negative.");
} 
else {
    console.log("The number is zero.");
}

// Q4

var correctPassword = "Secret123";

var enteredPassword = prompt("Enter your password:");

if (enteredPassword === null || enteredPassword === "") {
    console.log("Please enter your password.");
}
 else if (enteredPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
}
 else {
    console.log("Incorrect password.");
}