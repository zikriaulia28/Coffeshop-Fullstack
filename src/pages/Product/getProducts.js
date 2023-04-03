import React from 'react';
import Placeholder from '../../assets/placeholder.png'
import withNavigate from "../../utils/wrapper/withNavigate";

function ProductList({ id, image, name, price, navigate }) {
  const handleNavigate = (to) => {
    navigate(to);
  };
  return (
    < >
      <div className="card w-36 h-[212.41px] shadow-md rounded-3xl flex flex-col items-center px-3 cursor-pointer transition duration-150 hover:scale-[1.1] hover:ease-in-out"
        onClick={() => handleNavigate(`/product/${id}`)}
      >
        {/* <Link to={`/product/${product.id}`}> */}
        <div className="card-img w-[128.98px] h-[128.98px] rounded-full shadow-xl relative -top-10 ">
          <img src={!image ? Placeholder : image} className='w-full h-full  rounded-full object-cover' alt="img" />
        </div>
        <div className="relative -top-5 flex flex-col gap-2 justify-between min-h-[85px]">
          <div className="card-title text-lg font-black">{name}
          </div>
          <div className="font-semibold text-sm text-secondary">IDR {price}</div>
        </div>
        {/* </Link> */}
      </div>
    </ >
  );
}

export default withNavigate(ProductList);

// export default ProductList;
