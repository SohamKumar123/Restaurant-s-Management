import React from "react";
import { useState } from "react";
function ContactForm(){

    const [FormData,setFormData]=useState({
        yourName:"",
        yourPhone:"",
        yourEmail:"",
        yourMessage:"",
      });

    function changeHandler(event){
        const{name,value,checked,type}=event.target;
        setFormData((prev) => ({...prev,[name]:type==="checkbox" ? checked : value}))
      }

    function submitHandler(event){
        event.preventDefault();
        console.log("Finally printing the value of form Data")
        console.log(FormData);
      }


    return (
        <div>
        <form onSubmit={submitHandler}>
            {/* for your name and phone number  */}
            <div className="flex flex-col lg:flex-row w-full lg:gap-4">
                {/* for your name */}
                <div className="lg:w-1/2 w-full">
                    <input type="text" name="yourName" id="yourName" placeholder='Your Name' value={FormData.yourName} onChange={changeHandler}  className="bg-transparent border px-[15px] h-[52px] text-[16px] text-[#FFFFFF]  leading-[52px] mb-[30px] w-full font-josefin"/>
                </div>

                {/* for phone number */}
                <div className="lg:w-1/2 w-full">
                    <input type="text" name="yourPhone" id="yourPhone" placeholder='Your Phone' value={FormData.yourPhone}  onChange={changeHandler} required className="font-josefin bg-transparent border px-[15px] h-[52px] text-[16px] text-[#FFFFFF] w-full leading-[52px] mb-[30px]"/>
                </div>
                
            </div>

            {/* for email */}
                <div>
                    <input type="text" name="yourEmail" id="yourEmail" placeholder='Your Email'  value={FormData.yourEmail}  onChange={changeHandler} required className="font-josefin bg-transparent border px-[15px] h-[52px] text-[16px] text-[#FFFFFF] w-[100%] leading-[52px] mb-[30px]"/>
                </div>

          

            {/* for message */}
                <div className="w-[100%]">
                    <textarea name="yourMessage" id="yourMessage"  placeholder="Message"  value={FormData.yourMessage} rows="2" onChange={changeHandler} required className="font-josefin bg-transparent border px-[15px]  text-[16px] text-[#FFFFFF] w-[100%] leading-[52px] mb-[30px]"/>
                </div>
            <button className="font-josefin border text-[18px] text-[#FFFFFFCC] px-[20px] py-[10px] hover:bg-[#C6A87D] hover:text-white hover:border-none hover:outline-0">
                Contact Us
            </button>
        </form>



    </div>
    )
}

export default ContactForm;