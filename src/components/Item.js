// Item.js

import React, { useState } from "react";

function Item({ name, category }) {
  // State to track whether the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Function to handle the "Add to Cart" button click
  function handleAddToCartClick() {
    // Toggle the isInCart state
    setIsInCart((prevIsInCart) => !prevIsInCart);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      {/* Display item name */}
      <span>{name}</span>
      {/* Display item category */}
      <span className="category">{category}</span>
      {/* Button to add/remove item from cart with onClick callback */}
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {/* Display dynamic button text based on isInCart state */}
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
