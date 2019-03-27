// Creates an array that lists out all of the letters of alphabet.
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// win Counter
var winCounter = 0;

// Loses Counter
var loseCounter = 0;

// Number of guesses left
var guessesLeft = 9;

// Empty array to store incorrect guesses
var incorrectArr = [];



// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

  // randomly select a letter from alphabet array.
  var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)]
  console.log(computerGuess)

  // store the user pressed key in a variable
  var userGuess = event.key;
  console.log(userGuess);
  
    // Check if the user pressed key matches the letter.
    if (userGuess === computerGuess) {
      //if matches increment winCounter by 1.
      winCounter++;
      // and resets guessesLeft to 9
      guessesLeft = 9;
      // reset incorrectArr to an empty array;
      incorrectArr = [];

    } else {
      // if values does not match, decrement guessesCounter by one.
      guessesLeft--;

      // and push it to incorrectArr
      incorrectArr.push(userGuess);
    }

    // when guessesLeft becomes 0, resets guessesLeft to 9, and increment loseCounter by 1, and resets incorrectArr to empty array
    if (guessesLeft === 0) {
      guessesLeft = 9;
      loseCounter++;
      incorrectArr = [];
    }
  
  //console.log to debug
  console.log("Wins: " + winCounter);
  console.log("Loses: " + loseCounter);
  console.log("Guesses left: " + guessesLeft);

  //DOM manipulation
  var winHTML = document.getElementById("wins");
  winHTML.textContent = winCounter;

  var loseHTML = document.getElementById("loses");
  loseHTML.textContent = loseCounter;

  var guessHTML = document.getElementById("guesses");
  guessHTML.textContent = guessesLeft;

  var incorrectHTML = document.getElementById("incorrect");
  incorrectHTML.textContent = incorrectArr

}