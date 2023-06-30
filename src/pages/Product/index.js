/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useMemo, Suspense } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Promo from '../../assets/p1.webp'
import CardProducts from './getProducts'
import ProductSkeleton from '../../components/Skeleton/ProductSkeleton'

import withNavigate from "../../utils/wrapper/withNavigate";
import { getProduct } from "../../utils/https/product";
import * as te from "tw-elements";
// import axios from "axios";
import { useSearchParams } from 'react-router-dom'


function Product() {
  const controller = useMemo(() => new AbortController(), []);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [category, setCategory] = useState('');
  const [limit] = useState(8);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState('');
  const [totalPage, setTotalPage] = useState(null);


  const fetchData = async () => {
    setIsLoading(true);
    const params = { limit, page, category, search: searchInput, order };
    try {
      const result = await getProduct(params, controller);
      console.log(result);
      setData(result.data.data);
      setTotalPage(result.data.meta);
      // setNoData(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      // if (error.response && error.response.status === 404) {
      //   // setNoData(true);
      // }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Coffe Shop - Product";
    fetchData();
  }, [category, order])


  // const handleSort = (params) => {
  //   setOrder(order === params ? null : params);
  //   setSearchParams({ ...searchParams, order: order === params ? null : params });
  // };

  // const handleSearch = (params) => {
  //   setOrder(name === params ? null : params);
  //   setSearchParams({ ...searchParams, search: name === params ? null : params });
  // };

  // const handlePage = (page) => {
  //   setPage(page);
  //   setCategories(null);
  //   setOrder(null);
  //   setSearchParams({ ...searchParams, page });
  // };

  const handleSort = (value, currentOrder) => {
    if (value !== currentOrder) {
      setOrder(value);
      setPage(1);
    }
  };

  console.log('test', page < totalPage?.totalPage)

  const handlePage = async (targetPage) => {
    let nextPage = targetPage;
    if (targetPage === 'next') {
      if (page == totalPage.totalPage) {
        return;
      }
      nextPage = page + 1;
    }
    if (targetPage === 'prev') {
      if (page == 1) {
        return;
      }
      nextPage = page - 1;
    }

    const params = { limit, page: nextPage, category, search: searchInput, order };
    try {
      console.log('FETCHING PAGE', params.page);
      setIsLoading(true);
      const result = await getProduct(params, controller);
      const newData = [...result.data.data];
      setData(newData);
      setPage(params.page);
    } catch (error) {
      console.log(error.response.data.msg);
      if (error.response && error.response.status === 404) {
        setIsLoading(false);
      }
    } finally {
      setIsLoading(false);
    }
  };

  console.log('page', page)

  // console.log(page)

  const handleCategory = (info) => {
    setPage(1);
    setCategory(info);
  };

  const handleTabPress = (category) => {
    handleCategory(category);
  };

  // console.log(totalPage);

  return (
    <>
      <Header />
      <main>
        <section className="container-product flex flex-col-reverse  gap-6 md:px-20  lg:flex-row">
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
                <li onClick={() => handleTabPress('')} className={` font-bold hover:text-secondary  border-solid border-secondary cursor-pointer ${category === ''
                  ? "text-secondary font-bold border-b-[3px] border-solid border-secondary"
                  : "text-[#BCBEBD]"
                  }`}>
                  Favorite Product
                </li>
                <li onClick={() => handleTabPress(2)}
                  className={`w-[7.6rem] font-bold hover:text-secondary  border-solid border-secondary cursor-pointer ${category == 2
                    ? "text-secondary font-bold border-b-[3px] border-solid border-secondary"
                    : "text-[#BCBEBD]"
                    }`}
                >
                  Coffee
                </li>
                <li onClick={() => handleTabPress(3)}
                  className={`w-[7.6rem] font-bold hover:text-secondary  border-solid border-secondary cursor-pointer ${category == 3
                    ? "text-secondary font-bold border-b-[3px] border-solid border-secondary"
                    : "text-[#BCBEBD]"
                    }`}
                >
                  Non Coffee
                </li>
                <li onClick={() => handleTabPress(1)}
                  className={`w-[7.6rem] font-bold hover:text-secondary  border-solid border-secondary cursor-pointer ${category == 1
                    ? "text-secondary font-bold border-b-[3px] border-solid border-secondary"
                    : "text-[#BCBEBD]"
                    }`}
                >
                  Foods
                </li>
                <li onClick={() => handleTabPress(4)}
                  className={`w-[7.6rem] font-bold hover:text-secondary  border-solid border-secondary cursor-pointer ${category == 4
                    ? "text-secondary font-bold border-b-[3px] border-solid border-secondary"
                    : "text-[#BCBEBD]"
                    }`}
                >
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
                    className=" cursor-pointer bg-secondary rounded-md font-medium text-white w-fit p-2 outline-none "
                    data-te-select-init
                    data-te-select-filter="true"
                    defaultValue={order}
                    id="order"
                    onChange={(event) => handleSort(event.target.value, order)}
                  >
                    <option value="" className="cursor-pointer ">
                      No Criteria
                    </option>
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
            <div className="card-wrapper h-[30.5rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mt-20  mt-10 gap-x-4 gap-y-16 text-center">
              <Suspense fallback={<ProductSkeleton cards={8} />}>
                {data.length > 0 &&
                  data.map((product, idx) => (
                    <CardProducts
                      key={idx}
                      id={product.id}
                      image={product.image}
                      name={product.name}
                      price={product.price}
                    />
                  ))}
              </Suspense>

            </div>
            <section className="bottom-list w-full mt-4 ">
              <p className="text-secondary flex  items-start justify-start">
                *the price has been cutted by discount appears
              </p>
              <div className=" flex  items-center font-medium mb-7 w-full">
                <div className="flex flex-row  gap-3 ml-auto w-full justify-end">
                  <button
                    onClick={() => handlePage('prev')}
                    type="button"
                    className={`${page === 1 ? "bg-gray-400 text-black" : "bg-secondary text-white hover:text-white"} rounded-l-2xl border-r border-gray-100 py-2 hover:bg-brown px-4`}
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
                    // disabled={page == totalPage.totalPage}
                    onClick={() => handlePage('next')}
                    type="button"
                    className={`${page === totalPage?.totalPage ? "bg-gray-400 text-black" : "bg-secondary text-white hover:text-white"} rounded-r-2xl border-l border-gray-100 py-2 hover:bg-brown px-4`}
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
        </section >

      </main >
      <Footer />
    </>
  )
}

// export default Product
const NewProduct = withNavigate(Product);
export default NewProduct;