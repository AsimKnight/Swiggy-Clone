import React from "react";

const Shimmer = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="w-[80%] mx-auto my-20 flex flex-wrap gap-3 mt-20">
      {arr.map((el) => (
        <div className="w-70 h-75">
          <div className="w-full h-[60%] bg-gray-300 rounded-xl"></div>
          <div className="">
            <div className="w-full h-6 bg-gray-300 mt-2 rounded-md"></div>
            <div className="w-full h-6 bg-gray-300 mt-2 rounded-md"></div>
            <div className="w-full h-6 bg-gray-300 mt-2 rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
