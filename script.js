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
