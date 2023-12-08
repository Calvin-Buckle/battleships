import Ship from './factories/shipFactory'
import Gameboard from './factories/gameBoardFactory'
import shipList from './resources/ships'
import dragAndDrop from './functionality/dragAndDrop';
import placeShips from './logic/ai';
import turns from './logic/turn';
let game = new Gameboard



let carrierShip = shipList.Carrier