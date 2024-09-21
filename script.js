
const maxGuesses = 5;
let remainingGuesses = maxGuesses;
let randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
let hasWon = false; // Flag to check if the user has won

// The scrpt for the game:
window.onload = () => {
    while (remainingGuesses > 0 && !hasWon) {
        // Get user guess
        let userGuess = prompt(`Guess a number between 1 and 100. You have ${remainingGuesses} guesses left:`);

        // If user cancels the prompt, exit the game
        if (userGuess === null) {
            alert("Game canceled.");
            break;
        }

        // Convert user input to a number
        userGuess = parseInt(userGuess, 10);

        // Validate the input
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            alert("Please enter a valid number between 1 and 100.");
            continue;
        }

        // Check the user's guess
        if (userGuess === randomNumber) {
            hasWon = true;
            document.getElementById('result').innerHTML = `Congratulations! You guessed the correct number: ${randomNumber}`;
        } else if (userGuess < randomNumber) {
            alert("Too low! Try again.");
        } else {
            alert("Too high! Try again.");
        }

        // Decrease the remaining guesses
        remainingGuesses--;

        // Update remaining guesses in the DOM
        document.getElementById('remaining').textContent = remainingGuesses;

        // Check if the user is out of guesses
        if (remainingGuesses === 0 && !hasWon) {
            document.getElementById('result').innerHTML = `Sorry, you've run out of guesses. The correct number was ${randomNumber}.`;
        }
    }
};