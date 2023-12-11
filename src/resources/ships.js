import Ship from "../factories/shipFactory";

let shipList = {
//Player ships~
'Carrier' : new Ship(5,'Carrier'),

'BattleShip' : new Ship(4,'BattleShip'),

'Cruiser' : new Ship(3,'Cruiser'),

'Submarine' : new Ship(3,'Submarine'),

'Destroyer' : new Ship(2,'Destroyer'),

//Enemy ships
 'EnemyCarrier'  : new Ship(5),
 'EnemyBattleShip':  new Ship(4),
 'EnemyCruiser' : new Ship(3),
 'EnemySubmarine' : new Ship(3),
 'EnemyDestroyer' : new Ship(2)
}

export default shipList;