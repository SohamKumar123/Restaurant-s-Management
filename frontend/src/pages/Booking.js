import React,{useEffect,useRef} from "react";
import AddressContainer from "../components/AddressContainer";
import Blog from "../components/Blog";
import BookTableForm from "../components/BookTableForm";
import { IoMdHome } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Booking(){
    const boxRef = useRef(null);
    const boxRef2 = useRef(null);
    const boxRef3 = useRef(null);
    const boxRef4 = useRef(null);
    const boxRef5 = useRef(null);
    useEffect(() => {
        const element = boxRef.current;
        
        gsap.fromTo(
          element,
          { opacity: 0, y: -100 },  // Start state: hidden and moved up
          {
            opacity: 1, 
            y: 0,         // End state: visible and at its original position
            duration: 1.5,
            scrollTrigger: {
              trigger: element,      // Element to watch for triggering the animation
              start: 'top 80%',      // When the top of the element hits 80% from the top of the viewport
              once: true,            // This ensures it runs only once
            },
          }
        );
      }, []);
      useEffect(() => {
        const element = boxRef2.current;
        
        gsap.fromTo(
          element,
          { opacity: 0, y: -100 },  // Start state: hidden and moved up
          {
            opacity: 1, 
            y: 0,         // End state: visible and at its original position
            duration: 1.5,
            scrollTrigger: {
              trigger: element,      // Element to watch for triggering the animation
              start: 'top 80%',      // When the top of the element hits 80% from the top of the viewport
              once: true,            // This ensures it runs only once
            },
          }
        );
      }, []);
    
      useEffect(() => {
        const elementId = boxRef3.current;
        
        gsap.fromTo(
          elementId,
          { opacity: 0, y: 100 },  // Start state: hidden and moved down
          {
            opacity: 1, 
            y: 0,         // End state: visible and at its original position
            duration: 1.5,
            scrollTrigger: {
              trigger: elementId,      // Element to watch for triggering the animation
              start: 'top 80%',      // When the top of the element hits 80% from the top of the viewport
              once: true,            // This ensures it runs only once
            },
          }
        );
      }, []);
      useEffect(() => {
        const element = boxRef4.current;
    
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
     
      useEffect(() => {
        const element = boxRef5.current;
    
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
        <div className="mb-[5%]">
             {/* top content  */}
             <div className="h-[30vh] md:h-[40vh] lg:h-[80vh] w-[100vw] flex flex-col justify-center relative">
             
             <div className="absolute">
               <img src="./images/table.avif" className="h-[30vh]  md:h-[40vh] lg:h-[80vh] w-[100vw]"/>
             </div>
             <div ref={boxRef} className="absolute pl-[30px]">
                   <div>
                       <p className="md:text-[3.5rem] lg:text-[3.5rem] text-[2.2rem] text-[#FFFFFF]">Booking Table</p>
                   </div>
                   <div className="flex items-center gap-3">
                       <IoMdHome className="text-[#FFFFFF] scale-125"/>
                       <p className="text-[18px] text-[#FFFFFF]">Home</p>
                       <FaChevronRight className="text-[#FFFFFF] scale-125"/>
                       <p className="text-[18px] text-[#C6A87D]">Booking Table</p>
                   </div>
             </div>
           </div>
            {/* Booking Table Form  */}
            <div className="mt-[5%] ">
                <div className="flex flex-col items-center gap-3">
                        <p className="text-[18px] leading-[28px] font-normal text-[#C6A87D]">Make A Reserve</p>
                        <h2 className="text-[2rem] md:text-[3rem] lg:text-[3rem] leading-[56px] font-semibold text-white text-center">Book A Table On Time</h2>
                </div>
                <div className="flex flex-col lg:flex-row mt-[5%] bg-black gap-3 px-[30px]">
                    {/* left side content  */}
                    <div ref={boxRef2} className="w-full lg:w-1/2 ">
                        <img src="./images/chef.png" className="w-full lg:w-[527px] h-[440px] md:h-[713px] lg:h-[713px]"/>
                    </div>
                    {/* Right side content  */}
                    <div ref={boxRef3} className="w-full lg:w-1/2 pt-[5%] pb-3">
                        <BookTableForm/>
                    </div>
                </div>
            </div>
            

            {/* visit us content  */}
            <div className="bg-[#0B0909] mt-[5%]">
                <div className="flex flex-col items-center gap-3 ">
                        <p className="text-[18px] leading-[28px] font-normal mt-[5%] text-[#C6A87D]">Visit Us</p>
                        <h2 className="text-[2rem] md:text-[3rem] lg:text-[3rem] leading-[56px] font-semibold  text-white text-center">Find Us Location</h2>
                </div>
                <div ref={boxRef4} className="flex flex-col lg:flex-row w-full mt-[5%]  gap-4 px-[30px] pb-[80px]">
                    {/* left side content  */}
                    <div  className="lg:w-1/2">
                        <img src="./images/Contact.jpg" className="w-[100%] lg:w-[621px] h-[621px]"/>
                    </div>
                    {/* Right side content  */}
                    <div  className="lg:w-1/2 py-[30px]">
                        
                            <AddressContainer/>
                        
                    </div>
                </div>
            </div>

            {/* Our blog content  */}
            <div>
                <div className="flex flex-col items-center gap-3 ">
                        <p className="text-[18px] leading-[28px] font-normal mt-[5%] text-[#C6A87D]">Our Blog</p>
                        <h2 className="text-[2rem] md:text-[3rem] lg:text-[3rem] leading-[56px] font-semibold text-white text-center">Be First Who Read News</h2>
                </div>
                <div>
                  <Blog/>
                </div>
            </div>
        </div>
    )
}
export default Booking;