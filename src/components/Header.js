import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="https://www.pngguru.in/storage/uploads/images/Twitter%20x%20logo%20png%20free%20download_1690392476_1358447790.webp" alt="Friends Bank Logo" className="logo-image" /> {/* Add the logo image here */}
          Friends Bank
        </div>
        <nav className="nav">
          <Link to="/login" className="nav-link">
            <img src="https://toppng.com/uploads/preview/free-login-logout-black-icon-116420824011bgykrtibc.png" alt="Login Icon" className="nav-icon" /> {/* Add login icon */}
            Login
          </Link>
          <Link to="/signup" className="nav-link">
            <img src="https://toppng.com/uploads/preview/logout-11551056293ans77of4wy.png" alt="Sign Up Icon" className="nav-icon" /> {/* Add sign-up icon */}
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
