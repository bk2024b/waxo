import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-waxo-secondary text-white py-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">Welcome to Waxô</h1>
          <p className="text-lg mb-8">
            Discover the best products and enjoy a modern e-commerce experience
            in Benin.
          </p>
          <Link
            to="/products"
            className="bg-waxo-primary hover:bg-waxo-primary/80 text-white px-6 py-3 rounded"
          >
            Shop Now
          </Link>
        </div>
        <div className="w-1/2">
          <img
            src="/hero-image.png"
            alt="Hero Image"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
