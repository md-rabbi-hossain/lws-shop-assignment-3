import React from "react";
import { useProductContext } from "../../Context/ProductContext";
import CartButton from "../Cart/CartButton";
import RatingStars from "./RatingStars";
const ProductCard = ({
  id,
  image,
  title,
  rating,
  stock,
  price,
  oldPrice,
  size,
  color,
}) => {
  const { cart, dispatch } = useProductContext();

  const cartItem = cart.find((item) => item.id === id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;
  const isOutOfStock = stock === 0 || quantityInCart >= stock;

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        image,
        title,
        rating,
        stock,
        price,
        oldPrice,
        size,
        color,
      },
    });
  };

  const handleRemoveFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img src={image} alt={title} className="h-full w-auto object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{title}</h3>
        <div className="flex items-center justify-between my-1">
          <RatingStars rating={rating} />
          <span className="text-xs text-gray-700">
            ({stock - quantityInCart} pcs left)
          </span>
        </div>
        <div className="flex items-center">
          <p className="font-bold">${price}</p>
          {oldPrice && (
            <p className="text-gray-400 line-through ml-2">${oldPrice}</p>
          )}
        </div>
        <CartButton
          inCart={!!cartItem && !isOutOfStock}
          onAdd={handleAddToCart}
          onRemove={handleRemoveFromCart}
          disabled={isOutOfStock}
        />
      </div>
    </div>
  );
};

export default ProductCard;
