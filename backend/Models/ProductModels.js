const mongoose=require("mongoose");

const productSchema= new mongoose.Schema({
    name:{
        type:String,required:true,unique:true
    },
    description:{
        type:String,required:true
    },
    subcategory:{
        type:String,required:true
    },
    image:{
        type:Array,required:true
    },
    price:{
        type:Number,required:true
    },
    category:{
        type:String,required:true
    },
    
    sizes:{
        type:Array,required:true
    },
    bestseller:{
        type:Boolean,required:true,default:false
    },
   
    date:{
        type:Date,required:true
    },
});


module.exports=mongoose.model("Product",productSchema);