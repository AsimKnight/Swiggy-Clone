import React from "react";

const ShowRestaurant = ({ hotel }) => {
  return (
    <div className="h-94 w-82 shrink-0 shadow rounded-xl">
      <div className="relative">
        <img
          className="object-cover rounded-t-2xl"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            hotel?.info?.mediaFiles[0]?.url
          }
          alt=""
        />
        <span className="absolute bottom-2 left-2 text-xl font-bold text-white z-1">
          {hotel.info.name}
        </span>
        <span className="absolute bottom-2 right-2 text-xl font-bold text-white z-1">
          {hotel.info.rating.value}
        </span>

        <div className=" bg-linear-to-t from-black  absolute bottom-0 left-0 right-0 h-10"></div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between text-gray-600 text-[12px] font-semibold px-2 py-1">
          <p className="text-gray-600  font-semibold">
            {hotel.info.cuisines.map((info, ind) => {
              return ind == 0 ? (
                <span key={info}>{info + ", "}</span>
              ) : (
                <span key={info}>{info + "."}</span>
              );
            })}
          </p>
          <p>{hotel.info.costForTwo}</p>
        </div>
        <div className="flex justify-between text-gray-600 text-[12px] font-semibold px-2 mb-2">
          <p>{hotel.info.locationInfo.formattedAddress}</p>
          <p>{hotel.info.locationInfo.distanceString}</p>
        </div>
        <div className="flex flex-col items-center">
          {hotel?.info?.offerInfoV2?.otherOffers?.offers?.[0]?.header && (
            <button className=" w-[95%] contianer mx-auto py-1 font-bold text-white bg-[#1BA672] rounded-lg">
              {hotel?.info?.offerInfoV2?.otherOffers?.offers?.[0]?.header &&
                hotel?.info?.offerInfoV2?.otherOffers?.offers?.[0]?.header +
                  " with " +
                  hotel?.info?.offerInfoV2?.otherOffers?.offers?.[0]
                    ?.dealCategory}
            </button>
          )}
        </div>
        <div className="flex flex-col items-center mt-2">
          <button className="w-[95%] contianer mx-auto py-1 font-bold text-[#1BA672] bg-[#c8f9e5] rounded-lg">
            {hotel?.info?.customerOffer?.infos[0]?.description
              ? hotel?.info?.customerOffer?.infos[0]?.description
              : ""}
          </button>
        </div>
        <div className=" mt-2 text-[12px] font-semibold">
          <p className="ml-3 text-[#5134b6]">
            {hotel?.info?.vendorOffer?.infos[0]?.header}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowRestaurant;
