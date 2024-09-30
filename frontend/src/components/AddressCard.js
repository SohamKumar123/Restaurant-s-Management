import React from "react";

function AddressCard(props){
    let addressCard=props.addressCard;
    return (
        <div className="py-[45px] px-[30px] bg-[#101418] flex flex-col items-center">
            <img src={addressCard.image}/>
            <h2 className="text-[24px] text-[#FFFFFF] font-josefin">{addressCard.title}</h2>
            <p className="text-[18px] text-[#FFFFFFCC] text-center font-josefin">{addressCard.description}</p>
        </div>
    )
}
export default AddressCard;