import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";

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

      const tempData =
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      const filterTempData = tempData.filter((el) => "title" in el?.card?.card);

      setSingleRestData(filterTempData);
    }
    fetchData();
  }, []);

  console.log(singleRestData);
  return (
    <>
      <div className="w-[80%] mx-auto mt-20">
        {singleRestData.map((menuItem) => (
          <MenuCard
            key={menuItem?.card?.card?.title}
            cards={menuItem?.card?.card}
          />
        ))}
      </div>
      {}
    </>
  );
};

export default RestaurantMenu;
