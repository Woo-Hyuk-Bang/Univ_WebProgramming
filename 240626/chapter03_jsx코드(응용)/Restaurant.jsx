import React from "react";
import Food from "./Food";
function Menu(props){
    return(
        <div>
            <Food name="평양냉면" costOfMenu={11000}></Food>
            <Food name="함흥냉면" costOfMenu={12000}></Food>
            <Food name="진주냉면" costOfMenu={9000}></Food>
            <Food name="칡냉면" costOfMenu={10000}></Food>
            <Food name="참기름막국수" costOfMenu={9500}></Food>
        </div>
    );
}

export default Restaurant;
