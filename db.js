
const dotenv = require('dotenv')

const mongoose = require('mongoose');
// const mongoURL = "mongodb://127.0.0.1:27017/hotels"

dotenv.config()
const mongoURL =process.env.MONGODB_URL;




 mongoose.connect(mongoURL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
 })
  
 const db = mongoose.connection;

 db.on('connected',()=>{
  console.log("connected to mongoDB Server");
 })

 db.on('disconnected',()=>{
  console.log("Mongodb disconnected");
 })

 module.exports = db;