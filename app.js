// chapter no 9 
// Q1
// var cityName = prompt("Please enter a city name:");

// if (cityName && "karachi") {
//     console.log("Welcome to the city of lights");
// } else {
//     console.log("Welcome to " + cityName);
// }
// Q2
// var gender = prompt("Please enter your gender (male/female):");
// if (gender === "male") {
//     console.log("Good Morning Sir.");
// } else if (gender === "female") {
//     console.log("Good Morning Ma'am.");
// } else {
//     console.log("Invalid gender entered.");
// }
// Q3
// var color = prompt("Please enter the color of the traffic signal (Red/Yellow/Green):");

// color = color.toLowerCase();

// if (color ==="red") {
//     console.log("Must Stop");

// }
// else if( color ==="yellow"){
//     console.log("Ready to move");

// }
// else if(color ==="green"){
//     console.log("Move now");
// }
// else{
//     console.log("Invalid color entered. Please enter Red, Yellow, or Green.");

// }
// Q4
var remainingFuel = +prompt("Please enter the remaining fuel in your car in liters:");

if (remainingFuel < 0.25) {
    console.log("Please refill the fuel in your car");
} else {
    console.log("You have enough fuel in your car");
}
var subject1 = +prompt("Enter your english marks");
var subject2 = +prompt("Enter your urdu marks");
var subject3 = +prompt("Enter your maths marks");
var subject4 = +prompt("Enter your islamiyat marks");
var total = (subject1+subject2+subject3+subject4 - 400)/100;
if(total >= 80 && 100){

}