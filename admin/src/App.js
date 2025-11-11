import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import AdminLogin from './component/AdminLogin';
import Home from './pages/Home';
import AddItems from './pages/Additems';
import List from './pages/List';
import Orderss from './pages/Orderss'




function App() {
  // const [token]=useState(localStorage.getItem("adminToken")?localStorage.getItem("adminToken"):"");

  // useEffect(()=>{
  //   localStorage.setItem("adminToken",token);
  // },[token]);
  
  return (
    <div>
    
      <BrowserRouter>

    
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path='/login' element={<AdminLogin/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/addproduct' element={<AddItems/>}/>
        <Route path='/listproduct' element={<List/>}/>
        <Route path='/listorder' element={<Orderss/>}/>

      </Routes>
      
      

      </BrowserRouter>
    </div>


  );
}

export default App;