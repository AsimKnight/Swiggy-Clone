import React from "react";

const Header = () => {
  return (
    <header className="bg-[#ff5200]">
      <div className="flex justify-between items-center  py-8 mx-40">
        <div>
          <img
            className="h-12 w-40"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
            alt="swiggy-logo"
          />
        </div>
        <div className="text-white flex items-center gap-12 text-[16px] font-bold">
          <a href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
          <a href="https://partner.swiggy.com/food/#!/login">Partner With Us</a>
          <a href="" className="border-white border-2 px-5 py-3 rounded-2xl">
            Get The App
          </a>
          <a
            href=""
            className="bg-black border-2 border-black px-9 py-3 rounded-2xl"
          >
            Sign-In
          </a>
        </div>
      </div>
      <div className="relative pt-20">
        <div className=" w-3xl flex justify-center gap-5 container mx-auto ">
          <input
            type="text"
            placeholder="Enter Your Delivery Location"
            className="bg-white px-4 py-5 w-1/3 rounded-xl"
          />
          <input
            type="text"
            placeholder="Search For Food, Restaurant and more "
            className="bg-white px-4 py-5 w-2/3 rounded-xl"
          />
        </div>
        <div>
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
            alt="grocery-img-left"
            className="h-112 w-62 top-0 left-0 absolute object-cover"
          />
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
            alt="grocery-img-right"
            className="h-112 w-62 top-0 right-0 absolute object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <a href="https://www.swiggy.com/restaurants">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png"
            alt="card-img-left"
            className="h-115 w-150 object-contain"
          />
        </a>
        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/7a7904a7-e0a9-4466-8226-715999664e83_IM2BU.png"
            alt="card-img-right"
            className="h-115 w-150 object-contain"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
