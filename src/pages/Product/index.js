/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Promo from '../../assets/p1.webp'
import CardProducts from './getProducts'
// import Loading from '../../components/Loader/loader'

import withNavigate from "../../utils/wrapper/withNavigate";
import { getProduct } from "../../utils/https/product";
import * as te from "tw-elements";
// import axios from "axios";
import { useSearchParams } from 'react-router-dom'


function Product() {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategories] = useState(
    searchParams.get("category") || null
  );
  const [meta, setMeta] = useState({});
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const [limit, setLimit] = useState(10);
  const [name, setName] = useState("");
  const [order, setOrder] = useState(searchParams.get("category") || "newest");
  useEffect(() => {
    document.title = "Coffe Shop - Product";
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await getProduct(searchParams, meta
          //   {
          //   category,
          //   page,
          //   limit,
          //   name,
          //   order,
          // }
        );
        console.log(data);
        setData(result.data.data);
        setMeta(result.data.meta);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [category, page, limit, name, order, name])

  const onChangeCategories = (params) => {
    setCategories(category === params ? null : params);
    setSearchParams({ ...searchParams, category: category === params ? null : params });
  };

  const handleSort = (params) => {
    setOrder(order === params ? null : params);
    setSearchParams({ ...searchParams, order: order === params ? null : params });
  };

  const handleSearch = (params) => {
    setOrder(name === params ? null : params);
    setSearchParams({ ...searchParams, search: name === params ? null : params });
  };

  const handlePage = (page) => {
    setPage(page);
    setCategories(null);
    setOrder(null);
    setSearchParams({ ...searchParams, page });
  };


  return (
    <>
      <Header />
      <main>
        <section className="container-product flex flex-col-reverse  gap-6 md:px-20 lg:px-28 lg:flex-row">
          <div className='lg:border-r lg:border-solid lg:pr-10'>
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
                <button className="text-white cursor-pointer bg-secondary w-70 mt-4 mb-10 rounded-lg">Apply Coupon</button>
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
              <ul className='flex md:justify-between text-center'>
                <li>
                  <p className="product-actives">Favorite Product</p>
                  <div className="underline"></div>
                </li>
                <li onClick={() => onChangeCategories(2)}
                  className={`w-[7.6rem] font-bold hover:text-secondary  border-solid border-secondary cursor-pointer ${category == 2
                    ? "text-secondary font-bold border-b-[3px] border-solid border-secondary"
                    : "text-[#BCBEBD]"
                    }`}
                >
                  Coffee
                </li>
                <li onClick={() => onChangeCategories(3)}
                  className={`w-[7.6rem] font-bold hover:text-secondary  border-solid border-secondary cursor-pointer ${category == 3
                    ? "text-secondary font-bold border-b-[3px] border-solid border-secondary"
                    : "text-[#BCBEBD]"
                    }`}
                >
                  Non Coffee
                </li>
                <li onClick={() => onChangeCategories(1)}
                  className={`w-[7.6rem] font-bold hover:text-secondary  border-solid border-secondary cursor-pointer ${category == 1
                    ? "text-secondary font-bold border-b-[3px] border-solid border-secondary"
                    : "text-[#BCBEBD]"
                    }`}
                >
                  Foods
                </li>
                <li onClick={() => onChangeCategories(4)}
                  className="w-[7.6rem] font-bold hover:text-secondary  border-solid border-secondary cursor-pointer">
                  Add-on
                </li>
              </ul>
            </div>
            <section className="dropdown-res hidden">
              <button className="menu btn-menu">List Menu</button>
            </section>
            <div className="flex flex-col  mt-3 w-full">
              <div className="flex justify-between">
                <div><input type='text' onChange={(event) => handleSort(event.target.value, order)} className='border px-4 py-1' /></div>
                <div className="mb-1">
                  <select
                    className=" cursor-pointer bg-secondary rounded-md font-medium text-white w-[120px] p-2 outline-none "
                    data-te-select-init
                    data-te-select-filter="true"
                    defaultValue={order}
                    id="order"
                    onChange={(event) => handleSort(event.target.value, order)}
                  >
                    <option value="priciest" className="cursor-pointer ">
                      Priciest
                    </option>
                    <option value="cheapest" className="cursor-pointer ">
                      Cheapest
                    </option>
                    <option value="newest" className="cursor-pointer ">
                      Newest
                    </option>
                    <option value="latest" className="cursor-pointer ">
                      Latest
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="card-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mt-20 place-items-center mt-10 gap-x-4 gap-y-16 text-center">
              {isLoading == true ? (
                <div className='h-screen w-screen grid place-items-center translate-x-72 -translate-y-60 '>
                  <div className="bg-white  inline-block h-12 w-12 animate-spin border-secondary rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                  </div>
                </div>
              ) : (
                false
              )}
              {console.log(data)}
              {!isLoading &&
                data.length > 0 &&
                data.map((product, idx) => (
                  <CardProducts
                    key={idx}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                  />
                ))}
            </div>
            <section className="bottom-list w-full mt-4 ">
              <p className="text-secondary flex  items-start justify-start">
                *the price has been cutted by discount appears
              </p>
              <div className=" flex  items-center font-medium mb-7 w-full">
                <div className="flex flex-row  gap-3 ml-auto w-full justify-end">
                  <button
                    disabled={!meta.prev}
                    onClick={() => handlePage(page - 1)}
                    type="button"
                    className="bg-secondary text-white rounded-l-2xl border-r border-gray-100 py-2 hover:bg-brown hover:text-white px-4"
                  >
                    <div className="flex flex-row align-middle">
                      <svg
                        className="w-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <p className="ml-2">Prev</p>
                    </div>
                  </button>
                  <button
                    disabled={!meta.next}
                    onClick={() => handlePage(page + 1)}
                    type="button"
                    className="bg-secondary text-white rounded-r-2xl py-2 border-l border-gray-200 hover:bg-brown hover:text-white px-4"
                  >
                    <div className="flex flex-row align-middle">
                      <span className="mr-2">Next</span>
                      <svg
                        className="w-5 ml-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

// export default Product
const NewProduct = withNavigate(Product);
export default NewProduct;