import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='flex ml-24'>
      <div className='border-r-2 border-gray-300 h-screen'>
        <div className='flex flex-col justify-center items-center mr-28 mt-10 gap-6'>
          <NavLink
          to='/addproduct'
          className={({ isActive }) =>
            `flex border border-gray-500 h-8 w-40 items-center justify-center hover:bg-gray-300 ${
              isActive ? 'bg-gray-200 font-semibold' : ''
            }`
          }
        >
          Add items
        </NavLink>
          <NavLink
          to='/listproduct'
          className={({ isActive }) =>
            `flex border border-gray-500 h-8 w-40 items-center justify-center hover:bg-gray-300 ${
              isActive ? 'bg-gray-200 font-semibold' : ''
            }`
          }
        >
          Lists
        </NavLink>
          <NavLink
          to='/listorder'
          className={({ isActive }) =>
            `flex border border-gray-500 h-8 w-40 items-center justify-center hover:bg-gray-300 ${
              isActive ? 'bg-gray-200 font-semibold' : ''
            }`
          }
        >
          Orders
        </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
