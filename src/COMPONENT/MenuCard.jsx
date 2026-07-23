import React, { useState } from "react";
import ItemInfo from "./ItemInfo";

const MenuCard = ({ cards }) => {
  const { title, itemCards } = cards;
  const [isOpen, setIsOpen] = useState(true);

  if ("categories" in cards) {
    return (
      <div className="w-full">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div>
          {cards?.categories?.map((item) => (
            <MenuCard key={item.title} cards={item} />
          ))}
        </div>
      </div>
    );
  }

  if (!isOpen) {
    return (
      <div>
        <div className="w-ful">
          <div className="flex justify-between w-full">
            <h3 className="text-3xl font-bold mb-4">{title}</h3>
            <button
              className="text-5xl mr-20 font-bold"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "^" : "˅"}
            </button>
          </div>
          <hr className="w-full mx-auto my-3"></hr>
        </div>
      </div>
    );
  }

  return (
    <div className="w-ful">
      <div className="flex justify-between w-full">
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <button
          className="text-5xl mr-20 font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "^" : "˅"}
        </button>
      </div>
      <div>
        {itemCards?.map((item) => (
          <ItemInfo key={item?.card?.info?.id} info={item?.card?.info} />
        ))}
      </div>
    </div>
  );
};

export default MenuCard;
//---------------------------------------------------------------------

// import React, { useState } from "react";
// import ItemInfo from "./ItemInfo";

// const MenuCard = ({ cards }) => {
//   const { title, itemCards } = cards;
//   const [open, setOpen] = useState(true);

//   return (
//     <div className="mb-6 border-b pb-4">
//       {/* HEADER */}
//       <div
//         className="flex justify-between items-center cursor-pointer"
//         onClick={() => setOpen(!open)}
//       >
//         <h3 className="text-lg font-bold">
//           {title} ({itemCards?.length})
//         </h3>
//         <span className="text-xl">{open ? "⌃" : "⌄"}</span>
//       </div>

//       {/* ITEMS */}
//       {open && (
//         <div className="mt-4">
//           {itemCards?.map((item) => (
//             <ItemInfo key={item?.card?.info?.id} info={item?.card?.info} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MenuCard;
