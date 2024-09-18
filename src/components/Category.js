// src/components/Category.js
import React from 'react';
import Widget from './Widget';

function Category({ category, removeWidget }) {
  return (
    <div className="category">
      <h3>{category.name}</h3>
      <div className="widgets-container">
        {category.widgets.map((widget, index) => (
          <Widget
            key={index}
            widget={widget}
            category={category.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
