import React from "react";
import { useState, useContext } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const useCart = () => {
    const cart = useContext(CartContext);
    return cart;
};

export const CartContextProvider = ({children}) => {
    const [items, setItems] = useState([]);
    return(
        <CartContext.Provider value={{items, setItems}}>
            {children}
        </CartContext.Provider>
    )
}