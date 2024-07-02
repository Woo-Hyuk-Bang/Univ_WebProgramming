import React from "react";
import "./FancyBorder.css";

// specialization 합성 : 범용적인 개념을 구별되게 구체화

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

// 범용적으로 쓸 수 있는 컴포넌트를 만들어놓고, 이를 특수화시켜서 컴포넌트를
// 사용하는 합성방식(specialization)
function Dialog(props){
    return (
        < FancyBorder color="blue">
            <h1 className="Dialog-title"> {props.title} </h1>
            <p className="Dialog-message">{props.message}</p>
        </FancyBorder>
    );
}

function WelcomeDialog(props){
    return (
        < FancyBorder color="blue">
            <h1 className="Dialog-title">어서 오세요</h1>
            <p className="Dialog-message">우리 사이트에 방문 하신 것을 환영합니다. </p>
        </FancyBorder>
    )
}

export default WelcomeDialog;