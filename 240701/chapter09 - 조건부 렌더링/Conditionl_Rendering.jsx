import React from "react";
import { useState } from "react";

function UserGreeting(props) {
    return <h1>다시 오셨군요!</h1>;
}

function GuestGreeting(props) {
    return <h1>회원가입을 해 주세요.</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

// function LoginButton and LogoutButton
function LoginButton(props) {
    return (
        <button onClick = {props.onClick}>
            로그인
        </button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick = {props.onClick}>
            로그아웃
        </button>
    )
}

// function LoginControl
function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(true);
    }

    let button;
    if (isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
        button = <LoginButton onClick={handleLoginClick} />;
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    )
}

export default LoginControl;