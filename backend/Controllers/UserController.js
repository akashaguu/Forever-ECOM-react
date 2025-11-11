 const bcrypt=require("bcrypt")
 const validator=require("validator")
 const jwt=require("jsonwebtoken")

 const User=require('../Models/UserModels')

 const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"7d"})
 }


 //register user

 exports.registerUser=async(req,res)=>{
    try{
        const {email,password}=req.body
        const exist=await User.findOne({email})
        // email already exists
        if(exist){
            return res.json({success:false,message:"User already exist"})
        }
        //validate email and password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"please enter a valid email"})
        }
        if(password.length<8){
           return res.json({success:false,message:"please enter strong password"})
        }
        //hashing password
         const hashedpassword=await bcrypt.hash(password,10)

         //create new user
         const newUser=new User({
            email,
            password:hashedpassword
         })
         await newUser.save()
         const token=createToken(newUser._id)
         console.log("dcdjhr",token)
         res.status(201).json({success:true,message:"User has successfully registered",token,id: newUser._id,})
    } catch(error){
        console.error("Register error:",error)
        res.status(500).json({success:false,message:"server error"})
    }

 }
 exports.loginUser= async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({success:false,message:"Invalid email or password"})
        }

        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({success:false,message:"Invalid email or password"})
        }

        const token=createToken(user._id)

        res.status(200).json({success:true,message:"Login succesful",token})
    }catch (error){
        console.error("login error",error)
        res.status(500).json({success:false,message:"server error"})
    }
 }
 //admin login 
    exports.adminLogin= async(req,res)=>{
        try{
            const {email,password}=req.body
            console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);
            console.log("ADMIN_PASS:", process.env.ADMIN_PASS);
            console.log("User Input:", email, password);

            if (email===process.env.ADMIN_EMAIL &&
                password===process.env.ADMIN_PASS){
                    const token=createToken("admin")
                    return res.status(200).json({
                        success:true,
                        message:"Admin successful",token,
                        role:"admin"
                    })
                }
            else{
                return res.status(401).json({
                    success:false,
                    message:"invalid email or password",
                })
            }
        }catch(error){
            console.error("admin login error",error)
            res.status(500).json({success:false,message:"server error"})
        }
    }