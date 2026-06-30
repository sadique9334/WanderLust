const Listing = require("../models/listing");

//index route
module.exports.index = async(req,res)=>{

    const allListings = await Listing.find({});
   res.render("listings/index.ejs",{allListings});
   console.log("hii");
}


//new route
module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new.ejs");
}

//show routw
module.exports.showlisting = async (req,res)=>{
    let {id} = req.params;
    const listing= await Listing.findById(id)
    .populate({
        path:"reviews",
        populate:{
            path:"author",
        },
    })
    .populate("owner");
    if(!listing){
         req.flash("error","Listing you requested not exist");
         return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs",{listing});

};

//create route
module.exports.create =async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;
    console.log(url,"...",filename);
    const newListing = new Listing(req.body.listing);
    console.log(req.user);
    newListing.owner=req.user._id;
    newListing.image = {url,filename};
    await newListing.save();
    req.flash("success","New Listing created");
    res.redirect("/listings");
};

//edit route

module.exports.edit = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
         req.flash("error","Listing you requested not exist");
         return res.redirect("/listings");
    }
    let originalimageurl= listing.image.url;
    originalimageurl.replace("/upload","/upload/h_300,w_250");
    res.render("listings/edit.ejs",{listing,originalimageurl});
};

//update

module.exports.update = async(req,res)=>{
    let {id}=req.params;
     let listing = await Listing.findByIdAndUpdate(id , req.body.listing);
    
     if(typeof req.file!== "undefined"){
     let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url,filename};
    await listing.save();
     }

    req.flash("success","Listing Updated");
    res.redirect(`/listings/${id}`);
};

//delete

module.exports.delete = async(req,res)=>{
    let {id}= req.params;
    const dlt = await Listing.findByIdAndDelete(id);
    console.log(dlt);
    req.flash("success","Listing deleted");
    res.redirect("/listings");
};