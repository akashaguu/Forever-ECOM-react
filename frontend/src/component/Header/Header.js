import React from 'react'
import { useState, useEffect, useContext } from 'react'

import navimage from '../../images/Ellipse 658.png'
import searchimg from '../../images/search icon.png'
import profileimg from '../../images/profile-icon.png'
import bagimage from '../../images/Vector.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'  // ✅ import context for cart count

function Header() {
  const homelink = [{
    name: "HOME",
    value: '/'
  }, {
    name: "COLLECTION",
    value: '/collection'
  }, {
    name: "ABOUT",
    value: '/about'
  }, {
    name: "CONTACT",
    value: '/contact'
  }]

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const { cart } = useContext(ShopContext); // ✅ access cart from context

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
    window.addEventListener("storage", checkLoginStatus);
    return () => window.removeEventListener("storage", checkLoginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    setIsLoggedIn(false);
    navigate('/login');
  };

  // ✅ Count total cart items
  const totalItems = Object.values(cart || {}).reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className='flex'>
      <div className='flex '>
        <div className='tracking-wide font-colombo leading-normal text-3xl mt-5 ml-8 '>FOREVER</div>
        <div><img src={navimage} alt='navimage' className='mt-10 ml-1'></img></div>
      </div>
      <div className='flex gap-4 mt-8 ml-[320px]'>
        {
          homelink.map((i) => (
            <NavLink to={i.value}> {i.name}</NavLink>
          ))
        }
      </div>
      <a href='http://localhost:3001'>
        <button className='className="mt-8 mb-1 ml-20 text-sm font-medium border border-gray-400 rounded-lg hover:bg-black hover:text-white transition"'>Admin</button>
      </a>
      <div className='flex ml-28 gap-10 mt-8'>
        <div><img src={searchimg} alt='sreachimg'></img></div>

        {isLoggedIn ? (
          <div className="relative group">
            <img
              src={profileimg}
              alt="profileimg"
              className="cursor-pointer"
            />
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-50">
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => navigate('/order')}
              >
                Orders
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <NavLink to="/signup">
            <img src={profileimg} alt="profileimg" />
          </NavLink>
        )}

        {/* ✅ Cart Icon with count badge */}
        <div className="relative">
          <NavLink to={'/cart'}>
            <img src={bagimage} alt='bagimg'></img>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
