import React, { useState } from 'react';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';

function AddItems() {
  const [images, setImages] = useState([null, null, null, null]);
  const [imageFiles, setImageFiles] = useState([null, null, null, null]);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    subcategory: '',
    price: '',
    sizes: [],
    bestseller: false,
    date: new Date().toISOString().split('T')[0], // default today's date
  });

  // Handle image preview and file storage
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file);
      setImages(newImages);

      const newFiles = [...imageFiles];
      newFiles[index] = file;
      setImageFiles(newFiles);
    }
  };

  // Handle text/select/checkbox changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'bestseller') {
      setFormData({ ...formData, bestseller: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle size selection
  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    let updatedSizes = [...formData.sizes];
    if (checked) updatedSizes.push(value);
    else updatedSizes = updatedSizes.filter((size) => size !== value);
    setFormData({ ...formData, sizes: updatedSizes });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare FormData for file upload
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'sizes') {
        formData.sizes.forEach((size) => formDataToSend.append('sizes', size));
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    // Append images
    imageFiles.forEach((file, index) => {
      if (file) formDataToSend.append(`image${index + 1}`, file);
    });

    try {
      const response = await fetch('http://localhost:8000/api/products/create', {
        method: 'POST',
        body: formDataToSend,
      });
      const data = await response.json();
      console.log('Response:', data);
      
      if (response.ok) {

        
        alert('Product added successfully!');
        setFormData({
          name: '',
          description: '',
          category: '',
          subcategory: '',
          price: '',
          sizes: [],
          bestseller: true,
          date: new Date().toISOString().split('T')[0],
        });
        setImages([null, null, null, null]);
        setImageFiles([null, null, null, null]);
      } else {
        alert(`Error: Product not added. ${data.message || 'Unknown error'}`);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong while adding the product.');
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-row">
        <Sidebar />
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold ml-[50px] text-gray-600 mt-[40px]">Upload Images</h2>
          <div className="grid grid-cols-4 gap-[40px] ml-[50px] mt-[10px]">
            {images.map((img, index) => (
              <label
                key={index}
                className="border-2 border-gray-100 w-[115px] h-[130px] flex items-center justify-center text-gray-800 cursor-pointer"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, index)}
                  className="hidden"
                />
                {img ? <img src={img} alt="preview" className="w-full h-full object-cover" /> : 'Upload'}
              </label>
            ))}
          </div>

          <div>
            <h2 className="text-xl font-semibold ml-[50px] mt-[40px] text-gray-600">Product Name</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-[450px] border-2 border-gray-300 rounded ml-[50px] mt-[10px] p-[10px]"
              required
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold ml-[50px] text-gray-600 mt-[40px]">Product Description</h2>
            <textarea
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              className="w-[450px] border-2 border-gray-300 rounded ml-[50px] mt-[10px]"
            />
          </div>

          <div className="grid grid-cols-3 gap-[0px]">
            <div>
              <h2 className="text-xl text-gray-600 font-semibold ml-[50px] mt-[40px]">Category</h2>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-[170px] border-2 border-gray-300 rounded ml-[50px] mt-[10px] p-[7px]"
              >
                <option value="">Select</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
              </select>
            </div>

            <div>
              <h2 className="text-xl font-semibold ml-[50px] text-gray-600 mt-[40px]">Subcategory</h2>
              <select
                name="subcategory"
                value={formData.subcategory}
                onChange={handleChange}
                className="w-[170px] border-2 border-gray-300 rounded ml-[50px] mt-[10px] p-[7px]"
              >
                <option value="">Select</option>
                <option value="topwear">Topwear</option>
                <option value="bottomwear">Bottomwear</option>
                <option value="winterwear">Winterwear</option>
              </select>
            </div>

            <div>
              <h2 className="text-xl text-gray-600 font-semibold ml-[50px] mt-[40px]">Price</h2>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-[170px] border-2 border-gray-300 rounded ml-[50px] mt-[10px] p-[7px]"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl text-gray-600 font-semibold ml-[50px] mt-[40px]">Sizes</h2>
            <div className="flex flex-row gap-[30px] mt-[10px] ml-[50px]">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <label key={size}>
                  <input
                    type="checkbox"
                    value={size}
                    checked={formData.sizes.includes(size)}
                    onChange={handleSizeChange}
                    className="peer hidden"
                  />
                  <div className="w-12 h-12 flex items-center font-medium text-gray-600 justify-center border-2 border-gray-400 rounded-md  peer-checked:border-orange-700 peer-checked:text-black">
                    {size}
                  </div>
                </label>
              ))}
            </div>
          </div>

          <label className="flex items-center space-x-4">
            <input
              type="checkbox"
              name="bestseller"
              checked={formData.bestseller}
              onChange={handleChange}
              className="ml-[50px] mt-[40px] w-[25px] h-[20px]"
            />
            <h2 className="font-semibold text-gray-600  text-sm mt-[40px]">Add To BestSeller</h2>
          </label>

          <button
            type="submit"
            className="bg-black text-white w-[100px] h-[40px] rounded mt-[45px] ml-[60px] mb-[50px]"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddItems;