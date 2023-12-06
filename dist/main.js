(()=>{"use strict";const e=class{constructor(e){this.hits=[],this.size=e}hit(e){return this.hits.push(e)}isSunk(){return this.position.every((e=>this.hits.includes(e)))}isHit(){return this.hits.some((e=>this.position.includes(e)))}},t={Carrier:new e(5),BattleShip:new e(4),Cruiser:new e(3),Submarine:new e(3),Destroyer:new e(2),EnemyCarrier:new e(5),EnemyBattleShip:new e(4),EnemyCruiser:new e(3),EnemySubmarine:new e(3),EnemyDestroyer:new e(2)};document.addEventListener("gameboardReady",(()=>{document.getElementById("playerBoard");let e,n,r,i=document.querySelectorAll(".ship"),l=document.querySelectorAll(".block");i.forEach((e=>{e.addEventListener("dragstart",(()=>{console.log("dragging")}))})),document.addEventListener("dragstart",(t=>{e=t.target.getAttribute("Id")})),l.forEach((i=>{i.addEventListener("dragover",(l=>{if(l.preventDefault(),n=t[e].size,!r){let e=i;for(let t=0;t<n;t++)e.classList.add("hovered"),e=e.nextElementSibling;r=!0}}))})),l.forEach((e=>{e.addEventListener("dragleave",(()=>{r=!1;let t=e;for(let e=0;e<n;e++)t.classList.remove("hovered"),t=t.nextElementSibling}))})),l.forEach((r=>{r.addEventListener("drop",(()=>{n=t[e].size,console.log("dropped"),console.log(n);let i=r;for(let e=0;e<n;e++)i.classList.add("selected"),i.classList.remove("hovered"),i=i.nextElementSibling}))}))})),document.addEventListener("gameboardReady",(()=>{let e=document.getElementById("start"),n=(document.getElementById("reset"),document.getElementById("enemyBoard"));function r(){return Math.floor(100*Math.random())+0}function i(e){let l=n.firstElementChild,s=r();for(let e=0;e<s;e++)l=l.nextElementSibling;let o=function(e,n){let r;for(let i=0;i<t[e].size;i++){if(n.classList.contains("selected")){r=!1;break}if(!n.nextElementSibling){r=!1;break}for(let e=0;e<10;e++){if(!n.nextElementSibling){r=!1;break}n=n.nextElementSibling,r=!0}}return r}(e,l);if(o)for(let n=0;n<t[e].size&&(l.classList.add("selected"),l.classList.add(e),n!=t[e].size-1);n++)for(let e=0;e<10;e++)l=l.nextElementSibling;else i(e)}function l(e){let i=r(),s=n.firstElementChild;for(let e=0;e<i;e++)s=s.nextElementSibling;let o=function(e,n,r){let i=!0;for(let r=0;r<t[e].size;r++){if(n.classList.contains("selected")){i=!1;break}let e=Array.from(n.classList),t=n.nextElementSibling;if(!t){i=!1;break}{let l=Array.from(t.classList);if(e[r]!==l[r]){i=!1;break}n=t}}return i}(e,s);if(o)for(let n=0;n<t[e].size;n++)s.classList.add("selected"),s.classList.add(e),s=s.nextElementSibling;else l(e)}function s(e){"horizontal"===function(){let e;return e=Math.floor(100*Math.random())+0<=50?"vertical":"horizontal",e}()?l(e):i(e)}e.addEventListener("click",(()=>{s("EnemyCarrier"),setTimeout(s("EnemyBattleShip"),10),setTimeout(s("EnemyCruiser"),10),setTimeout(s("EnemySubmarine"),10),setTimeout(s("EnemyDestroyer"),10)}))})),new class{constructor(){this.board=this.generateDomBoard(),document.dispatchEvent(new Event("gameboardReady"))}generateDomBoard(){let e=document.getElementById("playerBoard"),t=document.getElementById("enemyBoard");for(let n=0;n<10;n++)for(let r=0;r<10;r++){let r=document.createElement("div"),i=document.createElement("div");e.appendChild(r),t.appendChild(i),r.classList="block";let l=this.zoneName(n);i.classList=l}}zoneName(e){let t;return 0==e&&(t="A"),1==e&&(t="B"),2==e&&(t="C"),3==e&&(t="D"),4==e&&(t="E"),5==e&&(t="F"),6==e&&(t="G"),7==e&&(t="H"),8==e&&(t="I"),9==e&&(t="J"),t}}})();