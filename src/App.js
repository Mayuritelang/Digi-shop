import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Component/Navbar/Navbar';
import { Shop } from './Pages/Shop';
import { About } from './Pages/About';
import { ShopCategory } from './Pages/ShopCategory';
import { Products } from './Pages/Products';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Component/Footer/Footer';
import men_banner from './Component/Assets/Assets/banner_mens.png';
import women_banner from './Component/Assets/Assets/banner_women.png';
import kid_banner from './Component/Assets/Assets/banner_kids.png';
 
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
        <Route path='/kids' element={<ShopCategory banner={kid_banner}  category="kid"/>}></Route>
        <Route path='/product' element={<Products/>}>
         <Route path=':productId' element={<Products/>}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignup/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
