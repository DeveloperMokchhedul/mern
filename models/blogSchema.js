

const mongoose = require("mongoose")

const blockSchema  = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    imgUrl:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User", // schema name,
        require:true,
    }
})

const Blog = mongoose.model("Blog", blockSchema);
module.exports =  Blog;