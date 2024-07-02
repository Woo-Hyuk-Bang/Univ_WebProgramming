import React, { useState } from "react";

const scaleNames = {
    k: '원(한국)',
    j: '엔(일본)',
    u: '달러(미국)',
    c: '위안(중국)'
};

function MoneyInput(props) {
    const [korean, setMoney] = useState('');

    const handleChange = (event) => {
        props.onMoneyChange(event.target.value);
    }

    return (
        <fieldset>
            <legend>금액을 입력해주세요(단위:{scaleNames[props.scale]}):</legend>
            <input value={props.Money} onChange={handleChange} /> 
        </fieldset>
    )
}

export default MoneyInput;