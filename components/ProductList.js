import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchProducts, fetchCategories } from '../services/api';
import ProductCard from './ProductCard';
import CategorySelect from './CategorySelect';

const ProductList = () => {
  const [category, setCategory] = useState('');
  const { data: categories, isLoading: categoriesLoading } = useQuery(
    'categories',
    fetchCategories
  );

  const {
    data: products,
    isLoading: productsLoading,
    refetch,
  } = useQuery(['products', category], () => fetchProducts(category), {
    enabled: !!categories,
  });

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  if (categoriesLoading || productsLoading) return <div>Loading...</div>;

  return (
    <div>
      <CategorySelect
        categories={categories}
        selectedCategory={category}
        onChange={handleCategoryChange}
      />
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;