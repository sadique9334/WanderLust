 const express = require("express");
 const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema , reviewSchema} = require('../schema.js');
const Listing = require("../models/listing.js");
const {isLoggedIn} = require("../middleware.js");
const {isOwner,validateListing} = require("../middleware.js");
const multer  = require('multer');
const {storage}= require("../cloudconfig.js");
const upload = multer({storage});


const listingController = require("../controllers/listings.js");

//validation for Schema middleware

//validate for review

// const validateReview = (req,res,next)=>{
//     let {error} = reviewSchema.validate(req.body);
//     if(error){
//         let errMsg = error.details.map(el=>el.message).join(", ");
//         throw new ExpressError(400,errMsg);
//     }
//     else{
//         next();
//     }
// };


//new route

router.get("/new",isLoggedIn,listingController.renderNewForm);

router.route("/")
.get(wrapAsync(listingController.index))
.post(
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.create));

router.route("/:id")   
.get( wrapAsync(listingController.showlisting))
.put(isLoggedIn,
    isOwner,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.update))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.delete));

//index route

// router.get("/",wrapAsync(listingController.index));



//show route

// router.get("/:id", wrapAsync(listingController.showlisting));

//create route

// router.post("/",isLoggedIn,validateListing, wrapAsync(listingController.create));

//edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.edit));

//update route

// router.put("/:id",isLoggedIn,isOwner,wrapAsync(listingController.update)) ;

//delete route

// router.delete("/:id",isLoggedIn,isOwner,wrapAsync(listingController.delete));

module.exports = router;