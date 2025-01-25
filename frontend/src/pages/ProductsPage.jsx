// src/pages/ProductsPage.jsx
import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProductFilters from "../components/products/ProductFilters";
import ProductGrid from "../components/products/ProductGrid";
import productService from "../services/productService";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: null,
    minPrice: null,
    maxPrice: null,
    rating: null,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await productService.getProducts(filters);
      setProducts(data);
    };
    fetchProducts();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <Header />
      <main>
        <ProductFilters onFilterChange={handleFilterChange} />
        <ProductGrid products={products} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
