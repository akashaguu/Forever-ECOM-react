import React from 'react'
import Banner from '../component/Banner/Banner'
import Collections from '../component/Collection/Collections'
import Seller from '../component/Seller/Seller'
import Policy from '../component/Policy/Policy'
import Subscribe from '../component/Subscribe/Subscribe'

function Home() {
  return (
    <div>
    <Banner />
    <Collections title1='LATEST' title2='COLLECTIONS' limit={10}/>
    <Collections title1='BEST' title2='SELLER' limit={5}/>
    {/* <Seller/> */}
    <Policy/>
    <Subscribe/>
    </div>
  )
}

export default Home
