import React from 'react'
import navimage from '../images/Ellipse 658.png'


function Header() {
  

  
  return (
    <div>
      <div className=' flex justify-between border-b-2 border-gray-300'>
        <div className='flex'>
            <div className='tracking-wide font-colombo leading-normal text-3xl mt-5 ml-8 '>FOREVER</div> 
            <div><img src={navimage} alt='navimage' className='mt-10 ml-1' ></img></div>
        </div>
        <div className='border-2 h-7 w-24 text-l mt-5  mb-5 mr-8 rounded-md hover:bg-black hover:text-white transition'><button className='ml-4' >LOGOUT</button></div>

      </div>
    </div>
  )
}

export default Header
