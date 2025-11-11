import React from 'react'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
  

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("admintoken")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
    <Header/>
    <Sidebar/>
    
    
    </>
  )
}

export default Home