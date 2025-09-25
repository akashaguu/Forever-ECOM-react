import React from 'react'
import exchangeimg from '../../images/exchange_icon.png'
import qualityimg from '../../images/quality_icon.png'
import supportimg from '../../images/support_img.png'

function Policy() {
    const pollink=[{
        polimg:exchangeimg,
        polhead:"Easy Exchange Policy",
        poltext:"We offer hassle free exchange policy"
    },{
        polimg:qualityimg,
        polhead:"7 Days Return Policy",
        poltext:"We provide 7 days free return policy"
    },{
        polimg:supportimg,
        polhead:"Best Customer Support",
        poltext:"We provide 24/7 customer support"
    }]
  return (
    <div className='flex justify-center gap-[100px] mt-[100px]'>

        {
            pollink.map((i)=>(
                <div className='flex flex-col items-center'>
                    <div><img src={i.polimg} alt='policy'/></div>
                    <div><h2 className='font-semibold'>{i.polhead}</h2></div>
                    <div><h2 className='font-normal text-sm text-gray-600'>{i.poltext}</h2></div>
                </div>
            ))
        }
    
      {/* <div className='flex flex-col items-center'>
        <div><img src={exchangeimg}/></div>
        <div><h2 className='font-semibold'>Easy Exchange Policy</h2></div>
        <div><h2 className='font-normal text-sm text-gray-600'>We offer hassle free exchange policy</h2></div>
      </div> */}
      {/* <div className='flex flex-col items-center'>
        <div><img src={qualityimg}/></div>
        <div><h2 className='font-semibold'>7 Days Return Policy</h2></div>
        <div><h2 className='font-normal text-sm text-gray-600'>We offer hassle free exchange policy</h2></div>
      </div>
      <div className='flex flex-col items-center'>
        <div><img src={supportimg}/></div>
        <div><h2 className='font-semibold'>Best Customer Support</h2></div>
        <div><h2 className='font-normal text-sm text-gray-700'>We offer hassle free exchange policy</h2></div>
      </div> */}
    </div>
  )
}

export default Policy