const express=require("express");
const userRoutes=require("./Routes/UserRouter")
const productRoutes=require("./Routes/ProductRouter")
const cartRouter=require('./Routes/CartRouter')
const orderRouter = require("./Routes/OrderRouter");
require("dotenv").config()
const PORT=process.env.PORT;
const mongoDB=require("./Config/Mongodb");
const cors=require("cors");
const cloudinary= require('./Config/Cloudinary');




const app=express();
cloudinary()



app.use(express.json());
app.use(cors({origin:["http://localhost:3000","http://localhost:3001"],credentials:true}))
mongoDB();
app.use("/api/products",productRoutes)
app.use("/api/user",userRoutes)
app.use("/api/order", orderRouter);
app.use('/api/cart',cartRouter)



app.listen(PORT,()=>{
    console.log(`server connecting on port ${PORT}`);
});