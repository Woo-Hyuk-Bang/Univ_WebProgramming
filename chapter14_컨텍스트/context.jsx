import React from "react";

// basic_props의 기능들을 컨텍스트 기법으로 구현
// Provider의 모든 하위 컴포넌트가 얼마나 깊이 위치해 있는지 관계없이 컨텍스트의 데이터를 읽을 수 있습니다.
// 컨텍스트는 데이터를 매번 컴포넌트를 통해 전달할 필요 없이 컴포넌트 트리로 곧바로 전달하게 해 줌
// Provider를 사용하여 하위 컴포넌트들에게 현재 테마 데이터를 전달
// 모든 하위 컴포넌트들은 컴포넌트 트리 하단에 얼마나 깊이 있는지에 관계없이 데이터를 읽을 수 있다.

const ThemeContext = React.createContext('light');

function App(props) {
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar/>
        </ThemeContext.Provider>
    )
}

//이제 중간에 위치한 컴포넌트는 테마 데이터를 하위 컴포넌트로 전달할 필요가 없다.
function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}
    
function ThemedButton(props) {
//리액트는 가장 가까운 상위 테마 Provider를 찾아서 해당되는 값을 사용합니다.
//만약 해당되는 Provider가 없을 경우 기본값(여기에서는 ‘Light’를 사용합니다.
//여기에서는 상위 Provider가 있기 때문에 현재 테마의 값은 ‘dark’가 됩니다.
    return (
        <ThemeContext.Consumer>
            {  value=> <button theme={value} />}
        </ThemeContext.Consumer>
    );
}

export default App;