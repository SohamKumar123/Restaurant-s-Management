import React, { useEffect, useRef } from "react";
import { testimonialData } from "../testimonialData";
import TestimonialCard from "./TestimonialCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
function Testimonial(){
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
    return (
        <div ref={boxRef} className="flex flex-col lg:flex-row px-[30px] mt-[5%] gap-10">
            {
                testimonialData.map((data) => (<TestimonialCard cardTestimonial={data}/>))
            }
        </div>
    )
}

export default Testimonial;