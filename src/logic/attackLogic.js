import shipList from "../resources/ships";

function turns() {
    let enemyBoard = document.getElementById('enemyBoard');
    let playerBoard = document.getElementById('playerBoard');
    let eBlocks = document.querySelectorAll('.eBlock');
    let blocks = document.querySelectorAll('.block');
    let currentBlock;
    let currentEBlock;

    let pDestroyedShips = 0
    let eDestroyedShips = 0

    let shipCounts = {
     Carrier : 0,
     BattleShip : 0,
     Cruiser : 0,
     Submarine : 0,
     Destroyer : 0,  
     EnemyCarrier : 0,
     EnemyBattleShip : 0,
     EnemyCruiser : 0,
     EnemySubmarine : 0,
     EnemyDestroyer : 0, 
   
    }
    




    eBlocks.forEach(eBlock => {
        eBlock.addEventListener('click', () => {
            if (eBlock.classList.contains('selected')) {
                eBlock.classList.add('hit');
                currentBlock = eBlock;
                hitTracker(currentBlock);
            } else {
                eBlock.classList.add('missed');
            }
            //hier
            killHandler(
                shipCounts
            );
        });
    });

    blocks.forEach(block => {
        block.addEventListener('click', () => {
            if (block.classList.contains('selected')) {
                block.classList.add('hit');
                currentBlock = block;
                hitTracker(currentBlock);
            } else {
                block.classList.add('missed');
            }
            //hier
            killHandler(
            shipCounts
            );
        });
    });

    function hitTracker(currentBlock) {
     //Hier
        if (currentBlock.classList.contains('Carrier')) {
            shipCounts.Carrier++;
           
        }if (currentBlock.classList.contains('BattleShip')) {
            shipCounts.BattleShip++;
           
        }if (currentBlock.classList.contains('Cruiser')) {
            shipCounts.Cruiser++;
           
        }if (currentBlock.classList.contains('Submarine')) {
            shipCounts.Submarine++;
          
        }if (currentBlock.classList.contains('Destroyer')) {
            shipCounts.Destroyer++;
           
        }
        //hier
       
        if (currentBlock.classList.contains('EnemyCarrier')) {
            shipCounts.EnemyCarrier++;
          
        }if (currentBlock.classList.contains('EnemyBattleShip')) {
            shipCounts.EnemyBattleShip++;
        
        }if (currentBlock.classList.contains('EnemyCruiser')) {
            shipCounts.EnemyCruiser++;
          
        }if (currentBlock.classList.contains('EnemySubmarine')) {
            shipCounts.EnemySubmarine++;
         
        }if (currentBlock.classList.contains('EnemyDestroyer')) {
            shipCounts.EnemyDestroyer++;
          
        }
    
}

    function killHandler(shipCounts) {
        
        if (shipCounts.Carrier === 5) {
            destroyedHandler('Carrier');
            shipCounts.Carrier = 0;
        }if (shipCounts.BattleShip === 4) {
            destroyedHandler('BattleShip');
            shipCounts.BattleShip = 0;
        }if (shipCounts.Cruiser === 3) {
            destroyedHandler('Cruiser');
            shipCounts.Cruiser = 0;
        }if (shipCounts.Submarine === 3) {
            destroyedHandler('Submarine');
            shipCounts.Submarine = 0;
        }if (shipCounts.Destroyer === 2) {
            destroyedHandler('Destroyer');
            shipCounts.Destroyer = 0;
        }if (shipCounts.EnemyCarrier == 5) {
            eDestroyedHandler('EnemyCarrier');
            shipCounts.EnemyCarrier = 0;
           
        }if (shipCounts.EnemyBattleShip == 4) {
            eDestroyedHandler('EnemyBattleShip');
            shipCounts.EnemyBattleShip = 0;
            
        }if (shipCounts.EnemyCruiser == 3) {
            eDestroyedHandler('EnemyCruiser');
            shipCounts.EnemyCruiser = 0;
           
        }if (shipCounts.EnemySubmarine == 3) {
            eDestroyedHandler('EnemySubmarine');
            shipCounts.EnemySubmarine = 0;
         
        }if (shipCounts.EnemyDestroyer == 2) {
            eDestroyedHandler('EnemyDestroyer');
            shipCounts.EnemyDestroyer = 0;
            
        }
    }

    function eDestroyedHandler(shipName) {
        eDestroyedShips++
        if(eDestroyedShips == 5){
            alert('PLAYER WINS')
        }
        currentEBlock = enemyBoard.firstElementChild;
        for (let i = 0; i < 100; i++) {
            if (currentEBlock.classList.contains(shipName)) {
                currentEBlock.classList.remove(shipName);
                currentEBlock.classList.remove('selected');
                currentEBlock.classList.remove('hit');
                currentEBlock.classList.add('Destroyed');
            }
            currentEBlock = currentEBlock.nextElementSibling;
        }
    }

    function destroyedHandler(shipName) {
        pDestroyedShips++
      
        if(pDestroyedShips == 5)
        {alert('AI WINS')
    }
        currentBlock = playerBoard.firstElementChild;
        for (let i = 0; i < 100; i++) {
            if (currentBlock.classList.contains(shipName)) {
                currentBlock.classList.remove(shipName);
                currentBlock.classList.remove('selected');
                currentBlock.classList.remove('hit');
                currentBlock.classList.add('Destroyed');
            }
            currentBlock = currentBlock.nextElementSibling;
        }
    }
}

document.addEventListener('gameboardReady', () => {
    turns();
});

export default turns;

