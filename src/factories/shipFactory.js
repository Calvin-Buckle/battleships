class Ship{
    constructor(name,position,size){
        this.name = name
        this.position = position
        this.hits = []
        this.size = size
    }

 hit(index){
    return this.hits.push(index)
   
 }

}





export default Ship;
