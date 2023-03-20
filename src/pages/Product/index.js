import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Promo from '../../assets/p1.webp'
import ProductList from './getProducts'


function Product() {
  return (
    <>
      <Header />
      <main>
        <section className="container-product flex flex-col-reverse  gap-6 md:px-20 lg:px-36 lg:flex-row">
          <div className='lg:border-r lg:border-solid lg:px-10'>
            <div className="product-txt px-5 py-5 lg:pr-5 lg:pl-0">
              <div className="title-product text-xl text-secondary font-semibold text-center mb-4">Promo for you</div>
              <div className="desc-product text-center mb-5 ">Coupons will be updated every weeks. <br />
                Check them out! </div>
              <div className="card-promo relative flex justify-center ">
                <div className='absolute w-70 h-72 lg:h-[21rem] translate-x-7 translate-y-8 bg-black rounded-xl'></div>
                <div className='absolute w-70 h-80 lg:h-[23rem] translate-x-4 translate-y-4 tra bg-secondary rounded-xl'></div>
                <div className="promo-wrapper relative w-70 h-110 py-10 bg-primary rounded-xl">
                  <div className="promos flex flex-col items-center border-b border-black border-dashed pb-4 px-5">
                    <div className="promo-img w-20 h-20 lg:w-32 lg:h-32 rounded-full">
                      <img src={Promo} className='w-full h-full object-cover object-bottom rounded-full' />
                    </div>
                    <div className="promo-title text-center font-semibold">Beef Spaghetti <br /> 20% OFF</div>
                    <div className="promo-desc text-center">Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</div>
                  </div>
                  <div className="text-center pt-4">
                    <p className="txt-title text-sm">COUPON CODE</p>
                    <p className="code-promo font-bold text-lg">FNPR15RG</p>
                    <p className='text-sm'>Valid until October 10th 2020</p>
                  </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <button className="text-white cursor-pointer bg-secondary w-70 mt-4 mb-10">Apply Coupon</button>
              </div>
              <div className="list text-xs">
                <ul>
                  <h2>Terms and Condition</h2>
                  <li>
                    1. You can only apply 1 coupon per day
                  </li>
                  <li>
                    2. It only for dine in
                  </li>
                  <li>
                    3. Buy 1 get 1 only for new user
                  </li>
                  <li>
                    4. Should make member card to apply coupon
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='w-full py-5'>
            <div className="menu-product ">
              <ul className='flex md:justify-between'>
                <li>
                  <p className="product-actives">Favorite Product</p>
                  <div className="underline"></div>
                </li>
                <li>Coffee</li>
                <li>Non Coffee</li>
                <li>Foods</li>
                <li>Add-on</li>
              </ul>
              {/* <div className="card-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mt-20 place-items-center mt-10 gap-x-4 gap-y-14 text-center">
              <div className="card w-[156px] h-[212.41px] shadow-md rounded-3xl flex flex-col items-center">
                <div className="card-img w-[128.98px] h-[128.98px] rounded-full shadow-xl relative -top-10">
                  <img src={P1} className='w-full h-full rounded-full object-cover' />
                </div>
                <div className="relative -top-5">
                  <div className="card-title text-2xl font-bold"><Link to="/productdetails">Veggie tomato mix</Link></div>
                  <div className="font-semibold text-sm text-secondary"><Link to="/productdetails">IDR 34.000</Link></div>
                </div>
              </div>
            </div> */}
              <ProductList />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ >
  )
}

export default Product