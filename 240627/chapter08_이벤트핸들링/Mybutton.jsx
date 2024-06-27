import React from "react";

class Mybutton extends React.Component {
    handleClick = () => {
        console.log('this is:', this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>클릭</button>
        );
    }
}

class Mybutton2 extends React.Component {
    handleClick () {
        console.log('this is:', this);
    }

    render() {
        // 이렇게 하면 this가 바운드
        return (
            <button onClick={() => this.handleClick()}>클릭</button>
        );
    }
}

export default Mybutton;