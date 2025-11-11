import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userid');

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/products/list');
        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // ✅ Add to cart (backend + frontend)
  const addToCart = async (product, quantity = 1) => {
    try {
      // Send to backend
      const res = await axios.post(
        `http://localhost:8000/api/cart/add/${userId}`,
        { productId: product._id, quantity },
        { headers: { token } }
      );

      // Update frontend state for instant feedback
      const normalized = {
        id: product._id,
        name: product.name,
        price: product.price,
        image: Array.isArray(product.image) ? product.image[0] : product.image,
        quantity,
      };

      setCart([...cart, normalized]);
      toast.success('Item added to cart');
      return res.data;
    } catch (err) {
      console.error('Add to cart error:', err);
      toast.error('Failed to add item to cart');
    }
  };

  // Fetch user's cart from backend
  const getCart = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/cart/single/${userId}`,
        { headers: { token } }
      );
      setCart(res.data.cartData || []);
    } catch (err) {
      console.error('Error fetching cart:', err);
    }
  };

  // Remove from cart
  const removeFromCart = async (productId) => {
    try {
      await axios.delete(
        `http://localhost:8000/api/cart/remove/${userId}/${productId}`,
        { headers: { token } }
      );
      setCart(cart.filter((item) => item.id !== productId));
      toast.info('Item removed');
    } catch (err) {
      console.error('Error removing from cart:', err);
    }
  };

  return (
    <ShopContext.Provider
      value={{ products, cart, addToCart, removeFromCart, getCart }}
    >
      {children}
    </ShopContext.Provider>
  );
};
