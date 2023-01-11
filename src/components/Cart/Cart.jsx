import axios from "axios";
import { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { useParams } from "react-router";
import { token } from "../../Constants";
import RemoveIcon from '@mui/icons-material/Remove';
import './Cart.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
function Cart()
{
    const {Id} =useParams();
    const [state,setState]=useState([]);
  
    const  handleApi = () => {
                const config = {
                    headers: {'Authorization' : `Bearer ${token}`}
                };
                axios.get(`https://team3-step-dev-ed.develop.my.salesforce.com/services/apexrest/getcartitem?Id=`+localStorage.getItem("userid"), config)
                .then ((Response) =>
                {
                    setState(Response.data);
                    setState(Response.data);
                    console.log(Response.data);
                  })
                .catch((error) => {
                    console.log(error);
                });
            };

         
    useEffect( () => {
        handleApi();
    },[Id]);

    const deleteItem = (itemId) =>{

        let axiosConfig = {
          headers: {
              'Authorization': `Bearer ${token}` 
          } 
        };
        axios.delete(`https://team3-step-dev-ed.develop.my.salesforce.com/services/apexrest/deletecartitem?Id=`+itemId,axiosConfig)
       .then((Response) => {
                       console.log(Response)
                       window.location.reload();
                    })
                    .catch((err) => {
                      console.log(err)
                    })
      }
    const increaseItem =(items) =>{
        let axiosConfig = {
            headers: {
                'Authorization': `Bearer ${token}` 
            },
           
          };
          var postData =
          {
            Quantity:items.Quantity__c + 1                                                                        
           };
        { items.Quantity__c === 6 ? 
            <button disabled="disabled" > <AddIcon/></button> :
          axios.put(`https://team3-step-dev-ed.develop.my.salesforce.com/services/apexrest/updatecartitem?Id=`+items.Id,postData,axiosConfig)
          .then((Response) => {
            console.log(Response)
            window.location.reload();
        
         })
         .catch((err) => {
           console.log(err)
         })
        }
}
const decreaseItem =(items) =>{
    let axiosConfig = {
        headers: {
            'Authorization': `Bearer ${token}` 
        },
       
      };
      var postData =
      {
        Quantity:items.Quantity__c - 1                                                                        
       };
       {
    items.Quantity__c === 1 ? 
    <div className="button_align">
                     
                      <button className="decrease_button" onClick={() => decreaseItem(items)} disabled="disable" > <RemoveIcon/> </button>  
                      </div>
                      :

      axios.put(`https://team3-step-dev-ed.develop.my.salesforce.com/services/apexrest/updatecartitem?Id=`+items.Id,postData,axiosConfig)
      .then((Response) => {
        console.log(Response)
        window.location.reload();
     })
     .catch((err) => {
       console.log(err)
     })
    }

    //const total=state[0].Quantity__c*state[0].Book_Price__c;
}

    return(
        <div className="cartalign">
            <h1 className="cart_heading">Shopping Cart</h1>
        
      
           
        {
           
            state.map(items => {
                return(
                    <div className="cartitem_key"  key={items.BookId__c}>
                    <div className="card1">
                    <Link to={"/productdetails?id=" + items.BookId__c}>
                    <img className="cart_bookimage" src={items.Book_image__c}></img>
                    </Link>
                
                    <p className="cart_bookname">{items.BookId__r.Name} </p>
                  
                   <p  className="cart_authorname">Author: {items.AuthorName__c} </p>  
                      </div>

                      <div className="card2">
                      <div className="button_align">
                     
                      <button className="decrease_button" onClick={() => decreaseItem(items)} > <RemoveIcon/> </button>  
                      </div>
                      <input className="number_box" type="text" name="quantity" value={items.Quantity__c} disabled /> 
                      <div className="button_align">                             
                      <button className="increase_button" onClick={() => increaseItem(items)}> <AddIcon/></button>
                      </div>  
                      <div className="remove_item">
                      <button className="delete_item" onClick={() =>  deleteItem(items.Id)}><DeleteIcon/></button>
                        </div>
           
                    </div>
                   
                    </div>
                
                )
            })
        
        }
       
            
            

       <button>
        <Link to ="/shipping">
    Shipping Address </Link> </button>
    </div>

    
    )
}
export default Cart;