import React from 'react';
import './UserTooltip.css';

const UserTooltip = () => {
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
      
      <div className="logout">
      <hr/>
        <p>Logout</p>
        <hr/>
      </div>

    </div>
  );
};

export default UserTooltip