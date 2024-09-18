// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import Category from './components/Category';
import AddWidgetForm from './components/AddWidgetForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const { categories, searchQuery } = useSelector((state) => state.widgets);

  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <div className="container">
      <h1>CNAPP Dashboard</h1>
      <SearchBar />
      {filteredCategories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
      <AddWidgetForm />
    </div>
  );
}

export default App;
