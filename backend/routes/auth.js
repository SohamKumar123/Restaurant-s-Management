const express = require("express");
const router = express.Router();

const {login,signup,logout}=require("../controllers/form");

const {authentication} = require("../middlewares/authentication");
router.post("/login",login);
router.post("/signup",signup);
router.get("/logout",logout);
router.get("/authenticate", authentication);

// protected route
// router.get("/login/dashboard",authentication,(req,res)=>{
//     res.json({
//         success:true,
//         message:"Welcome to dashboard",
//     });
// });
module.exports = router;