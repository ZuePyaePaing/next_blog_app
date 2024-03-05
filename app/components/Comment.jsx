import Image from "next/image";
import React from "react";

const Comment = () => {
  return (
    <div className=" comments">
        <div className=" flex  gap-x-3 items-center mt-5">
          <div className=" relative w-10 h-10 rounded-full overflow-hidden">
            <Image src={"/p1.jpg"} fill alt="account" />
          </div>
          <div>
            <p>John Doe</p>
            <p>4.03.2024</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, at.
        </p>
      </div>
  );
};

export default Comment;
