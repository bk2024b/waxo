import React, { useState } from "react";

const ProductFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: null,
    minPrice: null,
    maxPrice: null,
    rating: null,
  });

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
    onFilterChange(filters);
  };

  return (
    <div className="bg-gray-100 py-6 px-8">
      <h3 className="text-lg font-bold mb-4">Filters</h3>
      <div className="grid grid-cols-4 gap-6">
        <div>
          <label htmlFor="category" className="block font-medium mb-2">
            Category
          </label>
          <select
            id="category"
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
            className="px-4 py-2 border rounded w-full"
          >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home</option>
          </select>
        </div>
        <div>
          <label htmlFor="min-price" className="block font-medium mb-2">
            Min Price
          </label>
          <input
            id="min-price"
            type="number"
            value={filters.minPrice || ""}
            onChange={(e) => handleFilterChange("minPrice", e.target.value)}
            className="px-4 py-2 border rounded w-full"
          />
        </div>
        {/* Add more filter options here */}
      </div>
    </div>
  );
};

export default ProductFilters;
