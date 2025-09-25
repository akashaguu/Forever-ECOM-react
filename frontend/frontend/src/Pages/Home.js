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
    <Collections/>
    <Seller/>
    <Policy/>
    <Subscribe/>
    </div>
  )
}

export default Home
