/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import React from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import withSearchParams from "../../utils/wrapper/withSearchParams"
import Benefit from "../../assets/benefit.webp"
import Maps from "../../assets/map.svg"
import Netflix from "../../assets/netflix.webp"
import Reddit from "../../assets/reddit.webp"
import Amazon from "../../assets/amazon.webp"
import Discord from "../../assets/discord.webp"
import Spotify from "../../assets/spotify.webp"
import Ceklist from "../../assets/checklist.svg"
import Latte from "../../assets/p5.webp"
import Pinky from "../../assets/fav2.webp"
import Chicken from "../../assets/fav3.webp"
import Testi1 from "../../assets/testi1.webp"
import Testi2 from "../../assets/testi2.webp"
import Testi3 from "../../assets/testi3.webp"



function Home() {
  return (
    <>
      <Header />
      <section className="hero w-full h-screen bg-center py-8 px-4 bg-home lg:px-36">
        <h1 className="font-bold text-3xl md:text-5xl leading-8 md:leading-[70px] max-w-xl text-white mb-3 md:mb-4">Start Your Day with Coffee and Good Meals</h1>
        <p className="font-medium md:font-bold text-base md:text-xl leading-7 max-w-xl text-white mb-7 md:mb-8">We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
        <a href="#" className="px-4 py-2 rounded-2xl bg-primary text-secondary  md:mb-56">Get Started</a>
      </section>

      {/* <!--CARDs --> */}
      <section className="flex w-4/5 md:w-11/12 lg:w-4/5 relative py-2 md:py-4 translate-x-10 -translate-y-14 md:-translate-y-12 lg:translate-x-36 lg:py-8 lg:-translate-y-16 justify-evenly items-center rounded-xl bg-white shadow-xl">
        <div className="flex flex-col md:flex-row justify-center items-center sm:justify-evenly xl:justify-center xl:gap-9 w-full h-full">
          {/* <!-- STAFF --> */}
          <div className="flex w-10 h-10 md:w-14 md:h-14 items-center justify-center rounded-full bg-primary">
            <i className="bi bi-person-fill text-secondary text-2xl"></i>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-xl md:text-2xl">90+</h2>
            <p className="text-sm md:text-base text-greydark">Staff</p>
          </div>
        </div>
        {/* <!-- LOCATION--> */}
        <div className="flex flex-col md:flex-row justify-center items-center sm:justify-evenly xl:justify-center xl:gap-9 w-full h-full border-x-2 border-[#EEEFF2]">
          <div className="flex w-10 h-10 md:w-14 md:h-14 items-center justify-center rounded-full bg-primary">
            <i className="bi bi-geo-alt-fill text-secondary text-2xl"></i>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-xl md:text-2xl">30+</h2>
            <p className="text-sm md:text-base text-greydark">Stores</p>
          </div>
        </div>
        {/* <!-- CUSTOMER--> */}
        <div className="flex flex-col md:flex-row justify-center items-center sm:justify-evenly xl:justify-center xl:gap-9 w-full h-full">
          <div className="flex w-10 h-10 md:w-14 md:h-14 items-center justify-center rounded-full bg-primary">
            <i className="bi bi-heart-fill text-secondary text-2xl"></i>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-xl md:text-2xl">800+</h2>
            <p className="text-sm md:text-base text-greydark">Customers</p>
          </div>
        </div>
      </section>

      {/* <!-- TEAMWORK --> */}
      <section className="flex h-screen flex-col items-center px-4 lg:px-36">
        <div className="flex flex-col md:flex-row w-full md:gap-[10%]">
          <img src={Benefit} alt="" className="md:w-1/2 h-fit w-screen" />
          <div className="flex flex-col md:w-1/2 justify-center">
            <h3 className="font-medium text-2xl md:text-3xl md:leading-[50px]">We Provide Good Coffee and Healthy Meals</h3>
            <p className="text-sm md:text-base leading-6 md:leading-7 my-4 md:my-6">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
            <ul className="text-xs md:text-sm leading-6 md:leading-8">
              <li className="flex gap-2 md:gap-4 items-center "><img src={Ceklist} alt="" /> High quality beans</li>
              <li className="flex gap-2 md:gap-4"><img src={Ceklist} alt="" /> Healthy meals, you can request the ingredients</li>
              <li className="flex gap-2 md:gap-4"><img src={Ceklist} alt="" /> Chat with our staff to get better experience for ordering</li>
              <li className="flex gap-2 md:gap-4"><img src={Ceklist} alt="" /> Free member card with a minimum purchase of IDR 200.000.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f885]  flex justify-center mt-10 py-4 px-4 lg:px-36">
        <main className="flex flex-col items-center">
          {/* <!-- FAVORITE PEOPLE --> */}
          <h3 className="font-medium text-2xl md:text-3xl ">Here is People’s Favorite</h3>
          <p className="text-center text-greydark text-sm md:text-base leading-6 md:leading-7 my-4 md:my-6">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
          {/* <!-- CARD-FAVORITE CONTAINER --> */}
          <div className="w-5/6 flex flex-col items-center lg:flex-row gap-12 pt-9 md:pt-20 pb-14 md:pb-28 md:justify-center">
            {/* <!-- CARD-FAV-1 --> */}
            <div className="w-5/6 md:w-80 md:h-[760px] p-3 md:pt-16 md:pb-12 grid grid-cols-2 gap-2 md:flex md:flex-col md:justify-between items-center border-2 border-grey rounded-xl">
              <div className="w-28 h-28 rounded-full">
                <img src={Latte} alt="" className='w-full h-full object-cover object-right-bottom rounded-full' />
              </div>
              <h4 className="font-medium text-lg text-center">Hazelnut Latte</h4>
              <ul className="card-fav-list text-xs sm:text-sm md:flex flex-col gap-6">
                <li>HazelnutSyrup</li>
                <li>Wanilla Whipped Cream</li>
                <li>Ice / Hot</li>
                <li>Sliced Banana on Top</li>
              </ul>
              <h5 className="font-medium text-lg sm:text-2xl text-center">IDR 25.000</h5>
              <a href="" className="w-full sm:w-44 h-11 font-bold text-secondary flex justify-center items-center border rounded-3xl border-primary">Order Now</a>
            </div>
            {/* <!-- CARD-FAV-2 --> */}
            <div className="w-5/6 md:w-80 md:h-[760px] p-3 md:pt-16 md:pb-12 grid grid-cols-2 gap-3 md:flex md:flex-col md:justify-between items-center border-2 border-grey rounded-xl">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden">
                <img src={Pinky} alt="" />
              </div>
              <h4 className="font-medium text-lg text-center">Pink Promise</h4>
              <ul className="card-fav-list text-xs sm:text-sm md:flex flex-col gap-6">
                <li>1 Shot of Coffee</li>
                <li>Vanilla Whipped Cream</li>
                <li>Chocolate Biscuits</li>
                <li>Strawberry Syrup</li>
                <li>Sliced strawberry on Top</li>
              </ul>
              <h5 className="font-medium text-lg sm:text-2xl text-center">IDR 30.000</h5>
              <a href="" className="w-full sm:w-44 h-11 font-bold text-secondary flex justify-center items-center border rounded-3xl border-primary">Order Now</a>
            </div>
            {/* <!-- CARD-FAV-3 --> */}
            <div className="card-fav w-5/6 md:w-80 md:h-[760px] p-3 md:pt-16 md:pb-12 grid grid-cols-2 gap-3 md:flex md:flex-col md:justify-between items-center border-2 border-grey rounded-xl">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden">
                <img src={Chicken} alt="" />
              </div>
              <h4 className="font-medium text-lg text-center">Chicken Wings</h4>
              <ul className="card-fav-list text-xs sm:text-sm md:flex flex-col gap-6">
                <li>Wings</li>
                <li>Drum Sticks</li>
                <li>Mayonaise and Lemon</li>
                <li>Hot Fried</li>
                <li>Mayonaise and Lemon</li>
                <li>Buy 1 Get 1 only for Dine in</li>
              </ul>
              <h5 className="font-medium text-lg sm:text-2xl text-center">IDR 40.000</h5>
              <a href="" className="w-full sm:w-44 h-11 font-bold text-secondary flex justify-center items-center border rounded-3xl border-primary">Order Now</a>
            </div>
            {/* <!-- [END] CARD-FAV CONTAINER --> */}
          </div>

          {/* <!-- LOCATION CONTENT --> */}
          <div className='px-4 lg:px-36'>
            <h3 className="text-center font-medium text-2xl md:text-3xl  md:leading-[50px]">Visit Our Store in the Spot on the Map Below</h3>
            <p className="text-center text-greydark text-sm md:text-base mt-4">See our store in every city on the spot and spen your good day there. See you soon!</p>
            <div className='w-full mt-4 lg:mt-8'>
              <img src={Maps} alt="" className='object-cover' />
            </div>
          </div>
          {/* <!-- [END] LOCATION CONTENT --> */}

          {/* <!-- PARTNER CONTENT --> */}
          <div className='px-4 mt-20'>
            <h3 className="text-center font-medium text-2xl md:text-3xl mb-8 lg:text-4xl">Our Partner</h3>
            <div className="flex gap-4 mb-20 mb:w-screen">
              <div className="w-16 h-16  md:w-[190px] md:h-[60px] ">
                <img src={Netflix} alt="" className="w-full md:h-full" />
              </div>
              <div className="w-16 h-16 md:w-[190px] md:h-[60px]">
                <img src={Reddit} alt="" className="w-full md:h-full" />
              </div>
              <div className="w-16 h-16 md:w-[190px] md:h-[60px]">
                <img src={Amazon} alt="" className="w-full md:h-full" />
              </div>
              <div className="w-16 h-16 md:w-[190px] md:h-[60px]">
                <img src={Discord} alt="" className="w-full md:h-full" />
              </div>
              <div className="w-16 h-16 md:w-[190px] md:h-[60px]">
                <img src={Spotify} alt="" className="w-full md:h-full" />
              </div>
            </div>
          </div>
          {/* <!-- [END] PARTNER CONTENT --> */}

          {/* <!-- COMENTARY CUSTOMER CONTENT --> */}
          <div className='px-4'>
            <h3 className="text-center font-medium text-2xl md:text-3xl ">Loved by Thousands of Happy Customer</h3>
            <p className="text-center text-greydark text-sm md:text-base leading-6 md:leading-7 my-4 md:my-6">These are the stories of our customers who have visited us with great pleasure.</p>
            {/* <!-- COMMENTARY CONTAINER --> */}
            <div className="w-full flex items-center flex-col lg:flex-row gap-3 2xl:gap-14 pb-4 overflow-x-scroll xl:overflow-hidden">
              {/* <!-- CARD COMMENT-1 --> */}
              <div className="card-comment flex flex-col p-4 sm:p-7 w-5/6 sm:min-w-[400px] max-h-[230px] border-2 rounded-xl border-grey">
                <div className="flex w-full gap-3 mb-6">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden">
                    <img src={Testi1} alt="" />
                  </div>
                  <div className="">
                    <h4 className="font-medium md:text-lg">Viezh Robert</h4>
                    <h5 className="text-xs md:text-sm text-grey">Warsaw, Poland</h5>
                  </div>
                  <div className="ml-auto flex gap-2 items-center">
                    <p className="font-medium">4.5</p>
                    <i className="bi bi-star-fill text-primary"></i>
                  </div>
                </div>
                <p className="text-xs md:text-base">“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
              </div>
              {/* <!-- CARD COMMENT-2 --> */}
              <div className="card-comment flex flex-col p-4 sm:p-7 w-5/6 sm:min-w-[400px] max-h-[230px] border-2 rounded-xl border-grey">
                <div className="flex w-full gap-3 mb-6">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden">
                    <img src={Testi2} alt="" />
                  </div>
                  <div className="">
                    <h4 className="font-medium md:text-lg">Yessica Christy</h4>
                    <h5 className="text-xs md:text-sm text-grey">Shanxi, China</h5>
                  </div>
                  <div className="ml-auto flex gap-2 items-center">
                    <p className="font-medium">4.5</p>
                    <i className="bi bi-star-fill text-primary"></i>
                  </div>
                </div>
                <p className="text-xs md:text-base">“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte</p>
              </div>
              {/* <!-- CARD COMMENT-3 --> */}
              <div className="card-comment flex flex-col p-4 sm:p-7 w-5/6 sm:min-w-[400px] max-h-[230px] border-2 rounded-xl border-grey">
                <div className="flex w-full gap-3 mb-6">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden">
                    <img src={Testi3} alt="" />
                  </div>
                  <div className="">
                    <h4 className="font-medium md:text-lg">Kim Young Jou</h4>
                    <h5 className="text-xs md:text-sm text-grey">Seoul, South Korea</h5>
                  </div>
                  <div className="ml-auto flex gap-2 items-center">
                    <p className="font-medium">4.5</p>
                    <i className="bi bi-star-fill text-primary"></i>
                  </div>
                </div>
                <p className="text-xs md:text-base">“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!</p>
              </div>
            </div>
            {/* <!-- PAGINATION COMMENTS CUSTOMER --> */}
            <div className="w-full flex py-6 mb-32">
              <div className="flex gap-4 mr-auto items-center">
                <span className="page-dot page-dot-active"></span>
                <span className="page-dot"></span>
                <span className="page-dot"></span>
                <span className="page-dot"></span>
              </div>
              <div className="flex gap-4 ml-auto">
                <span className="page-arrow"><i className="bi bi-arrow-left-short text-5xl"></i></span>
                <span className="page-arrow"><i className="bi bi-arrow-right-short text-5xl"></i></span>
              </div>
            </div>
            {/* <!-- [END] COMENTARY CUSTOMER CONTENT --> */}

          </div>

          {/* <!-- RECLAME CHECK PROMO --> */}
          <section className="relative -translate-y-14 w-10/12 flex justify-center">
            <div className="absolute w-full h-32 md:p-10 p-4 flex flex-col md:flex-row justify-between items-center rounded-xl bg-white shadow-xl">
              <div className="">
                <h1 className="text-lg md:text-4xl font-medium max-w-sm">Check our promo today!</h1>
                <p className="text-xs md:text-base ">Lets see the deals and pick yours!</p>
              </div>
              <a href="" className="btn w-full md:w-64 h-16 flex justify-center items-center rounded-2xl bg-primary shadow-md shadow-primary font-bold text-secondary">See Promo</a>
            </div>
          </section>

        </main>
      </section>

      <Footer />
    </>
  );
}


export default withSearchParams(Home);