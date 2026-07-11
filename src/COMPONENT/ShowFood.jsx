import React from "react";

const ShowFood = ({ foodItem }) => {
  return (
    <>
      <a href={foodItem?.action?.link}>
        <img
          className="w-40 h-50  object-contain  "
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            foodItem?.imageId
          }
          alt=""
        />
      </a>
    </>
  );
};

export default ShowFood;
