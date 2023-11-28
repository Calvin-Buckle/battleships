
import shipList from "../resources/ships";
//this only runs the code once the gameboard is created
document.addEventListener('gameboardReady', () => {

    let enemyBoard = document.getElementById('enemyBoard');
    let EnemyCarrier = 'EnemyCarrier';
    let EnemyBattleShip = 'EnemyBattleShip';
    let EnemyCruiser = 'EnemyCruiser';
    let EnemySubmarine = 'EnemySubmarine';
    let EnemyDestroyer = 'EnemyDestroyer';

//this selects a random Location to spawn
function randomLoc(){
    const location = Math.floor(Math.random() * (99 - 0 + 1)) + 0;
    return location
}

//this places the AI ships
function aiPlacement(ship){
    let loc = randomLoc();
   let currentEBlock = enemyBoard.firstElementChild;
   let prevSteps = 0;

    //run through the enemy board 
    for(let i = 0; i < loc; i++){
    currentEBlock = currentEBlock.nextElementSibling;
    }

    //this loops and checks if a spot is selected
    for(let j = 0; j < shipList[ship].size; j++){
        if(currentEBlock.classList.contains('selected')){
            cleanPrev(currentEBlock,ship,prevSteps)
          return;
        }else{
//this places the ship
        prevSteps++
        currentEBlock.classList.add('selected')
        currentEBlock.classList.add(ship)  
    //this checks if the board isnt ending
        if(currentEBlock.nextElementSibling){
         currentEBlock = currentEBlock.nextElementSibling;
        }else{
            cleanShips(currentEBlock,ship,prevSteps)
           return;
        }
    }
    }
    }

    
    function cleanPrev(currentEBlock,ship,prevSteps){
        for(let i = 0; i < prevSteps; i++){
            currentEBlock = currentEBlock.previousElementSibling;
            currentEBlock.classList.remove(ship)
            currentEBlock.classList.remove('selected')
        }
        
        
        return prevSteps = 0, aiPlacement(ship);

    }


    function cleanShips(currentEBlock,ship,prevSteps){
        for(let i = 0; i < prevSteps; i++){
            currentEBlock.classList.remove(ship)
            currentEBlock.classList.remove('selected')
            currentEBlock = currentEBlock.previousElementSibling;
          
        }
        return prevSteps = 0, aiPlacement(ship);
    }
    function placeShips(){

        setTimeout(aiPlacement(EnemyCarrier),1000)
        setTimeout(aiPlacement(EnemyBattleShip),1000)
        setTimeout(aiPlacement(EnemyCruiser),1000)
        setTimeout(aiPlacement(EnemySubmarine),1000)
        setTimeout(aiPlacement(EnemyDestroyer),1000)

    }
    placeShips();
   
});
export default placeShips


