// myBattleShip 


var rs = require('readline-sync');
function startGame() {
 rs.question ('press any key to start ')

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

const myshipLocations = new Set();
const enemyshipLocations = new Set();
const myMap = new Set();
const enemyMap = new Set();
const enemyAssaults = new Set();
const ranlet  = randomLetterGenerator()
const gen = randomGenerator();


for (let i = 0; i < 9; i++) {
 let allies = ranlet.next().value + gen.next().value;
 while (myMap.has(allies)) {
   allies = ranlet.next().value + gen.next().value;
 }
 myMap.add(allies);
}


for (let i = 0; i < 9; i++) {
 let enemies = ranlet.next().value + gen.next().value;
 while (enemyMap.has(enemies)) {
   enemies = ranlet.next().value + gen.next().value;
 }
 enemyMap.add(enemies);
}

for (const value of Array(1)) {
 enemyAssaults.add(ranlet.next().value + gen.next().value)
}
for (const value of Array(2)) {
myshipLocations.add(ranlet.next().value + gen.next().value)
}
for (const value of Array(2)) {
enemyshipLocations.add(ranlet.next().value + gen.next().value)
}
let [myBattleShip, mySubmarine] = myshipLocations
let [enemyBattleShip, enemySubmarine] = enemyshipLocations

console.log( `enemyships ${enemyBattleShip} ${enemySubmarine}`)

const readline = require('readline');
const { rejects } = require('assert');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function userInput() {
return new Promise((resolve, reject) => {
 rl.question("Enter a location to strike ", input => {   
     
     
 input = (input.length === 2) ? input : 'invalid corodinents';
 let [letter, number] = input;
 letter = (/[a-zA-Z]/.test(letter)) ? letter : 'Only valid Letters'; 
 letter = letter.toLowerCase();
 letter = (letter.charCodeAt(0) < 97 || letter.charCodeAt(0) > 99) ? 'only letters from A-C' : letter
 





 
 if (letter.length > 1) {
     reject('Must enter a valid letter')
   } else if (isNaN(number)) {
     reject('must enter a valid number')
   } else if (number > 3 || number <= 0) {
     reject('must be a number from 1-3')
   } else {
     input = letter + number

 if (!enemyMap.has(input)) {
     reject('already put that')
 } 
   resolve(input);
   }
 });
}).then(input => {

 if (input === enemyBattleShip) {
     console.log('enemy battle ship destroyed, no survivors')
     enemyMap.delete(input)
     enemyBattleShip = null;
 } else {
     console.log('missed enemy battle ship')
     enemyMap.delete(input)
 }
    if ( input === enemySubmarine) {
     console.log('enemy submarine destroyed, no survivors')
     enemyMap.delete(input)
     enemySubmarine = null
   } else {
     console.log("missed enemy submarine!")
   }  enemyMap.delete(input)
 
   for (const enemyAttck of enemyAssaults) {
     if (!myBattleShip) {
         console.log('our battle-ship was destroyed in war, soldiers held as POWs')
       } 
     if (enemyAttck === myBattleShip) {
     console.log('enemy destroyed our battle-ship and took war prisoners')
     myBattleShip = null
     myMap.delete(enemyAttck)
   } else if (enemyAttck != myBattleShip && (myBattleShip)) {
     console.log('enemy missed our battle-ship, on standby')
   }



   if (!mySubmarine)  {
     console.log('our submarine was destroyed in war, soldiers held as POWs')
   }

     if (enemyAttck === mySubmarine) {
     console.log('enemy destroyed our submarine and took war prisoners')
     mySubmarine = null
     myMap.delete(enemyAttck)
   } 
    
   if (enemyAttck != mySubmarine && (mySubmarine)) {
     console.log('enemy missed our battle-ship, on standby')
   }
       if (enemyAttck != myBattleShip && enemyAttck != mySubmarine) {
         myMap.delete(enemyAttck)
       } 
   }
    ///console logs to be deleted
   /* console.log('User input:', input);
    console.log('mybatt:', myBattleShip)
    console.log('mysub:', mySubmarine)
    console.log('enemyBatt:', enemyBattleShip)
    console.log('enemy sub:', enemySubmarine) */
})
.catch(error => {
 console.error('Error:', error);
});
}



async function userLog() {
await userInput();
if(enemyBattleShip === null && enemySubmarine === null) {
 rl.close();
 return 'you win'
} else if (myBattleShip === null && mySubmarine === null) {
 rl.close();
 return 'you Lose'
}
return userLog();
}
userLog().then(result => console.log(result));
