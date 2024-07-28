import React from 'react'
import "./hero.css"
import arrow_icon from '../Assets/Assets/right-arrow.png'
import hero_image from '../Assets/Assets/hero1.png'
 
export const Hero = () => {
    return (
       <div className='hero'>
        <div className='hero-left'>
           <h2>NEW ARRIVALS ONLY</h2>
           <div>
            <div className='hero-hand-icon'>
                <p>New</p>
            </div>
            <p>Collections</p>
                <p>for everyone</p>
           </div>
           <div className='hero-latest-btn'>
            <div>Latest Collection</div>
            <img src={arrow_icon}/>
           </div>
        </div>
        <div className='hero-right'>
               <img src={hero_image}/>
        </div>
       </div>
    )
}
