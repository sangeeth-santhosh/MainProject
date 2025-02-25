import React from 'react';
import menu from './images/menu.svg';
import user from './images/user.svg';
import cart from './images/cart.svg';
import wishlist from './images/wishlist.svg';

function App() {

  return (
    <>
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto flex justify-between p-3">
          <h1 className="text-xxl ml-20">Free Shipping Over Rs.100</h1>
          <h1 className="text-xxl ml-200">Hotline: +91 9895354364</h1>
          <nav></nav>
        </div>
      </header>
      <hr style={{ height: "0.5px", backgroundColor: "gray", border: "none" }} />
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto flex p-7">
          <h1 className="text-3xl ml-17">Cart Corner</h1>
          <img src={wishlist} alt="wishlist" className="ml-158"/><p className="text-xxl mb-0 px-2">Favourite <br></br>Wishlist</p>
          <img src={user} alt="user" className="flex ml-20"/><p className="text-xxl mb-0 px-2">Log in <br></br>My Account</p>
          <img src={cart} alt="cart" className="flex ml-20"/><p className="text-xxl mb-0 px-2"> <br></br>Rs.0.00</p>
          <nav></nav>
        </div>
      </header>
      <header className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto flex py-7">
          {/* <img src={menu} alt="menu"/> */}
          <img src={menu} alt="menu" className="flex ml-25"/><label className="text-xxl px-4">SHOP CATEGORIES</label>
          <select id="options" className="text-xxl bg-gray-800">
            <option value="1"></option>
            <option value="2">Electronics</option>
            <option value="3">Fashion</option>
            <option value="4">Home & Kitchen</option>
            <option value="5">Sports</option>
            <option value="6">Books</option>
          </select>
          {/* <h1 className="text-Xxl ml-5">SHOP CATEGORIES</h1> */}
          <h1 className="text-Xxl ml-10">HOME</h1>
          <h1 className="text-Xxl ml-7">OUR STORE</h1>
          <h1 className="text-Xxl ml-7">MY ORDERS</h1>
          <h1 className="text-Xxl ml-7">BLOGS</h1>
          <h1 className="text-Xxl ml-7">CONTACT</h1>
          <nav></nav>
        </div>
      </header>
    </>
  );
};

export default App