import React, { useEffect, useRef } from "react";
import { servicefoodData } from "../servicefoodData";
import ServiceCard from "./ServiceCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
function Servicefood(){
    const boxRef = useRef(null);
    useEffect(() => {
      const element = boxRef.current;
  
      gsap.fromTo(
        element,
        { opacity: 0, x: -200 },  // Start state: hidden and moved left
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
    
    return(
        <div ref ={boxRef} className=" flex flex-col lg:flex-row w-[100%] gap-[20px] mt-[5%] px-[30px]">
           {
            servicefoodData.map((data) => (<ServiceCard cardDetail={data}/>))
           }
        </div>
    )
}

export default Servicefood;