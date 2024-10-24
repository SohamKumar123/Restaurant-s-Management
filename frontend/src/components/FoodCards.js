import React from "react";
import { foodData } from "../foodData";
import FoodCard from "./FoodCard";
function FoodCards(props){
    let category = props.category;
    return (
        <div className="pl-[30px] pr-[15px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
        {
        foodData.map((data) => (<FoodCard cardItems={data}/>))
        }
        </div>
)
}

export default FoodCards;