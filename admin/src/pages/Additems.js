import React from 'react'
import{ useState } from 'react'

function Additems() {

  
  const[images,setImages]=useState([null,null,null,null])

  const handleImageChange=(e,index)=>{
    const file=e.target.files[0];
    if(file){
      const newImages = [...images];
newImages[index] =URL.createObjectURL(file);
setImages(newImages);
}
}

  
    const size=[{
    name:"S"
  },{
    name:"M"
  },{
    name:"L"
  },{
    name:"XL"
  },{
    name:"XXL"
  }]


  return (
    <div>
      <div className='flex flex-col'>
         <div className='ml-10 mt-10 text-xl font-outfit text-gray-600'><h2>Upload Images</h2></div>
          <div className='flex ml-10 mt-4 gap-4'>
            {images.map((img, index) => (
            <label key={index} className="border-2 border-gray-300 h-20 w-20 flex justify-center items-center font-outfit text-gray-500 cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(e, index)}
              />
              {img ? <img src={img} alt={`preview-${index}`} className="h-full w-full object-cover" /> : "Upload"}
            </label>
          ))}
          </div>
        
          <div className='ml-10 mt-10 text-xl font-outfit text-gray-600'><h2>Product Name</h2></div>
          <div><input type='text' placeholder='Name' className='border-2 border-gray-300 h-8 w-72 ml-10 my-3 font-outfit text-gray-500' /></div>
          <div className='ml-10 mt-4 text-lg font-outfit text-gray-600'><h2>Product Description</h2></div>
          <div><textarea className='border-2 border-gray-300 h-20 w-72 ml-10 mt-3'/></div>
          <div className='flex'>
            <div className='ml-10 mt-4 text-lg font-outfit text-gray-600'><h2>Product Category</h2></div>
            <div className='ml-10 mt-4 text-lg font-outfit text-gray-600'><h2>SubCategory</h2></div>
            <div className='ml-[78px] mt-4 text-lg font-outfit text-gray-600'><h2>Product price</h2></div>
          </div>
          <div className='ml-10 mt-6 flex gap-8' >
            <select className='font-lg text-normal text-end border-2  border-gray-300 w-[150px] h-10 text-gray-600' >
              <option value="">Select</option>
              <option value="low">Sortby:Price: Low To High</option>
              <option value="high">Sortby:Price: High To Low</option>
            </select>
            <select className='font-lg text-normal text-end border-2  border-gray-300 w-[150px] h-10 text-gray-600' >
              <option value="">Select</option>
              <option value="low">Sortby:Price: Low To High</option>
              <option value="high">Sortby:Price: High To Low</option>
            </select>
            <input type='text' className='font-lg text-normal text-end border-2  border-gray-300 w-[150px] h-10 text-gray-600'/>
          </div>
          <div className='ml-10 mt-4 text-lg font-outfit text-gray-600'><h2>Product Sizes</h2></div>
          <div>
            <div className='flex ml-10 mt-5 gap-4 '>
              {
                  size.map((i)=>(
                    <label className='cursor-pointer'>
                      <input type='checkbox' name="size" value="S" className='hidden peer' /><span className='w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-md  peer-checked:border-orange-700 peer-checked:text-black'>{i.name}</span>
                    </label>
                  ))
                }
            </div>
          </div>
          <div className='font-outfit text-gray-600 ml-10 mt-8'><input  type='checkbox' />Add To Best Seller</div>
          <div><button className='w-32 h-10  border bg-black text-white ml-10 mt-10 font-outfit' >ADD</button></div>
        </div>
    </div>
  )
}

export default Additems
