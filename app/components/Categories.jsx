import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className=" container padding-mergin">
      <h2>Popular Category</h2>
      <div className=" flex-between flex-wrap gap-4">
        <div className=" bg-teal-400 w-[150px] rounded-xl flex-center gap-x-2 p-1 cursor-pointer">
          <div className=" w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              src={"/p1.jpg"}
              fill
              alt="category image"
              className=" object-cover"
            />
          </div>
          <p className=" text-sm">Coding</p>
        </div>
        <div className=" bg-red-400 w-[150px] rounded-xl flex-center gap-x-2 p-1 cursor-pointer">
          <div className=" w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              src={"/p1.jpg"}
              fill
              alt="category image"
              className=" object-cover"
            />
          </div>
          <p className=" text-sm">Coding</p>
        </div>
        <div className=" bg-pink-400 w-[150px] rounded-xl flex-center gap-x-2 p-1 cursor-pointer">
          <div className=" w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              src={"/p1.jpg"}
              fill
              alt="category image"
              className=" object-cover"
            />
          </div>
          <p className=" text-sm">Coding</p>
        </div>
        <div className=" bg-violet-400 w-[150px] rounded-xl flex-center gap-x-2 p-1 cursor-pointer">
          <div className=" w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              src={"/p1.jpg"}
              fill
              alt="category image"
              className=" object-cover"
            />
          </div>
          <p className=" text-sm">Coding</p>
        </div>
        <div className=" bg-yellow-400 w-[150px] rounded-xl flex-center gap-x-2 p-1 cursor-pointer">
          <div className=" w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              src={"/p1.jpg"}
              fill
              alt="category image"
              className=" object-cover"
            />
          </div>
          <p className=" text-sm">Coding</p>
        </div>
        <div className=" bg-blue-400 w-[150px] rounded-xl flex-center gap-x-2 p-1 cursor-pointer">
          <div className=" w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              src={"/p1.jpg"}
              fill
              alt="category image"
              className=" object-cover"
            />
          </div>
          <p className=" text-sm">Coding</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
