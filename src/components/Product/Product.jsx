import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, onAddToCart }) => {
  const { name, img, id, seller, ratings, price } = product;
  return (
    <>
      <div className="card card-compact w-96 bg-base-100  border border-ema-border rounded-lg mb-4 mb-lg-0 mx-auto shadow-xl">
        <figure className="p-2">
          <img className="rounded-lg" src={img} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-normal text-lg text-ema-text">Price: ${price}</p>
          <div className="mt-10 space-y-2">
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>
          </div>
        </div>
        <button
          className="btn rounded-none rounded-b-lg bg-ema-bg border-ema-border border-b-0 border-l-0 border-r-0 text-black border-t-1"
          onClick={() => onAddToCart(product)}
        >
          Add To Cart
          <FontAwesomeIcon className="ml-2" icon={faShoppingCart} />
        </button>
      </div>
    </>
  );
};

export default Product;
