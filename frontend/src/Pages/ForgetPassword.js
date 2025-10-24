import React from 'react'
import{Link} from 'react-router-dom'
import line2 from '../images/Rectangle 3605.png'
import Subscribe from '../component/Subscribe/Subscribe'

function ForgetPassword() {
  return (
    <div>
        <div className='w-[1150px] mx-auto border-t border-gray-600 mt-10'>
        <div className='mt-16 flex  justify-center items-center gap-2'>
                          
                          <h2 className='text-2xl text-bold font-prata'>Forget Password</h2>
                          <img src={line2} alt='line2'/>
        </div>
        <div className='flex flex-col gap-6 justify-center items-center mt-20'>
            <div ><input placeholder='Current Password' type='text' className='border border-gray-600 w-72 h-9 pl-4 pt-1 rounded-sm'  /></div>
            <div ><input placeholder='New Password' type='text' className='border border-gray-600 w-72 h-9 pl-4 pt-1 rounded-sm' /></div>
            <div ><input placeholder='Confirm Password' type='text' className='border border-gray-600 w-72 h-9 pl-4 pt-1 rounded-sm'/></div>
        </div>
        
        <Link to={'/login'} className='flex justify-center items-center mt-5'><button className=' bg-black text-zinc-50 w-48 h-10 rounded-md'>Change Password</button></Link>
        <div className='mt-96'><Subscribe /></div>
    </div>
      
    </div>
  )
}

export default ForgetPassword
