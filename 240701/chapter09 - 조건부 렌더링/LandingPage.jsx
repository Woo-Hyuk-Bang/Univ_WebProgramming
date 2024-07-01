import React,{useState} from "react";
import Toolbar from "./Toolbar";
function LandingPage(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState('로그인 해주세요.');
    
    const onClickLogin = () =>{
        setIsLoggedIn(true);
        setMessage('소플과 함께하는 리액트 공부!')
    };
    const onClickLogout = () =>{
        setIsLoggedIn(false);
        setMessage('Good Morning!')
    };

        return(
            <div>
            <Toolbar 
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div
                style={{padding:16}}>{message}</div>
            </div>
        );
}

export default LandingPage;
        