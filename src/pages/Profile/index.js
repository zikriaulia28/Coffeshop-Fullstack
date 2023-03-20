import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ImgProfile from '../../assets/profile.webp'

function Profile() {
  return (
    <>
      <Header />
      <main className="w-full flex justify-center my-4">
        <div className="w-4/5 max-width flex flex-col">
          <h1 className="font-medium text-4xl py-4">User Profile</h1>
          <form action="">
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="w-full h-[380px] flex flex-col justify-between items-center rounded-2xl border overflow-hidden bg-white relative lg:w-2/4">
                <button className="btn w-8 h-8 flex justify-center items-center rounded-full bg-secondary cursor-pointer absolute top-28 right-[6.5rem]"><i className="bi bi-pencil text-white"></i></button>
                <span className="w-32 h-32 rounded-full border-2 overflow-hidden mt-8">
                  <img src={ImgProfile} alt="profile-picture" />
                </span>
                <h2 className="font-bold text-xl">Zulaikha</h2>
                <h3 className="text-sm text-greydark">zulaikha17@gmail.com</h3>
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
                    <input type="text" id="email" value="zulaikha17@gmail.com" className="py-2 border border-solid rounded-md pl-2" />
                  </div>
                  <div className="input flex flex-col">
                    <label htmlFor="phone" className="font-medium text-xl text-grey">Mobile number :</label>
                    <input type="text" id="phone" value="(+62)813456782" className="py-2 border border-solid rounded-md pl-2" />
                  </div>
                  <div className="input flex flex-col mb-2">
                    <label htmlFor="address" className="font-medium text-xl text-grey">Delivery address :</label>
                    <textarea name="" id="address" rows="2" className='py-2 border border-solid rounded-md pl-2'>Iskandar Street no. 67 Block A Near Bus Stop</textarea>
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
                      <input type="text" id="displayName" value="zulaikha" className="py-2 border border-solid rounded-md pl-2" />
                    </div>
                    <div className="input flex flex-col">
                      <label htmlFor="firstName" className="font-medium text-xl text-grey">First Name :</label>
                      <input type="text" id="firstName" value="zulaikha" className="py-2 border border-solid rounded-md pl-2" />
                    </div>
                    <div className="input flex flex-col">
                      <label htmlFor="lastName" className="font-medium text-xl text-grey">Last Name :</label>
                      <input type="text" id="lastName" value="zulaikha" className="py-2 border border-solid rounded-md pl-2" />
                    </div>
                  </div>
                  <div className="flex flex-1 gap-9 flex-col">
                    <div className="input flex flex-col">
                      <label htmlFor="birthDate" className="font-medium text-xl text-grey">DD/MM/YY</label>
                      <input type="date" id="birthDate" value="zulaikha17@gmail.com" className="py-2 border border-solid rounded-md pl-2" />
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
                  <button className="py-3 rounded-2xl text-secondary bg-gray-300 flex justify-between px-10">Log out <i className="bi bi-caret-right-fill text-secondary"></i></button>
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