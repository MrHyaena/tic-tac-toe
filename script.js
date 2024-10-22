const startNewGame = document.querySelector("#startNewGame");
const turnBanner = document.querySelector("#turnBanner");
const controler = document.querySelector("#controler");
turnBanner.textContent = "Press start button!";
startNewGame.addEventListener("click", () => {
  let playerOneName = document.getElementById("inputOne").value;
  let playerTwoName = document.getElementById("inputTwo").value;
  let myGame = createGame();

  // DOM manipulation
  function DOMmanipulation() {
    const boardCointainer = document.querySelector("#boardContainer");
    turnBanner.textContent = "Player One's turn!";
    createBoardDOM();
    const playerStats = document.querySelector("#playerStats");

    const playerOneStats = document.createElement("h3");
    playerOneStats.textContent = "PLAYER ONE: " + playerOneName + " | X";
    playerStats.appendChild(playerOneStats);

    const playerTwoStats = document.createElement("h3");
    playerTwoStats.textContent = "PLAYER TWO: " + playerTwoName + " | O";
    playerStats.appendChild(playerTwoStats);

    function createBoardDOM() {
      boardCointainer.innerHTML = "";

      for (let i = 1; i < 10; i++) {
        const square = document.createElement("div");
        const squarePosition = "a" + i;
        square.setAttribute("id", "square" + i);
        let squareContent = 0;
        boardCointainer.appendChild(square);

        square.addEventListener("click", () => {
          if (myGame.gameboard.turn == 0 || myGame.gameboard.turn == 1) {
            if (squareContent == 0) {
              if (myGame.gameboard.turn == 0) {
                square.textContent = "X";
                turnBanner.textContent = "Player Two's turn!";
                myGame.playerOne.turn(squarePosition);

                squareContent = 1;
                console.log(myGame.playerOne.name);

                square.style.backgroundColor = "rgb(201, 165, 191)";
              } else if (myGame.gameboard.turn == 1) {
                square.textContent = "O";
                turnBanner.textContent = "Player One's turn!";
                myGame.playerTwo.turn(squarePosition);
                squareContent = 1;
                square.style.backgroundColor = "rgb(201, 165, 191)";
              }
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
      playerOne: createPlayer("X", playerOneName),
      playerTwo: createPlayer("O", playerTwoName),
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

    function createPlayer(playerSymbol, playerName) {
      return {
        marker: playerSymbol,
        name: playerName,
        turn(field) {
          myGame.gameboard[field] = this.marker;
          if (myGame.gameboard.turn == 0) {
            myGame.gameboard.turn = 1;
            checkWinner();
          } else if (myGame.gameboard.turn == 1) {
            myGame.gameboard.turn = 0;
            checkWinner();
          } else {
            myGame.gameboard.turn = 2;
            console.log(myGame.gameboard.turn);
          }
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
        console.log(myGame.gameboard.turn);
        myGame.gameboard.turn = 2;
        console.log(myGame.gameboard.turn);
        turnBanner.textContent =
          "Player Two is winner! Do you want to start another game?";
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
        console.log(myGame.gameboard.turn);
        myGame.gameboard.turn = 3;
        console.log(myGame.gameboard.turn);
        turnBanner.textContent =
          "Player One is winner! Do you want to start another game?";
      } else {
        console.log("Next Player Turn");
        console.log(myGame.gameboard.turn);
      }
    }
  }
});
