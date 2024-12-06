"use client";

import { items } from "./components/Items";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import {useState} from "react";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";


export default function Home() {
  console.log("Items:", items);
  const [cartCount, setCartCount] = useState(0);
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

  const itemCount = () => {
    return cartItems.reduce((count, item) => count + parseInt(item.quantity), 0);
  };

  return (
    <>
        <Header itemCount={itemCount} cartCount={cartCount} handleShowCart = {handleShowCart}/>
        {showDetails && <ProductDetails/>}
        {showCart && <Cart itemCount={itemCount} cartItems={cartItems} setCartItems={setCartItems}/>}
        {!(showDetails || showCart) && <ProductList handleAddToCart={handleAddToCart} handleShowDetails={handleShowDetails}/>}
        <Footer/>
    </>
  );
}
