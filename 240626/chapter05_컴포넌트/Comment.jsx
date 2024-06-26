// 5.5 컴포넌트 추출 : 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나누는 과정
// 큰 컴포넌트를 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것(재사용성)
// CommentList를 root에 로드

import React from "react";

function Comment(props) {
    return (
        <div>
            <h1>내가 만든  첫 컴포넌트</h1>
        </div>
    );
}
export default Comment;
    