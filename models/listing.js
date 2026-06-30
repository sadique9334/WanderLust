const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");


const listingSchema = new Schema({
    title:{
      type:  String,
      required: true,
    },
    description :String,
    image: {
        // type:String,

        // default:"https://th.bing.com/th/id/R.1e64657cb0a7e09f6bc7a2bedc9f9151?rik=816WGXGom8wb5w&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1526415480757-aaff8e7a3882%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax&ehk=9SMkR4haoYXsH0O0gQybf%2fk4u%2b2BBY8Lk9N3o3IpetE%3d&risl=&pid=ImgRaw&r=0",

        // set:(v)=> v === "" ? "https://th.bing.com/th/id/R.1e64657cb0a7e09f6bc7a2bedc9f9151?rik=816WGXGom8wb5w&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1526415480757-aaff8e7a3882%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax&ehk=9SMkR4haoYXsH0O0gQybf%2fk4u%2b2BBY8Lk9N3o3IpetE%3d&risl=&pid=ImgRaw&r=0"
        //  : v,  
        url:String,
        filename : String,
    },
    price:Number,
    location:String,
    country:String,
    reviews:[
      {
        type:Schema.Types.ObjectId,
        ref:"Review",
      },
    ],
    owner:{
      type:Schema.Types.ObjectId,
      ref:"User",
    }  
});

listingSchema.post("findOneAndDelete",async(listing)=>{
  if(listing){
    await Review.deleteMany({ _id:{ $in: listing.reviews}});
  }
});



const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;