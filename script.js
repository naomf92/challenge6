//合計スコア用の変数
let score = 0;

function showScore(){
//スコア表示の処理をここに記述
document.getElementById('score-message').innerHTML= score;

if (score == 0) {
    document.getElementById('score-message').innerHTML= score +'点: '+'残念';
} else if (score == 1) {
    document.getElementById('score-message').innerHTML= score +'点: '+'まあまあ';
} else if (score == 2) {
    document.getElementById('score-message').innerHTML= score +'点: '+'おしい！';
} else if (score == 3) {
    document.getElementById('score-message').innerHTML= score +'点: '+'すばらしい！';
} else {

}
}

/**************
1問目の正解はBのラバト
2問目の正解はAのバイカル湖
3問目の正解はCのレンブラント
**************/

function answerQuiz1(){
//問題1の処理をここに記述
const quiz_1 = document.getElementById('quiz-1');
console.log('1問目の' + quiz_1.answer.value + 'を選択しました');

let answer = 'b';
if (quiz_1.answer.value == 'a') {
    console.log('不正解です');
    console.log('現在のトータルスコア：' + score);
} else if (quiz_1.answer.value == 'b') {
    console.log('正解です');
    console.log('現在のトータルスコア：' + ++score);
} else if (quiz_1.answer.value == 'c') {
    console.log('不正解です');
    console.log('現在のトータルスコア：' + score);
} else {
    console.log('未回答です');
}

// switch (quiz_1.answer.value) {
//     case 'a':
//     case 'c':
//         console.log('不正解です');   
//         break;
//     case 'b':
//         console.log('正解です');
//         break;
//     default:
//         console.log('未回答です');
// }

}

function answerQuiz2(){
//問題2の処理をここに記述
const quiz_2 = document.getElementById('quiz-2');
console.log('2問目の' + quiz_2.answer.value + 'を選択しました');

let answer = 'a';
if (quiz_2.answer.value == 'a') {
    console.log('正解です');
    console.log('現在のトータルスコア：' + ++score);
} else if (quiz_2.answer.value == 'b') {
    console.log('不正解です');
    console.log('現在のトータルスコア：' + score);
} else if (quiz_2.answer.value == 'c') {
    console.log('不正解です');
    console.log('現在のトータルスコア：' + score);
} else {
    console.log('未回答です');
}
}

function answerQuiz3(){
//問題3の処理をここに記述
const quiz_3 = document.getElementById('quiz-3');
console.log('3問目の' + quiz_3.answer.value + 'を選択しました');

let answer = 'c';
if (quiz_3.answer.value == 'a') {
    console.log('不正解です');
    console.log('現在のトータルスコア：' + score);
} else if (quiz_3.answer.value == 'b') {
    console.log('不正解です');
    console.log('現在のトータルスコア：' + score);
} else if (quiz_3.answer.value == 'c') {
    console.log('正解です');
    console.log('現在のトータルスコア：' + ++score);
} else {
    console.log('未回答です');
}
}
