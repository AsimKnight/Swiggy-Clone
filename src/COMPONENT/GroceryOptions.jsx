import React, { useState } from "react";
import GroceryData from "../Utils/groceryData";
import ShowGrocery from "./ShowGrocery";

import Arrow from "./Arrow";

const GroceryOptions = () => {
  const [x, setX] = useState(0);

  const STEP = 900; // px per click
  const MAX = 2700; // adjust based on your layout

  function showRightFoodPanel() {
    setX((prev) => Math.min(prev + STEP, MAX));
  }

  function showLeftFoodPanel() {
    setX((prev) => Math.max(prev - STEP, 0));
  }

  return (
    <div className="w-[80%] container mx-auto mt-30 ">
      <div className="flex justify-between">
        <h2 className="font-bold">Shop groceries on Instamart</h2>

        <div className="flex gap-3">
          <Arrow direction={"left"} onClick={showLeftFoodPanel} />
          <Arrow direction={"right"} onClick={showRightFoodPanel} />
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div
          style={{
            transform: `translateX(-${x}px)`, // 👈 FIX (move left)
            transition: "transform 0.3s ease",
          }}
          className="w-[145%] flex  gap-3 mt-5"
        >
          {GroceryData.map((groceryItem) => (
            <ShowGrocery groceryItem={groceryItem} key={groceryItem.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroceryOptions;
