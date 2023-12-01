let player1;
let player2;
let winner;


// Random Numbers (Inclusive 0-Exclusive range)
// FUNCTION: Generate a random number betweeen 0 and 3
function getRandomNum(low, high){
    return Math.floor(Math.random() * (high - low)) + low;
}

// include 3 exclude 10
// 3 - 9
// 3 - 10
// 0.7


// TEST:

// Switch Statements
function chooseMove(randomNum){
  switch(randomNum){
    case 0:
      return "Scissors";
    break;
    case 1:
      return "Paper";
    break;
    case 2:
      return "Rock";
    break;
    default: 
      return "error";
    break;
  }
}
// Comparisons
function determineWinner(){
  if (player1 === "Rock" && player2 === "Paper"){
    return "Player 2";
  } else if (player1 === "Paper" && player2 === "Rock"){
    return "Player 1";
  } else if (player1 === "Rock" && player2 === "Scissors"){
    return "Player 1";
  } else if (player1 === "Scissors" && player2 === "Rock"){
    return "Player 2";
  } else if (player1 === "Paper" && player2 === "Scissors"){
    return "Player 2";
  } else if (player1 === "Scissors" && player2 === "Paper"){
    return "Player 1";
  } else if (player1 === player2) {
    return "Announcer: It's a Draw!";
  } else {
    return "Something went wrong";
  }
}
// Console Logs

// PLAY
player1 = chooseMove(getRandomNum(0,3));
console.log("Player1 Chose: " + player1);
player2 = chooseMove(getRandomNum(0,3));
console.log("Player2 Chose: " + player2);

winner = determineWinner();
console.log("Announcer: Winner is...(Drumroll plays)... " + winner + "!");