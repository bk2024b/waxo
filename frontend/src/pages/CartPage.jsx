// src/pages/CartPage.jsx
import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CartItems from "../components/cart/CartItems";
import CartSummary from "../components/cart/CartSummary";
import cartService from "../services/cartService";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCartData = async () => {
      const { items, totalAmount } = await cartService.getCartDetails();
      setCartItems(items);
      setTotal(totalAmount);
    };
    fetchCartData();
  }, []);

  const updateCartItem = async (itemId, quantity) => {
    await cartService.updateCartItem(itemId, quantity);
    const { items, totalAmount } = await cartService.getCartDetails();
    setCartItems(items);
    setTotal(totalAmount);
  };

  const removeCartItem = async (itemId) => {
    await cartService.removeCartItem(itemId);
    const { items, totalAmount } = await cartService.getCartDetails();
    setCartItems(items);
    setTotal(totalAmount);
  };

  return (
    <div>
      <Header />
      <main>
        <CartItems
          items={cartItems}
          onUpdate={updateCartItem}
          onRemove={removeCartItem}
        />
        <CartSummary total={total} />
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
