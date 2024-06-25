const express = require("express");
const isAuthenticate = require("../middlewares/auth");
const { createBlog, myBlog, updateBlog, deleteBlog } = require("../controllers/blogControllers");
const router = express.Router();


router.post("/new",isAuthenticate, createBlog )
router.get("/myblogs",isAuthenticate, myBlog )
router.put("/:id",isAuthenticate, updateBlog )
router.delete("/:id",isAuthenticate, deleteBlog )



module.exports = router