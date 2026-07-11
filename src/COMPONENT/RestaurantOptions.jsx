import React, { useState } from "react";
import RestaurantData from "../Utils/RestaurantData";
import ShowRestaurant from "./ShowRestaurant";

import Arrow from "./Arrow";

const RestaurantOptions = () => {
  const [x, setX] = useState(0);

  const STEP = 400; // px per click
  const MAX = 2200; // adjust based on your layout

  function showRightFoodPanel() {
    setX((prev) => Math.min(prev + STEP, MAX));
  }

  function showLeftFoodPanel() {
    setX((prev) => Math.max(prev - STEP, 0));
  }

  return (
    <>
      <div className="w-[80%] container mx-auto mb-20 mt-20">
        <div className="flex justify-between">
          <h2 className="mb-3 text-2xl font-bold">
            Discover best restaurants on Dineout
          </h2>
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
            {RestaurantData.map((hotel) => (
              <ShowRestaurant hotel={hotel} key={hotel.info.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantOptions;
