// create instance of express and its router
const express = require("express");
const router = express.Router();


const {handleBooking}=require("../controllers/form");
router.post("/booking",handleBooking); 


module.exports = router;