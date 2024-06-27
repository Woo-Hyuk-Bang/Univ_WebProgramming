// useState : state를 사용하기 위한 훅
import React, {useState} from "react";

function Counter(props) {
    var count = 1;
    return (
        <div>
            <p>총 (count)번 클릭했습니다.</p>
            <button onClick ={()=> count++}>클릭</button>
        </div>
    );
}

export default Counter;