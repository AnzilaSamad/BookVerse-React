import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fiftypercentoff_url, tenpercentoff_url, token, twentyfivepercentoff_url } from "../../Constants";
import './ProductList.css'
function Discount()
{
    const books=[];
    const [state50,setState50]=useState(books);
    const [state25,setState25]=useState(books);
    const [state10,setState10]=useState(books);
    const config = {
        headers: {"Authorization" : `Bearer ${token}`}
    };
    const  handleApi = () => {
                
                axios.get(fiftypercentoff_url,config)
                .then ((Response) =>
                {
                    setState50(Response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
                axios.get(twentyfivepercentoff_url,config)
                .then ((Response) =>
                {
                    setState25(Response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
                axios.get(tenpercentoff_url,config)
                .then ((Response) =>
                {
                    setState10(Response.data);
                })
                .catch((error) => {
                    console.log(error);
                });             
            };

    useEffect( () => {
        handleApi();
    },[]);

      return(
         
            <div className="discountproducts">
                  <h1 className="h1">10% Offers</h1>
                <div className="mapitems">
            { 
                    state10.map(items => {
                        return(
                            <div className="key" key={items.Id}>
                                 <Link to={"/productdetails?id=" + items.Id}>
                                <div className="image">
                               <img  src ={items.display_images[0].image_url} alt="" className="ImageClass"></img>
                              </div>
                              </Link>
                                <p className="bookname"><b>{items.Name} </b></p>
                                <p className="authorname"><b>Author Name : {items.Authorname} </b></p>
                                <p className="authorname"><b>Discounted Price : {items.DiscountedPrice} </b></p>
                            </div>
                        )
                    })
                }
                </div>
                <br/>
                <h1 className="h1">25% Offers</h1>
                <div className="mapitems">
                 {
                    state25.map(items => {
                        return(
                            <div className="key" key={items.Id}>
                                 <Link to={"/productdetails?id=" + items.Id}>
                              <div className="image">
                               <img  src ={items.display_images[0].image_url} alt="" className="ImageClass"></img>
                              </div></Link>
                                <p className="bookname"><b>{items.Name} </b></p>
                                <p className="authorname"><b>Author Name : {items.Authorname} </b></p>
                                <p className="authorname"><b>Discounted Price : {items.DiscountedPrice} </b></p>
                            </div>
                        )
                    })
                    
                }
                </div>
               <br/>
                <h1 className="h1"> 50 % Offers</h1>
                <div className="mapitems">
            { 
                    state50.map(items => {
                        return(
                            <div className="key" key={items.Id}>
                             <Link to={"/productdetails?id=" + items.Id}>
                            <div className="image">
                             <img  src ={items.display_images[0].image_url} alt="" className="ImageClass"></img>
                            </div>
                            </Link>
                              <p className="bookname"><b>{items.Name} </b></p>
                              <p className="authorname"><b>Author Name : {items.Authorname} </b></p>
                              <p className="authorname"><b>Discounted Price : {items.DiscountedPrice} </b></p>
                          </div>
                        )
                    })
                }
                </div>                     
             </div>
        )
}
export default Discount;
