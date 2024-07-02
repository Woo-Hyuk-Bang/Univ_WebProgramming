import React, { useState } from "react";

const scaleNames = {
    c: '섭씨',
    f: '화씨'
};

function TemperatureInput(props) {
    const [temperature, setTemperature] = useState('');

    const handleChange = (event) => {
//      setTemperature(event.target.value);
        props.onTemperatureChange(event.target.value);
    }

    return (
        <fieldset>
            <legend>온도를 입력해주세요(단위:{scaleNames[props.scale]}):</legend>
            <input value={props.temperature} onChange={handleChange} /> 
        </fieldset>
    )
}
// input value = { temperature } => input value = { props.temperature } : shared state, 상위 컴포넌트로 올리는 state lifting

function Calculator(props) {
    return (
        <div>
            <TemperatureInput scale="c" />
            <TemperatureInput scale="f" />
        </div>
    )
}

function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}

function toFarenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// 사용방법 : tryConvert('abc', toCelsius) , tryConvert('10.22', toFahrenheit)
function tryConvert(temperture, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}