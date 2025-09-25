import React from 'react'
import line2 from '../../images/Rectangle 3605.png'
import dressimg1 from '../../images/Rectangle 3608.png'
import dressimg2 from '../../images/Rectangle 3609.png'
import dressimg3 from '../../images/Rectangle 3619.png'
import dressimg4 from '../../images/Rectangle 3611.png'
import dressimg5 from '../../images/Rectangle 3635.png'
import dressimg6 from '../../images/Rectangle 3613.png'
import dressimg7 from '../../images/Rectangle 3615.png'
import dressimg8 from '../../images/Rectangle 3634.png'
import dressimg9 from '../../images/Rectangle 3616.png'
import dressimg10 from '../../images/Rectangle 3617.png'

function Collections({title1,title2,limit}) {
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
    coltext:"Round Neck Cotton T-shirt",
    colrate:"$149"
  },{
    colimg:dressimg4,
    coltext:"Round Neck Cotton T-shirt",
    colrate:"$149"
  },{
    colimg:dressimg5,
    coltext:"Round Neck Cotton T-shirt",
    colrate:"$149"
  },{
    colimg:dressimg6,
    coltext:"Round Neck Cotton T-shirt",
    colrate:"$149"
  },{
    colimg:dressimg7,
    coltext:"Round Neck Cotton T-shirt",
    colrate:"$149"
  },{
    colimg:dressimg8,
    coltext:"Round Neck Cotton T-shirt",
    colrate:"$149"
  },{
    colimg:dressimg9,
    coltext:"Round Neck Cotton T-shirt",
    colrate:"$149"
  },{
    colimg:dressimg10,
    coltext:"Round Neck Cotton T-shirt",
    colrate:"$149"
  }
]
const displaycollection=limit?collection.slice(0,limit):collection
  return (
    
    <div>
    <div className='mt-16 flex justify-center items-center gap-2'>
        <h2 className='text-gray-600 font-medium text-xl'>{title1}</h2>
        <h2 className='text-xl'>{title2}</h2>
        <img src={line2} alt='line2'  />
    </div>
    <div><h2 className='text-center font-medium- text-sm text-gray-600'>Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</h2></div>
    <div className='flex'>
      <div className='grid grid-cols-5 ml-[100px] mt-4 gap-[20px]'>
        
        {
          displaycollection.map((i)=>(
            <div>
            <div className=''><img src={i.colimg} alt='collect'/></div>
            <div>
              <h2 className='text-xs mt-3'>{i.coltext}</h2>
              <h2>{i.colrate}</h2>
            </div>
            </div>
          ))
        }
        {/* <div className=''><img src={dressimg1}/></div>
        <div><h2 className='text-xs mt-3'>Women Round Neck Cotton Top</h2></div>
        <div><h2>$149</h2></div> */}
        
      </div>
    </div>
    </div>
  )
}

export default Collections