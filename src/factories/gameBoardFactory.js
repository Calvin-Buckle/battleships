class Gameboard {
    constructor() {
      this.board = [];
  
      for (let i = 0; i < 10; i++) {
        this.board.push([]);
  
        for (let j = 0; j < 10; j++) {
          this.board[i].push(0); // Use any value or logic you need for positions
        }
      }
    }
  }


export default Gameboard;