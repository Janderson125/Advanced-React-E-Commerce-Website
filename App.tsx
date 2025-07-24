import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ProductItem from './components/ProductItem';
import ShoppingCart from './components/ShoppingCart';
import { Product } from './types';

const fetchCategories = async (): Promise<string[]> => {
  const res = await axios.get<string[]>('https://fakestoreapi.com/products/categories');
  return res.data;
};

const fetchProducts = async (category: string): Promise<Product[]> => {
  const url = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : 'https://fakestoreapi.com/products';
  const res = await axios.get<Product[]>(url);
  return res.data;
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useQuery<string[], Error>(['categories'], fetchCategories);

  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useQuery<Product[], Error>(['products', selectedCategory], () => fetchProducts(selectedCategory));

  if (categoriesError)
    return <div>Error loading categories: {categoriesError.message}</div>;
  if (productsError)
    return <div>Error loading products: {productsError.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Fake Store</h1>

      <label htmlFor="categorySelect" className="sr-only">
        Select product category
      </label>
      <select
        id="categorySelect"
        aria-label="Select product category"
        className="mb-4 p-2 border rounded"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories?.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {productsLoading ? (
        <p>Loading products...</p>
      ) : products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}

      <ShoppingCart />
    </div>
  );
}

export default App;
