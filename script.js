let myGame = createGame();

// DOM manipulation
function DOMmanipulation() {
  const startNewGame = document.querySelector("#startNewGame");
  const boardCointainer = document.querySelector("#boardContainer");

  startNewGame.addEventListener("click", createBoardDOM);

  function createBoardDOM() {
    for (let i = 1; i < 10; i++) {
      const square = document.createElement("div");
      const squarePosition = "a" + i;
      square.setAttribute("id", "square" + i);
      boardCointainer.appendChild(square);

      square.addEventListener("click", () => {
        if (myGame.gameboard.turn == 0) {
          square.textContent = "X";
          myGame.playerOne.turn(squarePosition);
        } else {
          square.textContent = "O";
          myGame.playerTwo.turn(squarePosition);
        }
      });
    }
  }
}

const board = document.createElement("div");

// DOM manipulation END

// Function for creating object with game objects

function createGame() {
  return {
    gameboard: createBoard(),
    playerOne: createPlayer("X"),
    playerTwo: createPlayer("O"),
    DOM: DOMmanipulation(),
  };

  // Function for creating board object with names

  function createBoard() {
    return {
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
    };
  }

  // Creates a player object with symbol and function
  // for playing one turn

  function createPlayer(playerSymbol) {
    return {
      marker: playerSymbol,
      turn(field) {
        myGame.gameboard[field] = this.marker;
        if (myGame.gameboard.turn == 0) {
          myGame.gameboard.turn = 1;
          checkWinner();
        } else {
          myGame.gameboard.turn = 0;
          checkWinner();
        }
        console.log(myGame.gameboard);
      },
    };
  }

  // This is function for checking the winner
  // based on rows, columns and diagonal

  function checkWinner() {
    if (
      (myGame.gameboard.a1 === "O") &
        (myGame.gameboard.a2 === "O") &
        (myGame.gameboard.a3 === "O") ||
      (myGame.gameboard.b1 === "O") &
        (myGame.gameboard.b2 === "O") &
        (myGame.gameboard.b3 === "O") ||
      (myGame.gameboard.c1 === "O") &
        (myGame.gameboard.c2 === "O") &
        (myGame.gameboard.c3 === "O") ||
      (myGame.gameboard.a1 === "O") &
        (myGame.gameboard.b1 === "O") &
        (myGame.gameboard.c1 === "O") ||
      (myGame.gameboard.a2 === "O") &
        (myGame.gameboard.b2 === "O") &
        (myGame.gameboard.c2 === "O") ||
      (myGame.gameboard.a3 === "O") &
        (myGame.gameboard.b3 === "O") &
        (myGame.gameboard.c3 === "O") ||
      (myGame.gameboard.a1 === "O") &
        (myGame.gameboard.b2 === "O") &
        (myGame.gameboard.c3 === "O") ||
      (myGame.gameboard.c1 === "O") &
        (myGame.gameboard.b2 === "O") &
        (myGame.gameboard.a3 === "O")
    ) {
      console.log("Player Two is winner!");
    } else if (
      (myGame.gameboard.a1 === "X") &
        (myGame.gameboard.a2 === "X") &
        (myGame.gameboard.a3 === "X") ||
      (myGame.gameboard.b1 === "X") &
        (myGame.gameboard.b2 === "X") &
        (myGame.gameboard.b3 === "X") ||
      (myGame.gameboard.c1 === "X") &
        (myGame.gameboard.c2 === "X") &
        (myGame.gameboard.c3 === "X") ||
      (myGame.gameboard.a1 === "X") &
        (myGame.gameboard.b1 === "X") &
        (myGame.gameboard.c1 === "X") ||
      (myGame.gameboard.a2 === "X") &
        (myGame.gameboard.b2 === "X") &
        (myGame.gameboard.c2 === "X") ||
      (myGame.gameboard.a3 === "X") &
        (myGame.gameboard.b3 === "X") &
        (myGame.gameboard.c3 === "X") ||
      (myGame.gameboard.a1 === "X") &
        (myGame.gameboard.b2 === "X") &
        (myGame.gameboard.c3 === "X") ||
      (myGame.gameboard.c1 === "X") &
        (myGame.gameboard.b2 === "X") &
        (myGame.gameboard.a3 === "X")
    ) {
      console.log("Player One is winner!");
    } else {
      console.log("Next Player Turn");
    }
  }
}
