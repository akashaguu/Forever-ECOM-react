import React from 'react'
import dressimg from "../images/Rectangle 3634.png"
import bigshirt from "../images/big_whiteshirt.png"
// import stars from '../images/ '

function Product() {
  const whitedress=[{
    whiteshirt:dressimg
  },{
    whiteshirt:dressimg
  },{
    whiteshirt:dressimg
  },{
    whiteshirt:dressimg
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
  
  return (
    <div>
      <div className='flex gap-6'>
        <div className='flex flex-col mt-20'>
          {
            whitedress.map((i)=>(
              <div ><img src={i.whiteshirt} className='w-24 ml-20 mt-4'/></div>
            ))
          }
        </div>
        <div>
          <div ><img src={bigshirt} className='mt-24 h-[491px]'/></div>

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
                <input type='radio' name="size" value="S" className='hidden peer' /><span className='w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-md  peer-checked:border-orange-700 peer-checked:text-black'>{i.name}</span>
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
           <div><button className='w-32 h-10 text-xs border bg-black text-white'>ADD TO CART</button></div> 
           <div className='border border-t'></div>
           <div className='text-xs text-gray-500 flex flex-col gap-1'>
            <h2>100% Original product.</h2>
            <h2>Cash on delivery is available on this product.</h2>
            <h2>Easy return and exchange policy within 7 days.</h2>
           </div>
            
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Product
