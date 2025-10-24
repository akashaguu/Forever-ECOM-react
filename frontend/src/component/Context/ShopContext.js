import { createContext, useState, useEffect } from "react";
import ShopContext from "./ShopContext";
export const ShopContextProvider=({children})=>{
    const [cartItems,setCartItems]=useState([])
    const [cartCount,setCartCount]=useState(0)
    const [cartSubTotal,setCartSubTotal]=useState(0```javascript
    )

    useEffect(() => {
        let count = 0;
        let subTotal = 0;
        cartItems.forEach((item) => {
            count += item.quantity;
            subTotal += item.price * item.quantity;
        });
        setCartCount(count);
        setCartSubTotal(subTotal);
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <ShopContext.Provider value={{ cartItems, cartCount, cartSubTotal, addToCart, removeFromCart, clearCart }}>
            {children}
        </ShopContext.Provider>
    );
};
```)
    const addToCart = (item) => {
        setCartItems(prevItems => [...prevItems, item]);
        setCartCount(prevCount => prevCount + 1);
        setCartSubTotal(prevSubTotal => prevSubTotal + item.price);
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
        setCartCount(prevCount => prevCount - 1);
        const removedItem = cartItems.find(item => item.id === itemId);
        if (removedItem) {
            setCartSubTotal(prevSubTotal => prevSubTotal - removedItem.price);
        }
    };

    return (
        <ShopContext.Provider value={{ cartItems, cartCount, cartSubTotal, addToCart, removeFromCart }}>
            {children}
        </ShopContext.Provider>
    );
};