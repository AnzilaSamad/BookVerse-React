import './App.css';
import Login from "./components/Auth/Login";
import Register from"./components/Auth/Register";
import {Route, Routes} from "react-router-dom";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ProductList from './components/ProductDisplay/ProductList';
import Home from './components/HomePage/Home';
import DiscountPage from './components/DiscountPage';
import ProductDetails from './components/ProductDisplay/ProductDetails';
import Header from './components/Header/Header';
import EmptyCart from './components/Cart/EmptyCart';
import Cart from './components/Cart/Cart';
import LoginCart from './components/Cart/LoginCart';
import Token from './components/SalesforceToken/Token';
import Shipping from './components/ShippingAddress/Shipping';




function App() 
{
  
  return( 
      <div>   
   
        <Header/> 
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/productdetails" element= {<ProductDetails/>} />
        <Route path="/productlist" element= {<ProductList/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/> }/>
        <Route path="/forgot" element={<ForgotPassword/> } />
        <Route path="/discount" element={<DiscountPage/>} />
        <Route path='/emptycart' element={<EmptyCart/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/logincart' element={<LoginCart/>} />
        <Route path='/shipping' element={<Shipping/>} />
      </Routes>
    </div> 
 
  );
}
export default App;
