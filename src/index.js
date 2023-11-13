import Ship from './factories/shipFactory'
import Gameboard from './factories/gameBoardFactory'




let game = new Gameboard;
let ship = new Ship('destroyer',1)


ship.hit(3)




console.log(game)
console.log(ship)