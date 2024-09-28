import React,{useEffect,useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function ContactInfoCard(props){
    let contactCard=props.contactCard;
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
        <div ref={boxRef}>
            <div className="flex flex-col items-center py-[50px] bg-black gap-2">
                <div className="w-fit bg-[#C6A87D] px-[15px] py-[15px]">
                   <img src={contactCard.image}/>
                </div>
               
                <h2 className="text-[28px] leading-[32px] text-[#C6A87D]">{contactCard.title}</h2>
                <p className="text-[18px] text-[#FFFFFFCC] text-center">{contactCard.info}</p>
                <p className="text-[18px] text-[#FFFFFFCC] text-center">{contactCard.description}</p>
            </div>
        </div>
    );
}

export default ContactInfoCard;