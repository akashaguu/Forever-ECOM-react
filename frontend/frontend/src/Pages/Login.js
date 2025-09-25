import React from 'react'
import line2 from '../images/Rectangle 3605.png'
import Subscribe from '../component/Subscribe/Subscribe'

function Login() {
  return (
    <>
    <div className='w-[1150px] mx-auto border-t border-gray-600 mt-10'>
        <div className='mt-16 flex  justify-center items-center gap-2'>
                          
                          <h2 className='text-2xl text-bold font-prata'>Login</h2>
                          <img src={line2} alt='line2'/>
        </div>
        <div className='flex flex-col gap-6 justify-center items-center mt-20'>
            <div className='border border-gray-600 w-72 h-9 pl-4 pt-1 rounded-sm'><input placeholder='Email' type='text'  /></div>
            <div className='border border-gray-600 w-72 h-9 pl-4 pt-1 rounded-sm'><input placeholder='Password' type='text' /></div>
        </div>
        <div className='flex justify-center items-center gap-24 mt-2 '>
            <h2 className='text-xs text-gray-600 '>Frogot your password?</h2>
            <h2 className='text-xs text-gray-600'>Create account</h2>
        </div>
        <div className='flex justify-center items-center mt-5'><button className=' bg-black text-zinc-50 w-24 h-10 rounded-md'>Sign up</button></div>
        <div className='mt-96'><Subscribe /></div>
    </div>


    <div className='w-[1150px] mx-auto border-t border-gray-600 mt-10'>
        <div className='mt-16 flex  justify-center items-center gap-2'>
                          
                          <h2 className='text-2xl text-bold font-prata'>Sign Up</h2>
                          <img src={line2} alt='line2'/>
        </div>
        <div className='flex flex-col gap-6 justify-center items-center mt-20'>
            <div className='border border-gray-600 w-72 h-9 pl-4 pt-1 rounded-sm'><input placeholder='Name' type='text'  /></div>
            <div className='border border-gray-600 w-72 h-9 pl-4 pt-1 rounded-sm'><input placeholder='Email' type='text' /></div>
            <div className='border border-gray-600 w-72 h-9 pl-4 pt-1 rounded-sm'><input placeholder='Password' type='text' /></div>
        </div>
        
        <div className='flex justify-center items-center mt-5'><button className=' bg-black text-zinc-50 w-24 h-10 rounded-md'>Create</button></div>
        <div className='mt-96'><Subscribe /></div>
    </div>
    </>
  )
}

export default Login
