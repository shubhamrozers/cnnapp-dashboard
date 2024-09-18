// src/components/Widget.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../features/widgetSlice';

function Widget({ widget, category }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ category, widgetId: widget.id }));
  };

  return (
    <div className="widget">
      <h4>{widget.name}</h4>
      <p>{widget.text}</p>
      <button onClick={handleRemove}>✖</button>
    </div>
  );
}

export default Widget;
