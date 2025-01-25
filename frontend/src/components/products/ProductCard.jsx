import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-bold">{product.name}</h3>
        </Link>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-600">{product.price.toFixed(2)} CFA</span>
          <button className="bg-waxo-primary hover:bg-waxo-primary/80 text-white px-3 py-2 rounded">
            <ShoppingCart size={18} className="inline-block" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
