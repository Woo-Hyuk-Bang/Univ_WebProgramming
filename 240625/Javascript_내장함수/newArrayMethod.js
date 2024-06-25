// 배열 선언(ECMAScript5)
// array 객체 - map() / foreach / filter 문, 매우 중요하다.
let array = [52, 273, 32, 64, 72];

// foreach() 메소드
console.log('--- foreach() 메소드 ---');
array.forEach((item, index) => {
    console.log(`- ${index}번째 요소는 $(item)입니다.`);
});

// map() 메소드
console.log();
console.log('---map() 메소드 ---');
let outputA = array.map((item, index) => {
    // 배열의 모든 요소를 제곱해서 새로운 배열을 만든다.
    return item * item
});
console.log(outputA);

//filter() 메소드
console.log();
console.log('--- filter() 메소드 ---');
outputB = array.filter((item, index) => {
    // 짝수 출력
    return item % 2 == 0;
});
console.log(outputB);

// 프로토타입 메소드 추가
// 프로토타입에 메소드를 추가하면 해당 전체 자료형 추가 가능

// 프로토타입에 메소드를 추가
String.prototype.contain = function (input) {
    return this.indexOf(input) >= -1;
};

// 메소드를 활용합니다.
console.log('안녕하세요'.contain('안녕'));
console.log('안녕하세요'.contain('데굴데굴'));
