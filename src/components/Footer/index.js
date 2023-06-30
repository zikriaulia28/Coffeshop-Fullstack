/* eslint-disable react/no-unknown-property */
import React, { Component } from 'react'
import iconCoffe from "../../assets/icon-coffee.svg"
import facebook from "../../assets/fb.svg"
import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/ig.svg"

class Footer extends Component {
  render() {
    return (
      <footer className="flex flex-col gap-2 justify-between bg-bgprimary pt-16 px-5 pb-8 md:px-20 lg:pt-20">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col gap-[20px] footer-desc">
            <div className="flex items-center mb-[22px] gap-[15px] footer-icon">
              <img src={iconCoffe} alt="icon-coffee" />
              <h2 className="font-bold text-xl">Coffee Shop</h2>
            </div>
            <p className="desc">Coffee Shop is a store that sells some good <br /> meals, and especially coffee. We provide
              <br /> high quality beans</p>
          </div>
          <div className="flex mt-4 md:ml-auto md:gap-12 gap-24 md:mt-0 lg:mt-0 footer-menu">
            <div className="product">
              <h2 className="mb-5 font-bold text-xl">Product</h2>
              <ul className="flex flex-col gap-[10px] product-list">
                <li><a href='#'>Download</a></li>
                <li>Pricing</li>
                <li>Locations</li>
                <li>Countries</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="engage">
              <h2 className="mb-5 font-bold text-xl">Engage</h2>
              <ul className="flex flex-col gap-[10px] engage-list">
                <li>Coffe Shop ?</li>
                <li>FAQ</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <ul className="flex gap-5">
            <li className="flex items-center justify-center h-8 w-8 rounded-[50%]"><img src={facebook} /></li>
            <li className="flex items-center justify-center h-8 w-8 rounded-[50%]"><img src={twitter} /></li>
            <li className="flex items-center justify-center h-8 w-8 rounded-[50%]"><img src={instagram} /></li>
          </ul>
        </div>
        <div className="my-2">&copy;2020CoffeeStore</div>
      </footer>
    )
  }
}

export default Footer