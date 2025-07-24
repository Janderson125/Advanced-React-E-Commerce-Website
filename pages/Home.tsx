// Home.tsx
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Product } from '../types';
import ProductItem from '../components/ProductItem';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Fetch categories
  const {
    data: categories,
    isLoading: isLoadingCategories,
    error: categoriesError,
  } = useQuery<string[], Error>(['categories'], async () => {
    const res = await axios.get<string[]>('https://fakestoreapi.com/products/categories');
    return res.data;
  });

  // Fetch products
  const {
    data: products,
    isLoading: isLoadingProducts,
    error: productsError,
  } = useQuery<Product[], Error>(
    ['products', selectedCategory],
    async () => {
      const url = selectedCategory
        ? `https://fakestoreapi.com/products/category/${selectedCategory}`
        : 'https://fakestoreapi.com/products';
      const res = await axios.get<Product[]>(url);
      return res.data;
    }
  );

  if (categoriesError) return <p>Error loading categories: {categoriesError.message}</p>;
  if (productsError) return <p>Error loading products: {productsError.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Catalog</h1>

      <label htmlFor="category-select" className="block mb-2 font-semibold">
        Filter by Category
      </label>
      <select
        id="category-select"
        aria-label="Product Category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="mb-6 p-2 border rounded"
      >
        <option value="">All Categories</option>
        {categories?.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {isLoadingProducts ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
