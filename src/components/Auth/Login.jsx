import axios from "axios";
import { useState ,useEffect} from "react";
import { useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { login_url, salesforce_login, token } from "../../Constants";
function Login()
{
  const initialValues={username:"",password:""};
  const [formValues,setFormValues] =useState(initialValues);
  const [formErrors,setFormErrors] =useState({});
  const [isSubmit,setIsSubmit]= useState(false);
  const [response,setResponse] = useState(false);
  const navigate = useNavigate();  
  const submitHandler = (e) => {
    setIsSubmit(true);
    navigate("/register");
  }
  const submitForgotHandler = (e) => {
    setIsSubmit(true);
    navigate("/forgot");
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
    
    if (!values.username){
      errors.username="username is required";
    }
    if (!values.password){
      errors.password="password is required";
    }
    return errors;
  };
  const handleApi = () => {
    console.log(formValues); 
    axios.post(login_url,formValues)
    .then((result) => {
      console.log(result)
      if(result.data)
      {
      localStorage.setItem('token',result.data.token);
      localStorage.setItem('userid',result.data.userId);
      navigate("/"); 
      window.location.reload();
    } 
    })
    .catch(error => {
      console.log(error)
    });
  };
  return(
    <div className="auth-form-container"  >
     <form className= "login-form"  onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="username">Username </label>
      <input  type="text" id="username" name="username"  value={formValues.username} onChange={handleChange} />
      <span>{formErrors.username}</span>
      <br/>
      <label htmlFor="password">Password</label>
      <input   type="password"  id="password" name="password" value={formValues.password}  onChange={handleChange}/>
     <span>{formErrors.password}</span> 
     <br/>
      <div className="center">
        <button className ="login-btn" type="submit" onClick={handleApi}>Login </button></div>
      <br/>
      <span>{ response} </span>
     <div> 
      <button className ="link-btn" onClick={submitHandler}>Sign Up</button></div>
     <br/>
      <button className ="link-btn" onClick={submitForgotHandler}>Forgot Password</button>
      <a className="admin_login" href={salesforce_login}>Admin</a>
    </form>
    </div>
    )
}
  export default Login;