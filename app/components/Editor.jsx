import Image from "next/image";
import React from "react";

const Editor = () => {
  return (
    <div className=" flex w-full items-center gap-x-1">
      <div className=" w-10 h-10 relative rounded-full overflow-hidden">
        <Image
          src={"/p1.jpg"}
          fill
          alt="category image"
          className=" object-cover"
        />
      </div>
      <div className=" flex items-start flex-col gap-y-1 max-w-[calc(100%-45px)]">
        <button className=" px-1 bg-orange-500 rounded-full text-sm text-[#e0e0e4]">
          Travel
        </button>
        <p className=" text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          nobis dignissimos!
        </p>
        <p className=" font-bold dark:text-[#e0e0e4] text-gray-700">
          John Doe -{" "}
          <span className=" text-[12px] text-gray-500">4.03.2024</span>
        </p>
      </div>
    </div>
  );
};

export default Editor;
