import React from "react";
import ReactDom from 'react-dom';

function NumberList(props) {
        const { numbers } = props;

        const listItems = numbers.map((number)=> 
            <li>{number}</li>
        );
        
        return(
            <ul>{listItems}</ul>
        );
}


export default NumberList;