import React from "react";
import Comment_3 from "./Comment_3";

function CommentList_3(props) {
    return (
        <div>
        <Comment_3 name = {"제니"} comment={"안녕하세요, 블랙핑크 입니다."}/>
        <Comment_3 name = {"로제"} comment = {"리액트 재미있어요!"}/>
        </div>
    );
}

export default CommentList_3;