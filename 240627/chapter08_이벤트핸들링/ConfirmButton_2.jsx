// 함수 컴포넌트를 활용한 ConfirmButton
import React from "react";
import { useState } from "react";

function ConfirmButton_2 (props){
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleClick = () => {
        setIsConfirmed ((prevIsConfirmed) => !prevIsConfirmed);
    }

    return(
        <button onClick={handleClick} disabled={isConfirmed}>
            {isConfirmed ? '확인됨':'확인하기'} 
        </button>
    );
}

export default ConfirmButton_2;
