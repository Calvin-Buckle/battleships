class Ship{
    constructor(position,size){
        
        this.position = position
        this.hits = []
        this.size = size
    }

 hit(index){
    return this.hits.push(index)
   
 }

 isSunk(){
    
  return this.position.every(position => this.hits.includes(position))

 }
 
 

}








class Player{
 constructor(){}
}







export default Ship;
