import React from "react";

const Menu = () => {
  return (
    <div className=" flex items-start flex-col gap-y-1">
      <button className=" px-1 bg-orange-500 rounded-full text-sm text-[#e0e0e4]">
        Travel
      </button>
      <p className=" text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
        nobis dignissimos!
      </p>
      <p className=" font-bold dark:text-[#e0e0e4] text-gray-700">
        John Doe - <span className=" text-[12px] text-gray-500">4.03.2024</span>
      </p>
    </div>
  );
};

export default Menu;
