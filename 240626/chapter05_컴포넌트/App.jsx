// 컴포넌트 합성 - 여러개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것,
// 복잡한 화면을 여러 개의 컴포넌트로 나누어서 구현
import Welcome from './Welcome';

function App(props){
    return (
            <div>
                <Welcome name = "Terry" />
                <Welcome name = "Andy" />
                <Welcome name = "Joe" />
            </div>
    )
}

export default App;