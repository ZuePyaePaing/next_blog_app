import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
const Darkmode = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div className=" flex-between w-[70px] h-[26px] bg-gray-500 rounded-xl px-1 relative">
      <IoMdSunny
        size={24}
        className=" relative z-20 dark:text-primary text-text"
        onClick={toggle}
      />
      <div
        className={`w-[26px] h-full dark:bg-text bg-primary rounded-full absolute transition-all duration-200 ${
          theme === "dark" ? "left-10" : "left-1"
        } `}
      />
      <IoMdMoon
        size={24}
        className=" relative z-20 dark:text-primary text-white"
        onClick={toggle}
      />
    </div>
  );
  ("");
};

export default Darkmode;
