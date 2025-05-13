import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/dashboard/profile">Profile</Link></li>
                <li><Link to="/dashboard/settings">Settings</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Home