import shipList from "../resources/ships";

function turns() {
    let enemyBoard = document.getElementById('enemyBoard');
    let playerBoard = document.getElementById('playerBoard');
    let eBlock = document.querySelectorAll('.eBlock');
    let block = document.querySelectorAll('.block');
    let currentBlock;
    let ship;
    let Carrier = 0;
    let BattleShip = 0;
    let Cruiser = 0;
    let Submarine = 0;
    let Destroyer = 0;




    // event listeners on board
    eBlock.forEach(eBlock => {
        eBlock.addEventListener('click', () => {
            if(eBlock.classList.contains('selected')){
                eBlock.classList.add('hit')
            }else{
                eBlock.classList.add('missed')
            }
            currentBlock = block;
        });
    });

    block.forEach(block => {
        block.addEventListener('click', () => {
            if(block.classList.contains('selected')){
                block.classList.add('hit')
                currentBlock = block;
            hitTracker(currentBlock);
                
                
            }else{
                block.classList.add('missed')
            
            }
            killHandler(Carrier,BattleShip,Cruiser,Submarine,Destroyer)
        });
    });
  
    
//tracker that keeps track of ships hit
function hitTracker(currentBlock){


   
if(currentBlock.classList.contains('Carrier')){
    Carrier++
    console.log(Carrier)
    
}
else if(currentBlock.classList.contains('BattleShip')){
    BattleShip++
    console.log(BattleShip)
}
else if(currentBlock.classList.contains('Cruiser')){
    Cruiser++
    console.log(Cruiser)
}
else if(currentBlock.classList.contains('Submarine')){
    Submarine++
    console.log(Submarine)
}
else if(currentBlock.classList.contains('Destroyer')){
    Destroyer++
    console.log(Destroyer)
}

}



function killHandler(Carrier,BattleShip,Cruiser,Submarine,Destroyer){
    if(Carrier == 5){ destroyedHandler(currentBlock,'Carrier'),alert('Works')}
    if(BattleShip == 4){destroyedHandler(currentBlock,'BattleShip')}
    if(Cruiser == 3){destroyedHandler(currentBlock,'Cruiser')}
    if(Submarine == 3){destroyedHandler(currentBlock,'Submarine')}
    if(Destroyer == 2){destroyedHandler(currentBlock,'Destroyer')}




}



function destroyedHandler(currentBlock,shipName){
    currentBlock = playerBoard.firstElementChild;

    
    for(let i = 0; i < 100; i++){
        if(currentBlock.classList.contains(shipName)){
            currentBlock.classList.remove(shipName);
            currentBlock.classList.remove('selected');
            currentBlock.classList.remove('hit')
            currentBlock.classList.add('Destroyed')
        }
        currentBlock = currentBlock.nextElementSibling;
    }
}

}


document.addEventListener('gameboardReady', () => {
    turns();
});

export default turns
