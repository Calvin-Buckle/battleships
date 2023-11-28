
import shipList from "../resources/ships";

document.addEventListener('gameboardReady', () => {
    let playerBoard = document.getElementById('playerBoard');
    let ship = document.querySelectorAll('.ship');
    let block = document.querySelectorAll('.block');
    let shipId;
    let shipSize;
    let hoverAffectApplied;

    ship.forEach(ship => {
        ship.addEventListener('dragstart', () => {
            
            console.log('dragging');
        });
    });

    document.addEventListener('dragstart', (e) => {
        shipId = e.target.getAttribute('Id');
    });


    block.forEach(block => {
        block.addEventListener('dragover', (e) => {
            e.preventDefault();
            shipSize = shipList[shipId].size;

            if (!hoverAffectApplied) {
                let currentBlock = block;
                for (let i = 0; i < shipSize; i++) {
                    currentBlock.classList.add('hovered');
                    currentBlock = currentBlock.nextElementSibling;
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
                currentBlock.classList.remove('hovered');
                currentBlock = currentBlock.nextElementSibling;
            }
        });
    });

    block.forEach(block => {
        block.addEventListener('drop', () => {
            shipSize = shipList[shipId].size;
            console.log('dropped');
            console.log(shipSize);

            let currentBlock = block;
            for (let i = 0; i < shipSize; i++) {
                currentBlock.classList.add('selected')
                currentBlock.classList.remove('hovered')
                currentBlock = currentBlock.nextElementSibling;
            }
        });
    });
});
