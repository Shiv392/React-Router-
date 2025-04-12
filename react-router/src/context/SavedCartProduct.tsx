import React, { createContext, useState } from 'react';

export const CartProductContext = createContext([]);

export const  CartProductProvider=({children})=>{
    const [cartproduct,setCartProduct]=useState([]);

    return(
        <CartProductContext.Provider value={{cartproduct,setCartProduct}}>
            {children}
        </CartProductContext.Provider>
    )
}