import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Header.css";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import UserTooltip from './UserTooltip';
import 'tippy.js/themes/light.css';

const Header = () => {
  return (
    <div className='header'>
     <a href='/'>
       < img className='logo' src="logob.png" 
        alt="bookverse logo" />
      </a>
      <div className="menu-icon">
        <MenuIcon/>
      </div>

      <div className="search">
        <input type ="text" placeholder='Search your book'/>
        <SearchIcon/>
      </div>

      <div className="offer">
      <a href="/offer">Coupon Offers</a>
      </div>
      {localStorage.getItem("userid")===null?
      <div className="cartlogo"><a href="/logincart"><ShoppingCartIcon/>
      </a></div>:
      <div className="cartlogo"><a href="/cart"><ShoppingCartIcon/>
      </a></div>
}
     
     { localStorage.getItem('token')===null?
      
      <div className="log-btn">
      <a href="/login">Login</a>
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