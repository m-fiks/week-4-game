'use strict';
//variables
let winCounter=0;
let loseCounter=0;
//if playerScore===randomNumber, win, wincounter++, reset, etc.
let playerScore=0;
let playerGameScore=0;
let crystalButton="";
let purpleButton="";
let blueButton="";
let greenButton="";
const numberArray= [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];
const buttonValue= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

$("#win-counter").append(winCounter);
$("#lose-counter").append(loseCounter);

//initialize game
const clickToStart = function(){
    let randomNumber = numberArray[Math.floor(Math.random() * numberArray.length)];
    // console.log(randomNumber);
    $('.number-generated').text(randomNumber);
    //set player score to 0 and display it
    playerScore=0;
    $('.total-score').append(playerScore);
    //jewel buttons get new values
    crystalButton=[Math.floor(Math.random()*buttonValue.length)];
    purpleButton=[Math.floor(Math.random()*buttonValue.length)];
    blueButton=[Math.floor(Math.random()*buttonValue.length)];
    greenButton=[Math.floor(Math.random()*buttonValue.length)];
    console.log(parseInt(crystalButton[0]), parseInt(purpleButton[0]), parseInt(blueButton[0]), parseInt(greenButton[0]));
};

$('.btn-success').click(clickToStart);

// assign value to image buttons
$('#blue-gem').click(function() {
    playerGameScore += parseInt(playerScore) + parseInt(blueButton);
$('.total-score').text((parseInt(playerGameScore)));
});
$('#crystal-gem').click(function() {
    playerGameScore += parseInt(playerScore) + parseInt(crystalButton);
$('.total-score').text((parseInt(playerGameScore)));
});
$('#purple-gem').click(function() {
    playerGameScore += parseInt(playerScore) + parseInt(purpleButton);
$('.total-score').text((parseInt(playerGameScore)));
});
$('#green-gem').click(function() {
    playerGameScore += parseInt(playerScore) + parseInt(greenButton);
$('.total-score').text((parseInt(playerGameScore)));
});

// let gemPush = function (){
//     playerGameScore += 

// }



// $('img').click(function (){
//     if ()
// })

// const test = function () {
//     console.log('werk werk werk werk werk');
// }

// $('#crystal-gem, #blue-gem, #purple-gem, #green-gem').click(test);
//if press crystal-gem store crystalButton in a value, etc, etc
//if player presses any button add that value to playerScore
//if click on any img-responsive add value of corresponding crystal

$('#crystal-gem').click(function(){
    
})

