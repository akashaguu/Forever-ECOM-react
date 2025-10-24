import React from 'react'
import { useState,useEffect } from 'react'

import navimage from '../../images/Ellipse 658.png'
import searchimg from '../../images/search icon.png'
import profileimg from '../../images/profile-icon.png'
import bagimage from '../../images/Vector.png'
import { NavLink,useNavigate } from 'react-router-dom'


function Header() {
  const homelink=[{
    name:"HOME",
    value:'/'
    
  },{
    name:"COLLECTION",
    value:'/collection'
  },{
    name:"ABOUT",
    value:'/about'
  },{
    name:"CONTACT",
    value:'/contact'
  }]
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Check token on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    setIsLoggedIn(false);
    navigate('/login'); // redirect to login page
  };


  return (
    
    <div className='flex'>
      <div className='flex '>
        <div className='tracking-wide font-colombo leading-normal text-3xl mt-5 ml-8 '>FOREVER</div> 
        <div><img src={navimage} alt='navimage' className='mt-10 ml-1' ></img></div>
      </div>
      <div className='flex gap-4 mt-8 ml-[320px]'>
        {
          homelink.map((i)=>(
            <NavLink to={i.value}> {i.name}</NavLink>
          ))
        }
        {/* <div>HOME</div>
        <div>COLLECTION</div>
        <div>ABOUT</div>
        <div>CONTACT</div> */}
      </div>
      <a href='http://localhost:3001'>
      <button className='className="mt-8 mb-1 ml-20 text-sm font-medium border border-gray-400 rounded-lg hover:bg-black hover:text-white transition">'>Admin</button>

      </a>
      <div className='flex ml-28 gap-10 mt-8'>
        
        <div><img src={searchimg} alt='sreachimg'></img></div>
        {isLoggedIn ? (
  <div className='relative group'>
    <img src={profileimg} alt='profileimg' className='cursor-pointer' />
    {/* Dropdown on hover */}
    <div className='absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg hidden group-hover:block'>
      <button
        className='block w-full text-left px-4 py-2 hover:bg-gray-100'
        onClick={() => navigate('/orders')}
      >
        Orders
      </button>
      <button
        className='block w-full text-left px-4 py-2 hover:bg-gray-100'
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  </div>
) : (
  <NavLink to={'/signup'}>
    <img src={profileimg} alt='profileimg' />
  </NavLink>
)}

        <NavLink to={'/cart'}><img src={bagimage} alt='bagimg' ></img></NavLink>
      </div>
   </div>
   
   
  )
}

export default Header
