const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, "name must contain atleast 3 characters"]
    },
    age: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 4
    },
    email: {
        type: String,
        required: true,
    
    },
    number: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 10,
       
    },
    more: {
        type: String,
        minLength: 5
    }
}, { timestamps: true });

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;