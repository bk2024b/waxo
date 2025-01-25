import React, { useState, useEffect } from "react";
import ProductCard from "../products/ProductCard";
import productService from "../../services/productService";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const getFeaturedProducts = async () => {
      const products = await productService.getFeaturedProducts();
      setFeaturedProducts(products);
    };
    getFeaturedProducts();
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
