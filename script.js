startNewGame.addEventListener("click", () => {
  let myGame = createGame();

  // DOM manipulation
  function DOMmanipulation() {
    const startNewGame = document.querySelector("#startNewGame");
    const boardCointainer = document.querySelector("#boardContainer");

    createBoardDOM();

    function createBoardDOM() {
      boardCointainer.innerHTML = "";

      for (let i = 1; i < 10; i++) {
        const square = document.createElement("div");
        const squarePosition = "a" + i;
        square.setAttribute("id", "square" + i);
        let squareContent = 0;
        boardCointainer.appendChild(square);

        square.addEventListener("click", () => {
          if (squareContent == 0) {
            if (myGame.gameboard.turn == 0) {
              square.textContent = "X";
              myGame.playerOne.turn(squarePosition);
              console.log(squareContent);
              squareContent = 1;
              console.log(squareContent);
              square.style.backgroundColor = "grey";
            } else {
              square.textContent = "O";
              myGame.playerTwo.turn(squarePosition);
              squareContent = 1;
              square.style.backgroundColor = "grey";
            }
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
        (myGame.gameboard.a4 === "O") &
          (myGame.gameboard.a5 === "O") &
          (myGame.gameboard.a6 === "O") ||
        (myGame.gameboard.a7 === "O") &
          (myGame.gameboard.a8 === "O") &
          (myGame.gameboard.a9 === "O") ||
        (myGame.gameboard.a1 === "O") &
          (myGame.gameboard.a4 === "O") &
          (myGame.gameboard.a7 === "O") ||
        (myGame.gameboard.a2 === "O") &
          (myGame.gameboard.a5 === "O") &
          (myGame.gameboard.a8 === "O") ||
        (myGame.gameboard.a3 === "O") &
          (myGame.gameboard.a6 === "O") &
          (myGame.gameboard.a9 === "O") ||
        (myGame.gameboard.a1 === "O") &
          (myGame.gameboard.a5 === "O") &
          (myGame.gameboard.a9 === "O") ||
        (myGame.gameboard.a3 === "O") &
          (myGame.gameboard.a5 === "O") &
          (myGame.gameboard.a7 === "O")
      ) {
        console.log("Player Two is winner!");
      } else if (
        (myGame.gameboard.a1 === "X") &
          (myGame.gameboard.a2 === "X") &
          (myGame.gameboard.a3 === "X") ||
        (myGame.gameboard.a4 === "X") &
          (myGame.gameboard.a5 === "X") &
          (myGame.gameboard.a6 === "X") ||
        (myGame.gameboard.a7 === "X") &
          (myGame.gameboard.a8 === "X") &
          (myGame.gameboard.a9 === "X") ||
        (myGame.gameboard.a1 === "X") &
          (myGame.gameboard.a4 === "X") &
          (myGame.gameboard.a7 === "X") ||
        (myGame.gameboard.a2 === "X") &
          (myGame.gameboard.a5 === "X") &
          (myGame.gameboard.a8 === "X") ||
        (myGame.gameboard.a3 === "X") &
          (myGame.gameboard.a6 === "X") &
          (myGame.gameboard.a9 === "X") ||
        (myGame.gameboard.a1 === "X") &
          (myGame.gameboard.a5 === "X") &
          (myGame.gameboard.a9 === "X") ||
        (myGame.gameboard.a3 === "X") &
          (myGame.gameboard.a5 === "X") &
          (myGame.gameboard.a7 === "X")
      ) {
        console.log("Player One is winner!");
      } else {
        console.log("Next Player Turn");
      }
    }
  }
});
