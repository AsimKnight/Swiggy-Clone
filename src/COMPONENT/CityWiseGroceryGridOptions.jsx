import React, { useState } from "react";
import cityFoodnGroceryData from "../Utils/bannersData";
import GroceryCities from "./GroceryCities";

const CityWiseGroceryGridOptions = () => {
  const [cityBannerLimit, setCityBannerLimit] = useState(12);
  const foodInCities = cityFoodnGroceryData[1].categories;
  const lengthOfFoodInCities = foodInCities.length - 1;

  return (
    <div className="w-[80%] container mx-auto mb-20">
      <h2 className="mb-3 text-2xl font-bold">Cities with grocery delivery</h2>
      <div className="flex flex-wrap gap-3 justify-center ">
        {foodInCities.slice(0, cityBannerLimit).map((item, ind) => (
          <GroceryCities
            key={item.text}
            item={item}
            ind={ind}
            cityBannerLimit={cityBannerLimit}
            setCityBannerLimit={setCityBannerLimit}
            lengthOfFoodInCities={lengthOfFoodInCities}
          />
        ))}
      </div>
    </div>
  );
};

export default CityWiseGroceryGridOptions;
