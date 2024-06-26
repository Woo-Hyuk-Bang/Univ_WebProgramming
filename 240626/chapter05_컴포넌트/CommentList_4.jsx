import React from "react";
import Comment_4 from "./Comment_4";

const comments = [
    {
        name: "제니",
        comment: "안녕하세요",
    },
    {
        name: "김철수",
        comment: "안녕하세요~!",
    },
]

function CommentList_4(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment_4 name={comment.name} comment={comment.comment} />  
                );
            })}
        </div>
    );
}

export default CommentList_4;