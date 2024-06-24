// 함수의 기본 형태
function power(x) {
    return x * x;
}

console.log(power(10));
console.log(power(20));


// 매개 변수가 여러 개인 함수

function multiply(x, y){
    return x * y;
}

console.log(multiply(52,273));
console.log(multiply(103,32));

// 리턴 없는 함수
function print(message) {
    console.log(`"${message}"(이)라고 말했습니다!`);
}

print("안녕하세요");
print("뿌잉뿌잉");

// 매개 변수와 리턴(1) - min부터 max까지 더하는 SUM함수 구현
function sum(min, max) {
    let ouput = 0;
    for (let i = min; i <= max; i++) {
        output += i;
    }
    return output;
}

console.log(sum(1, 100));