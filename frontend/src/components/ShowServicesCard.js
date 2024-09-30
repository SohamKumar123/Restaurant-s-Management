import React from "react";


function ShowServicesCard(props){
    let cardServices=props.cardServices;
    
    return (
       
            <div className="flex flex-col justify-center items-center ">
                <img src={cardServices.image} className="h-[94px] w-[96px]"/>
                <p className="text-[36px] text-[#FFFFFFCC] mt-[6%] font-josefin">{cardServices.title}</p>
                <p className="text-[18px] text-[#FFFFFFCC] font-josefin">{cardServices.description}</p>
            </div>
        
    )
}

export default ShowServicesCard;