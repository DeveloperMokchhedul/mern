
const express = require('express')
const { userRegistar, userLogin, userLogOut,getProfile  } = require('../controllers/userControllers')
const isAuthenticate = require('../middlewares/auth')
const router = express.Router()




router.post('/register', userRegistar )

router.post('/login', userLogin)

router.get('/logout', userLogOut)
router.get('/profile',isAuthenticate, getProfile)
  
  

















module.exports = router