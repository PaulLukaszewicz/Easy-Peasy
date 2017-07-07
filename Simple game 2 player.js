/*
Udemy "The Complete JavaScript Course: Build a Real-World Project" 
Instructor: Jonas Schmedtmann
Student: Paul Lukaszewicz
Assignment: Coding Challenge 1

Instructions:
John and a friend invented a simple game where the player with the highest of his height (in centimeters) plus five times his age wins.

1. Create Variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Don't forget that there can be a draw!

*/

var age1 = '';
var height1 = '';
var age2 = '';
var height2 = '';

alert ('Player 1');
age1 = prompt('What is your age?');
if (age1 <= 0) {
    console.log('Error, must be born!');
age1 = prompt('What is your age really?');
} else {
    console.log('Great, thank you!');
}

height1 = prompt('How tall are you in centimeters?');
if (height1 <= 0) {
    console.log('Error, please use positive numbers!');
height1 = prompt('You cannot be a hole, How tall are you?')
} else {
    console.log('Excellent');
}

var player1Score = (Number(age1*5) + Number(height1));

console.log('Player 1 Score: ' + player1Score);

alert ('Player 2');
age2 = prompt('What is your age?')
if (age2 <= 0) {
    console.log('Error, must be born');
    age2 = prompt('Really, this time, what is your age?');
} else {
    console.log('Awesome!');
}

height2 = prompt('How tall are you in CM?');
if (height2 <= 0) {
    console.log('Error, try again');
    height2 = prompt('Height in CM?');
} else {
    console.log('Thanks!');
}

var player2Score = (Number(age2*5) + Number(height2));

console.log('Player 2 Score: ' + player2Score);

if (player1Score < player2Score) {
    alert ('Player 2 Wins!');
    console.log('Player 2 Wins!');
} else if (Number(player1Score) > Number(player2Score)) {
    alert ('Player 1 Wins!');
    console.log('Player 1 Wins');
} else {
    alert ('Tie...but how?');
    console.log('What the tie?');
}
