// src/components/AddWidgetForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget } from '../features/widgetSlice';

function AddWidgetForm() {
  const categories = useSelector((state) => state.widgets.categories);
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addWidget({
        category: selectedCategory,
        widget: { id: Math.random(), name: widgetName, text: widgetText },
      })
    );
    setWidgetName('');
    setWidgetText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Widget</h3>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Widget Name"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Widget Text"
        value={widgetText}
        onChange={(e) => setWidgetText(e.target.value)}
        required
      />
      <button type="submit">Add Widget</button>
    </form>
  );
}

export default AddWidgetForm;
