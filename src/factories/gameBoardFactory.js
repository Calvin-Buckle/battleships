

class Gameboard {
  
  constructor() {
    this.board = this.generateDomBoard();
    document.dispatchEvent(new Event('gameboardReady'))
    ;
  }

  generateDomBoard() {
   let playerBoard = document.getElementById('playerBoard');
   let enemyBoard = document.getElementById('enemyBoard');  
   
   for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
      let div = document.createElement('div')
      let enemyDiv = document.createElement('div')
    playerBoard.appendChild(div)
    enemyBoard.appendChild(enemyDiv)
    div.classList = 'block'
    enemyDiv.classList= 'block'
    }
   }


}
}




export default Gameboard;
