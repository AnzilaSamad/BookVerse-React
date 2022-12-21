import axios from "axios";
import React, { useEffect, useState } from "react";
import { fiftypercentoff_url, homepage_bookdisplay_url, sixtypercentoff_url, twentyfivepercentoff_url } from "../../Constants";
import './ProductList.css'
function Discount()
{
    const books=[];
    const [state50,setState50]=useState(books);
    const [state25,setState25]=useState(books);
    const [state60,setState60]=useState(books);
    const config = {
        headers: {"Authorization" : `Bearer 00DDo000000JB9H!ARkAQCTppB.XjvQKryyuFRftVZMTBsr.AGdQ0Ir05GWqs.mwzfMgx39mDXhpzNURu9gjbBYVlTQbkeK51I0cpHcoT9bF1Cvc`}
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
                axios.get(sixtypercentoff_url,config)
                .then ((Response) =>
                {
                    setState60(Response.data);
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
                <h1 className="h1">25% Offers</h1>
                <div className="mapitems">
                 {
                    state25.map(items => {
                        return(
                            <div className="key" key={items.BookId__c}>
                              <div className="image">
                               <img  src ={items.Images__r.records[0].ImageURL__c} alt="" className="ImageClass"></img>
                              </div>
                                <p className="bookname"><b>{items.Name} </b></p>
                                <p className="authorname"><b>Author Name : {items.AuthorID__r.Name} </b></p>
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
                            <div className="key" key={items.BookId__c}>
                              <div className="image">
                               <img  src ={items.Images__r.records[0].ImageURL__c} alt="" className="ImageClass"></img>
                                </div>
                                <p className="bookname"><b>{items.Name} </b></p>
                                <p className="authorname"><b>Author Name : {items.AuthorID__r.Name} </b></p>
                                
                            </div>
                        )
                    })
                }
                </div>
                
                <br/>

                <h1 className="h1">60% Offers</h1>
                <div className="mapitems">
            { 
                    state60.map(items => {
                        return(
                            <div className="key" key={items.BookId__c}>
                              <div className="image">
                               <img  src ={items.Images__r.records[0].ImageURL__c} alt="" className="ImageClass"></img>
                                </div>
                                <p className="bookname"><b>{items.Name} </b></p>
                                <p className="authorname"><b>Author Name : {items.AuthorID__r.Name} </b></p>
                                
                            </div>
                        )
                    })
                }
                </div>
             </div>
        )
}
export default Discount;
