import React from 'react'
import footimg from '../../images/logo-footer.png'

function Footer() {
  return (
    <>
    <div className='mt-[120px] flex'>
        <div>
            <img src={footimg} className='ml-[100px]' alt='footer'/>
            <h2 className='ml-[100px] w-[400px] text-xs mt-8 text-light text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h2>
        </div>
        <div className='ml-[300px] text-gray-600'>
            <div className='font-semibold'>COMPANY</div>
            <div className='mt-4 flex flex-col gap-2 text-sm '>
                <div>Home</div>
                <div>About Us</div>
                <div>Delivery</div>
                <div>Privacy policy</div>
            </div>
        </div>
        <div className='ml-[100px] text-gray-600'>
            <div className='font-semibold'>GET IN TOUCH</div>
            <div className='mt-4 flex flex-col gap-2 text-sm'>
                <div><h2>+1-212-456-7890</h2></div>
                <div><h2>greatstackdev@gmail.com</h2></div>
            </div>
        </div>
    </div>
    <div className=' border-black border-t w-[1150px] ml-14 mt-20'>
        <h2 className='text-center text-xs text-gray-600 '>Copyright 2024 © GreatStack.dev - All Right Reserved.</h2>
    </div></>
  )
}

export default Footer
