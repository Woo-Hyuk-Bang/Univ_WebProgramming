import React from "react";
import { useState } from "react";

function Toggle_2 (props){
    const [isToggleOn ,setIsToggleOn] = useState(true)

    // 방법 1. 함수 안에 함수로 정의
    function handleClick(){
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    // 방법2. arrow function을 사용하여 정의
    const handleClick_2 = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }
    return (
        <button onClick={handleClick_2}>{isToggleOn ? '켜짐':'꺼짐'}</button>
    )
}

export default Toggle_2;