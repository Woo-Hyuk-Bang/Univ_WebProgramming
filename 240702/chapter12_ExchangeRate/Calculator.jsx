import React, { useState } from "react";
import MoneyInput from "./MoneyInput";

function toUsaCalculate(korean){
    return korean / 1387;
}

function toJapanCalculate(korean) {
    return korean / 858;
}

function toChinaCalculate(korean) {
    return korean / 190;
}

// 사용방법 : tryConvert('abc', toCelsius) , tryConvert('10.22', toFahrenheit)
function tryConvert(korean, convert) {
    const input = parseFloat(korean);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator_2(props) {
    const [korean, setMoney] = useState('');
    const [scale, setScale] = useState('k');

    const toUsaChange = (korean) => {
        setMoney(korean);
        toUsaCalculate(korean);
        setScale('u');
    }

    const toJapanChange = (korean) => {
        setMoney(korean);
        toJapanCalculate(korean);
        setScale('j');
    }

    const toChinaChange = (korean) => {
        setMoney(korean);
        toChinaCalculate(korean);
        setScale('c');
    }

//    const Korea = scale === 'k' ? tryConvert(korean, toKoreaChange) : korean;
    const Usa = scale === 'u' ? tryConvert(korean, toUsaChange) : korean;
    const Japan = scale === 'j' ? tryConvert(korean, toJapanChange) : korean;
    const China = scale === 'c' ? tryConvert(korean, toChinaChange) : korean;

    return (
        <div>
            <MoneyInput
                scale="k"
                money={korean}/>                            
            <MoneyInput
                scale="u"
                money={Usa}
                onMoneyChange={toUsaChange} />
            <MoneyInput
                scale="j"
                money={Japan}
                onMoneyChange={toJapanChange} />
            <MoneyInput
                scale="c"
                money={China}
                onMoneyChange={toChinaChange} />
        </div>   
    )
}

export default Calculator_2;