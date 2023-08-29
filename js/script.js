class Game {
  constructor() {
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.turn = "o";
    this.gameOverDOM = document.querySelector("#game-over");
    this.gameOverInfoDOM = document.querySelector("#game-over-info");
    this.playAgainDOM = document.querySelector("#play-again");
    this.playAgainDOM.addEventListener("click", () => {
      this.resetState();
    });

    document.querySelectorAll(".cell").forEach((cell, cellIndex) => {
      cell.addEventListener("click", () => {
        this.onCellClicked(cell, cellIndex);
      });
    });
  }

  deactivateCells() {
    document.querySelectorAll(".cell").forEach((cell) => {
      cell.classList.add("non-clickable");
    });
  }

  onCellClicked(cell, cellIndex) {
    this.updateState(cellIndex);
    this.renderState(cell, cellIndex);
    const winner = this.checkForWinner();
    if (winner) {
      console.log(`winner is: ${winner}`);
      this.gameOverDOM.textContent = "Game Over";
      this.gameOverInfoDOM.textContent = `Player '${winner.toUpperCase()}' won the match!`;
      this.playAgainDOM.classList.remove("hide");
      this.deactivateCells();
    }
  }

  updateState(cellIndex) {
    const prevTurn = this.turn;

    if (this.turn === "o") this.turn = "x";
    else this.turn = "o";

    this.board[cellIndex] = prevTurn;
    console.log(this.board);
  }

  renderState(cell, cellIndex) {
    cell.textContent = this.board[cellIndex];
  }

  resetState() {
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.turn = "o";
    this.gameOverDOM.textContent = "Tic Tac Toe";
    this.gameOverInfoDOM.textContent = "Click in any cell to conquer";
    document.querySelectorAll(".cell").forEach((cell) => {
      cell.classList.remove("non-clickable");
      cell.textContent = "";
    });
    this.playAgainDOM.classList.add("hide");
  }

  checkForWinner() {
    if (
      ((this.board[0] === "o" && this.board[1]) === "o" &&
        this.board[2] === "o") ||
      ((this.board[3] === "o" && this.board[4]) === "o" &&
        this.board[5] === "o") ||
      ((this.board[6] === "o" && this.board[7]) === "o" &&
        this.board[8] === "o") ||
      ((this.board[0] === "o" && this.board[3]) === "o" &&
        this.board[6] === "o") ||
      ((this.board[1] === "o" && this.board[4]) === "o" &&
        this.board[7] === "o") ||
      ((this.board[2] === "o" && this.board[5]) === "o" &&
        this.board[8] === "o") ||
      ((this.board[0] === "o" && this.board[4]) === "o" &&
        this.board[8] === "o") ||
      ((this.board[2] === "o" && this.board[4]) === "o" &&
        this.board[6] === "o") ||
      ((this.board[0] === "x" && this.board[1]) === "x" &&
        this.board[2] === "x") ||
      ((this.board[3] === "x" && this.board[4]) === "x" &&
        this.board[5] === "x") ||
      ((this.board[6] === "x" && this.board[7]) === "x" &&
        this.board[8] === "x") ||
      ((this.board[0] === "x" && this.board[3]) === "x" &&
        this.board[6] === "x") ||
      ((this.board[1] === "x" && this.board[4]) === "x" &&
        this.board[7] === "x") ||
      ((this.board[2] === "x" && this.board[5]) === "x" &&
        this.board[8] === "x") ||
      ((this.board[0] === "x" && this.board[4]) === "x" &&
        this.board[8] === "x") ||
      ((this.board[2] === "x" && this.board[4]) === "x" &&
        this.board[6] === "x")
    ) {
      if (this.turn === "o") return "x";
      else return "o";
    }
  }
}

const game = new Game();
