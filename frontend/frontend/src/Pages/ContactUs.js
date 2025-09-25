import React from 'react'
import line2 from '../images/Rectangle 3605.png'
import contactimg from '../images/contact_img.png'
import Subscribe from '../component/Subscribe/Subscribe'

function ContactUs() {
  return (
    <div className='w-[1150px] mx-auto border-t border-gray-600 mt-10'>
        <div className='mt-16 flex  justify-center items-center gap-2'>
                    <h2 className='text-gray-600 font-normal text-xl'>CONTACT</h2>
                    <h2 className='text-xl text-bold'>US</h2>
                    <img src={line2} alt='line2'/>
        </div>
        <div className='flex justify-center mt-20'>
            <div className='w-96 mr-20'><img src={contactimg}/></div>
            <div>
                <div className='font-semibold text-gray-700 mt-8'><h2>OUR STORE</h2></div>
                <div className='mt-5 text-sm font-light'>
                    <h2>54709 Willms Station </h2>
                    <h2>Suite 350, Washington, USA</h2>
                </div>
                <div className='mt-5 text-sm font-light'><h2>Tel: (415) 555‑0132</h2></div>
                <div className='mt-1 text-sm font-light'><h2>Email: greatstackdev@gmail.com</h2></div>
                <div className='mt-8 font-semibold text-gray-700 uppercase'><h2>Careers at Forever</h2></div>
                <div className='mt-3 text-sm font-light'><h2>Learn more about our teams and job openings.</h2></div>
                <div className='mt-3 border border-gray-600 w-28 h-12 flex items-center justify-center text-sm'><button>Explore Jobs</button></div>

            </div>
        </div>
        <div className='mt-36 mb-96'>
            <Subscribe/>
        </div>
    </div>
  )
}
 
export default ContactUs
