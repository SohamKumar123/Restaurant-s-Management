// server instantiate
const express = require('express');
const app = express();
const cors = require('cors');

// import port number from .env file
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// cookie parser
const cookieParser = require("cookie-parser");

const corsOption ={
    // your frontend URL
    origin:'http://localhost:3000',
    // Allow credentials (cookies) to be sent
    credentials: true ,
}
// middleware to parse json request body
app.use(cors(corsOption));
app.use(cookieParser());
app.use(express.json());


//connect to the database
require("./config/database").connect();

//route import and mount
const user = require("./routes/contact");
const subscribeUser = require("./routes/subscribe");
const book = require("./routes/booking");

const person = require("./routes/auth");
app.use("/form", user, subscribeUser, book, person);

// activate server
app.listen(PORT,()=>{
    try{
        console.log(`Server is running on port ${PORT}`);
    }catch(err){
        console.log("Server issue");   
    }
   
    
});
