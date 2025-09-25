import React from 'react'

function Subscribe() {
  return (
    <div className='mt-[100px]'>
      <div><h2 className='text-center text-2xl font-semibold'>Subscribe now & get 20% off</h2></div>
      <div><h2 className='text-gray-600 text-center mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2></div>
      <div className='flex ml-[24%] mt-10'>
        <input type='text' placeholder='Enter you email id' className='border-2 w-[500px] h-[50px]'></input>
        <button className='bg-black text-white w-[150px]'>SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default Subscribe
