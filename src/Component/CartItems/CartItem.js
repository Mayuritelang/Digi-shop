import React, { useContext } from 'react'
import './CartItem.css'
import remove_icon from '../Assets/Assets/cart_cross_icon.png'
import { ShopContext } from '../../Context/ShopContext'


export const CartItem = () => {

    const {getTotalCartamt, all_product, cartItem, removeFromCart} = useContext(ShopContext)
    return (
        <div className='cartItem'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return <div>
                        <div /* key={e.id} */ className='cartitems-format cartitems-format-main'>
                            <img src={e.image} className='cartitem-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                            <p>${e.new_price * cartItem[e.id]}</p>
                            <img className='cartitem-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className='cartitem-down'>
                <div className='cartitems-total'>
                    <h1>Cart Total</h1>
                    <div>
                        <div className='cartitem-total-item'>
                            <p>Subtotal</p>
                            <p>${getTotalCartamt()}</p>
                        </div>
                        <hr/>
                        <div className='cartitem-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className='cartitem-total-item'>
                            <h3>Total</h3>
                            <p>${getTotalCartamt()}</p>
                        </div>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className='cartitems-promocode'>
                        <p>If you have promocode, enter it here</p>
                        <div className='cartitems-promobox'>
                            <input type='text' placeholder='promo code'/>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>      
    )
}
