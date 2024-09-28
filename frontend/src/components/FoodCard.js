import React, {useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
function FoodCard(props){
    let cardItems = props.cardItems;
    const boxRef3 = useRef(null);
    useEffect(() => {
        const element = boxRef3.current;
    
        gsap.fromTo(
          element,
          { opacity: 0, x: 200 },  // Start state: hidden and moved left
          {
            opacity: 1, 
            x: 0,         // End state: visible and at its original position
            duration: 1.5,
            scrollTrigger: {
              trigger: element,      // Element to watch for triggering the animation
              start: 'top 80%',      // When the top of the element hits 80% from the top of the viewport
              once: true,            // Ensure the animation runs only once
            },
          }
        );
      }, []);
    return (
        <div ref={boxRef3} className="flex w-full gap-2 mt-[5%]">
            <div>
                <img src={cardItems.image} className="h-[70px] w-[80px]"/>
            </div>
            <div className="w-full">
                <div className="flex gap-2 items-center">
                    <p className=" text-[20px] text-[#FFFFFFCC]">{cardItems.name}</p>
                    <div className="w-[50%] h-[1px] bg-[#C6A87D]"></div>
                    
                    <p className="text-[22px] text-[#C6A87D]">{cardItems.price}</p>
                </div>
                <div className="text-[16px] text-[#FFFFFFCC]">{cardItems.description}</div>
            </div>
        </div>
    )
}

export default FoodCard;