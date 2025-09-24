import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './component/Footer/Footer';
import Wholecollection from './Pages/Wholecollection';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Login from './Pages/Login';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/collection' element={<Wholecollection />}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='/contact' element={<ContactUs/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    
    </Routes>
    <Footer />
    </BrowserRouter>
    
    
    
    
    </>
  );
}

export default App;
