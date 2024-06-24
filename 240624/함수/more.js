// 함수 덮어 쓰기 예제

// A
함수 = function () { console.log("1"); };
함수 = function () { console.log("2"); };
함수(); // 2

// B
함수B = function () { console.log("1");};
function 함수B() { console.log("2"); }; 
함수B(); // 1 -> 선언적 함수를 먼저 실행하고, 익명함수를 나중에 실행

// C
함수C = function 함수() { console.log("1"); };
함수C = function () {console.log("2")};
함수C(); // 2

// D
function 함수D() {console.log("1")};
function 함수D() {console.log("2")};
함수D(); // 2

// 익명함수와 화살표 함수의 차이 - This 키워드의 의미
(function (){
    console.log(this);
})();

// 화살표 함수 생성 후 곧바로 호출 - 화살표 함수 내부에서의 this
(() => {
    console.log(this);
})();