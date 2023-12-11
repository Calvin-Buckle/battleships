class Ship{
    constructor(size,id){
        
        
        this.hits = []
        this.size = size
        this.id = id
    }

 hit(index){
    return this.hits.push(index)
   
 }

 isSunk(){
    
  return this.position.every(position => this.hits.includes(position))

 }


 isHit() {
    return this.hits.some(hit => this.position.includes(hit));
  }


}









export default Ship;
