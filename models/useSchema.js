

const mongoose = require("mongoose")

const userScheme  = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const User = mongoose.model("user", userScheme);
module.exports =  User;