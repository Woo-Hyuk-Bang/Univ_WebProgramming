// 익명 함수 - 코드의 내부 덩어리가 모두 실행됨
let 함수 = function () {
    console.log("함수의 첫 번째 줄");
    console.log("함수의 두 번째 줄");
};

함수;
console.log(함수);

// 선언적 함수 - 코드의 내부 덩어리가 모두 실행됨
let 선언함수 = function () {
    console.log("함수의 첫 번째 줄");
    console.log("함수의 두 번째 줄");
};

선언함수;
console.log(선언함수);

// 화살표 함수[ECMAScript6]
() => { } // 하나의 표현식을 리턴하는 함수를 만들 시, 중괄호 생략 가능

let 함수2 = () => {
    console.log("함수의 첫 번째 줄");
    console.log("함수의 두 번째 줄");
};

함수2;
console.log(함수2);

// 익명 함수와 화살표 함수의 차이점
