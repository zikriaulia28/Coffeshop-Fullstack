/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from 'react'
import iconCoffe from "../../assets/icon-coffee.svg"
import humberger from "../../assets/menu-icon.svg"
import { Link } from 'react-router-dom'
import HeaderAuth from './headerAuth'
import HeaderLogin from './headerLogin'



function Header() {
  const login = false;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    // Disable scrolling when the menu is open
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className="w-full border-b border-solid px-4 md:px-20 lg:px-36 bg-bgprimary">
      <nav className="flex justify-between items-center h-20">
        <div className="flex items-center gap-3 select-none">
          <img src={iconCoffe} alt="icon-coffee" className="w-6 h-6" />
          <h1 className="text-lg font-bold tracking-wide">Coffee Shop</h1>
        </div>
        <div className={`fixed py-4 top-20 left-0 z-10 w-full h-3/5 bg-secondary lg:bg-opacity-0 lg:relative lg:w-auto lg:h-auto lg:flex lg:top-0 lg:items-center lg:justify-end lg:gap-40 ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="pb-4 lg:flex lg:items-center lg:gap-18 lg:pb-0">
            <ul className="flex flex-col items-center gap-8 lg:flex-row lg:gap-8" id="menu-list">
              <li><Link to="/home" className="font-medium tracking-wide hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/product" className="font-medium tracking-wide hover:text-secondary transition-colors">Product</Link></li>
              <li><Link to="/payment" className="font-medium tracking-wide hover:text-secondary transition-colors">Your Cart</Link></li>
              <li><Link to="/history" className="font-medium tracking-wide hover:text-secondary transition-colors">History</Link></li>
            </ul>
          </div>
          <div className="flex justify-center border-t border-solid py-4 lg:relative lg:bg-opacity-0 lg:border-none">
            {login ? <HeaderLogin /> : <HeaderAuth />}
          </div>
        </div>
        <img fetchpriority="low" src={humberger} alt="menu-icon" className="w-7 h-7 cursor-pointer select-none lg:hidden" id="hamburger" onClick={toggleMenu} />
      </nav>
    </header>


  )
}

export default Header