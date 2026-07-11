import { useRef } from "react";

const GroceryCities = ({
  item,
  ind,
  cityBannerLimit,
  setCityBannerLimit,
  lengthOfFoodInCities,
}) => {
  const showMore = [24, lengthOfFoodInCities];

  function loadGroceryCities() {
    // console.log(ind, lengthOfFoodInCities);

    // console.log(track.current);

    // if (track.current < showMore.length) {
    //   setCityBannerLimit(showMore[track.current]);
    //   track.current++;
    // }

    const next = showMore.find((n) => n > cityBannerLimit);

    if (next !== undefined) {
      setCityBannerLimit(next);
    }
  }

  return (
    <>
      {ind === cityBannerLimit - 1 && ind < lengthOfFoodInCities - 1 ? (
        <button
          onClick={loadGroceryCities}
          className="border border-[#b9b9b9bf] px-1 py-3 w-[24%] rounded-xl "
        >
          <div className="shrink-0 text-center text-[#ff5900bf] font-bold ">
            Show More
          </div>
        </button>
      ) : (
        <a
          href={item.link}
          className="border border-[#b9b9b9bf] px-1 py-3 w-[24%] rounded-xl "
        >
          <div className="shrink-0 text-center text-[#02060cbf] font-bold">
            {item.text}
          </div>
        </a>
      )}
    </>
  );
};

export default GroceryCities;
