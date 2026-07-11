import React from "react";

const FoodCities = ({
  item,
  ind,
  groceryCityBannerLimit,
  foodInCitiesLength,
  setGroceryCityBannerLimit,
}) => {
  const showMoreCityGroceryBanner = [24, foodInCitiesLength];
  function expendCityGroceryBanner() {
    const next = showMoreCityGroceryBanner.find(
      (n) => n > groceryCityBannerLimit,
    );
    if (next !== undefined) {
      setGroceryCityBannerLimit(next);
    }
  }
  return (
    <>
      {ind === groceryCityBannerLimit - 1 && ind < foodInCitiesLength - 1 ? (
        <button
          className="border border-[#b9b9b9bf] px-1 py-3 w-[24%] rounded-xl "
          onClick={expendCityGroceryBanner}
        >
          <div className="shrink-0 text-center font-bold text-[#ff5900bf]">
            Show More
          </div>
        </button>
      ) : (
        <a
          className="border border-[#b9b9b9bf] px-1 py-3 w-[24%] rounded-xl "
          href={item.link}
        >
          <div className="shrink-0 text-center font-bold text-[#02060cbf]">
            {item.text}
          </div>
        </a>
      )}
    </>
  );
};

export default FoodCities;
