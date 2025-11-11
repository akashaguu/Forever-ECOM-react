import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const formErrors = {};
    let isValid = true;
    if (!email) { formErrors.email = 'Email required'; isValid = false; }
    else if (!/\S+@\S+\.\S+/.test(email)) { formErrors.email = 'Invalid email'; isValid = false; }
    if (!password) { formErrors.password = 'Password required'; isValid = false; }
    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success('Logging in...');
    if (!validateForm()) return;
    

    try {
      const res = await axios.post('http://localhost:8000/api/user/adminlog', { email, password });
      if (res.data.message==="Admin successful") {
        localStorage.setItem('admintoken', res.data.token);

        // set the token in parent component
        toast.success('Login Successful!');
        navigate('/home'); // redirect to blank dashboard page
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error('Login failed');
    }
  };

  return (
    
    <div  className="w-[400px] mx-auto mt-20">
      <h2 className="text-2xl font-prata mb-6 ml-32">Admin Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

        <input
          type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

        <button onClick={handleSubmit} className="bg-black text-white py-2 w-[150px] ml-[120px] rounded hover:bg-gray-800">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
