"use client";

import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import {useState} from "react";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
    const [showDetails, setShowDetails] = useState(false);
    const [showCart, setShowCart] = useState(false);

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

  return (
    <>
        <Header cartCount={cartCount} handleShowCart = {handleShowCart}/>
        {showDetails && <ProductDetails/>}
        {showCart && <Cart/>}
        {!(showDetails || showCart) && <ProductList handleAddToCart={handleAddToCart} handleShowDetails={handleShowDetails}/>}
        <Footer/>
    </>
  );
}
