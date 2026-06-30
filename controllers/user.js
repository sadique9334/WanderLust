const User = require("../models/user.js");

module.exports.rendersignupform=(req,res) => {
    res.render("users/signup.ejs");
} ;

module.exports.signup = async(req,res,next)=>{
    try{
    let {username,email,password}=req.body;
    const newUser=new User({email,username});
    const registerUser=await User.register(newUser,password);
    console.log(registerUser);
    //automatic login
    req.login(registerUser,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","user has registered");
        res.redirect("/listings");
    });
  
    }
    catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
}

//login form

module.exports.renderloginform = (req,res)=>{
        res.render("users/login.ejs");
    };

//login

module.exports.login = async(req,res)=>{
        req.flash("success","Welcome back to Wanderlust");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
    };

//logout

module.exports.logout = (req, res, next) => {
  req.logout((err) => {      // <-- logout callback me error handle karo
    if (err) {
      return next(err);
    }
    req.flash("success", "You have logged out successfully");
    res.redirect("/listings");
  });
};
