import React from "react";
import Menu from "./Menu";
import Editor from "./Editor";

const MenuLists = () => {
  return (
    <div className=" md:w-1/3 w-full flex flex-col gap-y-4">
      <div>
        {" "}
        <p className=" dark:text-[#ccc9c9] text-primary">What's hot</p>
        <h2>Most Popular</h2>
        <div>
          <Menu />
          <Menu />
          <Menu />
        </div>
      </div>
      <div>
        <p className=" dark:text-[#ccc9c9] text-primary">Discover bt topic</p>
        <h2>Categories</h2>
        <div className=" flex flex-wrap gap-x-2">
          <button className=" btn">Style</button>
          <button className=" btn">Fanshion</button>
          <button className=" btn">Food</button>
          <button className=" btn">Travel</button>
          <button className=" btn">Culture</button>
          <button className=" btn">Coding</button>
        </div>
      </div>
      <div className=" mt-3">
        <h2>Editor</h2>
        <Editor />
        <Editor />
        <Editor />
      </div>
    </div>
  );
};

export default MenuLists;
