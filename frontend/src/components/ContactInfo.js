import React from "react";
import { contactDetails } from "../contactDetails";
import ContactInfoCard from "./ContactInfoCard";
function ContactInfo(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 px-[30px] mt-[5%] mx-auto">
            {
                contactDetails.map((data) => (<ContactInfoCard contactCard={data}/>))
            }
        </div>
        
    )
}

export default ContactInfo;