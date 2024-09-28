import React, { useEffect, useRef } from "react";
import { FaFacebookF,FaXTwitter,FaLocationPin  } from "react-icons/fa6";
import { FaInstagram,FaLinkedinIn } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger); 
function Footer(){
    const boxRef = useRef(null); // Create a ref for the element

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
    return (
        <div ref={boxRef}>
            {/* footer content  */}
            
                <div className="bg-black text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-[40px] py-[80px] w-full gap-4">
                    {/* part-1  */}
                    <div>
                        <img src="./Millennium_logo.png" className="w-[203px] h-[50px]"/>
                        <p className="text-[16px] text-[#FFFFFFCC] leading-8 mt-[4%]">Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. Curabitur <br/> eget rhoncus consectetur enim.</p>
                        <div className="flex gap-2 mt-[10%]">
                            <div className="px-[15px] py-[15px] bg-[#101418] hover:bg-[#C6A87D]"><FaFacebookF className="scale-110"/></div>
                            <div className="px-[15px] py-[15px] bg-[#101418] hover:bg-[#C6A87D]"><FaInstagram className="scale-110"/></div>
                            <div className="px-[15px] py-[15px] bg-[#101418] hover:bg-[#C6A87D]"><FaXTwitter className="scale-110"/></div>
                            <div className="px-[15px] py-[15px] bg-[#101418] hover:bg-[#C6A87D]"><FaLinkedinIn className="scale-110"/></div>
                        </div>
                    </div>
                    {/* part-2  */}
                    <div>
                        <h2 className="text-[24px] leading-[32px]">Use Full Link</h2>
                        <div className="flex gap-7 mt-[5%] lg:mt-[10%]">
                            <div>
                                <ul className="flex flex-col gap-4 text-[16px]">
                                    <li>Team Signal</li>
                                    <li>Booking Table</li>
                                    <li>Our Menu</li>
                                    <li>About Us</li>

                                </ul>
                            </div>
                            <div>
                            <ul className="flex flex-col gap-4 text-[16px]">
                                    <li>Contact Us</li>
                                    <li>Our Kitchen</li>
                                    <li>Our Team</li>
                                    <li>FAQ</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* part-3  */}
                    <div>
                        <h2 className="text-[24px] leading-[32px]">Contact Us</h2>
                        <div className="flex flex-col gap-4 text-[16px] mt-[5%] lg:mt-[10%]">
                            <div className="flex gap-4 items-center">
                                <div><IoCallSharp className="scale-150 text-[#C6A87D]"/></div>
                                <p>
                                +1800-001-658</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div><MdEmail className="scale-150 text-[#C6A87D]"/></div>
                                <p>peacefulqode@gmail.com</p>
                            </div> 
                            <div className="flex gap-4 items-center">
                                <div><FaLocationPin className="scale-150 text-[#C6A87D]" /></div>
                                <p>Envato HQ 24 Fifth <br/>st., Los Angeles, USA</p>
                            </div> 
                        </div>
                    </div>
                    {/* part-4  */}
                    <div>
                    <h2 className="text-[24px] leading-[32px]">Opening Hours</h2>
                        <div className="mt-[5%] lg:mt-[10%] flex flex-col gap-4">
                            <div className="flex text-[16px] justify-between">
                                <p>Mon - Tue</p>
                                <p>09:00 Am - 10:00 Pm</p>
                            </div>
                            <div className="flex text-[16px] justify-between">
                                <p>Wed - Thu</p> 
                                <p>10:00 Am - 11:00 Pm</p>
                            </div> 
                            <div className="flex text-[16px] justify-between">
                                <p>Sat</p>
                                <p>07:00 Am - 08:00 Pm</p>
                            </div> 
                            <div className="flex text-[16px] justify-between">
                                <p>Sun</p>
                                <p>09:00 Am - 08:00 Pm</p>
                            </div> 
                        </div>
                    </div>
                </div>
            
            {/* newsletter content  */}
            <div className="flex flex-col lg:flex-row w-full py-[30px]">
                <div className="flex gap-5 lg:gap-10 md:gap-10 items-center lg:w-1/2 justify-center">
                    <img src="./images/email.png"/>
                    <p className="text-white text-[1.2rem] md:text-[1.8rem] lg:text-[1.8rem] font-medium">Subscribe Our Newsletter</p>
                </div>
                <div className="lg:w-1/2  flex flex-col md:flex-row lg:flex-row gap-4 items-center px-[20px]">
                    <input type="text"  name="email" placeholder="Your Email Address" className=" outline-none px-[15px] text-[16px] h-[52px] w-[100%] bg-transparent border"/>
                    <button className="bg-[#C6A87D] text-[#FFFFFFCC] px-[30px] py-[15px] text-[18px]">Subscribe</button>
                </div>

            </div>
            {/* copyright content  */}
            <div className="bg-black text-[white] py-[40px]">
                <p className="text-center text-[18px] font-medium">Copyright 2023 Millennium All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;