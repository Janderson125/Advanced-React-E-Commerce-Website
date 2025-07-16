import { useQuery } from 'react-query';

const fetchProducts = async (category) => {
  const endpoint = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : 'https://fakestoreapi.com/products';
  const response = await fetch(endpoint);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

const fetchCategories = async () => {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

export { fetchProducts, fetchCategories };