import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import profilePlaceholder from '../../assets/profilePlaceholder.png';
// import { remove } from '../../utils/localStorage'
import { updateProfile, fetchProfileData } from "../../utils/https/auth";
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectAuth } from '../../redux/reducers/authSlice';
import { Dialog } from '@headlessui/react'


function Profile() {
  // const controller = React.useMemo(() => new AbortController(), []);
  const [profileData, setProfileData] = useState({});
  const [showInput, setShowInput] = useState(false);
  const [editContact, setEditContact] = useState(false);
  const [editDetails, setEditDetails] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [form, setForm] = React.useState({
    image: null,
    display_name: '',
    firstname: '',
    lastname: '',
    address: '',
    birth_day: '',
  });
  const id = useSelector((state) => state.auth.data.id);
  const token = useSelector((state) => state.auth.data.token);
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
  useEffect(() => {
    if (id) {
      fetchProfileData(id).then((result) => setProfileData(result));
    }
    document.title = "Coffe Shop - Profile";
  }, [id]);

  const handleClick = (e) => {
    e.preventDefault();
    setShowInput(!showInput);
  }

  const logouts = () => {
    dispatch(logout());
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    console.log(value);
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: files[0] }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProfile(id, token, form.display_name, form.firstname, form.lastname, form.address, form.birth_day, form.image)
      .then(data => {
        console.log(data.data[0]);
        setShowInput(false);
        setEditContact(false)
      })
      .catch((err) => console.log(err));
  };

  const toggleEditContact = (e) => {
    e.preventDefault();
    setEditContact(!editContact);
  }
  const toggleEditDetails = (e) => {
    e.preventDefault();
    setEditDetails(!editDetails);
  }

  const onChangeForm = (e) =>
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  // modal dialog
  const handleOpenDialog = (e) => {
    e.preventDefault();
    setIsDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setOldPassword('');
    setNewPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan validasi atau aksi lainnya di sini
  };

  const birthDay = moment(profileData.birth_day).format('YYYY-MM-DD');



  return (
    <>
      <Header />
      <main className="w-full flex justify-center my-4">
        <div className="w-4/5 max-width flex flex-col">
          <h1 className="font-medium text-4xl py-4">User Profile</h1>
          <form>
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className=" w-full h-[380px] flex flex-col justify-between items-center rounded-2xl border overflow-hidden bg-white relative lg:w-2/4">
                <button className="btn w-8 h-8 flex justify-center items-center rounded-full bg-secondary cursor-pointer relative translate-x-[3.7rem] translate-y-24" onClick={handleClick}>
                  <i className="bi bi-pencil text-white"></i>
                </button>
                <span className="w-32 h-32 rounded-full border-2 overflow-hidden">
                  <img src={!profileData.image ? profilePlaceholder : profileData.image} alt="profile-picture" className='w-full h-full rounded-full object-cover' />
                </span>
                {showInput && (
                  <input id="image" name="image" type='file' onChange={handleImageChange} className='w-2/3 text-sm absolute translate-y-48' />
                )}
                <h2 className="font-bold text-xl pt-8">{profileData.display_name}</h2>
                <h3 className="text-sm text-greydark">{profileData.email}</h3>
                <p className="text-center">Has been ordered 15 products</p>
                <hr className="w-full h-4 bg-secondary" />
              </div>
              <div className="w-full flex flex-col justify-between rounded-2xl border overflow-hidden bg-white">
                <div className="flex justify-between items-center pl-8 pr-5 mt-4">
                  <h2 className="font-bold text-2xl text-greydark">Contacts</h2>
                  <button className="btn w-12 h-12 flex justify-center items-center rounded-full bg-secondary cursor-pointer" onClick={toggleEditContact}><i className="bi bi-pencil text-xl text-white"></i></button>
                </div>
                <div className="grid grid-cols-1 gap-2 ml-8 mr-14">
                  <div className="input flex flex-col">
                    <label htmlFor="email" className="font-medium text-xl text-grey">Email adress :</label>
                    <input type="text" id="email" defaultValue={profileData.email} onChange={onChangeForm} name="email" className="py-2 border border-solid rounded-md pl-2" disabled={!editContact} />
                  </div>
                  <div className="input flex flex-col">
                    <label htmlFor="phone" className="font-medium text-xl text-grey">Mobile number :</label>
                    <input type="text" id="phone" name="phone_number" defaultValue={profileData.phone_number} className="py-2 border border-solid rounded-md pl-2" disabled={!editContact} />
                  </div>
                  <div className="input flex flex-col mb-2">
                    <label htmlFor="address" className="font-medium text-xl text-grey">Delivery address :</label>
                    <textarea name="address" id="address" rows="2" className='py-2 border border-solid rounded-md pl-2' defaultValue={profileData.address} onChange={handleInputChange} disabled={!editContact}></textarea>
                  </div>
                </div>
                <hr className="w-full h-4 bg-secondary" />
              </div>
            </div>
            <div className="flex flex-col gap-4 my-4 lg:flex-row">
              <div className="w-full min-h-[420px] flex flex-col justify-between rounded-2xl border overflow-hidden bg-white">
                <div className="flex justify-between items-center pl-8 pr-5 mt-4">
                  <h2 className="font-bold text-2xl text-greydark">Details</h2>
                  <button className="btn w-12 h-12 flex justify-center items-center rounded-full bg-secondary cursor-pointer" onClick={toggleEditDetails}><i className="bi bi-pencil text-xl text-white"></i></button>
                </div>
                <div className="flex flex-col ml-8 mr-14 gap-5 lg:flex-row">
                  <div className="flex flex-1 gap-5 flex-col">
                    <div className="input flex flex-col">
                      <label htmlFor="displayName" className="font-medium text-xl text-grey">Display Name :</label>
                      <input type="text" id="displayName" name='display_name' defaultValue={profileData.display_name} className="py-2 border border-solid rounded-md pl-2" onChange={handleInputChange} disabled={!editDetails} />
                    </div>
                    <div className="input flex flex-col">
                      <label htmlFor="firstName" className="font-medium text-xl text-grey">First Name :</label>
                      <input type="text" id="firstName" name='firstname' defaultValue={profileData.firstname} className="py-2 border border-solid rounded-md pl-2" onChange={handleInputChange} disabled={!editDetails} />
                    </div>
                    <div className="input flex flex-col">
                      <label htmlFor="lastName" className="font-medium text-xl text-grey">Last Name :</label>
                      <input type="text" id="lastName" name='lastname' defaultValue={profileData.lastname} className="py-2 border border-solid rounded-md pl-2" onChange={handleInputChange} disabled={!editDetails} />
                    </div>
                  </div>
                  <div className="flex flex-1 gap-9 flex-col">
                    <div className="input flex flex-col">
                      <label htmlFor="birthDate" className="font-medium text-xl text-grey">DD/MM/YY</label>
                      <input type="date" id="birthDate" name='birth_day' defaultValue={birthDay} className="py-2 border border-solid rounded-md pl-2" onChange={handleInputChange} disabled={!editDetails} />
                    </div>
                    <div className="flex gap-4">
                      <div className="input-data-radio flex gap-2">
                        <input type="radio" name="gender" id="male" value="male" className="hidden" readOnly disabled={!editDetails} />
                        <span></span>
                        <label htmlFor="male" className="font-medium text-xl text-grey cursor-pointer">Male</label>
                      </div>
                      <div className="input-data-radio flex gap-2">
                        <input type="radio" name="gender" id="female" value="female" className="hidden" readOnly disabled={!editDetails} />
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
                  <button className="py-3 rounded-2xl text-white bg-secondary" onClick={handleUpdate}>Save Change</button>
                  <button className="py-3 rounded-2xl text-secondary bg-primary">Cancel</button>
                </div>
                <div className="flex flex-col gap-5 mt-4">
                  <button onClick={handleOpenDialog} className="py-3 rounded-2xl text-secondary bg-gray-300 flex justify-between px-10">Edit Password <i className="bi bi-caret-right-fill text-secondary"></i></button>
                  {auth.data.token ? (
                    <button className="py-3 rounded-2xl text-secondary bg-gray-300 flex justify-between px-10" onClick={logouts}>
                      Log out <i className="bi bi-caret-right-fill text-secondary"></i>
                    </button>
                  ) :
                    (
                      <button className="py-3 rounded-2xl text-secondary bg-gray-300 flex justify-between px-10" onClick={logouts}>
                        Log out <i className="bi bi-caret-right-fill text-secondary"></i>
                      </button>
                    )
                  }
                </div>
              </div>

            </div>
          </form>
          <Dialog open={isDialogOpen} onClose={handleCloseDialog} className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div className="bg-white w-fit p-6 rounded-lg shadow-lg text-center">
                <h2 className='text-2xl font-bold mb-2'>Ubah Password</h2>
                <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                  <div className='flex justify-between'>
                    <label htmlFor="oldPassword" className="font-medium text-xl text-grey">Old Password :</label>
                    <input type="password" id="oldPassword" name='oldPassword' defaultValue={oldPassword} className="py-2 border border-solid rounded-md pl-2" onChange={handleInputChange} />
                  </div>
                  <div className='flex justify-between'>
                    <label htmlFor="newPassword" className="font-medium text-xl text-grey">New Password :</label>
                    <input type="password" id="newPassword" name='newPassword' defaultValue={newPassword} className="py-2 border border-solid rounded-md pl-2" onChange={handleInputChange} />
                  </div>
                  <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Save</button>
                  <button onClick={() => setIsDialogOpen(false)} className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-900">Close</button>
                </form>
              </div>
            </div>
          </Dialog>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Profile