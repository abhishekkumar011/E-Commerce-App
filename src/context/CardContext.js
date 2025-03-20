"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  //Fetch Product data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, []);

  //Load cart from the localStorage on first render
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(savedCart);
  }, []);

  //Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  //Add items to the cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  //Remove items from the cart
  const removeFromCart = (index) => {
    setCart(cart.filter((i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ products, addToCart, removeFromCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
