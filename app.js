import React from 'react';

function App() {
  const products = [
    {
      id: 1,
      name: 'Product One',
      price: '$29.99',
      description: 'A great product.',
    },
    {
      id: 2,
      name: 'Product Two',
      price: '$49.99',
      description: 'Another fantastic product.',
    },
    {
      id: 3,
      name: 'Product Three',
      price: '$19.99',
      description: 'A budget-friendly item.',
    },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to Your E-Commerce Site!</h1>
      <h2>Product List</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '8px',
              width: '200px',
            }}
          >
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p style={{ fontWeight: 'bold' }}>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;