import React,{useEffect,useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function SelectedMenuCard(props){
    let cardSelected=props.cardSelected;
    const boxRef2 = useRef(null);
    useEffect(() => {
        const element = boxRef2.current;
    
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
        <div ref={boxRef2} className="py-[15px] px-[15px] flex flex-col items-center bg-black gap-2 ">
            <img src={cardSelected.image} className="w-[70px]"/>
            <h2 className="text-white text-[18px]">{cardSelected.name}</h2>
        </div>
    )
}

export default SelectedMenuCard;