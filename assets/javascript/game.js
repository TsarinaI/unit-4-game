// Variables
var crystal = {
    blueCryst: {
        value: 0,
    },
    greenCryst: {
        value: 0,
    },
    purpCryst: {
        value: 0,
    },
    yellowCryst: {
        value: 0,
    }
}


var randomNumber = 0
var yourScore = 0

var wins = 0
var losses = 0


// Functions
// This function helps get random number for the crystals 
var randomValues = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// This function starts and restarts the game
var startGame = function() {
    yourScore = 0;
    randomNumber = randomValues(19, 120);

    crystal.blueCryst.value     = randomValues(1, 15)
    crystal.greenCryst.value    = randomValues(1, 15)
    crystal.purpCryst.value     = randomValues(1, 15)
    crystal.yellowCryst.value   = randomValues(1, 15)

    console.log("Random number:" + randomNumber)
    console.log("Blue: " + crystal.blueCryst.value + " | Green: " + crystal.greenCryst.value + " | Purple: " + crystal.purpCryst.value +" | Yellow: " + crystal.yellowCryst.value)

    $("#randomNumber").text(randomNumber)
    $("#yourScore").text(yourScore)
}

// Function to add clicked values to your Score
var clickValues = function(crystal) {

    yourScore = yourScore + crystal.value;

    console.log("Your Score: " + yourScore)

    $("#yourScore").text(yourScore)

    winOrLose();

}

// Checking to see if user has won or lost game
var winOrLose = function() {
    // See if current score is larger than random number
    if(yourScore > randomNumber) {
        alert("Sorry, you lose!")
        losses++;
        $("#losses").text(losses);
        startGame();
    }

    else if(yourScore === randomNumber) {
        alert("You won! Congratulations!")
        wins++;
        $("#wins").text(wins);
        startGame();
    }
}

// Process
startGame()

$("#randomNumber").text(randomNumber)
$("#yourScore").text(yourScore)


$("#blue").click(function() {

    clickValues(crystal.blueCryst);
})

$("#green").click(function() {

    clickValues(crystal.greenCryst);
})

$("#purple").click(function() {

    clickValues(crystal.purpCryst);
})

$("#yellow").click(function() {

    clickValues(crystal.yellowCryst);
})