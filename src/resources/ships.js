import Ship from "../factories/shipFactory";

let shipList = {
//Player ships~
'Carrier' : new Ship(5),

'BattleShip' : new Ship(4),

'Cruiser' : new Ship(3),

'Submarine' : new Ship(3),

'Destroyer' : new Ship(2),

//Enemy ships
 'EnemyCarrier'  : new Ship(5),
 'EnemyBattleShip':  new Ship(4),
 'EnemyCruiser' : new Ship(3),
 'EnemySubmarine' : new Ship(3),
 'EnemyDestroyer' : new Ship(2)
}

export default shipList;