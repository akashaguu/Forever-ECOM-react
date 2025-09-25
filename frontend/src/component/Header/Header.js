import React from 'react'
import navimage from '../../images/Ellipse 658.png'
import searchimg from '../../images/search icon.png'
import profileimg from '../../images/profile-icon.png'
import bagimage from '../../images/Vector.png'
import { NavLink } from 'react-router-dom'
import Login from '../../Pages/Login'

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
      <div className='flex ml-[250px] gap-10 mt-8'>
        
        <div><img src={searchimg} alt='sreachimg'></img></div>
        <NavLink to={'/login'}><img src={profileimg} alt='profileimg' ></img></NavLink>
        <NavLink to={'/cart'}><img src={bagimage} alt='bagimg' ></img></NavLink>
      </div>
   </div>
   
   
  )
}

export default Header
