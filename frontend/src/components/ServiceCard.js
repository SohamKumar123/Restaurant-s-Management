import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
function ServiceCard(props){
    let cardDetail=props.cardDetail;
    const navigate=useNavigate();
    function viewMenu(){
        navigate("/menu")
    }
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
        <div >
                <div ref={boxRef} className="overflow-hidden">
                <img src={cardDetail.image} className="w-full servicecard-img"/>
                </div>
               
                <div ref={boxRef2} className="px-1">
                <h2 className="text-[24px] text-[#FFFFFF] mt-[4%]">{cardDetail.title}</h2>
                <p className="text-[16px] text-[#FFFFFFCC] leading-[1.7rem] mt-[4%]">{cardDetail.description}</p>
                <button className="text-[18px] text-[#FFFFFFCC] mt-[7%] border border-[#ffffff] px-[32px] py-[7px] hover:bg-[#C6A87D] hover:border-none" onClick={viewMenu}>{cardDetail.button}</button>
                </div>
              
           
        </div>
    )
}
export default ServiceCard;