import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

import Header from "./COMPONENT/Header";
import FoodOptions from "./COMPONENT/FoodOptions";
import GroceryOptions from "./COMPONENT/GroceryOptions";
import RestaurantOptions from "./COMPONENT/RestaurantOptions";
import SwiggyMobileBanner from "./COMPONENT/SwiggyMobileBanner";
import CityWiseFoodGridOptions from "./COMPONENT/CityWiseFoodGridOptions";
import CityWiseGroceryGridOptions from "./COMPONENT/CityWiseGroceryGridOptions";
import Footer from "./COMPONENT/Footer";
import Restaurant from "./COMPONENT/Restaurant";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
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
            }
          ></Route>
          <Route path="/restaurant" element={<Restaurant />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
