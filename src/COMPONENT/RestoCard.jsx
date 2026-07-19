import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestoCard = ({ el, restoDataLength, ind }) => {
  return (
    <NavLink to={"/city/ahmedabad/" + el.info.id}>
      <div className=" w-74 h-76 shrink-0 transform transition duration-200 hover:scale-95">
        <div className="w-68 h-45 relative rounded-3xl">
          <img
            className="w-full h-full object-cover rounded-3xl"
            loading="lazy"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              el.info.cloudinaryImageId
            }
            alt=""
          />
          <span className="ml-3 pb-2 absolute bottom-0 w-full  font-bold text-xl text-white z-10">
            {el.info?.aggregatedDiscountInfoV3?.header +
              " " +
              el.info?.aggregatedDiscountInfoV3?.subHeader}
          </span>
          <div className="bg-linear-to-t from-black  absolute bottom-0 left-0 right-0 h-12 rounded-b-3xl"></div>
        </div>
        <div className="ml-4 ">
          <p className="font-bold text-lg mt-2">{el.info.name}</p>
          <div className="flex gap-1 items-center">
            <div className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
              <FontAwesomeIcon icon={faStar} className="text-[10px]" />
            </div>
            <p className="font-bold text-md">{el.info.avgRating}</p>
            <span className="mx-1">•</span>

            <p className="font-bold text-md">{el.info.sla.slaString}</p>
          </div>
          <p className="text-[#02060C99]">
            {el.info.cuisines.map((cuisine, ind) =>
              ind < el.info.cuisines.length - 1 ? cuisine + ", " : cuisine,
            )}
          </p>
          <p className="text-[#02060C99] ">{el.info.areaName}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default RestoCard;
