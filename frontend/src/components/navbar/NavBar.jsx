import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="relative bg-[#FFF0E9] w-full h-[18vh] pt-5 items-center  flex justify-between px-20">
      <div className="opacity-0 w-[15%]">Logo</div>
      <div className="flex h-[80%] text-xl font-semibold shadow-2xl rounded-full w-[50%] justify-evenly items-center bg-[#FFFFFF] top-10 ">
        <Link to={"/"}>Home</Link>
        <Link to={"/menu"}>Menu</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact Us</Link>
      </div>
      <Link to={"/signIn"} className="text-xl" ><button className="px-5 py-2 border-2 border-black rounded-full">Login</button> </Link>
    </div>
  );
};

export default NavBar;
