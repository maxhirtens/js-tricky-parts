function guessingGame() {
  num = Math.floor(Math.random() * 100);
  let count = 0;
  return function game(guess) {
    count++;
    if (guess > num) {
      return `${guess} is too high`;
    } else if (guess < num) {
      return `${guess} is too low`;
    } else {
      return `You win! You found ${num} in ${count} guesses.`;
    }
  };
}
let game = guessingGame();
console.log(game(49));

module.exports = { guessingGame };
