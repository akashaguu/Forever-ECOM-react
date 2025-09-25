import React from 'react'
import line2 from '../../images/Rectangle 3605.png'
import dressimg1 from '../../images/Rectangle 3608.png'
import dressimg2 from '../../images/Rectangle 3626.png'
import dressimg3 from '../../images/Rectangle 3627.png'
import dressimg4 from '../../images/Rectangle 3611.png'
import dressimg5 from '../../images/Rectangle 3635.png'


function Seller() {
    const collection=[{
        colimg:dressimg1,
        coltext:"Round Neck Cotton Top",
        colrate:"$149"
      },{
        colimg:dressimg2,
        coltext:"Round Neck Cotton Top",
        colrate:"$149"
      },{
        colimg:dressimg3,
        coltext:"Round Neck Cotton Top",
        colrate:"$149"
      },{
        colimg:dressimg4,
        coltext:"Round Neck Cotton Top",
        colrate:"$149"
      },{
        colimg:dressimg5,
        coltext:"Round Neck Cotton Top",
        colrate:"$149"
      }]
  return (
    <div>
        <div className='mt-16 flex justify-center items-center gap-2'>
            <h2 className='text-gray-600 font-medium text-xl'>BEST</h2>
            <h2 className='text-xl'>SELLER</h2>
            <img src={line2} alt='line2'/>
        </div>
        <div>
            <h2 className='text-center font-medium- text-sm text-gray-600'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
            </h2>
        </div>
        <div className='flex'>
        <div className='grid grid-cols-5 ml-[100px] mt-4 gap-[20px]'>
        
        {
          collection.map((i)=>(
            <div>
            <div className=''><img src={i.colimg} alt='seller'/></div>
            <div>
              <h2 className='text-xs mt-3'>{i.coltext}</h2>
              <h2>{i.colrate}</h2>
            </div>
            </div>
          ))
        }
        </div>
        </div>
    </div>
  )
}

export default Seller
