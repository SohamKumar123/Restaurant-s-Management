import React from "react";
import { useNavigate } from "react-router-dom";

function ServiceCard(props){
    let cardDetail=props.cardDetail;
    const navigate=useNavigate();
    function viewMenu(){
        navigate("/menu")
    }
    return (
        <div >
                <div  className="overflow-hidden">
                <img src={cardDetail.image} className="w-full servicecard-img"/>
                </div>
               
                <div  className="px-1">
                <h2 className="text-[24px] text-[#FFFFFF] mt-[4%]">{cardDetail.title}</h2>
                <p className="text-[16px] text-[#FFFFFFCC] leading-[1.7rem] mt-[4%]">{cardDetail.description}</p>
                <button className="text-[18px] text-[#FFFFFFCC] mt-[7%] border border-[#ffffff] px-[32px] py-[7px] hover:bg-[#C6A87D] hover:border-none" onClick={viewMenu}>{cardDetail.button}</button>
                </div>
              
           
        </div>
    )
}
export default ServiceCard;