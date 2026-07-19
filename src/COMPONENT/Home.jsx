import React from "react";

import Header from "./Header";
import FoodOptions from "./FoodOptions";
import GroceryOptions from "./GroceryOptions";
import RestaurantOptions from "./RestaurantOptions";
import SwiggyMobileBanner from "./SwiggyMobileBanner";
import CityWiseFoodGridOptions from "./CityWiseFoodGridOptions";
import CityWiseGroceryGridOptions from "./CityWiseGroceryGridOptions";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <FoodOptions />
      <GroceryOptions />
      <RestaurantOptions />
      <SwiggyMobileBanner />
      <CityWiseFoodGridOptions />
      <CityWiseGroceryGridOptions />
      <Footer />
    </div>
  );
}
