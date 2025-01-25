import React from "react";
import { Trash2 } from "lucide-react";

const CartItems = ({ items, onUpdate, onRemove }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
      {items.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Product</th>
              <th className="py-2 px-4 text-right">Price</th>
              <th className="py-2 px-4 text-right">Quantity</th>
              <th className="py-2 px-4 text-right">Total</th>
              <th className="py-2 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-4 px-4 flex items-center">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <span>{item.name}</span>
                </td>
                <td className="py-4 px-4 text-right">
                  {item.price.toFixed(2)} CFA
                </td>
                <td className="py-4 px-4 text-right">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => onUpdate(item.id, e.target.value)}
                    className="w-16 px-2 py-1 border rounded"
                  />
                </td>
                <td className="py-4 px-4 text-right">
                  {(item.price * item.quantity).toFixed(2)} CFA
                </td>
                <td className="py-4 px-4 text-right">
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartItems;
