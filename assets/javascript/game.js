'use strict';
//variables
let winCounter=0;
let loseCounter=0;
//if playerScore===randomNumber, win, wincounter++, reset, etc.
let playerScore=0;
let crystalButton="";
let purpleButton="";
let blueButton="";
let greenButton="";
const numberArray= [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];

let randomNumber = numberArray[Math.floor(Math.random() * numberArray.length)];
// console.log(randomNumber);
$(".number-generated").text(randomNumber);

$("#win-counter").append(winCounter);
$("#lose-counter").append(loseCounter);

//initialize game
// function clickToStart(){
// };

// $("h1").css("color", "red");
