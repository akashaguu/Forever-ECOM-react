import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Additems from './Additems'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'

function Home() {
  return (
    <div>
    <Header />
    <div className='flex'>
      <Sidebar/>
      <Routes>
        <Route path='/additems' element={<Additems/>}></Route>
      </Routes>
      </div>
    </div>
  )
}

export default Home
