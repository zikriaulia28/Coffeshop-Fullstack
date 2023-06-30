/* eslint-disable no-unused-vars */
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Min from '../../assets/min.png'
import Plus from '../../assets/plus.png'
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import ModalMsg from "../../components/ModalMsg";
import ModaltoCart from "../../components/ModalMsg/ModaltoCart";
import { counterAction } from "../../redux/reducers/counter"
import Skeleton from 'react-loading-skeleton';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalCart, setIsModalCart] = useState(false);
  const [isNotFound, setIsNotFound] = useState(true);
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState(1);
  const selectedDelivery = useSelector((state) => state.counter?.delivery);
  console.log(selectedDelivery);
  const notes = useSelector((state) => state.cart?.notes);

  const getProductById = async (id) => {
    try {
      // eslint-disable-next-line no-undef
      const url = `${process.env.REACT_APP_SERVER_HOST}/products/${id}`;
      const response = await axios.get(url);
      const result = response.data.data[0]
      setProduct(result);
      setIsLoading(false);
      setIsNotFound(false);
    } catch (error) {
      console.log(error.message);
      setIsNotFound(true);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProductById(id);

  }, [id]);

  const changeSize = (event) => {
    setSelectedSize(event.target.value);
    console.log(event.target.value);
  };
  const noteHandler = (event) => {
    dispatch(counterAction.notes(event.target.value));
  };
  const changeDelivery = (event) => {
    // setSelectedDelivery(event.target.value);
    // console.log(selectedDelivery);
    dispatch(counterAction.deliveryMethod(event.target.value));
  };
  const plusQty = () => {
    const newQty = qty + 1;
    setQty(newQty);
  };
  const minQty = () => {
    if (qty === 0) return;
    const newQty = qty - 1;
    setQty(newQty);
  };

  const addtoCartHandler = () => {
    const subtotal = product.price * qty;
    const img = product.image;
    const prodName = product.name;
    const cart = {
      product_id: parseInt(id),
      img,
      prodName,
      size_id: parseInt(selectedSize),
      qty,
      subtotal,
    };
    dispatch(counterAction.addtoCart(cart));
    setIsModalCart(true);
  };

  console.log(selectedDelivery.length)

  const checkoutHandler = () => {
    if (selectedDelivery.length < 1) return setIsModalOpen(true);
    addtoCartHandler();
    navigate("/payment");
  };

  const handleCloseCart = () => {
    setIsModalCart(false);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // if (loading) {
  //   return <Loading />
  // }
  return (
    <>
      <Header />
      <main className="bg-abu inset-0 pb-[270px]">
        <section className="title pl-[10%] pt-12 text-xl">
          <p>
            Favorite & Promo
            <span className="font-bold text-secondary"> &gt; {isLoading ? <Skeleton height={24} width={120} /> : product.name}</span>
          </p>
        </section>
        <section className="container flex flex-col justify-center items-center lg:gap-14 lg:flex-row  inset-0 px-[5%] xl:pl-[10%] mx-auto">

          <div className="left-content mt-16 justify-center items-center flex-col flex mb-20 ">
            <div className="box-coffee flex flex-col justify-center items-center">
              <div className="w-32 h-32 lg:w-80 lg:h-80 rounded-full">
                {isLoading ? (
                  <Skeleton circle width={320} height={320} />
                ) : (
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={product.image}
                    alt=""
                  />
                )}
              </div>
              <div className="name-price  items-center text-center mb-14 flex flex-col justify-center ">
                <p className="text-3xl lg:text-4xl font-black font-Poppins mb-3 mt-4">
                  {isLoading ? <Skeleton height={24} width={300} /> : product.name}
                </p>
                <p className="font-medium text-2xl lg:text-3xl font-Poppins">
                  IDR {isLoading ? <Skeleton height={24} width={100} /> : product.price}
                </p>
              </div>
              <div className="left-button flex flex-col gap-5 lg:mt-[5%]">
                <button onClick={addtoCartHandler}
                  className="w-80 h-14 lg:w-[380px] lg:h-[85px] bg-secondary text-white text-[25px] font-bold flex justify-center items-center rounded-[20px] cursor-pointer">
                  Add to Cart
                </button>
                <ModaltoCart
                  msg={isLoading ? <Skeleton height={24} width={120} /> : product.name}
                  isOpen={isModalCart}
                  onClose={handleCloseCart} />
                <button className="w-80 h-14 lg:w-[380px] lg:h-[85px] bg-primary text-secondary text-[25px] font-bold flex justify-center items-center rounded-[20px] cursor-pointer">
                  Ask a Staff
                </button>
              </div>
            </div>
          </div>
          <div className="right-content flex flex-col justify-center items-center w-full xl:mr-[-5%]">
            <div className="description-card w-fit h-[635px] bg-white p-11 xl:pt-[81px] xl:px-[84px] xl:pb-[65px]  relative rounded-[20px] xl:w-[639px] ">
              <div className="delivery text-[23px]  text-secondary mb-6 md:text-[26px]">
                <p>
                  Delivery only on .
                  <span className="font-bold">
                    Monday to <br />
                    friday
                  </span>
                  . at <span className="font-bold">1 - 7 pm</span>
                </p>
              </div>
              <div className="text-coffee text-secondary text-[18px] mb-6 md:text-[25px]">
                Cold brewing is a method of <br />
                brewing that combines ground <br />
                coffee and cool water and uses <br />
                time instead of heat to extract the <br />
                flavor. It is brewed in small batches <br />
                and steeped for as long as <br />
                48 hours.
              </div>
              <div className="title-size ">
                <p className="text-[25px] font-bold text-center">
                  Choose a size
                </p>
              </div>
              <div className="container-choose-size">
                <div className="choose-size flex p-[1.5rem] justify-evenly">
                  <label htmlFor="r" className="flex items-center cursor-pointer text-2xl font-extrabold w-12 h-12 rounded-full justify-center relative bg-primary ">
                    <input
                      type="radio"
                      name="size"
                      id="r"
                      value={1}
                      onChange={changeSize}
                      className="appearance-none"
                    />
                    R
                    <span className="absolute border-0 rounded-full h-12 w-12 checked:border-4 border-secondary checked:block checked:border-secondary"></span>
                  </label>
                  <label htmlFor="l" className="flex items-center cursor-pointer text-2xl font-extrabold w-12 h-12 rounded-full justify-center relative bg-primary ">
                    <input
                      type="radio"
                      name="size"
                      id="l"
                      value={2}
                      onChange={changeSize}
                      className="appearance-none"
                    />
                    L
                    <span className="absolute border-0 rounded-full h-12 w-12 checked:border-4 border-secondary checked:block checked:border-secondary "></span>
                  </label>
                  <label htmlFor="xl" className="flex items-center cursor-pointer text-2xl font-extrabold w-12 h-12 rounded-full bg-yellow justify-center relative bg-primary ">
                    <input
                      type="radio"
                      name="size"
                      id="xl"
                      value={3}
                      onChange={changeSize}
                      className="appearance-none"
                    />
                    XL
                    <span className="absolute border-0 rounded-full h-12 w-12 checked:border-4 border-secondary checked:block checked:border-secondary "></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="box-methods flex justify-center items-center flex-col mt-[50px] gap-3">
              <div className="head-methods font-bold text-xl text-center flex justify-center items-center">
                <p>Choose Delivery Methods</p>
              </div>
              <div className="set-methods flex justify-center items-center p-3 flex-wrap">
                <div className="input-radio flex gap-6 justify-center items-center ">
                  <input type="radio" name="delivery-method" id="dine" value={1} onChange={changeDelivery} checked={selectedDelivery == 1} />
                  <label htmlFor="dine" className=" px-4 py-3 text-[#9f9f9f] border-2 border-solid flex justify-center items-center bg-white cursor-pointer text-xl checked:bg-secondary w-28  rounded-[10px] text-center">
                    Dine In
                  </label>
                  <input type="radio" name="delivery-method" id="door" value={2} onChange={changeDelivery} checked={selectedDelivery == 2} />
                  <label htmlFor="door" className=" px-4 py-3 text-[#9f9f9f] border-2 border-solid flex justify-center items-center bg-white cursor-pointer text-sm checked:bg-secondary w-28  rounded-[10px] text-center md:w-[170px] xl:w-[175px]">
                    Door Delivery
                  </label>
                  <input type="radio" name="delivery-method" id="pick" value={3} onChange={changeDelivery} checked={selectedDelivery == 3} />
                  <label htmlFor="pick" className=" px-4 py-3 text-[#9f9f9f] border-2 border-solid flex justify-center items-center bg-white cursor-pointer text-xl checked:bg-secondary w-28  rounded-[10px] text-center">
                    Pick Up
                  </label>
                </div>
              </div>
              <div className="set-time">
                <div className="form-input flex gap-2 justify-center items-center">
                  <label>Set time :</label>
                  <input
                    type="text"
                    id="time"
                    name="note"
                    value={notes}
                    onChange={noteHandler}
                    placeholder="Enter the time you`ll arrived"
                    className="p-3 rounded-[12px] bg-abu outline-none border-b-2 border-solid " />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="checkout relative flex justify-between items-center ">
          <div className="card flex flex-col md:flex-row w-4/5 rounded-[20px] absolute justify-between items-center top-[35px] md:top-[175px] left-[10%] gap-8 md:gap-12">
            <div className="  bg-white flex justify-between h-[90px] p-4 w-full md:h-[8.5rem] lg:h-[10.5rem] md:p-[1rem] lg:p-11 rounded-[20px] items-center shadow-xl">
              <div className="product-coffee flex gap-[1.5rem] items-center ">
                <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full ">
                  {isLoading ? (
                    <Skeleton circle width={96} height={96} />
                  ) : (
                    <img
                      className="rounded-full w-full h-full object-cover"
                      src={product.image}
                      alt=""
                      width="50"
                      height="50" />
                  )}

                </div>
                <div className="total-size">
                  <div className="total-name font-bold ">
                    <p className=" text-sm  md:text-xl lg:text-2xl md:mb-4">
                      {isLoading ? <Skeleton height={24} width={200} /> : product.name}
                    </p>
                  </div>
                  <p className="sizet text-xs md:text-lg lg:text-xl md:leading-6">
                    x{qty} (
                    {selectedSize == 3
                      ? "Extra Large"
                      : selectedSize == 2
                        ? "Large"
                        : "Regular"}
                    )
                  </p>
                </div>
              </div>
              <div className="add-amount flex justify-center items-center gap-3">
                <div className="minus flex bg-[#E7AA36] w-7 h-7 md:w-[40px] md:h-[40px] rounded-full justify-center items-center cursor-pointer">
                  <button onClick={minQty} className="btn w-10 h-10 rounded-full bg-primary grid place-items-center">
                    <img src={Min} alt="min" />
                  </button>
                </div>
                <p className="amount text-2xl font-bold">{qty}</p>
                <div className="plus flex bg-[#E7AA36] h-7 w-7 md:w-[40px] md:h-[40px] rounded-full justify-center items-center cursor-pointer">
                  <button onClick={plusQty} className="btn w-10 h-10 rounded-full bg-primary grid place-items-center" >
                    <img src={Plus} alt="plus" />
                  </button>
                </div>
              </div>
            </div>

            <div className="button-checkout">
              <button onClick={checkoutHandler} className=" w-[150px] h-[80px]  p-2  md:w-[155px] shadow-xl lg:w-64 md:h-[8.5rem] lg:h-[10.5rem] md:text-[25px] left-[10%] bottom-[10%] border-none bg-primary font-bold text-secondary rounded-[20px]">
                CHECKOUT
              </button>
              <ModalMsg
                msg="Delivery Method Not Selected"
                isOpen={isModalOpen}
                onClose={handleCloseModal} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ProductDetails