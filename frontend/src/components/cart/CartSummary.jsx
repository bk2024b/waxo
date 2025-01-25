import React from "react";
import { Link } from "react-router-dom";

const CartSummary = ({ total }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-600">Subtotal:</span>
        <span className="font-bold">{total.toFixed(2)} CFA</span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-600">Delivery:</span>
        <span className="font-bold">Free</span>
      </div>
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-600">Total:</span>
        <span className="text-2xl font-bold">{total.toFixed(2)} CFA</span>
      </div>
      <Link
        to="/checkout"
        className="bg-waxo-primary hover:bg-waxo-primary/80 text-white w-full py-3 px-6 rounded font-medium"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default CartSummary;
