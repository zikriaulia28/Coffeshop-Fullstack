import React, { useEffect } from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import img1 from "../../assets/p3.webp"
import img2 from "../../assets/p8.webp"
import img3 from "../../assets/card.svg"
import img4 from "../../assets/bank.svg"
import img5 from "../../assets/cod.svg"

function Payment() {
  useEffect(() => {
    document.title = "Coffe Shop - Payment";
  }, [])
  return (
    <>
      <Header />
      <main>
        <section>
          <div className='bg-payment bg-cover bg-center  px-5 py-10 md:px-20 lg:px-36'>
            <h1 className='text-bgsecondary text-2xl lg:text-4xl font-bold'>Checkout your <br /> item now!</h1>
            <div className='mt-10 lg:flex lg:justify-between'>
              <div className='px-8 py-20 lg:w-2/5 lg:h-3/5 bg-bgsecondary rounded-xl'>
                <h2 className='text-center text-4xl mb-14 font-bold lg:text-4xl'>Order Summary</h2>
                <div className='flex flex-col gap-3 border-b '>
                  <div className='flex items-center justify-between '>
                    <div className='flex items-center gap-4'>
                      <div className='w-14 h-14 md:w-16 md:h-16 relative bg-primary rounded-lg'>
                        <img src={img1} className='w-full h-full object-cover rounded-lg' />
                      </div>
                      <div>
                        <p>Hazelnut Latte</p>
                        <p>x 1</p>
                        <p>Regular</p>
                      </div>
                    </div>
                    <div>
                      <p>IDR 24.0</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-4'>
                      <div className='w-14 h-14 md:w-16 md:h-16 bg-primary rounded-lg'>
                        <img src={img2} className='w-full h-full object-cover' />
                      </div>
                      <div>
                        <p>Chicken Fire Wings</p>
                        <p>x 2</p>
                      </div>
                    </div>
                    <div>
                      <p>IDR 30.0</p>
                    </div>
                  </div>
                </div>
                <div className='mt-4'>
                  <div className='flex justify-between'>
                    <p>SUBTOTAL</p>
                    <p>IDR 120.000</p>
                  </div>
                  <div className='flex justify-between'>
                    <p>TAX & FEES</p>
                    <p>IDR 20.000</p>
                  </div>
                  <div className='flex justify-between'>
                    <p>SHIPPING</p>
                    <p>IDR 10.000</p>
                  </div>
                </div>
                <div className='flex justify-between mt-8'>
                  <p>TOTAL</p>
                  <p>IDR 150.000</p>
                </div>
              </div>
              <div className='flex flex-col gap-12 mt-10 lg:mt-0 lg:gap-6'>
                <div>
                  <div className='flex justify-between text-bgsecondary'>
                    <p>Address details</p>
                    <p>edit</p>
                  </div>
                  <div className='bg-bgsecondary px-8 py-8 rounded-2xl'>
                    <p className='pb-2'>Delivery to Iskandar Street</p>
                    <p className='border-t border-b py-2'>Km 5 refinery road oppsite re  public road, effurun, Jakarta</p>
                    <p className='pt-2'>+62 81348287878</p>
                  </div>
                </div>
                <div>
                  <p className='text-bgsecondary'>Payment method</p>
                  <div className='px-8 py-8 bg-bgsecondary rounded-2xl'>
                    <div className='flex items-center gap-2 pb-2'>
                      <input type='radio' />
                      <div className='w-10 h-10 bg-primary rounded-lg flex items-center justify-center'>
                        <img src={img3} />
                      </div>
                      <p>Card</p>
                    </div>
                    <div className='flex items-center gap-2 border-t border-b py-2'>
                      <input type='radio' />
                      <div className='w-10 h-10 bg-secondary rounded-lg flex items-center justify-center'>
                        <img src={img4} />
                      </div>
                      <p>Bank account</p>
                    </div>
                    <div className='flex items-center gap-2 pt-2'>
                      <input type='radio' />
                      <div className='w-10 h-10 bg-primary rounded-lg flex items-center justify-center'>
                        <img src={img5} />
                      </div>
                      <p>Cash on delivery</p>
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-center bg-secondary text-bgsecondary rounded-3xl py-5'>
                  <p>Confirm and Pay</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Payment;