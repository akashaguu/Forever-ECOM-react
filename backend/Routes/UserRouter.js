const express=require("express")
const {registerUser,loginUser, adminLogin} =require('../Controllers/UserController')

const router=express.Router()

router.post("/register",registerUser)
router.post('/login',loginUser)
router.post('/adminlog',adminLogin)

module.exports=router