// import mongoose
const mongoose = require("mongoose");

require('dotenv').config();
//Define Subscribe Schema

const subscribeSchema = new mongoose.Schema({
    yourEmail:{
        type:String,
        required:true,
    }
});

// export this model
module.exports = mongoose.model("SubscribeDB",subscribeSchema);