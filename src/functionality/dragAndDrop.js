
import shipList from "../resources/ships";

document.addEventListener('gameboardReady', () => {
    let playerBoard = document.getElementById('playerBoard');
    let ship = document.querySelectorAll('.ship');
    let block = document.querySelectorAll('.block');
    let shipId;
    let shipSize;
    let hoverAffectApplied;
    let shipOr;
    let shipName;



    ship.forEach(ship => {
        ship.addEventListener('click', () => {
            if(ship.style.flexDirection !== 'column'){
        ship.style.flexDirection = 'column';
        }else{
            ship.style.flexDirection = 'row';
        };
        })
        
    })





  
    
    ship.forEach(ship => {
        ship.addEventListener('dragstart', () => {
            
           
            if(ship.style.flexDirection === 'column'){
               shipOr = 'column'
            }
        });
    });

    document.addEventListener('dragstart', (e) => {
        shipId = e.target.getAttribute('Id');
        
    });




   
    block.forEach(block => {
        block.addEventListener('dragover', (e) => {
            e.preventDefault();
            shipSize = shipList[shipId].size;
            ship = shipList.shipId
            if (!hoverAffectApplied) {
                let currentBlock = block;
    
                for (let i = 0; i < shipSize; i++) {
                    if (shipOr === 'column') { 
                        for (let j = 0; j < 10; j++) {
                            currentBlock = currentBlock.nextElementSibling;
                        }
                        currentBlock.classList.add('hovered');
                    } else {
                        currentBlock.classList.add('hovered');
                        currentBlock = currentBlock.nextElementSibling;
                    }
                }
    
                hoverAffectApplied = true;
            }
        });
    });








    block.forEach(block => {
        block.addEventListener('dragleave', () => {
            hoverAffectApplied = false;
            let currentBlock = block;
            for (let i = 0; i < shipSize; i++) {
                if(shipOr === 'column'){
                    for(let j = 0; j < 10; j++){
                currentBlock.classList.remove('hovered');
                currentBlock = currentBlock.nextElementSibling;
                    }
                }else{
                currentBlock.classList.remove('hovered');
                currentBlock = currentBlock.nextElementSibling;
            }
            }
        });
    });



    block.forEach(block => {
        block.addEventListener('drop', () => {
            shipSize = shipList[shipId].size;        
            if (shipList[shipId]) {
                shipName = shipList[shipId].id;
               
    
                let currentBlock = block;
                for (let i = 0; i < shipSize; i++) {
                    currentBlock.classList.add('selected');
                    currentBlock.classList.add(shipName);
                    currentBlock.classList.remove('hovered');
                    currentBlock = currentBlock.nextElementSibling;
                }
                const draggedShip = document.getElementById(shipName);
                if (draggedShip) {
                    draggedShip.style.display = 'none';
                }
            } else {
                console.error('Invalid shipId:', shipId);
            }
        });
    });

    
    document.getElementById('reset').addEventListener('click', () => {
        document.querySelectorAll('.ship').forEach(ship => {
            ship.style.display = 'flex';
        });
    })


});

