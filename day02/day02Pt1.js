let fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8").toString();

const playsArray = input.split("\r\n");

let myPoints = 0;

for (let play of playsArray) {
  let opponentPick = play.split(" ")[0];
  let myPick = play.split(" ")[1];

  // Opppoent picks rock

  if (opponentPick == "A" && myPick == "Z") {
    //console.log("opponent picks rock and you pick scissors, you lost.");
    myPoints = myPoints + 3 + 0;
  }
  if (opponentPick == "A" && myPick == "X") {
    //console.log("opponent picks rock and you pick rock, it's a draw.");
    myPoints = myPoints + 1 + 3;
  }
  if (opponentPick == "A" && myPick == "Y") {
    //console.log("opponent picks rock and you pick paper, you win.");
    myPoints = myPoints + 2 + 6;
  }

  // Opponent picks paper

  if (opponentPick == "B" && myPick == "Z") {
    //console.log("opponent picks paper and you pick scissors, you win.");
    myPoints = myPoints + 3 + 6;
  }
  if (opponentPick == "B" && myPick == "X") {
    //console.log("opponent picks paper and you pick rock, you lose.");
    myPoints = myPoints + 1 + 0;
  }
  if (opponentPick == "B" && myPick == "Y") {
    //console.log("opponent picks paper and you pick paper, its a draw.");
    myPoints = myPoints + 2 + 3;
  }

  // Opponent picks scissors

  if (opponentPick == "C" && myPick == "Z") {
    // console.log("opponent picks scissors and you pick scissors, its a draw.");
    myPoints = myPoints + 3 + 3;
  }
  if (opponentPick == "C" && myPick == "X") {
    // console.log("opponent picks scissors and you pick rock, you win.");
    myPoints = myPoints + 1 + 6;
  }
  if (opponentPick == "C" && myPick == "Y") {
    // console.log("opponent picks scissors and you pick paper, you lose.");
    myPoints = myPoints + 2 + 0;
  }
}

console.log(myPoints);