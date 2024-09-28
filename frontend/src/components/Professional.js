import React from "react";
import ProfessionalCards from "./ProfessionalCards";
import { professionalData } from "../professionalData";

function Professional(){
    return (
        <div className="
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[5%] gap-7 px-[20px]">
            {
            professionalData.map((data) => (<ProfessionalCards professionalCard={data}/>))
           }
        </div>
    )
}
export default Professional;