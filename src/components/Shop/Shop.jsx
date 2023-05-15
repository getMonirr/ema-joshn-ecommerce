import React, { useEffect, useState } from "react";
import {
  clearCartFromDB,
  emaAddToDB,
  getCartFromDB,
} from "../../utilities/emaFakeDB";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import OrderSummary from "../Order-Summary/Order-Summary";
import Product from "../Product/Product";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  // control cart
  const [cart, setCart] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // pagination
  const { totalProducts } = useLoaderData();
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];
  const options = [5, 10, 15, 20, 25];

  console.log(itemsPerPage);

  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    setItemsPerPage(newItemsPerPage);
  };

  // load data function
  const loadData = async () => {
    const res = await fetch(
      `http://localhost:3000/products?page=${currentPage}&limit=${itemsPerPage}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      }
    );
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
  }, [itemsPerPage, currentPage]);

  // handle add to cart
  // const handleAddToCart = (product) => {
  //   const isExistProduct = cart.find((p) => p._id === product._id);
  //   if (isExistProduct) {
  //     const updatedCart = cart.map((p) =>
  //       p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p
  //     );
  //     setCart(updatedCart);
  //     emaAddToDB(cart);
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }
  // };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    let newCart = [];
    const isExist = cart.find((pd) => pd._id === product._id);
    if (!isExist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      isExist.quantity = isExist.quantity + 1;
      const restCart = cart.filter((pd) => pd._id !== product._id);
      newCart = [...restCart, isExist];
    }
    setCart(newCart);
    addToDb(product._id);
  };

  // load data from data base
  useEffect(() => {
    const newCart = [];
    const storedCart = getShoppingCart();
    const cartProductsIds = Object.keys(storedCart);

    fetch("http://localhost:3000/productsInCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ cartProductsIds }),
    })
      .then((res) => res.json())
      .then((cartProducts) => {
        for (const id in storedCart) {
          const addedProduct = cartProducts.find((pd) => pd._id === id);
          if (addedProduct) {
            addedProduct.quantity = storedCart[id];
            newCart.push(addedProduct);
          }
        }
        setCart(newCart);
      });

    // console.log(newCart);
  }, []);

  // handle clear cart
  const handleClearCart = () => {
    deleteShoppingCart();
    setCart([]);
  };

  const allProducts = products.map((pdt) => (
    <Product
      key={pdt._id}
      product={pdt}
      onAddToCart={handleAddToCart}
    ></Product>
  ));

  return (
    <>
      <div className="shop-container grid grid-cols-5 container mx-auto gap-16">
        <div className="product-container col-span-4 my-32">
          <div className="lg:grid grid-cols-3 gap-8">{allProducts}</div>
        </div>
        <div className="order-summary bg-ema-bg px-5">
          <OrderSummary cart={cart} onClearCart={handleClearCart}>
            Review Order
          </OrderSummary>
        </div>
      </div>
      <div>
        <label htmlFor="itemsPerPage">Items per Page:</label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="text-center">
        <p>
          Total: {totalProducts}, itemsPerPage: {itemsPerPage}, pageNumbers:{" "}
          {totalPages}, CurrentPage: {currentPage}
        </p>
        {pageNumbers.map((number) => (
          <button
            onClick={() => setCurrentPage(number)}
            className={`btn mr-4 my-4 ${
              currentPage === number ? "active-page" : ""
            }`}
            key={number}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Shop;
