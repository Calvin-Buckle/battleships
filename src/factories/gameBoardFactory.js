


class Gameboard {
  constructor() {
    this.board = this.generateDomBoard();
    ;
  }


  generateDomBoard() {
    let enemyBoard = document.getElementById('enemyBoard')
let playerBoard = document.getElementById('playerBoard')
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          const divEnemyPlayer = document.createElement('div');
          const divPlayer = document.createElement('div');
          divEnemyPlayer.id = `enemy(${i},${j})`;
          divPlayer.id = `player(${i},${j})`;
          playerBoard.appendChild(divPlayer);
         enemyBoard.appendChild(divEnemyPlayer);  

           divPlayer.addEventListener('click', this.placeShip)
           divEnemyPlayer.addEventListener('click', this.attack)

        }
      }
    }
  
  


 attack(event) {
    // Do something when a div is clicked
    console.log('Div clicked:', event.target.id);
  }
 
  placeShip(){

  }
 




}




export default Gameboard;
