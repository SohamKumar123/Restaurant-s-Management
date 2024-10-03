import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Servicefood from "../components/Servicefood";
import ShowServices from "../components/ShowServices";
import Testimonial from "../components/Testimonial";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
function Home(){
    const boxRef = useRef(null);
    const boxRef2 = useRef(null);
    const boxRef3 = useRef(null);
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
        const elementId = boxRef2.current;
        
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
    
  
    const navigate=useNavigate();
    function clickHandler(){
        navigate("/booking");  
    }
    function clickAbout(){
        navigate("/about")
    }
    function viewMenu(){
        navigate("/menu")
    }
    return (
        <div className="mb-[5%]">
            {/* top content  */}
            
            <div className="h-[40vh] lg:h-[100vh] w-[100vw] flex flex-col justify-center relative ">
              
               <div className="absolute">
                  <img src="./images/bg-service.jpg" className="h-[40vh] lg:h-[100vh] w-[100vw] opacity-[0.45] "/>
               </div>
              
               <div ref={boxRef} className="pl-[30px] absolute">
                    <p className="text-[18px] text-[#C9AB81] uppercase font-miniver font-semibold">Make A Order</p>
                    <h2 className="text-[32px] md:text-[40px] lg:text-[64px] text-[#FFFFFF] lg:leading-[72px] font-semibold font-josefin">Creativity Is Always <br/>
                    On Our Menu</h2>
                    <p className="lg:text-[20px] text-[#FFFFFF] mt-[2%] hidden lg:block md:block font-medium font-josefin">Our Restaurant Management System is designed to help restaurant  owners,<br/> managers, and staff efficiently manage daily operations,  from  table <br/> reservations to billing, inventory, and employee management.</p>
                    <button className=" px-[30px] py-[10px] w-fit text-[18px]  outline-none lg:border text-[#FFFFFF] mt-[5%] hover:bg-[#C9AB81] hover:border-none bg-[#C9AB81] lg:bg-transparent font-josefin" onClick={clickHandler} >Book A Table</button>
                </div>
            </div>
            
            {/* service content  */}
            <div className="mt-[5%]">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-[18px] text-[#C6A87D] font-miniver">Services</p>
                    <h2 className="text-[2rem] md:text-[3rem] lg:text-[3rem] text-center text-[#FFFFFFCC] font-medium lg:font-semibold font-josefin">Only Quality Coffee Beans</h2>
                </div>

                {/* food images content  */}
                <div>
                    <Servicefood/>
                </div>
            </div>
                {/* About us  */}
                <div ref={boxRef3}  className="flex flex-col lg:flex-row w-full py-[65px] px-[10px] bg-black mt-[5%]">
                    {/* left content  */}
                    <div  className="lg:w-1/2  px-[60px]">
                        <img src="./images/about.png" className="spin-img w-[100%]"/>
                    </div>
                    {/* Right content  */}
                    <div  className="lg:w-1/2 ">
                        <p className="text-[18px] text-[#C6A87D] font-miniver">
                        About Us</p>

                        <h2 className="text-[2rem] md:text-[3rem] lg:text-[3rem]  text-[#FFFFFF] leading-[56px] font-josefin">Discover Lorem From <br/>
                        Flavors Within Wines.</h2>

                        <p className="font-josefin text-[18px] leading-7 mt-[5%] text-[#FFFFFFCC]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <p className="font-josefin mt-[4%] text-[18px] leading-7 text-[#FFFFFFCC]">At vero eos et accusamus, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form luctus nec ullamcorper mattis, pulvinar .</p>
                        

                        <button className="text-[18px] text-[#FFFFFFCC] mt-[7%] border border-[#ffffff] px-[32px] py-[7px] hover:bg-[#C6A87D] hover:border-none" onClick={clickAbout}>About Us </button>
                    </div>
                
                </div>
                {/* Special Selection content  */}
                <div className="mt-[10%] px-[40px] flex flex-col">
                    <div ref={boxRef2} className="flex flex-col-reverse lg:flex-row w-full  lg:gap-[3%] gap-[40rem]">
                        {/* left side content  */}
                        <div  className="lg:w-1/2 w-[100%] ">
                          <p className="text-[18px] text-[#C6A87D] font-miniver">Special Selection</p>
                          <h2 className="text-[2rem] md:text-[3rem] lg:text-[3rem] text-[#FFFFFF] mt-[2%] font-josefin">From Our Menu</h2>
                          <p className="font-josefin text-[18px] text-[#FFFFFFCC] leading-7 mt-[2%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted.</p>

                          <div>
                            {/* Caffe Alatee */}
                            <div className="flex w-full gap-4 mt-[5%]">
                                <div>
                                    <img src="./images/special-1.jpg" className="h-[70px] w-[80px]"/>
                                </div>
                                <div className="w-full">
                                    <div className="flex items-center ">
                                        <p className="font-josefin text-[18px] text-[#FFFFFFCC]">Caffe Alatee</p>
                                        <div className="mr-[6px] ml-[9px] w-[70%] h-[1px] bg-[#C6A87D]"></div>
                                        <p className="font-josefin text-[22px] text-[#C6A87D]">$90</p>
                                    </div>
                                    <div>
                                        <p className="font-josefin text-[18px] text-[#FFFFFFCC]">Fresh beware coffe</p>
                                    </div>
                                </div>
                            </div>

                            {/* Salmon Lox */}
                            <div className="flex w-full gap-4 mt-[5%]">
                                <div>
                                    <img src="./images/special-2.jpg" className="h-[70px] w-[80px]"/>
                                </div>
                                    <div className="w-full">
                                        <div className="flex items-center">
                                            <p className="font-josefin text-[18px] text-[#FFFFFFCC]">Salmon Lox</p>
                                            <div className="mr-[4px] ml-[3px] w-[72%] h-[1px] bg-[#C6A87D]"></div>
                                            <p className="font-josefin text-[22px] text-[#C6A87D]">$190</p>
                                        </div>
                                        <div>
                                            <p className="font-josefin text-[18px] text-[#FFFFFFCC]">Fresh beware coffe</p>
                                        </div>
                                    </div>
                            </div>

                            {/* Sea Bass Ceviche */}
                            <div className="flex w-full gap-4 mt-[5%]">
                                <div>
                                    <img src="./images/special-3.jpg" className="h-[70px] w-[80px]"/>
                                </div>
                                    <div className="w-full">
                                        <div className="flex items-center">
                                            <p className="font-josefin text-[18px] text-[#FFFFFFCC]">Sea Boss Ceviche</p>
                                            <div className="mr-[6px] ml-[9px] w-[61%] h-[1px] bg-[#C6A87D]"></div>
                                            <p className="font-josefin text-[22px] text-[#C6A87D]">$150</p>
                                        </div>
                                        <div>
                                            <p className="font-josefin text-[18px] text-[#FFFFFFCC]">Fresh beware coffe</p>
                                        </div>
                                    </div>
                            </div>

                            {/* Vieness Veal Cultech */}
                            <div className="flex w-full gap-4 mt-[5%]">
                                <div>
                                    <img src="./images/special-4.jpg" className="h-[70px] w-[80px]"/>
                                </div>
                                    <div className="w-full">
                                        <div className="flex items-center">
                                            <p className="font-josefin text-[18px] text-[#FFFFFFCC]">Vieness Veal Cultech</p>
                                            <div className="mr-[6px] ml-[9px] w-[54.2%] h-[1px] bg-[#C6A87D]"></div>
                                            <p className="font-josefin text-[22px] text-[#C6A87D]">$100</p>
                                        </div>
                                        <div>
                                            <p className="font-josefin text-[18px] text-[#FFFFFFCC]">Fresh beware coffe</p>
                                        </div>
                                    </div>
                            </div>
                          </div>
                        </div>
                        {/* right side content  */}
                        <div className="lg:w-1/2 w-[100%] ">
                           <div className="relative flex justify-end ">
                            <img src="./images/finger.jpg" className="w-[438px] h-[457px] absolute"/>
                            <img src="./images/fried.jpg" className="w-[438px] h-[440px] absolute top-[9rem] left-[2.6rem]"/>
                           </div>
                        </div>
                    </div>
                    <button className="mx-auto text-[18px] w-fit text-[#FFFFFFCC] mt-[7%] border border-[#ffffff] px-[32px] py-[7px] hover:bg-[#C6A87D] hover:border-none font-josefin" onClick={viewMenu}>View Our Menu</button>
                </div>

                {/* Show Servics content starts here  */}
                <ShowServices/>
            

            {/* Testimonial content  */}
            <div className="mt-[5%]">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-[18px] text-[#C6A87D] font-miniver">Testimonial</p>
                    <h2 className="text-[2rem] md:text-[3rem] lg:text-[3rem] text-center text-[#FFFFFFCC] font-medium lg:font-bold font-josefin">What About Client Says</h2>
                </div>
                <div>
                    <Testimonial/>
                </div>
                   
            </div>     
        </div>
    )
}
export default Home;