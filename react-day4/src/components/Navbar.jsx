import React from 'react'
import "./navbar.css";

function Navbar() {

    const navLinks = [
        {
            id: 1,
            title: "Home"
        },
        {
            id: 2,
            title: "Product",
        },
        {
            id: 3,
            title: "Cart"
        },
        {
            id: 4,
            title: "Profile"
        },
        {
            id: 5,
            title: "Checkout"
        }
    ];

  return (
    <div className='nav-container'>
        <div>
            <h1>StackForge</h1>
        </div>

        <ul>
            {
                navLinks.map((a) => (
                    <li key={a.id}>{a.title}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Navbar;