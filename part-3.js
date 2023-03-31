// part-3 

let grid = {
  A: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
  B: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
  C: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
  D: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
  E: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
  F: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
  G: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
  H: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
  I: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
  J: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
}

var rs = require('readline-sync');
function startGame() {
  rs.question ('press any key to start ')
}
startGame()

function* increasingNumber() {
  const start = Math.floor(Math.random() * 6) + 1;
  let count = 0;
  while (count < 10) {
    yield start + count;
    count++;
  }
}  

function* sequencitalLetters() {
  const start = String.fromCharCode(Math.floor(Math.random() * 6) + 97);
  let letCount = 0;
  while (letCount < 10) {
    yield String.fromCharCode(start.charCodeAt(0) + letCount);
    letCount++;
  }
}

function* randomLetter() {
  let start = String.fromCharCode(Math.floor(Math.random() * 10) + 97);
 let count = 0;
 while (count < 1) {
   yield start
   count++;
 }
}

function* randomNumber() {
  const start = Math.floor(Math.random() * 10) + 1;
  let count = 0;
  while (count < 1) {
    yield start;
    count++;
  }
}

function horizontalPlacement(ship, buildNum) {
  for (const letter of randomLetter()) {
    for (const number of increasingNumber()) {
      const item = letter + number;
      while (ship.size < buildNum) {
        ship.add(item);
        break;
      }
    }
  }
}

function verticalPlacement(ship, buildNum) {
  for (const number of randomNumber()) {
      for (const letter of sequencitalLetters()) {
        const item = letter + number;
        while (ship.size < buildNum) {
          ship.add(item);
          break;
      }
    }
  }
}

function shipPlacement (ship, buildNum) {
  placement = () => (Math.floor(Math.random() * 2)) === 0 ? 'horizontal' : 'vertical';
  if (placement() === 'vertical') {
      verticalPlacement(ship, buildNum)
    } else {
      horizontalPlacement(ship, buildNum)
  }      
}

let destroyer = new Set();
shipPlacement(destroyer, 2)

let cruiser = new Set();
shipPlacement(cruiser, 3)

let submarine = new Set();
shipPlacement(submarine, 3)
    
let battleShip = new Set();
shipPlacement(battleShip, 4)
    
let carrier = new Set();
shipPlacement(carrier, 5)

function crossCheck (firstShip, buildNum ,secondShip, thirdShip, fourthShip, fithShip) {
  for (let crew of firstShip) {   
  if (secondShip.has(crew) || thirdShip.has(crew) || fourthShip.has(crew) || fithShip.has(crew)) {
      firstShip.clear()
      shipPlacement(firstShip, buildNum)
      crossCheck (firstShip, buildNum ,secondShip, thirdShip, fourthShip, fithShip)
    } 
  }  
}
    
crossCheck (carrier, 5, destroyer, cruiser, submarine, battleShip)
    
crossCheck (battleShip, 4, destroyer, cruiser, submarine, carrier)
    
crossCheck (submarine, 3, destroyer, cruiser, battleShip, carrier)
    
crossCheck (cruiser, 3, destroyer, submarine, battleShip, carrier)
      
crossCheck (destroyer, 2, cruiser, submarine, battleShip, carrier)

const inputChecker = new Set()
let damageChecker = new Set()

var rs = require('readline-sync');
const readline = require('readline');
const { rejects } = require('assert');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function userInput() {
  return new Promise((resolve, reject) => {
    rl.question("Enter a location to strike ", input => {   
    let [letter, number, num2] = input;
    letter = (!letter) ? 'Only one valid Letter from A-J': letter;
    letter = (/[a-zA-Z]/.test(letter)) ? letter : 'Only one valid Letter from A-J'; 
    if (letter === ' ') {
      reject('enter a valid value')
    }
    letter = letter.toLowerCase();
    letter = (letter.charCodeAt(0) < 97 || letter.charCodeAt(0) > 106) ? 'only one valid letter from A-J' : letter

    if (letter.length > 1 || (!/[a-zA-Z]/.test(letter))) {
    reject('only one valid letter from A-J')
    } 
    if (isNaN(number)) {
    reject('must be a number from 1-10')
    } 
    if (number < 1) {
    reject('must be a number from 1-10')
    }
    if ((num2) && num2 > 0) {
    reject('must be a number from 1-10')
    }
    if (input.length === 2) {
    input = letter + number
    resolve(input);
    } else {
    input = letter + number + num2
    resolve(input);
  }
});
}).then(input => {

if (inputChecker.has(input)) {
  console.log('already put that, Miss!')
}  else {
  inputChecker.add(input)
}


function changeGridX(strikeArea) {  
  if (!damageChecker.has(input)) {
    let [letter, number, num2] = strikeArea
  if (strikeArea.length === 3) {
    letter = letter.toUpperCase();
    totalNum = number + num2
  for (let longiLati in grid) {
  if (letter  === longiLati) {
    grid[longiLati][totalNum] = '|X|';
}
}
}
  if (strikeArea.length === 2) {
    letter = letter.toUpperCase();
  for (let longiLati in grid) {
  if (letter  === longiLati) {
    grid[longiLati][number] = '|X|';
    }
    }
  } 
} 
}

function changeGridO(strikeArea) {
  if (damageChecker.has(input)) {
    let [letter, number, num2] = strikeArea
  if (strikeArea.length === 3) {
      letter = letter.toUpperCase();
      totalNum = number + num2
  for (let longiLati in grid) {
    if (letter  === longiLati) {
      grid[longiLati][totalNum] = '|O|';
  }
  }
  }
  if (strikeArea.length === 2) {
    letter = letter.toUpperCase();
  for (let longiLati in grid) {
    if (letter  === longiLati) {
    grid[longiLati][number] = '|O|';
    }
    }
  } 
  } 
}
if (!damageChecker.has(input)) {
    changeGridO(input)
}

function targetAquired(shipSet, shipType) {
  if (shipSet.has(input)) {
    shipSet.delete(input)
    damageChecker.add(input)
    changeGridO(input)
    console.log(`You have hit a ${shipType}!`)
  }
}

targetAquired(destroyer, 'destroyer')
targetAquired(cruiser, 'cruiser')
targetAquired(submarine, 'submarine')
targetAquired(battleShip, 'battleShip')
targetAquired(carrier, 'carrier')

if (!damageChecker.has(input)) {
    console.log('you have missed')
    changeGridX(input)
}
console.table(grid)
  
})
  .catch(error => {
    console.error('Error:', error);
  });
}


async function userLog() {
 await userInput();
  if(damageChecker.size === 17) {
    const answer = rs.keyInYN("You have destroyed all battleships. Would you like to play again? Y/N")
    if (answer) {
        inputChecker.clear()
        damageChecker.clear()
        shipPlacement(destroyer, 2)
        shipPlacement(cruiser, 3)
        shipPlacement(submarine, 3)
        shipPlacement(battleShip, 4)
        shipPlacement(carrier, 5)
        crossCheck (carrier, 5, destroyer, cruiser, submarine, battleShip)
        crossCheck (battleShip, 4, destroyer, cruiser, submarine, carrier)
        crossCheck (submarine, 3, destroyer, cruiser, battleShip, carrier)
        crossCheck (cruiser, 3, destroyer, submarine, battleShip, carrier)
        crossCheck (destroyer, 2, cruiser, submarine, battleShip, carrier)
         grid = {
          A: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
          B: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
          C: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
          D: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
          E: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
          F: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
          G: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
          H: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
          I: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
          J: ['', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|', '|_|'],
        }
      
        userLog();
    }  else {
        rl.close();
        return;
    }
} 
   return userLog();
}
userLog().then(result => console.log(result));

 

  
