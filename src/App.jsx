import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

import Home from "./COMPONENT/Home";
import Restaurant from "./COMPONENT/Restaurant";
import RestaurantMenu from "./COMPONENT/RestaurantMenu";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/restaurant" element={<Restaurant />}></Route>
          <Route
            path="/city/ahmedabad/:id"
            element={<RestaurantMenu />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
