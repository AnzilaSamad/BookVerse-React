import React from 'react'
import { Link } from 'react-router-dom'
import './EmptyCart.css'


function EmptyCart()
{

  return (
    <div className='cart_align'>
     <div className='box' ><h1> Empty Shopping Cart</h1></div>
   <img className='imagesize' src='https://cdn0.iconfinder.com/data/icons/travel-line-icons-vol-1/48/019-512.png'alt='cart'></img>
   <p className='empty_message' > There are currently no items in the cart</p>
    <button className='cart_continue'>
    <Link to="/">
    <span className='cart_color'>  Continue Shopping </span>
    </Link>
  
    </button>
    <br/>
    <button className='cart_continue'>
    <Link to='/'>
    <span className='cart_color'>   Login  </span>
    </Link>
    </button>
    </div>
    
  )
}

export default EmptyCart