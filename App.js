import './App.css';
import Nav from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/Shopcategory';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>

      <Nav/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="mens"/>}/>
        <Route path='/womens' element={<ShopCategory category="womens"/>}/>
        <Route path="/product" element={<product/>}>
        <Route path=':productId' element={<product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>



      </BrowserRouter>
    </div>
  );
}

export default App;
