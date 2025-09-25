import React from 'react'
import line1 from '../../images/Rectangle 3605.png'

import headerimg from "../../images/header_img (1).png"

function Banner() {
  return (
    <div className='flex border border-black w-[1195px] h-[500px] ml-8  justify-between'>
        <div>
            <div className='flex'>
                <div><img src={line1} alt='line1' className='mt-[180px] ml-[100px]'></img></div>
                <div><h2 className='mt-[166px] ml-3 font-medium text-lg'>OUR BESTSELLERS</h2></div>
            </div>
            <div><h2 className='ml-[100px] mt-5 text-5xl font-light font-prata'>Latest Arrivals</h2></div>
            <div className='flex'>
                <div><h2 className='ml-[100px] mt-5 font-medium text-lg'>SHOP NOW</h2></div>
                <div><img src={line1} alt='line1' className='ml-3 mt-9'></img></div>
            </div>
        </div>
        <div>
            <img src={headerimg} alt='headerimg' className='w-[600px] h-[498px] '></img>
        </div>
    </div>
  )
}

export default Banner
