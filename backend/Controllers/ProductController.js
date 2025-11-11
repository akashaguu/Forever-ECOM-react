const Product =require("../Models/ProductModels");
const cloudinary = require("cloudinary").v2;

// exports.createProduct = async(req,res) =>{
//     try{
//             const productData = new Product({
//                 name:req.body.name,
//                 description:req.body.description,
//                 price:req.body.price,
//                 category:req.body.category,
//                 subCategory:req.body.subCategory,
//                 bestSeller:req.body.bestSeller,
//                 quantity:req.body.quantity,

//             })
//             const savedProducts = await productData.save()
//             res.status(201).json({message:"product created successfully",savedProducts})
//         }catch(err){
//             console.log(err)
//         }

// }

// exports.getAllProducts= async(req,res)=>{
//     try{
//         const getAllProducts = await Product.find()
//         res.status(200).json({message:"all products",getAllProducts})
//     }catch(err){
//         res.status(400).json({message:"bad request",err})
//     }
// }

// exports.getIdProducts=async(req,res)=>{
//     try{
//         const id= req.params.id;
//         const getIdProducts= await Product.findById(id)
//         res.status(200).json({message:"product get by id",getIdProducts})

//     }catch(err){
//         res.status(400).json({message:"error in server",err})
//     }
// }

// exports.updateProducts=async(req,res)=>{
//     try{
//         const updateProducts=await Product.findByIdAndUpdate(req.params.id,req.body)
//         res.status(200).json({message:"product updated successfuly",updateProducts})
//     }catch(err){
//         res.status(400).json({message:"error",err})
//     }
// }

// exports.deleteProducts= async (req,res)=>{
//     try{
//         const deleteProducts=await Product.findByIdAndDelete(req.params.id,req.body)
//         res.status(200).json({message:"product deleted successfuly",deleteProducts})
//     }catch(err){
//         res.status(400).json({message:"error",err})

//     }
// }

//functions for addProducts

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, category, subcategory, sizes, bestseller } = req.body;

    // Handle files
    const images = [];
    ['image1', 'image2', 'image3', 'image4'].forEach(key => {
      if (req.files[key] && req.files[key][0]) images.push(req.files[key][0]);
    });

    // Handle sizes
    let parsedSizes = [];
    if (sizes) parsedSizes = Array.isArray(sizes) ? sizes : [sizes];

    // Upload to Cloudinary
    const imageUrls = await Promise.all(images.map(async (file) => {
      const result = await cloudinary.uploader.upload(file.path, { resource_type: "image" });
      return result.secure_url;
    }));

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subcategory,
      
      sizes: parsedSizes,
      bestseller: bestseller === 'true' || bestseller === true,
      image: imageUrls,
      
      date: Date.now(),
    };

    const product = new Product(productData);
    await product.save();

    res.status(201).json({ success: true, message: "Product created successfully", product });

  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, message: "Product deleted", product: deletedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Single Product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, message: "Product fetched", product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, message: "All products fetched", products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};