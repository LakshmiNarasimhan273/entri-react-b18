import React from 'react'
import BasicForm from './Checkout'


function Products({productDetails}) {
  return (
    <div style={{marginTop: "16px"}}>
      {
        productDetails.map(item => (
          <div key={item.id}>
            <h1>{item.productName}</h1>
            <h3>{item.price}</h3>
          </div>
        ))
      }
      <BasicForm />
    </div>
  )
}

export default Products