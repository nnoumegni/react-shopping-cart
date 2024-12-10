"use client";

import { items } from "./components/Items";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import {useCallback, useState} from "react";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";


export default function Home() {
  console.log("Items:", items);
    const [showDetails, setShowDetails] = useState(false);
    const [showCart, setShowCart] = useState(false);
    //storing cartItems in placeholder: items array and using const itemCount to enumerate the sum of items to pass to cart and header.
    //this probably makes cartCount redundant.
    const [cartItems, setCartItems] = useState(items);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  }

  const handleShowDetails = () => {
    setShowDetails(true);
  }

  const handleShowCart = () => {
    console.log("I AM HERE!");
    setShowCart(true);
  }

  const itemCount = cartItems.reduce((count, item) => count + parseInt(item.quantity), 0);

  const handleIncreaseCartItem = useCallback((item) => {
    //Find the item in the cart array that matches the item just clicked. If found, recreates the array having that item with a higher quantity...
    console.log("Increase item:", item);
    const updatedCart = cartItems.map(cartItem => //updCartItems*
      cartItem.product === item.product //preferably use id.
      ? {...cartItem, quantity: parseInt(cartItem.quantity) + 1} 
      : cartItem,
    );
    setCartItems(updatedCart);
  }, [cartItems]);

  const handleDecreaseCartItem = (item) => {
    console.log("Decrease item:", item);
    const updatedCart = cartItems
      .map(cartItem => 
        cartItem.product === item.product
          ? { ...cartItem, quantity: parseInt(cartItem.quantity) - 1 }
          : cartItem
      )
      .filter(cartItem => cartItem.quantity > 0); // Remove items with quantity <= 0
  
    setCartItems(updatedCart);
  };

  const handleRemove = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.product !== item.product));
  };

  return (
    <>
        <Header cartItems={cartItems} handleShowCart = {handleShowCart}/>
        {showDetails && <ProductDetails/>}
        {showCart && <Cart itemCount={itemCount} cartItems={cartItems} setCartItems={setCartItems} handleDecreaseCartItem={handleDecreaseCartItem} handleIncreaseCartItem={handleIncreaseCartItem} handleRemove={handleRemove} />}
        {!(showDetails || showCart) && <ProductList handleAddToCart={handleAddToCart} handleShowDetails={handleShowDetails}/>}
        <Footer/>
    </>
  );
}
