import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [singleRestData, setSingleRestData] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function fetchData() {
      // const res = await fetch(
      //   `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.027892&lng=72.506543&restaurantId=${id}`,
      // );

      const res = await fetch(`http://localhost:5000/api/menu/${id}`);

      // const text = await res.text();
      // console.log(text);

      const data = await res.json();
      console.log(data);
      setSingleRestData(data);
    }
    fetchData();
  }, []);
  // console.log("line after fetch data " + singleRestData?.data?.isQCLink);
  return <div>RestaurantMenu id is {id}</div>;
};

export default RestaurantMenu;
