import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='logo'>
        {/* <img src="C:\Users\igel2\my-app\src\logo.png" alt='Logo' /> */}
        </div>
        <div className='top_header'>
          <div className='search'>
            <input type='text' placeholder='Search...' />
          </div>
          <div className='navbar'>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/Help">Support</Link></li>
              <li><Link to="/Personal_account">Personal account</Link></li>
              <li><Link to="/Basket">Basket</Link></li>
              <li><Link to="/Delivery">Delivery</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;