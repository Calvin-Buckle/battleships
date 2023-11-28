
import shipList from "../resources/ships";
document.addEventListener('gameboardReady', () => {

    let enemyBoard = document.getElementById('enemyBoard');
    let ship = document.querySelectorAll('.ship');
    let eBlock = document.querySelectorAll('.eBlock');
    let shipId;
    let shipSize;
   




Carrier
let carrierIsPlaced = false;

BattleShip
let battleShipIsPlaced = false;

Cruiser
let cruiserIsPlaced = false;

Submarine
let submarineIsPlaced = false;

Destroyer
let destroyerIsPlaced = false;



function checkIfPlaced(){
    if(carrierIsPlaced && battleShipIsPlaced && cruiserIsPlaced
         && submarineIsPlaced && destroyerIsPlaced !== false)
    {
    return true
    }
   
}


function randomLoc(){
    const location = Math.floor(Math.random() * (99 - 0 + 1)) + 0;

    return location
}

    let EnemyCarrier = 'EnemyCarrier';
    let EnemyBattleShip = 'EnemyBattleShip';
    let EnemyCruiser = 'EnemyCruiser';
    let EnemySubmarine = 'EnemySubmarine';
    let EnemyDestroyer = 'EnemyDestroyer';


function aiPlacement(ship){
    let loc = randomLoc();
   let currentEBlock = enemyBoard.firstElementChild;
   
    //run through the enemy board 
    for(let i = 0; i < loc; i++){
    currentEBlock = currentEBlock.nextElementSibling;
    }
   
    for(let j = 0; j < shipList[ship].size; j++){
        currentEBlock.classList.add('selected')
        currentEBlock.classList.add(ship)
       
        currentEBlock = currentEBlock.nextElementSibling
        
    }
    }
    
    
 
    aiPlacement(EnemyCarrier)
    aiPlacement(EnemyBattleShip)
    aiPlacement(EnemyCruiser)
    aiPlacement(EnemySubmarine)
    aiPlacement(EnemyDestroyer)
});
export default aiPlacement


