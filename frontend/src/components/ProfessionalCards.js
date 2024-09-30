import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
function ProfessionalCards(props){
    let professionalCard=props.professionalCard;
     // Reference to the element that we want to animate
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
  const boxRef2 = useRef(null);
  useEffect(() => {
    const element = boxRef2.current;

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
        <div>
            <img ref={boxRef} src={professionalCard.image} className="h-auto"/>
            <div ref={boxRef} className="flex flex-col items-center mt-[5%]">
                <p className="md:text-[2rem] lg:text-[2rem] text-[1.5rem] text-white">{professionalCard.name}</p>
                <p className="text-[1.2rem] text-[#C6A87D]">{professionalCard.profession}</p>
            </div>
         
        </div>
    )
}
export default ProfessionalCards;