import React from "react";
import { CardLists, Categories, Features, MenuLists } from "./components";

const Home = () => {
  return (
    <section className="darkmode padding-mergin ">
      <Features />
      <Categories />
      <div className=" container flex md:flex-row flex-col gap-y-7">
        <CardLists />
        <MenuLists />
      </div>
    </section>
  );
};

export default Home;
