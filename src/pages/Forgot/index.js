import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Bgforgot from '../../assets/bg-forgot.webp'
import { getOtp, forgot } from "../../utils/https/auth";
import { Dialog } from '@headlessui/react'

function Forgot() {
  const [email, setEmail] = React.useState("");
  const [timeLeft, setTimeLeft] = React.useState({ minutes: 0, seconds: 0 });
  const [form, setForm] = React.useState({ otp: "", password: "" });
  const [otp, setOtp] = useState();
  const [error, setError] = React.useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const emailSubmitHandler = (e) => {
    e.preventDefault();

    let invalid = "";

    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm;

    if (!email) {
      invalid = "Email is required";
    } else if (!emailRegex.test(email)) {
      invalid = "Invalid email";
    }

    setError(invalid);

    if (invalid === "") {
      getOtp(email)
        .then((res) => {
          console.log(res.data);
          setOtp(res.data.data)
          setTimeLeft({ minutes: 2, seconds: 0 });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // handleOpenDialog()
  };

  // const handleOpenDialog = () => {
  //   setIsDialogOpen(true);
  // };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      const { seconds, minutes } = timeLeft;

      if (seconds > 0) {
        setTimeLeft({ ...timeLeft, seconds: seconds - 1 });
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setTimeLeft(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = timeLeft.minutes;
  const seconds = timeLeft.seconds;

  const onChangeForm = (e) => {
    setForm((form) => {
      return { ...form, [e.target.name]: e.target.value };
    });
  };

  const otpSubmitHandler = (e) => {
    e.preventDefault();

    forgot(email, form.otp, form.password)
      .then((res) => {
        console.log(res.data.data);
        setTimeLeft({ minutes: 0, seconds: 0 });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    document.title = "Coffe Shop - Forgot";
  }, [])
  return (
    <>
      <main>
        <section className="container-logot flex text-white">
          <div className='z-1 relative h-screen w-screen'>
            <img src={Bgforgot} className='w-full h-full object-cover' />
          </div>
          <div className="logot z-2 absolute w-full h-full p-10 lg:p-28">
            <div>
              <h1 className="forgot-title text-center font-bold text-2xl lg:text-4xl lg:mb-4">Forgot your password?</h1>
              <p className="forgot-desc text-center mb-8">Don`t worry, we got your back!</p>
            </div>
            {timeLeft.minutes < 2 &&
              timeLeft.minutes > 0 &&
              timeLeft.minutes > 0 &&
              timeLeft.seconds > 0 ? (
              <form className="px-8 flex flex-col gap-4 md:px-32 lg:px-80">
                <div className="form-content-wrapper flex flex-col gap-2" id="email-wrapper">
                  <input
                    type="text"
                    name="otp"
                    placeholder="Enter your OTP code"
                    id="otp"
                    className="text-black px-4 py-2 rounded-xl mb-4"
                    value={form.otp}
                    onChange={onChangeForm}
                  />
                </div>
                <div className="form-content-wrapper flex flex-col gap-2" id="email-wrapper">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your new password"
                    id="password"
                    className="text-black px-4 py-2 rounded-xl mb-4"
                    value={form.password}
                    onChange={onChangeForm}
                  />
                </div>
                <button
                  type="button"
                  id="send-btn"
                  className="bg-primary cursor-pointer rounded-lg py-2"
                  onClick={otpSubmitHandler}
                >
                  Send
                </button>

              </form>
            ) : (
              <form id="formForgot" className='px-8 flex flex-col gap-12 md:px-32 lg:px-80'>
                <div className="form-email flex flex-col ">
                  <input type="email" name="email" placeholder="Enter your email address" id="emailInput" className='text-black px-4 py-2 rounded-xl mb-4' onChange={onChangeEmail} />
                  {error !== "" ? <div className="font-poppins text-red-700">{error}</div> : null}
                  <div className="circle-check" id="circleCheck"></div>
                  <button className="bg-primary cursor-pointer rounded-lg py-2" onClick={emailSubmitHandler}>
                    Send
                  </button>
                </div>
                <div className="resend flex flex-col">
                  <p className="resend-txt text-center lg:text-3xl lg:font-semibold mb-4">Click here if you didn`t receive any link <br /> in 2 minutes</p>
                  <button className="cursor-pointer bg-secondary rounded-lg py-2" type='submit'>
                    Resend Link
                  </button>
                  <p className="resend-time text-center">
                    {`0${minutes}`}:{seconds < 10 ? `0${seconds}` : seconds}
                  </p>
                </div>
              </form>
            )}
            {/* Overlay dan modal */}
            <Dialog open={isDialogOpen} onClose={handleCloseDialog} className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white w-fit p-6 rounded-lg shadow-lg text-center">
                  <h2 className='text-2xl font-bold mb-2'>OTP</h2>
                  <div className='px-8'>
                    <p className='mb-4'>{otp}</p>
                    <button onClick={() => setIsDialogOpen(false)} className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-900">Close</button>
                  </div>
                </div>
              </div>
            </Dialog>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Forgot