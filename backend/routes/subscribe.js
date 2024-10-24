// create instance of express and its router
const express = require("express");
const router = express.Router();


const {handleSubscribe}=require("../controllers/form");
router.post("/subscribe",handleSubscribe); 


module.exports = router;