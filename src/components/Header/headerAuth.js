import React from 'react'
import { Link } from 'react-router-dom'

function headerAuth() {
  return (
    <ul className="flex items-center gap-5" id="menu-profile">
      <li><Link to="/" className="font-medium tracking-wide hover:text-primary transition-colors">Login</Link></li>
      <li><button className="bg-primary py-2 px-6 rounded-full text-white font-medium tracking-wide hover:bg-primary-dark transition-colors"><Link to="/signup">Sign Up</Link></button></li>
    </ul>
  )
}

export default headerAuth;