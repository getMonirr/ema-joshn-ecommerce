import React from "react";
import OrderSummary from "../Order-Summary/Order-Summary";
import { useLoaderData } from "react-router-dom";

const Order = () => {
    const cart = useLoaderData();
    console.log(cart);
  return (
    <div className="shop-container grid grid-cols-5 container mx-auto gap-16">
      <div className="product-container col-span-4 my-32">
        <h4>this is ordered items</h4>
      </div>
      <div className="order-summary bg-ema-bg px-5 my-32 pb-5">
        <OrderSummary cart={cart}></OrderSummary>
      </div>
    </div>
  );
};

export default Order;
