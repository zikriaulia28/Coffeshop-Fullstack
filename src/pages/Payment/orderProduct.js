import React from "react";

function OrderProduct(props) {
  return (
    <div className='flex flex-col gap-3 border-b '>
      <div className='flex items-center justify-between '>
        <div className='flex items-center gap-4'>
          <div className='w-14 h-14 md:w-16 md:h-16 relative bg-primary rounded-lg'>
            <img src={props.img} className='w-full h-full object-cover rounded-lg' />
          </div>
          <div>
            <p>{props.prodName}</p>
            <p>x {props.qty}</p>
            <p>
              {props.size === 1
                ? "Regular"
                : props.size === 2
                  ? "Large"
                  : "Extra Large"}
            </p>
          </div>
        </div>
        <div>
          <p>IDR {props.subtotal.toLocaleString("id-ID")}</p>
        </div>
      </div>
    </div>

  );
}

export default OrderProduct;