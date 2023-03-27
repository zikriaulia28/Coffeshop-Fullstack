import React, { useState, useEffect } from 'react';
import Search from '../../assets/search.svg'
import Chat from '../../assets/chat.svg'
// import Profile from '../../assets/profil.svg'
import { Link } from 'react-router-dom'
import { get } from "../../utils/localStorage"

function headerLogin() {
  const [profileImage, setProfileImage] = useState(null);
  useEffect(() => {
    const image = get("tokokopi-token")
    setProfileImage(image.image);
  }, []);
  return (
    <ul id="menu-profile" className='flex items-center gap-5'>
      <div className="search">
        <img src={Search} alt="search" />
      </div>
      <div><img src={Chat} alt="notif-chat" /></div>
      <li className='w-8 h-8 rounded-full'>
        <Link to="/profile" ><img src={profileImage} alt="profil" className='w-full h-full object-cover rounded-full' /></Link >
      </li>
    </ul>
  )
}

export default headerLogin