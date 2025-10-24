import React from 'react'
import dressimg52 from "../images/Rectangle 3634.png"
import bigshirt from "../images/big_whiteshirt.png"
import Collections from '../component/Collection/Collections'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

// import stars from '../images/ '

function Product() {
  const whitedress=[{
    whiteshirt:dressimg52
  },{
    whiteshirt:dressimg52
  },{
    whiteshirt:dressimg52
  },{
    whiteshirt:dressimg52
  }]
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
  },]

  const [sizes,setSizes]=useState();
  const handleAddToCart=()=>{
    if(!sizes){
      toast.error("Please select size");
    } 
  else{
    toast.success("Item added to cart");
  } 
}

  
  
  return (
    <div>
      <div className='flex gap-6'>
        <div className='flex flex-col mt-20'>
          {
            whitedress.map((i)=>(
              <img src={i.whiteshirt} className="w-24 h-auto ml-20 mt-4 object-contain" alt="whitedress"/>

            ))
          }
        </div>
        <div>
          <img src={bigshirt} className='mt-24 h-[491px] ' alt='bigshirt'/>

        </div>
        <div className='mt-24 flex flex-col gap-6'>
          <div className='text-2xl rounded-md font-outfit font-medium'><h2>Men Round Neck Pure Cotton T-shirt</h2></div>
          <div className='flex'><img src=''/></div>
          <div className='mt-10 font-outfit text-2xl'><h2>$149</h2></div>
          <div className='w-[500px] text-xs font-outfit text-gray-600'><h2>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</h2></div>
          <div>
            <h2 className='mb-4'>Select size:</h2>
            <div className='flex gap-4 '>
                {
                  size.map((i)=>(
                    <label className='cursor-pointer'>
                <input type='radio' name="size" value="S" className='hidden peer' onChange={(e) => setSizes(e.target.value)} /><span className='w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-md  peer-checked:border-orange-700 peer-checked:text-black'>{i.name}</span>
              </label>
                  ))
                }
              {/* <label className='cursor-pointer'>
                <input type='radio' name="size" value="S" className='hidden peer' /><span className='w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-md  peer-checked:border-orange-700 peer-checked:text-black'>S</span>
              </label>
              <label className='cursor-pointer'>
                <input type='radio' name="size" value="M" className='hidden peer'/><span className='w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-md  peer-checked:border-orange-700 peer-checked:text-black'>M</span>
              </label>
              <label className='cursor-pointer'>
                <input type='radio' name="size" value="L" className='hidden peer' /><span className='w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-md  peer-checked:border-orange-700 peer-checked:text-black'>L</span>
              </label>
              <label className='cursor-pointer'>
                <input type='radio' name="size" value="XL" className='hidden peer' /><span className='w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-md  peer-checked:border-orange-700 peer-checked:text-black'>XL</span>
              </label> */}
            </div>
            </div>
           <Link to={'/cart'}><button className='w-32 h-10 text-xs border bg-black text-white' onClick={handleAddToCart} >ADD TO CART</button></Link> 
           <div className='border border-t'></div>
           <div className='text-xs text-gray-500 flex flex-col gap-1'>
            <h2>100% Original product.</h2>
            <h2>Cash on delivery is available on this product.</h2>
            <h2>Easy return and exchange policy within 7 days.</h2>
           </div>
            
        </div>
      </div>
      <div className='mt-28'>
          <div className='flex ml-20  '>
            <h2 className='flex border border-gray-500 w-40 h-16 justify-center items-center font-medium font-outfit'>Description</h2>
            <h2 className='flex border border-gray-500 w-40 h-16 justify-center items-center font-medium font-outfit text-gray-400'>Reviews (122)</h2>
          </div>
          <div className='ml-20 max-w max-h object-contain border border-gray-500'>
            <h2 className='flex text-sm w-[1040px] ml-14 mt-12 font-outfit text-gray-600'>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</h2>
            <h2 className='flex text-sm w-[1040px] ml-14 mt-5 font-outfit text-gray-600'>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</h2>
          </div>
      </div>
      <Collections title1='RELATED' title2='PRODUCTS' limit={5} hideDescription={true}/>
    </div>
  )
}

export default Product
