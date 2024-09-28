import React, { useEffect, useRef } from "react";
import BlogCard from "./BlogCard";
import { blogData } from "../blogData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
function Blog(){

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
    return (
        <div ref={boxRef2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-[5%]">
            {
            
               blogData.map((data) => (<BlogCard cardBlog={data}/>))
                   
            }
        </div>
    )
}

export default Blog;