// import mongoose
const mongoose = require("mongoose");
// const nodemailer = require("nodemailer");
require('dotenv').config();
// Define the Contact schema
const contactSchema = new mongoose.Schema({
    
    yourName: {
        type:String,
        required:true,
        
    },
    yourPhone: {
        type:String,
        required:true,
        
    },
    yourEmail: {
        type:String,
        required:true,
       
    }, 
     
    yourMessage: {
        type:String,
        required:true,
        }
    }
   
  );

// export this model
module.exports = mongoose.model("ContactDB",contactSchema);
