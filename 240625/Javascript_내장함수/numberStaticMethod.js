// 변수 선언
let numberA = Number.MAX_VALUE;
let numberB = Number.MAX_VALUE +1;

// 출력합니다
console.log(numberA); // 1.7976931348623157e+308
console.log(numberB); // 1.7976931348623157e+308

// Infinity 변환 숫자
let addNumber = Number(`0.0000000000000001e+308`);
let number = Number.MAX_VALUE + addNumber;

// 출력
console.log(number); // Infinity