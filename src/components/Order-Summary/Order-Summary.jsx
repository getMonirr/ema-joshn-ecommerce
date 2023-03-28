import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";

const OrderSummary = ({ cart, onClearCart }) => {
  // const shippingCharge = cart?.length ? 5 : 0;
  // // calculate total
  // const totalPrice = cart?.length
  //   ? cart?.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
  //   : 0;
  // const calTax = cart?.length ? parseFloat((totalPrice * 0.1).toFixed(2)) : 0;
  // const grandTotal = cart?.length
  //   ? (parseFloat(totalPrice) + parseFloat(calTax) + shippingCharge).toFixed(2)
  //   : 0;

  // calculate all
  let totalPrice = 0;
  let shippingCharge = 0;
  let tax = 0;
  for (const pdt of cart) {
    totalPrice += pdt.price;
    shippingCharge += pdt.shipping;
    tax += (totalPrice * 7) / 100;
  }

  return (
    <div className="sticky top-0">
      <h4 className="font-semibold text-2xl mt-7 text-center text-ema-text mb-12">
        Order Summary
      </h4>
      <div>
        <div className="space-y-6">
          <p>Selected Item: {cart.length} </p>
          <p>Total Price: ${totalPrice}</p>
          <p>Total Shipping Charge: ${shippingCharge}</p>
          <p>Tax: ${tax.toFixed(2)}</p>
          <h4 className="font-normal text-xl">
            Grand Total: {(totalPrice + shippingCharge + tax).toFixed(2)}$
          </h4>
          {/* <p>Selected Item: {cart?.length ? cart?.length : 0} </p>
          <p>Total Price: ${totalPrice}</p>
          <p>Total Shipping Charge: ${shippingCharge}</p>
          <p>Tax: ${calTax} </p>
          <h4 className="font-normal text-xl">Grand Total: ${grandTotal}</h4> */}
        </div>
        <div className="mt-12 space-y-4">
          <button
            className="btn rounded-lg bg-ema-btn-bg border-ema-border text-white border-0 w-full "
            onClick={onClearCart}
          >
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
