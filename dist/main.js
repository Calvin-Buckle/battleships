(()=>{"use strict";let s=new class{constructor(){this.board=[];for(let s=0;s<10;s++){this.board.push([]);for(let t=0;t<10;t++)this.board[s].push(0)}}},t=new class{constructor(s,t,o){this.name=s,this.position=t,this.hits=[],this.size=o}hit(s){return this.hits.push(s)}}("destroyer",1);t.hit(3),console.log(s),console.log(t)})();