import React, { useState } from "react";
import imageGridCards from "../Utils/foodData";
import ShowFood from "./ShowFood";

import Arrow from "./Arrow";

const FoodOptions = () => {
  const [x, setX] = useState(0);

  const STEP = 300; // px per click
  const MAX = 300; // adjust based on your layout

  function showRightFoodPanel() {
    setX((prev) => Math.min(prev + STEP, MAX));
  }

  function showLeftFoodPanel() {
    setX((prev) => Math.max(prev - STEP, 0));
  }

  return (
    <div className="w-[80%] container mx-auto mt-20 text-2xl">
      <div className="flex justify-between">
        <h2 className="font-bold">Order our best food options</h2>

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
          className="w-[145%] flex flex-wrap gap-3 mt-5"
        >
          {imageGridCards.map((foodItem) => (
            <ShowFood foodItem={foodItem} key={foodItem.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodOptions;
