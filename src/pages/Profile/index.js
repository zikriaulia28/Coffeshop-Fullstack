import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { remove } from '../../utils/localStorage'
import { get } from "../../utils/localStorage"
import axios from "axios";

function Profile() {
  // eslint-disable-next-line no-undef
  const baseUrl = `${process.env.REACT_APP_SERVER_HOST}`;
  const [profileData, setProfileData] = useState({});
  const [showInput, setShowInput] = useState(false);
  useEffect(() => {
    const userId = get("tokokopi-token")
    setProfileData(userId.id)
    fetchProfileData(userId);
    document.title = "Coffe Shop - Profile";
  }, [])

  const fetchProfileData = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/users/${id.id}`);
      const result = response.data.data
      setProfileData(result[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShowInput(!showInput);
  }

  const logout = () => {
    remove("tokokopi-token");
  }

  const onChangeHandler = (e) => {
    console.log(e.target.value);
  }

  return (
    <>
      <Header />
      <main className="w-full flex justify-center my-4">
        <div className="w-4/5 max-width flex flex-col">
          <h1 className="font-medium text-4xl py-4">User Profile</h1>
          <form action="">
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="w-full h-[380px] flex flex-col justify-between items-center rounded-2xl border overflow-hidden bg-white relative lg:w-2/4">
                <button className="btn w-8 h-8 flex justify-center items-center rounded-full bg-secondary cursor-pointer absolute top-28 right-[6.5rem]" onClick={handleClick}>
                  <i className="bi bi-pencil text-white"></i>
                </button>
                {showInput && <input type='file' onChange={onChangeHandler} className='z-10 fixed translate-x-14 translate-y-40' />}
                <span className="w-32 h-32 rounded-full border-2 overflow-hidden mt-8">
                  <img src={profileData.image} alt="profile-picture" />
                </span>
                <h2 className="font-bold text-xl">{profileData.display_name}</h2>
                <h3 className="text-sm text-greydark">{profileData.email}</h3>
                <p className="text-center">Has been ordered 15 products</p>
                <hr className="w-full h-4 bg-secondary" />
              </div>
              <div className="w-full flex flex-col justify-between rounded-2xl border overflow-hidden bg-white">
                <div className="flex justify-between items-center pl-8 pr-5 mt-4">
                  <h2 className="font-bold text-2xl text-greydark">Contacts</h2>
                  <button className="btn w-12 h-12 flex justify-center items-center rounded-full bg-secondary cursor-pointer"><i className="bi bi-pencil text-xl text-white"></i></button>
                </div>
                <div className="grid grid-cols-1 gap-2 ml-8 mr-14">
                  <div className="input flex flex-col">
                    <label htmlFor="email" className="font-medium text-xl text-grey">Email adress :</label>
                    <input type="text" id="email" value={profileData.email} className="py-2 border border-solid rounded-md pl-2" />
                  </div>
                  <div className="input flex flex-col">
                    <label htmlFor="phone" className="font-medium text-xl text-grey">Mobile number :</label>
                    <input type="text" id="phone" value={profileData.phone_number} className="py-2 border border-solid rounded-md pl-2" />
                  </div>
                  <div className="input flex flex-col mb-2">
                    <label htmlFor="address" className="font-medium text-xl text-grey">Delivery address :</label>
                    <textarea name="" id="address" rows="2" className='py-2 border border-solid rounded-md pl-2' value={profileData.address}></textarea>
                  </div>
                </div>
                <hr className="w-full h-4 bg-secondary" />
              </div>
            </div>
            <div className="flex flex-col gap-4 my-4 lg:flex-row">
              <div className="w-full min-h-[420px] flex flex-col justify-between rounded-2xl border overflow-hidden bg-white">
                <div className="flex justify-between items-center pl-8 pr-5 mt-4">
                  <h2 className="font-bold text-2xl text-greydark">Details</h2>
                  <button className="btn w-12 h-12 flex justify-center items-center rounded-full bg-secondary cursor-pointer"><i className="bi bi-pencil text-xl text-white"></i></button>
                </div>
                <div className="flex flex-col ml-8 mr-14 gap-5 lg:flex-row">
                  <div className="flex flex-1 gap-5 flex-col">
                    <div className="input flex flex-col">
                      <label htmlFor="displayName" className="font-medium text-xl text-grey">Display Name :</label>
                      <input type="text" id="displayName" value={profileData.display_name} className="py-2 border border-solid rounded-md pl-2" />
                    </div>
                    <div className="input flex flex-col">
                      <label htmlFor="firstName" className="font-medium text-xl text-grey">First Name :</label>
                      <input type="text" id="firstName" value={profileData.firstname} className="py-2 border border-solid rounded-md pl-2" />
                    </div>
                    <div className="input flex flex-col">
                      <label htmlFor="lastName" className="font-medium text-xl text-grey">Last Name :</label>
                      <input type="text" id="lastName" value={profileData.lastname} className="py-2 border border-solid rounded-md pl-2" />
                    </div>
                  </div>
                  <div className="flex flex-1 gap-9 flex-col">
                    <div className="input flex flex-col">
                      <label htmlFor="birthDate" className="font-medium text-xl text-grey">DD/MM/YY</label>
                      <input type="date" id="birthDate" className="py-2 border border-solid rounded-md pl-2" />
                    </div>
                    <div className="flex gap-4">
                      <div className="input-data-radio flex gap-2">
                        <input type="radio" name="gender" id="male" value="male" className="hidden" />
                        <span></span>
                        <label htmlFor="male" className="font-medium text-xl text-grey cursor-pointer">Male</label>
                      </div>
                      <div className="input-data-radio flex gap-2">
                        <input type="radio" name="gender" id="female" value="female" className="hidden" checked />
                        <span></span>
                        <label htmlFor="female" className="font-medium text-xl text-grey cursor-pointer">Female</label>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="w-full h-4 bg-secondary" />
              </div>
              <div className="flex min-w-[300px] max-w-sm flex-col justify-between pb-6">
                <h3 className="font-bold text-xl text-center text-white">Do you want to save the change?</h3>
                <div className="flex flex-col gap-5">
                  <button className="py-3 rounded-2xl text-white bg-secondary">Save Change</button>
                  <button className="py-3 rounded-2xl text-secondary bg-primary">Cancel</button>
                </div>
                <div className="flex flex-col gap-5 mt-4">
                  <button className="py-3 rounded-2xl text-secondary bg-gray-300 flex justify-between px-10">Edit Password <i className="bi bi-caret-right-fill text-secondary"></i></button>
                  <button className="py-3 rounded-2xl text-secondary bg-gray-300 flex justify-between px-10" onClick={logout}>Log out <i className="bi bi-caret-right-fill text-secondary"></i></button>
                </div>
              </div>

            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Profile