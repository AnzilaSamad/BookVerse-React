import axios from "axios";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router";
import { register_url, token, usercreation_url } from "../../Constants";
function Register()
{
  const initialValues={username:"",Email:"",PhoneNumber:"", password:"", ConfirmPassword:"",SalesforceId:"0"};
  const [formValues,setFormValues] =useState(initialValues);
  const [formErrors,setFormErrors] =useState({});
  const [isSubmit,setIsSubmit]= useState(false);
  const [response,setResponse] = useState(false);
  console.log(formValues.username)
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
    const errors={};
    const userregex = /^\S*$/; 
    const emailregex=/^[^\s@]+(@gmail+\.com)$/;
    const phonepattern = /^[0-9]{10}$/i;
    const passwordregex= /^(?=.*\S*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i;   
    if (!values.username)
    {
      errors.username="Username is required";
    }
    else if(!userregex.test(values.username))
    {
      errors.username = "Please enter valid username.";
    }
    else if(values.username.length < 8) 
    {
      errors.username = "Username must atleast have 8 characters.";
    }
    else if(values.username.length >16) 
    {     
      errors.username = "Username must not exceed 16 characters.";
    }
    if (!values.Email)
    {
      errors.Email="Email is required";
    }
    else if (!emailregex.test(values.Email))
   {
    errors.Email = "Invalid email format!";
  }
    if (!values.PhoneNumber)
    {
      errors.PhoneNumber="Phone number is required";
    }
    else if (!phonepattern.test(values.PhoneNumber)) 
    {       
      errors.PhoneNumber= "Please  Enter valid number";
    }  
    if (!values.password)
    {
      errors.password="Password is required";
    }
    else if (!passwordregex.test(values.password)) 
    {       
      errors.password= "The password must contain atleast 1 Capital letter,1 Small letter,1 Number,1 special character and must not have whitespace."; 
    }
    if (!values.ConfirmPassword)
    {
      errors.ConfirmPassword="Password is required";
    }
    else if(values.ConfirmPassword !== formValues.password)
    {
      errors.ConfirmPassword="Passwords don't match"
    }  
    return errors;
  };
  const handleApi = () => {
        console.log(formValues);
        var postData = {
          Username: formValues.username,
          Email:formValues.Email,
          PhoneNumber: formValues.PhoneNumber
        };
        let axiosConfig = {
          headers: {
              'Authorization': `Bearer ${token}` 
          }
        };        
        axios.post(register_url,formValues)
        .then(async result=> {
          await console.log(result)
          if(result.data.isSuccess===false)
          {
            setResponse( result.data.messageBody,true);
          }
          else if(result.data.isSuccess===true)
          {
            setResponse("Registered succesfully",true);
            axios.post(usercreation_url,postData,axiosConfig)
            .then((res) => {
              console.log(res)
              axios.get(`https://team3-step-dev-ed.develop.my.salesforce.com/services/apexrest/getuserID?Name=`+formValues.username,axiosConfig)
             .then((result) => {
              formValues.SalesforceId=(result.data[0].Id)
              console.log(formValues.SalesforceId)
              const string1 = `https://localhost:7158/api/User/RegisterId?Name=`+formValues.username
              const string2 = `&Id=`+formValues.SalesforceId
              const url = string1 + string2
              console.log(url)
             axios.post(url)
             })
            })
            .catch((err) => {
              console.log(err)
            })
          }                
        })
        .catch(error => {
          console.log(error)   
        })
        
      }
  return(
    <div className="auth-form-container">
          <form className="register-form" onSubmit={handleSubmit} >
              <h1>Register</h1>
           <label htmlFor="username">Username </label>
              <input   type="text"  id="username" name="username" value={formValues.username} onChange={handleChange} />
              <span>{formErrors.username} </span>
             <br/>
               <label htmlFor="Email">Email </label>
              <input   type="text"  id="Email" name="Email" value={formValues.Email} onChange={handleChange} />
              <span> {formErrors.Email}</span>
              <br />
              <label htmlFor="PhoneNumber">Phone number </label>
              <input  type="text"  id="PhoneNumber" name="PhoneNumber" value={formValues.PhoneNumber} onChange={handleChange}/>
              <span> {formErrors.PhoneNumber}</span>
              <br/>
              <label htmlFor="password">Password </label>
              <input type="password"  id="password" name="password" value={formValues.password} onChange={handleChange} />
              <span> {formErrors.password}</span>
              <br/>
              <label htmlFor="ConfirmPassword">Confirm Password </label>
              <input  type="password"  id="ConfirmPassword" name="ConfirmPassword" value={formValues.ConfirmPassword} onChange={handleChange} />
              <span> {formErrors.ConfirmPassword}</span>
              <br/>
              <div className="center">
              <button className ="login-btn"  type="submit" onClick={handleApi} >Submit</button></div>
          <span> {response}</span> 
              <br/>
              <button className ="link-btn" onClick={submitHandler}>Sign in </button> 
            </form>
            </div>
    )
  }
  export default Register;

     

