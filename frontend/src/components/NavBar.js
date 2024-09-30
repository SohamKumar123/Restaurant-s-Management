import React, { useState, useEffect, useRef} from "react";
import { NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { HiOutlineXMark } from "react-icons/hi2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function NavBar(){
 
  // State to control navbar background change on scroll
  const [isScrolled, setIsScrolled] = useState(false);
  
   // Effect to detect scroll position and update state
   useEffect(() => {
    const handleScroll = () => {
      // Add or remove the class based on the scroll position
      const offset = window.scrollY;
      if (offset > 50) { // Change 100 to any offset you want
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const boxRef = useRef(null);
  useEffect(() => {
    const elementId = boxRef.current;
    
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
  return (
    <nav ref={boxRef} className={`bg-black flex px-[20px] items-center w-full py-[20px] ${
      isScrolled ? 'bg-black fixed w-full z-20' : 'bg-black w-full'
    }`}>
      {/* for logo  */}
      <div className="lg:w-[30%] w-[50%] ">
         <img src="Millennium_logo.png" className="w-[203px] h-[50px]"/>
      </div>
      {/* for lists and buttons  */}
      <div className=" flex lg:w-[70%] w-[50%]  justify-end gap-[30px]">
        

        
        <ul className=" lg:flex hidden text-white font-josefin  gap-[30px] text-[18px] items-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Our Menu</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
       
          {/* <NavLink to="/booking" className="book-button text-[18px] text-[#FFFFFFCC] mt-[7%] px-[30px] py-[10px] bg-[#C6A87D] hover:border-none">Book A Table
            </NavLink> */}
            {/* <button className="lg:flex hidden bg-[#C6A87D] book-button px-[30px] py-[10px] ">
                <NavLink to="/booking" className="book text-[18px] text-[#FFFFFFCC]">Book A Table</NavLink>
            </button> */}
            <div className="hidden lg:flex gap-2">
               <button className="bg-[#C6A87D] text-white px-[25px] py-[10px] font-josefin">Login</button>
               <button className="bg-[#C6A87D] text-white px-[25px] py-[10px] font-josefin">Signup</button>
           </div>
      {/* Hamburger Menu Icon / Close Icon */}
      <button onClick={toggleMenu} >
                  {menuOpen ? (
                    <HiOutlineXMark className=" text-[#C6A87D] mr-[5px]  lg:hidden scale-150 font-medium text-3xl" onClick={()=>setIsMenuOpen(!isMenuOpen)}/> 
                  ) : (  <LuMenu className=" text-[#C6A87D] mr-[5px]  lg:hidden scale-150 font-medium text-3xl" onClick={()=>setIsMenuOpen(!isMenuOpen)} />
                    
                  )}
                </button>
          </div>
          <div className={`absolute flex flex-col items-center gap-5 z-1000 lg:hidden top-20 left-0 pt-6 pb-6 w-full bg-[#1a1a1a]  ${isMenuOpen ? "opacity-100":"opacity-0"}`} style={{transition:"transform 0.3s ease, opacity 0.3s ease"}} >
                      
          <ul className="flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform text-white font-josefin">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Our Menu</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        {/* <button className=" bg-[#C6A87D] book-button px-[30px] py-[10px] ">
                <NavLink to="/booking" className="book text-[18px] text-[#FFFFFFCC]">Book A Table</NavLink>
            </button> */}

        <div className="flex gap-2">
               <button className="bg-[#C6A87D] text-white px-[25px] py-[10px] font-josefin">Login</button>
               <button className="bg-[#C6A87D] text-white px-[25px] py-[10px] font-josefin">Signup</button>
           </div>


      </div>
      

      
    </nav>
  )
}
export default NavBar;