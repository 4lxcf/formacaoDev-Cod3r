class Player {
  constructor(symbol) {
    this.symbol = symbol;
  }
}

class Action {
  constructor(line, column) {
    this.line = line;
    this.column = column;
  }
}

class TicTacToe {
  constructor(player1 = new Player("x"), player2 = new Player("o")) {
    this.player1 = player1;
    this.player2 = player2;
    this.turn = player1;
    this.size = 3;
    this.board = this.#initBoard();
    this.winner = null;
  }

  #initBoard() {
    return Array.from({ length: this.size }, () => Array(this.size).fill(null));
  }

  play(action) {
    if (this.#isValidAction(action)) {
      this.#render(action);
      this.#switchTurn();
    } else {
      console.log("AÇÃO INVÁLIDA");
    }
  }

  #switchTurn() {
    this.turn =
      this.turn.symbol === this.player1.symbol ? this.player2 : this.player1;
  }

  #render(action) {
    let { line, column } = action;

    this.board[line - 1][column - 1] = this.turn.symbol;
  }

  #isValidAction(action) {
    let { line, column } = action;

    if (line <= 0 || column <= 0) {
      return false;
    }

    if (line > this.size || column > this.size) {
      return false;
    }

    if (this.board[line - 1][column - 1] !== null) {
      return false;
    }

    if (this.winner) {
      return false;
    }

    return true;
  }

  mapping() {
    let matrix = this.board
      .map((item) => item.map((position) => position ?? "-").join(" "))
      .join("\n");

    return matrix;
  }
}

const jogoDaVelha = new TicTacToe();
jogoDaVelha.play(new Action(1, 1));
jogoDaVelha.play(new Action(1, 2));
jogoDaVelha.play(new Action(2, 2));
jogoDaVelha.play(new Action(2, 2));
console.log(jogoDaVelha.mapping());
