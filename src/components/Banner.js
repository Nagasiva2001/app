// src/components/Banner.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Earn FD-wala interest up to 7%* p.a. in Savings Account with ActivMoney</h1>
        <p>To know more, <a href="#">click here</a></p>
        <div className="buttons">
          <Link to="/SavingsInfo" className="btn">Open a Savings Account</Link>
          <Link to="/activate-customer" className="btn">Existing Customer? Activate</Link>
        </div>
      </div>
      <div className="banner-image">
        <img src='/img1.png' alt="Banner" />
      </div>
    </div>
  );
};
export default Banner;