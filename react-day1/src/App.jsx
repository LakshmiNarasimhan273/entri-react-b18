import React from 'react'
import Home from './components/Home'

function App() {
  const name = "ECommerce application"
  return (
    <div>
      <Home name={name} />
    </div>
  )
}

export default App