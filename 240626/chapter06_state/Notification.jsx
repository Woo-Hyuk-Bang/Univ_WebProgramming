import React from "react";

// CSS 추가하기
const styles = {
    // wrapper : 테두리
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color:"black",
        fontSize:16
    },
};

class Notification extends React.Component{
    constructor(props) {
        super(props);

        this.state={};
        }

        render(){

            return (
                <div style={styles.wrapper}>
                    <span style={styles.messageText}>
                        {this.props.message}
                    </span>
                </div>
            );
        }
    }
export default Notification;
