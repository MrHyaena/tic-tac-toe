function createGame(name) {
  return (gameboard = {
    name: name,
    turn: 0,
    a1: "",
    a2: "",
    a3: "",
    b1: "",
    b2: "",
    b3: "",
    c1: "",
    c2: "",
    c3: "",
  });
}

function createPlayer(symbol) {
  return (player = {
    marker: symbol,
    turnZero(field) {
      gameboard[field] = player["marker"];
      gameboard.turn = 1;
      console.log(gameboard);
    },
    turnOne(field) {
      gameboard[field] = player["marker"];
      gameboard.turn = 0;
      console.log(gameboard);
    },
  });
}

let game = createGame("MyGame");
let playerOne = createPlayer("X");
let playerTwo = createPlayer("O");

function checkWinner() {
  if (
    (gameboard.a1 === "O") & (gameboard.a2 === "O") & (gameboard.a3 === "O") ||
    (gameboard.b1 === "O") & (gameboard.b2 === "O") & (gameboard.b3 === "O") ||
    (gameboard.c1 === "O") & (gameboard.c2 === "O") & (gameboard.c3 === "O") ||
    (gameboard.a1 === "O") & (gameboard.b1 === "O") & (gameboard.c1 === "O") ||
    (gameboard.a2 === "O") & (gameboard.b2 === "O") & (gameboard.c2 === "O") ||
    (gameboard.a3 === "O") & (gameboard.b3 === "O") & (gameboard.c3 === "O") ||
    (gameboard.a1 === "O") & (gameboard.b2 === "O") & (gameboard.c3 === "O") ||
    (gameboard.c1 === "O") & (gameboard.b2 === "O") & (gameboard.a3 === "O")
  ) {
    console.log("Player Two is winner!");
  } else if (
    (gameboard.a1 === "X") & (gameboard.a2 === "X") & (gameboard.a3 === "X") ||
    (gameboard.b1 === "X") & (gameboard.b2 === "X") & (gameboard.b3 === "X") ||
    (gameboard.c1 === "X") & (gameboard.c2 === "X") & (gameboard.c3 === "X") ||
    (gameboard.a1 === "X") & (gameboard.b1 === "X") & (gameboard.c1 === "X") ||
    (gameboard.a2 === "X") & (gameboard.b2 === "X") & (gameboard.c2 === "X") ||
    (gameboard.a3 === "X") & (gameboard.b3 === "X") & (gameboard.c3 === "X") ||
    (gameboard.a1 === "X") & (gameboard.b2 === "X") & (gameboard.c3 === "X") ||
    (gameboard.c1 === "X") & (gameboard.b2 === "X") & (gameboard.a3 === "X")
  ) {
    console.log("Player One is winner!");
  } else {
    console.log("Next Player Turn");
  }
}
