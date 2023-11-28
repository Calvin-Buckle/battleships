
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

    let EnemyCarrier = 'EnemyCarrier'
    let EnemyBattleShip = 'EnemyBattleShip'
    let EnemySubmarine = 'EnemySubmarine'
    let EnemyDestroyer = 'EnemyDestroyer'


function aiPlacement(ship){
    let loc = randomLoc();
   let currentEBlock = enemyBoard.firstElementChild;
    console.log('initialization',currentEBlock)
    //run through the enemy board 
    for(let i = 0; i < loc; i++){
    currentEBlock = currentEBlock.nextElementSibling;
    console.log('loop',currentEBlock)
    }
    currentEBlock.classList.add(ship)
    }
    
    


    aiPlacement(EnemyCarrier)
});
export default aiPlacement


