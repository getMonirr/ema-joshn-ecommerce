import React, { useEffect, useState } from "react";
import OrderSummary from "../Order-Summary/Order-Summary";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
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
  const allProducts = products.map((pdt) => (
    <Product key={pdt.id} product={pdt}></Product>
  ));
  return (
    <div className="shop-container grid grid-cols-5 container mx-auto my-8">
      <div className="product-container col-span-4">
        <div className="lg:grid grid-cols-3 gap-8">
        {allProducts}
        </div>
      </div>
      <div className="order-summary">
        <OrderSummary></OrderSummary>
      </div>
    </div>
  );
};

export default Shop;
