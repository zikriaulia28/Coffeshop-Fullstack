import React from 'react'
import Search from '../../assets/search.svg'
import Chat from '../../assets/chat.svg'
import Profile from '../../assets/profil.svg'
import { Link } from 'react-router-dom'

function headerLogin() {
  return (
    <ul id="menu-profile" className='flex items-center gap-5'>
      <div className="search">
        <img src={Search} alt="search" />
      </div>
      <div><img src={Chat} alt="notif-chat" /></div>
      <li><Link to="/profile" ><img src={Profile} alt="profil" /></Link ></li>
    </ul>
  )
}

export default headerLogin