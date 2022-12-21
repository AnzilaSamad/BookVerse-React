import axios from "axios";
import React, { useEffect, useState } from "react";
import './ProductList.css';
import { homepage_bookdisplay_url } from "../../Constants";
function ProductList()
{
    const books=[];
    const [state,setState]=useState(books);
    const  handleApi = () => {
                const config = {
                    headers: {"Authorization" : `Bearer 00DDo000000JB9H!ARkAQCTppB.XjvQKryyuFRftVZMTBsr.AGdQ0Ir05GWqs.mwzfMgx39mDXhpzNURu9gjbBYVlTQbkeK51I0cpHcoT9bF1Cvc`}
                };
                axios.get(homepage_bookdisplay_url, config)
                .then ((Response) =>
                {
                    setState(Response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
            };

    useEffect( () => {
        handleApi();
    },[]);

      return(
            <div className="products">
                {
                    state.map(items => {
                        return(
                            <div className="key" key={items.Id}>
                              <div className="image">
                               <img  src ={items.display_images[0].image_url} alt="" className="ImageClass"></img>
                                </div>
                                <p className="bookname"><b>{items.Name} </b></p>
                                <p className="authorname"><b>Author Name : {items.Authorname} </b></p>
                                <p className="authorname"><b>Price : ₹{items.Price} </b> </p>
                            </div>
                        )
                    })
                }
            </div>
        )
}
export default ProductList;
