import {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { forget_url } from "../../Constants";
function Forgot()
{
  const initialValues={Email:""};
  const [formValues,setFormValues] =useState(initialValues);
  const [formErrors,setFormErrors] =useState({});
  const [isSubmit,setIsSubmit]= useState(false);
  const [response,setResponse] =useState(false);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    setIsSubmit(true);
    navigate("/login");
  }
  const handleChange = (e) => {
    console.log(e.target);
    const {name,value} = e.target;
    setFormValues({...formValues, [name]:value});
    console.log(formValues);
      };    
     const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
     };
  useEffect( () => {
    console.log(formErrors);
    if(Object.keys(formErrors).length ===0 && isSubmit){
      console.log(formValues); 
    }
  },[formErrors]);
    const validate = (values) => {      
      let errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; 
    if (!values.Email)
    {
      errors.Email="email is required";
    }
    else if (!regex.test(values.Email))
   {
    errors.Email = "Invalid email format!";
  }      
   return errors;
  };
  const handleApi = () => {
    console.log(formValues);
    axios.post(forget_url,formValues)
    .then(result=> {
      console.log(result)
      setResponse("Email sent successfully",true);
    })
    .catch(error => {
     console.log(error)
      setResponse("Email not found",true);     
    })
  }
  return(    
        <div className="auth-form-container">
       <form className="forget-form" onSubmit={handleSubmit} >
          <h1>Forgot Password</h1>
          <label htmlFor="Email">Email </label>
          <input   type="text"  id="Email" name="Email" value={formValues.Email} onChange={handleChange} /><br/> 
          <span>{formErrors.Email}</span>
          <br /> 
          <br /> 
          <div className="center">
          <button className ="login-btn"  type="submit" onClick={handleApi} >Submit</button></div>
          <span>{response} </span>
          <br/><br/>
          <button className ="link-btn" onClick={submitHandler}>Back to login </button> 
        </form>
        </div>
      )}
export default Forgot;