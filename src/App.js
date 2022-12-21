import './App.css';
import Login from "./components/Auth/Login";
import Register from"./components/Auth/Register";
import {Route, Routes} from "react-router-dom";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ProductList from './components/ProductDisplay/ProductList';
import Home from './components/HomePage/Home';
import DiscountPage from './components/DiscountPage';


function App() 
{
  return( 
      <div>     
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/productlist" element= {<ProductList/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/> }/>
        <Route path="/forgot" element={<ForgotPassword/> } />
        <Route path="/discount" element={<DiscountPage/>} />
      </Routes>
    </div> 
  );
}
export default App;
