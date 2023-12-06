
import shipList from "../resources/ships";

//this only runs the code once the gameboard is created
document.addEventListener('gameboardReady', () => {



    let start = document.getElementById('start');
    let reset = document.getElementById('reset')
    let enemyBoard = document.getElementById('enemyBoard');
    let EnemyCarrier = 'EnemyCarrier';
    let EnemyBattleShip = 'EnemyBattleShip';
    let EnemyCruiser = 'EnemyCruiser';
    let EnemySubmarine = 'EnemySubmarine';
    let EnemyDestroyer = 'EnemyDestroyer';
  


    function randomAxis(){
        const math = Math.floor(Math.random() * (99 - 0 + 1)) + 0;
        let axis;
        if(math <= 50){
            axis = 'vertical'
        }
        else{
            axis = 'horizontal'
        }
        return axis;
    }
//this selects a random Location to spawn
function randomLoc(){
    const location = Math.floor(Math.random() * (99 - 0 + 1)) + 0;
    return location
}

//this places the AI ships

function aiVerticalPlacement(ship){
    let currentEBlock = enemyBoard.firstElementChild;
    let loc = randomLoc();
   
       
    //run through the enemy board 
    for(let i = 0; i < loc; i++){
       currentEBlock = currentEBlock.nextElementSibling;  
    }
    let isValid = vertValidMove(ship, currentEBlock)
    if(isValid){
    
         for(let j = 0;j < shipList[ship].size;j++){
            // place ships
       
            currentEBlock.classList.add('selected');
            currentEBlock.classList.add(ship);
            if(j == (shipList[ship].size -1)){break}
            for(let k = 0; k < 10; k++){
                currentEBlock = currentEBlock.nextElementSibling
            }
        }
    }else{
    aiVerticalPlacement(ship)
    }
}

   function vertValidMove(ship, currentEBlock){
    let isValid;
    for (let i = 0; i < shipList[ship].size; i++) {
        if (currentEBlock.classList.contains('selected')) {
          isValid = false;
            break; // Break out of the loop if a spot is selected
        }
        if(!currentEBlock.nextElementSibling){
            isValid = false;
                break; // Break out of the loop if there are no more siblings
        }
        // check if next sibling exists
        for (let j = 0; j < 10; j++) {
            if (currentEBlock.nextElementSibling) {
                currentEBlock = currentEBlock.nextElementSibling;
                isValid = true;
            } else {
                isValid = false;
                break; // Break out of the loop if there are no more siblings
            }
        
        }
        
   }
   return isValid
   }



function aiHorizontalPlacement(ship){
    let loc = randomLoc();
   let currentEBlock = enemyBoard.firstElementChild;
   


    //run through the enemy board 
    for(let i = 0; i < loc; i++){
    currentEBlock = currentEBlock.nextElementSibling;
    }
    //check if a move is valid
    let isValid = horValidMove(ship, currentEBlock)

    if(isValid){
    for(let j = 0; j < shipList[ship].size; j++){
      
//this places the ship
      
        currentEBlock.classList.add('selected')
        currentEBlock.classList.add(ship)  
        currentEBlock = currentEBlock.nextElementSibling;
       
    }

    }else{
        aiHorizontalPlacement(ship)
}
    }


    function horValidMove(ship, currentEBlock, classList) {
        let isValid = true;
    
        for (let i = 0; i < shipList[ship].size; i++) {
            if (currentEBlock.classList.contains('selected')) {
                isValid = false;
                break; // Break out of the loop if a spot is selected
            }
    
            let current = Array.from(currentEBlock.classList);
            let nextBlock = currentEBlock.nextElementSibling;
    
            if (nextBlock) {
                let next = Array.from(nextBlock.classList);
    
                // Check if the class at the same index is the same in both current and next class lists
                if (current[i] !== next[i]) {
                    isValid = false;
                    break; // Break the loop if a mismatch is found
                }
    
                currentEBlock = nextBlock; // Move to the next block
            } else {
                isValid = false; // There's no next block, so it's not a valid move
                break; // Break the loop if there are not enough blocks for the ship
            }
        }
    
        return isValid;
    }
    
    

    function placeShips(ship){
        if(randomAxis() === 'horizontal'){
            aiHorizontalPlacement(ship)
        }else{
            aiVerticalPlacement(ship)
        }
   
    
    }


   //reset the game

   //start the game
    start.addEventListener('click', () => {
    placeShips(EnemyCarrier)
    setTimeout(placeShips(EnemyBattleShip),10)
    setTimeout(placeShips(EnemyCruiser),10)
    setTimeout(placeShips(EnemySubmarine),10)
    setTimeout(placeShips(EnemyDestroyer),10)
})

});
export default placeShips


