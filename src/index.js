import Ship from './factories/shipFactory'
import Gameboard from './factories/gameBoardFactory'
import shipList from './resources/ships'
import dragAndDrop from './functionality/dragAndDrop';
import aiPlacement from './logic/ai';
 
let game = new Gameboard



let carrierShip = shipList.Carrier