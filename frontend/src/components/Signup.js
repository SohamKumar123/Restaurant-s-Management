import React, { useEffect, useRef } from "react";
import { FaUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function Signup ({onNotVisible,loginVisible}){
    function visibility(){
        onNotVisible();
        loginVisible();
    }

    const modalRef =useRef();
    // disappear when clicking on background 
    const closeModal = (e) =>{
        if(modalRef.current === e.target){
            onNotVisible();
        }
    }
    // when login page appear body will unscrolled
    useEffect(()=>{
        document.body.style.overflowY="hidden";
        return()=>{
            document.body.style.overflowY="scroll";
        }
    },[]);
    return (
        
            <div ref ={modalRef} onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center ">
                {/* parent div */}
                <div className="bg-[#101418] rounded-xl px-16 py-10 flex flex-col gap-5 mx-4 items-center relative mt-40">
                    {/* user icon div  */}
                    <div className=" px-5 py-5 rounded-full absolute -top-14 bg-[#C6A87D]">
                       <FaUser className="size-12 text-[white]"/>
                    </div>
                    <button className="absolute right-4 top-5">
                            <RxCross2 className="text-[#C6A87D] size-8" onClick={onNotVisible}/>
                    </button>
                    <h3 className="text-[#FFFFFF] text-[1.6rem] font-semibold">Signup Here..</h3>
    
                    {/* form container */}
                    <form className="flex flex-col gap-4">
                        {/* Name container */}
                        <div className="flex flex-col gap-2" >
                           <label className="text-white text-[1.3rem] font-semibold">Name <sup className="text-[#C6A87D]">*</sup></label>
                           <input type="text" name="name" placeholder="Enter Name" className="text-[#FFFFFFCC] outline-none  bg-transparent border-b-[1px] border-[#FFFFFFCC]" required/>
                        </div>
                        {/* Email container */}
                        <div className="flex flex-col gap-2" >
                           <label className="text-white text-[1.3rem] font-semibold">Email <sup className="text-[#C6A87D]">*</sup></label>
                           <input type="text" name="email" placeholder="Enter Email" className="text-[#FFFFFFCC] outline-none  bg-transparent border-b-[1px] border-[#FFFFFFCC]" required/>
                        </div>
                        {/* Password container  */}
                        <div className="flex flex-col gap-2">
                           <label className="text-white text-[1.3rem] font-semibold">Create Password <sup className="text-[#C6A87D]">*</sup></label>
                           <input type="password" name="password" placeholder="Enter Password" className="text-[#FFFFFFCC] outline-none  bg-transparent border-b-[1px] border-[#FFFFFFCC]" required/>
                        </div>
    
                        {/* login button  */}
                        <button className="w-full bg-[#C6A87D] text-white rounded-lg py-1.5 font-semibold text-[1.2rem]">Signup</button>
                        
                        {/* don't have an account section  */}
                        <div className="flex gap-2">
                            <p className="text-[#FFFFFFCC] font-semibold">Already have an account ?</p>
                            <p className="text-[#C6A87D] font-semibold cursor-pointer" onClick={visibility}>Login</p>
                        </div>
                    </form>
                </div>
    
            </div>
    )
}

export default Signup;