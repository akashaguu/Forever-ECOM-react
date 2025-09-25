import React from 'react'
import line2 from '../images/Rectangle 3605.png'
import aboutimg from '.././images/about_img.png'
import Subscribe from '../component/Subscribe/Subscribe'

function AboutUs() {
  return (
    <div  className='w-[1150px] mx-auto border-t border-gray-600 mt-10'>
      <div className='mt-16 flex  justify-center items-center gap-2'>
            <h2 className='text-gray-600 font-normal text-xl'>ABOUT</h2>
            <h2 className='text-xl text-bold'>US</h2>
            <img src={line2} alt='line2'/>
        </div>
      <div className='flex'>
            <div><img src={aboutimg}  className='w-[450px] ml-20 mt-20'/></div>
            <div >
                <h2 className='w-[540px] text-sm mt-40 text-gray-700 ml-20 text-left'>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</h2>
                <h2 className='w-[540px] text-sm mt-8 ml-20 text-gray-700 text-left'>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</h2>
                <h2 className='text-lg font-bold text-slate-600 ml-20 mt-10 text-left'> Our Mission</h2>
                <h2 className='w-[540px] text-sm mt-10 ml-20 text-gray-700 text-left'>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</h2>
            </div>
      </div>
      
        <div className='mt-14 flex items-center ml-20 gap-2'>
            <h2 className='text-gray-500 font-medium text-xl'>WHY</h2>
            <h2 className='text-xl text-bold'>CHOOSE US</h2>
            <img src={line2} alt='line2'/>
        </div>
        <div className='flex ml-24 mt-16'>
          <div className='border border-gray-400 h-60 w-[22rem]  flex flex-col justify-start text-center '>
              <div><h2 className=' mt-8 text-lg font-medium'>Quality Assurance:</h2></div>
              <div><h2 className='w-72 mt-7 ml-10 font-light '>We meticulously select and vet each product to ensure it meets our stringent quality standards.</h2></div>
          </div>
          <div className='border border-gray-400 h-60 w-[22rem] flex flex-col justify-start text-center '>
              <div><h2 className='mt-8 text-lg font-medium'>Convenience: </h2></div>
              <div><h2 className='w-72 mt-7 ml-10 font-light'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</h2></div>
          </div>
          <div className='border border-gray-400 h-60 w-[22rem] flex flex-col justify-start text-center '>
              <div><h2 className=' mt-8 text-lg font-medium'>Exceptional Customer Service: </h2></div>
              <div><h2 className='w-72 mt-7 ml-10 font-light'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</h2></div>
          </div>
        </div>
        <div className='mb-52 mt-40'>
          <Subscribe />
        </div>
    </div>
  )
}

export default AboutUs
