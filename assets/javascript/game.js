// Creates an array that lists out all of the letters of alphabet.
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// win Counter
var winCounter = 0;

// Loses Counter
var loseCounter = 0;

// Number of guesses left
var guessesLeft = 10;

// Empty array to store incorrect guesses
var incorrectArr = [];

var computerGuess = "";
console.log(computerGuess)

// Create a function to start/reset the game
function newGame() {
  //reset important game variables
    // assign computerGuess a new random letter
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)]
    console.log("COMP GUESS: " + computerGuess)
    // reset the incorrectArr
    incorrectArr = [];
    
    // reset guessesLeft back to 10
    guessesLeft = 10;

    // write some information to the page indicating a new game has started
    alert("NEW GAME!")
}

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
  
  // store the user pressed key in a variable
  var userGuess = event.key;
  console.log("UserInput: " + userGuess);
  
    // Check if the user pressed key matches the letter.
    if (userGuess === computerGuess) {
      //if matches increment winCounter by 1.
      winCounter++;
      // and resets guessesLeft to 9
      guessesLeft = 9;
      // reset incorrectArr to an empty array;
      incorrectArr = [];
      //alert user
      alert("You Won!")
      //start a new game newGame()
      newGame();

    } else {
      // if values does not match, decrement guessesCounter by one.
      guessesLeft--;

      // and push it to incorrectArr
      incorrectArr.push(userGuess);
    }

    // when guessesLeft becomes 0, resets guessesLeft to 9, and increment loseCounter by 1, and resets incorrectArr to empty array
    if (guessesLeft === 0) {
      alert("You Lost!")
      loseCounter++;
      newGame();
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




newGame();