const express=require("express")
const {addProducts,getIdProducts,getAllProducts,deleteProducts,updateProducts} =require("../Controllers/ProductController")
const upload=require('../Middleware/Multer')

const router=express.Router()

router.post('/addproduct', upload.array("image",5),addProducts);
// router.get('/getIdProducts/:id',getIdProducts)
// router.delete('/deleteProducts/:id',deleteProducts)
// router.get('/getProducts/all',getAllProducts)
// router.put('/updateProducts/:id',updateProducts)

module.exports=router
