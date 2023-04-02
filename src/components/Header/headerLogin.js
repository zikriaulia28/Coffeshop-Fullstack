import React from 'react';
import Search from '../../assets/search.svg'
import Chat from '../../assets/chat.svg'
// import Profile from '../../assets/profil.svg'
import { Link } from 'react-router-dom'
// import { get } from "../../utils/localStorage"
import { useSelector } from 'react-redux';
import profilePlaceholder from '../../assets/profilePlaceholder.png';



function headerLogin() {
  const image = useSelector((state) => state.user.data.data[0].image);
  // console.log(image);
  // const [profileImage, setProfileImage] = useState();
  // useEffect(() => {
  //   // const image = get("tokokopi-token")
  //   // setProfileImage(image.image);
  // }, []);
  return (
    <ul id="menu-profile" className='flex items-center gap-5'>
      <div className="search">
        <img src={Search} alt="search" />
      </div>
      <div><img src={Chat} alt="notif-chat" /></div>
      <li className='w-8 h-8 rounded-full'>
        <Link to="/profile" ><img src={!image ? profilePlaceholder : image} alt="profil" className='w-full h-full object-cover rounded-full' /></Link >
      </li>
    </ul>
  )
}

export default headerLogin