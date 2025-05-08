import React, { useEffect, useState } from 'react'

function FetchProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Basic javascript fetch method
    // Mounting
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    // Updating
    .then(data => setProducts(data))
    .catch(err => console.error("API Error", err)
    )
    // Unmounting
  }, [])

  return (
    <div>
      <h2>API Products</h2>

      <ul>
        {
          products.map(item => (
            <li key={item.id}>
              <img src={item.image} width={80} height={80} alt="" />
              <h4>{item.title}</h4>
              <h3>${item.price}</h3>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default FetchProducts;