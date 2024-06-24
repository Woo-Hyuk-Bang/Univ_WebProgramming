// JAVASCRIPT는 총 6가지의 자료형이 존재한다.
// 문자열
console.log(typeof('String'));

// 숫자
console.log(typeof(273));

// 불(참/거짓)
console.log(typeof(true));

// 함수
console.log(typeof(function (){}))

// 객체
console.log({})

// undefined
console.log(typeof(alpha))

// 강제 자료형 변환 함수 - Number(), String(), Boolean()
console.log(Number("52"));
console.log(Number("52.273"));
console.log(Number(true));
console.log(Number(false));
console.log(Number("안녕하세요"));      // NaN 출력

// Nan - 숫자로 변환할 수 없ㄴ느 문자열을 NUMBER 함수를 대입하면 'NaN' 출력
// Not a Number - 숫자 자료형이지만 숫자가 아닌 것을 의미
// NaN은 무조건적으로 다르고, 확인할 때는 isNaN() 함수를 사용
// NaN.js

// 자동 자료형 반환 - Autoconvert.js
