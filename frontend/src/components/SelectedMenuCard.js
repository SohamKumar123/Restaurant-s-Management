import React,{useEffect,useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function SelectedMenuCard(props){
    let cardSelected=props.cardSelected;
    const boxRef = useRef(null);
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
    return(
        <div ref={boxRef} className="py-[15px] px-[15px] flex flex-col items-center bg-black gap-2 ">
            <img src={cardSelected.image} className="w-[70px]"/>
            <h2 className="text-white text-[18px]">{cardSelected.name}</h2>
        </div>
    )
}

export default SelectedMenuCard;