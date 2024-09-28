import React from "react";
import { servicefoodData } from "../servicefoodData";
import ServiceCard from "./ServiceCard";
function Servicefood(){
    return(
        <div className="flex flex-col lg:flex-row w-[100%] gap-[20px] mt-[5%] px-[30px]">
           {
            servicefoodData.map((data) => (<ServiceCard cardDetail={data}/>))
           }
        </div>
    )
}

export default Servicefood;