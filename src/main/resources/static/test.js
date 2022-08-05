'use strict';

console.log(2);

// document.addEventListener('keydown',
//     event => {
//   let keys = event.key;
//            alert(`${keys}`+'が押されました');
//     });

window.addEventListener("keydown",push_Keydown);

function push_Keydown(event){
alert(event.key);
}





