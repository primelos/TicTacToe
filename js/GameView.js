// export default class GameView {
//   constructor() {}
//   updateBoard(game) {
//     for (let i = 0; i < game.board.length; i++) {
//       const tile = document.querySelector(`.board-tile[data-index=$'{i}']`);
//       tile.textContent = game.board = [i];
//     }
//   }
// }

export default class GameView {
  constructor() {
    console.log("init game view");
  }

  updateBoard(game) {
    this.updateTurn(game);
    const winningCombination = game.findWinningCombinations();

    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.board-tile[data-index='${i}']`);
      tile.textContent = game.board[i];

      tile.classList.remove("tile-winner");

      let tileType = game.board[i] == "X" ? "tile-x" : "tile-o";

      tile.innerHTML = `<span class='${tileType}'>${
        game.board[i] ? game.board[i] : `<div class='flip-card-front'>©℗</div>`
      }</span>`;

      if (winningCombination && winningCombination.includes(i)) {
        // let div = document.createElement("div");
        // div.innerHTML = "Restart";
        // let t1 = document.querySelector(".left");
        // t1.appendChild(button);

        tile.classList.add("tile-winner");
      }
    }
  }

  updateTurn(game) {
    let playerX = document.querySelector(".player-X");
    let playerO = document.querySelector(".player-O");

    playerX.classList.remove("active");
    playerO.classList.remove("active");

    if (game.turn == "X") {
      playerX.classList.add("active");
    } else {
      playerO.classList.add("active");
    }
  }
}
