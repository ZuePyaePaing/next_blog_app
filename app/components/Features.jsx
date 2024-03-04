import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className=" container darkmode">
      <h1 className=" md:text-4xl text-2xl font-bold md:mb-7 mb-3 ">
        Lorem ipsum dolor sit.
      </h1>
      <div className=" flex md:flex-row flex-col items-center gap-4 ">
        <div className="md:w-1/3 w-full">
          <Image
            src={"/p1.jpg"}
            width={350}
            height={450}
            alt="photo"
            layout="responsive"
          />
        </div>
        <div className=" md:w-2/3 w-full">
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur apdipisicing elit. Sint, in
            non cupiditate laudantium accusantium illo maiores accusamus natus
            suscipit quibusdam?
          </p>
          <button className=" btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
