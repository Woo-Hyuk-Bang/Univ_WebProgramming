// 함수 매개 변수 초기화
function print(name, count) {
    // 함수 매개 변수 초기화
    if (!count) {
        count = 1;
    }
    // 함수 본문
    console.log(`$(name)이/가 ${count}개 있습니다.`)
}

// 함수를 호출
print("사과");

// 함수 선언
function callTenTimes(callback) {
    // 10회 반복
    for (let i = 0; i < 10; i++) {
        // 매개 변수로 전달된 함수를 호출
        callback();
    }
}