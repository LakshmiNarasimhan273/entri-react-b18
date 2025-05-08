import React from 'react';
import "./home.css";
import Products from "./Products";

function Home({name}) {
  const products = [
    {
      id: 1,
      productName: "Watch",
      price: 324
    },
    {
      id: 2,
      productName: "Shoe",
      price: 123
    }
  ];
  return (
    <div>
        <div className='navbar-container'>
                

                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Profile</li>
                </ul>
        </div>
        <h1>{name}</h1>
                  <Products productDetails = {products} />
    </div>
  )
}

export default Home