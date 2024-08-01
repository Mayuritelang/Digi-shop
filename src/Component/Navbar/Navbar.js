import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from "../Assets/Assets/online-shoping.png";
import cart_icon from "../Assets/Assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  const [menu, setMenu] = useState("");
  const { getTotalCartitem } = useContext(ShopContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Digi Shop Logo" />
        <p>DIGI SHOP</p>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span role="img" aria-label="menu">&#9776;</span>
      </div>

      <ul className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
        <li onClick={() => { setMenu("Home"); setIsMenuOpen(false); }}>
          <Link style={{ textDecoration: "none", color: 'black' }} to="/">Home</Link> 
          {menu === "Home" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("Mens"); setIsMenuOpen(false); }}>
          <Link style={{ textDecoration: "none", color: 'black' }} to="/mens">Men</Link> 
          {menu === "Mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("Womens"); setIsMenuOpen(false); }}>
          <Link style={{ textDecoration: "none", color: 'black' }} to="/womens">Women</Link> 
          {menu === "Womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("Kids"); setIsMenuOpen(false); }}>
          <Link style={{ textDecoration: "none", color: 'black' }} to="/kids">Kids</Link> 
          {menu === "Kids" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("About"); setIsMenuOpen(false); }}>
          <Link style={{ textDecoration: "none", color: 'black' }} to="/about">About</Link> 
          {menu === "About" ? <hr /> : <></>}
        </li>
      </ul>

      <div className='nav-login-cart'>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="Cart Icon" /></Link>
        <div className='nav-cart-count'>{getTotalCartitem()}</div>
      </div>
    </div>
  );
};
