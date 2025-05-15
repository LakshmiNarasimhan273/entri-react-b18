import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h2>React Forms & Loaders</h2>
      <Link to="/contact">Contact Form</Link> | {''}
      <Link to="/user">Load user</Link>
    </div>
  )
}

export default App