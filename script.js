//合計スコア用の変数
let score = 0;

function showScore(){
//スコア表示の処理をここに記述
document.getElementById('score-message').innerHTML= score;
if (score == 0) {
 
} else if (score == 1) {
    
} else if (score == 2) {

} else if (score == 3) {

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
switch (answer) {
    case 'a':
    case 'c':
        console.log('残念');
        break;
    case 'b':
        console.log('正解');
        break;
}
}

function answerQuiz2(){
//問題2の処理をここに記述
}

function answerQuiz3(){
//問題3の処理をここに記述
}
