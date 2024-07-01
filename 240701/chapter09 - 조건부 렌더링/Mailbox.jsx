import React from "react";

function Mailbox(props) {
    const unreadMessages = props.unreadMessages || [];

    // unreadMessages가 문자열인 경우 배열로 변환
    if (typeof unreadMessages === 'string') {
        unreadMessages = [unreadMessages];
    } else if (!Array.isArray(unreadMessages)) {
        unreadMessages = [];
    }

    return (
        <div>
            <h1>안녕하세요!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.
                </h2>            
            }
        </div>
    );
}

export default Mailbox;