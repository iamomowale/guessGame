
//Welcome address (Game title) 
console.log("::::🎲::::::::::::::::🎲🎲::::::::::::::::🎲::::");
console.log(":🎲🎲🎲: WELCOME TO NUMBER GUESSING GAME :🎲🎲🎲:");
console.log("::::🎲:::::::::::::🎲🎲🎲🎲🎲:::::::::::::🎲::::");

//Prompt User for the player name
console.log("");
let playerName = prompt("What's your name player!❓ ");

//Set a range of current game to 2 and increment it on guessing right
//Also track random num generated to inform player when they guess wrong
let range = 2;
let totalPoints = 0;
let compNum = 0;

//function to generate random number
function random (range){
 let rand = Math.floor(Math.random() * range)+1;
  compNum = rand;
  return rand; 
}

//function to compare user input num with random num generated
function checkAnswer (answer, range){
  if (answer == random(range))
    return 'correct';
  else
    return 'incorrect';
}

//getting player guess at stage 1
console.log(`${playerName}: Stage-`, range-1);
let answer = Number(prompt(`Guess a number between 1 to ${range}`));

//Checking if player actually entered a number as their guess
if(isNaN(answer)){
  console.log("Invalid number guessed❌");
}

else{
  //checking if its correct and add a point then moved to next stage
    guess = checkAnswer(answer, range);
    if (guess == 'correct'){
      totalPoints++;
      console.log(`✅ Correct! Level 🆙⬆️ to Stage ${range} with ${totalPoints} points`);
      range++;  
    }
    //Using loop to move to next stage and increment player'point everytime a player guess right
  while(guess == 'correct'){
    console.log("");
    console.log(`${playerName}: Stage-`, range-1);
    answer = Number(prompt(`Guess a number between 1 to ${range}`));
    guess = checkAnswer(answer, range);
    if (guess == 'correct'){
      totalPoints++;
      console.log(`✅ Correct! Level 🆙⬆️ to Stage ${range} with ${totalPoints} points`);
      range++;
    }
    console.log("");
  }

  //Terminate the program when user guess wrong and print out total point accumulated
  console.log(`Oops❕ Incorrect guess, Random Num Generated ${compNum}`);
  console.log(`❌❌ GAME OVER ❌❌`);
  console.log(`Total Points ↔️ ${totalPoints}`);
}