import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/Assets/star_icon.png"
import star_dull_icon from '../Assets/Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
  const {product} = props;
  const {addToCart} = useContext(ShopContext);

  return (
    <div className='productDisplay'>
        <div className='productDisplay-left'>
        <div className='productDisplay-img'>
          <img className='productDisplay-main-img' src={product.image}/>
        </div>
          <div className='productDisplay-img-list'>
        <img src={product.image}/>
        <img src={product.image}/>
        <img src={product.image}/>
        <img src={product.image}/>
        </div>
        </div>
         <div className='productDisplay-right'>
          <h1>{product.name}</h1>
          <div className='productDisplay-right-star'>
            <img src={star_icon}/>
            <img src={star_icon}/>
            <img src={star_icon}/>
            <img src={star_icon}/>
            <img src={star_dull_icon}/>
            <p>122</p>
            </div>
            <div className='productDisplay-right-prices'>
              <div className='productDisplay-old-price'>
                ${product.old_price}
              </div>
              <div className='productDisplay-new-price'>
                ${product.new_price}
              </div>
              </div>
              <div className='productDisplay-righ-description'>
              Made of fleece cotton blend material, durable and soft, will give you a comfortable and breathable wearing experience. Wash Care: Easily maintainable with machine wash convenience. Regular fit, solid color, pullover, a good amount of stretch, breathable, skin-touch, makes you feeling well
              </div>
              <div className='productDisplay-right-size'>
                <h1>Select Size</h1>
                <div className='productDisplay-sizes'>
                  <div>S</div>
                  <div>M</div>
                  <div>L</div>
                  <div>XL</div>
                  <div>XXL</div>
                </div>
              </div>
              <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>

              <p className='productDisplay-category'>
                <span>Category :</span>Woment, T-Shirt, Crop Top
              </p>
              <p className='productDisplay-category'>
                <span>Tags :</span>Modern, Latest
              </p>
              </div>    
        
    </div>
  )
}
