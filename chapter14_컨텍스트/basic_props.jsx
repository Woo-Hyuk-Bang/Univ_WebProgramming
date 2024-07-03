import React from "react";

function App(props) {
    return <Toolbar theme="dark" />
}

function Toolbar(props) {
    // Toolbar 컴포넌트 - ThemedButton에 Theme을 넘겨주기 위해서 Theme prop을 소유해야함
    
    return (
        <div>
            <ThemedButton theme={props.theme} />
        </div>
    );
}

function ThemedButton(props) {
    return <Button theme={props.theme} />;
}
