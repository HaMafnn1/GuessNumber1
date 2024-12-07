// Get references to the DOM elements
const submitBtn = document.getElementById('submit-btn');
const guessInput = document.getElementById('guess');
const messageDiv = document.getElementById('message');
const attemptsDiv = document.getElementById('attempts');
const restartBtn = document.getElementById('restart-btn');  // Restart button

// Function to start a new game
function startGame() {
    // Generate a random number between 1 and 20
    numberToGuess = Math.floor(Math.random() * 20) + 1; // Now between 1 and 20
    attempts = 0;

    // Reset the UI
    messageDiv.textContent = '';
    attemptsDiv.textContent = 'Attempts: 0';
    guessInput.value = '';
    guessInput.disabled = false; // Enable input field
    submitBtn.disabled = false; // Enable the submit button
    restartBtn.style.display = 'none'; // Hide the restart button
}

// Function to handle the guessing logic
let numberToGuess;
let attempts;

submitBtn.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) { // Range updated to 1-20
        messageDiv.textContent = "Please enter a valid number between 1 and 20.";
        messageDiv.style.color = "red";
        return;
    }

    attempts++;
    attemptsDiv.textContent = `Attempts: ${attempts}`;

    // Check the guess
    if (userGuess < numberToGuess) {
        messageDiv.textContent = "Too low! Try again.";
        messageDiv.style.color = "blue";
    } else if (userGuess > numberToGuess) {
        messageDiv.textContent = "Too high! Try again.";
        messageDiv.style.color = "blue";
    } else {
        messageDiv.textContent = `Congratulations! You've guessed the number ${numberToGuess} in ${attempts} attempts.`;
        messageDiv.style.color = "green";
        submitBtn.disabled = true; // Disable the submit button
        guessInput.disabled = true; // Disable the input field
        restartBtn.style.display = 'inline-block'; // Show the restart button
    }

    guessInput.value = ''; // Clear input field after each guess
    guessInput.focus(); // Focus on the input field again
});

// Event listener for restart button
restartBtn.addEventListener('click', startGame);

// Start a new game when the page loads
startGame();
