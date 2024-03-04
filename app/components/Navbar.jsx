"use client";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaLinkedin,
} from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { navLinks } from "../constant";
import Auth from "./Auth";
import { useState } from "react";
import Darkmode from "./Darkmode";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full p-4 dark:bg-primary bg-text dark:text-text text-primary font-robo">
      <div className=" container flex-between">
        <div className="md:flex hidden items-center gap-x-4">
          <FaFacebookSquare size={25} color="#1877F2" />
          <FaInstagramSquare size={25} color="#E4405F" />
          <FaYoutubeSquare size={25} color="#FF0000" />
          <FaLinkedin size={25} color="#0077B5" />
        </div>
        <Link href={"/"}>
          <h1 className=" font-mons font-bold md:text-3xl text-xl">ZPPblog</h1>
        </Link>
        <div className=" flex items-center space-x-4 relative">
          <Darkmode />
          <div className=" md:flex hidden space-x-4 text-base ">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <Auth />
          </div>
          <div
            className={`absolute w-[230px] ${
              open ? "-right-6" : "-right-[350px]"
            } top-[42px] dark:bg-primary bg-gray-400 md:hidden flex flex-col p-4 text-base items-start gap-y-3 transition-all duration-200`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Auth />
          </div>
          <div className="md:hidden block">
            {!open ? (
              <IoMdMenu size={25} onClick={() => setOpen(true)} />
            ) : (
              <IoMdClose size={25} onClick={() => setOpen(false)} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
