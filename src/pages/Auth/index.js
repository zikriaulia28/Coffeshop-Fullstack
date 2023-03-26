import React from 'react'
import Icongoogle from '../../assets/google-logo.svg'
import { login } from "../../utils/https/auth";
import { save } from "../../utils/localStorage";
import { Link } from 'react-router-dom'

function Login() {
  const controller = React.useMemo(() => new AbortController(), []);
  //   const [email, setEmail] = React.useState("");
  //   const [pwd, setPwd] = React.useState("");
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  const loginHandler = (e) => {
    e.preventDefault();
    login(form.email, form.password, controller)
      .then((res) => {
        // console.log(res.data);
        const key = "tokokopi-token";
        save(key, res.data.token);
      })
      .catch((err) => console.log(err));
  };
  const onChangeForm = (e) =>
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  return (
    <form id="formSign" className="form-signup mt-10 px-8 flex flex-col gap-4 mb-3">
      <label htmlFor='emailInput'>Email Address :</label>
      <input type="text" placeholder="Enter your email address" id="emailInput" className='w-full rounded-xl px-4 py-2 text-black lg:border lg:border-black' value={form.email} onChange={onChangeForm} name="email" />
      <span id="emailError"></span>
      <div className="circle-check" id="circleCheck"></div>

      <label htmlFor='passwordInput'>Password :</label>
      <input type="password" placeholder="Enter your password" id="passwordInput" className='w-full rounded-xl px-4 py-2 text-black lg:border lg:border-black' value={form.password} onChange={onChangeForm} name="password" />
      <span id="passwordError"></span>
      <div className="circle-check" id="circleCheck1"></div>


      <Link to="/forgot" className='underline text-secondary'>Forgot password?</Link>

      <span id="submitError"></span>
      <button className="pointer py-2 bg-primary text-secondary font-bold rounded-lg cursor-pointer" onClick={loginHandler} >Sign Up</button>
      <button className="cursor-pointer py-2 flex justify-center bg-bgsecondary lg:shadow-md rounded-lg">
        <img src={Icongoogle} alt="icon-google" />
        <p className="btn-txt text-black">Sign up with Google</p>
      </button>
      {/* Overlay dan modal */}
      <div className="overlay" id="overlay"></div>
      <div className="modal" id="modal"></div>
    </form>
  );
}

function Register() {
  return (
    <form id="formSign" className="form-signup mt-10 px-8 flex flex-col gap-4 mb-3">
      <div className="input-form">
        <label htmlFor='emailInput'>Email Address :</label>
        <input type="text" placeholder="Enter your email address" id="emailInput" className='w-full rounded-xl px-4 py-2 text-black lg:border lg:border-black' />
        <span id="emailError"></span>
        <div className="circle-check" id="circleCheck"></div>
      </div>
      <div className="input-form">
        <label htmlFor='passwordInput'>Password :</label>
        <input type="password" placeholder="Enter your password" id="passwordInput" className='w-full rounded-xl px-4 py-2 text-black lg:border lg:border-black' />
        <span id="passwordError"></span>
        <div className="circle-check" id="circleCheck1"></div>
      </div>
      <div className="input-form">
        <label htmlFor='numInput'>Phone Number :</label>
        <input type="text" placeholder="Enter your phone number" id="numInput" className='w-full rounded-xl px-4 py-2 text-black lg:border lg:border-black' />
        <span id="numError"></span>
        <div className="circle-check" id="circleCheck2"></div>
      </div>
      <span id="submitError"></span>
      <button className="pointer py-2 bg-primary text-secondary font-bold rounded-lg cursor-pointer" type="submit" >Sign Up</button>
      <button className="cursor-pointer py-2 flex justify-center bg-bgsecondary lg:shadow-md rounded-lg">
        <img src={Icongoogle} alt="icon-google" />
        <p className="btn-txt text-black">Sign up with Google</p>
      </button>
      {/* Overlay dan modal */}
      <div className="overlay" id="overlay"></div>
      <div className="modal" id="modal"></div>
    </form>
  );
}

function Auth() {
  const [mode, setMode] = React.useState("Login");
  return (
    <main className="h-screen bg-gray-500 text-slate-300 flex flex-col">
      <div className="flex justify-center gap-5 py-4">
        <button className="btn" onClick={() => setMode("Login")}>
          Login
        </button>
        <button className="btn" onClick={() => setMode("Register")}>
          Register
        </button>
      </div>
      <section className="bg-gray-700 flex-1 p-8">
        {mode === "Login" ? <Login /> : <Register />}
      </section>
    </main>
  );
}

export default Auth