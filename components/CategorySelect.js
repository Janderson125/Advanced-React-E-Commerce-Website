import React from 'react';

const CategorySelect = ({ categories, selectedCategory, onChange }) => {
  return (
    <select value={selectedCategory} onChange={onChange}>
      <option value=''>All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;