'use strict';
$(document).ready(function(){

    $('#empty-words').hide();

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
let randomNumber="";
const numberArray= [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];
const buttonValue= [1,2,3,4,5,6,7,8,9,10,11,12];

$("#win-counter").append(winCounter);
$("#lose-counter").append(loseCounter);

//win function
const winner = function () {
    alert('You won!!');
    winCounter++;
    $("#win-counter").text(winCounter);
};

//lose function
const loser = function () {
    alert('You lost :(');
    loseCounter++;
    $("#lose-counter").text(loseCounter);
};

// assign value to image buttons
const gemPush = function () {
    $('#blue-gem').click(function() {
        playerGameScore += playerScore + parseInt(blueButton);
    $('#score-counter').text(playerGameScore);
        if (playerGameScore === parseInt(randomNumber)){
            winner();
        } else if (playerGameScore > parseInt(randomNumber)){
            loser();
        }
    });
    $('#crystal-gem').click(function() {
        playerGameScore += playerScore + parseInt(crystalButton);
    $('#score-counter').text(playerGameScore);
        if (playerGameScore === parseInt(randomNumber)){
            winner();
        } else if (playerGameScore > parseInt(randomNumber)){
            loser();
        }
    });
    $('#purple-gem').click(function() {
        playerGameScore += playerScore + parseInt(purpleButton);
    $('#score-counter').text(playerGameScore);
        if (playerGameScore === parseInt(randomNumber)){
            winner();
        } else if (playerGameScore > parseInt(randomNumber)){
            loser();
        }
    });
    $('#green-gem').click(function() {
        playerGameScore += playerScore + parseInt(greenButton);
    $('#score-counter').text(playerGameScore);
        if (playerGameScore === parseInt(randomNumber)){
            winner();
        } else if (playerGameScore > parseInt(randomNumber)){
            loser();
        }
    });
};

//initialize game
const clickToStart = function(){
    $('#score-counter').empty();
    $('#empty-words').show().animate({right:'50px'});
    randomNumber = numberArray[Math.floor(Math.random() * numberArray.length)];
    console.log(randomNumber);
    $('.number-generated').text(randomNumber);
    //jewel buttons get new values
    crystalButton=[Math.floor(Math.random()*buttonValue.length)];
    purpleButton=[Math.floor(Math.random()*buttonValue.length)];
    blueButton=[Math.floor(Math.random()*buttonValue.length)];
    greenButton=[Math.floor(Math.random()*buttonValue.length)];
    console.log(parseInt(crystalButton), parseInt(purpleButton), parseInt(blueButton), parseInt(greenButton));
    gemPush();
};

$('.btn-success').click(clickToStart);

// const test = function () {
//     console.log('werk werk werk werk werk');
// }
//if statement if playerGameScore === randomNumber is a win
// if playerGameScore > randomNumber is a lose
//else continue playing
//need end game function



// ('img').click(function(){
//     if (playerGameScore === parseInt(randomNumber)){
//         winner();
//     } else if (playerGameScore > parseInt(randomNumber)){
//         loser();
//     }
// });

// ('#crystal-gem').click(function(){
//     if (playerGameScore == randomNumber){
//         console.log('win');
//     } else if (playerGameScore > randomNumber){
//         console.log('lose');
//     }
// });
// ('#purple-gem').click(function(){
//     if (playerGameScore == randomNumber){
//         console.log('win');
//     } else if (playerGameScore > randomNumber){
//         console.log('lose');
//     }
// });
// ('#green-gem').click(function(){
//     if (playerGameScore == randomNumber){
//         console.log('win');
//     } else if (playerGameScore > randomNumber){
//         console.log('lose');
//     }
// });


//end doc ready func
});

