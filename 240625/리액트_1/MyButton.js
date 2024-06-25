// 리액트 컴포넌트

function MyButton(props) {
    const [isClicked, setisClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick: () => setisClicked(true)},
        isClicked ? 'clicked!' : 'Click here!'
    )
}

const domContainer = document.querySelector('#root');
const root=ReactDOM.createRoot(domContainer);
root.render(React.createElement(MyButton));