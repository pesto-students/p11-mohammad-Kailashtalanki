// Your solution goes here
function playGuessingGame(numToGuess, totalGuesses = 10) {
  let numberOfTries = -1;
  let prevNumber = -1;
  for (let i = 0; i < totalGuesses; i += 1) {
    numberOfTries += 1;
    if (prevNumber == numToGuess) {
      return numberOfTries;
    }
    let number = -1;
    if (i == 0) {
      number = prompt("Enter a number between 1 and 100.");
      prevNumber = number;
    } else if (prevNumber < numToGuess) {
      number = prompt(`${prevNumber} is too small. Guess a larger number.`);
      prevNumber = number;
    } else if (prevNumber > numToGuess) {
      number = prompt(`${prevNumber} is too large. Guess a smaller number.`);
      prevNumber = number;
    } else if (isNaN(prevNumber)) {
      number = prompt("Please enter a number.");
      prevNumber = number;
    }
  }
}
