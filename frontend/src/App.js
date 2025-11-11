
import './App.css';
import Header from './component/Header/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
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
import { ShopProvider } from './component/Context/ShopContext';
import Delivery from './Pages/Delivery';
import Order from './Pages/Order'


function App() {
  return(
    <ShopProvider>
    <BrowserRouter>
    <ToastContainer />
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/collection' element={<Wholecollection />}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='/contact' element={<ContactUs/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/products/:id' element={<Product/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/forgetpass' element={<ForgetPassword/>}></Route>
      <Route path='/delivery' element={<Delivery/>}></Route>
      <Route path='/order' element={<Order/>}></Route>
      

    
    </Routes>
    <Footer />
    </BrowserRouter>
    </ShopProvider>
  )
}

export default App;
