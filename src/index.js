import Ship from './factories/shipFactory'
import Gameboard from './factories/gameBoardFactory'
import shipList from './resources/ships'



let game = new Gameboard;
let carrierShip = shipList.Carrier

carrierShip.hit(0)



