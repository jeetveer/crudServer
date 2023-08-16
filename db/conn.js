const mongoose = require("mongoose");

const DB = process.env.DATABASE

const hello = mongoose.connect(DB)
.then(()=>{
    console.log("connection start");
}).catch((err)=>{
    console.log(err.message);
})