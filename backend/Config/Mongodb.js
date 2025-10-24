const mongoose=require("mongoose");

const mongoDB=async()=>{
    mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("Database connected"))
    .catch((err)=>console.log("error connection db",err));
}
module.exports=mongoDB