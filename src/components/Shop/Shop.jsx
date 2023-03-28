import React, { useEffect, useState } from "react";
import {
  clearCartFromDB,
  emaAddToDB,
  getCartFromDB,
} from "../../utilities/emaFakeDB";
import OrderSummary from "../Order-Summary/Order-Summary";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  // control cart
  const [cart, setCart] = useState([]);

  // load data function
  const loadData = async () => {
    const res = await fetch("products.json");
    const data = await res.json();
    setProducts(data);
  };

  // load data
  useEffect(() => {
    try {
      loadData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // handle add to cart
  // const handleAddToCart = (product) => {
  //   const isExistProduct = cart.find((p) => p.id === product.id);
  //   if (isExistProduct) {
  //     const updatedCart = cart.map((p) =>
  //       p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
  //     );
  //     setCart(updatedCart);
  //     emaAddToDB(cart);
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }
  // };

  const handleAddToCart = (product) => {
    setCart([...cart, product])
  }


  // handle clear cart
  const handleClearCart = () => {
    clearCartFromDB();
    setCart([]);
  };

  const allProducts = products.map((pdt) => (
    <Product key={pdt.id} product={pdt} onAddToCart={handleAddToCart}></Product>
  ));

  return (
    <div className="shop-container grid grid-cols-5 container mx-auto gap-16">
      <div className="product-container col-span-4 my-32">
        <div className="lg:grid grid-cols-3 gap-8">{allProducts}</div>
      </div>
      <div className="order-summary bg-ema-bg px-5">
        <OrderSummary cart={cart} onClearCart={handleClearCart}></OrderSummary>
      </div>
    </div>
  );
};

export default Shop;
