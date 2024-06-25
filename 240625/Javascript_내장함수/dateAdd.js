// 현재 시간 함수
let date = new Date();

// 출력
console.log(date); 

// 시간을 더한다.
date.setFullYear(date.getFullYear() + 1);
date.setMonth(date.getMonth()+11);
date.setDate(date.getDate() + 3);

// 출력2
console.log(date);