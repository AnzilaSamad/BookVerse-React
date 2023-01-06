import React from 'react';
import { useNavigate } from 'react-router';
import './UserTooltip.css';
function UserTooltip()
 { 
    const navigate=useNavigate();
    const  logoutHandler = (e) => {
      e.preventDefault ()
      localStorage.clear();
      navigate('/'); 
      window.location.reload();   
  }
  return (
    <div className="usertooltip">
      <div className="usert">
        <hr/>
        <p>User Name</p>
      </div>
      
      <div className="myorder">
      <hr/>
        <p>My Order</p>
      </div>
      <div className="logout" onClick={logoutHandler}>
      <hr/>
        <p>Logout</p>
        <hr/>
      </div>
    </div>
  );
};
export default UserTooltip