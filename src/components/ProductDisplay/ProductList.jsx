import axios from "axios";
import React, { useEffect, useState } from "react";
import './ProductList.css';
import { homepage_bookdisplay_url, token } from "../../Constants";
function ProductList()
{
    const [state,setState]=useState([]);
    const  handleApi = () => {
                const config = {
                    headers: {'Authorization' : `Bearer ${token}`}
                };
                axios.get(homepage_bookdisplay_url, config)
                .then ((Response) =>
                {
                    setState(Response.data);
                    console.log(Response.data);
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
                                <a href={"/productdetails?id=" + items.Id}>
                               <img  src ={items.display_images[0].image_url} alt="" className="ImageClass"></img>
                                </a>
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
