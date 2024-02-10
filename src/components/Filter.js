// Filter.js

import React from "react";

function Filter({ onCategoryChange }) {
  // Callback to handle category change and invoke the parent callback
  function handleChange(event) {
    const newCategory = event.target.value;
    onCategoryChange(newCategory);
  }

  return (
    <div className="Filter">
      <select name="filter" onChange={handleChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
