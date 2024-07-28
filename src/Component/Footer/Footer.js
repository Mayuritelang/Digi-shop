import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Assets/online-shoping.png'
import instagram_logo from '../Assets/Assets/instagram_icon.png'
import pintester_logo from '../Assets/Assets/pintester_icon.png'
import whatsapp_logo from '../Assets/Assets/whatsapp_icon.png'


export const Footer = () => {
  return (
     <div className='footer'>
        <hr/>
        <div className='footer-logo'>
        <img src={footer_logo}/>
        <p>DIGI SHOP</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icon-container'>
                  <img src={instagram_logo}/>
            </div>
            <div className='footer-icon-container'>
                  <img src={pintester_logo}/>
            </div>
            <div className='footer-icon-container'>
                  <img src={whatsapp_logo}/>
            </div>
        </div>
     </div>
  )
}
