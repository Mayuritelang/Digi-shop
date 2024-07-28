import React from 'react'
import './offers.css'
import exclusive_image from '../Assets/Assets/5cda1ff3-7944-43c0-b89f-8a697c2c774c_LARGE-removebg-preview.png'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Chech Now</button>
        </div>
        <div className='offers-right'></div>
        <img src={exclusive_image}/>
    </div>
  )
}
