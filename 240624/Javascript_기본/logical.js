// 불 - 참과 거짓의 표현 : True, False
console.log(52 < 273);
console.log(52 > 273);
console.log("하마" < "가방");

// 불, 논리 연산자 실습 - 비교
let hours = (new Date()).getHours();

console.log(hours < 3 || 8 < hours);
console.log(3 <= hours && hours <= 8);