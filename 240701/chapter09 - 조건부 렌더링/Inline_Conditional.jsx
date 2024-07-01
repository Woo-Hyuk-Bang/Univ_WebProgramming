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

// userStatus - 인라인 if / else
function UserStatus(props) {
    return (
        <div>
            이 사용자는 현재 <b>{props.isLoggedIn ? '로그인' : '로그인하지 않은'}</b> 상태입니다.
        </div>
    )
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
function LoginControl2(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(true);
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {isLoggedIn
                ? <LogoutButton onClick={handleLogoutClick} />
                : <LoginButton onClick={handleLoginClick} />           
            }
        </div>
    )
}

export default LoginControl2;