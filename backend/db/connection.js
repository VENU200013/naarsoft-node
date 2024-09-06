const mongoose = require("mongoose");

const MOngoURI = 'mongodb://localhost:27017/crudtest';

mongoose.connect(MOngoURI)
.then((res)=>{
    console.log("MongoDB successfully connected!!")
}).catch((err)=>{
    console.log(err)
    console.log(" xxxxxxxx MOngoDb refused to connect xxxxxxxx")
})