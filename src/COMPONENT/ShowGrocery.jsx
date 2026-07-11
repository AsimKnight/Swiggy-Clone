import React from "react";

const ShowGrocery = ({ groceryItem }) => {
  return (
    <div className="shrink-0">
      <div>
        <img
          className="h-45 w-36 object-contain"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            groceryItem.imageId
          }
          alt=""
        />
      </div>
      <h3 className="font-bold w-[85%] text-center">
        {groceryItem.action.text}
      </h3>
    </div>
  );
};

export default ShowGrocery;
