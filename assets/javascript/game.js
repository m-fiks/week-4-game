'use strict';
$(document).ready(function(){
<<<<<<< HEAD
=======
    $('#win-or-lose-col').hide();
>>>>>>> 15dacf0b51e1a0e9fdb0bbad450be44feee5d3ba

//variables
let winCounter=0;
let loseCounter=0;
let updatedLoseCounter="";
let updatedWinCounter="";
let playerScore=0;
let playerGameScore=0;
<<<<<<< HEAD

=======
>>>>>>> 15dacf0b51e1a0e9fdb0bbad450be44feee5d3ba
let crystalButton="";
let purpleButton="";
let blueButton="";
let greenButton="";
let randomNumber="";
const numberArray= [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];
const buttonValue= [1,2,3,4,5,6,7,8,9,10,11];

<<<<<<< HEAD
// $("#win-counter").append(winCounter);
// $("#lose-counter").append(loseCounter);

// const test = function () {
//     console.log('werk werk werk werk werk');
// }
//if statement if playerGameScore === randomNumber is a win
// if playerGameScore > randomNumber is a lose
//else continue playing
//need end game function


//initialize game
const clickToStart = function(){
    $('#score-counter').empty();
    $('#score-counter').text(playerGameScore);
    updatedLoseCounter="";
    updatedWinCounter="";
    playerGameScore=0;
=======
//initialize game
const clickToStart = function(){
    $('#win-or-lose-col').hide().empty();
    $('.gems').show();
    playerGameScore=0;
    $('#score-counter').text(playerGameScore);
    updatedLoseCounter="";
    updatedWinCounter="";
>>>>>>> 15dacf0b51e1a0e9fdb0bbad450be44feee5d3ba
    crystalButton="";
    purpleButton="";
    blueButton="";
    greenButton="";
    randomNumber = numberArray[Math.floor(Math.random() * numberArray.length)];
    //console.log(randomNumber);
    $('.number-generated').text(randomNumber);
    //jewel buttons get new values
    crystalButton= buttonValue[Math.floor(Math.random() * buttonValue.length)] +1;
    purpleButton=buttonValue[Math.floor(Math.random() * buttonValue.length)] +1;
    blueButton=buttonValue[Math.floor(Math.random() * buttonValue.length)] +1;
    greenButton=buttonValue[Math.floor(Math.random() * buttonValue.length)] +1;
<<<<<<< HEAD
    //console.log(blueButton,crystalButton,purpleButton,greenButton);
=======
    console.log(blueButton,crystalButton,purpleButton,greenButton);
>>>>>>> 15dacf0b51e1a0e9fdb0bbad450be44feee5d3ba
};

$('.btn-success').click(clickToStart);

<<<<<<< HEAD
=======

>>>>>>> 15dacf0b51e1a0e9fdb0bbad450be44feee5d3ba
// assign value to image buttons
const gemBluePush = function () {
    $('#blue-gem').click(function() {
        playerGameScore += parseInt(playerScore) + parseInt(blueButton);
        $('#score-counter').text(parseInt(playerGameScore));
            if (playerGameScore === parseInt(randomNumber)){
                winner();
            } else if (playerGameScore > parseInt(randomNumber)){
                loser();
            }
    });
};
gemBluePush();

const gemCrystalPush = function () {
    $('#crystal-gem').click(function() {
        playerGameScore += parseInt(playerScore) + parseInt(crystalButton);
        $('#score-counter').text(parseInt(playerGameScore));

            if (playerGameScore === parseInt(randomNumber)){
                winner();
            } else if (playerGameScore > parseInt(randomNumber)){
                loser();
            }
    });
};
gemCrystalPush();

const gemPurplePush = function() {
    $('#purple-gem').click(function() {
        playerGameScore += parseInt(playerScore) + parseInt(purpleButton);
        $('#score-counter').text(parseInt(playerGameScore));
            if (playerGameScore === parseInt(randomNumber)){
                winner();
            } else if (playerGameScore > parseInt(randomNumber)){
                loser();
            }
    });
};
gemPurplePush();

const gemGreenPush = function () {
    $('#green-gem').click(function() {
        playerGameScore += parseInt(playerScore) + parseInt(greenButton);
        $('#score-counter').text(parseInt(playerGameScore));
            if (playerGameScore === parseInt(randomNumber)){
                winner();
            } else if (playerGameScore > parseInt(randomNumber)){
                loser();
            }
    });
};
<<<<<<< HEAD
=======

>>>>>>> 15dacf0b51e1a0e9fdb0bbad450be44feee5d3ba
gemGreenPush();

//win function
const winner = function () {
<<<<<<< HEAD
    alert('You won!!');
=======
    $('.gems').hide();
    $('#win-or-lose-col').show().append(`<div>You win! <p>Click the start button to play again!</p> </div>`);
>>>>>>> 15dacf0b51e1a0e9fdb0bbad450be44feee5d3ba
    winCounter++;
    //console.log(winCounter);
    updatedWinCounter += winCounter;
    //console.log(parseInt(updatedWinCounter));
    $("#win-counter").text(parseInt(updatedWinCounter));
};

//lose function
const loser = function () {
<<<<<<< HEAD
    alert('You lost');
=======
    $('.gems').hide();
    $('#win-or-lose-col').show().append(`<div>You lose! <p>Click the start button to play again!</p> </div>`);
>>>>>>> 15dacf0b51e1a0e9fdb0bbad450be44feee5d3ba
    loseCounter++;
    //console.log(loseCounter);
    updatedLoseCounter += loseCounter;
    //console.log(parseInt(updatedLoseCounter));
    $("#lose-counter").text(parseInt(updatedLoseCounter));
};

//end doc ready func
});