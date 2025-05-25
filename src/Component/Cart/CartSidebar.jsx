import React from "react";
import { useProductContext } from "../../context/productcontext";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

const CartSidebar = () => {
  const { cart } = useProductContext();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => <CartItem key={item.id} {...item} />)
        )}

        <OrderSummary totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default CartSidebar;
