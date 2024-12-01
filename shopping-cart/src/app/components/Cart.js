"use-client";
import { useState } from "react";
import { items } from "./Items";
import Renderer from "./Renderer";
import { forEachChild } from "typescript";

export default function Cart() {
  const [cartItems, setCartItems] = useState(items);
  //"items" is the name of the placeholder array to test my cart. It can be replaced with another array.
  console.log("Cart items:", cartItems);
  const handleRemove = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.product !== item.product));
  };

  const handleIncreaseCartItem = (item) => {
    //Find the item in the cart array that matches the item just clicked. If found, recreates the array having that item with a higher quantity...
    console.log("Increase item:", item);
    const updatedCart = cartItems.map(cartItem => 
      cartItem.product === item.product
      ? {...cartItem, quantity: parseInt(cartItem.quantity) + 1} 
      : cartItem,
    );
    setCartItems(updatedCart);
  }

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
  

  const itemCount = () => {
    return cartItems.reduce((count, item) => count + parseInt(item.quantity), 0);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + parseInt(item.price), 0);
  };

  const shipping = 4.00;
  const tax = 4.00;
  const subtotal = calculateSubtotal();
  const total = calculateSubtotal() + shipping + tax;
  
  {/*const itemCount = (items) => {
    let count = 0;
    items.forEach((item) => {
      count += item.quantity;
    });
    console.log(count);
    return count;
  };*/}

  return (
    <>
      <div className="font-sans">
        <div className="grid lg:grid-cols-3">
          <div className="lg:col-span-2 p-6 bg-white overflow-x-auto">
            <div className="flex gap-2 border-b pb-4">
              <h2 className="text-2xl font-bold text-gray-800 flex-1">
                Shopping Cart
              </h2>
              <h3 className="text-base text-gray-800">{`${itemCount()} Items`}</h3>
            </div>

            <table className="mt-6 w-full boxrder-collapse divide-y">
              <thead className="whitespace-nowrap text-left">
                <tr>
                  <th className="text-base text-gray-800 p-4">Description</th>
                  <th className="text-base text-gray-800 p-4">Quantity</th>
                  <th className="text-base text-gray-800 p-4">Price</th>
                </tr>
              </thead>

              <tbody className="whitespace-nowrap divide-y">
                {/*This is where the table's body starts...where my work starts*/}
                <Renderer items={cartItems} handleRemove={handleRemove} handleIncreaseCartItem={handleIncreaseCartItem} handleDecreaseCartItem={handleDecreaseCartItem}/>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 p-6 lg:sticky lg:top-0 lg:h-screen">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">
              Order Summary
            </h2>

            <ul className="text-gray-800 divide-y mt-6">
              <li className="flex flex-wrap gap-4 text-base py-3">
                Subtotal <span className="ml-auto font-bold">${subtotal}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-base py-3">
                Shipping <span className="ml-auto font-bold">${shipping.toFixed(2)}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-base py-3">
                Tax <span className="ml-auto font-bold">${tax.toFixed(2)}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-base py-3 font-bold">
                Total <span className="ml-auto">${total}</span>
              </li>
            </ul>
            {/*const calculateSubtotal = () => {
  return cartItems.reduce((total, item) => total + parseInt(item.quantity) * parseFloat(item.price.replace('$', '')), 0);
};

const shipping = 4.00; // Example fixed shipping cost
const tax = 4.00; // Example fixed tax
const total = calculateSubtotal() + shipping + tax;*/}

            <button
              type="button"
              className="mt-6 text-base px-5 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

