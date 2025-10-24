import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import AdminLogin from './component/AdminLogin';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Additems from './pages/Additems';

function App() {
  const [token, setToken] = useState(localStorage.getItem('admintoken') || '');

  return (
    <BrowserRouter>
      <ToastContainer />

      {!token ? (
        // Login page
        <Routes>
          <Route path="*" element={<AdminLogin setToken={setToken} />} />
        </Routes>
      ) : (
        // Logged-in layout: Header top, Sidebar + content below
        <div className="flex flex-col h-screen">
          {/* Header at top */}
          <Header />

          {/* Below header: sidebar + main content */}
          <div className="flex flex-1 overflow-hidden">
            <Sidebar className="w-64" />
            <div className="flex-1 p-6 bg-gray-50 overflow-auto">
              <Routes>
                {/* Default blank page */}
                <Route path="/" element={<div></div>} />
                {/* Additems page */}
                <Route path="/additems" element={<Additems />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
