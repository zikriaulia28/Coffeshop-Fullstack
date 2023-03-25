import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Placeholder from '../../assets/placeholder.png'


function ProductList() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      // eslint-disable-next-line no-undef
      const url = `${process.env.REACT_APP_SERVER_HOST}/products`;
      const response = await axios.get(url);
      const productsArray = Object.values(response.data); // mengubah objek menjadi array
      setProducts(productsArray[0]);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    < >
      <div className="card-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mt-20 place-items-center mt-10 gap-x-4 gap-y-14 text-center">
        {products.map((product, idx) => (
          <div key={idx} className="card w-36 h-[212.41px] shadow-md rounded-3xl flex flex-col items-center px-3 ">
            <Link to={`/product/${product.id}`}>
              <div className="card-img w-[128.98px] h-[128.98px] rounded-full shadow-xl relative -top-10 ">
                <img src={!product.image ? Placeholder : product.image} className='w-full h-full  rounded-full object-cover' alt="img" />
              </div>
              <div className="relative -top-5 flex flex-col gap-2 justify-between min-h-[85px]">
                <div className="card-title text-lg font-black">{product.name}
                </div>
                <div className="font-semibold text-sm text-secondary">IDR {product.price}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </ >
  );
}


export default ProductList;
