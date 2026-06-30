const express=require("express");
const router=express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/user.js");


//get signup
router.get("/signup",userController.rendersignupform);

//post signup
router.post("/signup",wrapAsync(userController.signup));

//login
//get
    router.get("/login",userController.renderloginform);

//post
    router.post("/login",saveRedirectUrl,
        passport.authenticate("local",{
        failureRedirect:"/login",
        failureFlash:true,
    }),
    userController.login
);
//logout
router.get("/logout",userController.logout);




module.exports=router;

