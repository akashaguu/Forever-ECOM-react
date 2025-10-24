const express=require("express");
const userRoutes=require("./Routes/UserRouter")
const productRoutes=require("./Routes/ProductRouter")
require("dotenv").config()
const PORT=process.env.PORT;
const mongoDB=require("./Config/Mongodb");
const cors=require("cors");



const app=express();



app.use(express.json());
app.use(cors({origin:["http://localhost:3000","http://localhost:3001"],credentials:true}))
mongoDB();
app.use("/api/product",productRoutes)
app.use("/api/user",userRoutes)



app.listen(PORT,()=>{
    console.log(`server connecting on port ${PORT}`);
});