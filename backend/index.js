const express = require("express");
const app=express();
require("./db/connection.js");
const userRouter = require("./routes/user.js");
const cors = require("cors")
var PORT = 8000;

//in built middleware
app.use(express.json())
app.use(cors())
// Load Routes
app.use("/api/v1",userRouter);

app.get("/",(req,res)=>{
    res.send("Hello world !!")
})

//start Express server
app.listen(PORT, (req,res)=>{
    console.log(`Express server connected Successfully on Port ${PORT}`)
});

