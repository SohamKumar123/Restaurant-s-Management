import React from "react";
import { selectedMenuData } from "../selectedMenuData";
import SelectedMenuCard from "./SelectedMenuCard";
function SelectedMenu(){
    return(
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-[30px] mt-[3%] ">
           {
            selectedMenuData.map((data) => (<SelectedMenuCard cardSelected={data}/>))
           }
        </div>
    )
}

export default SelectedMenu;