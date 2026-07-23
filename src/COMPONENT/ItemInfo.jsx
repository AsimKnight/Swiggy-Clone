import React from "react";

const ItemInfo = ({ info }) => {
  return (
    <>
      <div className="w-full flex justify-between mb-5 pb-2 items-center">
        <div className="w-[70%]">
          <p className="text-2xl text-gray-700 font-semibold mb-2">
            {info?.name}
          </p>
          {/* <p>{"₹" + info?.defaultPrice / 100}</p> */}
          <p>
            {"defaultPrice" in info
              ? "₹" + info.defaultPrice / 100
              : "₹" + info.price / 100}
          </p>
          <span className="text-green-800">
            {info?.ratings?.aggregatedRating?.rating}
          </span>
          <span>
            {"(" + info?.ratings?.aggregatedRating?.ratingCountV2 + ")"}
          </span>
          <p>{info?.description}</p>
        </div>
        <div className="w-[20%] relative">
          <img
            className="w-full h-36 object-cover "
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              info?.imageId
            }
            alt=""
          />
          <button className="absolute top-30 left-21 font-bold text-green-600 text-xl px-4 py-2 bg-white border shadow-md border-white rounded-xl">
            ADD
          </button>
        </div>
      </div>
      <hr className="w-full mx-auto my-3"></hr>
    </>
  );
};

export default ItemInfo;
//--------------------------------------------------------------------
// import React from "react";

// const ItemInfo = ({ info }) => {
//   const { name, defaultPrice, price, description, imageId, ratings } =
//     info || {};

//   const rating = ratings?.aggregatedRating?.rating;
//   const ratingCount = ratings?.aggregatedRating?.ratingCountV2;

//   return (
//     <div className="border-b pb-6 mb-6 flex justify-between gap-4">
//       {/* LEFT */}
//       <div className="w-[70%] flex flex-col gap-2">
//         {/* Name */}
//         <h2 className="text-lg font-bold">{name}</h2>

//         {/* Price */}
//         <p className="font-semibold">₹{(defaultPrice || price) / 100}</p>

//         {/* Rating */}
//         {rating && (
//           <div className="flex items-center gap-2 text-sm">
//             <span className="text-green-600 font-bold">★ {rating}</span>
//             <span className="text-gray-500">({ratingCount})</span>
//           </div>
//         )}

//         {/* Description */}
//         <p className="text-gray-500 text-sm line-clamp-2">{description}</p>
//       </div>

//       {/* RIGHT */}
//       <div className="w-[30%] relative flex flex-col items-center">
//         {/* Image */}
//         <img
//           className="w-[140px] h-[110px] object-cover rounded-lg"
//           src={
//             imageId
//               ? "https://media-assets.swiggy.com/swiggy/image/upload/" + imageId
//               : "https://via.placeholder.com/150"
//           }
//           alt={name}
//         />

//         {/* ADD button */}
//         <button className="absolute bottom-4 bg-white text-green-600 font-bold px-6 py-1 rounded-lg shadow-md border">
//           ADD
//         </button>

//         {/* Customisable */}
//         <p className="text-xs text-gray-400 mt-2">Customisable</p>
//       </div>
//     </div>
//   );
// };

// export default ItemInfo;
