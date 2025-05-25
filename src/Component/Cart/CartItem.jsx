import React from "react";
import { useProductContext } from "../../context/productcontext";
import Button from "../ResuableComponent/Button";

const CartItem = ({
  id,
  title,
  size,
  color,
  price,
  quantity,
  image,
  stock,
}) => {
  const { dispatch } = useProductContext();

  const handleIncrease = () => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const handleDecrease = () => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  const handleRemove = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
        <img src={image} alt={title} className="h-full w-auto object-cover" />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium">{title}</h3>
          <span className="text-red-500 text-sm" onClick={handleRemove}>
            ×
          </span>
        </div>
        <p className="text-sm text-gray-500">Size: {size}</p>
        <p className="text-sm text-gray-500">Color: {color}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold">${price}</p>
          <div className="flex items-center space-x-2">
            <Button
              className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center cursor-pointer"
              onClick={handleDecrease}
              disabled={quantity <= 1}
            >
              −
            </Button>
            <span className="text-sm">{quantity}</span>
            <Button
              className="w-6 h-6 bg-gray-100 rounded flex items-center justify-centerc cursor-pointer"
              onClick={handleIncrease}
              disabled={quantity >= stock}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
