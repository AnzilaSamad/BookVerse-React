import React from 'react'
import { Link } from 'react-router-dom'
import './LoginCart.css'


function EmptyCart()
{

  return (
    <div className='cart_align'>
     <div className='box' ><h1>Shopping Cart</h1></div>
   <img className='imagesize' src='https://cdn0.iconfinder.com/data/icons/travel-line-icons-vol-1/48/019-512.png'alt='cart'></img>
   <p className='empty_message' > There are currently no items in the cart</p>
    <button className='cart_continue'>
    <Link to="/">
    <span className='cart_color'>  Continue Shopping </span>
    </Link>
  
    </button>
    <br/>
    <div>
   <u><Link to='/login' className='signin'> SignIn</Link> </u><b  className='signin'>/</b> <u><Link to ='/register'className='signin'>SignUp</Link></u>
   </div>
    </div>
    
  )
}

export default EmptyCart