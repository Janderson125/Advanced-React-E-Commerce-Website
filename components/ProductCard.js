import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} width="150" />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
      {/* Assuming rate info exists in product.rating.rate */}
      {product.rating && <p>Rating: {product.rating.rate}</p>}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;