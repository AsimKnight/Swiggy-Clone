import React, { useEffect, useState, useRef } from "react";
import RestoCard from "./RestoCard";
import Arrow from "./Arrow";

const Restaurant = () => {
  const [restoData, setRestoData] = useState([]);

  const scrollRef = useRef(); // ✅ NEW

  const step = 600; // px (adjust based on card width)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.027892&lng=72.506543",
        );
        const data = await res.json();

        const allRestoArray =
          data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

        setRestoData(allRestoArray);
      } catch (err) {
        console.error("Error:", err);
      }
    }

    fetchData();
  }, []);

  // ✅ UPDATED (no state needed)
  function handleLeftClick() {
    scrollRef.current.scrollBy({
      left: -step,
      behavior: "smooth",
    });
  }

  function handleRightClick() {
    scrollRef.current.scrollBy({
      left: step,
      behavior: "smooth",
    });
  }

  return (
    <div className="w-[80%] mx-auto my-20">
      <div className="flex justify-between">
        <h4 className="font-bold text-2xl mb-3">
          Top restaurant chains in Ahmedabad
        </h4>

        <div>
          <Arrow direction={"left"} onClick={handleLeftClick} />
          <Arrow direction={"right"} onClick={handleRightClick} />
        </div>
      </div>

      {/* ✅ SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        className="overflow-x-hidden no-scrollbar h-90 scroll-smooth"
      >
        <div className="flex gap-3">
          {restoData.map((el) => (
            <RestoCard key={el.info.id} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;

//MORE SMOOTH BEHAVIOUR
// import React, { useEffect, useState, useRef } from "react";
// import RestoCard from "./RestoCard";
// import Arrow from "./Arrow";

// const Restaurant = () => {
//   const [restoData, setRestoData] = useState([]);
//   const scrollRef = useRef();

//   const step = 800; // ✅ tuned for smoother scroll

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch(
//           "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.027892&lng=72.506543",
//         );
//         const data = await res.json();

//         const allRestoArray =
//           data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

//         setRestoData(allRestoArray);
//       } catch (err) {
//         console.error("Error:", err);
//       }
//     }

//     fetchData();
//   }, []);

//   // ✅ smooth scroll handlers
//   function handleLeftClick() {
//     scrollRef.current.scrollBy({
//       left: -step,
//       behavior: "smooth",
//     });
//   }

//   function handleRightClick() {
//     scrollRef.current.scrollBy({
//       left: step,
//       behavior: "smooth",
//     });
//   }

//   return (
//     <div className="w-[80%] mx-auto my-20">
//       <div className="flex justify-between">
//         <h4 className="font-bold text-2xl mb-3">
//           Top restaurant chains in Ahmedabad
//         </h4>

//         <div>
//           <Arrow direction={"left"} onClick={handleLeftClick} />
//           <Arrow direction={"right"} onClick={handleRightClick} />
//         </div>
//       </div>

//       {/* ✅ Scroll container */}
//       <div
//         ref={scrollRef}
//         className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory h-90"
//       >
//         <div className="flex gap-3 will-change-transform">
//           {restoData.map((el) => (
//             <div key={el.info.id} className="snap-start">
//               <RestoCard el={el} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Restaurant;
