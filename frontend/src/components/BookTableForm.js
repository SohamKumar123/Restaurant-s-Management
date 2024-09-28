import React from "react";
import { useState } from "react";
function BookTableForm(){

    const [FormData,setFormData]=useState({
        yourName:"",
        yourPhone:"",
        person:"",
        date:"",
        time:"",
        location:"",
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
            <form onSubmit={submitHandler} className="bg-[#101418] px-[30px] py-[30px]">
           
                {/* for your name */}
                <div>
                    <input type="text" name="yourName" id="yourName" placeholder='Your Name' value={FormData.yourName} onChange={changeHandler} required className="bg-transparent border px-[15px] h-[52px] text-[16px] text-[#FFFFFF] w-[100%] leading-[52px] mb-[30px]"/>
                </div>

                {/* for phone number */}
                <div>
                    <input type="text" name="yourPhone" id="yourPhone" placeholder='Your Phone' value={FormData.yourPhone}  onChange={changeHandler} required className="bg-transparent border px-[15px] h-[52px] text-[16px] text-[#FFFFFF] w-[100%] leading-[52px] mb-[30px]"/>
                </div>
                

            {/* for person */}
                <div>
                    <input type="number" name="person" id="person" placeholder='Persons'  value={FormData.person}  onChange={changeHandler} required className="bg-transparent border px-[15px] h-[52px] text-[16px] text-[#FFFFFF] w-[100%] leading-[52px] mb-[30px]"/>
                </div>
            {/* for date */}
                <div>
                    <input type="date" name="date" id="date" placeholder=''  value={FormData.date}  onChange={changeHandler} required className="bg-transparent border px-[15px] h-[52px] text-[16px] text-[#FFFFFF] w-[100%] leading-[52px] mb-[30px]"/>
                </div>
            {/* for time */}
                 <div>
                    <input type="text" name="time" id="time" placeholder='Time'  value={FormData.time}  onChange={changeHandler} required className="bg-transparent border px-[15px] h-[52px] text-[16px] text-[#FFFFFF] w-[100%] leading-[52px] mb-[30px]"/>
                </div>
             {/* for location */}
                {/* <div>
                    <input type="text" name="location" id="location" placeholder='Preferred Location'  value={FormData.location}  onChange={changeHandler} required/>
                </div> */}
                <div>
                    <select name="location" id="location" value={FormData.location} onChange={changeHandler} required className="bg-transparent border px-[15px] h-[52px] text-[16px] text-[#FFFFFF] w-[100%] leading-[52px] mb-[30px]">
                        <option className="bg-black text-white">Delhi</option>
                        <option className="bg-black text-white">Mumbai</option>
                        <option className="bg-black text-white">Chennai</option>
                        <option className="bg-black text-white">Kolkata</option>
                    </select>   
                </div> 
                  
                    <div className="flex justify-center">
                    <button className="border text-[18px] w-fit px-[25px] py-[10px] text-[#FFFFFFCC] hover:bg-[#C6A87D]">Book Table
                    </button>
                    </div>
        </form>

        </div>
    )
}

export default BookTableForm;