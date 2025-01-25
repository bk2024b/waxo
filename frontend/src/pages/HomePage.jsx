// src/pages/HomePage.jsx
import React from "react";

import HeroSection from "../components/home/HeroSection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Loyalty from "../components/home/Loyalty";
import PaymentMethods from "../components/home/PaymentsMethods";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer";
const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <Loyalty />
        <PaymentMethods />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
