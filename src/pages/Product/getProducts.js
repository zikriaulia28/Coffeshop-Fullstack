import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function ProductList() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get('https://webcoffee-flame.vercel.app/products');
      const productsArray = Object.values(response.data); // mengubah objek menjadi array
      setProducts(productsArray[0]);
      console.log(productsArray[0]);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="card-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mt-20 place-items-center mt-10 gap-x-4 gap-y-14 text-center">
        {products.map((product, idx) => (
          <div key={idx} className="card w-[156px] h-[212.41px] shadow-md rounded-3xl flex flex-col items-center">
            <div className="card-img w-[128.98px] h-[128.98px] rounded-full shadow-xl relative -top-10">
              <img src={product.image} className='w-full h-full rounded-full object-cover' />
            </div>
            <div className="relative -top-5">
              <div className="card-title text-2xl font-bold"><Link to="/productdetails">{product.name}</Link></div>
              <div className="font-semibold text-sm text-secondary"><Link to="/productdetails">IDR {product.price}</Link></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default ProductList;
