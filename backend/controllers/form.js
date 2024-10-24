// import form model or schema
const User = require("../models/formModel");
const Subscribe = require("../models/subscribeModel");
const Booking = require("../models/bookingModel");
const Auth = require("../models/authModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const emailDetails = require("../middlewares/authentication");
require('dotenv').config();
// handle Contact form data
exports.handleform = async(req,res) =>{
    try {
        // get data
        const { yourName,  yourPhone, yourEmail, yourMessage } = req.body;
         // create entry for user
        const user = await User.create({
            yourName,yourPhone,yourEmail,yourMessage
        });

        return res.status(200).json({
            success:true,
            message:'Data submitted successfully',
        });
      }     
      catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Error in data submission",
        });
      }
    
}

// handle subscribe newsletter data
exports.handleSubscribe = async(req,res) =>{
    try{
        // get data
        const {yourEmail} = req.body;
         // create entry for user
         const subscribeUser = await Subscribe.create({
            yourEmail
        });
        return res.status(200).json({
            success:true,
            message:'Data submitted successfully',
        });

    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Error in data submission",
        });
      }
}

// Define table limits for different locations
const locationTableLimits = {
    Delhi: 10, // Max 10 tables in Delhi
    Mumbai: 8,   // Max 8 tables in Mumbai
    Chennai: 5, // Max 5 tables in Chennai
    Kolkata:3,    // Max 3 tables in kolkata
  };

// Helper function to generate a random table number
const generateRandomTable = (bookedTables, maxTables) =>{
    const allTables = Array.from({ length: maxTables }, (_, i) => i + 1);
    const availableTables = allTables.filter(table => !bookedTables.includes(table));
    if (availableTables.length === 0) {
        return null; // No tables available
    }
    const randomIndex = Math.floor(Math.random() * availableTables.length);
    return availableTables[randomIndex]; // Return a random available table
}


// handle Booking form data
exports.handleBooking = async(req,res)=>{
    try{
        // get data
        const {yourName,yourEmail,person,date,time,location} = req.body;
        
       
        // Check if the email already exists at the same date and time slots
        const existingBooking = await Booking.findOne({ yourEmail,time,date });
       

        if (existingBooking) {
        return res.status(400).json({ message: 'Email already exists for same time, Please use different Email-ID' });
        }

        // Find existing booking for the location, date, and time slot
        let booking = await Booking.findOne({ location, date, time});
        const tableLimit = locationTableLimits[location]; // Get the table limit for the selected location
        if (!tableLimit) {
            // ye tab message aayega jb us particular location pe saare slots me table book ho chuki hongi
            return res.status(400).json({ message: 'Invalid location selected' });
        }

        if (!booking) {
            // No booking exists for this time, create a new one
            const newTable = generateRandomTable([], tableLimit);
            const tableNumber=newTable;
            if (!newTable) {
                return res.status(400).json({ message: 'No tables available' });
              }
        
                const newBooking = new Booking({
                    yourName,
                    yourEmail,
                    person,
                    tableNumber,
                    location,
                    date,
                    time,
                    tablesBooked: [newTable],
                });
                await newBooking.save();
                return res.status(200).json({ message: `Table ${newTable} booked successfully!` });
        }

        else {
            // Check if any tables are available
            const newTable = generateRandomTable(booking.tablesBooked, tableLimit);
            const tableNumber=newTable;
            if (!newTable) {
              return res.status(400).json({ message: 'No tables available' });
            }
      
            // Add the new table to the existing booking
            booking.tablesBooked.push(newTable);
            await booking.save();
            const newBooking = new Booking({
                yourName,
                yourEmail,
                person,
                tableNumber,
                location,
                date,
                time,
                tablesBooked: [newTable],
            });
            await newBooking.save();
            return res.status(200).json({ message: `Table ${newTable} booked successfully!` });
          }

      }
      catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Error in data submission",
        });
      }
}

// signup route handler
exports.signup = async (req,res)=>{
    try{
        //get data
        const {name,email,password}=req.body;
        // check if user already exists
        const existingUser = await Auth.findOne({email});
        
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exists",
            }); 
        }

        // secure password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password,10);
        }
        catch(err){
            return res.status(500).json({
                success:false,
                message:"Error in hashing password",
            });
        }
        // create entry for user
        const user = await Auth.create({
            name,email,password:hashedPassword
        })

        return res.status(200).json({
            success:true,
            message:"User created successfully",
        });
    }
    catch(error){
          console.error(error);
          return res.status(500).json({
            success:false,
            message:"User cannot be registered,please try again later",
          });
    }
}

// login route handler
exports.login = async (req,res)=>{
    try{
        // data fetch
        const {email,password} = req.body;
        // validation on email and password
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Please fill all the details carefully",
            });
        }

        // check for registered user
        let user = await Auth.findOne({email});
        // if not a registered user
        if(!user){
            return res.status(401).json({
                success:false,
                message:"User is not registered",
            });
        }
        const payload ={
            email:user.email,
            id:user.id,
        }

        // verify password and generate a JWT token
        if(await bcrypt.compare(password,user.password)){
            // password match
            let token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h",
            });
            user = user.toObject();

            user.token = token;
            user.password = undefined;

            console.log(token);

            const options ={
                expires:new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly:true,
                secure: true,
                sameSite: "None",
            }


            return res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:'User Logged in successfully',

            });
            

        }
        else{
            // password do not match
            return res.status(403).json({
                success:false,
                message:"Password Incorrect",
            });
        }
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Login Failure"
        })
    }
}

// Logout route handler
exports.logout = async (req, res) => {
    return res.clearCookie("token").json({ success: true });
  };

