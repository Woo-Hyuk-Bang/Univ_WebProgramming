import { useState, useEffect } from "react";

function Counter_3(props) {
    const [ count, setCount ] = useState(0);
    // componentDidMount(), componentDidUpdate()와 비슷한 방식으로 작용
    useEffect(() => {
        //브라우저 API를 사용해서 document의 title을 업데이트
        document.title = `총 ${count} 번 클릭했습니다.`;
    });

    return (
        <div>
            <p> 총 {count}번 클릭했습니다.</p>
            <button onClick = {()=> setCount(count+1)}>클릭</button>
        </div>
    );
}

export default Counter_3;