import React from "react";

function TestimonialCard(props){
    let cardTestimonial=props.cardTestimonial;
    return (
        <div className="flex flex-col gap-4 py-[60px] px-[40px] bg-black">
            <div className="flex gap-2">
                <img src={cardTestimonial.staricon} className="w-[19px] h-[20px]"/>
                <img src={cardTestimonial.staricon} className="w-[19px] h-[20px]"/>
                <img src={cardTestimonial.staricon} className="w-[19px] h-[20px]"/>
                <img src={cardTestimonial.staricon} className="w-[19px] h-[20px]"/>
                <img src={cardTestimonial.staricon} className="w-[19px] h-[20px]"/>
            </div>
            <p className="text-[16px] text-[#FFFFFFCC] leading-8">{cardTestimonial.message}</p>
            <div className="flex gap-4 mt-[10%]">
                <div>
                    <img src={cardTestimonial.image} className="w-[93px] h-[92px]"/>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-[22px] text-[#FFFFFF]">{cardTestimonial.name}</h2>
                    <p className="text-[16px] text-[#C6A87D]">{cardTestimonial.profession}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard;