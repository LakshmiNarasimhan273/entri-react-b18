import React from 'react'
import ProductDetails from './product'

function Products() {
    const productClick = (productName) => {
        alert(`You clicked on ${productName}`);
    }
  return (
    <div style={{marginTop: "50px"}}>
        <ul style={{display: "flex", justifyContent: "space-around", cursor: "pointer"}}>
            {
                ProductDetails.map((product) => (
                    <li key={product.id} onClick={() => productClick(product.productName)}>
                        <h1>{product.productName}</h1>
                        <h3>{product.productPrice}</h3>
                    </li>
                ))
            }
        </ul>
       
    </div>
  )
}

export default Products