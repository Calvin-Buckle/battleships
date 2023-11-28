class Ship{
    constructor(size){
        
        
        this.hits = []
        this.size = size
    }

 hit(index){
    return this.hits.push(index)
   
 }

 isSunk(){
    
  return this.position.every(position => this.hits.includes(position))

 }


 isHit() {
    return this.hits.some(hit => this.position.includes(hit));
  }}








class Player{
 constructor(){
    this.player = player;
    this.enemy = enemy;
 }
}







export default Ship;
