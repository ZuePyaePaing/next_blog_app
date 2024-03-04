import React from "react";
import Menu from "./Menu";
import Editor from "./Editor";

const MenuLists = () => {
  return (
    <div className=" md:w-1/3 w-full">
      <p className=" dark:text-[#ccc9c9] text-primary">What's hot</p>
      <h2>Most Popular</h2>
      <div>
        <Menu />
        <Menu />
        <Menu />
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
