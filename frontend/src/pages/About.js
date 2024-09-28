import React, { useEffect, useRef } from "react";
import Professional from "../components/Professional";
import ShowServices from "../components/ShowServices";
import { IoMdHome } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function About(){

    const navigate = useNavigate();
    function viewMenu(){
        navigate("/menu")
    }

    const boxRef = useRef(null);
    const boxRef2 = useRef(null);
    const boxRef3 = useRef(null);
    
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
        <div className="mb-[5%] ">
              {/* top content  */}
            <div className="h-[30vh] md:h-[40vh] lg:h-[70vh] w-[100vw] flex flex-col justify-center relative">
             
              <div className="absolute">
                <img src="./images/breadcrumb.jpg" className="h-[30vh]  md:h-[40vh] lg:h-[70vh] w-[100%]"/>
              </div>
              <div ref={boxRef} className="absolute pl-[30px]">
                    <div>
                        <p className="md:text-[3.5rem] lg:text-[3.5rem] text-[2.2rem] text-[#FFFFFF]">About Us</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <IoMdHome className="text-[#FFFFFF] scale-125"/>
                        <p className="text-[18px] text-[#FFFFFF]">Home</p>
                        <FaChevronRight className="text-[#FFFFFF] scale-125"/>
                        <p className="text-[18px] text-[#C6A87D]">About Us</p>
                    </div>
              </div>
            </div>

            {/* story about us  */}
            <div className="flex flex-col lg:flex-row w-full mt-[10%] px-[40px] gap-7">
                {/* left side content  */}
                <div ref={boxRef2} className="w-full lg:w-1/2">
                    <img src="./images/aboutCake.jpg" className="w-full lg:w-[626px] h-[400px] md:h-[614px] lg:h-[614px]"/>
                </div>
                {/* right side content  */}
                <div className="w-full lg:w-1/2 pt-[5%]">
                    <div ref={boxRef3}>
                        <p className="text-[18px] leading-[28px] font-[300] text-[#C6A87D]">Story About Us</p>
                        <h2 className="text-[2rem] md:text-[3rem] lg:text-[3rem] leading-[56px] font-[400] text-white">That Flavors Within Wines.</h2>
                        <p className="text-[18px] leading-8 text-[#FFFFFFCC]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo At vero eos et accusamus, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem</p>
                        <div className="mt-[5%] flex flex-col lg:flex-row w-full gap-5  ">
                            <div className="flex w-full lg:w-1/2 gap-3">
                                <div>
                                    <img src="./images/cutlery.png" className="w-[120px] h-[70px]"/>
                                </div>
                                <div className="flex flex-col justify-center gap-2">
                                    <h2 className="text-[24px] leading-[32px] text-white">Specialist</h2>
                                    <p className="text-[18px] leading-6 text-[#FFFFFFCC]">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="flex w-full lg:w-1/2 gap-3">
                                <div>
                                    <img src="./images/chinese-food.png" className="w-[120px] h-[70px]"/>
                                </div>
                                <div className="flex flex-col justify-center gap-2">
                                    <h2 className="text-[24px] leading-[32px] text-white">Restaurant</h2>
                                    <p className="text-[18px] leading-6 text-[#FFFFFFCC]">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.</p>
                                </div>
                            </div>

                        </div>

                        <button className="border px-[40px] py-[15px] text-[22px] mt-[10%] text-white hover:bg-[#C9AB81] hover:border-none" onClick={viewMenu}>View Our Menu</button>
                    </div>
                </div>
            </div>

            {/* Our professional  */}
            <div className="mt-[5%]">
                <div className="flex flex-col items-center">
                        <p className="text-[1.1rem] text-[#C6A87D]">Team Of Restaurant</p>
                        <h2 className="text-[2rem] md:text-[3rem] lg:text-[3rem] text-white text-center">Meet Our Professionals</h2>
                </div>
                <div>
                    <Professional/>
                </div>  
            </div>
              {/* Show Servics content starts here  */}
             <div>
               <ShowServices/>
             </div>
           
        </div>
    )
}
export default About;