import React, { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';
import Collections from '../component/Collection/Collections';
import { ShopContext } from '../component/Context/ShopContext';

function Product() {
  const { products } = useContext(ShopContext);
  const { id } = useParams();
  const {addToCart} =useContext(ShopContext)
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState('');
  const [mainImage, setMainImage] = useState('');

  // Find product by ID safely
  const productData = products?.find((item) => item._id === id);

  // Set default main image
  useEffect(() => {
    if (productData?.image) {
      setMainImage(productData.image);
    }
  }, [productData]);

  // Handle Add to Cart
  const handleAddToCart = async () => {
  if (!selectedSize) {
    toast.error('Please select a size');
    return;
  }

  try {
    await addToCart(productData,1); // 👈 this actually adds to your cart (backend + context)
    toast.success('Item added to cart');
    navigate('/cart');
  } catch (error) {
    console.error('Add to cart failed:', error);
    toast.error('Failed to add item to cart');
  }
};


  // Guard: product not found
  if (!productData) {
    return (
      <div className="flex justify-center items-center h-96 text-gray-500 text-lg">
        Product not found.
      </div>
    );
  }

  // Ensure sizes is an array
  const availableSizes = Array.isArray(productData.sizes)
    ? productData.sizes
    : [];

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Thumbnail column */}
        <div className="flex flex-row lg:flex-col  lg:mt-20 ml-4 lg:ml-20">
          {productData?.images && productData.images.length > 0 ? (
            productData.images.map((img, index) => (
              <img
                key={index}
                src={img}
                className={`w-24 h-24 object-contain border rounded-md cursor-pointer transition ${
                  mainImage === img
                    ? 'border-orange-500 scale-105'
                    : 'border-gray-300 hover:border-gray-500'
                }`}
                alt={`thumbnail-${index}`}
                onClick={() => setMainImage(img)}
              />
            ))
          ) : (
  Array(4).fill().map((_, index) => (
    <img
      key={index}
      src={productData?.image}
      className=" mt-5  w-24 h-24 border border-gray-300"
      alt={`fallback-${index}`}
      onClick={() => setMainImage(productData?.image)}
    />
  ))
  )}
        </div>

        {/* Main image */}
        <div className="flex justify-center items-center">
          <img
            src={mainImage}
            className="mt-10 lg:mt-24 h-[400px] lg:h-[491px] object-contain rounded-md"
            alt={productData?.name}
          />
        </div>

        {/* Product Details */}
        <div className="mt-10 lg:mt-24 flex flex-col gap-6 px-6">
          <h2 className="text-2xl font-outfit font-medium">
            {productData?.name}
          </h2>
          <h2 className="text-2xl font-outfit">${productData?.price}</h2>
          <p className="w-full lg:w-[500px] text-sm font-outfit text-gray-600">
            {productData?.description}
          </p>

          {/* Size Selection */}
          <div>
            <h2 className="mb-4 font-medium">Select size:</h2>
            <div className="flex gap-4 flex-wrap">
              {availableSizes.length > 0 ? (
                availableSizes.map((i, index) => (
                  <label key={index} className="cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      value={i.name || i}
                      className="hidden peer"
                      onChange={(e) => setSelectedSize(e.target.value)}
                    />
                    <span className="w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-md peer-checked:border-orange-700 peer-checked:text-black">
                      {i.name || i}
                    </span>
                  </label>
                ))
              ) : (
                <p className="text-sm text-gray-400">No sizes available</p>
              )}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            className="w-32 h-10 text-xs border bg-black text-white hover:bg-orange-600 transition"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>

          <div className="border-t my-2"></div>
          <div className="text-xs text-gray-500 flex flex-col gap-1">
            <h2>100% Original product.</h2>
            <h2>Cash on delivery is available on this product.</h2>
            <h2>Easy return and exchange policy within 7 days.</h2>
          </div>
        </div>
      </div>

      {/* Description + Related Section */}
      <div className="mt-28">
        <div className="flex ml-20">
          <h2 className="flex border border-gray-500 w-40 h-16 justify-center items-center font-medium font-outfit">
            Description
          </h2>
          <h2 className="flex border border-gray-500 w-40 h-16 justify-center items-center font-medium font-outfit text-gray-400">
            Reviews (122)
          </h2>
        </div>
        <div className="ml-20 border border-gray-500 p-8">
          <p className="text-sm w-full lg:w-[1040px] text-gray-600 font-outfit">
            An e-commerce website is an online platform that facilitates buying
            and selling of products over the internet. It serves as a virtual
            marketplace connecting businesses and customers globally.
          </p>
          <p className="text-sm w-full lg:w-[1040px] mt-5 text-gray-600 font-outfit">
            Products are displayed with descriptions, images, prices, and
            variations (like sizes and colors). Each product has a dedicated
            page for more details.
          </p>
        </div>
      </div>

      <Collections
      
        title1="RELATED"
        title2="PRODUCTS"
        limit={5}
        hideDescription={true}
      />
    </div>
  );
}

export default Product;
