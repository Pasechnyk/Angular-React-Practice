import React, { useState } from 'react';

const Categories = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div>
      <h4>Categories</h4>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={selectedCategory === category ? 'selected' : ''}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
