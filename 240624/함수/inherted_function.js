// 표준 내장함수 목록의 사이트는 다음과 같다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects
// parseInt(), parseFloat(), 문자열을 숫자로 변환하는 함수
// 변수 선언
let inputA = "52";
let inputB = "52.273";
let inputC = "1401동";

// parseInt() 함수의 기본적인 사용
console.log(parseInt(inputA))

// parseInt() 함수와 parseFloat() 함수의 차이
console.log(parseInt(inputB))
console.log(parseFloat(inputB))

// 문자열 뒤에 숫자가 아닌 문자가 포함되어 있을 때
console.log(parseInt(inputC));

//==================================================================
// 타이머 함수, 1초마다 출력되는 함수 - setTimeout, setInterval, clearInterval

// 1초 후에
setTimeout(function (){
    console.log("1초가 지났습니다.");
}, 1000);

// 1초마다
setInterval(function (){
    console.log("1초 마다 호출됩니다.");
}, 1000);

// clearInterval - 특정시간마다 실행하던 함수 호출을 정지

// 1초마다
let id = setInterval(function (){
    console.log("출력합니다.");
}, 1000);

// 3초 후에
setTimeout(function (){
//    console.log("타이머를 제거합니다.");
    clearInterval(id);
}, 3000);