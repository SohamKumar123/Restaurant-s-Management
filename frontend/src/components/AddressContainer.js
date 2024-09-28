import React from "react";
import { addressData } from "../addressData";
import AddressCard from "./AddressCard";
function AddressContainer(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            {
                addressData.map((data) => (<AddressCard addressCard={data}/>))
            }
        </div>
    )
}

export default AddressContainer;