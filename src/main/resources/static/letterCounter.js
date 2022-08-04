'use strict';
// let num=0;
// function keyup(e){
//     num++;
//     console.log(num);
// };

// let text=document.getElementById('text');
// text.addEventListener('keyup',keyup,false);

let text=document.getElementById('text');
let count=document.getElementById('count');

let num=0;
function keyup(e){
num++;
console.log(num);
console.log(text.value);
console.log(text.value.length);

count.textContent=10-num;
}

text.addEventListener('keyup',keyup,false);






