import React, { useState } from "react";
import cityFoodnGroceryData from "../Utils/bannersData";
import FoodCities from "./FoodCities";

const CityWiseFoodGridOptions = () => {
  const [groceryCityBannerLimit, setGroceryCityBannerLimit] = useState(12);
  const foodInCities = cityFoodnGroceryData[0].categories;
  const foodInCitiesLength = foodInCities.length - 1;

  return (
    <div className="w-[80%] container mx-auto mb-20">
      <h2 className="mb-3 text-2xl font-bold">Cities with food delivery</h2>
      <div className="flex flex-wrap gap-3 justify-center ">
        {foodInCities.slice(0, groceryCityBannerLimit).map((item, ind) => (
          <FoodCities
            item={item}
            key={item.text}
            groceryCityBannerLimit={groceryCityBannerLimit}
            setGroceryCityBannerLimit={setGroceryCityBannerLimit}
            foodInCitiesLength={foodInCitiesLength}
            ind={ind}
          />
        ))}
      </div>
    </div>
  );
};

export default CityWiseFoodGridOptions;
