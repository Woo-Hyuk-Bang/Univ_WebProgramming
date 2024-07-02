import React from "react";
import { useState } from "react";
import "./FancyBorder.css";

// 범용적으로 쓸 수 있는 컴포넌트를 만들어놓고, 이를 특수화시켜서 컴포넌트를
// 사용하는 합성방식(specialization)
function Dialog(props){

    return (
        < FancyBorder color="blue">
            <h1 className="Dialog-title"> {props.title} </h1>
            <p className="Dialog-message">{props.message}</p>
            {props.children}
        </FancyBorder>
    );
}

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function SignUpDialog(props){
    const [nickname, setNickname] = useState("");
    const handleChange = (event) => {
        setNickname(event.target.value);
        }
    
    const handleSignUp = () => {
        alert(`어서 오세요, ${nickname}님!`);
        }

    return(  
        <Dialog title= '화성탐사프로그램'message= '우리 사이트를 방문하신 것을 환영합니다.'>
            <label>이름: <input value= {nickname} onChange={handleChange} />
                <button onClick= {handleSignUp} > 가입하기 </button>
            </label>
        </ Dialog > 
        );
}

export default SignUpDialog;