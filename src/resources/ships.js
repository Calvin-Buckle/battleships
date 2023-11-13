import Ship from "../factories/shipFactory";

let shipList = {
//Player ships~
'Carrier' : new Ship([0,0,0,0,0],5),

'BattleShip' : new Ship([0,0,0,0],4),

'Cruiser' : new Ship([0,0,0],3),

'Submarine' : new Ship([0,0,0],3),

'Destroyer' : new Ship([0,0],2),

//Enemy ships
 'EnemyCarrier'  : new Ship([0,0,0,0,0],5),
 'EnemyBattleShip':  new Ship([0,0,0,0],4),
 'EnemyCruiser' : new Ship([0,0,0],3),
 'EnemySubmarine' : new Ship([0,0,0],3),
 'EnemyDestroyer' : new Ship([0,0],2)
}

export default shipList;