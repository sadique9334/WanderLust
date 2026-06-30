const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGOURL = "mongodb://127.0.0.1:27017/wanderlust";
main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGOURL);
}

const initDB= async()=>{
     await Listing.deleteMany({});
     initData.data= initData.data.map((obj)=>({...obj, 
        owner:"68c2c60f5ed6ebca2448fae6"}));
     await Listing.insertMany(initData.data);
     console.log("data was initised");
};

initDB();