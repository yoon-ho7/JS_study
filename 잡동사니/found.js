/*
'array'
-하나의 variable 안에 데이터의 list를 가지게 함
-const xxx = []; 꼴로 나타냄
-추가 또는 업데이트 가능

'object'
- const xxx = {}; 꼴로 나타냄
- 안에서 = 대신 : 와 , 를 사용
- 안의 것은 console.log(xx.yy);로 받아옴
- const여도 외부에서 안의 것은 수정 가능
- xx.yy = zz;로 추가 또는 업데이트 가능

'function' - function xxx(yyy){
    console.log(yyy);
} xxx(y'y'y'); 이런 식으로 사용
*/
const a = 5;
let b = 10;
const amIFat = false;

const daysOfWeek = ["mon", "tue", "wed"];
// "daysOfWeek" array에서 item 받아오기
console.log(daysOfWeek);
// "daysOfWeek" array에 요일 추가
daysOfWeek.push("sun");