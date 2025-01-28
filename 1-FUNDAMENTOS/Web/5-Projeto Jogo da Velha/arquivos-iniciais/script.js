class Player {
  constructor(symbol) {
    this.symbol = symbol;
  }
}

class TicTacToe {
  constructor(player1 = new Player("x"), player2 = new Player("o")) {
    this.player1 = player1;
    this.player2 = player2;
    this.turn = player1;
    this.size = 3;
    this.board = this.#initBoard();
  }

  #initBoard() {
    return Array.from({ length: this.size }, () => Array(this.size).fill(null));
  }

  mapping() {
    let matrix = this.board
      .map((item) => item.map((position) => position ?? "-").join(" "))
      .join("\n");

    return matrix;
  }
}

const jogoDaVelha = new TicTacToe();
console.log(jogoDaVelha.mapping());
