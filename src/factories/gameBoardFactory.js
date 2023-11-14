class Gameboard {
  constructor() {
    this.board = this.generateDomBoard();
    ;
  }

  generateDomBoard() {
    

    function generateDivs() {
      
      let enemyBoard = document.getElementById('enemyBoard')
      let playerBoard = document.getElementById('playerBoard')

      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          const divEnemyPlayer = document.createElement('div');
          const divPlayer = document.createElement('div');
          divEnemyPlayer.textContent = `${i},${j}`;
          divPlayer.textContent = `${i},${j}`;
          playerBoard.appendChild(divPlayer);
         enemyBoard.appendChild(divEnemyPlayer);
         
        }
      }
      
    }
    
    generateDivs();
    
  }
}



export default Gameboard;
