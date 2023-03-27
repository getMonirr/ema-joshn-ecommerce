import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";

const OrderSummary = ({ cart }) => {
  // calculate total
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="">
      <h4 className="font-semibold text-2xl mt-7 text-center text-ema-text mb-12">
        Order Summary
      </h4>
      <div>
        <div className="space-y-6">
          <p>Selected Item: {cart.length} </p>
          <p>Total Price: ${totalPrice}</p>
          <p>Total Shipping Charge: </p>
          <p>Tax: </p>
          <h4 className="font-normal text-xl">Grand Total: </h4>
        </div>
        <div className="mt-12 space-y-4">
          <button className="btn rounded-lg bg-ema-btn-bg border-ema-border text-white border-0 w-full ">
            Clear Cart
            <FontAwesomeIcon className="ml-2" icon={faTrash} />
          </button>
          <button className="btn rounded-lg bg-ema-btn-bg-2 border-ema-border text-white border-0 w-full ">
            Review Order
            <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
