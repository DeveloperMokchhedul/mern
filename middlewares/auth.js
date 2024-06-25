const jwt = require('jsonwebtoken')
const User = require('../models/useSchema')



const isAuthenticate = async (req, res,next)=>{
    const {token} = req.cookies
    console.log(token);
    if(!token) return res.status(404).json({
      success:false,
      message:"please login"
    })

    const decode = jwt.verify(token, process.env.SECRET_KEY)
    console.log("decoded data is ", decode)

    req.user = await User.findById(decode._id)
    console.log(req.user)
    next();

  }

  module.exports = isAuthenticate