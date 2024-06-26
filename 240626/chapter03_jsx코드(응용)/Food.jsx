import React from "react";

// 3-5. JSX 코드를 사용하지 않은 Menu컴포넌트 코드
function Food(props){
    return React.createElement(
        'div',
        null,
        [
            React.createElement(
                'h1',
                null,
                `이 음식의 이름은 ${props.name}입니다.`
            ),
            React.createElement(
                'h2',
                null,
                `이 음식의 가격은 ${props.costOfMenu}원입니다.`
            )
        ]
    )
}

export default Food;