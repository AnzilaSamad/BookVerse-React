import axios from "axios";
import {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./productDetails.css"
import { Link, useSearchParams } from "react-router-dom";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { token } from "../../Constants";

function ProductDetails() 
{
    const {Id} = useParams();
    const [product,setProduct]=useState([]);
    const [searchParams] = useSearchParams();
    const navigate=useNavigate();   
    
    const  handleApi = () => {
            const config = {
                headers: {'Authorization' : `Bearer ${token}`}
            };
            axios.get(`https://team3-step-dev-ed.develop.my.salesforce.com/services/apexrest/BookRecord?Id=`+searchParams.get("id"), config)
           
            .then ((Response) =>
            {
                console.log(`https://team3-step-dev-ed.develop.my.salesforce.com/services/apexrest/BookRecord?Id=`+searchParams.get("id"))
                setProduct(Response.data);
                console.log(Response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }

        useEffect( () => {
            handleApi();
           
            
        },[Id]);
       
        const  addToCart = () => {
            if(localStorage.getItem("userid")===null)
            {
               navigate('/login'); 
            }
            else if(localStorage.getItem("userid")!==null)
{




            var postData =
             {
                Cartitems: [ 
                    {
                    BookId__c: product[0].Id,
                    User_ID__c:localStorage.getItem("userid"),
                    Quantity__c:1,
                    Images__c:product[0].display_images[0].Id
                    }]                                                                               
              };
              console.log(postData)
              let axiosConfig = {
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
              };
              axios.post("https://team3-step-dev-ed.develop.my.salesforce.com/services/apexrest/cartitemdetails",postData,axiosConfig)              
              .then((Response) => {
                 console.log(Response)

                 
              })
              .catch((err) => {
                console.log(err)
              })
            }
        }
         return(                        
                    product.map(items => {                   
                        return(
                            <div>                                                       
                            <div className = "Product_key" key={items.Id}>
                                     
                                 <h2  className="Detail_name">{items.Name} </h2>
                                 <h3  className="Detail_authorname">Author : <b className="author_bold">{items.Authorname} </b></h3>
                                 <div className="BookDetailContainer">
                                 <div className="ImageDivClass">                               
                                 <img  className="Image_detail" src ={items.display_images[0].image_url} alt={items.Name}></img>
                                 </div>
                                 <div className="second-div">
                                 <p  className="Detail_genre" > Genre <span className="adjustg">: {items.Genre}</span></p>
                                 { 
                                 items.DiscountedPrice !== items.Price ? 
                                 <p  className="Detail_price" >Price : <span className="no_price">
                                 <span className="price_color">₹{items.Price}</span></span>
                                 <span className="pricebolddp"> ₹{items.DiscountedPrice}</span>
                                 </p> :
                                 <p> Price <span  className="pricebold"> : ₹{items.Price}</span> </p>
                                 }
                                 {
                                 items.Availability === "In Stock" ? 
                                 <div>
                                 <p className="Detail_availability">Availability:<span className="color">{items.Availability}  </span>
                                 <span className="tickicon"><CheckCircleIcon/> </span>
                                 </p>
                                 <p><button type="submit"className="button_design" id="AddToCartButtonBookStock"  onClick={() =>addToCart(items)}>                        
                                     Add to cart</button></p>
                                 <p><button className="button_design">Buy Now</button></p>
                                 </div>  :
                                 <p className="Detail_availability"> Availability:<span className="colorred">{items.Availability} </span>
                                 <span className="crossicon"><CancelOutlinedIcon/></span> 
                                 </p>
                                 }
                           
                              
                                 </div>
                                 </div>
                                 <p  className="Detail_Binding">Binding<span className="adjustb">: {items.Binding}</span> </p>
                                 <p  className="Detail_date" >Release Date <span className="adjustr"> :{items.ReleaseDate} </span> </p>
                                 <p  className="Detail_publisher" >Publisher <span className="adjustp"> : {items.Publisher} </span>  </p>
                                 <p  className="Detail_Language">Language <span className="adjustl">: {items.Languages}</span> </p>
                                 <p  className="Detail_isbn">ISBN <span className="adjusti">:  {items.ISBN}</span> </p>
                                 <div className="Summary">
                                 <p  className="Detail_Summary"><h2><u>Summary </u></h2><span className="summary_span">{items.Summary}</span> </p>                         
                                 </div>                            
                             </div>                            
                             </div>
                             
                         )
                     })
                     
                     
         )
}


export default ProductDetails;