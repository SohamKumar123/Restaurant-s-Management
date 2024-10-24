//import mongoose
const mongoose = require("mongoose");

require('dotenv').config();

// Define booking Schema

const bookingSchema = new mongoose.Schema({      
    yourName: {
        type:String,
        required:true,
    },
    yourEmail: {
        type: String,
        required: true,
        
      },
    person:{
        type: Number,
        required: true,
        min: 1 // Ensures at least one person is booked
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    location:{
        type:[String],
        required:true
    },
    tableNumber: {
        type: Number,
    },
    bookedAt: { 
        type: Date, 
        default: Date.now()
    },
    tablesBooked: { 
        type: [Number],
        required: true }, // Array of booked table numbers
});

// export this model
module.exports = mongoose.model("bookingDB",bookingSchema); 