import React, { useEffect, useRef } from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import { IoMdHome } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Contact(){
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
    return (
        <div>
               {/* top content  */}
               <div className=" h-[30vh] md:h-[40vh] lg:h-[70vh] w-[100vw] flex flex-col justify-center relative">
             
             <div className="absolute">
                 <img src="./images/breadcrumb.jpg" className="h-[30vh]  md:h-[40vh] lg:h-[70vh] w-[100%]"/>
             </div>
             <div ref={boxRef} className="absolute pl-[30px]">
                     <div>
                         <p className="md:text-[3.5rem] lg:text-[3.5rem] text-[2.2rem] text-[#FFFFFF] font-semibold font-josefin">Contact Us</p>
                     </div>
                     <div className="flex items-center gap-3">
                         <IoMdHome className="text-[#FFFFFF] scale-125"/>
                         <p className="text-[18px] text-[#FFFFFF] font-semibold font-josefin">Home</p>
                         <FaChevronRight className="text-[#FFFFFF] scale-125"/>
                         <p className="text-[18px] text-[#C6A87D] font-semibold font-josefin">Contact Us</p>
                     </div>
             </div>
     </div>

            <div>
                <ContactInfo/>
            </div>

            <div className="flex flex-col lg:flex-row w-full mt-[5%] bg-[#100F0F] pt-[8%] pb-[8%] gap-4 px-[30px]">
                {/* left side content  */}
                <div ref={boxRef2} className="lg:w-1/2">
                    <img src="./images/contact.jpg" className="w-[100%] lg:w-[621px] h:[510px] md:h-[540px] lg:h-[621px]" alt="contact"/>
                </div>
                {/* Right side content  */}
                <div ref={boxRef3} className="lg:w-1/2 flex flex-col gap-2 pt-[5%] ">
                    <p className="font-miniver text-[18px] text-[#C6A87D] leading-[28px] font-[300]">Let's Talk</p>
                    <h2 className="font-josefin text-[48px] text-white leading-[56px] font-[400]">Get In Touch</h2>
                    <p className="text-[18px] leading-7 text-[#FFFFFFCC] font-josefin">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots 
                    in a piece of classical Latin literature from 45 BC,</p>
                    <ContactForm/>
                </div>
            </div>

            <div ref={boxRef4} className="w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4967.093339504511!2d-0.11951900000000001!3d51.503186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7c7eb9be3%3A0x3918653583725b56!2sRiverside%20Building%2C%20County%20Hall%2C%20Westminster%20Bridge%20Rd%2C%20London%20SE1%207JA%2C%20UK!5e0!3m2!1sen!2sin!4v1696619137581!5m2!1sen!2sin"  height="420" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full"></iframe>
            </div>
        </div>
    )
}
export default Contact;