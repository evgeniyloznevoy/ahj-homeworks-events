!function(){"use strict";function e(e,s){const t=Math.ceil(e),l=Math.floor(s);return Math.floor(Math.random()*(l-t))+t}const s=document.getElementsByClassName("cell"),t=document.getElementById("scores"),l=document.getElementById("misses"),i=document.getElementsByClassName("game_end")[0],n=document.getElementsByClassName("button")[0],r=new class{constructor(){this.currentCell=-1}setCurrentCell(e){this.currentCell=e}getCurrentCell(){return this.currentCell}hit(e){return this.currentCell===e}},c=new class{constructor(e,s,t,l){this.cells=[],this.cellClickListeners=[],this.goblin=e,this.scoresElement=s,this.missesElement=t,this.popElement=l,this.scores=0,this.misses=0,this.timerId=null}init(e,s){this.setCellTimer(),this.cells=Array.from(e),this.setCellClickEvent(),s.addEventListener("click",(e=>this.onButtonClick(e)))}onCellClick(e){if(5===this.misses)return;const s=this.cells.indexOf(e.currentTarget);this.goblin.hit(s)?this.setScores():this.setMisses()}onButtonClick(){this.misses=0,this.popElement.classList.add("game_end_display"),this.scores=0,this.misses=0,this.missesElement.innerText=this.misses,this.scoresElement.innerText=this.scores,this.setCellTimer()}changeCell(){let s=e(0,this.cells.length),t=this.cells[s];const l=this.goblin.getCurrentCell();if(-1===l)return t.classList.add("cell__active"),void this.goblin.setCurrentCell(s);for(this.cells[l].classList.remove("cell__active");t===this.cells[l];)s=e(0,this.cells.length),t=this.cells[s];t.classList.add("cell__active"),this.goblin.setCurrentCell(s)}setCellClickEvent(){for(let e=0;e<this.cells.length;e+=1)this.cells[e].addEventListener("click",(e=>this.onCellClick(e)))}setScores(){this.changeCell(),this.scores+=1,this.scoresElement.innerText=this.scores,this.setCellTimer()}setMisses(){this.misses+=1,this.missesElement.innerText=this.misses,5===this.misses&&(clearInterval(this.timerId),this.popElement.classList.remove("game_end_display"))}setCellTimer(){clearInterval(this.timerId),this.timerId=setInterval((()=>{this.changeCell()}),1500)}}(r,t,l,i);c.init(s,n)}();