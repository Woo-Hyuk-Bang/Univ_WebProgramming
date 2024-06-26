import React from "react";

function Comment_2(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img alt=""
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    style={styles.image}
                />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>방우혁</span>
                <span style={styles.commentText}>제가 만든 첫 컴포넌트입니다.</span>
            </div>
        </div>
    );
}

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
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
}


export default Comment_2;