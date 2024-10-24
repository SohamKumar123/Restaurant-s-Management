import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
function BookTableForm({isLoggedIn,loginVisible}){

    const [FormData,setFormData]=useState({
        yourName:"",
        yourEmail:"",
        person:"",
        date:"",
        time:"",
        location:"",
      });
      // Here we define time slots
      const timeSlots = [
        "10:00 AM", "12:00 PM","02:00 PM",
        "04:00 PM","06:00 PM", "08:00 PM"
      ];
      // Here we define locations
      const locations = ["Delhi", "Mumbai", "Chennai", "Kolkata"];
      // Here we define number of persons
      const personsSlots=["1","2","3","4","5","6"];
      // Get today's date in the format YYYY-MM-DD
      const today = new Date().toISOString().split("T")[0];
      function changeHandler(event){
        // const{name,value,checked,type}=event.target;
        // setFormData((prev) => ({...prev,[name]:type==="checkbox" ? checked : value})); 
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value  // Update the corresponding key in formData
        }));
          
      }
      

    async function submitHandler(event){
        event.preventDefault();
        console.log("Finally printing the value of form Data")
        console.log(FormData);
       
    //   try {
    //     // Send form data to Express backend
    //     await axios.post('http://localhost:8000/form/booking', FormData);
    //     setSubmitted(true);
    //     toast.success("Message has been sent");
    //   } catch (error) {
    //     toast.error("Message has not been sent");
    //      }
    //   }
    if(!isLoggedIn){
        loginVisible();
    }
    else{
        //  Clear form data after submission
     setFormData({
        yourName:"",
        yourEmail:"",
        person:"",
        date:"",
        time:"",
        location:"",
  });
    try {
        const response = await fetch('http://localhost:8000/form/booking', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(FormData),
          
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // Show success toast
          toast.success(data.message);
        } else {
          // Show error toast
          toast.error(data.message);
        }
      } catch (error) {
        toast.error('An unexpected error occurred.');
      }
    }
     
    };

    return (
        <div>
            <form onSubmit={submitHandler} className="bg-[#101418] px-[30px] py-[30px]">
           
                {/* for your name */}
                <div>
                    <input type="text" name="yourName" id="yourName" placeholder='Your Name' value={FormData.yourName} onChange={changeHandler} required className="bg-transparent border px-[15px] h-[52px] text-[16px] text-[#FFFFFF] w-[100%] leading-[52px] mb-[30px] font-josefin"/>
                </div>

                {/* for email */}
                <div>
                    <input type="text" name="yourEmail" id="yourEmail" placeholder='Your Email' value={FormData.yourEmail}  onChange={changeHandler} required className="font-josefin bg-transparent border px-[15px] h-[52px] text-[16px] text-[#FFFFFF] w-[100%] leading-[52px] mb-[30px]"/>
                </div>
                

            {/* for person */}
                <div>
                    {/* <input type="number" name="person" id="person" placeholder='Persons'  value={FormData.person}  onChange={changeHandler} required className="font-josefin bg-transparent border px-[15px] h-[52px] text-[16px] text-[#FFFFFF] w-[100%] leading-[52px] mb-[30px]"/> */}
                    <select
                        name="person"
                        id="person"
                        value={FormData.person}
                        onChange={changeHandler}
                        className="font-josefin bg-transparent border px-[15px] h-[52px] text-[16px] text-[#FFFFFF] w-[100%] leading-[52px] mb-[30px]"
                        required>
                        <option value="" className="bg-black text-white">-- Select Persons --</option>
                        {personsSlots.map((person, index) => (
                        <option key={index} value={person} className="bg-black text-white">
                            {person}
                        </option>
                        ))}
                    </select>
                </div>
            {/* for date */}
                <div>
                    <input type="date" name="date" id="date" placeholder="MM/DD/YYYY"   value={FormData.date}  onChange={changeHandler} min={today}  required className="placeholder-gray-400 font-josefin bg-transparent border px-[15px] h-[52px] text-[16px] text-[#FFFFFF] w-[100%] leading-[52px] mb-[30px]"/>
                </div>
            {/* for time */}
                 <div>
                    {/* <input type="text" name="time" id="time" placeholder='Time'  value={FormData.time}  onChange={changeHandler} required className="font-josefin bg-transparent border px-[15px] h-[52px] text-[16px] text-[#FFFFFF] w-[100%] leading-[52px] mb-[30px]"/> */}

                    <select
                        id="time"
                        name="time"
                        value={FormData.time}
                        onChange={changeHandler}
                        className="font-josefin bg-transparent border px-[15px] h-[52px] text-[16px] text-[#FFFFFF] w-[100%] leading-[52px] mb-[30px]"
                        required>
                        <option value="" className="bg-black text-white">-- Select a Time --</option>
                        {timeSlots.map((slot, index) => (
                        <option key={index} value={slot} className="bg-black text-white">
                            {slot}
                        </option>
                        ))}
                    </select>
                </div>
                
             {/* for location */}
                {/* <div>
                    <input type="text" name="location" id="location" placeholder='Preferred Location'  value={FormData.location}  onChange={changeHandler} required/>
                </div> */}
                <div>
                    {/* <select name="location" id="location" value={FormData.location} onChange={changeHandler} required className="bg-transparent border px-[15px] h-[52px] text-[16px] text-[#FFFFFF] w-[100%] leading-[52px] mb-[30px] font-josefin">
                        <option className="bg-black text-white">Delhi</option>
                        <option className="bg-black text-white">Mumbai</option>
                        <option className="bg-black text-white">Chennai</option>
                        <option className="bg-black text-white">Kolkata</option>
                    </select>    */}
                    <select
                        name="location"
                        id="location"
                        value={FormData.location}
                        onChange={changeHandler}
                        className="bg-transparent border px-[15px] h-[52px] text-[16px] text-[#FFFFFF] w-[100%] leading-[52px] mb-[30px] font-josefin"
                        required>
                            <option value="" className="bg-black text-white">-- Select a Location --</option>
                                {locations.map((location, index) => (
                                <option key={index} value={location} className="bg-black text-white">
                                    {location}
                                </option>
                                ))}
                    </select>
                </div> 
                  
                    <div className="flex justify-center">
                    <button className="border text-[18px] w-fit px-[25px] py-[10px] text-[#FFFFFFCC] hover:bg-[#C6A87D] hover:text-white hover:border-none hover:outline-0 font-josefin">Book Table
                    </button>
                    </div>
        </form>

        </div>
    )
}

export default BookTableForm;