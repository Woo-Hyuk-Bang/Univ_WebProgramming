// 현재 시간을 기반으로 Date 객체
let dateA = new Date();
console.log(dateA); // 2024-06-25T00:36:42.841Z

// 유닉스 타임(1970년 1월 1일부터....시작된 날짜)
let dateB = new Date(692281800000);
console.log(dateB); // 1991-12-09T12:30:00.000Z

// 문자열을 기반으로 Date 객체를 생성합니다.
let dateC = new Date("December 9, 1991 21:30:00")
console.log(dateC); // 1991-12-09T12:30:00.000Z

// 시간 요소 생성
let dateD = new Date(1991, 12 - 1, 9, 21, 30, 0, 0);
console.log(dateD); // 1991-12-09T12:30:00.000Z
