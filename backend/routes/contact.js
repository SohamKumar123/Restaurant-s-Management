
// create instance of express and its router
const express = require("express");
const router = express.Router();


const {handleform }=require("../controllers/form");
router.post("/contact",handleform); 


module.exports = router;
