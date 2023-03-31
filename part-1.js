var rs = require("readline-sync");
function startGame() {
  rs.question("press any key to start ");
}
startGame();

function* randomGenerator() {
  while (true) {
    yield Math.floor(Math.random() * 3) + 1;
  }
}
function* randomLetterGenerator() {
  while (true) {
    yield String.fromCharCode(Math.floor(Math.random() * 3) + 97);
  }
}
const enemyshipLocations = new Set();
const ranlet = randomLetterGenerator();
const gen = randomGenerator();
const inputChecker = new Set();

enemyshipLocations.add(ranlet.next().value + gen.next().value);
enemyshipLocations.add(ranlet.next().value + gen.next().value);

var rs = require("readline-sync");
const readline = require("readline");
const { rejects } = require("assert");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function userInput() {
  return new Promise((resolve, reject) => {
    rl.question("Enter a location to strike ", (input) => {
      input = input.length === 2 ? input : "invalid corodinents";
      let [letter, number] = input;
      letter = (!letter) ? 'Only one valid Letter from A-J': letter;
      letter = /[a-zA-Z]/.test(letter) ? letter : "Only valid Letters";
      letter = letter.toLowerCase();
      letter =
      letter.charCodeAt(0) < 97 || letter.charCodeAt(0) > 99 ? "only letters from A-C" : letter;

      if (letter.length > 1) {
        reject("Must enter a valid letter");
      } else if (isNaN(number)) {
        reject("must enter a valid number");
      } else if (number > 3 || number <= 0) {
        reject("must be a number from 1-3");
      } else {
        input = letter + number;
        resolve(input);
      }
    });
  })
    .then((input) => {

      if (inputChecker.has(input)) {
        console.log("already put that, Miss!");
      } else {
        inputChecker.add(input);
      }

 
      if (enemyshipLocations.has(input)) {
      enemyshipLocations.delete(input);
      console.log(`Hit. You have sunk a battleship. ${enemyshipLocations.size} ship remaining`);
      } else {
      console.log('you have Missed')
      }
    })
    .catch((error) => {
      console.error("Error:", error);
  });
}

async function userLog() {
  await userInput();
  if (enemyshipLocations.size === 0) {
    const answer = rs.keyInYN(
      "You have destroyed all battleships. Would you like to play again? Y/N"
    );
    if (answer) {
      inputChecker.clear();
      enemyshipLocations.add(ranlet.next().value + gen.next().value);
      enemyshipLocations.add(ranlet.next().value + gen.next().value);
      userLog();
    } else {
      rl.close();
      return;
    }
  }
  return userLog();
}
userLog().then((result) => console.log(result));