import React, { useEffect } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Header.css";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import UserTooltip from './UserTooltip';
import 'tippy.js/themes/light.css';
import { Link } from 'react-router-dom';


const Header = () => {

  return (
  
    <div className='header'>
     <Link to='/'>
       < img className='logo' src="logob.png" 
        alt="bookverse logo" />
      </Link>
      <div className="menu-icon">
        <MenuIcon/>
      </div>

      <div className="search">
        <input type ="text" placeholder='Search your book'/>
        <SearchIcon/>
      </div>

      <div className="offer">
      <Link to="/offer">Coupon Offers</Link>
      </div>
      {localStorage.getItem("userid")===null?
      <div className="cartlogo"><Link to="/logincart"><ShoppingCartIcon/>
      </Link></div>:
      <div className="cartlogo"><Link to="/cart"><ShoppingCartIcon/>
      </Link></div>
}
     
     { localStorage.getItem('token')===null?
      
      <div className="log-btn">
      <Link to="/login">Login</Link>
    </div> :
    <div className="user">
    <Tippy
     theme="light" 
      content={<UserTooltip/>}
      interactive = {true} 
      offset={[0,15]}>
    <AccountCircleIcon/>
    </Tippy>          
  </div> 
}
</div>
   
  );
};

export default Header;