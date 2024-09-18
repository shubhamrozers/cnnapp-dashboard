// src/features/widgets/widgetSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Cloud Accounts", text: "Connected (2)\nNot Connected (2)" },
        { id: 2, name: "Cloud Account Risk Assessment", text: "9659 Total" },
      ],
    },
    {
      name: "CWPP Dashboard",
      widgets: [
        { id: 3, name: "Top 5 Namespace Specific Alerts", text: "No Graph data available" },
        { id: 4, name: "Workload Alerts", text: "No Graph data available" },
      ],
    },
  ],
  searchQuery: '',
};

const widgetSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    addWidget(state, action) {
      const category = state.categories.find(
        (cat) => cat.name === action.payload.category
      );
      category.widgets.push(action.payload.widget);
    },
    removeWidget(state, action) {
      const category = state.categories.find(
        (cat) => cat.name === action.payload.category
      );
      category.widgets = category.widgets.filter(
        (widget) => widget.id !== action.payload.widgetId
      );
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { addWidget, removeWidget, setSearchQuery } = widgetSlice.actions;

export default widgetSlice.reducer;
