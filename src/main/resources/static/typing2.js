'use strict';

let result_button = document.getElementById('result_button')
result_button.style.display = 'none'


let subject = document.getElementById('subject');
const textList = ['みいこ', 'ポンポンポン', 'クルミ',
	'みいこと初詣に行った', '龍二は天才', 'キンキンとマックンは仲良し',
	'ルビーは珍しいハムスター'];
const textInJpananeseList = ['miiko', 'ponponpon', 'kurumi',
	'miikotohatumoudeniitta', 'ryuujihatensai', 'kinkintomakkunhanakayosi',
	'rubi-hamezurasiihamusuta-'];

//ランダムで入力項目を選択
let random = Math.floor(Math.random() * textList.length);

let correctNumber = 0;


let letterLength = textInJpananeseList[random].length;

console.log('letterLength:' + letterLength);

//選択された入力項目とローマ字を結ぶ
let input;
if (textList[random] == '料理') {
	input = textInJpananeseList[0];
	console.log(input);
} else if (textList[random] == 'みいこ') {
	input = textInJpananeseList[1];
	console.log(input);
} else if (textList[random] == 'ポンポンポン') {
	input = textInJpananeseList[2];
	console.log(input);
} else if (textList[random] == 'クルミ') {
	input = textInJpananeseList[3];
	console.log(input);
} else if (textList[random] == 'みいこと初詣に行った') {
	input = textInJpananeseList[4];
	console.log(input);
} else if (textList[random] == '龍二は天才') {
	input = textInJpananeseList[5];
	console.log(input);
} else if (textList[random] == 'キンキンとマックンは仲良し') {
	input = textInJpananeseList[6];
	console.log(input);
} else if (textList[random] == 'ルビーは珍しいハムスター') {
	input = textInJpananeseList[7];
	console.log(input);
}

let score = 0;
let flg = 0;


window.addEventListener("keydown", push_Keydown);

let showCount = document.getElementById('time');
let count = 30;

function push_Keydown(event) {
	if (flg == 0) {
		let countdown = function() {

			console.log(count--);
			showCount.textContent = count;
			if (count == 0) {
				result_button.style.display = 'block'
				clearInterval(timeoutId)
				
				let send_score=document.getElementById('send_score');
				send_score.value=score;
				console.log(send_score.value);
                subject.remove();
				document.getElementById('roman_alphabet').remove();
				
				/*onload=setTimeout("location.href='result_view.html'");*/
			}
		}
		flg++;
		const timeoutId = setInterval(countdown, 1000);
	}


	let keyCode = event.key;
	console.log(keyCode);
	if (letterLength == letterLength - correctNumber) {
		document.getElementById('subject').innerHTML
			= textList[random];

		document.getElementById('roman_alphabet').innerHTML
			= textInJpananeseList[random].substring(correctNumber, letterLength);
	}
	if (textInJpananeseList[random].charAt(correctNumber) == keyCode) {
		correctNumber++;
		score++;
		document.getElementById("roman_alphabet").style.color = 'black';
		document.getElementById("roman_alphabet").innerHTML
			= textInJpananeseList[random].substring(correctNumber, letterLength);

		let score_confirm = document.getElementById("score").value = score
		console.log(score_confirm);



		if (letterLength - correctNumber === 0) {
			random = Math.floor(Math.random() * textList.length);
			correctNumber = 0;
			letterLength = textInJpananeseList[random].length;

			document.getElementById('roman_alphabet').innerHTML
				= textInJpananeseList[random].substring(correctNumber, letterLength);

			document.getElementById('subject').innerHTML
				= textList[random];
		}
	} else if (textInJpananeseList[random].charAt(correctNumber) != keyCode) {
		document.getElementById("roman_alphabet").style.color = 'red';
	}

	// let score_result=document.getElementById('score_result');
	// console.log(score);
	// console.log(score_result)
	// score_result.textContent='score:'+score;



}










// //入力成功数
// let count=0;
// let text_char;
// let char_num=0;

// let afterInputLength=0;

// document.onkeydown=function(e){
//    let str=String.fromCharCode(e.keyCode).toLowerCase();
//    text_char=roman_alphabet.textContent.charAt(char_num);

//   if(roman_alphabet.textContent.length==roman_alphabet.textContent.length-afterInputLength){
//     document.getElementById('roman_alphabet').innerHTML=roman_alphabet.textContent.substring(afterInputLength,roman_alphabet.length);

//    }


//  console.log('if前:'+roman_alphabet.textContent.charAt(afterInputLength));
//  console.log('if前:'+roman_alphabet.textContent);
//  console.log('押されたキー:'+str);



//    if(roman_alphabet.textContent.charAt(afterInputLength)==str){


//        console.log('doc前 random.roman_alphabet.textContent:'+roman_alphabet.textContent.charAt(afterInputLength));
//        console.log('doc前 afterInputLenght:'+afterInputLength);
//        console.log('doc前 alphabetLength:'+alphabetLength);
//        console.log('doc前 alpahbet:'+roman_alphabet.textContent);
//       afterInputLength++;
//        document.getElementById('roman_alphabet').innerHTML=textInJpananeseList[random].substring(afterInputLength,input.length);

//        console.log('doc後 random.roman_alphabet.textContent:'+roman_alphabet.textContent.charAt(afterInputLength));
//        console.log('doc後 afterInputLenght:'+afterInputLength);
//        console.log('doc後 alphabetLength:'+alphabetLength);
//        console.log('doc後 alpahbet:'+roman_alphabet.textContent);


//        console.log('タイプ成功');

//    }else{
//        console.log('失敗');
//    }

