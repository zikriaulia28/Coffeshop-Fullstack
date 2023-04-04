import React from "react";

function CardHistory(props) {
  return (
    <div className="flex rounded-[20px] p-6 h-36 w-full  bg-bgsecondary gap-5 card">
      <div
        className="w-[75px] h-[75px] rounded-full">
        <img src={props.image} className="w-full h-full rounded-full object-cover" />
      </div>
      <div className="desc flex flex-col justify-between w-48 h-24">
        <div className="card-title">
          <h1 className="text-2xl">{props.name}</h1>
        </div>
        <div className="status ">
          <div className="status-top">
            <p className="price">IDR {props.price}</p>
          </div>
          <div className="flex justify-between status-bottom">
            <p className="txt">{props.method} to Table {props.prodId}</p>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardHistory;

