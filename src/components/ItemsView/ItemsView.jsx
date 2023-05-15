import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ItemsView = ({ product, handleRemoveItem }) => {
  const { name, price, quantity, _id, img } = product;
  return (
    <div className="flex border border-teal-100 p-2 mb-4 items-center">
      <img className="w-20 h-20" src={img} alt={name} />
      <div className="flex-grow gap-8 ml-4 space-y-2">
        <p>Name: {name}</p>
        <p>
          Price: <span className="text-orange-400">${price}</span>
        </p>
        <p>
          Quantity: <span className="text-orange-400">{quantity}</span>
        </p>
      </div>
      <div>
        <button
          onClick={() => handleRemoveItem(_id)}
          className="rounded-full flex justify-center items-center bg-[#EB5757] bg-opacity-50 border-0 p-3 px-3 py-3"
        >
          <FontAwesomeIcon
            className="text-[#EB5757] text-[27px]"
            icon={faTrashAlt}
          />
        </button>
      </div>
    </div>
  );
};

export default ItemsView;
