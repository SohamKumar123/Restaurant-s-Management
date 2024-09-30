import React, { useEffect, useRef } from "react";
import SelectedMenu from "../components/SelectedMenu";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import { IoMdHome } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import FoodCards from "../components/FoodCards";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Menu(){
    const navigate=useNavigate();
    function clickHandler(){
        navigate("/booking")
    }
    const boxRef = useRef(null);
    const boxRef2 = useRef(null);
    const boxRef4 = useRef(null);
    
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
          gsap.fromTo(
            boxRef4.current,
            { opacity: 0, y: 100 }, // Start state: fully transparent and moved down 100px
            {
              opacity: 1, // End state: fully visible
              y: 0, // End state: moved to original position
              duration: 0.9,
              scrollTrigger: {
                trigger: boxRef4.current, // What element should trigger the animation
                start: "top 80%", // When to start (when the top of the element hits 80% from the top of the viewport)
                once:true,
                end: "top 30%", // When to end (when the top of the element hits 30% from the top of the viewport)
                scrub: false, // Sync animation with scrolling
              },
            }
          );
        }, []);
    return (
        <div className="mb-[5%]">
                {/* top content  */}
                <div className="h-[30vh] md:h-[40vh] lg:h-[80vh] w-[100vw] flex flex-col justify-center relative">
            
                    <div className="absolute">
                        <img src="./images/main-page.avif" className="h-[30vh]  md:h-[40vh] lg:h-[80vh] w-[100vw]"/>
                    </div>
                    <div ref={boxRef} className="absolute pl-[30px]">
                            <div>
                                <p className="md:text-[3.5rem] lg:text-[3.5rem] text-[2.2rem] text-[#FFFFFF] font-semibold font-josefin">Our Menu</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <IoMdHome className="text-[#FFFFFF] scale-125"/>
                                <p className="text-[18px] text-[#FFFFFF] font-semibold font-josefin">Home</p>
                                <FaChevronRight className="text-[#FFFFFF] scale-125"/>
                                <p className="text-[18px] text-[#C6A87D] font-semibold font-josefin">Our Menu</p>
                            </div>
                    </div>
            </div>


               {/* choose your best food content  */}
               <div ref={boxRef2} className="flex flex-col md:flex-row lg:flex-row w-full px-[30px] mt-[5%] bg-black gap-4 py-[20px]">
                    {/* left content  */}
                    <div  className="w-full lg:w-1/2 flex flex-col justify-center">
                        <p className="text-[18px] leading-[28px] font-normal text-[#C6A87D] font-miniver">Services</p>
                        <h2 className="text-[2rem] md:text-[3rem] lg:text-[3rem] leading-[56px] font-semibold text-white font-josefin">Choose Your Best Food <br/>
                        From Categories</h2>
                    </div>
                    {/* right side content  */}
                    <div className="w-full lg:w-1/2">
                        <img src="./images/bg-service.jpg" className="w-[100%] h-[350px]"/>
                    </div>
               </div>

               {/* selected menu content  */}
               <div className="mt-[5%]">
                        <div className="flex flex-col items-center gap-3">
                                <p className="block text-[18px] text-center leading-[28px] font-normal text-[#C6A87D] font-miniver">Selected Menu</p>
                                <h2 className="text-[2rem] md:text-[3rem] lg:text-[3rem] leading-[56px] font-semibold text-white font-josefin">Our Specialties</h2>
                        </div>
                        <div>
                            <SelectedMenu/>
                        </div>
                        <div>
                            <FoodCards/>
                        </div>
               </div>

               {/* food house content  */}
               <div ref={boxRef4} className="flex flex-col md:flex-row lg:flex-row justify-between items-center py-[80px] px-[30px] bg-black mt-[5%] gap-[30px]">
                   <div>
                    <p className="font-miniver text-[18px] leading-[28px] font-normal text-[#C6A87D]">Need A Table On Millennium Food House</p>
                    <h2 className="text-[2rem] md:text-[3rem] lg:text-[3rem] leading-[56px] font-medium text-white font-josefin">Booking Table For Family Member</h2>
                   </div>
                   <button className="text-white border w-fit h-fit px-[20px] py-[10px] hover:bg-[#C9AB81] hover:border-none font-josefin" onClick={clickHandler}>Booking Table</button>
               </div>

               {/* feedback content  */}
               <div className="mt-[5%]">
                    {/* for heading */}
                    <div className="flex flex-col items-center gap-3">
                        <p className="block text-[18px] text-center leading-[28px] font-normal text-[#C6A87D] font-miniver">Customer Feedback</p>
                        <h2 className="text-[2rem] md:text-[3rem] lg:text-[3rem] leading-[56px] font-semibold text-white text-center font-josefin">What Our Happy Customer Say About Us</h2>
                    </div>
                    {/* for feedback  */}
                    <div>
                    <Testimonial/>
                    </div>
               </div>

                 {/* Our blog content  */}
            <div className="mt-[5%]">
                <div className="flex flex-col items-center gap-3">
                        <p className="block text-[18px] text-center leading-[28px] font-normal text-[#C6A87D] font-miniver">Our Blog</p>
                        <h2 className="text-[2rem] md:text-[3rem] lg:text-[3rem] text-center leading-[56px] font-semibold text-white font-josefin">Be First Who Read News</h2>
                </div>
                <div className="px-[30px]">
                  <Blog/>
                </div>
            </div>
        </div>
    )
}
export default Menu;