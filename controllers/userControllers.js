const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../models/useSchema')
const db = require('../db');


// const userRegistar = async (req, res) => {
//     try {
//       const { name, email, password } = req.body;
//       let existUser = await User.findOne({ email });
//       if (existUser) return res.status(404).json({
//         message:"user already exist"
//       })
//       const hashPassword = await bcrypt.hash(password, 10);
//       const user = await User.create({
//         name, email, password:hashPassword
//       })
//       const token = jwt.sign({_id:user._id}, 'mokchhedul')
//       res.status(201).cookie("token", token, {
//         httpOnly:true,
//         maxAge:10*60*1000
//       }).json({
//         success: true,
//         message: "registration succesfully"
//       })
  
//     } catch (error) {
//       console.log(error);
//     }
//   }
const userRegistar = async (req, res)=>{
  try {
    const {name, email, password} = req.body;

    let existUser = await User.findOne({email});
    if(existUser)return res.status(404).json({
      message:"user already exist"
    })
    const haspassword  = await bcrypt.hash(password, 10)
    const user = User.create({
      name, email, password:haspassword
    })
    const token = jwt.sign({_id:user._id}, "mokchhedul")
    res.status(200).cookie("token",token,{
      httpOnly:true,
      maxAge:10*60*1000
    }).json({
      message:"user created succesfully",
    })
  } catch (error) {
    
  }

}


  const userLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      let user = await User.findOne({ email });
      if (!user) return res.status(404).json({
        message:"don't have a acount please create acount"
      })
      const comparePassword = await bcrypt.compare(password, user.password);
  
      if(!comparePassword)return res.status(404).json({
        success:false,
        messeage:"invalid crediantial"
      })
      const token = jwt.sign({_id:user.id}, process.env.SECRET_KEY)
      res.status(201).cookie("token", token, {
        httpOnly:true,
        maxAge:10*60*1000
      }).json({
        success: true,
        message: `welcom ${user.name}`
      })
    } catch (error) {
      console.log(error);
      console.log("error hogaya")
    }
  }


  const userLogOut = (req, res)=>{
    res.status(200).cookie("token", '', {
        expires:new Date(Date.now())
    }).json({
        success:true,
        message:"logout succesfully"
    })
  }

  const getProfile=(req, res)=>{

    res.status(200).json({
      success:true,
      user:req.user
      
      
    })
  }






  module.exports = { userRegistar, userLogin, userLogOut, getProfile }