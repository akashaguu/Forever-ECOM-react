import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import {BrowserRouter,Routes,Route, useLocation} from 'react-router-dom'
import Footer from './component/Footer/Footer';
import Wholecollection from './Pages/Wholecollection';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Login from './Pages/Login';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import SignUp from './Pages/SignUp';
import ForgetPassword from './Pages/ForgetPassword';
import { ToastContainer } from 'react-toastify';



function App() {
  return(
    <BrowserRouter>
    <ToastContainer />
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/collection' element={<Wholecollection />}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='/contact' element={<ContactUs/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/products' element={<Product/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/forgetpass' element={<ForgetPassword/>}></Route>
      

    
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App;
