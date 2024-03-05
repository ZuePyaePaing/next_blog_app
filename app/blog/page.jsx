import Image from "next/image";
import React from "react";
import { MenuLists, Commment } from "../components";

const DetailBlogPage = () => {
  return (
    <section className="darkmode">
      <div className=" container py-4">
        <div className=" flex-between md:flex-row  gap-y-5 flex-col-reverse">
          <div className=" md:w-1/2 w-full flex flex-col justify-between">
            <h1 className=" md:text-4xl mb-4  font-bold  ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h1>
            <div className=" flex gap-x-3 items-center">
              <div className=" w-10 h-10 relative rounded-full overflow-hidden">
                <Image
                  src={"/p1.jpg"}
                  fill
                  alt="category image"
                  className=" object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-gray-600 dark:text-[#d7dad6] text-[18px]">
                  John Doe
                </p>
                <p>4 April 2024</p>
              </div>
            </div>
          </div>
          <div className=" relative md:w-1/2 overflow-hidden rounded-xl h-80 w-full ">
            <Image src={"/p1.jpg"} alt="photo" fill className=" object-cover" />
          </div>
        </div>
        <div className=" flex md:flex-row flex-col gap-y-7 my-4">
          <div className=" md:w-2/3 w-full flex items-start flex-col">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              accusantium numquam aliquid, modi asperiores distinctio labore
              autem ea itaque impedit, excepturi delectus nihil repellendus,
              eius sequi? A asperiores cupiditate aliquid!
            </p>
            <div className="w-full">
              <h2>Comments</h2>
              <form className=" w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="write a comment..."
                  className="w-[calc(100%-150px)] border-none py-2 px-4 outline-none  text-primary dark:bg-text bg-gray-500"
                />
                <button className="py-2 px-3 bg-green-600 text-text rounded-tr-lg rounded-br-lg text-[17px] ">
                  Send
                </button>
              </form>
              <Commment />
              <Commment /> <Commment /> <Commment />
            </div>
          </div>
          <MenuLists />
        </div>
      </div>
    </section>
  );
};

export default DetailBlogPage;
