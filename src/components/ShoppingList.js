// ShoppingList.js

import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  // State for the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Callback to handle category change
  function handleCategoryChange(newCategory) {
    // Update the selectedCategory state
    setSelectedCategory(newCategory);
  }

  // Filter items based on the selected category
  const itemsToDisplay = items.filter((item) => {
    // If the selected category is "All", display all items
    if (selectedCategory === "All") return true;

    // Otherwise, filter items by the selected category
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      {/* Filter component with onCategoryChange callback */}
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {/* Map through filtered items and render Item components */}
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
