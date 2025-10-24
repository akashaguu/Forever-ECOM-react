import React from 'react'
import line2 from '../images/Rectangle 3605.png'
import cartimg from '../images/Rectangle 3670.png'

import deleteimg from '../images/bin_icon.png'
 
function Cart() {
  return (
    <div>
        <div className='mt-16 ml-20 items-center flex gap-2'>
            <h2 className='text-gray-600 font-medium text-xl'>YOUR</h2>
            <h2 className='text-xl'>CART</h2>
            <img src={line2} alt='line2'/>
        </div>
        
        <div className='flex flex-row border-t border-b w-[1100px] h-32 mx-auto mt-5 mb-5 '>
            <div><img src={cartimg} alt='cartimg' className='w-20 mt-5'/></div>
            <div>
            <div className=' text-sm font-outfit ml-6 mt-5'><h2>Men Round Neck Pure Cotton T-shirt</h2></div>
            <div className='flex flex-row mt-4 '>
                <div className='ml-6 mb-4'>$149</div>
                <button type='submit' className='bprder-[1px] bg-gray-100 border-gray-300 w-10 h-10 text-center ml-5'>L</button>
                <input type='number' className='border-2 w-28 h-8 ml-80 '/>
                <div><img src={deleteimg} alt='dleteimg' className='ml-96'/></div>
                </div>
            </div>
        </div>
        <div className='flex flex-row  border-b w-[1100px] h-28 mx-auto '>
            <div><img src={cartimg} alt='cartimg' className='w-20 '/></div>
            <div>
            <div className=' text-sm font-outfit ml-6'><h2>Men Round Neck Pure Cotton T-shirt</h2></div>
            <div className='flex flex-row mt-4 '>
                <div className='ml-6 mb-4'>$149</div>
                <button type='submit' className='bprder-[1px] bg-gray-100 border-gray-300 w-10 h-10 text-center ml-5'>L</button>
                <input type='number' className='border-2 w-28 h-8 ml-80 '/>
                <div><img src={deleteimg} alt='dleteimg' className='ml-96'/></div>
                </div>
            </div>
        </div>












        {/* <div className='grid grid-cols-3 gap-10 border-t border-b w-[1100px] mx-auto mt-8'>
            <div className='flex'>
                <div className='flex'>
                    <img src={cartimg} alt='cartimg'/>
                    
                </div>
                <div className=''>
                    <h2>Men Round Neck Pure Cotton T-shirt</h2>
                    <div className='flex'>
                    <h2>$149</h2>
                    <button>L</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <input type='number' />
            </div>
            <div className='flex justify-end items-center'><img src={deleteimg} alt='deleteb'/></div>
        </div> */}
        <div className='ml-[700px] flex flex-col gap-3'>
            <div className='mt-16  items-center flex gap-2'>
                <h2 className='text-gray-600 font-medium text-xl'>CART </h2>
                <h2 className='text-xl'>TOTALS</h2>
                <img src={line2} alt='line2'/>
            </div>
            <div className='flex gap-72 border-b w-[390px] h-10 text-sm'>
                <h2 className='font-outfit'>Subtotal</h2>
                <h2>$60.00</h2>
            </div>
            <div className='flex gap-72 border-b w-[390px] h-10 font-outfit text-sm'>
                <h2 className=' '>Shipping-Fee</h2>
                <h2>$10.00</h2>
            </div>
            <div className='flex gap-72  w-[390px] h-10 font-outfit text-sm'>
                <h2 className=''>Total</h2>
                <h2 className='ml-7'>$70.00</h2>
            </div>
            <div className='ml-40 w-56 h-10 flex justify-center items-center bg-black text-white text-sm'><button type='submit'>Proceed to checkout</button></div>
        </div>
    </div>
  )
}

export default Cart
