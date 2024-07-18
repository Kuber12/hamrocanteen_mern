import React, {  useState } from "react";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import "./SignIn.css";
const SignIn = () => {
  const [data,setData] = useState();

  return (
    <div className="w-full h-[100vh] backgroundCss  flex justify-center items-center">
      <div className="w-[350px] space-y-3 backdrop-blur-sm   h-[450px] rounded-3xl  shadow-lg p-6 backdrop-filter bg-opacity-20 bg-white">
        <div className="w-full h-[40%]  flex justify-center items-center">
          <img className=" object-contain w-[20rem] h-[10rem]" src="./Logo.png" alt="logo image" />
        </div>
        <div className="w-full h-[60%]">
          <form action="" className="w-full h-[70%]">
            <div className="flex flex-col items-center justify-center w-full h-full gap-y-6">
            <div className="relative flex items-center justify-center w-full">
            <CiUser className="absolute left-10" size={18}/>
            <input type="text" className="px-3 pl-10 py-1 w-[15rem] rounded-2xl" placeholder="Username"/>
            </div>
            <div className="relative flex items-center justify-center w-full">
            <CiLock    className="absolute left-10" size={18}/>
            <input type="text" className="px-3 pl-10 py-1 w-[15rem] rounded-2xl" placeholder="Password"/>
            </div>
            <button className="px-8 py-1 font-bold text-white rounded-lg bg-[#393A3C]">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;