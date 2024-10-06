import React, { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
{/* <FaUser /> */}
function Login ({onDisappear,signupVisible}){
    const [FormData,setFormData] = useState(
        {
            email:"",
            password:""
        }
    )
    function changeHandler(event){
        const{name,value,checked,type}=event.target;
        setFormData((prev) => ({...prev,[name]:type==="checkbox" ? checked : value}))
    }
    function submitHandler(event){
        event.preventDefault();
        console.log("Finally printing the value of form Data")
        console.log(FormData);
        //  Clear form data after submission
        setFormData({
            email:"",
            password:""
      });

      }
    function visibility(){
        onDisappear();
        signupVisible();
    }
    const modalRef =useRef();
    // disappear when clicking on background 
    const closeModal = (e) =>{
        if(modalRef.current === e.target){
            onDisappear();
        }
    }
    // when login page appear body will unscrolled
    useEffect(()=>{
        document.body.style.overflowY="hidden";
        return()=>{
            document.body.style.overflowY="scroll";
        }
    },[]);
    return(
        <div ref ={modalRef} onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center ">
            {/* parent div */}
            <div className="bg-[#000000] rounded-xl px-16 py-10 flex flex-col gap-5 mx-4 items-center relative mt-20">
                {/* user icon div  */}
                <div className=" px-5 py-5 rounded-full absolute -top-14 bg-[#C6A87D]">
                   <FaUser className="size-12 text-[white]"/>
                </div>
                <button className="absolute right-4 top-5">
                        <RxCross2 className="text-[#C6A87D] size-8" onClick={onDisappear}/>
                </button>
                <h3 className="text-[#FFFFFF] text-[1.6rem] font-semibold">Login Here..</h3>

                {/* form container */}
                <form className="flex flex-col gap-4" onSubmit={submitHandler}>
                    {/* Email container */}
                    <div className="flex flex-col gap-2" >
                       <label className="text-white text-[1.3rem] font-semibold">Email <sup className="text-[#C6A87D]">*</sup></label>
                       <input type="text" name="email" id="email" value={FormData.email} onChange={changeHandler} placeholder="Enter Email" className="text-[#FFFFFFCC] outline-none  bg-transparent border-b-[1px] border-[#FFFFFFCC] z-10 touch-auto w-full" required/>
                    </div>
                    {/* Password container  */}
                    <div className="flex flex-col gap-2">
                       <label className="text-white text-[1.3rem] font-semibold">Password <sup className="text-[#C6A87D]">*</sup></label>
                       <input type="password" name="password" id="password" value={FormData.password} onChange={changeHandler} placeholder="Enter Password" className="text-[#FFFFFFCC] outline-none  bg-transparent border-b-[1px] border-[#FFFFFFCC] z-10 touch-auto" required/>
                    </div>

                    {/* login button  */}
                    <button className="w-full bg-[#C6A87D] text-white rounded-lg py-1.5 font-semibold text-[1.2rem]">Login</button>
                    
                    {/* don't have an account section  */}
                    <div className="flex flex-col md:flex-row lg:flex-row gap-2">
                        <p className="text-[#FFFFFFCC] font-semibold">Don't have an account ?</p>
                        <a href="#" className="text-[#C6A87D] font-semibold" onClick={visibility}>Sign Up</a>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login;