import React, { useState,useEffect } from 'react'
import line2 from '../images/Rectangle 3605.png'
import Subscribe from '../component/Subscribe/Subscribe'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function Login() {
  
  const{token,setToken}=useState()

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [errors,setErrors]=useState({email:"",password:""});
    const navigate =useNavigate();


    const validateForm=()=>{
        let formErrors={};
        let isValid=true;
    
   
      if (!email){
        formErrors.email="Email is required"
        isValid=false;
      }else if(!/\S+@\S+\.\S+/.test(email)){
        formErrors.email="Email is not valid";
        isValid=false;
      }
      if (!password){
        formErrors.password="Password is required"
        isValid=false;
      }else if(password.length < 6){
        formErrors.password="Password must be at least 6 characters";
        isValid=false;
      }
      setErrors(formErrors);
      return isValid;
    };
    const handleSubmit=async(e)=>{
      e.preventDefault();
      
    if (!validateForm()) return;

    try {
      const response = await axios.post("http://localhost:8000/api/user/login", {
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userid", response.data.id);
        toast.success("Login Successful!");
      } else {
        toast.error(response.data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error.response || error.message || error);
      toast.error(
        error.response?.data?.message || "Server error. login."
      );
    }
  };

  // ✅ Redirect after login
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

    
  return (
    <>
    <div className='w-[1150px] mx-auto border-t border-gray-600 mt-10'>
        <div className='mt-16 flex  justify-center items-center gap-2'>
                          
                          <h2 className='text-2xl text-bold font-prata'>Login</h2>
                          <img src={line2} alt='line2'/>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6 justify-center items-center mt-20'>
            <div >
              <input placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value)} value={email} className='border border-gray-600 w-72 h-9 pl-4 pt-1 rounded-sm'  />
              {errors.email && (<p className='text-red-500 text-xs mt-1'>{errors.email}</p>)}</div>
            <div><input placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='border border-gray-600 w-72 h-9 pl-4 pt-1 rounded-sm'/>
            {errors.password && (
                <p className='text-red-500 text-xs mt-1'>{errors.password}</p>
              )}
            </div>
          <button
            type='submit'
            className='bg-black text-zinc-50 w-24 h-10 rounded-md mt-5'
          >
            LOGIN
          </button>
        </form>
        <div className='flex justify-center items-center gap-24 mt-[-80px] '>
            <NavLink to={'/forgetpass'} className='text-xs text-gray-600 '>Frogot your password?</NavLink>
            <NavLink to={'/signup'} className='text-xs text-gray-600'>Create account</NavLink>
        </div>
        {/* <div className='flex justify-center items-center mt-5'><button className=' bg-black text-zinc-50 w-24 h-10 rounded-md'>Sign up</button></div> */}
        <div className='mt-96'><Subscribe /></div>
    </div>


    
    </>
  )
}

export default Login
