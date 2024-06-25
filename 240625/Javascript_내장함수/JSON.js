// json : 자바스크립트 객체를 사용한 데이터 표현 방법
// 제약상황
// 1. 문자열은 큰따옴표로 만듬
// 2. 모든 키는 큰따옴표로 감싼다.
// 3. 숫자, 문자열, 불 자료형만 사용할 수 있다.

// 변수 선언
const javascriptObject = [{
    name: '윤인성',
    region: '서울'
}, {
    name: '윤명월',
    region: '도쿄'
}];

// JSON.stringify() 메소드로 자바스크립트 객체를 JSON문자열로 변환
const outputA = JSON.stringify(javascriptObject);
const outputB = JSON.stringify(javascriptObject, null, 2);
console.log(typeof(outputA));
console.log(outputA);
console.log(outputB);
console.log('-------------');

// JSON.parse()메소드로 JSON 문자열을 자바스크립트 객체로 변환
const outputC = JSON.parse(outputB);
console.log(typeof(outputC));
console.log(outputC);