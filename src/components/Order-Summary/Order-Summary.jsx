import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faTrash,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const OrderSummary = ({ cart, onClearCart: handleClearCart, children }) => {
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
  let quantity = 0;
  for (const pdt of cart) {
    pdt.quantity = pdt.quantity || 1;
    totalPrice += pdt.price * pdt.quantity;
    shippingCharge += pdt.shipping;
    tax += (totalPrice * 7) / 100;
    quantity += pdt.quantity;
  }
  // console.log(cart);
  return (
    <div className="sticky top-0">
      <h4 className="font-semibold text-2xl mt-7 text-center text-ema-text mb-12">
        Order Summary
      </h4>
      <div>
        <div className="space-y-6">
          <p>Selected Item: {quantity} </p>
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
            className="btn rounded-lg bg-ema-btn-bg border-ema-border text-white border-0 w-full mb-4"
            onClick={handleClearCart}
          >
            Clear Cart
            <FontAwesomeIcon className="ml-auto" icon={faTrash} />
          </button>
          <Link
            to={children === "Proceed Checkout" ? "/proceed-order" : "/orders"}
          >
            <button className="btn rounded-lg bg-ema-btn-bg-2 border-ema-border text-white border-0 w-full">
              {children}
              <FontAwesomeIcon
                className="ml-auto"
                icon={
                  children === "Proceed Checkout" ? faCreditCard : faArrowRight
                }
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
