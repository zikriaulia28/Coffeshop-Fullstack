import React, { Component, Fragment } from 'react'
import Footer from '../../components/Footer'
import Bgforgot from '../../assets/bg-forgot.webp'

class Forgot extends Component {
  render() {
    return (
      <Fragment>
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
              <form id="formForgot" className='px-8 flex flex-col gap-12 md:px-32 lg:px-80'>
                <div className="form-email flex flex-col ">
                  <input type="text" placeholder="Enter your email address" id="emailInput" className='text-black px-4 py-2 rounded-xl' />
                  <span id="emailError" className='text-red-600'>test</span>
                  <div className="circle-check" id="circleCheck"></div>
                  <button className="bg-primary cursor-pointer">Send</button>
                  <span id="submitError" className="submitError text-red-600">text</span>
                </div>
                <div className="resend flex flex-col">
                  <p className="resend-txt text-center lg:text-3xl lg:font-semibold mb-4">Click here if you didn`t receive any link <br /> in 2 minutes</p>
                  <button className="btn-resend cursor-pointer bg-secondary">Resend Link</button>
                  <p className="resend-time text-center">01:54</p>
                </div>
              </form>
              {/* Overlay dan modal */}
              <div className="overlay" id="overlay"></div>
              <div className="modal" id="modal">
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </Fragment>
    )
  }
}

export default Forgot