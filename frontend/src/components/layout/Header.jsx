import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-waxo-primary text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">
            Waxô
          </Link>
          <nav className="ml-8">
            <ul className="flex space-x-4">
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/cart">
                  <ShoppingCart size={20} className="inline-block mr-2" />
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/auth">
                  <User size={20} className="inline-block mr-2" />
                  Auth
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <button className="bg-waxo-secondary hover:bg-waxo-secondary/80 text-white px-4 py-2 rounded">
            Become a Seller
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
