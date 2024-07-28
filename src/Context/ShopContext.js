import React, { createContext, useState } from "react";
import all_product from '../Component/Assets/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
      cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());
   

    const addToCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]:prev[itemId]+1}))
        
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalCartamt = () => {
           let totalamt = 0;
           for(const item in cartItem){
            if(cartItem[item] > 0){
                let iteminfo = all_product.find((product) => product.id === Number(item))
                    totalamt += iteminfo.new_price * cartItem[item];
               
            }
           }
           return totalamt;
    }

    const getTotalCartitem = () => {
        let totalcartitem = 0;
        for(const iten in cartItem){
            if(cartItem[iten] > 0) {
                totalcartitem += cartItem[iten]
            }
        }
        return totalcartitem;
    }


    const contextValue = {getTotalCartitem, getTotalCartamt, all_product, cartItem, addToCart, removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;