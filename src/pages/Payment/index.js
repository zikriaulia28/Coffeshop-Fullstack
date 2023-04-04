import React, { useEffect, useState } from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import img3 from "../../assets/card.svg"
import img4 from "../../assets/bank.svg"
import img5 from "../../assets/cod.svg"
import { useDispatch, useSelector } from "react-redux";
import { addTransactions } from "../../utils/https/transaction";
import ModalMsg from "../../components/ModalMsg";
import { counterAction } from "../../redux/reducers/counter";
import Loading from '../../components/Loader/loader'
import NothingCart from './NothingCart'
import ModaltoCart from "../../components/ModalMsg/ModaltoCart";
import OrderProduct from "./orderProduct";
import { useNavigate } from "react-router-dom";

function Payment() {
  // const controller = useMemo(() => new AbortController(), []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.data.data[0]);
  const token = useSelector((state) => state.auth.data.token)
  console.log(token);
  const [isLoading, setIsLoading] = useState(user === null ? true : false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [msg, setMsg] = useState("");
  const [payMethod, setPayMethod] = useState(0);


  const changePayment = (event) => {
    console.log(event.target.value);
    setPayMethod(event.target.value);
  };

  const submitHandler = async () => {
    if (cart.shoppingCart.length < 1) {
      setMsg("Nothing Products on Your Cart");
      setIsModalOpen(true);
      return;
    }
    if (payMethod === 0) {
      setMsg("Payment Method Not Selected");
      setIsModalOpen(true);
      return;
    }

    const dataShoppingCart = cart.shoppingCart.map((item) => {
      const { img, prodName, ...newItem } = item;
      if (img || prodName) console.log("");
      // console.log(newItem);
      return newItem;
    });

    const data = {
      promo_id: 1,
      delivery_id: cart.delivery,
      payment_id: parseInt(payMethod),
      notes: cart.notes,
      status_id: 1,
      products: dataShoppingCart,
    };
    // console.log(data);
    setIsLoading(true);
    try {
      const result = await addTransactions(token, data);
      console.log(result);
      setIsLoading(false);
      setIsConfirmed(true);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    dispatch(counterAction.resetCounter());
    handleRedirect()
  };
  useEffect(() => {
    document.title = "Coffe Shop - Payment";
  }, [])

  const handleRedirect = () => {
    navigate('/history');
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onCart = cart.shoppingCart;
  let subtotalOnCart = 0;
  cart.shoppingCart.forEach((prod) => {
    subtotalOnCart += prod.subtotal;
  });
  const taxFee = subtotalOnCart * 0.05;
  let shipping = cart.delivery == 2 ? 10000 : 0;
  // if (cartState.delivery == 2) shipping = 10000;
  const grandTotal = subtotalOnCart + taxFee + shipping;

  return (
    <>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <main>
          <section>
            <div className='bg-payment bg-cover bg-center  px-5 py-10 md:px-20 lg:px-36'>
              <h1 className='text-bgsecondary text-2xl lg:text-4xl font-bold'>Checkout your <br /> item now!</h1>
              <div className='mt-10 lg:flex lg:justify-between'>
                <div className='px-8 py-20 lg:w-2/5 lg:h-3/5 bg-bgsecondary rounded-xl'>
                  <h2 className='text-center text-4xl mb-14 font-bold lg:text-4xl'>Order Summary</h2>
                  {cart.length < 1 ? (
                    <NothingCart />
                  ) : (
                    onCart.map((product) => (
                      <OrderProduct
                        key={product.id}
                        img={product.img}
                        prodName={product.prodName}
                        size={product.size_id}
                        qty={product.qty}
                        subtotal={product.subtotal}
                      />
                    ))
                  )}

                  <div className='mt-4'>
                    {/* <div className='flex justify-between'>
                    <p>SUBTOTAL</p>
                    <p>IDR 120.000</p>
                  </div> */}
                    <div className='flex justify-between'>
                      <p>TAX & FEES</p>
                      <p>IDR {taxFee.toLocaleString("id-ID")}</p>
                    </div>
                    <div className='flex justify-between'>
                      <p>SHIPPING</p>
                      <p>IDR {shipping.toLocaleString("id-ID")}</p>
                    </div>
                  </div>
                  <div className='flex justify-between mt-8'>
                    <p>TOTAL</p>
                    <p>IDR {grandTotal.toLocaleString("id-ID")}</p>
                  </div>
                </div>
                <div className='flex flex-col gap-12 mt-10 lg:mt-0 lg:gap-6'>
                  <div>
                    <div className='flex justify-between text-bgsecondary'>
                      <p>Address details</p>
                      <p>edit</p>
                    </div>
                    <div className='bg-bgsecondary px-8 py-8 rounded-2xl'>
                      <p className='pb-2'>Delivery to {user.display_name} Street</p>
                      <p className='border-t border-b py-2'>{user.address}</p>
                      <p className='pt-2'>+62813482878</p>
                    </div>
                  </div>
                  <div>
                    <p className='text-bgsecondary'>Payment method</p>
                    <div className='px-8 py-8 bg-bgsecondary rounded-2xl'>
                      <div className='flex items-center gap-2 pb-2'>
                        <input type="radio" name="payment_id" id="card" value={1} onChange={changePayment} />
                        <div className='w-10 h-10 bg-primary rounded-lg flex items-center justify-center'>
                          <img src={img3} />
                        </div>
                        <label htmlFor="card" className="flex items-center gap-2 text-xl my-2 cursor-pointer" >Card</label>
                      </div>
                      <div className='flex items-center gap-2 border-t border-b py-2'>
                        <input type="radio" name="payment_id" id="bank" value={2} onChange={changePayment} />
                        <div className='w-10 h-10 bg-secondary rounded-lg flex items-center justify-center'>
                          <img src={img4} />
                        </div>
                        <label htmlFor="bank" className="flex items-center gap-2 text-xl my-2 cursor-pointer">Bank account</label>
                      </div>
                      <div className='flex items-center gap-2 pt-2'>
                        <input type="radio" name="payment_id" id="cash" value={3} onChange={changePayment} />
                        <div className='w-10 h-10 bg-primary rounded-lg flex items-center justify-center'>
                          <img src={img5} />
                        </div>
                        <label htmlFor="cash" className="flex items-center gap-2 text-xl my-2 cursor-pointer">Cash on delivery</label>
                      </div>
                    </div>
                  </div>
                  <button className='flex items-center justify-center bg-secondary text-bgsecondary rounded-3xl py-5'>
                    <button onClick={submitHandler} >
                      Confirm and Pay
                    </button>
                  </button>
                  <ModalMsg
                    msg={msg}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                  />
                  <ModaltoCart
                    msg="Transactions Confirmed..."
                    isOpen={isConfirmed}
                    onClose={handleCloseModal}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
      <Footer />
    </>
  )
}

export default Payment;