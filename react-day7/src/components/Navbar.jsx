import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
      <div>
            <div style={{display: 'flex', justifyContent
                : "space-between", backgroundColor: "lightsalmon", padding: "13px"
            }}>
            <h2>Route</h2>

            <ul style={{display: "flex", gap:"14px", listStyleType: "none"}}>
                <li><Link to="home">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="products">Products</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar