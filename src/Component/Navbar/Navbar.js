import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from "../Assets/Assets/online-shoping.png"
import cart_icon from "../Assets/Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {

  const [menu, setMenu] = useState("");
  const {getTotalCartitem} = useContext(ShopContext);

  return (
    <div className='navbar'>
       <div className='nav-logo'>
        <img src={logo}></img>
        <p>DIGI SHOP</p>
       </div>
       <ul className='nav-menu'>
        <li onClick={() => setMenu("Home")}> <Link style={{textDecoration: "none", color: 'black'}} to="/">Home</Link> {menu === "Home" ? <hr/> : <></>}</li>
        <li onClick={() => setMenu("Mens")}> <Link style={{textDecoration: "none", color: 'black'}} to="/mens">Men</Link> {menu === "Mens" ? <hr/> : <></>}</li>
        <li onClick={() => setMenu("Womens")}> <Link style={{textDecoration: "none", color: 'black'}} to="/womens">Women</Link> {menu === "Womens" ? <hr/> : <></>}</li>
        <li onClick={() => setMenu("Kids")}> <Link style={{textDecoration: "none", color: 'black'}} to="/kids">Kids</Link> {menu === "Kids" ? <hr/> : <></>}</li>
        <li onClick={() => setMenu("About")}><Link style={{textDecoration: "none", color: 'black'}} to="/about">About</Link> {menu === "About" ? <hr/> : <></>}</li>
       </ul>
       <div className='nav-login-cart'>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"> <img src={cart_icon}></img></Link>
        <div className='nav-cart-count'>{getTotalCartitem()}</div>
       </div>
    </div>
  )
}
