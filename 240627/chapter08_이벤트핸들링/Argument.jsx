import React from "react";

function Mybutton_3 (props){
    const handleDelete = (id, event) => {
        console.log(id, event.target);
    }
    return (
        <button onClick={(event)=> handleDelete( 1, event )}>삭제하기</button>
    )
}

export default Mybutton_3;