import React from "react";

const CartButton = ({ inCart, onAdd, onRemove, disabled }) => {
  const handleClick = () => {
    if (inCart) {
      onRemove();
    } else {
      onAdd();
    }
  };

  return (
    <button
      className={`w-full mt-2 py-1 rounded text-sm font-medium flex items-center justify-center transition-all active:translate-y-1 ${
        disabled
          ? "bg-gray-400 text-white cursor-not-allowed"
          : inCart
          ? "bg-red-800 text-white cursor-pointer"
          : "bg-gray-800 text-white active:bg-gray-900 cursor-pointer"
      }`}
      onClick={handleClick}
      disabled={disabled}
    >
      {" "}
      {/* For better ui ux we can show the button text out of stock */}
      {disabled ? "Add to Cart" : inCart ? "Remove from Cart" : "Add to Cart"}
    </button>
  );
};

export default CartButton;
