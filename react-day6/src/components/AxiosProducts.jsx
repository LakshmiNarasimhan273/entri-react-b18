import React, { useEffect, useState } from 'react'
import axios from "axios";

function AxiosProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Mounting
       axios.get("https://fakestoreapi.com/products")
    //    Updating
       .then(res => setProducts(res.data))
       .catch(err => console.error("API Error", err)
       )
    //    Unmounting
    }, []); // empty dependencies

    console.log(products);
    

  return (
    <div>
        <h1>Axios data</h1>

        <ul>
            {
                products.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default AxiosProducts