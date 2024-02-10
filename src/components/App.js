// App.js

import React, { useState } from "react";
import "../index.css"; // Import global styles
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State for toggling dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to handle dark mode toggle
  function handleDarkModeClick() {
    // Toggle dark mode state
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  }

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      {/* Header component with dark mode toggle callback */}
      <Header onDarkModeClick={handleDarkModeClick} />
      {/* ShoppingList component with item data */}
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
