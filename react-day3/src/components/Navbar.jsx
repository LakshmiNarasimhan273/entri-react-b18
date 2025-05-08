import React from 'react'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <div className="container">
            <a href="#" className="navbar-brand fw-bold">Shopyfyy</a>

            <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#navMenu">
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse justify-content-end' id='navMenu'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link' href="#hero">Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#products" className='nav-link'>Products</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#contact" className='nav-link'>Contact</a>
                        </li>
                    </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;