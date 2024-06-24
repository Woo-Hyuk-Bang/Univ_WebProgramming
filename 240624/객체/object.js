// 객체 선언
let product = {
    제품명: '7D 건조 망고',
    유형: '당절임',
    성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지: '필리핀'
};

// 출력
console.log(product);

// 객체 접근
product['제품명']
product['유형']
product['성분']
product['원산지']

console.log(product.제품명);
console.log(product.유형);
console.log(product.성분);
console.log(product.원산지);

//=============================================================
// 객체와 반복문

let object = {
    name: '바나나',
    price: 1200
};

// 출력
for (let key in object) {
    console.log(`${key}: $(object[key]}`)
}

let object2 = {
    name: '바나나',
    price: 1200,
    print: function () {
        console.log(`$(this.name)의 가격은 $(this.price)원입니다.`)
    }   
}

object2.print();

//================================================================
// 생성자 함수와 프로토타입 - 1. 객체에 메소드 추가

let object3 = [{
    name: '바나나',
    price: 1200,
    print: function () {
        console.log(`$(this.name)의 가격은 $(this.price)원입니다.`)
    }   
}, {
    name: '사과',
    price: 2000,
    print: function () {
        console.log(`$(this.name)의 가격은 $(this.price)원입니다.`)
    }     
}, {
    name: '배',
    price: 3000,
    print: function () {
        console.log(`$(this.name)의 가격은 $(this.price)원입니다.`)
    }     
}, {
    name: '고구마',
    price: 700,
    print: function () {
        console.log(`$(this.name)의 가격은 $(this.price)원입니다.`)
    }     
}, {
    name: '감자',
    price: 600,
    print: function () {
        console.log(`$(this.name)의 가격은 $(this.price)원입니다.`)
    }     
}, {
    name: '수박',
    price: 5000,
    print: function () {
        console.log(`$(this.name)의 가격은 $(this.price)원입니다.`)
    }     
}];

// 반복 출력

for (let object3 of object3) {
    object3.print();
}

//================================================================
// 함수를 외부로 내보낸 형태

let object4 = [
    { name: '바나나', price: 1200 },
    { name: '사과', price: 2000 },
    { name: '배', price: 3000 },   
    { name: '고구마', price: 700 },    
    { name: '감자', price: 600 },
    { name: '수박', price: 5000 }
];

// 함수를 선언합니다.
function printProduct(object4) {
    console.log(`${object4.name}의 가격은 ${product.price}원입니다.`);
}

// 반복해서 출력
for (let object4 of products) {
    printProduct(object4);
}

// 생성자 함수와 프로토타입
// 객체를 만드는 함수, 대문자로 시작하는 이름

// 생성자 함수
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// 생성자 함수를 사용한 객체 생성
// 생성자 함수
function Product(name, price){
    this.name - name;
    this.price = price;
}

// 객체를 생성합니다.
let Product = new Product("바나나", 1200);

// 출력
console.log(product);

//==============================================================
// 프로토타입
// 생성자 함수
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// 프로토타입에 메소드를 선언
Product.prototype.print = function() {
    console.log(`$(product.name)의 가격은 $(this.price)원입니다.`);
};


//=============================================================

// 객체 지향적으로 구성한 객체 배열
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// 프로토타입에 메소드를 선언
Product.prototype.print = function() {
    console.log(`$(product.name)의 가격은 $(this.price)원입니다.`);
};

// 상품 목록 선언
let products = [
    new Product('바나나', 1200),
    new Product('사과', 2000),
    new Product('배', 3000),
    new Product('고구마', 700),
    new Product('감자', 600),
    new Product('수박', 5000)
]

for (let product of products) {
    product.print();
}

console.log(null);
console.log(typeof(null));

//==============================================================
// 조금 더 나아가기 -> 아예 값이 없는 상태를 구분 시, null 사용

let zeroNumber = 0;
let falseboolean = '';
let emptyString = '';
let undefinedValue;
let nullValue = null;

if (zeroNumber == null)
    console.log("0은 존재하지 않는 값입니다");
if (falseboolean == null)
    console.log("false는 존재하지 않는 값입니다");
if (emptyString == null)
    console.log('빈 문자열은 존재하지 않는 값입니다')
if (undefinedValue == null)
    console.log('undefined는 존재하지 않는 값입니다.')
if (nullvalue == null)
    console.log('null은 존재하지 않는 값입니다.');