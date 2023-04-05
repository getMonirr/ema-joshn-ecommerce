import React, { useState } from "react";
import OrderSummary from "../Order-Summary/Order-Summary";
import { useLoaderData } from "react-router-dom";
import ItemsView from "../ItemsView/ItemsView";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Order = () => {
  const saveCart = useLoaderData();
  const [cart,setCart] = useState(saveCart);

  const handleRemoveItem = (id) => {
    const rest = cart.filter(pd => pd.id !== id);
    setCart(rest);
    removeFromDb(id);
  };
  // handle clear cart
  const handleClearCart = () => {
    deleteShoppingCart();
    setCart([]);
  };

  console.log(cart);
  return (
    <div className="shop-container grid grid-cols-3 container mx-auto gap-16">
      <div className="product-container col-span-2 my-32">
        {
          cart.map(pd => <ItemsView handleRemoveItem={handleRemoveItem} key={pd.id} product={pd}/>)
        }
      </div>
      <div className="order-summary bg-ema-bg px-5 my-32 pb-5">
        <OrderSummary cart={cart} onClearCart={handleClearCart}>Proceed Checkout</OrderSummary>
      </div>
    </div>
  );
};

export default Order;
