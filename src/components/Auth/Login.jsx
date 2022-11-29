// import { useState } from "react"
// import axios from "axios";
// import { login_url } from "../../Constants";

//  export const Login = (props) =>{
  
//   const[username,setUserName] = useState('');
//   const[password,setPassword] = useState('');

//   const handleUsername=(e) =>{
//   setUserName(e.target.value)
// }
//   const handlePassword = (e) =>{
//   setPassword(e.target.value)
// } 
//   const handleApi=() =>{
//   console.log({username,password})
//   axios.post(login_url,{
//     Username: username,
//     Password: password
//   })
//   .then(result =>{
//     console.log(result.data)
//     alert('success')
//     localStorage.setItem('token',result.data.token)
//   })
//   .catch(error=>{
//     alert('service error')
//     console.log(error)
//   })
// }
//   // const handleSubmit =(e) =>{
//   //   e.preventDefault();
//   //   console.log(username);
//   // }
  
//   return( 
//     <div className="auth-form-container">
//     <form className= "login-form" onSubmit={handleApi}>
//       <div className="heading"><label>Sign in</label></div>
//       <label htmlFor="username">User name </label>
//       <input  onChange={(e) => handleUsername(e.target.value)} type="text" id="username" name="username" />
//       <br />
//       <label htmlFor="password">Password</label>
//       <input  onChange={(e) => handlePassword(e.target.value)} type="text"  id="password" name="password" /><br />
//       <div className="center"><button className ="login-btn" onClick={() => handleApi()} type="submit">Log In</button></div>
//       <br/>
//       <button className ="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
//     </form>
//     </div>
//   )
// } 




import axios from "axios";
import { useState ,useEffect} from "react";
import { login_url } from "../../Constants";

export const Login = (props) =>
{
  const initialValues={username:"",password:""};
  const [formValues,setFormValues] =useState(initialValues);
  const [formErrors,setFormErrors] =useState({});
  const [isSubmit,setIsSubmit]= useState(false);

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
    //const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username){
      errors.username="username is required";
    }
    if (!values.password){
      errors.password="password is required";
    }else if(values.password.length <4){
      errors.password="password must be more than 4 charactes"
    }else if(values.password.length >10){
      errors.password="password must be more than 10 charactes"
    }
    
    return errors;
  };

  const handleApi = () => {
    console.log(formValues);
    axios.post(login_url,formValues)
    .then((result) => {
      console.log(result.data)
      alert('success')
      localStorage.setItem('token',result.data.token)
    })
    .catch(error => {
      alert('error')
      console.log(error)
      
    })


  }
  return(
    <div className="auth-form-container">
      <div className="heading"><label>Sign in</label></div>

     {/* { Object.keys(formErrors).length === 0 && isSubmit ? (<div className="ui message succes"> signed in successfully</div>) :('')} */}
      
    {/* <pre> {JSON.stringify(formValues,undefined,2)} </pre>  */}
    <form className= "login-form"  onSubmit={handleSubmit}>
      <label htmlFor="username">User name </label>
      <input  type="text" id="username" name="username"  value={formValues.username} onChange={handleChange} />
      <br />
      <p> {formErrors.username}</p>
      <label htmlFor="password">Password</label>
      <input   type="text"  id="password" name="password" value={formValues.password}  onChange={handleChange}/><br />
        <p> {formErrors.password}</p>
      <div className="center"><button className ="login-btn" type="submit" onClick={handleApi}>Log In</button></div>
      <br/>
      <button className ="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
    </form>
    </div>
    )
  }
  export default Login;
