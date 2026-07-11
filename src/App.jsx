import React from "react";

import Header from "./COMPONENT/Header";
import FoodOptions from "./COMPONENT/FoodOptions";
import GroceryOptions from "./COMPONENT/GroceryOptions";
import RestaurantOptions from "./COMPONENT/RestaurantOptions";
import SwiggyMobileBanner from "./COMPONENT/SwiggyMobileBanner";
import CityWiseFoodGridOptions from "./COMPONENT/CityWiseFoodGridOptions";
import CityWiseGroceryGridOptions from "./COMPONENT/CityWiseGroceryGridOptions";
import Footer from "./COMPONENT/Footer";

const App = () => {
  return (
    <>
      <Header />
      <FoodOptions />
      <GroceryOptions />
      <RestaurantOptions />
      <SwiggyMobileBanner />
      <CityWiseFoodGridOptions />
      <CityWiseGroceryGridOptions />
      <Footer />
    </>
  );
};

export default App;
