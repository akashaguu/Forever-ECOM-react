import React from 'react'
import logo from '../../images/logo.png'
import navimage from '../../images/Ellipse 658.png'

function AdminPage() {
  
  return (
    <div>
      
      <div className='flex ml-24'>
      <div className='border-r-2 border-gray-300 h-screen'>
        <div className='flex flex-col justify-center items-center mr-28 mt-10 gap-6'>
          <div className='flex border border-gray-500 h-8 w-40 items-center justify-center hover:bg-gray-300 '><button>Add items</button></div>
          <div className='flex border border-gray-500 h-8 w-40 items-center justify-center hover:bg-gray-300'><button> List</button></div>
          <div className='flex border border-gray-500 h-8 w-40 items-center justify-center  hover:bg-gray-300'><button>Orders</button></div>
        </div>
      </div>
        
      </div>
    </div> 
  )
}

export default AdminPage
