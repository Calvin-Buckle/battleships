

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
    div.classList = 'block';
    enemyDiv.classList = 'eBlock';
    
    let zoneLoc = this.zoneName(i);
   
    div.classList.add(zoneLoc);
    enemyDiv.classList.add(zoneLoc);
    }
   }
}
zoneName(i){
  let zone;
  if(i == 0){zone = 'A'};
  if(i == 1){zone = 'B'};
  if(i == 2){zone = 'C'};
  if(i == 3){zone = 'D'};
  if(i == 4){zone = 'E'};
  if(i == 5){zone = 'F'};
  if(i == 6){zone = 'G'};
  if(i == 7){zone = 'H'};
  if(i == 8){zone = 'I'};
  if(i == 9){zone = 'J'};
  return zone;
 }
}




export default Gameboard;
