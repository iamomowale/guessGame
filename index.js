
//Welcome address (Game title) 
console.log("::::π²::::::::::::::::π²π²::::::::::::::::π²::::");
console.log(":π²π²π²: WELCOME TO NUMBER GUESSING GAME :π²π²π²:");
console.log("::::π²:::::::::::::π²π²π²π²π²:::::::::::::π²::::");

//Prompt User for the player name
console.log("");
let playerName = prompt("What's your name player!β ");

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
  console.log("Invalid number guessedβ");
}

else{
  //checking if its correct and add a point then moved to next stage
    guess = checkAnswer(answer, range);
    if (guess == 'correct'){
      totalPoints++;
      console.log(`β Correct! Level πβ¬οΈ to Stage ${range} with ${totalPoints} points`);
      range++;  
    }else
      console.log("");
  
    //Using loop to move to next stage and increment player'point everytime a player guess right
  while(guess == 'correct'){
    console.log("");
    console.log(`${playerName}: Stage-`, range-1);
    answer = Number(prompt(`Guess a number between 1 to ${range}`));
    guess = checkAnswer(answer, range);
    if (guess == 'correct'){
      totalPoints++;
      console.log(`β Correct! Level πβ¬οΈ to Stage ${range} with ${totalPoints} points`);
      range++;
    }
    console.log("");
  }

  //Terminate the program when user guess wrong and print out total point accumulated
  console.log(`Oopsβ Incorrect guess, Random Num Generated is ${compNum}`);
  console.log(`ββ GAME OVER ββ`);
  console.log(`${playerName}'s Total Point(s) βοΈ ${totalPoints}`);
}
//end program guessGame