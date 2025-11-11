const express = require("express");
const { createProduct, getAllProducts, getProductById, deleteProduct } = require("../Controllers/ProductController");

const upload = require("../MiddleWare/multer");
const productRouter = express.Router();

productRouter.post("/create",upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 }
  ]),

  createProduct
);
console.log("createProduct is successfully")

productRouter.delete('/remove/:id',deleteProduct)
productRouter.get('/single/:id',getProductById)
productRouter.get('/list',getAllProducts)

// router.post("/", createProduct);
// router.get("/", getAllProducts);
// router.get("/:id", getIdProducts);
// router.put("/:id", updateProducts);
// router.delete("/:id", deleteProducts);
// router.post("/add", upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:1},{name:"image3",maxCount:1},{name:"image4",maxCount:1}]), addProducts);

module.exports = productRouter;