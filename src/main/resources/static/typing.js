"use strict";


const textList=[
	'hello world',
	'good',
	'i love javascript'
];

let subject=document.getElementById("subject");
let random = Math.floor( Math.random() * textList.length );
subject.textContent=textList[random];

let count=0;
let text_char;
let char_num=0;
	
 random = Math.floor( Math.random() * textList.length );
 /*
let arrayTextList=subject.textContent.split("");
*/
subject.textContent=textList[random];
console.log(subject.textContent)

document.onkeydown=function(e){

console.log(String.fromCharCode(e.keyCode));
let str =String.fromCharCode(e.keyCode).toLowerCase();
console.log(str);
	let text_char=subject.textContent.charAt(char_num);
	console.log('text_char:'+text_char);
	if(str==text_char){
		count++;
		console.log('入力成功　count:'+count);
		char_num++;
	}else{
		console.log("ミスタイプ")
	}
	
	console.log(char_num);
}




	
/*
const form=document.forms.typing;
console.log(form);

if(form.input.value==subject.textContent){
	let count = 0;
 
form.btn.addEventListener('click', function(e) {
        
        if(form.input.value === subject.textContent) {
          count++;
          init();
        } else {
          subject.textContent = '間違いです！';
          setTimeout(function(){ init() },1000)
        }
 
});
}
*/














