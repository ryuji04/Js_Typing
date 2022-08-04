'use strict';

let showCount=document.getElementById('count');

let count=5;
let countdown=function(){
    console.log(count--);
showCount.textContent=count;
 if(count==0){
     clearTimeout(timeoutId);
     alert('timeout!');
 }
}

const timeoutId=setInterval(countdown,1000);