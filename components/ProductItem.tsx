import React from 'react';
import { Product } from '../types';
import { useAppDispatch } from '../hooks/useTypedHooks';
import { addToCart } from '../features/cart/cartSlice';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-700 mb-2">${product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-600 mb-2">{product.category}</p>
      <p className="text-sm text-gray-500 mb-4">{product.description}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
