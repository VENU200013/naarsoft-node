const User = require("../model/user.js");

exports.getUserDetails=async(req,res)=>{
    try {
        const getAllUsers = await User.find();
        res.status(200).json({data:getAllUsers,message: "user details retrieved Succefully"})
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message,message:"Something went wrong"})
    }
}

exports.saveUser=async(req,res)=>{
    try {
        const {name,password,email,number,age,more}=req.body;
        const userInfo = new User({
            name,password,email,number,age,more
        });
       var userInforesponse =await userInfo.save();
        res.status(200).json({message:"User Created SuccessFully",data:userInforesponse})
    } catch (error) {
       
        res.status(400).json({error: error.message,message:"User Failed Create"})
    }
}
exports.updateUser=async(req,res)=>{
    try {
        const {id} =req.headers
        const updateUser = await User.findByIdAndUpdate(id,req.body)
        res.status(200).json({message:"User Updated SuccessFully",data:updateUser})
    } catch (error) {
        res.status(400).json({error: error.message,message:"User Failed Update"})
    }
};
exports.deleteUser=async(req,res)=>{
    try {
        const {id} =req.headers;
        const deleteUser = await User.findByIdAndDelete(id)
        res.status(200).json({message:"User Deleted SuccessFully",deleteUser,status:200})
    } catch (error) {
        console.log("Internal Server Error")
    }
}
