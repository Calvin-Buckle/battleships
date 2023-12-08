import shipList from "../resources/ships";

function turns() {
    let enemyBoard = document.getElementById('enemyBoard');
    let playerBoard = document.getElementById('playerBoard');
    let eBlock = document.querySelectorAll('.eBlock');
    let block = document.querySelectorAll('.block');


    let playersTurn = true;
    let aiTurn = false;

    // event listeners on board
    eBlock.forEach(eBlock => {
        eBlock.addEventListener('click', () => {
            if(eBlock.classList.contains('selected')){
                eBlock.classList.add('hit')
            }else{
                eBlock.classList.add('missed')
            }
        });
    });

    block.forEach(block => {
        block.addEventListener('click', () => {
            if(block.classList.contains('selected')){
                block.classList.add('hit')
            }else{
                block.classList.add('missed')
            }
        });
    });
  
    
//tracker that keeps track of ships hit

}


document.addEventListener('gameboardReady', () => {
    turns();
});

export default turns;
