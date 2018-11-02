// Computer selects a random number  [18..120]
// Computer assigns random values to each of 4 crystals [1..12]
// User clicks on each crystal to reveal each value
// User wins when they reach the random number without
//     going above the number. 
// Users looses if they go above the number.
// Game resets after User wins or looses
// Wins and losses are displayed

// Letters and Variables.

var cpuGuess;       // Computer's random number
var userTotal = 0; // User's Accumulating Score
var wins = 0;       // Total wins
var losses = 0;     // Total losses

// Generate computer's choice
// var cpuSelects = cpuGuess[Math.floor(Math.random() * cpuGuess.length)];
// console.log(cpuSelects);

    
// Generate Computer's random number
function randomNum() {
    cpuGuess = Math.floor(Math.random() * (120-18)) + 20;
    console.log(cpuGuess);
}

// Generate Crystal Values
function crystalValue () {
    for (var i = 0; i < 4; i++){
        var crystalID = Math.floor(Math.random() * 12) +1;
        console.log(crystalID);
        $("#crystal" + i).attr('value', crystalID);
    }

// Run Random Number function
    randomNum();
    userTotal = 0;
    $("random").text(randomNum);
    $("#userTotal").text(userTotal);
}

crystalValue();

$(".button").click(function(){
    userTotal += parseInt($(this).val());
    $("#userTotal").text(userTotal);

    if (userTotal === randomNum) {
        wins++;
        console.log("Winner Winner Chicken Dinner");
        $("#wins").text(wins);
        $("#userTotal").text(userTotal);
        setTimeout (function() {
            crystalValue();
        }, 1);
    }

    if(userTotal > randomNum) {
        losses++;
        console.log("Computer wins. Better luck next time!");
        $("#losses").text(losses);
        $("#userTotal").text(userTotal);
        setTimeout (function() {
            alert("Computer wins. Better luck next time!");
        }, 1);
        setTimeout (function() {
            crystalValue();
        }, 1);
    }
});

crystalValue();