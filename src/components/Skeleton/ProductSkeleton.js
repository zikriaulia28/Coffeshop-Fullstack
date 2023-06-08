import React from 'react';
import Skeleton from 'react-loading-skeleton';

function ProductSkeleton({ cards }) {
  return Array(cards).fill(0).map((_, i) => (
    <div key={i} className="card w-36 h-[212.41px] shadow-md rounded-3xl flex flex-col items-center px-3 cursor-pointer transition duration-150 hover:scale-[1.1] hover:ease-in-out">
      <div className="card-img w-[128.98px] h-[128.98px] rounded-full shadow-xl relative -top-10 ">
        <Skeleton circle width={128.98} height={128.98} />
      </div>
      <div className="relative -top-5 flex flex-col gap-2 justify-between min-h-[85px]">
        <Skeleton height={24} width={120} />
        <Skeleton height={16} width={120} />
      </div>
    </div>
  ));
}

export default ProductSkeleton;
