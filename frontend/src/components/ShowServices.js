import React, { useEffect, useRef } from "react";
import ShowServicesCard from "./ShowServicesCard";
import { showservicesData } from "../showservicesData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger); 
function ShowServices(){
    const boxRef = useRef(null); // Create a ref for the element

    useEffect(() => {
        gsap.fromTo(
          boxRef.current,
          { opacity: 0, y: 100 }, // Start state: fully transparent and moved down 100px
          {
            opacity: 1, // End state: fully visible
            y: 0, // End state: moved to original position
            duration: 0.9,
            scrollTrigger: {
              trigger: boxRef.current, // What element should trigger the animation
              start: "top 80%", // When to start (when the top of the element hits 80% from the top of the viewport)
              once:true,
              end: "top 30%", // When to end (when the top of the element hits 30% from the top of the viewport)
              scrub: false, // Sync animation with scrolling
            },
          }
        );
      }, []);
    return (
        <div ref={boxRef} className="bg-black grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  py-[60px] mt-[5%] gap-4">
           {
            showservicesData.map((data) => (<ShowServicesCard cardServices={data}/>))
           }
        </div>
    )
}

export default ShowServices;