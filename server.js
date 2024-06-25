
const express = require('express')
const app = express()
const port = process.env.PORT

const cookieParser =  require('cookie-parser') ;
require('dotenv').config()


app.use(express.json())
app.use(cookieParser())

const userRouter = require('./routes/user.js')
const blogRouter = require('./routes/blog.js')

app.use('/api/users', userRouter)
app.use('/api/blogs', blogRouter,)




app.listen(port, () => {
  console.log(`server is running ${port}`);
})