// Number guessing game in JavaScript without functions
const maxGuesses = 5;
let remainingGuesses = maxGuesses;
let randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
let hasWon = false; // Flag to check if the user has won