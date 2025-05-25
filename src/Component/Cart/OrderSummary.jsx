import React from "react";
import SvgIcon from "../ResuableComponent/SvgIcon";
import Button from "../ResuableComponent/Button";
import { useProductContext } from "../../Context/ProductContext";
import { calculateTotals } from "../../Context/productReducer";

const OrderSummary = () => {
  const { cart, discountRate, deliveryFee } = useProductContext();

  const { subtotal, discount, total } = calculateTotals(
    cart,
    discountRate,
    deliveryFee
  );
  return (
    <div className="mt-6">
      <h3 className="font-bold text-lg mb-4">Order Summary</h3>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-red-500">
          <span>
            Discount (-{discountRate ? (discountRate * 100).toFixed(0) : 20}%)
          </span>
          <span>-${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Delivery Fee</span>
          <span className="font-medium">${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex items-center space-x-2 mb-6">
        <div className="flex-grow relative">
          <input
            type="text"
            placeholder="Add promo code"
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
          />
          <SvgIcon name="promo" />
        </div>
        <Button className="bg-black text-white rounded-md px-4 py-2 text-sm">
          Apply
        </Button>
      </div>

      <a
        href="#"
        className="block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
      >
        Go to Checkout <span className="inline-block ml-2">→</span>
      </a>
    </div>
  );
};

export default OrderSummary;
