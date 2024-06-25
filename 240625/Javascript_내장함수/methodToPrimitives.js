// 기본 자료형과 객체 자료형의 차이
// 기본 자료형은 객체가 아니므로, 속성과 메소드를 추가할 수 없다.

let primitiveNumber = 273;

// 메소드 추가
primitiveNumber.method = function () {
    return 'Primitive Method';
};

// 메소드 실행
console.log(primitiveNumber.method());