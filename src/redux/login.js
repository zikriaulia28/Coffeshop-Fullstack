import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../utils/https/auth';
// import { selectAuth } from './reducers/authSlice';
import { userAction } from './slices/auth';
import Footer from '../../src/components/Footer';
import Bgsignup from '../../src/assets/bg-signIn.webp';
import Iconcoffer from '../../src/assets/icon-coffee.svg';
import Icongoogle from '../../src/assets/google-logo.svg';


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const controller = useMemo(() => new AbortController(), []);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    document.title = 'Coffee Shop - Login';
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (form.email === '' && form.password === '') {
        setLoading(false);
        setInvalid(true);
        setMsg('Input is required!!!');
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        setMsg('Email is invalid!');
        setInvalid(true);
        setLoading(false);
        return;
      }
      const res = await login(form.email, form.password, controller);
      console.log(res.data.data);
      const token = res.data.token;
      const id = res.data.id;
      const role_id = res.data.role_id;
      const image = res.data.image;
      // console.log('cek role', role);
      dispatch(userAction.authLogin({ id, token, role_id, image }));
      setLoading(false);
      handleRedirect();
    } catch (error) {
      setLoading(false);
      setMsg(error.response);
      setInvalid(true);
    }
  };

  const onChangeForm = (e) =>
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));

  const handleRedirect = () => {
    navigate('/home');
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setIsPasswordVisible((prevState) => !prevState);
  }


  return (
    <>
      <main>
        <section>
          <div className="flex">
            <div className="background relative z-1 md:h-[650px] md:w-screen lg:w-2/4 lg:h-screen">
              <img src={Bgsignup} alt="background" className='w-full h-full object-cover md:object-cover' />
            </div>
            <div className="signup absolute z-2 text-bgsecondary bg-overlay px-5 py-8 w-full h-[635px] md:h-[650px] md:px-20 lg:relative lg:bg-bgsecondary lg:w-2/4 lg:text-black">
              <div className="header-signup flex justify-between">
                <div className="logo-icon flex items-center gap-4">
                  <img src={Iconcoffer} alt="icon-coffee" />
                  <div className="title-txt pointer font-bold lg:text-xl">Coffee Shop</div>
                </div>
                <div className="btn-signup flex items-center justify-center bg-primary px-4 rounded-xl cursor-pointer lg:px-8">
                  <Link to="/signup">SignUp</Link>
                </div>
              </div>
              <p className="title-signup text-center font-bold text-xl mt-10 lg:text-3xl">Login</p>
              <form id="formSign" className="form-signup mt-10 px-8 flex flex-col gap-2 mb-3">
                <label htmlFor='emailInput'>Email Address :</label>
                <input type="text" placeholder="Enter your email address" id="emailInput" className='w-full rounded-xl px-4 py-2 border border-gray-300 outline-none  focus:ring-secondary focus:border-secondary focus:ring-1' value={form.email} onChange={onChangeForm} name="email" />
                <span id="emailError"></span>
                <div className="circle-check" id="circleCheck"></div>

                <label htmlFor='passwordInput'>Password :</label>
                <div className="relative w-full  container">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 text-base rounded-xl border border-gray-300 outline-none  focus:ring-secondary focus:border-secondary focus:ring-1"
                    id="passwordInput"
                    value={form.password} onChange={onChangeForm} name="password"
                  />
                  <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600" onClick={togglePasswordVisibility}>
                    {isPasswordVisible ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <span id="passwordError"></span>
                <div className="circle-check" id="circleCheck1"></div>

                <Link to="/forgot" className='underline text-secondary'>Forgot password?</Link>

                <span id="submitError"></span>
                <button className="pointer py-2 bg-primary text-secondary font-bold rounded-lg cursor-pointer" onClick={loginHandler} >Login</button>
                <button className="cursor-pointer py-2 flex justify-center bg-bgsecondary lg:shadow-md rounded-lg">
                  <img src={Icongoogle} alt="icon-google" />
                  <p className="btn-txt text-black">Sign up with Google</p>
                </button>
                {/* Overlay dan modal */}
                <div className="overlay" id="overlay"></div>
                <div className="modal" id="modal"></div>
                {loading && <div>Loading...</div>}
                <div className='text-red-600'>
                  {invalid && msg}
                </div>
              </form>
            </div>
          </div>
          <div className="card bg-bgsecondary  w-5/6 px-5 py-4 absolute rounded-2xl shadow-sm translate-x-9 -translate-y-14 md:w-4/5 md:translate-x-20 lg:px-10 lg:py-8 lg:-translate-y-20 lg:translate-x-32">
            <div className="card-member flex items-center justify-between">
              <div className="card-txt">
                <p className="card-title font-bold text-2xl">Get your member<br />card now!</p>
                <p className="card-desc text-xs">Let`s join with our member and enjoy the deals.</p>
              </div>
              <div className="btn-create px-2 py-2 h-fit rounded-2xl pointer bg-primary text-center text-xs">Create Now</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Login