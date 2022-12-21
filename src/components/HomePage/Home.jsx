import React from 'react'
import { useLocation } from 'react-router'
import Header from '../Header/Header'
import ProductList from '../ProductDisplay/ProductList';
import Carousel from './Carousel'


export default function Home(){
  const location = useLocation();
 console.log(location) ; 
  return (
    <div>
      <Header/>
      <Carousel/>
      <br/>
      <h2>BEST SELLERS</h2>
      <div className='homeproduct'>
        <ProductList/>
      </div>
     
    </div>
  )
}