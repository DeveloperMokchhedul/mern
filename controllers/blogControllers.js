const Blog = require("../models/blogSchema");


const createBlog = async (req, res)=>{
    try {
        const {title, description, imgUrl} = req.body;

        const blog = await Blog.create({
            title, 
            description, 
            imgUrl,
            user:req.user
        })
        res.status(200).json({
            success:true,
            message:"blog added",
        })
   
    } catch (error) {
        console.log(error);
    }
}

const myBlog =async (req, res)=>{
    try {
        const userId = req.user._id;
        const blogs = await Blog.find({user:userId})
        res.status(200).json({
            blogs
        })
    } catch (error) {
        
    }
}

const updateBlog =async (req, res)=>{

    try {
        const { title, description, imgUrl} =req.body;
        const id = req.params.id
        const blog= await Blog.findById(id)
        if(!blog) return res.status(404).json({
            success:false,
            message:"invalid id"
        })
        blog.title = title,
        blog.description = description,
        blog.imgUrl = imgUrl
        blog.save()

        res.json({
            message:"updating blog",
            blog
        })
        
    } catch (error) {
        
    }

}

const deleteBlog =async (req, res)=>{
    try {
        const id = req.params.id;
        const deleteBlog = await Blog.findByIdAndDelete(id)
        res.status(200).json({
            message:"blog deleted"
        })
         
        
    } catch (error) {
        console.log(error);
    }


}

module.exports = {createBlog, myBlog, updateBlog, deleteBlog }