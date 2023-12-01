let optionPicked1 = Math.floor(Math.random() * 3);
let optionPicked2 = Math.floor(Math.random() * 3);

switch (optionPicked1) {
  case 0:
    optionPicked1 = "Scissors";
  break;
  case 1:
    optionPicked1 = "Paper";
  break;
  case 2:
    optionPicked1 = "Rock";
  break;
}

switch (optionPicked2) {
  case 0:
    optionPicked2 = "Scissors";
  break;
  case 1:
    optionPicked2 = "Paper";
  break;
  case 2:
    optionPicked2 = "Rock";
  break;
}

let player1 = optionPicked1;
let player2 = optionPicked2;

console.log("Announcer: Rock, Paper, Scissors, Shoot!");

console.log("Player 1 picked " + player1 + "!");
console.log("Player 2 picked " + player2 + "!");

let victoryMessage = "";

let winner = "";



if (optionPicked1 === "Rock" && optionPicked2 === "Paper"){
  winner = "Player 2";
} else if (optionPicked1 === "Paper" && optionPicked2 === "Rock"){
  winner = "Player 1";
} else if (optionPicked1 === "Rock" && optionPicked2 === "Scissors"){
  winner = "Player 1";
} else if (optionPicked1 === "Scissors" && optionPicked2 === "Rock"){
  winner = "Player 2";
} else if (optionPicked1 === "Paper" && optionPicked2 === "Scissors"){
  winner = "Player 2";
} else if (optionPicked1 === "Scissors" && optionPicked2 === "Paper"){
  winner = "Player 1";
} else if (optionPicked1 === optionPicked2) {
  winner = "Announcer: It's a Draw!";
} else {
  winner = "Something went wrong";
}

console.log("Announcer: Winner is...(Drumroll plays)... " + winner + "!");
 